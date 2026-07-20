import React, { useState } from "react";
import { Copy, Check, Search, Share2, Link, Map, Layers, FileCode, Globe, CheckCircle, Info, Sparkles, BookOpen } from "lucide-react";

interface MetaBlock {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogType: string;
  ogImage: string;
  htmlBlock: string;
  schemaBlock: string;
  faqSnippet: { question: string; answer: string }[];
}

export default function SeoMetaManager() {
  const [activeTab, setActiveTab] = useState<string>("homepage");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const metaPages: MetaBlock[] = [
    // === 1. HOMEPAGE ===
    {
      id: "homepage",
      tabLabel: "1. Homepage (मुख्य पृष्ठ)",
      title: "BighaWala - Bihar Land Calculator, Records & Laws",
      description: "Bihar land measurement converter, Bhulekh registry records, Dakhil Kharij guidelines, and district land rates in simple Hindi and English.",
      keywords: "bighawala, bihar land records, bigha to katha converter, dakhil kharij bihar, land rates patna, bihar land measurement, bhulekh bihar, register 2 download",
      canonical: "https://bighawala.com/",
      ogType: "website",
      ogImage: "https://bighawala.com/assets/og-homepage.png",
      htmlBlock: `<!-- Page: Homepage -->
<title>BighaWala - Bihar Land Calculator, Records & Laws</title>
<meta name="description" content="Bihar land measurement converter, Bhulekh registry records, Dakhil Kharij guidelines, and district land rates in simple Hindi and English." />
<meta name="keywords" content="bighawala, bihar land records, bigha to katha converter, dakhil kharij bihar, land rates patna, bihar land measurement, bhulekh bihar, register 2 download" />
<link rel="canonical" href="https://bighawala.com/" />

<!-- Open Graph / Facebook / WhatsApp Sharing -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://bighawala.com/" />
<meta property="og:title" content="BighaWala - Bihar Land Calculator, Records & Laws" />
<meta property="og:description" content="Bihar land measurement converter, Bhulekh registry records, Dakhil Kharij guidelines, and district land rates in simple Hindi and English." />
<meta property="og:image" content="https://bighawala.com/assets/og-homepage.png" />
<meta property="og:locale" content="hi_IN" />
<meta property="og:alternateName" content="बीघावाला" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://bighawala.com/" />
<meta property="twitter:title" content="BighaWala - Bihar Land Calculator, Records & Laws" />
<meta property="twitter:description" content="Bihar land measurement converter, Bhulekh registry records, Dakhil Kharij guidelines, and district land rates in simple Hindi and English." />
<meta property="twitter:image" content="https://bighawala.com/assets/og-homepage.png" />`,
      schemaBlock: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bighawala.com/#organization",
      "name": "BighaWala",
      "url": "https://bighawala.com/",
      "logo": "https://bighawala.com/assets/logo.png",
      "description": "Bihar's leading land calculation, translation, and revenue law digital portal.",
      "sameAs": [
        "https://www.facebook.com/bighawala",
        "https://twitter.com/bighawala"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://bighawala.com/#website",
      "url": "https://bighawala.com/",
      "name": "BighaWala",
      "publisher": {
        "@id": "https://bighawala.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://bighawala.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://bighawala.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "बिहार में 1 बीघा में कितना कट्ठा होता है?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "बिहार में सामान्यतः 1 बीघा में ठीक 20 कट्ठा जमीन होती है। हालांकि, अलग-अलग अंचलों में लग्गी की लंबाई के आधार पर कट्ठा का वर्ग फुट आकार बदल सकता है, लेकिन 1 बीघा = 20 कट्ठा का अनुपात हमेशा स्थिर रहता है।"
          }
        },
        {
          "@type": "Question",
          "name": "दाखिल खारिज क्या होता है और इसकी फीस कितनी है?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "दाखिल खारिज (Mutation) का अर्थ है सरकारी अभिलेखों (Register II) में पुराने मालिक का नाम हटाकर नए खरीदार का नाम दर्ज करना। बिहार में ऑनलाइन दाखिल खारिज करने की सरकारी फीस बिल्कुल निःशुल्क (₹0) है।"
          }
        }
      ]
    }
  ]
}`,
      faqSnippet: [
        { question: "बिहार में 1 बीघा में कितना कट्ठा होता है?", answer: "बिहार में सामान्यतः 1 बीघा में ठीक 20 कट्ठा जमीन होती है। अनुपात हमेशा स्थिर रहता है।" },
        { question: "दाखिल खारिज क्या होता है और इसकी फीस कितनी है?", answer: "दाखिल खारिज (Mutation) का अर्थ सरकारी रिकॉर्ड में नाम चढ़ाना है। बिहार सरकार इसकी कोई फीस नहीं लेती।" }
      ]
    },

    // === 2. BIGHA CALCULATOR PAGE ===
    {
      id: "calculator",
      tabLabel: "2. Bigha Calculator (कैलकुलेटर)",
      title: "Bigha to Katha & Sq Ft Calculator Bihar | BighaWala",
      description: "Convert Bigha, Katha, Dhur, and Dismil to Square Feet in Bihar. Accurate online land converter based on district-wise Laggi sizes.",
      keywords: "bigha to katha converter, bigha to square feet bihar, katha to sqft calculator, dhur to sqft bihar, dismil to katha bihar, land unit converter bihar",
      canonical: "https://bighawala.com/calculator/",
      ogType: "website",
      ogImage: "https://bighawala.com/assets/og-calculator.png",
      htmlBlock: `<!-- Page: Bigha Calculator -->
<title>Bigha to Katha & Sq Ft Calculator Bihar | BighaWala</title>
<meta name="description" content="Convert Bigha, Katha, Dhur, and Dismil to Square Feet in Bihar. Accurate online land converter based on district-wise Laggi sizes." />
<meta name="keywords" content="bigha to katha converter, bigha to square feet bihar, katha to sqft calculator, dhur to sqft bihar, dismil to katha bihar, land unit converter bihar" />
<link rel="canonical" href="https://bighawala.com/calculator/" />

<!-- Open Graph / Facebook / WhatsApp Sharing -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://bighawala.com/calculator/" />
<meta property="og:title" content="Bigha to Katha & Sq Ft Calculator Bihar | BighaWala" />
<meta property="og:description" content="Convert Bigha, Katha, Dhur, and Dismil to Square Feet in Bihar. Accurate online land converter based on district-wise Laggi sizes." />
<meta property="og:image" content="https://bighawala.com/assets/og-calculator.png" />
<meta property="og:locale" content="hi_IN" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://bighawala.com/calculator/" />
<meta property="twitter:title" content="Bigha to Katha & Sq Ft Calculator Bihar | BighaWala" />
<meta property="twitter:description" content="Convert Bigha, Katha, Dhur, and Dismil to Square Feet in Bihar. Accurate online land converter based on district-wise Laggi sizes." />
<meta property="twitter:image" content="https://bighawala.com/assets/og-calculator.png" />`,
      schemaBlock: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://bighawala.com/calculator/#webapp",
      "url": "https://bighawala.com/calculator/",
      "name": "BighaWala Bihar Land Calculator",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "description": "Calculates regional Bihar land conversions from Bigha, Katha, Dhur and Dismil to standard square feet based on variable district Laggi lengths.",
      "publisher": {
        "@id": "https://bighawala.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://bighawala.com/calculator/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "लग्गी (Laggi) क्या होती है और इससे कट्ठा का माप क्यों बदलता है?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "लग्गी बांस का वह डंडा है जिससे अमीन पैमाइश करते हैं। बिहार में लग्गी 4 से 9 हाथ लंबी होती है। पटना में 5.5 हाथ की लग्गी से 1 कट्ठा = 1361.25 sq ft होता है, जबकि मुजफ्फरपुर में 6 हाथ लग्गी के कारण 1 कट्ठा = 1620 sq ft होता है।"
          }
        },
        {
          "@type": "Question",
          "name": "1 कट्ठा में कितने डिसमिल होते हैं?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "पटना (5.5 हाथ की लग्गी) के अनुसार 1 कट्ठा जमीन में ठीक 3.125 डिसमिल होते हैं। यह लग्गी के आकार बदलने से थोड़ा बहुत बदल सकता है।"
          }
        }
      ]
    }
  ]
}`,
      faqSnippet: [
        { question: "लग्गी (Laggi) क्या है और इससे कट्ठा क्यों बदलता है?", answer: "लग्गी बांस का डंडा है। पटना में 5.5 हाथ (1 कट्ठा = 1361.25 Sq Ft), मुजफ्फरपुर में 6 हाथ (1 कट्ठा = 1620 Sq Ft) होती है।" },
        { question: "1 कट्ठा में कितने डिसमिल होते हैं?", answer: "पटना के अनुसार 1 कट्ठा जमीन में 3.125 डिसमिल होते हैं।" }
      ]
    },

    // === 3. DAKHIL KHARIJ GUIDE PAGE ===
    {
      id: "dakhil-kharij",
      tabLabel: "3. Dakhil Kharij (दाखिल खारिज)",
      title: "Dakhil Kharij Online Bihar 2026: Apply & Track | BighaWala",
      description: "Step-by-step guide to apply for land mutation (Dakhil Kharij) online on Bihar Bhumi portal. Check status, correct errors, and track documents.",
      keywords: "dakhil kharij online bihar, land mutation bihar, bihar bhumi mutation process, check dakhil kharij status, bihar bhumi online, mutation fee bihar",
      canonical: "https://bighawala.com/dakhil-kharij-guide/",
      ogType: "article",
      ogImage: "https://bighawala.com/assets/og-dakhil-kharij.png",
      htmlBlock: `<!-- Page: Dakhil Kharij Guide -->
<title>Dakhil Kharij Online Bihar 2026: Apply & Track | BighaWala</title>
<meta name="description" content="Step-by-step guide to apply for land mutation (Dakhil Kharij) online on Bihar Bhumi portal. Check status, correct errors, and track documents." />
<meta name="keywords" content="dakhil kharij online bihar, land mutation bihar, bihar bhumi mutation process, check dakhil kharij status, bihar bhumi online, mutation fee bihar" />
<link rel="canonical" href="https://bighawala.com/dakhil-kharij-guide/" />

<!-- Open Graph / Facebook / WhatsApp Sharing -->
<meta property="og:type" content="article" />
<meta property="og:url" content="https://bighawala.com/dakhil-kharij-guide/" />
<meta property="og:title" content="Dakhil Kharij Online Bihar 2026: Apply & Track | BighaWala" />
<meta property="og:description" content="Step-by-step guide to apply for land mutation (Dakhil Kharij) online on Bihar Bhumi portal. Check status, correct errors, and track documents." />
<meta property="og:image" content="https://bighawala.com/assets/og-dakhil-kharij.png" />
<meta property="og:locale" content="hi_IN" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://bighawala.com/dakhil-kharij-guide/" />
<meta property="twitter:title" content="Dakhil Kharij Online Bihar 2026: Apply & Track | BighaWala" />
<meta property="twitter:description" content="Step-by-step guide to apply for land mutation (Dakhil Kharij) online on Bihar Bhumi portal. Check status, correct errors, and track documents." />
<meta property="twitter:image" content="https://bighawala.com/assets/og-dakhil-kharij.png" />`,
      schemaBlock: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "@id": "https://bighawala.com/dakhil-kharij-guide/#howto",
      "name": "बिहार में ऑनलाइन दाखिल खारिज (Dakhil Kharij) आवेदन प्रक्रिया",
      "description": "यह गाइड बिहार भूमि सरकारी पोर्टल पर ऑनलाइन दाखिल खारिज आवेदन करने के लिए सरल चरणबद्ध जानकारी देती है।",
      "totalTime": "PT15M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": "0"
      },
      "step": [
        {
          "@type": "HowToStep",
          "name": "रजिस्ट्रेशन एवं लॉगिन",
          "text": "आधिकारिक बिहार भूमि पोर्टल (biharbhumi.bihar.gov.in) पर जाएं, अपना मोबाइल नंबर व ओटीपी डालकर यूजर अकाउंट बनाकर लॉगिन करें।"
        },
        {
          "@type": "HowToStep",
          "name": "दस्तावेज विवरण भरें",
          "text": "केवाला (Sale Deed) के अनुसार जिला, अंचल, मौजा का चयन करें। फिर केवाला डीड संख्या, तारीख और कुल राशि दर्ज करें।"
        },
        {
          "@type": "HowToStep",
          "name": "क्रेता और विक्रेता की जानकारी",
          "text": "क्रेता (Buyer) और विक्रेता (Seller) दोनों का नाम, पिता का नाम, जाति, मोबाइल नंबर और पता स्पष्ट भरें।"
        },
        {
          "@type": "HowToStep",
          "name": "PDF डीड अपलोड करें",
          "text": "अपनी रजिस्ट्री डीड की सभी पृष्ठों को मिलाकर एक साफ PDF फाइल बनाएं (2MB से कम) और उसे अपलोड कर फाइनल सबमिट करें।"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://bighawala.com/dakhil-kharij-guide/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "दाखिल खारिज आवेदन के कितने दिन बाद म्यूटेशन रसीद मिलती है?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "बिहार लोक सेवा के अधिकार (RTPS) कानून के तहत दाखिल खारिज की प्रक्रिया सामान्यतः 21 से 45 कार्य दिवसों (Working Days) के भीतर अंचल अधिकारी (CO) द्वारा पूरी की जाती है, बशर्ते कोई आपत्ति दर्ज न हो।"
          }
        }
      ]
    }
  ]
}`,
      faqSnippet: [
        { question: "दाखिल खारिज प्रक्रिया में कितना दिन लगता है?", answer: "बिहार आरटीपीएस नियमों के अनुसार दाखिल खारिज प्रक्रिया आम तौर पर 21 से 45 दिनों में पूरी होती है।" }
      ]
    },

    // === 4. DISTRICT LAND RATE PAGE TEMPLATE ===
    {
      id: "district-template",
      tabLabel: "4. District Land Rates (जिला दर - टेम्पलेट)",
      title: "[District Name] Land Rates 2026: Govt MVR & Circle Rates | BighaWala",
      description: "Check official [District Name] land registry rates, government minimum valuation register (MVR), and current market plot prices per Katha and Decimal.",
      keywords: "[district name] land rate, circle rate [district name], mvr rate [district name], plot cost in [district name] bihar, register 2 [district name] online",
      canonical: "https://bighawala.com/[district-name]-land-rate/",
      ogType: "website",
      ogImage: "https://bighawala.com/assets/og-district.png",
      htmlBlock: `<!-- Page: District Land Rate Template (Replace [District Name] & [district-name] with real values) -->
<title>[District Name] Land Rates 2026: Govt MVR & Circle Rates | BighaWala</title>
<meta name="description" content="Check official [District Name] land registry rates, government minimum valuation register (MVR), and current market plot prices per Katha and Decimal." />
<meta name="keywords" content="[district name] land rate, circle rate [district name], mvr rate [district name], plot cost in [district name] bihar, register 2 [district name] online" />
<link rel="canonical" href="https://bighawala.com/[district-name]-land-rate/" />

<!-- Open Graph / Facebook / WhatsApp Sharing -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://bighawala.com/[district-name]-land-rate/" />
<meta property="og:title" content="[District Name] Land Rates 2026: Govt MVR & Circle Rates | BighaWala" />
<meta property="og:description" content="Check official [District Name] land registry rates, government minimum valuation register (MVR), and current market plot prices per Katha and Decimal." />
<meta property="og:image" content="https://bighawala.com/assets/og-district.png" />
<meta property="og:locale" content="hi_IN" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://bighawala.com/[district-name]-land-rate/" />
<meta property="twitter:title" content="[District Name] Land Rates 2026: Govt MVR & Circle Rates | BighaWala" />
<meta property="twitter:description" content="Check official [District Name] land registry rates, government minimum valuation register (MVR), and current market plot prices per Katha and Decimal." />
<meta property="twitter:image" content="https://bighawala.com/assets/og-district.png" />`,
      schemaBlock: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://bighawala.com/[district-name]-land-rate/#localbusiness",
      "name": "BighaWala [District Name] Land Desk",
      "url": "https://bighawala.com/[district-name]-land-rate/",
      "image": "https://bighawala.com/assets/og-district.png",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "[District Name]",
        "addressRegion": "Bihar",
        "addressCountry": "IN"
      },
      "description": "Local intelligence, government circle rates (MVR), property price history, and safe land buying tips for [District Name] district in Bihar."
    },
    {
      "@type": "FAQPage",
      "@id": "https://bighawala.com/[district-name]-land-rate/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[District Name] में जमीन की रजिस्ट्री चार्ज कितना लगता है?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "बिहार के नियम अनुसार, [District Name] में जमीन की रजिस्ट्री पर 6% स्टांप ड्यूटी (Stamp Duty) और 2% निबंधन शुल्क (Registration Fee) कुल मिलाकर सर्किल रेट (MVR) का 8% सरकारी खर्च लगता है।"
          }
        }
      ]
    }
  ]
}`,
      faqSnippet: [
        { question: "[District Name] में रजिस्ट्री चार्ज कितना है?", answer: "बिहार के सामान्य नियम अनुसार, सरकारी सर्किल रेट (MVR) का कुल 8% (6% स्टांप ड्यूटी + 2% रजिस्ट्री फीस) सरकारी शुल्क लगता है।" }
      ]
    },

    // === 5. AI CHATBOT / EXPERT PAGE ===
    {
      id: "ai-expert",
      tabLabel: "5. AI Chatbot (एआई विशेषज्ञ)",
      title: "BighaWala AI: Free Bihar Land Law & Amin Expert Chatbot",
      description: "Ask property questions in Hindi & English. Get instant expert help on Bihar land laws, registry, Dakhil Kharij, and partition rules.",
      keywords: "bihar land law chatbot, ameen ai bihar, legal land adviser online, land registration help bihar, bighawala ai expert, property dispute solutions",
      canonical: "https://bighawala.com/ai-expert/",
      ogType: "website",
      ogImage: "https://bighawala.com/assets/og-ai-expert.png",
      htmlBlock: `<!-- Page: AI Chatbot / Expert -->
<title>BighaWala AI: Free Bihar Land Law & Amin Expert Chatbot</title>
<meta name="description" content="Ask property questions in Hindi & English. Get instant expert help on Bihar land laws, registry, Dakhil Kharij, and partition rules." />
<meta name="keywords" content="bihar land law chatbot, ameen ai bihar, legal land adviser online, land registration help bihar, bighawala ai expert, property dispute solutions" />
<link rel="canonical" href="https://bighawala.com/ai-expert/" />

<!-- Open Graph / Facebook / WhatsApp Sharing -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://bighawala.com/ai-expert/" />
<meta property="og:title" content="BighaWala AI: Free Bihar Land Law & Amin Expert Chatbot" />
<meta property="og:description" content="Ask property questions in Hindi & English. Get instant expert help on Bihar land laws, registry, Dakhil Kharij, and partition rules." />
<meta property="og:image" content="https://bighawala.com/assets/og-ai-expert.png" />
<meta property="og:locale" content="hi_IN" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://bighawala.com/ai-expert/" />
<meta property="twitter:title" content="BighaWala AI: Free Bihar Land Law & Amin Expert Chatbot" />
<meta property="twitter:description" content="Ask property questions in Hindi & English. Get instant expert help on Bihar land laws, registry, Dakhil Kharij, and partition rules." />
<meta property="twitter:image" content="https://bighawala.com/assets/og-ai-expert.png" />`,
      schemaBlock: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://bighawala.com/ai-expert/#webapp",
      "url": "https://bighawala.com/ai-expert/",
      "name": "BighaWala AI Expert Advisor",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "description": "An artificial intelligence conversational system trained on Bihar Revenue and Land Reform laws to provide bilingual, friendly answers regarding land mutation, registry, and measurements.",
      "publisher": {
        "@id": "https://bighawala.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://bighawala.com/ai-expert/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "क्या बीघावाला एआई चैटबॉट का उपयोग मुफ्त है?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "हां, बीघावाला एआई एक्सपर्ट चैटबॉट बिहार के किसानों और भूमि खरीदारों के लिए पूर्णतः मुफ्त और सुलभ है। आप हिंदी और अंग्रेजी दोनों भाषाओं में प्रश्न पूछ सकते हैं।"
          }
        }
      ]
    }
  ]
}`,
      faqSnippet: [
        { question: "क्या बीघावाला एआई का उपयोग मुफ्त है?", answer: "हां, यह बिहार के सभी किसानों और भू-स्वामियों के लिए पूर्णतः मुफ्त और २४/७ उपलब्ध है।" }
      ]
    }
  ];

  const currentBlock = metaPages.find((p) => p.id === activeTab) || metaPages[0];

  const handleCopyCode = (text: string, sectionKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  return (
    <div id="seo-meta-manager-container" className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden mt-10">
      
      {/* Visual Header Block */}
      <div className="bg-gradient-to-r from-stone-900 via-indigo-950 to-stone-900 p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="bg-indigo-500/20 text-indigo-200 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-indigo-500/30 tracking-widest">
            Production-Ready Code Output
          </span>
          <h3 className="text-xl md:text-2xl font-black flex items-center gap-2">
            <FileCode className="w-6 h-6 text-indigo-400" />
            <span>Complete SEO Meta & Schema Generator</span>
          </h3>
          <p className="text-xs text-stone-300 font-medium">
            कॉपी करने के लिए तैयार HTML हेड टैग्स, JSON-LD स्कीमा, कल्पित गूगल खोज परिणाम और साझाकरण कार्ड्स।
          </p>
        </div>
      </div>

      {/* Main Tabs Selection Row */}
      <div className="bg-stone-50 border-b border-stone-200 p-2 overflow-x-auto flex gap-1.5 scrollbar-thin">
        {metaPages.map((page) => (
          <button
            key={page.id}
            onClick={() => setActiveTab(page.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === page.id
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:bg-stone-200/60"
            }`}
          >
            {page.tabLabel}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 divide-y xl:divide-y-0 xl:divide-x divide-stone-200">
        
        {/* LEFT COLUMN: Google & Social Card Real-time Visual Previews (5 Cols) */}
        <div className="xl:col-span-5 p-5 sm:p-6 bg-stone-50/40 space-y-6">
          
          <div className="flex items-center gap-1.5 text-xs font-black text-stone-800 border-b border-stone-200 pb-2">
            <Search className="w-4 h-4 text-indigo-600" />
            <span>Google Search SERP Snippet Preview</span>
          </div>

          {/* Simulated Google Result */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-3xs space-y-1 max-w-full overflow-hidden">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono truncate">
              <span>https://bighawala.com</span>
              {activeTab !== "homepage" && <span>› {activeTab === "district-template" ? "patna-land-rate" : activeTab}</span>}
            </div>
            <h4 className="text-base font-medium text-indigo-800 hover:underline cursor-pointer tracking-tight leading-snug">
              {currentBlock.title}
            </h4>
            <p className="text-xs text-stone-600 leading-normal font-sans">
              {currentBlock.description}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-black text-stone-800 border-b border-stone-200 pb-2 pt-2">
            <Share2 className="w-4 h-4 text-emerald-600" />
            <span>Social Share Card Preview (WhatsApp / FB)</span>
          </div>

          {/* Simulated Social Share Widget */}
          <div className="bg-stone-100 rounded-xl border border-stone-200 overflow-hidden max-w-sm">
            <div className="bg-emerald-700/5 p-2 px-3 border-b border-stone-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-mono text-stone-500">Active Link Attachment Card</span>
            </div>
            <div className="bg-stone-100 aspect-video flex items-center justify-center border-b border-stone-200 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80')` }}>
              <span className="bg-black/40 backdrop-blur-xs text-white text-[9px] font-mono px-2.5 py-1 rounded-md border border-white/20 uppercase tracking-widest font-black">
                BighaWala Visual Asset
              </span>
            </div>
            <div className="p-3 bg-stone-50 space-y-1">
              <span className="text-[9px] text-stone-400 font-mono block uppercase">BIGHAWALA.COM</span>
              <h5 className="text-[11px] font-extrabold text-stone-800 truncate">{currentBlock.title}</h5>
              <p className="text-[10px] text-stone-500 leading-snug line-clamp-2">{currentBlock.description}</p>
            </div>
          </div>

          {/* Quick FAQ schema review */}
          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200/60 space-y-2">
            <h5 className="text-xs font-bold text-amber-950 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-amber-700" />
              <span>BighaWala SEO Wisdom</span>
            </h5>
            <ul className="space-y-1.5 text-[11px] text-stone-700">
              <li className="flex items-start gap-1">
                <span className="text-amber-700">•</span>
                <span>We integrated <strong>FAQPage schema</strong> directly into the templates, enabling Google rich snippets search stars and accordion lists.</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-amber-700">•</span>
                <span><strong>Canonical tag</strong> is set to prevent double indexing issues from HTTP and HTTPS variations.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* RIGHT COLUMN: Actual Code blocks copyable (7 Cols) */}
        <div className="xl:col-span-7 p-5 sm:p-6 space-y-6 flex flex-col justify-between">
          
          {/* Canonical Suggestion Row */}
          <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-xl flex items-start gap-2.5 text-xs text-indigo-950">
            <Link className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-black">Suggested Canonical URL structure:</span>
              <code className="block bg-white border border-indigo-200 rounded px-1.5 py-0.5 font-mono text-[10px] text-indigo-900 select-all">
                {currentBlock.canonical}
              </code>
            </div>
          </div>

          {/* Block 1: Meta Tags head */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-black text-stone-700">
              <span className="flex items-center gap-1">
                <FileCode className="w-4 h-4 text-indigo-600" />
                <span>1. &lt;head&gt; Meta tags (HTML कोड)</span>
              </span>
              <button
                onClick={() => handleCopyCode(currentBlock.htmlBlock, "html")}
                className="bg-stone-100 hover:bg-stone-200 px-3 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 cursor-pointer"
              >
                {copiedSection === "html" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600 animate-bounce" />
                    <span>Copied HTML!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy HTML Block</span>
                  </>
                )}
              </button>
            </div>
            <pre className="bg-stone-900 text-stone-200 p-3 rounded-xl font-mono text-[10px] overflow-x-auto max-h-56 border border-stone-800 scrollbar-thin select-all">
              {currentBlock.htmlBlock}
            </pre>
          </div>

          {/* Block 2: JSON-LD Schema markup */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs font-black text-stone-700">
              <span className="flex items-center gap-1">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>2. JSON-LD Schema Markup (स्ट्रक्चर्ड डेटा)</span>
              </span>
              <button
                onClick={() => handleCopyCode(currentBlock.schemaBlock, "schema")}
                className="bg-stone-100 hover:bg-stone-200 px-3 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 cursor-pointer"
              >
                {copiedSection === "schema" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600 animate-bounce" />
                    <span>Copied Schema!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy JSON-LD Schema</span>
                  </>
                )}
              </button>
            </div>
            <pre className="bg-stone-900 text-stone-200 p-3 rounded-xl font-mono text-[10px] overflow-x-auto max-h-56 border border-stone-800 scrollbar-thin select-all">
              {currentBlock.schemaBlock}
            </pre>
          </div>

        </div>

      </div>

      {/* SEO STRATEGY & GUIDANCE ACCORDION (Sitemap, URL structure, Internal linking) */}
      <div className="border-t border-stone-200 bg-stone-50 p-5 sm:p-6 space-y-6">
        <h4 className="text-sm font-black text-stone-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>BighaWala Architectural SEO & Sitemap Blueprint</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-700">
          
          {/* URL Architecture */}
          <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-200 shadow-3xs">
            <h5 className="font-extrabold text-stone-900 flex items-center gap-1">
              <span className="text-indigo-600">📌</span> URL Structure Strategy
            </h5>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              Use clean, descriptive, hyphenated keywords in lower case. Avoid query parameters.
            </p>
            <ul className="space-y-1.5 text-[10px] font-mono bg-stone-50 p-2 rounded border border-stone-100">
              <li className="text-emerald-700 font-bold">/calculator/</li>
              <li className="text-emerald-700 font-bold">/dakhil-kharij-guide/</li>
              <li className="text-emerald-700 font-bold">/patna-land-rate/</li>
              <li className="text-emerald-700 font-bold">/ai-expert/</li>
            </ul>
          </div>

          {/* Internal Linking */}
          <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-200 shadow-3xs">
            <h5 className="font-extrabold text-stone-900 flex items-center gap-1">
              <span className="text-indigo-600">🔗</span> Internal Linking Network
            </h5>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              Link the calculator to district land rate pages with anchor text: <em className="bg-amber-100 font-semibold px-1 rounded">"पटना में 1 कट्ठा की माप"</em>. Link chatbot answers directly to the mutation guide to keep bounce rates under 40%.
            </p>
          </div>

          {/* Sitemap XML */}
          <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-200 shadow-3xs flex flex-col justify-between">
            <div className="space-y-1">
              <h5 className="font-extrabold text-stone-900 flex items-center gap-1">
                <span className="text-indigo-600">🗺️</span> Sitemap.xml Structure
              </h5>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                Prioritize tools. Keep the priority of homepage and calculator at <strong>1.0</strong>, and articles at <strong>0.8</strong>.
              </p>
            </div>
            
            <button
              onClick={() => handleCopyCode(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bighawala.com/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://bighawala.com/calculator/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://bighawala.com/dakhil-kharij-guide/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bighawala.com/ai-expert/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bighawala.com/patna-land-rate/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`, "sitemap")}
              className="w-full bg-stone-900 text-white font-bold hover:bg-stone-800 text-[10px] py-1.5 rounded-lg flex items-center justify-center gap-1 cursor-pointer transition-all active:scale-95"
            >
              {copiedSection === "sitemap" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400 animate-bounce" />
                  <span>Sitemap Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Sitemap.xml</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
