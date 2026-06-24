import React, { useState } from "react";
import { User, Phone, MapPin, HelpCircle, Send, CheckCircle2, Copy, Check, Shield, Users, Map, MessageSquare, Sparkles } from "lucide-react";

export default function LeadLandingPage() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    district: "",
    helpType: "",
  });

  const biharDistricts = [
    "Araria (अररिया)", "Arwal (अरवल)", "Aurangabad (औरंगाबाद)", "Banka (बांका)", 
    "Begusarai (बेगूसराय)", "Bhagalpur (भागलपुर)", "Bhojpur (भोजपुर)", "Buxar (बक्सर)", 
    "Darbhanga (दरभंगा)", "East Champaran (पूर्वी चंपारण)", "Gaya (गया)", "Gopalganj (गोपालगंज)", 
    "Jamui (जमुई)", "Jehanabad (जहानाबाद)", "Kaimur (कैमूर)", "Katihar (कटिहार)", 
    "Khagaria (खगड़िया)", "Kishanganj (किशनगंज)", "Lakhisarai (लखीसराय)", "Madhepura (मधेपुरा)", 
    "Madhubani (मधुबनी)", "Munger (मुंगेर)", "Muzaffarpur (मुजफ्फरपुर)", "Nalanda (नालंदा)", 
    "Nawada (नवादा)", "Patna (पटना)", "Purnia (पूर्णिया)", "Rohtas (रोहतास)", 
    "Saharsa (सहरसा)", "Samastipur (समस्तीपुर)", "Saran (सारण)", "Sheikhpura (शेखपुरा)", 
    "Sheohar (शिवहर)", "Sitamarhi (सीतामढ़ी)", "Siwan (सीवान)", "Supaul (सुपौल)", 
    "Vaishali (वैशाली)", "West Champaran (पश्चिमी चंपारण)"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Google Analytics Event Tracking Placeholder
    if (typeof window !== "undefined") {
      console.log("Triggering Google Analytics Event: 'lead_form_submitted'", formData);
      // Actual GA4 syntax:
      // @ts-ignore
      if (window.gtag) {
        // @ts-ignore
        window.gtag("event", "lead_generation", {
          event_category: "Consultation Form",
          event_label: formData.helpType,
          value: 1,
          district: formData.district,
        });
      }
    }

    // Set submitted status
    setFormSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    // Generate text for WhatsApp
    const messageText = `नमस्ते BighaWala Expert! मेरा नाम ${formData.name} है। मैं ${formData.district} जिला से हूँ। मुझे निम्नलिखित सहायता की आवश्यकता है: ${formData.helpType}। कृपया मुझसे संपर्क करें।`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919999999999?text=${encodedMessage}`; // Default placeholder number, easily editable
    
    // Google Analytics Event Tracking for WhatsApp Redirect Click
    if (typeof window !== "undefined") {
      // @ts-ignore
      if (window.gtag) {
        // @ts-ignore
        window.gtag("event", "whatsapp_redirect_click", {
          event_category: "Leads",
          event_label: formData.name,
        });
      }
    }

    window.open(whatsappUrl, "_blank");
  };

  const handleResetForm = () => {
    setFormData({ name: "", mobile: "", district: "", helpType: "" });
    setFormSubmitted(false);
  };

  // Raw HTML content for pasting directly on standard HTML landing page hosts
  const landingPageHtmlCode = `<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bihar Mein Zameen Kharidne Mein Help Chahiye? Talk to Our Expert | निःशुल्क सलाह</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0fdf4;
        }
    </style>
    <!-- Google Analytics (GA4) Tracking Script Placeholder -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXX');
    </script>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">

    <div class="max-w-4xl w-full bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        <!-- Left Banner: Value Proposition & Trust Signals -->
        <div class="md:col-span-5 bg-gradient-to-br from-emerald-800 to-green-700 p-8 text-white flex flex-col justify-between space-y-8">
            <div class="space-y-4">
                <div class="inline-flex items-center gap-1.5 bg-emerald-900/40 border border-emerald-500/30 rounded-full px-3 py-1 text-xs font-semibold text-emerald-200">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    बिहार भूमि एक्सपर्ट सेवा 2026
                </div>
                <h2 class="text-2xl sm:text-3xl font-extrabold leading-tight">
                    Bihar में जमीन खरीद रहे हैं या बेच रहे हैं?
                </h2>
                <p class="text-sm text-emerald-100/90 leading-relaxed">
                    जमीन रजिस्ट्री, केवाला, डिजिटल लगान रसीद, दाखिल खारिज (Mutation) या भूमि विवाद से जुड़ी किसी भी समस्या के लिए हमारे एक्सपर्ट से निःशुल्क परामर्श लें।
                </p>
            </div>

            <!-- Trust Badges -->
            <div class="space-y-4 pt-6 border-t border-emerald-600/50">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-900/30 flex items-center justify-center text-lg">👥</div>
                    <div>
                        <h4 class="text-sm font-bold">500+ लोगों की मदद की</h4>
                        <p class="text-[11px] text-emerald-200">सफलतापूर्वक सही सलाह देकर धोखे से बचाया</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-900/30 flex items-center justify-center text-lg">🗺️</div>
                    <div>
                        <h4 class="text-sm font-bold">Bihar के सभी 38 जिले</h4>
                        <p class="text-[11px] text-emerald-200">हर अंचल और पंचायत का सटीक जमीनी अनुभव</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-900/30 flex items-center justify-center text-lg">🛡️</div>
                    <div>
                        <h4 class="text-sm font-bold">100% सुरक्षित एवं गोपनीय</h4>
                        <p class="text-[11px] text-emerald-200">आपका डेटा किसी बाहरी एजेंट से साझा नहीं होगा</p>
                    </div>
                </div>
            </div>

            <div class="text-[10px] text-emerald-300">
                © 2026 BighaWala.com | जनहित में जारी सहायता केंद्र
            </div>
        </div>

        <!-- Right Side: Interactive Consultation Form -->
        <div class="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center bg-white" id="bighawala-form-container">
            
            <!-- Standard Form Header -->
            <div class="mb-6" id="form-header-text">
                <h3 class="text-xl font-bold text-gray-900">फ्री सलाह के लिए फॉर्म भरें</h3>
                <p class="text-xs text-gray-500 mt-1">हमारे एक्सपर्ट अगले 24 घंटे में आपसे खुद संपर्क करेंगे।</p>
            </div>

            <!-- Main Input Form -->
            <form id="bighawala-lead-form" class="space-y-4">
                <!-- Name -->
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">आपका नाम (Full Name) *</label>
                    <div class="relative">
                        <input type="text" id="lead-name" placeholder="अपना पूरा नाम दर्ज करें" required class="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600">
                        <span class="absolute left-3.5 top-3 text-gray-400">👤</span>
                    </div>
                </div>

                <!-- Mobile -->
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">मोबाइल नंबर (WhatsApp Number) *</label>
                    <div class="relative">
                        <input type="tel" id="lead-mobile" placeholder="10 अंकों का मोबाइल नंबर" pattern="[0-9]{10}" required class="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600">
                        <span class="absolute left-3.5 top-3 text-gray-400">📞</span>
                    </div>
                </div>

                <!-- District Dropdown -->
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">आपका जिला (Select District) *</label>
                    <div class="relative">
                        <select id="lead-district" required class="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 appearance-none bg-white">
                            <option value="">-- जिला चुनें --</option>
                            <option value="Araria">Araria (अररिया)</option>
                            <option value="Arwal">Arwal (अरवल)</option>
                            <option value="Aurangabad">Aurangabad (औरंगाबाद)</option>
                            <option value="Banka">Banka (बांका)</option>
                            <option value="Begusarai">Begusarai (बेगूसराय)</option>
                            <option value="Bhagalpur">Bhagalpur (भागलपुर)</option>
                            <option value="Bhojpur">Bhojpur (भोजपुर)</option>
                            <option value="Buxar">Buxar (बक्सर)</option>
                            <option value="Darbhanga">Darbhanga (दरभंगा)</option>
                            <option value="East Champaran">East Champaran (पूर्वी चंपारण)</option>
                            <option value="Gaya">Gaya (गया)</option>
                            <option value="Gopalganj">Gopalganj (गोपालगंज)</option>
                            <option value="Jamui">Jamui (जमुई)</option>
                            <option value="Jehanabad">Jehanabad (जहानावद)</option>
                            <option value="Kaimur">Kaimur (कैमूर)</option>
                            <option value="Katihar">Katihar (कटिहार)</option>
                            <option value="Khagaria">Khagaria (खगड़िया)</option>
                            <option value="Kishanganj">Kishanganj (किशनगंज)</option>
                            <option value="Lakhisarai">Lakhisarai (लखीसराय)</option>
                            <option value="Madhepura">Madhepura (मधेपुरा)</option>
                            <option value="Madhubani">Madhubani (मधुबनी)</option>
                            <option value="Munger">Munger (मुंगेर)</option>
                            <option value="Muzaffarpur">Muzaffarpur (मुजफ्फरपुर)</option>
                            <option value="Nalanda">Nalanda (नालंदा)</option>
                            <option value="Nawada">Nawada (नवादा)</option>
                            <option value="Patna">Patna (पटना)</option>
                            <option value="Purnia">Purnia (पूर्णिया)</option>
                            <option value="Rohtas">Rohtas (रोहतास)</option>
                            <option value="Saharsa">Saharsa (सहरसा)</option>
                            <option value="Samastipur">Samastipur (समस्तीपुर)</option>
                            <option value="Saran">Saran (सारण)</option>
                            <option value="Sheikhpura">Sheikhpura (शेखपुरा)</option>
                            <option value="Sheohar">Sheohar (शिवहर)</option>
                            <option value="Sitamarhi">Sitamarhi (सीतामढ़ी)</option>
                            <option value="Siwan">Siwan (सीवान)</option>
                            <option value="Supaul">Supaul (सुपौल)</option>
                            <option value="Vaishali">Vaishali (वैशाली)</option>
                            <option value="West Champaran">West Champaran (पश्चिमी चंपारण)</option>
                        </select>
                        <span class="absolute left-3.5 top-3 text-gray-400">📍</span>
                    </div>
                </div>

                <!-- Help Type Dropdown -->
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">आपको क्या मदद चाहिए? (How can we help?) *</label>
                    <div class="relative">
                        <select id="lead-help" required class="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 appearance-none bg-white">
                            <option value="">-- समस्या / सेवा चुनें --</option>
                            <option value="Zameen kharidna chahta hoon">Zameen kharidna chahta hoon (जमीन खरीदना चाहता हूँ)</option>
                            <option value="Zameen bechna chahta hoon">Zameen bechna chahta hoon (जमीन बेचना चाहता हूँ)</option>
                            <option value="Dakhil Kharij mein problem">Dakhil Kharij mein problem (दाखिल खारिज में दिक्कत)</option>
                            <option value="LPC chahiye">LPC chahiye (एलपीसी चाहिए)</option>
                            <option value="Land dispute">Land dispute (भूमि विवाद / नापी सम्बन्धी)</option>
                            <option value="Other">Other (अन्य सवाल)</option>
                        </select>
                        <span class="absolute left-3.5 top-3 text-gray-400">❓</span>
                    </div>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 mt-4 cursor-pointer flex items-center justify-center gap-2">
                    <span>मुफ्त सलाह लें</span>
                    <span>➔</span>
                </button>
            </form>

            <!-- Success Content Box (Hidden by default) -->
            <div id="success-box" class="hidden text-center py-6 space-y-6">
                <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-3xl">
                    ✅
                </div>
                <div class="space-y-2">
                    <h4 class="text-xl font-bold text-gray-900">जानकारी सफलतापूर्वक सबमिट हो गई है!</h4>
                    <p class="text-xs text-gray-500 max-w-sm mx-auto">
                        हमारे एक्सपर्ट को आपकी इंक्वायरी मिल चुकी है। तुरंत सलाह पाने के लिए नीचे दिए व्हाट्सएप बटन पर क्लिक करें।
                    </p>
                </div>

                <!-- WhatsApp Redirect Button -->
                <button id="whatsapp-redirect-btn" class="w-full bg-green-500 hover:bg-green-600 text-white font-extrabold text-sm py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.848.001-2.633-1.025-5.101-2.887-6.967C16.586 1.964 14.124.939 11.498.939c-5.441 0-9.868 4.413-9.871 9.851-.001 1.768.487 3.49 1.415 5.021l-.979 3.57 3.659-.958zm12.333-6.66c-.332-.166-1.966-.969-2.269-1.079-.303-.11-.522-.166-.743.166-.221.332-.857 1.079-1.05 1.3-.193.222-.387.249-.719.083-.332-.166-1.402-.516-2.67-1.646-.987-.88-1.653-1.967-1.846-2.3-.193-.332-.021-.512.145-.677.15-.148.332-.387.498-.58.166-.193.221-.332.332-.553.111-.222.055-.415-.027-.58-.083-.166-.743-1.792-1.018-2.457-.268-.649-.54-.56-.743-.57l-.634-.01c-.221 0-.58.083-.884.415-.304.331-1.162 1.135-1.162 2.766s1.19 3.207 1.355 3.428c.166.221 2.342 3.576 5.674 5.016.792.342 1.41.547 1.892.7.796.253 1.52.217 2.093.131.639-.096 1.966-.803 2.242-1.577.276-.775.276-1.439.194-1.577-.083-.139-.304-.221-.636-.387z"/></svg>
                    <span>एक्सपर्ट से सीधे WhatsApp पर बात करें</span>
                </button>
            </div>

        </div>

    </div>

    <!-- JavaScript to handle submission and redirect -->
    <script>
        const form = document.getElementById('bighawala-lead-form');
        const formContainer = document.getElementById('bighawala-form-container');
        const formHeader = document.getElementById('form-header-text');
        const successBox = document.getElementById('success-box');
        const whatsappBtn = document.getElementById('whatsapp-redirect-btn');

        // Capture data
        let userData = {
            name: '',
            mobile: '',
            district: '',
            help: ''
        };

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            userData.name = document.getElementById('lead-name').value.trim();
            userData.mobile = document.getElementById('lead-mobile').value.trim();
            userData.district = document.getElementById('lead-district').value;
            userData.help = document.getElementById('lead-help').value;

            // Trigger Google Analytics tracking event
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'lead_generation_submit', {
                    'event_category': 'Leads',
                    'event_label': userData.help,
                    'user_district': userData.district
                });
            }

            // Hide form and show success
            form.classList.add('hidden');
            formHeader.classList.add('hidden');
            successBox.classList.remove('hidden');
        });

        whatsappBtn.addEventListener('click', function() {
            const msg = "नमस्ते BighaWala Expert! मेरा नाम " + userData.name + " है। मैं " + userData.district + " जिला से हूँ। मुझे निम्नलिखित सहायता की आवश्यकता है: " + userData.help + "। कृपया मुझसे संपर्क करें।";
            const encoded = encodeURIComponent(msg);
            
            // Redirect to WhatsApp
            window.open('https://wa.me/919999999999?text=' + encoded, '_blank');
        });
    </script>
</body>
</html>`;

  const copyHtmlToClipboard = () => {
    navigator.clipboard.writeText(landingPageHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="lead-landing-page-showcase-container" className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden mt-10">
      
      {/* Title Header Block */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-800 p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="bg-white/10 text-emerald-100 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-white/10 tracking-widest">
            High-Value Lead Generation Engine
          </span>
          <h3 className="text-xl md:text-2xl font-black flex items-center gap-2">
            <Users className="w-6 h-6 text-emerald-300" />
            <span>Bihar Land Leads Landing Page & Form</span>
          </h3>
          <p className="text-xs text-emerald-100/90 font-medium">
            यह लैंडिंग पेज बिहार के सभी जिलों से ज़मीन खरीदार, विक्रेता और विवादित प्रॉपर्टीज के प्रीमियम लीड्स उत्पन्न करता है।
          </p>
        </div>

        {/* Copy HTML Button */}
        <button
          onClick={copyHtmlToClipboard}
          className="bg-white text-emerald-950 hover:bg-emerald-50 px-4 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-95 shrink-0"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600 animate-bounce" />
              <span>HTML Code Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-emerald-700" />
              <span>Copy Complete Landing Page HTML</span>
            </>
          )}
        </button>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12">
        
        {/* Left Grid Column: Information, Monetization Strategy & Analytics */}
        <div className="xl:col-span-4 bg-stone-50/70 p-5 sm:p-6 border-b xl:border-b-0 xl:border-r border-stone-200 space-y-6">
          
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase text-stone-500 tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Monetization Model (₹500-2000 per lead)</span>
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              बिहार में जमीन रजिस्ट्री, म्यूटेशन, और सीमा विवाद (boundary disputes) के मामले बहुत ही संवेदनशील होते हैं। यह फॉर्म उन लोगों को आकर्षित करता है जो सही और प्रामाणिक सलाह के लिए पैसे देने को तैयार हैं। इन कलेक्टेड लीड्स को आप बिहार के स्थानीय वकीलों, डीड राइटरों, या अंचल बिचौलियों को बेचकर बेहतरीन कमाई कर सकते हैं।
            </p>
          </div>

          {/* Core Optimization Badges */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-3.5 shadow-2xs">
            <h5 className="text-[10px] font-black uppercase text-gray-400 tracking-wider">
              Google Analytics Tracking Specs:
            </h5>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs text-stone-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                <span><strong>Event Name:</strong> <code className="bg-stone-100 px-1 py-0.5 rounded text-[10px] font-mono text-emerald-700 font-bold">lead_generation_submit</code></span>
              </div>
              <div className="flex items-start gap-2 text-xs text-stone-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                <span><strong>WhatsApp Event:</strong> <code className="bg-stone-100 px-1 py-0.5 rounded text-[10px] font-mono text-emerald-700 font-bold">whatsapp_redirect_click</code></span>
              </div>
              <div className="flex items-start gap-2 text-xs text-stone-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                <span><strong>Custom Parameters:</strong> <code className="bg-stone-100 px-1 py-0.5 rounded text-[10px] font-mono text-emerald-700 font-bold">district, help_type</code> (जिला और सहायता प्रकार की मैपिंग)</span>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 leading-normal italic">
              *इस तरह की कस्टमाइज्ड जीए4 कोडिंग से आप फेसबुक ऐड्स, गूगल कीवर्ड ऐड्स और ऑर्गेनिक लैंडिंग ट्रैफिक के लिए हाई-कन्वर्शन पिक्सेल ऑप्टिमाइज़ कर सकते हैं।
            </p>
          </div>

          {/* Trust Badges Showcase */}
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 space-y-3">
            <h5 className="text-xs font-bold text-emerald-950">Trust Signals Implemented:</h5>
            <ul className="text-xs text-emerald-800 space-y-2.5">
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>500+ Satisfied Clients</strong> (अत्यंत भरोसेमंद सेवा)</span>
              </li>
              <li className="flex items-center gap-2">
                <Map className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>All 38 Bihar Districts Covered</strong> (स्थानीय ज्ञान)</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>100% Secure & Private</strong> (डेटा सुरक्षा)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Grid Column: Live Demo Simulation Area */}
        <div className="xl:col-span-8 p-5 sm:p-8 bg-stone-50/20 space-y-6">
          
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <span className="text-xs text-stone-500 font-black tracking-widest uppercase flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-emerald-700" />
              <span>Live Rendered Lead Landing Card (लाइव प्रिव्यू)</span>
            </span>
            <span className="text-xs text-emerald-700 font-bold bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200">
              Mobile Friendly Form
            </span>
          </div>

          {/* Live Rendered Landing Card Box */}
          <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
            
            {/* Top Green Banner */}
            <div className="bg-emerald-800 p-6 text-white space-y-2">
              <span className="bg-white/15 border border-white/10 text-emerald-100 text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider">
                निःशुल्क भूमि परामर्श सेवा
              </span>
              <h4 className="text-lg sm:text-xl font-extrabold leading-tight">
                Bihar Mein Zameen Kharidne Mein Help Chahiye? Talk to Our Expert | निःशुल्क सलाह
              </h4>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                रजिस्ट्री, केवाला, ऑनलाइन दाखिल-खारिज और नक्शा-नापी सम्बन्धी किसी भी समस्या के लिए हमारे एक्सपर्ट से सीधे जुड़ें।
              </p>
            </div>

            {/* Inner Content Section */}
            <div className="p-6">
              
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                      आपका नाम (Your Full Name) *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="अपना पूरा नाम दर्ज करें"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      />
                      <User className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
                    </div>
                  </div>

                  {/* Mobile Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                      मोबाइल नंबर (WhatsApp Number) *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="10 अंकों का मोबाइल नंबर दर्ज करें"
                        pattern="[0-9]{10}"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      />
                      <Phone className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
                    </div>
                  </div>

                  {/* District Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                      आपका जिला (Select District) *
                    </label>
                    <div className="relative">
                      <select
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        required
                        className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 appearance-none bg-white"
                      >
                        <option value="">-- जिला चुनें (Choose District) --</option>
                        {biharDistricts.map((d, i) => (
                          <option key={i} value={d.split(" ")[0]}>{d}</option>
                        ))}
                      </select>
                      <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                    </div>
                  </div>

                  {/* Help Type Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                      आपको क्या मदद चाहिए? (How can we help?) *
                    </label>
                    <div className="relative">
                      <select
                        name="helpType"
                        value={formData.helpType}
                        onChange={handleInputChange}
                        required
                        className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 appearance-none bg-white"
                      >
                        <option value="">-- सहायता प्रकार चुनें (Help Options) --</option>
                        <option value="Zameen kharidna chahta hoon">Zameen kharidna chahta hoon (जमीन खरीदना चाहता हूँ)</option>
                        <option value="Zameen bechna chahta hoon">Zameen bechna chahta hoon (जमीन बेचना चाहता हूँ)</option>
                        <option value="Dakhil Kharij mein problem">Dakhil Kharij mein problem (दाखिल खारिज में दिक्कत)</option>
                        <option value="LPC chahiye">LPC chahiye (एलपीसी की जरूरत)</option>
                        <option value="Land dispute">Land dispute (भूमि विवाद / मापन विवाद)</option>
                        <option value="Other">Other (अन्य समस्या)</option>
                      </select>
                      <HelpCircle className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                    </div>
                  </div>

                  {/* Trust Micro-copy */}
                  <p className="text-[10px] text-stone-500 italic leading-normal">
                    *हमारे पास बिहार के सभी 38 जिलों के भूमि कानूनों की विस्तृत जानकारी है। हम आपका डाटा बिल्कुल गुप्त और सुरक्षित रखते हैं।
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>मुफ्त सलाह लें (Submit Request)</span>
                  </button>

                </form>
              ) : (
                <div className="text-center py-8 space-y-6 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="text-base font-bold text-stone-900">आपकी इंक्वायरी सबमिट हो गई है!</h5>
                    <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
                      धन्यवाद <strong>{formData.name}</strong> जी। हमें आपका रिक्वेस्ट मिल चुका है। तुरंत रिस्पांस और फास्ट बातचीत के लिए कृपया हमारे व्हाट्सएप पर कनेक्ट करें।
                    </p>
                  </div>

                  {/* Live Simulated WhatsApp Trigger Button */}
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-black text-xs py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.848.001-2.633-1.025-5.101-2.887-6.967C16.586 1.964 14.124.939 11.498.939c-5.441 0-9.868 4.413-9.871 9.851-.001 1.768.487 3.49 1.415 5.021l-.979 3.57 3.659-.958zm12.333-6.66c-.332-.166-1.966-.969-2.269-1.079-.303-.11-.522-.166-.743.166-.221.332-.857 1.079-1.05 1.3-.193.222-.387.249-.719.083-.332-.166-1.402-.516-2.67-1.646-.987-.88-1.653-1.967-1.846-2.3-.193-.332-.021-.512.145-.677.15-.148.332-.387.498-.58.166-.193.221-.332.332-.553.111-.222.055-.415-.027-.58-.083-.166-.743-1.792-1.018-2.457-.268-.649-.54-.56-.743-.57l-.634-.01c-.221 0-.58.083-.884.415-.304.331-1.162 1.135-1.162 2.766s1.19 3.207 1.355 3.428c.166.221 2.342 3.576 5.674 5.016.792.342 1.41.547 1.892.7.796.253 1.52.217 2.093.131.639-.096 1.966-.803 2.242-1.577.276-.775.276-1.439.194-1.577-.083-.139-.304-.221-.636-.387z" />
                    </svg>
                    <span>एक्सपर्ट से सीधे WhatsApp पर बात करें</span>
                  </button>

                  <button
                    onClick={handleResetForm}
                    className="text-xs text-stone-500 hover:text-stone-700 underline font-semibold cursor-pointer block mx-auto"
                  >
                    नया फॉर्म भरें (Submit another request)
                  </button>
                </div>
              )}

            </div>

            {/* Bottom Footer Stats within layout */}
            <div className="bg-stone-50 px-6 py-3.5 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500">
              <span className="flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Active 500+ Leads Managed</span>
              </span>
              <span>BighaWala Network 2026</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
