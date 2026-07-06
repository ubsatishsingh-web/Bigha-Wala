import express from "express";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { GoogleGenAI, GenerateContentParameters } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK lazily to avoid crashing on start if API key is missing
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required. Please set it in the Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function generateContentWithFallback(ai: GoogleGenAI, params: { contents: any; config?: any }) {
  const models = ["gemini-3.5-flash", "gemini-flash-latest", "gemini-3.1-flash-lite"];
  let lastError: any = null;

  for (const model of models) {
    try {
      console.log(`Attempting generateContent with model: ${model}`);
      return await ai.models.generateContent({
        model: model,
        contents: params.contents,
        config: params.config,
      });
    } catch (error: any) {
      lastError = error;
      console.warn(`Model ${model} failed, trying next fallback if available. Error:`, error.message || error);
    }
  }

  console.error("All Gemini models failed. Last error:", lastError);
  throw lastError || new Error("Failed to generate content with any model.");
}

const SYSTEM_INSTRUCTION = `You are BighaWala Expert — an AI assistant specialized in Bihar land measurement, revenue records, property laws, and real estate.
You always respond in simple Hindi AND English (bilingual). 

You have expert knowledge of:
- Bigha, Katha, Dhur, Dismil, Decimal conversions (Bihar-specific, where 1 Bigha = 20 Katha = 400 Dhur).
- Explain that in Bihar, the exact size of Katha and Dhur depends on the local 'Laggi' (लग्गी) size, which typically varies from 4 हाथ to 8 हाथ (standard/default is 5.5 हाथ in many districts like Patna).
  - 1 Katha = 20 Dhur.
  - Formula for 1 Dhur in Square Feet = (Laggi in cubits * 1.5)^2
  - If Laggi is 5.5 cubits (हाथ): 
    - 1 Dhur = (5.5 * 1.5)^2 = (8.25)^2 = 68.0625 sq ft.
    - 1 Katha = 20 * 68.0625 = 1,361.25 sq ft.
    - 1 Bigha = 20 Katha = 27,225 sq ft.
    - 1 Acre = 43,560 sq ft = 100 Dismil (Decimal).
    - 1 Bigha = 27,225 / 43,560 = 0.625 Acre (62.5 Dismil).
- Bhulekh Bihar portal (biharbhumi.bihar.gov.in), Dakhil Kharij (mutation), Jamabandi (Khesra, Khata, Register II), LPC (Land Possession Certificate), registry process, Minimum Valuation Register (MVR).
- Government processes for mutation (Dakhil Kharij), fees, timelines, land corrections (Parimarjan).
- Bihar land laws, farmer rights, partition suite (बंटवारा), and the ongoing land survey process (विशेष सर्वेक्षण बिहार).

Response Guidelines:
1. Always give practical, simple answers that a village-level user can understand.
2. Structure your answer clearly with bullet points and bold highlights.
3. Be bilingual: write in both Hindi (Devanagari) and English (or simple Hinglish where helpful) so that a wide range of users in Bihar can read and comprehend it.
4. Never use complex legal jargon without explaining it simply.
5. Maintain a friendly, supportive, and trustworthy tone.
6. Remind users that for official, legally binding and governmental purposes, they should refer to the government records on the Bihar Bhumi portal (biharbhumi.bihar.gov.in) or consult their local Revenue Karamchari/Anchal Adhikari (CO).`;

// API Routes
app.post("/api/explain-document", async (req, res) => {
  try {
    const { documentText } = req.body;
    if (!documentText || typeof documentText !== "string" || !documentText.trim()) {
      return res.status(400).json({ error: "कृपया समझाने के लिए दस्तावेज का पाठ (text) प्रदान करें। (Please provide land document text to explain.)" });
    }

    const ai = getGeminiClient();
    const explainerPrompt = `दस्तावेज का पाठ (Pasted Land Document Text):
"""
${documentText}
"""

कृपया इस दस्तावेज को बहुत ही सरल हिंदी और अंग्रेजी (bilingual) में समझाएं ताकि एक आम नागरिक या किसान इसे आसानी से समझ सके।`;

    const EXPLAINER_SYSTEM_INSTRUCTION = `You are an expert in Bihar revenue laws, land registry, and land measurement (BighaWala Document Expert).
Your job is to read and explain text copied or OCR-pasted from Bihar land documents (like Jamabandi/Register II, Kewala/Sale Deed, Mutation Status, LPC, Parimarjan, Khatiyan).

Structure your response into these exact sections with clear bilingual headings, separated by clean paragraphs and bullets:
1. **दस्तावेज का प्रकार (Document Type)**: Identify what type of document this appears to be (e.g. Jamabandi Register II, Sale Deed, Khatiyan, LPC, etc.).
2. **भू-स्वामी का नाम (Owner / Ryot Name)**: State clearly who owns or is registered on this land. Mention any joint-owners if present.
3. **जमीन का क्षेत्रफल (Land Size & Units)**: Specify the area in Bigha, Katha, Dhur, Decimal, or Acres as mentioned in the text. Explicitly calculate/convert it if multiple values exist.
4. **खाता, खेसरा और थाना नंबर (Land Identifiers)**: List the Khata number, Khesra (Plot) number, Thana/Mauza numbers, and Tauzi if visible in the text.
5. **सरल व्याख्या (Simple Explanation in Hindi/English)**: Explain what the legal/revenue terms in the document actually mean. Explain it simply.
6. **कोई समस्या या टिप्पणी (Potential Issues / Red Flags)**: Point out any encumbrances, disputes, missing details, tax dues (लगान बकाया), or warnings noted in the text.
7. **भविष्य के लिए सुझाव (Recommended Next Actions)**: Give practical, step-by-step advice on what the user should do next (e.g., download LPC, verify Jamabandi online on biharbhumi.bihar.gov.in, perform mutation, or pay online Lagan).

Always use simple, compassionate, and trustworthy language. Write in a friendly bilingual format (Hindi and English). Use bullet points, clear spacing, and clean markdown for high readability.`;

    const response = await generateContentWithFallback(ai, {
      contents: explainerPrompt,
      config: {
        systemInstruction: EXPLAINER_SYSTEM_INSTRUCTION,
        temperature: 0.2,
      },
    });

    const explanation = response.text || "दस्तावेज का विश्लेषण नहीं किया जा सका। कृपया पुनः प्रयास करें।";
    return res.json({ explanation });
  } catch (error: any) {
    console.error("Explainer API Error:", error);
    return res.status(500).json({
      error: error.message || "Internal Server Error during Land Document Explainer process.",
      isConfigMissing: !process.env.GEMINI_API_KEY,
    });
  }
});

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages array provided." });
    }

    // Prepare content for Gemini API
    const formattedContents = messages.map((m: { role: string; content: string }) => {
      return {
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      };
    });

    const ai = getGeminiClient();
    const response = await generateContentWithFallback(ai, {
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "माफ़ी चाहते हैं, मैं आपकी बात समझ नहीं पाया। कृपया पुनः प्रयास करें। (Apologies, I couldn't process your request. Please try again.)";
    return res.json({ message: replyText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({
      error: error.message || "Internal Server Error during AI Chat process.",
      isConfigMissing: !process.env.GEMINI_API_KEY,
    });
  }
});

// Serve robots.txt dynamically with correct content type
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(
    `User-agent: *\nAllow: /\n\nSitemap: https://www.bighawala.com/sitemap.xml`
  );
});

// Serve sitemap.xml dynamically with correct content type
app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.bighawala.com/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.bighawala.com/bigha-calculator/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.bighawala.com/dakhil-kharij-bihar/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.bighawala.com/land-rate-patna/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.bighawala.com/land-rates.html</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.bighawala.com/bhulekh-bihar/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.bighawala.com/lpc-bihar/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.bighawala.com/privacy-policy/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.bighawala.com/disclaimer/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.bighawala.com/circle-rate-bihar.html</loc>
    <lastmod>2026-07-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.bighawala.com/kisan-credit-card-bihar.html</loc>
    <lastmod>2026-07-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.bighawala.com/pm-awas-yojana-bihar.html</loc>
    <lastmod>2026-07-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`);
});

// Explicitly serve static legal pages to bypass SPA routing and ensure AdSense approval
app.get(["/disclaimer", "/disclaimer/", "/disclaimer/index.html"], (req, res) => {
  const prodPath = path.join(process.cwd(), "dist/disclaimer/index.html");
  const devPath = path.join(process.cwd(), "public/disclaimer/index.html");
  if (process.env.NODE_ENV === "production" && fs.existsSync(prodPath)) {
    res.sendFile(prodPath);
  } else {
    res.sendFile(devPath);
  }
});

app.get(["/privacy-policy", "/privacy-policy/", "/privacy-policy/index.html"], (req, res) => {
  const prodPath = path.join(process.cwd(), "dist/privacy-policy/index.html");
  const devPath = path.join(process.cwd(), "public/privacy-policy/index.html");
  if (process.env.NODE_ENV === "production" && fs.existsSync(prodPath)) {
    res.sendFile(prodPath);
  } else {
    res.sendFile(devPath);
  }
});

// Helper to serve HTML files correctly in both Dev and Prod
function serveHtmlPage(req: express.Request, res: express.Response, fileName: string) {
  const prodPath = path.join(process.cwd(), "dist", fileName);
  const devPath = path.join(process.cwd(), fileName);
  if (process.env.NODE_ENV === "production") {
    if (fs.existsSync(prodPath)) {
      res.sendFile(prodPath);
    } else if (fs.existsSync(devPath)) {
      res.sendFile(devPath);
    } else {
      res.status(404).send("Page not found / पेज नहीं मिला");
    }
  } else {
    res.sendFile(devPath);
  }
}

// Explicitly serve SEO-friendly static tool and guide pages directly from the workspace root or dist
app.get(["/", "/index", "/index.html"], (req, res) => {
  serveHtmlPage(req, res, "index.html");
});

app.get(["/bigha-calculator", "/bigha-calculator/", "/bigha-calculator.html"], (req, res) => {
  serveHtmlPage(req, res, "bigha-calculator.html");
});

app.get(["/dakhil-kharij", "/dakhil-kharij/", "/dakhil-kharij.html", "/dakhil-kharij-bihar", "/dakhil-kharij-bihar/"], (req, res) => {
  serveHtmlPage(req, res, "dakhil-kharij.html");
});

app.get(["/land-rate-patna", "/land-rate-patna/", "/land-rate-patna.html"], (req, res) => {
  serveHtmlPage(req, res, "land-rate-patna.html");
});

app.get(["/land-rates", "/land-rates/", "/land-rates.html"], (req, res) => {
  serveHtmlPage(req, res, "land-rates.html");
});

app.get(["/circle-rate-bihar", "/circle-rate-bihar/", "/circle-rate-bihar.html"], (req, res) => {
  serveHtmlPage(req, res, "circle-rate-bihar.html");
});

app.get(["/kisan-credit-card-bihar", "/kisan-credit-card-bihar/", "/kisan-credit-card-bihar.html"], (req, res) => {
  serveHtmlPage(req, res, "kisan-credit-card-bihar.html");
});

app.get(["/pm-awas-yojana-bihar", "/pm-awas-yojana-bihar/", "/pm-awas-yojana-bihar.html"], (req, res) => {
  serveHtmlPage(req, res, "pm-awas-yojana-bihar.html");
});

app.get(["/bhulekh", "/bhulekh/", "/bhulekh.html", "/bhulekh-bihar", "/bhulekh-bihar/"], (req, res) => {
  serveHtmlPage(req, res, "bhulekh.html");
});

app.get(["/lpc-bihar", "/lpc-bihar/", "/lpc-bihar.html"], (req, res) => {
  serveHtmlPage(req, res, "lpc-bihar.html");
});

app.get(["/ask-expert", "/ask-expert/", "/ask-expert.html"], (req, res) => {
  serveHtmlPage(req, res, "ask-expert.html");
});

app.get(["/document-explainer", "/document-explainer/", "/document-explainer.html"], (req, res) => {
  serveHtmlPage(req, res, "document-explainer.html");
});

app.get(["/setup-guide", "/setup-guide/", "/setup-guide.html"], (req, res) => {
  serveHtmlPage(req, res, "setup-guide.html");
});

app.get(["/contact", "/contact/", "/contact.html"], (req, res) => {
  serveHtmlPage(req, res, "contact.html");
});

app.get(["/jamabandi", "/jamabandi/", "/jamabandi.html"], (req, res) => {
  serveHtmlPage(req, res, "jamabandi.html");
});

app.get(["/registry-bihar", "/registry-bihar/", "/registry-bihar.html"], (req, res) => {
  serveHtmlPage(req, res, "registry-bihar.html");
});

app.get(["/about", "/about/", "/about.html"], (req, res) => {
  serveHtmlPage(req, res, "about.html");
});

// Serve Frontend App
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`BighaWala Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start BighaWala Server:", err);
});
