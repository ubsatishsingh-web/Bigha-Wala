import React, { useState, useEffect, useRef } from "react";
import { 
  Calculator, 
  BookOpen, 
  FileText, 
  Coins, 
  Layers, 
  HelpCircle, 
  ExternalLink, 
  TrendingUp, 
  CheckCircle, 
  Send, 
  RefreshCw, 
  User, 
  Bot, 
  AlertCircle, 
  X, 
  ArrowRight, 
  ChevronRight,
  Info,
  MapPin,
  Scale,
  Copy,
  Check,
  Percent,
  Share2
} from "lucide-react";
import { BIHAR_DISTRICTS, calculateFromBigha, calculateFromBighaStandardRequested, DistrictInfo, CalculationResult } from "./districtsData";
import { GUIDES_DATA, GuideContent } from "./guidesData";
import { ChatMessage, QuickLinkItem } from "./types";
import DakhilKharijArticle from "./components/DakhilKharijArticle";
import PatnaLandRatesArticle from "./components/PatnaLandRatesArticle";
import ChatbotWidgetShowcase from "./components/ChatbotWidgetShowcase";
import HighCpcArticlesHub from "./components/HighCpcArticlesHub";
import LeadLandingPage from "./components/LeadLandingPage";
import SocialCalendarHub from "./components/SocialCalendarHub";
import SeoKeywordPlanner from "./components/SeoKeywordPlanner";
import SeoMetaManager from "./components/SeoMetaManager";
import LandDocumentExplainer from "./components/LandDocumentExplainer";
import PatnaDistrictFaq from "./components/PatnaDistrictFaq";

export default function App() {
  // --- STATE FOR CONVERTER 1: Bigha to Everything ---
  const [c1Bigha, setC1Bigha] = useState<string>("1");
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>("patna");
  const [laggiMode, setLaggiMode] = useState<"requested" | "traditional">("requested");
  const [customLaggi, setCustomLaggi] = useState<number>(5.5);

  // --- STATE FOR CONVERTER 2: Sq Ft to Bihar Units ---
  const [c2SqFt, setC2SqFt] = useState<string>("27220");

  // --- STATE FOR CONVERTER 3: Acre to Bigha/Katha ---
  const [c3Acre, setC3Acre] = useState<string>("1");

  // --- STATE FOR CONVERTER 4: Price Calculator ---
  const [c4Bigha, setC4Bigha] = useState<string>("1");
  const [c4PricePerKatha, setC4PricePerKatha] = useState<string>("50000");

  // --- GLOBAL / GUIDE / CHAT STATES ---
  const [activeGuideKey, setActiveGuideKey] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [languageMode, setLanguageMode] = useState<"bilingual" | "hindi" | "english">("bilingual");

  // AI Chat states
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "प्रणाम! मैं **BighaWala AI Expert** हूँ। मैं बिहार की जमीन की मापी (Bigha, Katha, Dhur), दाखिल-खारिज, जमाबंदी, सरकारी रेट (MVR), एलपीसी और भूमि सुधार नियमों से जुड़े आपके सभी सवालों का तुरंत जवाब दे सकता हूँ।\n\n(Pranam! I am your BighaWala AI Expert. I can assist you with queries on Bihar land measurements, mutation, Jamabandi records, land registration values, and more.)",
      timestamp: new Date()
    }
  ]);
  const [chatInput, setChatInput] = useState<string>("");
  const [isChatLoading, setIsChatLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Automatically update Laggi size when District changes in traditional mode
  useEffect(() => {
    const dist = BIHAR_DISTRICTS.find(d => d.id === selectedDistrictId);
    if (dist) {
      setCustomLaggi(dist.defaultLaggi);
    }
  }, [selectedDistrictId]);

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isChatLoading]);

  // Utility to format currency in Indian style (e.g., ₹12,50,000)
  const formatIndianCurrency = (num: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(num);
  };

  // Helper to show temporary copied indicator
  const triggerCopyNotification = (fieldId: string) => {
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Copy text to clipboard helper
  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    triggerCopyNotification(fieldId);
  };

  // ----------------------------------------------------
  // CONVERTER 1 CALCULATIONS (Bigha to Everything)
  // Bihar values requested: 1 Bigha = 20 Katha = 1600 Dhur = 20 Dismil = 27220 sqft = 2529 sqm = 0.625 acre
  // Traditional values: Depends on District Laggi (1 Bigha = 20 Katha = 400 Dhur, area dynamically calculated)
  // ----------------------------------------------------
  const bighaVal1 = parseFloat(c1Bigha) || 0;

  let c1Results = {
    katha: 0,
    dhur: 0,
    dismil: 0,
    sqft: 0,
    sqm: 0,
    acre: 0,
    hectare: 0
  };

  if (laggiMode === "requested") {
    // 1 Bigha = 20 Katha = 1600 Dhur = 20 Dismil = 27220 sqft = 2529 sqm = 0.625 acre
    c1Results = {
      katha: bighaVal1 * 20,
      dhur: bighaVal1 * 1600,
      dismil: bighaVal1 * 20,
      sqft: bighaVal1 * 27220,
      sqm: bighaVal1 * 2529,
      acre: bighaVal1 * 0.625,
      hectare: bighaVal1 * 0.2529 // 1 Hectare is approx 10,000 sqm. 2529 sqm / 10000 = 0.2529 Hectare per Bigha
    };
  } else {
    // Traditional Laggi mode:
    // 1 cubit (हाथ) = 1.5 feet
    // 1 Dhur = (Laggi * 1.5)^2 Sq Ft
    // 1 Katha = 20 Dhur
    // 1 Bigha = 20 Katha = 400 Dhur
    const laggiFeet = customLaggi * 1.5;
    const dhurSqFt = Math.pow(laggiFeet, 2);
    const kathaSqFt = dhurSqFt * 20;
    const bighaSqFt = kathaSqFt * 20;

    const totalSqFt = bighaVal1 * bighaSqFt;
    c1Results = {
      katha: bighaVal1 * 20,
      dhur: bighaVal1 * 400,
      dismil: totalSqFt / 435.6,
      sqft: totalSqFt,
      sqm: totalSqFt / 10.7639,
      acre: totalSqFt / 43560,
      hectare: totalSqFt / 107639
    };
  }

  // ----------------------------------------------------
  // CONVERTER 2 CALCULATIONS (Sq Ft to Bihar Units)
  // Standard conversion from requested formula:
  // 1 Bigha = 27,220 Sq Ft
  // 1 Katha = 1,361 Sq Ft
  // 1 Dhur = 17.0125 Sq Ft
  // ----------------------------------------------------
  const sqFtVal = parseFloat(c2SqFt) || 0;
  const c2Bigha = sqFtVal / 27220;
  const c2Katha = sqFtVal / 1361;
  const c2Dhur = sqFtVal / 17.0125;

  // ----------------------------------------------------
  // CONVERTER 3 CALCULATIONS (Acre to Bigha / Katha)
  // Requested formula basis: 1 Bigha = 0.625 Acre (so 1 Acre = 1 / 0.625 = 1.6 Bigha)
  // 1 Bigha = 20 Katha (so 1 Acre = 32 Katha)
  // ----------------------------------------------------
  const acreVal = parseFloat(c3Acre) || 0;
  const c3Bigha = acreVal * 1.6;
  const c3Katha = acreVal * 32;

  // ----------------------------------------------------
  // CONVERTER 4 CALCULATIONS (Price Calculator)
  // Land size in Bigha + Price per Katha in Rupees
  // Since 1 Bigha = 20 Katha, Total Katha = Bigha * 20
  // Total Price = Total Katha * Price per Katha
  // ----------------------------------------------------
  const pBigha = parseFloat(c4Bigha) || 0;
  const pPricePerKatha = parseFloat(c4PricePerKatha) || 0;
  const totalKatha = pBigha * 20;
  const totalPrice = totalKatha * pPricePerKatha;

  // AI Chat Suggestions
  const CHAT_SUGGESTIONS = [
    { textHi: "जमीन रजिस्ट्री और दाखिल-खारिज नियम", textEn: "Mutation Timeline & Rules", query: "बिहार में जमीन रजिस्ट्री के बाद दाखिल-खारिज (Dakhil Kharij) कराने की सरकारी समय सीमा क्या है, और अगर यह रिजेक्ट हो जाए तो क्या करें?" },
    { textHi: "लग्गी (Laggi) का गणित समझाएं", textEn: "Explain Laggi & Katha sizes", query: "बिहार के अलग-अलग जिलों में कट्ठा और धुर का आकार लग्गी (Laggi) के अनुसार क्यों बदलता है? कृपया इसे आसान उदाहरण के साथ विस्तार से समझाएं।" },
    { textHi: "नया जमीन सर्वे 2026 क्या है?", textEn: "What is Bihar Land Survey?", query: "बिहार में चल रहे विशेष भूमि सर्वेक्षण 2026 (Bihar Vishesh Sarvekshan) में रैयतों को स्व-घोषणा पत्र (Form-2) के साथ कौन-से मुख्य दस्तावेज जमा करने होंगे?" },
    { textHi: "जमीन का सरकारी रेट कैसे जानें?", textEn: "How to check MVR rate", query: "बिहार में अपने मौजा (गांव) की जमीन का न्यूनतम सरकारी मूल्य (MVR Rate) ऑनलाइन देखने और रजिस्ट्री शुल्क का हिसाब लगाने की पूरी प्रक्रिया क्या है?" }
  ];

  // Quick Links with icons
  const QUICK_LINKS: QuickLinkItem[] = [
    {
      id: "bhulekh",
      titleHi: "भूलेख बिहार पोर्टल",
      titleEn: "Bhulekh Bihar Portal",
      descriptionHi: "अपना खाता, खेसरा, रसीद और नक्शा देखें",
      descriptionEn: "View land records, Khata & maps online",
      icon: "📜",
      externalUrl: "https://biharbhumi.bihar.gov.in"
    },
    {
      id: "dakhil_kharij",
      titleHi: "दाखिल खारिज गाइड",
      titleEn: "Mutation (Dakhil Kharij)",
      descriptionHi: "ऑनलाइन म्यूटेशन की प्रक्रिया समझें",
      descriptionEn: "Step-by-step process of land mutation",
      icon: "🖊️",
      modalType: "dakhil_kharij"
    },
    {
      id: "zameen_rate",
      titleHi: "जमीन का सरकारी रेट",
      titleEn: "Check Government Rates",
      descriptionHi: "बिहार के सभी जिलों का MVR रेट जानें",
      descriptionEn: "Find official circle rate of land",
      icon: "💰",
      modalType: "registry_rate"
    },
    {
      id: "jamabandi",
      titleHi: "जमाबंदी पंजी डाउनलोड",
      titleEn: "Download Jamabandi",
      descriptionHi: "पंजी-II (Register 2) देखने का तरीका",
      descriptionEn: "Get digital Jamabandi & tenant details",
      icon: "📄",
      modalType: "jamabandi"
    },
    {
      id: "lpc",
      titleHi: "LPC आवेदन गाइड",
      titleEn: "LPC (Land Certificate)",
      descriptionHi: "स्वामित्व प्रमाण पत्र कैसे बनवाएं",
      descriptionEn: "Guide to apply for possession proof",
      icon: "🏢",
      modalType: "lpc"
    },
    {
      id: "ai_expert",
      titleHi: "विशेषज्ञ एआई सलाह",
      titleEn: "BighaWala AI Expert",
      descriptionHi: "बिहार भूमि नियमों पर तुरंत सवाल पूछें",
      descriptionEn: "Instant expert answers on land laws",
      icon: "🤖",
      modalType: "ai_expert"
    }
  ];

  // Handle chat submission
  const handleSendMessage = async (textToSend?: string) => {
    const queryText = textToSend || chatInput;
    if (!queryText.trim() || isChatLoading) return;

    if (!textToSend) setChatInput("");
    setApiError(null);

    const newUserMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: queryText,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, newUserMessage]);
    setIsChatLoading(true);

    try {
      const historyToSend = [...chatMessages, newUserMessage].slice(-8).map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: historyToSend })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "सर्वर से संपर्क करने में असमर्थता हुई। (Failed to connect to AI server)");
      }

      setChatMessages(prev => [
        ...prev,
        {
          id: `msg-${Date.now()}-reply`,
          role: "assistant",
          content: data.message,
          timestamp: new Date()
        }
      ]);
    } catch (err: any) {
      console.error(err);
      setApiError(err.message || "कुछ गड़बड़ हुई। कृपया थोड़ी देर बाद फिर से प्रयास करें। (Something went wrong. Please try again later.)");
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleQuickLinkClick = (item: QuickLinkItem) => {
    if (item.externalUrl) {
      window.open(item.externalUrl, "_blank", "noopener,noreferrer");
    } else if (item.modalType === "ai_expert") {
      const chatSection = document.getElementById("ai-expert-section");
      if (chatSection) {
        chatSection.scrollIntoView({ behavior: "smooth" });
        chatSection.classList.add("ring-4", "ring-orange-400");
        setTimeout(() => chatSection.classList.remove("ring-4", "ring-orange-400"), 1500);
      }
    } else if (item.modalType) {
      setActiveGuideKey(item.modalType);
    }
  };

  return (
    <div id="bighawala-root-app" className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-800 antialiased selection:bg-orange-200">
      
      {/* 1. Saffron, White, Green Tri-color top strip representing Bihar and India */}
      <div id="header-tricolor" className="h-3 bg-gradient-to-r from-orange-500 via-stone-200 to-green-700 w-full sticky top-0 z-50"></div>

      {/* 2. Brand Header with Large Hindi Headline */}
      <header id="brand-header" className="bg-white border-b border-stone-200 py-5 sm:py-6 shadow-xs sticky top-3 z-40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <span className="text-3xl sm:text-4xl filter drop-shadow">🏡</span>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-green-700 flex items-center">
                BighaWala<span className="text-orange-500 font-extrabold">.com</span>
              </h1>
            </div>
            {/* Tagline in Hindi requested by user */}
            <p className="text-orange-600 font-bold text-base sm:text-lg mt-1 tracking-tight">
              बिहार की जमीन की हर जानकारी — एक जगह
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="bg-green-50 px-3 py-1.5 rounded-xl border border-green-100 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
              </span>
              <p className="text-xs text-green-800 font-extrabold tracking-tight">
                अपडेटेड: बिहार भूमि पोर्टल 2026
              </p>
            </div>

            {/* Language Selection */}
            <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs font-bold shadow-2xs">
              <button 
                onClick={() => setLanguageMode("bilingual")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${languageMode === "bilingual" ? "bg-white text-green-700 shadow-xs" : "text-gray-500 hover:text-gray-800"}`}
              >
                bilingual
              </button>
              <button 
                onClick={() => setLanguageMode("hindi")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${languageMode === "hindi" ? "bg-white text-green-700 shadow-xs" : "text-gray-500 hover:text-gray-800"}`}
              >
                हिन्दी
              </button>
              <button 
                onClick={() => setLanguageMode("english")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${languageMode === "english" ? "bg-white text-green-700 shadow-xs" : "text-gray-500 hover:text-gray-800"}`}
              >
                English
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* 3. Bihar Vishesh Sarvekshan Alert */}
      <div id="survey-alert-bar" className="bg-orange-600 text-white py-3 px-4 text-center text-xs sm:text-sm font-bold shadow-xs flex items-center justify-center gap-2">
        <span className="bg-white text-orange-600 font-extrabold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs animate-pulse">
          नया सर्वे अलर्ट
        </span>
        <span>बिहार के सभी 38 जिलों में भूमि का विशेष डिजिटल सर्वेक्षण जारी है। अपनी रसीद और वंशावली तुरंत तैयार करें!</span>
      </div>

      {/* 4. Main Contents */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* TOP LEVEL INTRO AND HINDI DISPLAY BANNER */}
        <section id="introduction-banner" className="text-center space-y-3 max-w-3xl mx-auto py-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            बिहार भूमि माप और बीघा कनवर्टर
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-medium">
            बिहार के किसानों और जमीन खरीदार-विक्रेताओं के लिए पूर्ण ऑनलाइन कैलकुलेटर टूल। बीघा, कट्ठा, धूर, डिस्मिल, और एकड़ की मापी की त्वरित एवं सटीक गणना करें।
          </p>
        </section>

        {/* ==========================================
            CALCULATORS GRID SECTION (POWERFUL CONVERTERS)
            ========================================== */}
        <section id="calculators-grid" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-stone-200 pb-3 gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-green-700" />
              <span>भूमि मापन कैलकुलेटर और कनवर्टर (4-in-1 Calculators)</span>
            </h3>
            <span className="text-xs font-bold text-gray-500 italic bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
              *सभी गणनाएं मानक बिहार भूमि नियम अनुसार हैं
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* CONVERTER 1: Bigha to Everything (with optional Traditional Mode) */}
            <div id="converter-bigha-to-all" className="bg-white rounded-2xl shadow-sm border border-stone-200 hover:border-green-300 transition-all p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-stone-100 pb-3">
                  <div className="space-y-0.5">
                    <span className="bg-green-100 text-green-800 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">कनवर्टर 1 (C1)</span>
                    <h4 className="text-lg font-black text-stone-950">बीघा से अन्य सभी इकाइयाँ (Bigha to Everything)</h4>
                  </div>
                  
                  {/* Mode Toggler */}
                  <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl text-xs font-bold border border-stone-200 shadow-2xs">
                    <button 
                      onClick={() => setLaggiMode("requested")}
                      className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${laggiMode === "requested" ? "bg-white text-green-700 shadow-xs" : "text-gray-500 hover:text-gray-800"}`}
                      title="User Specified Standard Formula"
                    >
                      मानक
                    </button>
                    <button 
                      onClick={() => setLaggiMode("traditional")}
                      className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${laggiMode === "traditional" ? "bg-white text-green-700 shadow-xs" : "text-gray-500 hover:text-gray-800"}`}
                      title="Traditional District Laggi Formula"
                    >
                      जिलावार लग्गी
                    </button>
                  </div>
                </div>

                {/* Description info based on mode */}
                <div className="mb-4 bg-stone-50 p-3 rounded-xl border border-stone-100 text-xs text-stone-600 flex items-start gap-2 leading-relaxed">
                  <Info className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    {laggiMode === "requested" ? (
                      <p>
                        <strong>मानक बिहार रूपांतरण:</strong> 1 बीघा = 20 कट्ठा = 1600 धुर = 20 डिस्मिल = 27220 Sq Ft = 2529 Sq M = 0.625 एकड़।
                      </p>
                    ) : (
                      <p>
                        <strong>जिलावार लग्गी मापी:</strong> बिहार में अलग-अलग अंचलों में जमीन की मापी <strong>लग्गी (Laggi)</strong> के आकार पर निर्भर करती है। अपनी इच्छानुसार लग्गी बदलें।
                      </p>
                    )}
                  </div>
                </div>

                {/* Inputs */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="c1InputBigha" className="block text-xs font-bold text-gray-700 mb-1.5 flex justify-between">
                      <span>बीघा संख्या दर्ज करें / Enter Bigha Value:</span>
                      <span className="text-green-700 font-black">Bigha</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="number"
                        id="c1InputBigha"
                        value={c1Bigha}
                        onChange={(e) => setC1Bigha(e.target.value)}
                        step="any"
                        min="0"
                        className="w-full text-2xl font-black p-3.5 pr-14 border border-stone-200 rounded-xl focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all bg-green-50/20 text-green-900"
                        placeholder="जैसे: 1, 2.5, 5"
                      />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <span className="text-gray-400 font-extrabold text-sm">बीघा</span>
                      </div>
                    </div>
                  </div>

                  {/* District Selection & Laggi for Traditional Mode */}
                  {laggiMode === "traditional" && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <label htmlFor="districtSelector" className="block text-xs font-bold text-gray-700 mb-1.5">
                          बिहार का जिला चुनें (Select District for Laggi value):
                        </label>
                        <select 
                          id="districtSelector"
                          value={selectedDistrictId}
                          onChange={(e) => setSelectedDistrictId(e.target.value)}
                          className="w-full p-3 border border-stone-200 rounded-xl bg-white text-stone-800 font-semibold focus:border-green-600 outline-none shadow-2xs"
                        >
                          {BIHAR_DISTRICTS.map((dist) => (
                            <option key={dist.id} value={dist.id}>
                              {dist.nameHi} ({dist.nameEn}) — {dist.defaultLaggi} हाथ लग्गी
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="p-3.5 bg-orange-50/70 border border-orange-100 rounded-xl space-y-2">
                        <div className="flex justify-between items-center text-xs font-bold text-orange-900">
                          <span className="flex items-center gap-1">
                            <Scale className="w-4 h-4 text-orange-600" />
                            लग्गी लंबाई बदलें (Custom Laggi length):
                          </span>
                          <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-md font-black">
                            {customLaggi} हाथ
                          </span>
                        </div>
                        <input 
                          type="range"
                          min="4"
                          max="9"
                          step="0.25"
                          value={customLaggi}
                          onChange={(e) => setCustomLaggi(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        />
                        <p className="text-[10px] text-orange-700 leading-normal font-medium">
                          *लग्गी का आकार 4 हाथ से 9 हाथ तक बदल सकता है। साधारणतः पटना, नालंदा और गया में 5.5 हाथ लग्गी (27225 Sq Ft) और उत्तरी बिहार में 6 से 6.5 हाथ लग्गी चलती है।
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Calculated Output Grid */}
                <div className="mt-6 space-y-3">
                  <h5 className="text-[11px] font-black uppercase text-gray-400 tracking-wider">परिणाम (Output Breakdown):</h5>
                  <div className="grid grid-cols-2 gap-3.5">
                    
                    {/* Katha */}
                    <div className="bg-orange-50/60 p-3 rounded-xl border border-orange-100 hover:border-orange-200 transition-all group relative">
                      <p className="text-[10px] text-orange-800 font-black tracking-wider uppercase">कट्ठा (Katha)</p>
                      <p className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        {c1Results.katha.toLocaleString()}
                      </p>
                      <button 
                        onClick={() => copyToClipboard(c1Results.katha.toString(), "c1-katha")}
                        className="absolute top-2 right-2 text-stone-400 hover:text-orange-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy to clipboard"
                      >
                        {copiedField === "c1-katha" ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Dhur */}
                    <div className="bg-green-50/60 p-3 rounded-xl border border-green-100 hover:border-green-200 transition-all group relative">
                      <p className="text-[10px] text-green-800 font-black tracking-wider uppercase">धुर (Dhur)</p>
                      <p className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        {c1Results.dhur.toLocaleString()}
                      </p>
                      <button 
                        onClick={() => copyToClipboard(c1Results.dhur.toString(), "c1-dhur")}
                        className="absolute top-2 right-2 text-stone-400 hover:text-green-700 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy to clipboard"
                      >
                        {copiedField === "c1-dhur" ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Dismil */}
                    <div className="bg-yellow-50/60 p-3 rounded-xl border border-yellow-100 hover:border-yellow-200 transition-all group relative">
                      <p className="text-[10px] text-yellow-800 font-black tracking-wider uppercase">डिस्मिल (Dismil / Dec)</p>
                      <p className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        {c1Results.dismil.toLocaleString(undefined, { maximumFractionDigits: 3 })}
                      </p>
                      <button 
                        onClick={() => copyToClipboard(c1Results.dismil.toFixed(3), "c1-dismil")}
                        className="absolute top-2 right-2 text-stone-400 hover:text-yellow-700 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy to clipboard"
                      >
                        {copiedField === "c1-dismil" ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Acre */}
                    <div className="bg-purple-50/60 p-3 rounded-xl border border-purple-100 hover:border-purple-200 transition-all group relative">
                      <p className="text-[10px] text-purple-800 font-black tracking-wider uppercase">एकड़ (Acre)</p>
                      <p className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        {c1Results.acre.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                      </p>
                      <button 
                        onClick={() => copyToClipboard(c1Results.acre.toFixed(4), "c1-acre")}
                        className="absolute top-2 right-2 text-stone-400 hover:text-purple-700 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy to clipboard"
                      >
                        {copiedField === "c1-acre" ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Sq Ft */}
                    <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100 hover:border-blue-200 transition-all col-span-2 group relative">
                      <div className="flex justify-between items-center">
                        <p className="text-[10px] text-blue-800 font-black tracking-wider uppercase">वर्ग फुट (Square Feet)</p>
                        <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">
                          {c1Results.sqm.toLocaleString(undefined, { maximumFractionDigits: 1 })} Sq M (वर्ग मीटर)
                        </span>
                      </div>
                      <p className="text-2xl font-black text-stone-900 mt-1.5">
                        {c1Results.sqft.toLocaleString(undefined, { maximumFractionDigits: 1 })} <span className="text-xs font-semibold text-gray-500">वर्ग फुट</span>
                      </p>
                      <p className="text-[10px] text-blue-600 mt-1">
                        हेक्टेयर (Hectare): {c1Results.hectare.toLocaleString(undefined, { maximumFractionDigits: 5 })} Hectare
                      </p>
                      <button 
                        onClick={() => copyToClipboard(c1Results.sqft.toFixed(1), "c1-sqft")}
                        className="absolute top-3 right-3 text-stone-400 hover:text-blue-700 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy to clipboard"
                      >
                        {copiedField === "c1-sqft" ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                  </div>
                </div>

              </div>

              {/* Share/Note Footer */}
              <div className="mt-6 pt-4 border-t border-stone-100 text-right">
                <span className="text-[10px] text-stone-400 italic">
                  *1 बीघा = 20 कट्ठा = 1,600 धुर (मानक रूप में)
                </span>
              </div>
            </div>

            {/* CONVERTER 2: Square Feet to Bihar Units */}
            <div id="converter-sqft-to-bihar" className="bg-white rounded-2xl shadow-sm border border-stone-200 hover:border-orange-300 transition-all p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-stone-100 pb-3">
                  <div className="space-y-0.5">
                    <span className="bg-orange-100 text-orange-800 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">कनवर्टर 2 (C2)</span>
                    <h4 className="text-lg font-black text-stone-950">वर्ग फुट से बिहार की इकाइयाँ (Square Feet to Bihar Units)</h4>
                  </div>
                  <span className="text-2xl">📐</span>
                </div>

                <div className="mb-4 bg-stone-50 p-3 rounded-xl border border-stone-100 text-xs text-stone-600 flex items-start gap-2">
                  <Info className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <p>
                    <strong>कन्वर्शन आधार (Basis):</strong> यह कनवर्टर मानक बिहार सूत्र <strong>1 बीघा = 27,220 वर्ग फुट (Sq Ft)</strong> पर कार्य करता है।
                  </p>
                </div>

                {/* Input */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="c2InputSqFt" className="block text-xs font-bold text-gray-700 mb-1.5 flex justify-between">
                      <span>वर्ग फुट संख्या दर्ज करें / Enter Sq Ft:</span>
                      <span className="text-orange-600 font-black">Sq Ft</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="number"
                        id="c2InputSqFt"
                        value={c2SqFt}
                        onChange={(e) => setC2SqFt(e.target.value)}
                        step="any"
                        min="0"
                        className="w-full text-2xl font-black p-3.5 pr-16 border border-stone-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all bg-orange-50/20 text-orange-950"
                        placeholder="जैसे: 1361, 27220, 5000"
                      />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <span className="text-gray-400 font-extrabold text-sm">Sq Ft</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outputs */}
                <div className="mt-6 space-y-3">
                  <h5 className="text-[11px] font-black uppercase text-gray-400 tracking-wider">परिणाम (Equivalent Bihar Units):</h5>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {/* Bigha */}
                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 hover:border-orange-300 transition-all relative group text-center">
                      <p className="text-[10px] text-stone-500 font-black uppercase">बीघा (Bigha)</p>
                      <p className="text-lg sm:text-xl font-black text-stone-900 mt-1">
                        {c2Bigha.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                      </p>
                      <span className="text-[10px] text-gray-400 block mt-1">Bigha</span>
                      <button 
                        onClick={() => copyToClipboard(c2Bigha.toFixed(4), "c2-bigha")}
                        className="absolute top-1.5 right-1.5 text-stone-400 hover:text-stone-700 p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy"
                      >
                        {copiedField === "c2-bigha" ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>

                    {/* Katha */}
                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 hover:border-orange-300 transition-all relative group text-center">
                      <p className="text-[10px] text-stone-500 font-black uppercase">कट्ठा (Katha)</p>
                      <p className="text-lg sm:text-xl font-black text-stone-900 mt-1">
                        {c2Katha.toLocaleString(undefined, { maximumFractionDigits: 3 })}
                      </p>
                      <span className="text-[10px] text-gray-400 block mt-1">Katha</span>
                      <button 
                        onClick={() => copyToClipboard(c2Katha.toFixed(3), "c2-katha")}
                        className="absolute top-1.5 right-1.5 text-stone-400 hover:text-stone-700 p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy"
                      >
                        {copiedField === "c2-katha" ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>

                    {/* Dhur */}
                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 hover:border-orange-300 transition-all relative group text-center">
                      <p className="text-[10px] text-stone-500 font-black uppercase">धुर (Dhur)</p>
                      <p className="text-lg sm:text-xl font-black text-stone-900 mt-1">
                        {c2Dhur.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </p>
                      <span className="text-[10px] text-gray-400 block mt-1">Dhur</span>
                      <button 
                        onClick={() => copyToClipboard(c2Dhur.toFixed(2), "c2-dhur")}
                        className="absolute top-1.5 right-1.5 text-stone-400 hover:text-stone-700 p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy"
                      >
                        {copiedField === "c2-dhur" ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 text-right">
                <span className="text-[10px] text-stone-400">
                  *1 कट्ठा = 1,361 Sq Ft | 1 धुर = 17.0125 Sq Ft
                </span>
              </div>
            </div>

            {/* CONVERTER 3: Acre to Bigha / Katha */}
            <div id="converter-acre-to-bigha" className="bg-white rounded-2xl shadow-sm border border-stone-200 hover:border-blue-300 transition-all p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-stone-100 pb-3">
                  <div className="space-y-0.5">
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">कनवर्टर 3 (C3)</span>
                    <h4 className="text-lg font-black text-stone-950">एकड़ से बीघा और कट्ठा (Acre to Bigha & Katha)</h4>
                  </div>
                  <span className="text-2xl">🌾</span>
                </div>

                <div className="mb-4 bg-stone-50 p-3 rounded-xl border border-stone-100 text-xs text-stone-600 flex items-start gap-2">
                  <Info className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <p>
                    <strong>मापन संबंध (Acre Relation):</strong> 1 बीघा = 0.625 एकड़ (यानी 1 एकड़ = 1.6 बीघा या 32 कट्ठा)।
                  </p>
                </div>

                {/* Input */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="c3InputAcre" className="block text-xs font-bold text-gray-700 mb-1.5 flex justify-between">
                      <span>एकड़ संख्या दर्ज करें / Enter Acres:</span>
                      <span className="text-blue-600 font-black">Acre</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="number"
                        id="c3InputAcre"
                        value={c3Acre}
                        onChange={(e) => setC3Acre(e.target.value)}
                        step="any"
                        min="0"
                        className="w-full text-2xl font-black p-3.5 pr-16 border border-stone-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-blue-50/20 text-blue-950"
                        placeholder="जैसे: 1, 2, 5"
                      />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <span className="text-gray-400 font-extrabold text-sm">Acres</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outputs */}
                <div className="mt-6 space-y-3">
                  <h5 className="text-[11px] font-black uppercase text-gray-400 tracking-wider">परिणाम (Bihar Land equivalent):</h5>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Bigha */}
                    <div className="bg-gradient-to-br from-blue-50/50 to-blue-100/30 p-3.5 rounded-xl border border-blue-100 hover:border-blue-300 transition-all text-center relative group">
                      <p className="text-[10px] text-blue-800 font-black uppercase tracking-wider">बीघा (Bigha)</p>
                      <p className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        {c3Bigha.toLocaleString(undefined, { maximumFractionDigits: 3 })}
                      </p>
                      <span className="text-xs text-blue-700 font-bold block mt-1">Bigha</span>
                      <button 
                        onClick={() => copyToClipboard(c3Bigha.toFixed(3), "c3-bigha")}
                        className="absolute top-2 right-2 text-stone-400 hover:text-blue-700 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy"
                      >
                        {copiedField === "c3-bigha" ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Katha */}
                    <div className="bg-gradient-to-br from-blue-50/50 to-blue-100/30 p-3.5 rounded-xl border border-blue-100 hover:border-blue-300 transition-all text-center relative group">
                      <p className="text-[10px] text-blue-800 font-black uppercase tracking-wider">कट्ठा (Katha)</p>
                      <p className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        {c3Katha.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </p>
                      <span className="text-xs text-blue-700 font-bold block mt-1">Katha</span>
                      <button 
                        onClick={() => copyToClipboard(c3Katha.toFixed(2), "c3-katha")}
                        className="absolute top-2 right-2 text-stone-400 hover:text-blue-700 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy"
                      >
                        {copiedField === "c3-katha" ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 text-right">
                <span className="text-[10px] text-stone-400">
                  *1 एकड़ में 100 डिसमिल भी होता है
                </span>
              </div>
            </div>

            {/* CONVERTER 4: Price Calculator (formatted Indian currency) */}
            <div id="converter-price" className="bg-white rounded-2xl shadow-sm border border-stone-200 hover:border-yellow-400 transition-all p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-stone-100 pb-3">
                  <div className="space-y-0.5">
                    <span className="bg-yellow-100 text-yellow-800 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">कनवर्टर 4 (C4)</span>
                    <h4 className="text-lg font-black text-stone-950">जमीन मूल्य कैलकुलेटर (Bihar Land Price Calculator)</h4>
                  </div>
                  <span className="text-2xl">💰</span>
                </div>

                <div className="mb-4 bg-stone-50 p-3 rounded-xl border border-stone-100 text-xs text-stone-600 flex items-start gap-2">
                  <Info className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <p>
                    <strong>मूल्य का गणित:</strong> बिहार में सामान्यतः जमीन का भाव <strong>प्रति कट्ठा (Per Katha)</strong> के रूप में तय होता है। 1 बीघा में 20 कट्ठा होते हैं।
                  </p>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c4InputBigha" className="block text-xs font-bold text-gray-700 mb-1">
                      जमीन का आकार (Bigha):
                    </label>
                    <div className="relative">
                      <input 
                        type="number"
                        id="c4InputBigha"
                        value={c4Bigha}
                        onChange={(e) => setC4Bigha(e.target.value)}
                        step="any"
                        min="0"
                        className="w-full text-lg font-bold p-3 border border-stone-200 rounded-xl focus:border-yellow-500 outline-none transition-all bg-yellow-50/10 text-stone-900"
                        placeholder="जैसे: 1.5, 3"
                      />
                      <span className="absolute inset-y-0 right-3 flex items-center text-xs text-gray-400 font-bold">बीघा</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c4InputPrice" className="block text-xs font-bold text-gray-700 mb-1">
                      प्रति कट्ठा मूल्य (Price per Katha):
                    </label>
                    <div className="relative">
                      <input 
                        type="number"
                        id="c4InputPrice"
                        value={c4PricePerKatha}
                        onChange={(e) => setC4PricePerKatha(e.target.value)}
                        step="any"
                        min="0"
                        className="w-full text-lg font-bold p-3 border border-stone-200 rounded-xl focus:border-yellow-500 outline-none transition-all bg-yellow-50/10 text-stone-900"
                        placeholder="जैसे: 50000, 100000"
                      />
                      <span className="absolute inset-y-0 right-3 flex items-center text-xs text-gray-400 font-bold">₹ / कट्ठा</span>
                    </div>
                  </div>
                </div>

                {/* Final calculated output */}
                <div className="mt-6 bg-yellow-50/50 border border-yellow-200 rounded-xl p-4 text-center">
                  <p className="text-xs text-yellow-800 font-black uppercase tracking-wider">कुल जमीन मूल्य (Total Land Value):</p>
                  
                  {/* Big formatted Indian Currency readout */}
                  <p className="text-3xl sm:text-4xl font-black text-stone-950 mt-2 tracking-tight">
                    {formatIndianCurrency(totalPrice)}
                  </p>

                  <div className="mt-2.5 flex justify-center gap-3 text-xs text-stone-600 font-medium">
                    <span>कुल कट्ठा (Total Katha): <strong className="text-stone-900 font-extrabold">{totalKatha.toLocaleString()} कट्ठा</strong></span>
                    <span>|</span>
                    <span>दर: <strong className="text-stone-900 font-extrabold">₹{parseFloat(c4PricePerKatha || "0").toLocaleString()} / कट्ठा</strong></span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 text-right">
                <span className="text-[10px] text-stone-400">
                  *रजिस्ट्री खर्च और स्टांप ड्यूटी अलग से लागू होगी
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
            QUICK LINKS SECTION (6 INTERACTIVE BOXES)
            ========================================== */}
        <section id="quick-links-grid-wrapper" className="space-y-4">
          <div className="border-b border-stone-200 pb-3 flex justify-between items-center">
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 flex items-center gap-2">
              <span>📚</span>
              <span>बिहार भूमि डिजिटल हेल्पडेस्क (Government Records & Guides)</span>
            </h3>
            <span className="bg-orange-100 text-orange-800 text-[10px] font-extrabold px-3 py-1 rounded-full border border-orange-200 uppercase tracking-wide">
              Bihar Bhumi Guides
            </span>
          </div>

          <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
            ऑनलाइन सरकारी पोर्टल काफी जटिल हो सकते हैं। हमारे सरल गाइडों के माध्यम से समझें कि किस प्रकार दाखिल खारिज किया जाता है, रसीद निकाली जाती है, अपनी जमाबंदी पंजी देखी जाती है, तथा LPC बनवाया जाता है:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {QUICK_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleQuickLinkClick(link)}
                className="group bg-white hover:bg-stone-50 p-5 rounded-2xl border border-stone-200 hover:border-orange-400 hover:shadow-md cursor-pointer flex flex-col items-center text-center transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 text-3xl transition-transform group-hover:scale-110 shadow-xs
                  group-even:bg-green-50 group-odd:bg-orange-50 group-hover:bg-orange-100"
                >
                  {link.icon}
                </div>
                
                <span className="text-sm sm:text-base font-black text-stone-950 group-hover:text-orange-600 transition-colors">
                  {languageMode === "english" ? link.titleEn : link.titleHi}
                </span>
                
                <span className="text-xs text-stone-500 mt-1.5 leading-snug line-clamp-2">
                  {languageMode === "english" ? link.descriptionEn : link.descriptionHi}
                </span>

                {link.externalUrl && (
                  <span className="text-[11px] text-green-700 font-extrabold mt-3 flex items-center gap-1 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                    विजिट पोर्टल <ExternalLink className="w-3 h-3" />
                  </span>
                )}
                {!link.externalUrl && (
                  <span className="text-[11px] text-orange-700 font-extrabold mt-3 flex items-center gap-1 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                    गाइड देखें <ChevronRight className="w-3 h-3" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* ==========================================
            ASK AI EXPERT PORTAL (CHAT ASSISTANT)
            ========================================== */}
        <section id="ai-expert-section" className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden transition-all duration-300">
          <div className="bg-gradient-to-r from-green-800 to-green-700 text-white p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/20">
                <Bot className="w-7 h-7 text-orange-300" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black flex items-center gap-2">
                  <span>BighaWala AI Expert (बिहार भूमि सलाहकार)</span>
                  <span className="bg-orange-500 text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">24x7 Active</span>
                </h3>
                <p className="text-xs text-green-100 mt-0.5">
                  बिहार भूमि सुधार नियमों, लगान रसीद काटने, दाखिल खारिज वंशावली तथा विशेष सर्वे पर संशय मिटाएं
                </p>
              </div>
            </div>
            <div className="bg-green-900/40 text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10 text-orange-200 shrink-0">
              हिन्दी + English Bilingual Output
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Quick Suggestions Left Panel */}
            <div className="lg:col-span-4 bg-stone-50/50 p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-stone-200 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-xs font-black uppercase text-stone-500 tracking-wider mb-2.5">
                  चर्चित प्रश्न (Quick Help Topics)
                </h4>
                <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                  बिहार के किसानों द्वारा पूछे गए सबसे महत्वपूर्ण सवालों के जवाब पाने के लिए नीचे दिए विषयों पर क्लिक करें:
                </p>

                <div className="space-y-2.5">
                  {CHAT_SUGGESTIONS.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(suggestion.query)}
                      disabled={isChatLoading}
                      className="w-full text-left bg-white hover:bg-orange-50/40 hover:border-orange-300 p-3 rounded-xl border border-stone-200 hover:shadow-2xs transition-all duration-200 group text-xs flex items-start gap-2.5 disabled:opacity-50 cursor-pointer"
                    >
                      <span className="text-orange-500 font-extrabold group-hover:scale-110 shrink-0 mt-0.5">❓</span>
                      <div className="space-y-0.5">
                        <p className="font-bold text-stone-900 leading-tight">
                          {suggestion.textHi}
                        </p>
                        <p className="text-[10px] text-stone-500 italic">
                          {suggestion.textEn}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Legal Warning Notice */}
              <div className="bg-amber-50/80 border border-amber-200 p-3.5 rounded-xl space-y-1.5 text-[11px] text-amber-900 leading-relaxed shadow-3xs">
                <p className="font-extrabold flex items-center gap-1 text-amber-950">
                  <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  सलाह एवं चेतावनी:
                </p>
                <p>
                  यह एआई सहायक केवल सूचनात्मक मार्गदर्शन हेतु है। जमीन की कानूनी सीमा मापी, खतियानी विवाद या सरकारी लगान की अंतिम पुष्टि हेतु अपने अंचल कार्यालय (CO) या राजस्व कर्मचारी से अवश्य मिलें।
                </p>
              </div>
            </div>

            {/* AI Expert Chat Interface */}
            <div className="lg:col-span-8 flex flex-col h-[500px] bg-stone-50/30">
              {/* Message History Viewport */}
              <div className="flex-grow p-4 overflow-y-auto space-y-4">
                {chatMessages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                  >
                    {/* Avatar Icon */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-2xs ${msg.role === "user" ? "bg-green-700 text-white" : "bg-orange-500 text-white"}`}>
                      {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>

                    {/* Chat Text Bubble */}
                    <div className="space-y-1">
                      <div className={`p-4 rounded-2xl shadow-2xs text-sm leading-relaxed whitespace-pre-wrap ${msg.role === "user" ? "bg-green-700 text-white rounded-tr-none" : "bg-white text-stone-900 border border-stone-200 rounded-tl-none"}`}>
                        {/* Process very simple markdown syntax */}
                        {msg.content.split("\n").map((line, lIdx) => {
                          const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/);
                          return (
                            <p key={lIdx} className="mb-1.5 last:mb-0">
                              {parts.map((part, pIdx) => {
                                if (part.startsWith("**") && part.endsWith("**")) {
                                  return <strong key={pIdx} className={msg.role === "user" ? "font-black text-orange-200" : "font-black text-stone-950 bg-stone-100 px-1 rounded-sm"}>{part.slice(2, -2)}</strong>;
                                }
                                if (part.startsWith("*") && part.endsWith("*")) {
                                  return <em key={pIdx} className="font-semibold">{part.slice(1, -1)}</em>;
                                }
                                return part;
                              })}
                            </p>
                          );
                        })}
                      </div>
                      <span className={`text-[9px] text-gray-400 block px-1.5 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}

                {isChatLoading && (
                  <div className="flex gap-3 max-w-[80%] mr-auto items-center animate-pulse">
                    <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-white border border-stone-200 p-4 rounded-2xl rounded-tl-none space-y-1.5 shadow-2xs">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                        </span>
                        <span className="text-xs font-bold text-gray-500">BighaWala AI विचार कर रहा है...</span>
                      </div>
                      <div className="h-2 bg-stone-200 rounded-full w-44"></div>
                      <div className="h-2 bg-stone-200 rounded-full w-56"></div>
                    </div>
                  </div>
                )}

                {apiError && (
                  <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl flex items-start gap-3 text-xs text-rose-800 max-w-[90%] mx-auto shadow-2xs">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
                    <div>
                      <p className="font-bold">एआई कनेक्शन सर्वर त्रुटि (AI Connection Error)</p>
                      <p className="mt-1">{apiError}</p>
                      <p className="mt-2 opacity-90 text-[10px] leading-normal">
                        यदि यह डेवलपर मोड है, तो कृपया सुनिश्चित करें कि आपने AI Studio UI के **Secrets Panel** में अपना <strong>GEMINI_API_KEY</strong> सही से भरा है।
                      </p>
                    </div>
                  </div>
                )}
                
                <div ref={chatEndRef} />
              </div>

              {/* Message input bar */}
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                className="p-3 bg-white border-t border-stone-200 flex items-center gap-2 shadow-xs"
              >
                <input 
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="अपना भूमि सम्बन्धी सवाल यहाँ पूछें (जैसे: जमाबंदी में नाम गलत हो तो क्या करें?)"
                  disabled={isChatLoading}
                  className="flex-grow p-3 text-sm border border-stone-300 rounded-xl focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all disabled:bg-stone-50 font-medium"
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim() || isChatLoading}
                  className="bg-green-700 hover:bg-green-800 disabled:bg-stone-300 text-white p-3 rounded-xl transition-all font-bold text-sm shrink-0 flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed shadow-2xs"
                >
                  <span>पूछें (Ask)</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* Why BighaWala Trust Section with 3 core points */}
        <section id="trust-points-section" className="bg-gradient-to-br from-green-800 via-green-900 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-5 transform translate-y-12 translate-x-12 scale-150 pointer-events-none font-black text-9xl">
            BIHAR
          </div>
          
          <div className="max-w-3xl space-y-2 mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-orange-400">Why BighaWala? (विश्वसनीयता और भरोसा)</h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              बिहार के ग्रामीण क्षेत्रों में जमीन की मापी को लेकर काफी विवाद होते हैं। हमारा लक्ष्य आपको पूरी तरह स्वतंत्र और वैज्ञानिक मापी उपकरण तथा सटीक जानकारी प्रदान करना है।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xs flex gap-4 items-start">
              <span className="text-3xl">✅</span>
              <div>
                <h4 className="font-black text-sm text-orange-300 mb-1">त्रुटिहीन स्थानीय गणना</h4>
                <p className="text-xs text-stone-200 leading-relaxed">
                  हम स्थानीय लग्गी मापों को भी शामिल करते हैं ताकि गाँव के स्तर पर पंच और अमीन द्वारा की जाने वाली पैमाइश से आपकी गणना मेल खाए।
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xs flex gap-4 items-start">
              <span className="text-3xl">🏛️</span>
              <div>
                <h4 className="font-black text-sm text-orange-300 mb-1">सीधा आधिकारिक जुड़ाव</h4>
                <p className="text-xs text-stone-200 leading-relaxed">
                  हम आपको किसी भ्रामक या नकली पोर्टल पर नहीं भेजते। सभी त्वरित मार्गदर्शिकाएँ सीधे सरकारी बिहार भूमि पोर्टल से जुड़ी हुई हैं।
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xs flex gap-4 items-start">
              <span className="text-3xl">⚡</span>
              <div>
                <h4 className="font-black text-sm text-orange-300 mb-1">एआई और डिजिटल क्रांति</h4>
                <p className="text-xs text-stone-200 leading-relaxed">
                  आधुनिक कृत्रिम बुद्धिमत्ता (AI) के सहयोग से बिहार के भूमि नियमों, बंटवारा मुकदमों तथा जमाबंदी त्रुटियों के सवालों के त्वरित जवाब पाएँ।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Comprehensive Dakhil Kharij SEO Article Hub */}
        <DakhilKharijArticle />

        {/* 7. Comprehensive Patna Land Rates SEO Article Hub */}
        <PatnaLandRatesArticle />

        {/* 8. High CPC AdSense Article Hub (Article 1: Agricultural Land Loan) */}
        <HighCpcArticlesHub />

        {/* 9. Bihar Land Leads Landing Page Form */}
        <LeadLandingPage />

        {/* 10. WhatsApp & Social Media Content Calendar Generator */}
        <SocialCalendarHub />

        {/* 11. SEO & AdSense Keyword Planner Dashboard */}
        <SeoKeywordPlanner />

        {/* 12. SEO & HTML Metadata Blueprint Generator */}
        <SeoMetaManager />

        {/* 13. Zameen Ka Kagaz Samjhein - Land Document Explainer */}
        <LandDocumentExplainer />

        {/* 14. Patna District Comprehensive FAQ & Schema Hub */}
        <PatnaDistrictFaq />

        {/* 15. BighaWala AI Chatbot Widget Generator & Showcase */}
        <ChatbotWidgetShowcase />

      </main>

      {/* 5. Footer with required Disclaimer */}
      <footer id="main-footer" className="bg-stone-900 text-stone-400 border-t border-stone-800 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-white font-extrabold text-base flex items-center gap-2">
              <span>🏡</span> BighaWala.com
            </p>
            {/* Required user disclaimer */}
            <p className="text-xs leading-relaxed text-stone-500">
              यह वेबसाइट केवल सूचना के उद्देश्य से है। सरकारी काम, वैधानिक प्रमाण, तथा कानूनी पैमाइश के लिए हमेशा बिहार सरकार के आधिकारिक पोर्टल <a href="https://biharbhumi.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline font-bold hover:text-orange-300 transition-colors">Bihar Bhumi Portal</a> देखें। BighaWala.com एक स्वतंत्र निजी शैक्षणिक उपक्रम है और यह किसी भी सरकारी विभाग या प्राधिकरण से संबद्ध नहीं है।
            </p>
            {/* Links for AdSense and transparency */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
              <a href="/disclaimer/" className="text-xs text-stone-400 hover:text-orange-400 underline transition-colors">अस्वीकरण (Disclaimer)</a>
              <span className="text-stone-700 text-xs">•</span>
              <a href="/privacy-policy/" className="text-xs text-stone-400 hover:text-orange-400 underline transition-colors">गोपनीयता नीति (Privacy Policy)</a>
              <span className="text-stone-700 text-xs">•</span>
              <a href="/disclaimer/#terms" className="text-xs text-stone-400 hover:text-orange-400 underline transition-colors">उपयोग की शर्तें (Terms of Use)</a>
              <span className="text-stone-700 text-xs">•</span>
              <a href="/disclaimer/#about" className="text-xs text-stone-400 hover:text-orange-400 underline transition-colors">हमारे बारे में (About Us)</a>
            </div>
          </div>
          <div className="text-left md:text-right space-y-1">
            <p className="text-xs text-stone-500">
              विकसित भारत - समृद्ध बिहार भूमि अभियान © 2026
            </p>
            <p className="text-sm font-black text-orange-400 tracking-wider">
              BighaWala.com
            </p>
          </div>
        </div>
      </footer>

      {/* ==========================================
          MODALS FOR DETAILED GUIDES
          ========================================== */}
      {activeGuideKey && GUIDES_DATA[activeGuideKey] && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border-t-8 border-orange-500">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-stone-100 flex justify-between items-start sticky top-0 bg-white z-10">
              <div>
                <span className="text-xs font-black uppercase text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md mb-2 inline-block">
                  बिहार भूमि सरकारी गाइड (Bihar Land Guide)
                </span>
                <h3 className="text-xl font-black text-stone-950 mt-1">
                  {languageMode === "english" ? GUIDES_DATA[activeGuideKey].titleEn : GUIDES_DATA[activeGuideKey].titleHi}
                </h3>
              </div>
              <button 
                onClick={() => setActiveGuideKey(null)}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <p className="text-sm text-stone-600 font-medium">
                {languageMode === "english" ? GUIDES_DATA[activeGuideKey].subtitleEn : GUIDES_DATA[activeGuideKey].subtitleHi}
              </p>

              {/* Steps */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase text-stone-400 tracking-wider">आवेदन की प्रक्रिया (Step-by-step process):</h4>
                <ol className="space-y-3.5">
                  {(languageMode === "english" ? GUIDES_DATA[activeGuideKey].stepsEn : GUIDES_DATA[activeGuideKey].stepsHi).map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-xs font-black shrink-0">
                        {idx + 1}
                      </span>
                      {/* Simple bold formatter */}
                      <span className="text-stone-800 font-medium">
                        {step.split("**").map((chunk, cIdx) => cIdx % 2 === 1 ? <strong key={cIdx} className="font-extrabold text-stone-950 underline decoration-green-300 decoration-2">{chunk}</strong> : chunk)}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Important Warnings */}
              <div className="bg-orange-50/80 border border-orange-100 rounded-xl p-4 space-y-2 text-xs text-orange-950">
                <h4 className="font-black flex items-center gap-1 text-orange-900">
                  <Info className="w-4 h-4 shrink-0 text-orange-600" />
                  ज़रूरी बातें (Important Points to remember):
                </h4>
                <ul className="list-disc pl-4 space-y-1.5 font-medium leading-relaxed">
                  {(languageMode === "english" ? GUIDES_DATA[activeGuideKey].importantNotesEn : GUIDES_DATA[activeGuideKey].importantNotesHi).map((note, idx) => (
                    <li key={idx}>
                      {note.split("**").map((chunk, cIdx) => cIdx % 2 === 1 ? <strong key={cIdx} className="font-black">{chunk}</strong> : chunk)}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-100 flex justify-between items-center bg-stone-50">
              <button
                onClick={() => {
                  window.open("https://biharbhumi.bihar.gov.in", "_blank");
                }}
                className="bg-green-700 hover:bg-green-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>Bihar Bhumi पोर्टल पर जाएँ</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button 
                onClick={() => setActiveGuideKey(null)}
                className="bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                बंद करें (Close)
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
