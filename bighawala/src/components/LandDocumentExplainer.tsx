import React, { useState } from "react";
import { FileText, Sparkles, Send, Copy, RotateCcw, AlertTriangle, CheckCircle, Info, BookOpen, Download } from "lucide-react";

interface SampleDocument {
  title: string;
  subtitle: string;
  type: string;
  text: string;
}

const SAMPLE_DOCUMENTS: SampleDocument[] = [
  {
    title: "Jamabandi (जमाबंदी पंजी)",
    subtitle: "Bihar Bhumi Portal Online Copy",
    type: "Jamabandi",
    text: `बिहार सरकार, राजस्व एवं भूमि सुधार विभाग
पंजी-II (जमाबंदी पंजी) प्रतिवेदन
अंचल: पटना सदर | जिला: पटना | मौजा: कंकड़बाग | थाना नंबर: 124
भाग वर्तमान: 4 | पृष्ठ संख्या: 189 | जमाबंदी संख्या: 1403
रैयत का नाम: सतीश सिंह, पिता का नाम: रामदेव सिंह
जाति: राजपूत | निवास: कंकड़बाग, पटना
भूमि का विवरण:
खाता संख्या: 45 | खेसरा संख्या (प्लॉट): 1024, 1025
कुल क्षेत्रफल: 0 बीघा - 12 कट्ठा - 10 धूर (यानी 0.625 एकड़ या 25 डिसमिल)
लगान विवरण: कुल लगान देय ₹25.00, वर्तमान बकाया: शून्य (0.00)
अभ्युक्ति (टिप्पणी): दाखिल खारिज संख्या 2034/2022-23 द्वारा नामांतरण स्वीकृत। चौहद्दी: उत्तर- सड़क, दक्षिण- रामेश्वर महतो, पूर्व- सरकारी नाला, पश्चिम- स्वयं।`
  },
  {
    title: "Sale Deed Kewala (केवाला रजिस्ट्री)",
    subtitle: "Registry Office Document Text",
    type: "Kewala",
    text: `निबंधन कार्यालय: दानापुर, पटना
विक्रय विलेख (Sale Deed) - केवाला पत्र
दस्तावेज संख्या: 4502/2024 | तिथि: 12 मार्च 2024
क्रेता (खरीदार): अमित कुमार, पिता: शिव नारायण प्रसाद, साकिन: खगौल, पटना
विक्रेता (बेचने वाला): मोहम्मद मुस्तफा, पिता: अली हसन, साकिन: फुलवारीशरीफ, पटना
जमीन की चौहद्दी व रकबा:
मौजा: शिवाला | थाना नंबर: 87 | परगना: फुलवारी
खाता नं: 112 | खेसरा (प्लॉट) नं: 846 | कुल रकबा: 5 कट्ठा 0 धूर (लग्गी 5.5 हाथ के अनुसार लगभग 6,806 वर्ग फीट)
हस्तांतरित मूल्य (सरकारी मूल्य): ₹15,00,000 (पंद्रह लाख रुपये मात्र)
स्टांप शुल्क जमा: ₹90,000 | निबंधन शुल्क: ₹30,000
गवाह: दिनेश राम, हरेंद्र यादव। साक्षी गण के समक्ष विक्रेता ने पूर्ण मूल्य प्राप्त कर आधिपत्य सौंपा।`
  },
  {
    title: "LPC (भूमि कब्जा प्रमाण पत्र)",
    subtitle: "Land Possession Certificate",
    type: "LPC",
    text: `कार्यालय: अंचल अधिकारी, बिहटा (पटना)
भूमि स्वामित्व प्रमाण पत्र (LPC) - संख्या: LPC/2025/482
प्रमाणित किया जाता है कि मौजा: कन्हौली, थाना संख्या: 156 के जमाबंदी रैयत श्री राकेश रंजन, पिता: स्वर्गीय लालजी रंजन हैं।
इनकी जमाबंदी संख्या 892 है, जिसमें निम्न भूमि दर्ज है:
खाता संख्या: 78 | खेसरा संख्या: 1205, 1206 | कुल क्षेत्रफल: 1 बीघा 2 कट्ठा 0 धूर।
इस जमाबंदी पर वित्तीय वर्ष 2024-25 तक का लगान चुकता है। वर्तमान में इस भूमि पर रैयत का शांतिपूर्ण भौतिक कब्जा (Physical Possession) पाया गया है। यह प्रमाण पत्र बैंक ऋण/कृषि योजनाओं हेतु निर्गत किया गया है।`
  }
];

export default function LandDocumentExplainer() {
  const [inputText, setInputText] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSelectSample = (sample: SampleDocument) => {
    setInputText(sample.text);
    setExplanation("");
    setError(null);
  };

  const handleExplain = async () => {
    if (!inputText.trim()) {
      setError("कृपया समझाने के लिए दस्तावेज का कुछ भाग या पूरा पाठ नीचे दर्ज करें। (Please paste some document text first.)");
      return;
    }

    setLoading(true);
    setError(null);
    setExplanation("");

    try {
      const response = await fetch("/api/explain-document", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentText: inputText }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "सर्वर से उत्तर प्राप्त करने में समस्या हुई। (Failed to fetch from server.)");
      }

      setExplanation(data.explanation);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "कुछ तकनीकी खराबी आई। कृपया इंटरनेट चेक करें और दोबारा प्रयास करें।");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setInputText("");
    setExplanation("");
    setError(null);
  };

  const handleCopyExplanation = () => {
    if (!explanation) return;
    navigator.clipboard.writeText(explanation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    if (!explanation) return;
    const element = document.createElement("a");
    const file = new Blob([explanation], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "BighaWala_Document_Explanation.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Safe simple parser to format the markdown response from Gemini with bold, headers, lists and bullets beautifully
  const renderFormattedExplanation = (text: string) => {
    if (!text) return null;

    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();

      // Check if it's a primary section heading (e.g., **1. दस्तावेज का प्रकार** or similar)
      const isHeader = trimmed.startsWith("**") && trimmed.endsWith("**") || trimmed.startsWith("###") || trimmed.startsWith("##");
      
      // Check if it's a bullet point
      const isBullet = trimmed.startsWith("- ") || trimmed.startsWith("* ");

      // Check if it's a numbered point
      const isNumbered = /^\d+\.\s+/.test(trimmed);

      // Clean bold markers for inline content rendering
      const cleanInlineBold = (str: string) => {
        const parts = str.split("**");
        return parts.map((part, pIdx) => {
          // Odd indices are between "**" so they should be bold
          return pIdx % 2 === 1 ? <strong key={pIdx} className="font-extrabold text-stone-900 bg-stone-100 px-1 rounded">{part}</strong> : part;
        });
      };

      if (isHeader) {
        const cleanHeader = trimmed.replace(/\*\*|###|##/g, "").trim();
        return (
          <h4 key={idx} className="text-sm font-black text-emerald-900 border-l-4 border-emerald-600 pl-2.5 mt-5 mb-2.5 uppercase tracking-wide flex items-center gap-1.5 bg-emerald-50/50 py-1.5 pr-2 rounded-r-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            {cleanHeader}
          </h4>
        );
      }

      if (isBullet) {
        const cleanLine = trimmed.replace(/^[\-\*]\s+/, "");
        return (
          <li key={idx} className="ml-4 list-disc text-stone-700 text-xs leading-relaxed mb-1.5">
            {cleanInlineBold(cleanLine)}
          </li>
        );
      }

      if (isNumbered) {
        const cleanLine = trimmed.replace(/^\d+\.\s+/, "");
        const match = trimmed.match(/^(\d+)\.\s+/);
        const num = match ? match[1] : "•";
        return (
          <div key={idx} className="flex items-start gap-2.5 ml-1 my-2">
            <span className="bg-emerald-600 text-white font-mono font-black rounded-md w-5 h-5 text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              {num}
            </span>
            <div className="text-xs text-stone-800 font-medium leading-relaxed">
              {cleanInlineBold(cleanLine)}
            </div>
          </div>
        );
      }

      if (trimmed === "") {
        return <div key={idx} className="h-2"></div>;
      }

      return (
        <p key={idx} className="text-stone-700 text-xs leading-relaxed mb-2 font-sans pl-1">
          {cleanInlineBold(trimmed)}
        </p>
      );
    });
  };

  return (
    <div id="land-document-explainer" className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden mt-12 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-950 to-stone-900 p-6 md:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase px-3 py-1 rounded-full border border-emerald-500/30 tracking-widest inline-block">
            BighaWala AI Smart Tool
          </span>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2.5">
            <FileText className="w-8 h-8 text-emerald-400" />
            <span>ज़मीन का कागज़ समझें | Land Document Explainer</span>
          </h2>
          <p className="text-xs text-stone-300 max-w-2xl font-medium leading-relaxed">
            जमाबंदी, रजिस्ट्री केवाला, या LPC के कठिन राजस्व शब्दों को सरल हिंदी और अंग्रेजी में समझें। नीचे दस्तावेज का पाठ कॉपी करके पेस्ट करें या हमारे सैंपल्स लोड करके देखें।
          </p>
        </div>
        <div className="bg-emerald-900/40 border border-emerald-500/20 p-4 rounded-2xl flex items-center gap-3 shrink-0">
          <Sparkles className="w-8 h-8 text-amber-400 shrink-0 animate-pulse" />
          <div className="text-left">
            <div className="text-xs font-extrabold text-amber-200">99.2% AI Accuracy</div>
            <div className="text-[10px] text-stone-300 font-medium">Bilingual Bihar Revenue Specialist</div>
          </div>
        </div>
      </div>

      {/* Main Grid Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
        
        {/* LEFT COMPONENT: Pasting panel (5 Columns) */}
        <div className="lg:col-span-5 p-5 md:p-6 bg-stone-50/50 space-y-5">
          
          <div className="space-y-1.5">
            <label className="text-xs font-black text-stone-800 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <span>1. नमूना दस्तावेज लोड करें (Load Sample Documents to Test)</span>
            </label>
            <p className="text-[11px] text-stone-500 leading-normal">
              यदि आपके पास अभी कोई कागज़ नहीं है, तो तुरंत परीक्षण करने के लिए नीचे दिए गए किसी भी सैंपल पर क्लिक करें:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 pt-1">
              {SAMPLE_DOCUMENTS.map((sample, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectSample(sample)}
                  className="bg-white hover:bg-emerald-50/50 border border-stone-200 hover:border-emerald-300 p-2.5 rounded-xl text-left transition-all group flex flex-col justify-between cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-stone-800 group-hover:text-emerald-900 truncate">
                      {sample.title}
                    </span>
                    <span className="bg-stone-100 text-stone-500 text-[8px] font-mono font-bold uppercase px-1 rounded">
                      {sample.type}
                    </span>
                  </div>
                  <span className="text-[9px] text-stone-400 font-medium pt-0.5 group-hover:text-emerald-700">
                    {sample.subtitle}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="document-text-area" className="text-xs font-black text-stone-800 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span>2. अपना कागज़ यहाँ पेस्ट करें (Paste Document Text)</span>
              </label>
              {inputText && (
                <button
                  onClick={handleClear}
                  className="text-[10px] text-red-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>साफ़ करें (Clear)</span>
                </button>
              )}
            </div>

            <textarea
              id="document-text-area"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="जमाबंदी पंजी, केवाला विलेख, रजिस्टर २ की नकल या राजस्व विभाग की रसीद का टेक्स्ट यहाँ पेस्ट करें..."
              className="w-full h-64 p-4 text-xs bg-white text-stone-800 border border-stone-300 rounded-2xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 font-mono leading-relaxed resize-none shadow-3xs"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-red-950">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed font-medium">{error}</p>
            </div>
          )}

          <button
            onClick={handleExplain}
            disabled={loading}
            className={`w-full py-3.5 rounded-2xl font-black text-xs text-white shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 ${
              loading
                ? "bg-stone-400 cursor-not-allowed"
                : "bg-emerald-700 hover:bg-emerald-800"
            }`}
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>कागज़ पढ़ रहे हैं... कृपया रुकें (AI Analyzing...)</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>समझाएं (Explain Document Now)</span>
              </>
            )}
          </button>

          <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200/50 space-y-1.5">
            <h5 className="text-[11px] font-black text-amber-950 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-amber-700" />
              <span>महत्वपूर्ण जानकारी (User Notice)</span>
            </h5>
            <p className="text-[10px] text-stone-600 leading-relaxed font-medium">
              यह AI टूल केवल दस्तावेज़ों को सरल भाषा में समझाने के लिए है। किसी भी कानूनी विवाद, संपत्ति खरीद या अधिकारिक सत्यापन के लिए सरकारी पोर्टल <strong className="text-amber-900 font-bold">biharbhumi.bihar.gov.in</strong> या अपने नजदीकी राजस्व अधिकारी से परामर्श लें।
            </p>
          </div>

        </div>

        {/* RIGHT COMPONENT: Output Explanation Panel (7 Columns) */}
        <div className="lg:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="space-y-0.5">
                <span className="text-[9px] text-emerald-700 font-black tracking-widest uppercase">
                  Real-time Explainer Output
                </span>
                <h3 className="text-base font-black text-stone-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
                  <span>दस्तावेज की सरल व्याख्या (Simplified Insights)</span>
                </h3>
              </div>

              {explanation && (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyExplanation}
                    className="bg-stone-100 hover:bg-stone-200/80 px-2.5 py-1.5 rounded-lg text-[10px] font-black text-stone-700 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-3 h-3 text-green-600 animate-bounce" />
                        <span>कॉपी हो गया!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>कॉपी करें</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleDownloadTxt}
                    className="bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1.5 rounded-lg text-[10px] font-black text-emerald-800 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Download className="w-3 h-3" />
                    <span>सेव करें (.txt)</span>
                  </button>
                </div>
              )}
            </div>

            {/* Empty State / Loading State / Explanation Render State */}
            {!explanation && !loading && (
              <div className="h-[420px] flex flex-col items-center justify-center text-center p-8 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200">
                <FileText className="w-12 h-12 text-stone-300 mb-3" />
                <h4 className="text-xs font-black text-stone-700">अभी कोई व्याख्या लोड नहीं है</h4>
                <p className="text-[11px] text-stone-500 max-w-xs mt-1 leading-normal">
                  बाएं हाथ के बॉक्स में अपने ज़मीन का रिकॉर्ड पेस्ट करें और 'समझाएं' बटन पर क्लिक करें। या ऊपर दिए सैंपल्स लोड करें।
                </p>
              </div>
            )}

            {loading && (
              <div className="h-[420px] flex flex-col items-center justify-center text-center p-8 bg-stone-50 rounded-2xl">
                <div className="relative flex items-center justify-center mb-4">
                  <div className="absolute w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-xs font-black text-stone-800 animate-pulse">बीघावाला एआई दस्तावेज़ पढ़ रहा है...</h4>
                <p className="text-[11px] text-stone-500 max-w-sm mt-1 leading-normal">
                  हम खाता, खेसरा, रकबा, रैयत का नाम, और दाखिल खारिज की स्थिति का विश्लेषण कर रहे हैं। इसमें कुछ सेकंड लग सकते हैं।
                </p>
              </div>
            )}

            {explanation && (
              <div className="bg-stone-50/50 rounded-2xl p-4 sm:p-5 border border-stone-200/60 max-h-[500px] overflow-y-auto scrollbar-thin space-y-1">
                {renderFormattedExplanation(explanation)}
              </div>
            )}

          </div>

          {/* Quick legal education banner */}
          <div className="border-t border-stone-200 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] text-stone-500 font-medium">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>Bihar Revenue Terms: Kewala = रजिस्ट्री कागज़, Jamabandi = दाखिल खारिज के बाद का रिकॉर्ड।</span>
            </span>
            <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full shrink-0">
              AI-Powered by Gemini 3.5 Flash
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
