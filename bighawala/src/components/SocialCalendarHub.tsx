import React, { useState } from "react";
import { Calendar, Copy, Check, Share2, Search, Filter, BookOpen, Smartphone, Sparkles, Send } from "lucide-react";

interface PostItem {
  day: number;
  week: number;
  category: "conversion" | "records" | "buying" | "schemes";
  categoryLabel: string;
  topic: string;
  headline: string;
  emoji: string;
  points: string[];
  cta: string;
}

export default function SocialCalendarHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeek, setSelectedWeek] = useState<number | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all");
  const [copiedDay, setCopiedDay] = useState<number | null>(null);

  const postsData: PostItem[] = [
    // === WEEK 1: Bigha/Katha conversion tips (Days 1 to 7) ===
    {
      day: 1,
      week: 1,
      category: "conversion",
      categoryLabel: "Land Measurement (भूमि मापन)",
      topic: "Bihar Standard Bigha & Katha",
      emoji: "🌾",
      headline: "बिहार में जमीन मापन का असली गणित (Standard Bigha)!",
      points: [
        "बिहार में सामान्यतः 1 बीघा (Standard Bigha) में कुल 20 कट्ठा होते हैं।",
        "इसी तरह, 1 कट्ठा जमीन के अंदर ठीक 20 धुर जमीन आती है।",
        "याद रखें, धुर से छोटी इकाई 'धुरकी' होती है (1 धुर = 20 धुरकी)।",
        "यह स्टैंडर्ड माप पूरे बिहार में आधार की तरह काम करता है।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 2,
      week: 1,
      category: "conversion",
      categoryLabel: "Land Measurement (भूमि मापन)",
      topic: "Patna Laggi & Katha Size",
      emoji: "📐",
      headline: "पटना में 1 कट्ठा जमीन कितनी बड़ी होती है?",
      points: [
        "पटना और उसके आस-पास 5.5 हाथ की लग्गी (Laggi) का उपयोग किया जाता है।",
        "इस लग्गी के अनुसार पटना में 1 कट्ठा जमीन = 1361.25 Sq Ft होती है।",
        "गज में मापें तो यह लगभग 151.25 वर्ग गज (Sq Yards) के बराबर है।",
        "खरीदारी से पहले अपने जिले की लग्गी का साइज जरूर वेरिफाई करें।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 3,
      week: 1,
      category: "conversion",
      categoryLabel: "Land Measurement (भूमि मापन)",
      topic: "What is Dismil / Decimil?",
      emoji: "📏",
      headline: "डिसमिल (Dismil) क्या है और कट्ठा से इसका क्या संबंध है?",
      points: [
        "डिसमिल जमीन नापने की एक सरकारी और यूनिवर्सल इकाई है।",
        "बिहार में 1 डिसमिल जमीन ठीक 435.6 वर्ग फीट (Sq Ft) के बराबर होती है।",
        "पटना की लग्गी के हिसाब से 1 कट्ठा जमीन में लगभग 3.125 डिसमिल होते हैं।",
        "सरकारी कागजातों और रसीद पर जमीन हमेशा डिसमिल या हेक्टेयर में लिखी होती है।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 4,
      week: 1,
      category: "conversion",
      categoryLabel: "Land Measurement (भूमि मापन)",
      topic: "Laggi Variation across Districts",
      emoji: "🪵",
      headline: "लग्गी (Laggi) क्या है और यह क्यों बदलती है?",
      points: [
        "लग्गी बांस का वह डंडा है जिससे अमीन जमीन की नापी करते हैं।",
        "बिहार के अलग-अलग जिलों में लग्गी की लंबाई 4 हाथ से लेकर 9 हाथ तक हो सकती है।",
        "लग्गी की लंबाई जितनी बड़ी होगी, उस जिले का कट्ठा और बीघा उतना ही बड़ा होगा!",
        "मुजफ्फरपुर में अमूमन 6 हाथ की लग्गी चलती है (1 कट्ठा = 1620 Sq Ft)।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 5,
      week: 1,
      category: "conversion",
      categoryLabel: "Land Measurement (भूमि मापन)",
      topic: "Convert Katha to Acre",
      emoji: "🗺️",
      headline: "1 एकड़ जमीन में कितना कट्ठा होता है? आसान नियम!",
      points: [
        "1 एकड़ जमीन का फिक्स साइज 43,560 वर्ग फीट होता है।",
        "यदि पटना जिले की बात करें, तो 1 एकड़ में लगभग 32 कट्ठा जमीन होती है।",
        "वही दरभंगा या मुजफ्फरपुर (6 हाथ लग्गी) में 1 एकड़ में लगभग 27 कट्ठा होते हैं।",
        "ग्रामीण क्षेत्रों में बड़े प्लॉट खरीदते समय हमेशा एकड़ और डिसमिल का हिसाब रखें।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 6,
      week: 1,
      category: "conversion",
      categoryLabel: "Land Measurement (भूमि मापन)",
      topic: "What is Hectare?",
      emoji: "🌐",
      headline: "हेक्टेयर (Hectare) का बीघा से सटीक कनवर्टर फार्मूला!",
      points: [
        "सरकारी जमीन रजिस्ट्री और लगान रसीद पर रकबा 'हेक्टेयर' में दर्ज रहता है।",
        "1 हेक्टेयर जमीन में ठीक 2.47 एकड़ जमीन होती है।",
        "बिहार के स्टैंडर्ड बीघा के अनुसार, 1 हेक्टेयर = लगभग 4 बीघा जमीन।",
        "कागजात पर लिखे हेक्टेयर को तुरंत बीघा या कट्ठा में बदलने के लिए कैलकुलेटर का प्रयोग करें।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 7,
      week: 1,
      category: "conversion",
      categoryLabel: "Land Measurement (भूमि मापन)",
      topic: "Avoiding Amin Fraud in Naapi",
      emoji: "🚨",
      headline: "जमीन की नापी (Measurement) कराते समय अमीन की इन चालों से बचें!",
      points: [
        "नापी हमेशा सरकारी नक्शे (Cadastral Map) के आधार पर ही करवाएं।",
        "सुनिश्चित करें कि अमीन लोहे की गुनिया और कतरनी (Scale) का सही उपयोग कर रहा है।",
        "जरीब (Chain) की लंबाई नापने से पहले खुद चेक करें कि वह 66 फीट की है या नहीं।",
        "पड़ोसी जमीन के मालिकों को नापी के दिन गवाह के रूप में जरूर मौजूद रखें।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },

    // === WEEK 2: Bhulekh/Dakhil Kharij tips (Days 8 to 14) ===
    {
      day: 8,
      week: 2,
      category: "records",
      categoryLabel: "Bhulekh & Mutation (भूलेख एवं म्यूटेशन)",
      topic: "What is Dakhil Kharij?",
      emoji: "📝",
      headline: "रजिस्ट्री के बाद दाखिल खारिज (Dakhil Kharij) क्यों है जरूरी?",
      points: [
        "सिर्फ रजिस्ट्री (Kewala) कराने से आप जमीन के मालिक नहीं बनते हैं।",
        "दाखिल खारिज का मतलब है सरकारी रजिस्टर से पुराने मालिक का नाम हटाकर आपका नाम जोड़ना।",
        "यदि म्यूटेशन नहीं हुआ, तो पुराना मालिक दोबारा उस जमीन को बेचकर फ्रॉड कर सकता है।",
        "बिहार सरकार के अनुसार, दाखिल खारिज की सरकारी फीस बिल्कुल ₹0 (निःशुल्क) है।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 9,
      week: 2,
      category: "records",
      categoryLabel: "Bhulekh & Mutation (भूलेख एवं म्यूटेशन)",
      topic: "How to Apply online for Mutation",
      emoji: "💻",
      headline: "घर बैठे बिहार में ऑनलाइन दाखिल-खारिज कैसे करें?",
      points: [
        "बिहार भूमि की आधिकारिक वेबसाइट (biharbhumi.bihar.gov.in) पर जाएं।",
        "वहां अपना अकाउंट बनाएं और 'ऑनलाइन दाखिल खारिज आवेदन' पर क्लिक करें।",
        "अपनी रजिस्ट्री डीड (Kewala Deed) की साफ PDF कॉपी अपलोड करें।",
        "आवेदन के बाद रसीद (Case Number) संभालकर रखें ताकि स्थिति ट्रैक कर सकें।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 10,
      week: 2,
      category: "records",
      categoryLabel: "Bhulekh & Mutation (भूलेख एवं म्यूटेशन)",
      topic: "Check Jamabandi Online",
      emoji: "🔍",
      headline: "अपनी जमीन की ऑनलाइन जमाबंदी (Jamabandi Panji) कैसे देखें?",
      points: [
        "जमाबंदी पंजी (Register-II) वह सरकारी बही है जिसमें रैयत की जमीन दर्ज होती है।",
        "इसे चेक करने के लिए 'बिहार भूमि' वेबसाइट पर 'जमाबंदी पंजी देखें' विकल्प चुनें।",
        "अपने जिला, अंचल, हल्का और मौजा का नाम सिलेक्ट करें।",
        "खाता नंबर या प्लाट नंबर दर्ज कर के आप पूरी जमाबंदी PDF डाउनलोड कर सकते हैं।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 11,
      week: 2,
      category: "records",
      categoryLabel: "Bhulekh & Mutation (भूलेख एवं म्यूटेशन)",
      topic: "How to Pay Lagan Online",
      emoji: "🧾",
      headline: "ऑनलाइन लगान रसीद (Land Revenue Receipt) कैसे काटें?",
      points: [
        "सालाना जमीन टैक्स (लगान) चुकाना आपकी ओनरशिप को हर साल मजबूत करता है।",
        "बिहार भूमि वेबसाइट पर 'भू-लगान' विकल्प पर जाकर 'ऑनलाइन भुगतान' चुनें।",
        "अपनी जमाबंदी का विवरण भरकर बकाया राशि (Due Tax) चेक करें।",
        "UPI, नेट बैंकिंग या डेबिट कार्ड से भुगतान कर तुरंत डिजिटल रसीद प्रिंट करें।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 12,
      week: 2,
      category: "records",
      categoryLabel: "Bhulekh & Mutation (भूलेख एवं म्यूटेशन)",
      topic: "Apply LPC Online",
      emoji: "🛡️",
      headline: "LPC (Land Possession Certificate) क्या है और कैसे बनवाएं?",
      points: [
        "LPC (भू-स्वामित्व प्रमाण पत्र) यह साबित करता है कि जमीन पर आपका वास्तविक कब्जा है।",
        "फसल ऋण (Crop Loan), बैंक लोन, या सरकारी योजनाओं के लिए LPC अनिवार्य है।",
        "LPC के लिए आपकी जमीन का दाखिल-खारिज और चालू वर्ष की रसीद कटी होनी चाहिए।",
        "आवेदन करने के 15-20 दिनों के भीतर अंचल अधिकारी (CO) डिजिटल LPC जारी करते हैं।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 13,
      week: 2,
      category: "records",
      categoryLabel: "Bhulekh & Mutation (भूलेख एवं म्यूटेशन)",
      topic: "Dakhil Kharij Rejection Reasons",
      emoji: "⚠️",
      headline: "दाखिल खारिज रिजेक्ट (Reject) होने के 3 सबसे बड़े कारण!",
      points: [
        "कारण 1: रजिस्ट्री डीड (Kewala Deed) की धुंधली या अधूरी PDF कॉपी अपलोड करना।",
        "कारण 2: बेचने वाले व्यक्ति (Seller) के नाम पर ऑनलाइन जमाबंदी का न होना।",
        "कारण 3: प्लॉट या खसरा नंबर में कोई टाइपिंग एरर या चौहद्दी का मेल न खाना।",
        "हमेशा सही कागजात के साथ ही अप्लाई करें ताकि समय बर्बाद न हो।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 14,
      week: 2,
      category: "records",
      categoryLabel: "Bhulekh & Mutation (भूलेख एवं म्यूटेशन)",
      topic: "Correcting Jamabandi via Parimarjan",
      emoji: "🔧",
      headline: "जमाबंदी में नाम या रकबा गलत है? सुधारें 'परिमार्जन' से!",
      points: [
        "अक्सर पुरानी डिजिटल जमाबंदी में नाम की स्पेलिंग या रकबा (Area) गलत शो होता है।",
        "इसके सुधार के लिए बिहार सरकार का विशेष पोर्टल 'परिमार्जन' (Parimarjan) है।",
        "पोर्टल पर जाकर शिकायत दर्ज करें और सही केवाला और खतियान के दस्तावेज स्कैन कर अपलोड करें।",
        "अंचल कर्मचारी जांच कर ऑनलाइन विवरण में सुधार कर देंगे।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },

    // === WEEK 3: Land buying tips for Bihar (Days 15 to 21) ===
    {
      day: 15,
      week: 3,
      category: "buying",
      categoryLabel: "Property Buying Tips (जमीन खरीद टिप्स)",
      topic: "Verify Seller Jamabandi",
      emoji: "🕵️",
      headline: "बिहार में जमीन खरीदने जा रहे हैं? सबसे पहले यह चेक करें!",
      points: [
        "बेचने वाले व्यक्ति (Seller) का नाम बिहार सरकार के ऑनलाइन रिकॉर्ड में चेक करें।",
        "क्या विक्रेता के पास खुद के नाम की जमाबंदी और अद्यतन रसीद है?",
        "केवल पूर्वजों के नाम के कागजात देखकर बयाना (Advance) देने की भूल न करें।",
        "जमाबंदी खुद से ऑनलाइन 'बिहार भूमि' पोर्टल पर सत्यापित करें।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 16,
      week: 3,
      category: "buying",
      categoryLabel: "Property Buying Tips (जमीन खरीद टिप्स)",
      topic: "Verify Ancestral Land Registry",
      emoji: "👨‍👩‍👧‍👦",
      headline: "पूर्वजों या खानदानी जमीन खरीदते समय बरतें ये सावधानियां!",
      points: [
        "यदि जमीन किसी के दादा/पिता के नाम है, तो पारिवारिक बटवारा पत्र (Family Partition Deed) मांगें।",
        "चेक करें कि क्या सभी कानूनी वारिसों (Legal Heirs) ने बंटवारे पर हस्ताक्षर किए हैं।",
        "रजिस्ट्री के वक्त सभी सह-खातेदारों को गवाह (Witness) या सहमति कर्ता बनाएं।",
        "इससे भविष्य में परिवार के किसी सदस्य द्वारा कोर्ट केस करने का खतरा टल जाता है।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 17,
      week: 3,
      category: "buying",
      categoryLabel: "Property Buying Tips (जमीन खरीद टिप्स)",
      topic: "No Encumbrance Certificate",
      emoji: "🔒",
      headline: "क्या है गैर-भार प्रमाण पत्र (Non-Encumbrance Certificate)?",
      points: [
        "NEC यह साबित करता है कि जो जमीन आप खरीद रहे हैं उस पर कोई पुराना बैंक लोन या बंधक तो नहीं है।",
        "यह प्रमाण पत्र निबंधन कार्यालय (Registry Office) द्वारा पिछले 13 से 30 वर्षों के लिए जारी होता है।",
        "बिना NEC चेक किए बड़ी रकम का भुगतान कतई न करें।",
        "सरकारी या प्राइवेट बैंक से लोन लेते समय भी NEC सबसे प्रमुख दस्तावेज होता है।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 18,
      week: 3,
      category: "buying",
      categoryLabel: "Property Buying Tips (जमीन खरीद टिप्स)",
      topic: "Chauhaddi Verification",
      emoji: "🧭",
      headline: "चौहद्दी (Boundary Details) का क्या महत्व है?",
      points: [
        "रजिस्ट्री डीड में जमीन के उत्तर, दक्षिण, पूर्व और पश्चिम में किसका कब्जा है, वह चौहद्दी कहलाती है।",
        "कागजात पर दर्ज चौहद्दी और जमीन की वास्तविक भौतिक स्थिति का मिलान जरूर करें।",
        "गलत चौहद्दी होने पर भविष्य में कब्जे को लेकर विवाद होना तय है।",
        "कोशिश करें कि रजिस्ट्री से पहले जमीन पर बाउंड्री वॉल या खूंटा गाड़ लें।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 19,
      week: 3,
      category: "buying",
      categoryLabel: "Property Buying Tips (जमीन खरीद टिप्स)",
      topic: "Government Land & Restricted Land",
      emoji: "🚫",
      headline: "बिहार में किन जमीनों को खरीदने से बचना चाहिए?",
      points: [
        "बिहार सरकार की गैर-मजरूआ (Gair Mazarua) जमीन को कभी भी न खरीदें।",
        "खास महल (Khas Mahal) या भू-दान (Bhoodan) समिति द्वारा आवंटित जमीन की बिक्री पर कानूनी रोक है।",
        "नदी, नाला, श्मशान, या सड़क के लिए चिन्हित सरकारी बंजर जमीन की रजिस्ट्री अमान्य है।",
        "ऐसी जमीन खरीदने पर आपका पैसा और संपत्ति दोनों डूब जाएगी।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 20,
      week: 3,
      category: "buying",
      categoryLabel: "Property Buying Tips (जमीन खरीद टिप्स)",
      topic: "Government Circle Rate (MVR)",
      emoji: "💰",
      headline: "सरकारी न्यूनतम मूल्य (MVR) क्या है और यह क्यों जरूरी है?",
      points: [
        "बिहार सरकार हर इलाके की जमीन का एक न्यूनतम मूल्य तय करती है जिसे MVR कहते हैं।",
        "आपकी जमीन की रजिस्ट्री इस MVR रेट से कम कीमत पर नहीं हो सकती।",
        "रजिस्ट्री चार्ज और स्टांप ड्यूटी इसी सरकारी रेट के प्रतिशत पर तय की जाती है।",
        "अपने इलाके का सर्किल रेट ऑनलाइन 'बिहार निबंधन' की साइट पर अवश्य देखें।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 21,
      week: 3,
      category: "buying",
      categoryLabel: "Property Buying Tips (जमीन खरीद टिप्स)",
      topic: "Safe Payment Methods",
      emoji: "💳",
      headline: "जमीन खरीद का भुगतान (Payment) हमेशा सुरक्षित तरीके से करें!",
      points: [
        "बयाना या बची हुई पूरी रकम का भुगतान हमेशा बैंक ड्राफ्ट (DD) या ऑनलाइन बैंक ट्रांसफर (RTGS) से करें।",
        "कैश (नकद) में बड़ी रकम देने से हमेशा बचें और यदि कैश दें तो लिखित रसीद अवश्य लें।",
        "रजिस्ट्री के केवाला डीड में भुगतान के ट्रांजैक्शन नंबर का स्पष्ट उल्लेख करवाएं।",
        "यह कानूनी सबूत की तरह काम करता है कि विक्रेता को पूरी राशि प्राप्त हो चुकी है।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },

    // === WEEK 4: Government scheme updates & farmer rights (Days 22 to 30) ===
    {
      day: 22,
      week: 4,
      category: "schemes",
      categoryLabel: "Govt Schemes & Farmer Rights (सरकारी योजनाएं)",
      topic: "Kisan Credit Card (KCC) Bihar",
      emoji: "🏦",
      headline: "बिहार किसान क्रेडिट कार्ड (KCC) योजना का लाभ कैसे उठाएं?",
      points: [
        "KCC के तहत किसानों को खेती के खर्च के लिए बेहद कम ब्याज दर (4% प्रभावी दर) पर लोन मिलता है।",
        "इसके लिए आपके पास खेती की जमीन की अद्यतन रसीद और LPC होनी चाहिए।",
        "अपने नजदीकी सहकारी बैंक (Co-operative Bank) या पीएसयू बैंक में संपर्क करें।",
        "लोन की समय पर चुकौती (Repayment) करने पर ब्याज में 3% की अतिरिक्त सब्सिडी मिलती है।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 23,
      week: 4,
      category: "schemes",
      categoryLabel: "Govt Schemes & Farmer Rights (सरकारी योजनाएं)",
      topic: "PM Kisan Samman Nidhi",
      emoji: "🌾",
      headline: "PM किसान सम्मान निधि: बिहार के किसान ऐसे सुधारें अपना डाटा!",
      points: [
        "सालाना ₹6,000 की सहायता पाने के लिए जमीन की ई-केवाईसी (e-KYC) और लैंड सीडिंग अनिवार्य है।",
        "यदि आपकी किस्तें रुक गई हैं, तो चेक करें कि आपके नाम की जमाबंदी पोर्टल पर लिंक्ड है या नहीं।",
        "अपने हल्का कर्मचारी या कृषि समन्वयक (Agriculture Coordinator) से मिलकर लैंड सीडिंग करवाएं।",
        "पीएम किसान पोर्टल पर जाकर अपना स्टेटस स्टेटस घर बैठे ऑनलाइन चेक करें।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 24,
      week: 4,
      category: "schemes",
      categoryLabel: "Govt Schemes & Farmer Rights (सरकारी योजनाएं)",
      topic: "Bihar Diesel Subsidy & Input Subsidy",
      emoji: "🚜",
      headline: "बिहार डीजल अनुदान और कृषि इनपुट योजना का अपडेट!",
      points: [
        "सूखा या बाढ़ जैसी प्राकृतिक आपदा की स्थिति में बिहार सरकार 'कृषि इनपुट अनुदान' देती है।",
        "पटवन (Irrigation) के लिए डीजल खरीद पर सरकार प्रति लीटर भारी सब्सिडी प्रदान करती है।",
        "डीबीटी एग्रीकल्चर बिहार (dbtagriculture.bihar.gov.in) पोर्टल पर इसका ऑनलाइन रजिस्ट्रेशन होता है।",
        "पंजीकरण के लिए किसान का बैंक खाता आधार और एनपीसीआई (NPCI) से लिंक होना जरूरी है।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 25,
      week: 4,
      category: "schemes",
      categoryLabel: "Govt Schemes & Farmer Rights (सरकारी योजनाएं)",
      topic: "Land Mutation Laws for Heirs",
      emoji: "⚖️",
      headline: "बिहार में पारिवारिक बटवारा और नया म्यूटेशन कानून 2026!",
      points: [
        "बिहार सरकार ने पैतृक संपत्ति के बटवारे और म्यूटेशन को बेहद आसान बना दिया है।",
        "अब केवल ₹100 के स्टांप पेपर पर रजिस्टर्ड पारिवारिक बटवारा डीड मान्य की जाती है।",
        "बंटवारा होने के तुरंत बाद सभी भाई अपनी-अपनी जमीन की स्वतंत्र जमाबंदी कायम करवा सकते हैं।",
        "इससे भविष्य में जमीन बेचने या लोन लेते समय किसी भी तरह का विवाद नहीं होता।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 26,
      week: 4,
      category: "schemes",
      categoryLabel: "Govt Schemes & Farmer Rights (सरकारी योजनाएं)",
      topic: "Har Khet Ko Paani",
      emoji: "💧",
      headline: "हर खेत को पानी योजना: बोरिंग और मोटर पंप पर सरकारी सब्सिडी!",
      points: [
        "सिंचाई की समस्या दूर करने के लिए बिहार सरकार ट्यूबवेल और मोटर पर 50% से 80% तक सब्सिडी दे रही है।",
        "निजी नलकूप योजना के अंतर्गत किसान अपने खेतों में बोरिंग कराकर लाभ उठा सकते हैं।",
        "आवेदन करने के लिए किसान के पास कम से कम 10 कट्ठा खेती योग्य कृषि भूमि होनी चाहिए।",
        "लघु जल संसाधन विभाग की आधिकारिक वेबसाइट से ऑनलाइन फॉर्म डाउनलोड कर जमा करें।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 27,
      week: 4,
      category: "schemes",
      categoryLabel: "Govt Schemes & Farmer Rights (सरकारी योजनाएं)",
      topic: "Bihar Land Survey 2026 update",
      emoji: "🗺️",
      headline: "बिहार विशेष सर्वेक्षण (Land Survey 2026) में क्या दस्तावेज चाहिए?",
      points: [
        "बिहार में चल रहे भूमि सर्वेक्षण का मुख्य उद्देश्य डिजिटल और विवाद रहित जमीनी रिकॉर्ड तैयार करना है।",
        "इसके लिए रैयतों को 'प्रपत्र-2' (स्वघोषणा पत्र) और 'प्रपत्र-3(i)' (वंशावली पत्र) भरकर देना होता है।",
        "अपने खतियान, पुराना केवाला, और अद्यतन लगान रसीद की फोटोकॉपी तैयार रखें।",
        "वंशावली पर पंचायत के वार्ड सदस्य या सरपंच के हस्ताक्षर जरूर करवाएं।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 28,
      week: 4,
      category: "schemes",
      categoryLabel: "Govt Schemes & Farmer Rights (सरकारी योजनाएं)",
      topic: "Agriculture Equipment Subsidy",
      emoji: "⚙️",
      headline: "ट्रैक्टर, थ्रेशर और कृषि यंत्रों पर मिल रही है 50% तक की छूट!",
      points: [
        "बिहार कृषि यांत्रिकीकरण योजना (OFMAS) के तहत विभिन्न कृषि यंत्रों पर बड़ी सब्सिडी मिलती है।",
        "दलित, पिछड़े और सीमांत किसानों के लिए सब्सिडी की दरें और भी अधिक आकर्षक हैं।",
        "OFMAS बिहार के पोर्टल पर ऑनलाइन बुकिंग कर आप अपना नाम वेटिंग लिस्ट में डाल सकते हैं।",
        "खरीदारी हमेशा सरकार द्वारा स्वीकृत अधिकृत कृषि विक्रेताओं (Dealers) से ही करें।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 29,
      week: 4,
      category: "schemes",
      categoryLabel: "Govt Schemes & Farmer Rights (सरकारी योजनाएं)",
      topic: "Bihar Organic Farming Scheme",
      emoji: "🌱",
      headline: "बिहार जैविक कॉरिडोर योजना: ₹11,500 प्रति एकड़ की सरकारी सहायता!",
      points: [
        "गंगा नदी के किनारे के 13 जिलों में जैविक खेती को बढ़ावा देने के लिए कॉरिडोर बनाया गया है।",
        "जैविक प्रमाणीकरण (Organic Certification) के साथ किसानों को इनपुट सब्सिडी सीधे बैंक खाते में मिलती है।",
        "केमिकल फ्री खेती करने वाले किसानों को मुफ्त जैविक बीज और खाद बनाने का प्रशिक्षण भी मिलता है।",
        "इसके जरिए पैदा किए गए उत्पादों को बाजार में सामान्य से काफी ऊंची कीमत पर बेचा जा सकता है।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    },
    {
      day: 30,
      week: 4,
      category: "schemes",
      categoryLabel: "Govt Schemes & Farmer Rights (सरकारी योजनाएं)",
      topic: "Land Dispute Settlement Court",
      emoji: "🏛️",
      headline: "जमीन का सीमा विवाद (Boundary Dispute) सुलझाने का सही सरकारी तरीका!",
      points: [
        "पड़ोसी द्वारा जमीन दबाने या मेढ़ काटने पर सीधे झगड़ा करने से बचें।",
        "सबसे पहले अंचल कार्यालय (Anchal Office) में 'सरकारी नापी' के लिए ऑनलाइन आवेदन शुल्क जमा करें।",
        "यदि फिर भी विवाद न सुलझे, तो भूमि सुधार उप समाहर्ता (DCLR) कोर्ट में अपील दर्ज करें।",
        "DCLR कोर्ट का फैसला त्वरित और सिविल कोर्ट की तुलना में बहुत कम खर्चीला होता है।"
      ],
      cta: "अधिक जानकारी के लिए: BighaWala.com"
    }
  ];

  // Handler to copy the complete formatted post to clipboard
  const handleCopyPost = (post: PostItem) => {
    const textToCopy = `${post.emoji} *${post.headline}*\n\n${post.points.map(p => `• ${p}`).join("\n")}\n\n🔗 ${post.cta}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedDay(post.day);
    setTimeout(() => setCopiedDay(null), 2500);
  };

  const handleCopyAllPosts = () => {
    const allText = filteredPosts.map(post => {
      return `Day ${post.day} | ${post.topic}\n=========================================\n${post.emoji} *${post.headline}*\n\n${post.points.map(p => `• ${p}`).join("\n")}\n\n🔗 ${post.cta}\n\n`;
    }).join("\n");
    
    navigator.clipboard.writeText(allText);
    setCopiedDay(999); // Code for "All"
    setTimeout(() => setCopiedDay(null), 2500);
  };

  // Filter & Search Logic
  const filteredPosts = postsData.filter((post) => {
    const matchesSearch = 
      post.headline.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.points.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesWeek = selectedWeek === "all" || post.week === selectedWeek;
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesWeek && matchesCategory;
  });

  return (
    <div id="social-calendar-hub-container" className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden mt-10">
      
      {/* Dynamic Header Block */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-indigo-800 p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="bg-white/10 text-emerald-100 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-white/10 tracking-widest">
            WhatsApp & Social Media Content Calendar
          </span>
          <h3 className="text-xl md:text-2xl font-black flex items-center gap-2">
            <Calendar className="w-6 h-6 text-emerald-300" />
            <span>BighaWala 30-Day Viral Post Generator (🏡)</span>
          </h3>
          <p className="text-xs text-stone-100 font-medium">
            30 दिन के लिए वैल्यू-लोडेड हिंदी व्हाट्सएप और सोशल मीडिया पोस्ट्स। सीधे कॉपी करें और शेयर करें!
          </p>
        </div>

        {/* Copy All Button */}
        <button
          onClick={handleCopyAllPosts}
          className="bg-white text-stone-900 hover:bg-emerald-50 px-4 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-95 shrink-0"
        >
          {copiedDay === 999 ? (
            <>
              <Check className="w-4 h-4 text-green-600 animate-bounce" />
              <span>All 30 Posts Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-emerald-700" />
              <span>Copy All Filtered Posts (सभी पोस्ट कॉपी करें)</span>
            </>
          )}
        </button>
      </div>

      {/* Control Panel: Search and Quick Filters */}
      <div className="bg-stone-50 border-b border-stone-200 p-4 sm:p-5 flex flex-col lg:flex-row gap-4 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full lg:max-w-xs">
          <input
            type="text"
            placeholder="खोजें: 'दाखिल खारिज', 'KCC', 'कट्ठा'..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
          />
          <Search className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
        </div>

        {/* Multi Filters group */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-start lg:justify-end">
          
          {/* Week Filter */}
          <div className="flex items-center gap-1.5 text-xs">
            <Filter className="w-3.5 h-3.5 text-stone-500" />
            <span className="font-bold text-stone-600">सप्ताह (Week):</span>
            <div className="flex bg-white rounded-lg p-0.5 border border-stone-200 shadow-3xs">
              <button
                onClick={() => setSelectedWeek("all")}
                className={`px-2.5 py-1 rounded-md text-[10px] font-black transition-all cursor-pointer ${
                  selectedWeek === "all" ? "bg-emerald-700 text-white" : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                All
              </button>
              {[1, 2, 3, 4].map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeek(w)}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-black transition-all cursor-pointer ${
                    selectedWeek === w ? "bg-emerald-700 text-white" : "text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  W{w}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-bold text-stone-600">विषय (Category):</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-[10px] font-black border border-stone-200 rounded-lg p-1.5 bg-white focus:outline-none focus:border-emerald-600 cursor-pointer"
            >
              <option value="all">सभी विषय (All Topics)</option>
              <option value="conversion">Week 1: Land Measurement (मापन)</option>
              <option value="records">Week 2: Bhulekh & Mutation (भूलेख)</option>
              <option value="buying">Week 3: Safe Property Buying (खरीद टिप्स)</option>
              <option value="schemes">Week 4: Kisan Schemes (किसान योजनाएं)</option>
            </select>
          </div>

        </div>

      </div>

      {/* Grid Content Showcase */}
      <div className="p-4 sm:p-6 bg-stone-50/30">
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div 
                key={post.day} 
                className="bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                
                {/* Card Top Indicator */}
                <div className="bg-stone-50 border-b border-stone-100 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase px-2 py-0.5 rounded-md">
                      Day {post.day}
                    </span>
                    <span className="text-[10px] text-stone-500 font-bold">
                      Week {post.week}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-stone-400 group-hover:text-emerald-700 transition-colors">
                    {post.categoryLabel.split(" ")[0]}
                  </span>
                </div>

                {/* Main WhatsApp Post Format Preview */}
                <div className="p-4 flex-1 space-y-4">
                  
                  {/* Headline */}
                  <h4 className="text-sm font-extrabold text-stone-900 flex items-start gap-2 leading-snug">
                    <span className="text-lg shrink-0 mt-0.5">{post.emoji}</span>
                    <span>{post.headline}</span>
                  </h4>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-xs text-stone-700">
                    {post.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-600 mt-1 shrink-0 text-[10px]">●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Footer Line */}
                  <div className="border-t border-stone-100 pt-3 text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <Smartphone className="w-3.5 h-3.5 text-stone-400" />
                    <span>🔗 {post.cta}</span>
                  </div>

                </div>

                {/* Bottom Action Copy Button */}
                <button
                  onClick={() => handleCopyPost(post)}
                  className="w-full bg-stone-50 hover:bg-emerald-700 text-stone-700 hover:text-white border-t border-stone-100 py-3 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedDay === post.day ? (
                    <>
                      <Check className="w-4 h-4 text-green-500 animate-bounce" />
                      <span>Post Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
                      <span>Copy Day {post.day} Post</span>
                    </>
                  )}
                </button>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-stone-200">
            <BookOpen className="w-12 h-12 text-stone-300 mx-auto animate-bounce mb-3" />
            <h5 className="text-sm font-bold text-stone-700">कोई पोस्ट नहीं मिला!</h5>
            <p className="text-xs text-stone-500 mt-1">कृपया सर्च टर्म बदलें या अन्य फ़िल्टर चुनें।</p>
          </div>
        )}

      </div>

      {/* Information Tips Footer */}
      <div className="bg-stone-900 text-stone-300 p-5 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400">
            💡
          </div>
          <p className="leading-relaxed text-stone-400">
            <strong>प्रो-टिप (Pro-Tip):</strong> इस कैलेंडर की पोस्ट्स को व्हाट्सएप स्टेटस (WhatsApp Status), फेसबुक ग्रुप्स (Facebook Groups) या लोकल किसान समूहों में सुबह 8 से 10 बजे के बीच शेयर करें। इससे ऑर्गेनिक इंगेजमेंट 200% तक बढ़ जाती है।
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-stone-500">Powered by</span>
          <span className="font-extrabold text-emerald-400">BighaWala Social Engine 2026</span>
        </div>
      </div>

    </div>
  );
}
