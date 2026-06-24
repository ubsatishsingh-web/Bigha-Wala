import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, Copy, Check, Terminal, ExternalLink, Settings, Lightbulb, Play, Send, RefreshCw } from "lucide-react";

export default function ChatbotWidgetShowcase() {
  const [copied, setCopied] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    {
      text: "नमस्ते! मैं BighaWala Expert हूँ। बिहार की जमीन के बारे में कोई भी सवाल पूछें — हिंदी या अंग्रेजी में। 🏡🌾",
      isUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll inside the mock chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Self-contained widget code string
  const widgetCode = `<!-- BighaWala Chatbot Widget Start -->
<div id="bighawala-chat-widget" style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; position: fixed; bottom: 20px; right: 20px; z-index: 10000; display: flex; flex-direction: column; align-items: flex-end;">
  
  <!-- Floating Button -->
  <button id="bighawala-chat-trigger" style="width: 60px; height: 60px; border-radius: 50px; background-color: #15803d; color: white; border: none; cursor: pointer; box-shadow: 0 4px 12px rgba(21, 128, 61, 0.3); display: flex; align-items: center; justify-content: center; font-size: 28px; transition: transform 0.3s ease, background-color 0.2s;" onmouseover="this.style.transform='scale(1.1)'; this.style.backgroundColor='#166534';" onmouseout="this.style.transform='scale(1.0)'; this.style.backgroundColor='#15803d';">
    🏡
  </button>

  <!-- Chat Window -->
  <div id="bighawala-chat-window" style="display: none; width: 360px; height: 500px; background: white; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); border: 1px solid #e5e7eb; overflow: hidden; flex-direction: column; margin-bottom: 15px; transition: all 0.3s ease;">
    <!-- Header -->
    <div style="background-color: #15803d; color: white; padding: 16px; display: flex; align-items: center; justify-content: space-between;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 24px;">🏡</span>
        <div>
          <h4 style="margin: 0; font-size: 15px; font-weight: bold; letter-spacing: 0.3px;">BighaWala Expert</h4>
          <span style="font-size: 11px; opacity: 0.9; display: flex; align-items: center; gap: 4px;">
            <span style="width: 6px; height: 6px; background-color: #4ade80; border-radius: 50%; display: inline-block;"></span> Active Online
          </span>
        </div>
      </div>
      <button id="bighawala-chat-close" style="background: none; border: none; color: white; font-size: 20px; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center; opacity: 0.8;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.8';">&times;</button>
    </div>

    <!-- Messages Container -->
    <div id="bighawala-chat-messages" style="flex: 1; padding: 16px; overflow-y: auto; background-color: #f9fafb; display: flex; flex-direction: column; gap: 12px; scroll-behavior: smooth;">
      <!-- Welcome Message -->
      <div style="align-self: flex-start; max-width: 85%; background-color: white; color: #1f2937; padding: 12px 16px; border-radius: 12px 12px 12px 2px; font-size: 14px; line-height: 1.5; border: 1px solid #e5e7eb; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
        नमस्ते! मैं BighaWala Expert हूँ। बिहार की जमीन के बारे में कोई भी सवाल पूछें — हिंदी या अंग्रेजी में। 🏡🌾
      </div>
    </div>

    <!-- Input Form -->
    <form id="bighawala-chat-form" style="padding: 12px; border-top: 1px solid #e5e7eb; display: flex; gap: 8px; background: white;">
      <input type="text" id="bighawala-chat-input" placeholder="Type a message..." required style="flex: 1; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 20px; font-size: 14px; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#15803d';" onblur="this.style.borderColor='#d1d5db';">
      <button type="submit" style="background-color: #15803d; border: none; border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: white; transition: background-color 0.2s; shrink-to-fit: no;" onmouseover="this.style.backgroundColor='#166534';" onmouseout="this.style.backgroundColor='#15803d';">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      </button>
    </form>
  </div>
</div>

<script>
(function() {
  const API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
  const triggerBtn = document.getElementById('bighawala-chat-trigger');
  const chatWindow = document.getElementById('bighawala-chat-window');
  const closeBtn = document.getElementById('bighawala-chat-close');
  const messagesContainer = document.getElementById('bighawala-chat-messages');
  const chatForm = document.getElementById('bighawala-chat-form');
  const chatInput = document.getElementById('bighawala-chat-input');

  // Toggle Chat
  triggerBtn.addEventListener('click', () => {
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
      chatWindow.style.display = 'flex';
      chatInput.focus();
    } else {
      chatWindow.style.display = 'none';
    }
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    chatWindow.style.display = 'none';
  });

  // Helper to add chat bubble
  function addMessage(text, isUser = false) {
    const bubble = document.createElement('div');
    bubble.style.maxWidth = '85%';
    bubble.style.padding = '12px 16px';
    bubble.style.fontSize = '14px';
    bubble.style.lineHeight = '1.5';
    bubble.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';

    if (isUser) {
      bubble.style.alignSelf = 'flex-end';
      bubble.style.backgroundColor = '#15803d';
      bubble.style.color = 'white';
      bubble.style.borderRadius = '12px 12px 2px 12px';
    } else {
      bubble.style.alignSelf = 'flex-start';
      bubble.style.backgroundColor = 'white';
      bubble.style.color = '#1f2937';
      bubble.style.borderRadius = '12px 12px 12px 2px';
      bubble.style.border = '1px solid #e5e7eb';
    }

    // Convert line breaks to HTML tags safely
    const formattedText = text.replace(/\\n/g, '<br>');
    bubble.innerHTML = formattedText;
    
    messagesContainer.appendChild(bubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Handle Send
  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;

    // Clear input
    chatInput.value = '';
    
    // Add user message to UI
    addMessage(query, true);

    // Show typing indicator
    const typingBubble = document.createElement('div');
    typingBubble.id = 'bighawala-typing-indicator';
    typingBubble.style.alignSelf = 'flex-start';
    typingBubble.style.backgroundColor = 'white';
    typingBubble.style.border = '1px solid #e5e7eb';
    typingBubble.style.borderRadius = '12px 12px 12px 2px';
    typingBubble.style.padding = '12px 16px';
    typingBubble.style.fontSize = '14px';
    typingBubble.style.color = '#9ca3af';
    typingBubble.innerHTML = 'Thinking<span style="animation: bigha-blink 1s infinite">.</span><span style="animation: bigha-blink 1s infinite 0.2s">.</span><span style="animation: bigha-blink 1s infinite 0.4s">.</span>';
    messagesContainer.appendChild(typingBubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Inject CSS for blinking dots
    if (!document.getElementById('bigha-chat-styles')) {
      const style = document.createElement('style');
      style.id = 'bigha-chat-styles';
      style.innerHTML = \`
        @keyframes bigha-blink {
          0% { opacity: .2; }
          20% { opacity: 1; }
          100% { opacity: .2; }
        }
      \`;
      document.head.appendChild(style);
    }

    try {
      if (API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
        // Mock Response if API key not inserted
        setTimeout(() => {
          typingBubble.remove();
          addMessage("नमस्ते! आपने अभी तक अपनी Gemini API Key सेट नहीं की है। कृपया स्क्रिप्ट के ऊपर 'YOUR_GEMINI_API_KEY_HERE' की जगह अपनी असली की दर्ज करें।\\n\\nबिहार भूमि मापन के अनुसार:\\n- 1 बीघा = 20 कट्ठा\\n- 1 कट्ठा = 20 धुर\\n- 1 कट्ठा = 1361.25 sq ft (पटना में)");
        }, 1200);
        return;
      }

      const response = await fetch(\`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=\${API_KEY}\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: query }]
          }],
          systemInstruction: {
            parts: [{
              text: "You are BighaWala Expert. Answer only about Bihar land, measurement units, Bhulekh, Dakhil Kharij, LPC, Jamabandi, land rates. Reply in simple Hindi+English mix. Keep answers short and practical. If asked about unrelated topics, politely redirect back to Bihar land."
            }]
          }
        })
      });

      const data = await response.json();
      typingBubble.remove();

      if (data.candidates && data.candidates[0].content.parts[0].text) {
        let botText = data.candidates[0].content.parts[0].text;
        addMessage(botText);
      } else {
        addMessage("क्षमा करें, जवाब प्राप्त करने में असमर्थ। कृपया अपनी API Key जांचें।");
      }

    } catch (err) {
      console.error(err);
      typingBubble.remove();
      addMessage("कनेक्शन एरर! कृपया इंटरनेट या API Key की जांच करें।");
    }
  });
})();
</script>
<!-- BighaWala Chatbot Widget End -->`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(widgetCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Local Chat Simulation Engine
  const handleLocalQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = userQuery.trim();
    if (!query) return;

    // Append user query
    setMessages((prev) => [...prev, { text: query, isUser: true }]);
    setUserQuery("");
    setIsLoading(true);

    try {
      if (apiKeyInput) {
        // Real Gemini API Call with user provided API Key in the UI showcase
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKeyInput}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [{ parts: [{ text: query }] }],
              systemInstruction: {
                parts: [
                  {
                    text: "You are BighaWala Expert. Answer only about Bihar land, measurement units, Bhulekh, Dakhil Kharij, LPC, Jamabandi, land rates. Reply in simple Hindi+English mix. Keep answers short and practical. If asked about unrelated topics, politely redirect back to Bihar land.",
                  },
                ],
              },
            }),
          }
        );
        const data = await response.json();
        setIsLoading(false);

        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
          const text = data.candidates[0].content.parts[0].text;
          setMessages((prev) => [...prev, { text: text, isUser: false }]);
        } else {
          setMessages((prev) => [
            ...prev,
            { text: "Error: API Response formats were invalid. Check your key.", isUser: false },
          ]);
        }
      } else {
        // Intelligent Local/Offline Simulation Response based on Keywords
        setTimeout(() => {
          setIsLoading(false);
          let reply = "मैं अभी ऑफ़लाइन सिमुलेशन मोड में हूँ। ";
          const q = query.toLowerCase();

          if (q.includes("bigha") || q.includes("बीघा") || q.includes("katha") || q.includes("कट्ठा")) {
            reply += "बिहार में भूमि मापन इस प्रकार होता है:\n• 1 बीघा = 20 कट्ठा\n• 1 कट्ठा = 20 धुर\n• 1 कट्ठा = 1361.25 Sq Ft (पटना, मुजफ्फरपुर और अधिकांश जिलों में)\n• ग्रामीण बिहार में 1 बीघा लगभग 0.625 एकड़ के बराबर होता है।";
          } else if (q.includes("dakhil") || q.includes("kharij") || q.includes("दाखिल") || q.includes("म्यूटेशन")) {
            reply += "दाखिल खारिज (Mutation) जमीन खरीदने के बाद सबसे जरूरी काम है।\n• सरकारी फीस: ₹0 (निःशुल्क)\n• आवश्यक दस्तावेज: रजिस्ट्री केवाला डीड (Kewala Deed) की PDF, लगान रसीद।\n• पोर्टल: biharbhumi.bihar.gov.in पर जाकर 'ऑनलाइन दाखिल खारिज' पर क्लिक करें।";
          } else if (q.includes("jamabandi") || q.includes("जमाबंदी") || q.includes("lpc")) {
            reply += "जमाबंदी (Register-II) और LPC (Land Possession Certificate) के बारे में:\n• जमाबंदी आपके नाम ऑनलाइन दर्ज होने के बाद ही आप जमीन के असली 'रैयत' बनते हैं।\n• LPC बैंक लोन या सब्सिडी योजनाओं के लिए अनिवार्य है। इसे ऑनलाइन अप्लाई किया जा सकता है।";
          } else if (q.includes("patna") || q.includes("पटना") || q.includes("rate") || q.includes("दाम")) {
            reply += "पटना 2026 में जमीन के औसत दाम ₹15 लाख से लेकर ₹1.5 करोड़+ प्रति कट्ठा तक हैं।\n• कंकड़बाग/बोरिंग रोड: ₹1.2 करोड़ - ₹3 करोड़/कट्ठा\n• दानापुर/सगुनामोर: ₹50 लाख - ₹1.1 करोड़/कट्ठा\n• शिवाला/नौबतपुर: ₹22 लाख - ₹45 लाख/कट्ठा";
          } else if (q.includes("hello") || q.includes("hi") || q.includes("नमस्ते") || q.includes("hey")) {
            reply = "नमस्ते! मैं BighaWala Expert AI हूँ। मैं आपकी बिहार जमीन माप, दाखिल-खारिज, भूलेख रिकॉर्ड्स, और पटना ज़मीन दरों को समझने में मदद कर सकता हूँ। क्या सवाल है आपका?";
          } else {
            reply += "बिहार भूमि राजस्व और मापन के बारे में आपका सवाल मुझे प्राप्त हुआ।\n• जमीन माप (Katha to Sq Ft), दाखिल खारिज (Mutation), जमाबंदी पंजी या सरकारी सर्किल रेट (MVR) के संबंध में कुछ भी पूछें।\n\n💡 आप ऊपर अपनी *Gemini API Key* डालकर इस विजेट को लाइव Google AI से कनेक्ट कर सकते हैं!";
          }

          setMessages((prev) => [...prev, { text: reply, isUser: false }]);
        }, 1000);
      }
    } catch (err) {
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        { text: "एरर! कनेक्शन स्थापित नहीं हो सका। कृपया अपनी API Key जांचें या लोकल मोड में उपयोग करें।", isUser: false },
      ]);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        text: "नमस्ते! मैं BighaWala Expert हूँ। बिहार की जमीन के बारे में कोई भी सवाल पूछें — हिंदी या अंग्रेजी में। 🏡🌾",
        isUser: false,
      },
    ]);
  };

  return (
    <div id="bighawala-chatbot-showcase-hub" className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden mt-10">
      
      {/* Banner / Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="bg-white/10 text-emerald-100 text-xs font-black uppercase px-2.5 py-1 rounded-full border border-white/10 tracking-wider">
            Custom Website Integration
          </span>
          <h3 className="text-xl md:text-2xl font-black flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-emerald-300" />
            <span>AI Chatbot Integration Widget (🏡 HTML + CSS + JS)</span>
          </h3>
          <p className="text-xs text-stone-100 font-medium">
            अपने वर्डप्रेस, ब्लॉगर या किसी भी कस्टम वेबसाइट पर 1 मिनट में BighaWala Chatbot लगाएं!
          </p>
        </div>

        {/* Copy HTML Button */}
        <button
          onClick={copyToClipboard}
          className="bg-white text-stone-900 hover:bg-emerald-50 px-4 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-95 shrink-0"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600 animate-bounce" />
              <span>HTML Code Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-emerald-600" />
              <span>Copy Complete Code (विजेट कोड कॉपी करें)</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12">
        
        {/* Left Side: Settings & Live Playground Demo */}
        <div className="xl:col-span-5 bg-stone-50/70 p-5 border-b xl:border-b-0 xl:border-r border-stone-200 space-y-6">
          
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase text-stone-500 tracking-wider flex items-center gap-1.5">
              <Settings className="w-4 h-4 text-emerald-700" />
              <span>Playground Settings</span>
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              आप इस चैटबॉक्स का नीचे सीधे लाइव ट्रायल ले सकते हैं। बिना API Key के यह स्मार्ट ऑफ़लाइन सिमुलेशन मोड में काम करता है।
            </p>
          </div>

          {/* Optional Gemini API Key input for local testing */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black text-stone-700 uppercase tracking-wider flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-emerald-600" />
                <span>Test with your Gemini API Key:</span>
              </label>
              <span className="text-[10px] text-gray-400 font-semibold uppercase">Optional</span>
            </div>
            <input
              type="password"
              placeholder="AI Studio / Gemini API Key (AI-powered live trial)..."
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              className="w-full text-xs px-3 py-2 rounded-lg border border-stone-200 focus:outline-none focus:border-emerald-600 font-mono"
            />
            <p className="text-[10px] text-gray-500 leading-normal italic">
              *यदि आप अपनी की डालते हैं, तो यह सीधे लाइव Google Gemini API से कनेक्ट हो जाएगा! आपकी चाबी सुरक्षित है और सर्वर पर कहीं सेव नहीं की जाती।
            </p>
          </div>

          {/* Interactive Chat Box Mock */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-md overflow-hidden flex flex-col h-[380px]">
            {/* Mock Header */}
            <div className="bg-emerald-700 text-white px-4 py-3 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-800 flex items-center justify-center text-lg shadow-inner">
                  🏡
                </div>
                <div>
                  <h5 className="text-xs font-black tracking-wide leading-none">BighaWala Expert</h5>
                  <span className="text-[9px] text-emerald-200 font-bold flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{apiKeyInput ? "Live Gemini AI Mode" : "Offline Simulation Mode"}</span>
                  </span>
                </div>
              </div>
              <button
                onClick={handleReset}
                title="Restart Chat"
                className="p-1 hover:bg-emerald-800 rounded-lg text-emerald-100 transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mock Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-stone-50/50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"} animate-fade-in`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs shadow-xs leading-relaxed whitespace-pre-line ${
                      msg.isUser
                        ? "bg-emerald-700 text-white rounded-br-none font-medium"
                        : "bg-white text-stone-800 border border-stone-200 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-400 border border-stone-200 rounded-xl rounded-bl-none px-3.5 py-2 text-xs flex items-center gap-1">
                    <span className="animate-pulse">BighaWala AI is typing</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-200">.</span>
                    <span className="animate-bounce delay-300">.</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Mock Input Bar */}
            <form onSubmit={handleLocalQuery} className="p-2.5 border-t border-stone-200 flex gap-2 bg-white">
              <input
                type="text"
                placeholder="पूछें: '1 बीघा में कितना कट्ठा?' या 'दाखिल खारिज क्या है?'"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                className="flex-1 text-xs px-3 py-2 rounded-xl border border-stone-200 focus:outline-none focus:border-emerald-600 bg-stone-50"
              />
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl p-2 cursor-pointer transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Right Side: Copy-Paste Code Editor Block & Instructions */}
        <div className="xl:col-span-7 p-5 sm:p-6 space-y-6 flex flex-col bg-stone-900 text-stone-100">
          
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <span className="text-xs text-stone-400 font-black tracking-widest uppercase flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>HTML+CSS+JS Code Widget (Ready to Paste)</span>
            </span>
            <button
              onClick={copyToClipboard}
              className="text-xs bg-stone-800 hover:bg-emerald-700 text-stone-200 hover:text-white px-3 py-1.5 rounded-lg border border-stone-700 transition-all flex items-center gap-1 active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Code display block with custom scroll */}
          <div className="relative">
            <pre className="text-xs font-mono bg-stone-950 p-4 rounded-xl border border-stone-800 overflow-x-auto max-h-[350px] leading-relaxed text-emerald-400">
              <code>{widgetCode}</code>
            </pre>
          </div>

          {/* Step-by-Step Deployment Instructions */}
          <div className="space-y-4 pt-2">
            <h5 className="text-xs font-black uppercase text-stone-300 tracking-wider flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <span>How to deploy on your website (इंस्टॉलेशन गाइड):</span>
            </h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-xl space-y-2">
                <h6 className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <span className="w-4 h-4 bg-emerald-900/50 text-emerald-300 rounded-full flex items-center justify-center text-[10px]">1</span>
                  <span>अपनी API Key बदलें (Set API Key)</span>
                </h6>
                <p className="text-[11px] text-stone-400 leading-normal">
                  ऊपर दिए कोड को कॉपी करने के बाद, लाइन संख्या 54 (या स्क्रिप्ट की शुरुआत में) 
                  <code className="text-yellow-400 font-mono ml-1">YOUR_GEMINI_API_KEY_HERE</code> को अपनी असली Google Gemini API Key से बदलें। आप इसे गूगल AI स्टूडियो से बिल्कुल मुफ्त ले सकते हैं।
                </p>
              </div>

              <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-xl space-y-2">
                <h6 className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <span className="w-4 h-4 bg-emerald-900/50 text-emerald-300 rounded-full flex items-center justify-center text-[10px]">2</span>
                  <span>वेबसाइट में पेस्ट करें (Paste Code)</span>
                </h6>
                <p className="text-[11px] text-stone-400 leading-normal">
                  <strong>WordPress:</strong> अपने एडमिन डैशबोर्ड में जाएं, 'Appearance' &gt; 'Theme File Editor' &gt; <code className="text-yellow-400 font-mono">footer.php</code> फ़ाइल खोलें, और बंद होते हुए बॉडी टैग <code className="text-yellow-400 font-mono">&lt;/body&gt;</code> के ठीक ऊपर इसे पेस्ट कर सेव कर दें।
                </p>
              </div>
            </div>

            <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-xl space-y-2 text-[11px] text-stone-400">
              <p className="font-semibold text-stone-200">Blogger / HTML Sites पर लगाने का तरीका:</p>
              <p>
                Blogger पर जाएं, 'Theme' &gt; 'Edit HTML' पर क्लिक करें, और फ़ाइल के अंत में <code className="text-emerald-400 font-mono">&lt;/body&gt;</code> ढूंढकर इस पूरे कोड ब्लॉक को वहां चिपका दें। बस! आपकी वेबसाइट पर एक सुंदर, मोबाइल-अनुकूल और गतिशील 🏡 चैट रोबोट विजेट नीचे दाईं ओर लाइव दिखाई देने लगेगा।
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
