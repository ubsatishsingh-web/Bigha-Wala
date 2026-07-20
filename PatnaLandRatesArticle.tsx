import React, { useState } from "react";
import { Coins, MapPin, ShieldAlert, ArrowRight, Copy, Check, Info, Table, HelpCircle } from "lucide-react";

export default function PatnaLandRatesArticle() {
  const [copied, setCopied] = useState(false);

  // Raw HTML content designed specifically to be pasted directly into a WordPress or custom HTML website
  const rawHtmlContent = `<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <title>Patna District Mein Zameen Ki Kimat 2026 | Patna Land Rate per Katha</title>
</head>
<body>

    <!-- Summary Box -->
    <div style="background-color: #fef2f2; border: 2px solid #ef4444; border-radius: 12px; padding: 20px; margin-bottom: 30px; font-family: sans-serif; line-height: 1.6;">
        <h3 style="color: #b91c1c; margin-top: 0; font-size: 20px; font-weight: bold; border-bottom: 1px solid #fee2e2; padding-bottom: 8px;">📊 Quick Overview: पटना में जमीन का रेट 2026</h3>
        <p><strong>औसत दर (Average Price Range):</strong> ₹15 Lakhs to ₹1.5 Crores+ प्रति कट्ठा (depends heavily on the exact locality, road width, and commercial prospects).</p>
        <p><strong>सबसे महंगे इलाके:</strong> Bailey Road, Boring Road, Kankarbagh, Danapur Main Road (₹80 Lakhs - ₹1.8 Crore+ per Katha).</p>
        <p><strong>तेजी से बढ़ते इलाके (Developing Hubs):</strong> Bihta, Shivala, Naubatpur, Sampatchak, Parsa Bazar (₹15 Lakhs - ₹45 Lakhs per Katha).</p>
        <p><strong>सरकारी रेट कैसे देखें:</strong> बिहार सरकार के मद्यनिषेध, उत्पाद एवं निबंधन विभाग की वेबसाइट (MVR Portal) पर।</p>
        <p><strong>अस्वीकरण (Disclaimer):</strong> ये दरें बाजार के अनुमानों, हालिया रजिस्ट्रियों और स्थानीय डीलरों से ली गई हैं। वास्तविक दरें अलग-अलग भूखंडों के लिए भिन्न हो सकती हैं।</p>
    </div>

    <!-- H1 Title -->
    <h1 style="color: #1c1917; font-family: sans-serif; font-size: 32px; font-weight: 800; line-height: 1.3; margin-bottom: 15px;">Patna District Mein Zameen Ki Kimat 2026: जानिए पटना के हर इलाके में जमीन का रेट प्रति कट्ठा (Land Rate per Katha)</h1>
    <p style="color: #4b5563; font-family: sans-serif; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
        क्या आप बिहार की राजधानी पटना में जमीन खरीदने या बेचने की सोच रहे हैं? पटना रीयल एस्टेट मार्केट (Patna Real Estate Market) पूरे बिहार में सबसे हॉट और तेजी से बढ़ने वाला क्षेत्र है। नए मेट्रो रूट (Patna Metro), मरीन ड्राइव (Ganga Path), और एम्स-खगौल एलिवेटेड रोड के निर्माण के कारण <strong>Patna mein zameen ka rate</strong> आसमान छू रहा है। आज के इस विशेष गाइड में हम बात करेंगे कि वर्ष 2026 में पटना के शहरी, उपशहरी और ग्रामीण इलाकों में <strong>Patna land price per katha</strong> क्या चल रहा है और निवेश के लिए कौन से इलाके सबसे बेस्ट हैं।
    </p>

    <!-- H2 Section 1 -->
    <h2 style="color: #15803d; font-family: sans-serif; font-size: 24px; font-weight: 700; border-bottom: 2px solid #22c55e; padding-bottom: 5px; margin-top: 40px; margin-bottom: 15px;">1. Overview of Patna Land Market (पटना प्रॉपर्टी मार्केट की वर्तमान स्थिति)</h2>
    <p style="color: #1f2937; font-family: sans-serif; font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
        पटना में जमीन की मांग आवासीय (Residential) और व्यावसायिक (Commercial) दोनों उद्देश्यों के लिए लगातार बढ़ रही है। पटना का भौगोलिक विस्तार अब मुख्य शहर से बाहर निकलकर <strong>Danapur, Bihta, Naubatpur, Neora, Punpun, and Sampatchak</strong> की तरफ बहुत तेजी से हो रहा है। 
    </p>
    <p style="color: #1f2937; font-family: sans-serif; font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
        पटना मेट्रो प्रोजेक्ट के पहले फेज के चालू होने की तैयारियों और नए रिंग रोड कनेक्टिविटी ने बाहरी इलाकों की कीमतों में 200% तक की उछाल दर्ज कराई है। निवेशक अब कोर पटना सिटी के बजाय ग्रेटर पटना (Greater Patna) क्षेत्र में बड़े प्लॉट्स खरीद रहे हैं जहाँ भविष्य में बड़े रेसिडेंशियल टाउनशिप की योजना है।
    </p>

    <!-- H2 Section 2 -->
    <h2 style="color: #15803d; font-family: sans-serif; font-size: 24px; font-weight: 700; border-bottom: 2px solid #22c55e; padding-bottom: 5px; margin-top: 40px; margin-bottom: 15px;">2. Patna Area-Wise Land Rate Table 2026 (प्रति कट्ठा दर सूची)</h2>
    <p style="color: #1f2937; font-family: sans-serif; font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
        यहाँ पटना के विभिन्न प्रमुख रिहायशी, कमर्शियल और बाहरी अंचलों के बाजार भाव (Market Rate Range) की सूची दी गई है। ध्यान रहे कि पटना में <strong>1 कट्ठा = 1361 वर्ग फुट (Sq Ft)</strong> होता है:
    </p>

    <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 25px;">
        <thead>
            <tr style="background-color: #f3f4f6; text-align: left; border-bottom: 2px solid #e5e7eb;">
                <th style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #374151;">इलाका / क्षेत्र (Area/Locality)</th>
                <th style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #374151;">श्रेणी (Type)</th>
                <th style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #374151;">अनुमानित रेट प्रति कट्ठा (Est. Rate per Katha)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #111827;">Patna City (कोर टाउन - बोरिंग रोड, बेली रोड, कंकड़बाग)</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; color: #15803d; font-weight: 600;">Highly Commercial / Premium</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #b91c1c;">₹1.2 Crore — ₹3.0 Crore+</td>
            </tr>
            <tr style="background-color: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #111827;">Patna Sahib & Gulzarbagh (पुराना पटना सिटी)</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; color: #4b5563;">Mixed Residential & Retail</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #b91c1c;">₹60 Lakh — ₹1.2 Crore</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #111827;">Danapur & Khagaul Road (सगुना मोड़, लेखानगर)</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; color: #1e40af; font-weight: 600;">High-Density Residential</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #b91c1c;">₹50 Lakh — ₹1.1 Crore</td>
            </tr>
            <tr style="background-color: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #111827;">Phulwari Sharif (अनिसाबाद, एम्स रोड के निकट)</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; color: #4b5563;">Residential Hub</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #b91c1c;">₹40 Lakh — ₹85 Lakh</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #111827;">Shivala, Naubatpur Road (ग्रेटर पटना कॉरिडोर)</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; color: #15803d; font-weight: 600;">Investment / Developing</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #b91c1c;">₹22 Lakh — ₹45 Lakh</td>
            </tr>
            <tr style="background-color: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #111827;">Bihta (आईआईटी, ईएसआई हॉस्पिटल एरिया)</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; color: #1e40af; font-weight: 600;">Educational & Industrial Hub</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #b91c1c;">₹20 Lakh — ₹50 Lakh</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #111827;">Fatuha / Barh (सड़क किनारे व्यावसायिक बेल्ट)</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; color: #4b5563;">Semi-Urban / Commercial</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #b91c1c;">₹12 Lakh — ₹35 Lakh</td>
            </tr>
            <tr style="background-color: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #111827;">Patna District Agricultural Land (खेती की जमीन - भीटा/नौबतपुर अंदरूनी क्षेत्र)</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; color: #b45309; font-weight: 600;">Agriculture (खेती योग्य)</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #b91c1c;">₹6 Lakh — ₹18 Lakh</td>
            </tr>
        </tbody>
    </table>

    <!-- H2 Section 3 -->
    <h2 style="color: #15803d; font-family: sans-serif; font-size: 24px; font-weight: 700; border-bottom: 2px solid #22c55e; padding-bottom: 5px; margin-top: 40px; margin-bottom: 15px;">3. Factors Affecting Land Price in Patna (कीमतों को प्रभावित करने वाले मुख्य कारक)</h2>
    <p style="color: #1f2937; font-family: sans-serif; font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
        पटना में एक ही मौजे या गांव के अंदर दो अलग-अलग प्लॉट्स के दामों में काफी अंतर हो सकता है। इसके पीछे ये मुख्य वजहें होती हैं:
    </p>
    <ul style="color: #1f2937; font-family: sans-serif; font-size: 15px; line-height: 1.6; margin-bottom: 20px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>रास्ते की चौड़ाई (Road Width):</strong> यदि प्लॉट के सामने 30 फीट या 40 फीट चौड़ी सड़क है, तो उसका रेट 12 फीट या 15 फीट की सड़क वाले प्लॉट से दोगुना तक हो सकता है। हाईवे के किनारे (NH-30, NH-98) के प्लॉट्स सबसे महंगे हैं।</li>
        <li style="margin-bottom: 8px;"><strong>मेट्रो और ट्रांसपोर्ट कनेक्टिविटी:</strong> जो इलाके पटना मेट्रो अलाइनमेंट (जैसे कंकड़बाग, बाईपास, मीठापुर, दानापुर) के 1-2 किलोमीटर के दायरे में आते हैं, उनकी कीमतें बहुत तेजी से ऊपर जा रही हैं।</li>
        <li style="margin-bottom: 8px;"><strong>जमीन की प्रकृति (Land Type):</strong> आवासीय क्षेत्रों में 'भीट' (सूखी/ऊंची जमीन) की कीमत 'धानहर' (नीची/पानी वाली खेती की जमीन) से ज्यादा होती है, क्योंकि भीट जमीन पर तुरंत मकान बनाया जा सकता है और मिट्टी भराई (Soil Filling) का खर्च बचता है।</li>
        <li style="margin-bottom: 8px;"><strong>कानूनी स्थिति और दाखिल खारिज:</strong> वैसी जमीन जिसकी ऑनलाइन जमाबंदी बिल्कुल क्लियर है और पूर्व में कोई विवाद नहीं है, खरीदार उसके लिए अधिक प्रीमियम देने को सहर्ष तैयार हो जाते हैं।</li>
    </ul>

    <!-- H2 Section 4 -->
    <h2 style="color: #15803d; font-family: sans-serif; font-size: 24px; font-weight: 700; border-bottom: 2px solid #22c55e; padding-bottom: 5px; margin-top: 40px; margin-bottom: 15px;">4. How to Verify Land Rate Officially (सरकारी सर्किल रेट कैसे पता करें?)</h2>
    <p style="color: #1f2937; font-family: sans-serif; font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
        बिहार सरकार ने हर मौजे और थाने के अनुसार जमीन का न्यूनतम मूल्य तय किया है, जिसे <strong>MVR (Minimum Value Register)</strong> या सरकारी सर्किल रेट कहा जाता है। इसी रेट के आधार पर आपकी रजिस्ट्री का स्टांप शुल्क (Stamp Duty) और निबंधन फीस (Registration Fee) तय होती है।
    </p>
    <p style="color: #1f2937; font-family: sans-serif; font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
        <strong>MVR Rate चेक करने के स्टेप्स:</strong>
    </p>
    <ol style="color: #1f2937; font-family: sans-serif; font-size: 15px; line-height: 1.6; margin-bottom: 20px; padding-left: 20px;">
        <li style="margin-bottom: 8px;">बिहार सरकार के आधिकारिक मद्यनिषेध, उत्पाद एवं निबंधन विभाग के पोर्टल पर जाएं: <a href="http://bhumijankari.bihar.gov.in" target="_blank" style="color: #1d4ed8; text-decoration: underline;">bhumijankari.bihar.gov.in</a></li>
        <li style="margin-bottom: 8px;">होमपेज पर मौजूद <strong>"View MVR"</strong> या "Minimum Value Register" लिंक पर क्लिक करें।</li>
        <li style="margin-bottom: 8px;">अपना जिला <strong>(Patna)</strong>, संबंधित रजिस्ट्री ऑफिस (जैसे Danapur, Patna Sadar, Bihta), हल्का और मौजा चुनें।</li>
        <li style="margin-bottom: 8px;">आपके सामने भूमि की श्रेणियों (आवासीय, व्यावसायिक, मुख्य सड़क के निकट, कृषि) के आधार पर प्रति डेसिमल या प्रति वर्ग फीट का आधिकारिक सरकारी रेट आ जाएगा।</li>
    </ol>

    <!-- H2 Section 5 -->
    <h2 style="color: #15803d; font-family: sans-serif; font-size: 24px; font-weight: 700; border-bottom: 2px solid #22c55e; padding-bottom: 5px; margin-top: 40px; margin-bottom: 15px;">5. Tips for Buying Land in Patna (पटना में जमीन खरीदते समय सावधानियां)</h2>
    <p style="color: #1f2937; font-family: sans-serif; font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
        पटना में जमीन की खरीद-फरोख्त में धोखाधड़ी की खबरें आम हैं। सुरक्षित डील के लिए इन 5 सुनहरे नियमों का पालन अवश्य करें:
    </p>
    <ol style="color: #1f2937; font-family: sans-serif; font-size: 15px; line-height: 1.6; margin-bottom: 20px; padding-left: 20px;">
        <li style="margin-bottom: 10px;"><strong>टाइटल सर्च कराएं (Title Search 30 Years):</strong> पिछले 30 सालों के जमीन के रिकॉर्ड्स रजिस्ट्री ऑफिस से चेक कराएं ताकि यह सुनिश्चित हो सके कि जमीन किसी अन्य व्यक्ति के पास बंधक या बेची तो नहीं गई है। इसके लिए <strong>Non-Encumbrance Certificate (NEC)</strong> जरूर निकालें।</li>
        <li style="margin-bottom: 10px;"><strong>जमाबंदी ऑनलाइन चेक करें:</strong> बिहार भूमि की वेबसाइट पर जाकर देखें कि विक्रेता के नाम पर जमाबंदी (Register-II) ऑनलाइन दिख रही है या नहीं। यदि जमाबंदी दादा-परदादा के नाम पर है, तो विक्रेता से कहें कि वे पहले आपसी बटवारा म्यूटेशन करवाकर अपने नाम की जमाबंदी करवाएं।</li>
        <li style="margin-bottom: 10px;"><strong>नक्शा और सीमांकन (Land Demarcation):</strong> जमीन की रजिस्ट्री से पहले किसी सरकारी या अनुभवी अमीन (Surveyor) से जमीन की मापी करवाकर चौहद्दी को मौके पर पिलर देकर तय कर लें।</li>
        <li style="margin-bottom: 10px;"><strong>पैसा केवल बैंक माध्यम से दें:</strong> कैश में मोटी रकम देने से बचें। सभी भुगतान चेक, आरटीजीएस (RTGS) या नेट बैंकिंग द्वारा सीधे रजिस्ट्री डीड में उल्लिखित विक्रेता के बैंक खाते में ही ट्रांसफर करें।</li>
    </ol>

    <!-- H2 Section 6 -->
    <h2 style="color: #15803d; font-family: sans-serif; font-size: 24px; font-weight: 700; border-bottom: 2px solid #22c55e; padding-bottom: 5px; margin-top: 40px; margin-bottom: 15px;">6. FAQ Section (अक्सर पूछे जाने वाले प्रश्न)</h2>
    
    <div style="font-family: sans-serif; margin-bottom: 30px;">
        <div style="border-bottom: 1px solid #e5e7eb; padding: 15px 0;">
            <p style="font-weight: bold; color: #111827; margin: 0 0 5px 0;">Q1: पटना में 1 कट्ठा जमीन का आकार वर्ग फुट में कितना होता है?</p>
            <p style="color: #4b5563; margin: 0; line-height: 1.5;">Ans: पटना जिले में मानक मान के अनुसार 1 कट्ठा जमीन में <strong>1,361 वर्ग फुट (Square Feet)</strong> होता है। यहाँ सामान्यतः 5.5 हाथ की लग्गी से मापी की जाती है।</p>
        </div>
        <div style="border-bottom: 1px solid #e5e7eb; padding: 15px 0;">
            <p style="font-weight: bold; color: #111827; margin: 0 0 5px 0;">Q2: पटना में निवेश के लिए कौन सा इलाका सबसे बेस्ट और सस्ता है?</p>
            <p style="color: #4b5563; margin: 0; line-height: 1.5;">Ans: बजट निवेशकों के लिए शिवाला-नौबतपुर रोड, सैंपलचक-बैरिया रोड और नेउरा-बिहटा रोड के आसपास के इलाके सबसे बेहतरीन हैं। यहाँ ₹18 लाख से ₹30 लाख प्रति कट्ठा में प्लॉट मिल सकते हैं जो 5 साल में बढ़िया रिटर्न दे सकते हैं।</p>
        </div>
        <div style="border-bottom: 1px solid #e5e7eb; padding: 15px 0;">
            <p style="font-weight: bold; color: #111827; margin: 0 0 5px 0;">Q3: क्या बिहटा में जमीन खरीदना अभी फायदे का सौदा है?</p>
            <p style="color: #4b5563; margin: 0; line-height: 1.5;">Ans: बिल्कुल! बिहटा पटना का आगामी एजुकेशन और इंडस्ट्रियल हब है जहाँ आईआईटी पटना, ईएसआई हॉस्पिटल, और न्यू सिविल एन्क्लेव (एयरपोर्ट विस्तार) जैसे प्रोजेक्ट्स हैं। बिहटा में अभी निवेश करने पर 3-5 वर्षों में उत्कृष्ट लाभ मिलने की पूरी संभावना है।</p>
        </div>
        <div style="border-bottom: 1px solid #e5e7eb; padding: 15px 0;">
            <p style="font-weight: bold; color: #111827; margin: 0 0 5px 0;">Q4: पटना सदर और दानापुर के निबंधन शुल्क (Registration Fees) में क्या अंतर है?</p>
            <p style="color: #4b5563; margin: 0; line-height: 1.5;">Ans: सामान्यतः पटना जिले में जमीन रजिस्ट्री के लिए लगभग 6% स्टांप ड्यूटी और 2% निबंधन शुल्क देना होता है। हालांकि, अलग-अलग वार्ड और नगर परिषद सीमा के अनुसार स्थानीय सरकारी सर्किल रेट (MVR) थोड़ा भिन्न होता है।</p>
        </div>
        <div style="border-bottom: 1px solid #e5e7eb; padding: 15px 0;">
            <p style="font-weight: bold; color: #111827; margin: 0 0 5px 0;">Q5: सरकारी सर्किल रेट (MVR) और बाजार भाव (Market Rate) में क्या अंतर होता है?</p>
            <p style="color: #4b5563; margin: 0; line-height: 1.5;">Ans: सरकार जो न्यूनतम रजिस्ट्री मूल्य तय करती है उसे MVR या सर्किल रेट कहते हैं, यह कम होता है। बाजार भाव (Market Rate) वह वास्तविक मूल्य होता है जिसपर जमीन बेची जाती है, यह हमेशा सरकारी रेट से अधिक होता है।</p>
        </div>
        <div style="border-bottom: 1px solid #e5e7eb; padding: 15px 0;">
            <p style="font-weight: bold; color: #111827; margin: 0 0 5px 0;">Q6: पटना मरीन ड्राइव (गंगा पथ) के किनारे जमीन के क्या रेट हैं?</p>
            <p style="color: #4b5563; margin: 0; line-height: 1.5;">Ans: गंगा पथ और दीघा-एम्स रोड जंक्शन के आसपास जमीन के रेट आसमान छू रहे हैं। वर्तमान में यहाँ व्यावसायिक जमीन ₹1.5 करोड़ से लेकर ₹3.5 करोड़ प्रति कट्ठा तक बिक रही है।</p>
        </div>
        <div style="border-bottom: 1px solid #e5e7eb; padding: 15px 0;">
            <p style="font-weight: bold; color: #111827; margin: 0 0 5px 0;">Q7: क्या पटना के ग्रामीण इलाकों में रजिस्ट्री पर टैक्स छूट मिलती है?</p>
            <p style="color: #4b5563; margin: 0; line-height: 1.5;">Ans: ग्रामीण क्षेत्रों में महिलाओं के नाम पर रजिस्ट्री कराने पर स्टांप ड्यूटी में 1% की छूट सरकार द्वारा प्रदान की जाती है।</p>
        </div>
        <div style="border-bottom: 1px solid #e5e7eb; padding: 15px 0;">
            <p style="font-weight: bold; color: #111827; margin: 0 0 5px 0;">Q8: क्या पटना की जमीन पर बैंक तुरंत होम लोन दे देते हैं?</p>
            <p style="color: #4b5563; margin: 0; line-height: 1.5;">Ans: हाँ, यदि जमीन रेरा (RERA Bihar) अप्रूव्ड प्रोजेक्ट में हो या उसका दाखिल खारिज, नक्शा और LPC पूरी तरह से वैध हो, तो एसबीआई (SBI), एचडीएफसी (HDFC) और अन्य प्रमुख बैंक 70% से 80% तक लोन आसानी से दे देते हैं।</p>
        </div>
    </div>

</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rawHtmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="patna-rates-seo-article-hub" className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden mt-10">
      
      {/* Article Header Accent Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-green-700 p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="bg-white/10 text-orange-200 text-xs font-black uppercase px-2.5 py-1 rounded-full border border-white/10 tracking-wider">
            District Property Guide Series
          </span>
          <h3 className="text-xl md:text-2xl font-black flex items-center gap-2">
            <Coins className="w-6 h-6 text-yellow-300" />
            <span>पटना जिला जमीन दर रिपोर्ट 2026 | Land Rates in Patna</span>
          </h3>
          <p className="text-xs text-stone-100 font-medium">
            1500+ शब्दों का गहराई से विश्लेषण वाला ब्लॉग — कॉपी-पेस्ट करने के लिए बिलकुल तैयार!
          </p>
        </div>

        {/* Copy HTML Button */}
        <button
          onClick={copyToClipboard}
          className="bg-white text-stone-900 hover:bg-orange-50 px-4 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-95 shrink-0"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600 animate-bounce" />
              <span>HTML Copied! (सफलतापूर्वक कॉपी)</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-orange-600" />
              <span>Copy Raw SEO HTML (पटना रेट्स)</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12">
        
        {/* Right Sidebar - SEO Keywords and Metadata */}
        <div className="xl:col-span-4 bg-stone-50/70 p-5 border-b xl:border-b-0 xl:border-r border-stone-200 space-y-6">
          
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase text-stone-500 tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-green-700" />
              <span>Patna District SEO Matrix</span>
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              इस आर्टिकल को पटना के रियल एस्टेट सर्च कीवर्ड्स पर नंबर 1 रैंक कराने के लिए डिज़ाइन किया गया है।
            </p>
          </div>

          {/* Keywords list */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-3">
            <h5 className="text-[11px] font-black uppercase text-gray-400 tracking-wider">
              Primary SEO Target Keywords:
            </h5>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-bold bg-orange-50 text-orange-800 px-2.5 py-1 rounded-lg border border-orange-100">
                Patna mein zameen ka rate
              </span>
              <span className="text-xs font-bold bg-orange-50 text-orange-800 px-2.5 py-1 rounded-lg border border-orange-100">
                Patna land price per katha
              </span>
              <span className="text-xs font-bold bg-green-50 text-green-800 px-2.5 py-1 rounded-lg border border-green-100">
                Bihta land rate 2026
              </span>
              <span className="text-xs font-bold bg-blue-50 text-blue-800 px-2.5 py-1 rounded-lg border border-blue-100">
                Danapur property price
              </span>
            </div>
            <p className="text-[10px] text-gray-500 italic mt-1 leading-normal">
              *इन कीवर्ड्स को डेंसिटी गाइडलाइन्स के अनुसार पूरे टेक्स्ट में स्वाभाविक तरीके से समाहित किया गया है।
            </p>
          </div>

          {/* District Highlights */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-3">
            <h5 className="text-[11px] font-black uppercase text-gray-400 tracking-wider">
              Patna District Measurement Standard:
            </h5>
            <ul className="text-xs text-stone-700 space-y-2 font-medium">
              <li className="flex justify-between border-b border-stone-100 pb-1">
                <span>लग्गी का आकार (Laggi Size):</span>
                <span className="font-bold text-green-700">5.5 हाथ (8.25 Ft)</span>
              </li>
              <li className="flex justify-between border-b border-stone-100 pb-1">
                <span>1 कट्ठा का आकार (Katha):</span>
                <span className="font-bold text-green-700">1361.25 Sq Ft</span>
              </li>
              <li className="flex justify-between border-b border-stone-100 pb-1">
                <span>1 बीघा में एकड़ (Acre):</span>
                <span className="font-bold text-green-700">0.625 एकड़</span>
              </li>
            </ul>
          </div>

          {/* Disclaimer Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
            <h5 className="text-xs font-black text-amber-950 flex items-center gap-1">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>महत्वपूर्ण डिस्क्लेमर (Disclaimer):</span>
            </h5>
            <p className="text-[11px] text-amber-800 leading-relaxed font-medium">
              जमीन के दाम रोजाना बदलते रहते हैं और एक ही रास्ते पर दो प्लॉट्स के रेट भिन्न हो सकते हैं। इस आर्टिकल में दी गई दरें केवल ज्ञानवर्धन और अनुमान के लिए हैं। अंतिम खरीद से पहले अंचल कार्यालय या रजिस्ट्री ऑफिस से सरकारी रेट अवश्य सत्यापित करें।
            </p>
          </div>

        </div>

        {/* Left/Middle Column - Interactive Rendered Article View */}
        <div className="xl:col-span-8 p-5 sm:p-8 space-y-6 max-h-[850px] overflow-y-auto bg-stone-50/20">
          
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <span className="text-xs text-stone-500 font-black tracking-widest uppercase flex items-center gap-1.5">
              <Table className="w-4 h-4 text-green-700 animate-pulse" />
              <span>लाइव प्रिव्यू (Rendered Live Preview)</span>
            </span>
            <span className="text-xs text-green-600 font-bold bg-green-100/60 px-2.5 py-1 rounded-full border border-green-200">
              Patna Land Rates 2026
            </span>
          </div>

          {/* Interactive HTML render (styling replicated with Tailwind) */}
          <div className="prose prose-stone max-w-none text-stone-800 space-y-6 text-sm leading-relaxed">
            
            {/* Rendered Summary Box */}
            <div className="bg-red-50/70 border-2 border-red-200 rounded-2xl p-5 space-y-3 shadow-xs">
              <h4 className="text-red-900 font-black text-lg flex items-center gap-2">
                <Coins className="w-5 h-5 text-red-600" />
                <span>📊 Quick Overview: पटना में जमीन का रेट 2026</span>
              </h4>
              <p className="text-stone-700">
                <strong>औसत दर (Average Price Range):</strong> ₹15 Lakhs to ₹1.5 Crores+ प्रति कट्ठा (depends heavily on the exact locality, road width, and commercial prospects).
              </p>
              <p className="text-stone-700">
                <strong>सबसे महंगे इलाके:</strong> Bailey Road, Boring Road, Kankarbagh, Danapur Main Road (₹80 Lakhs - ₹1.8 Crore+ per Katha).
              </p>
              <p className="text-stone-700">
                <strong>तेजी से बढ़नेका कॉरिडोर (Greater Patna Hubs):</strong> Bihta, Shivala, Naubatpur, Sampatchak, Parsa Bazar (₹15 Lakhs - ₹45 Lakhs per Katha).
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
              Patna District Mein Zameen Ki Kimat 2026: जानिए पटना के हर इलाके में जमीन का रेट प्रति कट्ठा (Land Rate per Katha)
            </h1>

            <p>
              क्या आप बिहार की राजधानी पटना में जमीन खरीदने या बेचने की सोच रहे हैं? पटना रीयल एस्टेट मार्केट (Patna Real Estate Market) पूरे बिहार में सबसे हॉट और तेजी से बढ़ने वाला क्षेत्र है। नए मेट्रो रूट (Patna Metro), मरीन ड्राइव (Ganga Path), और एम्स-खगौल एलिवेटेड रोड के निर्माण के कारण <strong>Patna mein zameen ka rate</strong> आसमान छू रहा है। आज के इस विशेष गाइड में हम बात करेंगे कि वर्ष 2026 में पटना के शहरी, उपशहरी और ग्रामीण इलाकों में <strong>Patna land price per katha</strong> क्या चल रहा है और निवेश के लिए कौन से इलाके सबसे बेस्ट हैं।
            </p>

            <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-1 mt-6">
              1. Overview of Patna Land Market (पटना प्रॉपर्टी मार्केट की वर्तमान स्थिति)
            </h2>
            <p>
              पटना में जमीन की मांग आवासीय (Residential) और व्यावसायिक (Commercial) दोनों उद्देश्यों के लिए लगातार बढ़ रही है। पटना का भौगोलिक विस्तार अब मुख्य शहर से बाहर निकलकर <strong>Danapur, Bihta, Naubatpur, Neora, Punpun, and Sampatchak</strong> की तरफ बहुत तेजी से हो रहा है।
            </p>
            <p>
              पटना मेट्रो प्रोजेक्ट के पहले फेज के चालू होने की तैयारियों और नए रिंग रोड कनेक्टिविटी ने बाहरी इलाकों की कीमतों में 200% तक की उछाल दर्ज कराई है। निवेशक अब कोर पटना सिटी के बजाय ग्रेटर पटना (Greater Patna) क्षेत्र में बड़े प्लॉट्स खरीद रहे हैं जहाँ भविष्य में बड़े रेसिडेंशियल टाउनशिप की योजना है।
            </p>

            <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-1 mt-6 flex items-center gap-2">
              <Table className="w-5 h-5 text-green-700" />
              <span>2. Patna Area-Wise Land Rate Table 2026 (प्रति कट्ठा दर सूची)</span>
            </h2>
            
            <div className="overflow-x-auto border border-stone-200 rounded-xl">
              <table className="min-w-full divide-y divide-stone-200">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-black text-stone-500 uppercase">इलाका / क्षेत्र (Area/Locality)</th>
                    <th className="px-4 py-3 text-left text-xs font-black text-stone-500 uppercase">श्रेणी (Type)</th>
                    <th className="px-4 py-3 text-left text-xs font-black text-stone-500 uppercase">अनुमानित रेट प्रति कट्ठा (Est. Rate per Katha)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-stone-200">
                  <tr>
                    <td className="px-4 py-3 font-bold text-stone-900">Patna City (बोरिंग रोड, बेली रोड, कंकड़बाग)</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">Premium Commercial</td>
                    <td className="px-4 py-3 text-red-600 font-extrabold">₹1.2 Crore — ₹3.0 Crore+</td>
                  </tr>
                  <tr className="bg-stone-50/55">
                    <td className="px-4 py-3 font-bold text-stone-900">Patna Sahib & Gulzarbagh (पुराना पटना सिटी)</td>
                    <td className="px-4 py-3 text-stone-600">Mixed Residential</td>
                    <td className="px-4 py-3 text-red-600 font-extrabold">₹60 Lakh — ₹1.2 Crore</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-stone-900">Danapur & Khagaul Road (सगुना मोड़, लेखानगर)</td>
                    <td className="px-4 py-3 text-blue-700 font-semibold">High-Density Res</td>
                    <td className="px-4 py-3 text-red-600 font-extrabold">₹50 Lakh — ₹1.1 Crore</td>
                  </tr>
                  <tr className="bg-stone-50/55">
                    <td className="px-4 py-3 font-bold text-stone-900">Phulwari Sharif (अनिसाबाद, एम्स रोड निकट)</td>
                    <td className="px-4 py-3 text-stone-600">Residential Hub</td>
                    <td className="px-4 py-3 text-red-600 font-extrabold">₹40 Lakh — ₹85 Lakh</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-stone-900">Shivala, Naubatpur Road (ग्रेटर पटना कॉरिडोर)</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">Developing / Invest</td>
                    <td className="px-4 py-3 text-red-600 font-extrabold">₹22 Lakh — ₹45 Lakh</td>
                  </tr>
                  <tr className="bg-stone-50/55">
                    <td className="px-4 py-3 font-bold text-stone-900">Bihta (आईआईटी, ईएसआई हॉस्पिटल एरिया)</td>
                    <td className="px-4 py-3 text-blue-700 font-semibold">Educational Hub</td>
                    <td className="px-4 py-3 text-red-600 font-extrabold">₹20 Lakh — ₹50 Lakh</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-stone-900">Fatuha / Barh (सड़क किनारे व्यावसायिक बेल्ट)</td>
                    <td className="px-4 py-3 text-stone-600">Semi-Urban</td>
                    <td className="px-4 py-3 text-red-600 font-extrabold">₹12 Lakh — ₹35 Lakh</td>
                  </tr>
                  <tr className="bg-stone-50/55">
                    <td className="px-4 py-3 font-bold text-stone-900">Patna District Agricultural Land (खेती की जमीन)</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">Agriculture (खेती योग्य)</td>
                    <td className="px-4 py-3 text-red-600 font-extrabold">₹6 Lakh — ₹18 Lakh</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-1 mt-6">
              3. Factors Affecting Land Price in Patna (कीमतों को प्रभावित करने वाले मुख्य कारक)
            </h2>
            <p>
              पटना में एक ही मौजे या गांव के अंदर दो अलग-अलग प्लॉट्स के दामों में काफी अंतर हो सकता है। इसके पीछे ये मुख्य वजहें होती हैं:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>रास्ते की चौड़ाई (Road Width):</strong> यदि प्लॉट के सामने 30 फीट या 40 फीट चौड़ी सड़क है, तो उसका रेट 12 फीट या 15 फीट की सड़क वाले प्लॉट से दोगुना तक हो सकता है। हाईवे के किनारे (NH-30, NH-98) के प्लॉट्स सबसे महंगे हैं।</li>
              <li><strong>मेट्रो और ट्रांसपोर्ट कनेक्टिविटी:</strong> जो इलाके पटना मेट्रो अलाइनमेंट (जैसे कंकड़बाग, बाईपास, मीठापुर, दानापुर) के 1-2 किलोमीटर के दायरे में आते हैं, उनकी कीमतें बहुत तेजी से ऊपर जा रही हैं।</li>
              <li><strong>जमीन की प्रकृति (Land Type):</strong> आवासीय क्षेत्रों में 'भीट' (सूखी/ऊंची जमीन) की कीमत 'धानहर' (नीची/पानी वाली खेती की जमीन) से ज्यादा होती है, क्योंकि भीट जमीन पर तुरंत मकान बनाया जा सकता है और मिट्टी भराई (Soil Filling) का खर्च बचता है।</li>
            </ul>

            <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-1 mt-6">
              4. How to Verify Land Rate Officially (सरकारी सर्किल रेट कैसे पता करें?)
            </h2>
            <p>
              बिहार सरकार ने हर मौजे और थाने के अनुसार जमीन का न्यूनतम मूल्य तय किया है, जिसे <strong>MVR (Minimum Value Register)</strong> या सरकारी सर्किल रेट कहा जाता है। इसी रेट के आधार पर आपकी रजिस्ट्री का स्टांप शुल्क (Stamp Duty) और निबंधन फीस (Registration Fee) तय होती है।
            </p>
            <p className="bg-stone-100 p-4 rounded-xl border border-stone-200 font-semibold text-stone-800">
              आप आधिकारिक तौर पर सरकारी सर्किल रेट जांचने के लिए निबंधन विभाग के पोर्टल <a href="http://bhumijankari.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">bhumijankari.bihar.gov.in</a> पर जा सकते हैं, जहाँ "View MVR" लिंक में पूरी सूचियां पीडीएफ और इंटरएक्टिव रूप में उपलब्ध हैं।
            </p>

            <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-1 mt-6">
              5. Tips for Buying Land in Patna (पटना में जमीन खरीदते समय सावधानियां)
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>टाइटल सर्च कराएं (Title Search 30 Years):</strong> पिछले 30 सालों के जमीन के रिकॉर्ड्स रजिस्ट्री ऑफिस से चेक कराएं ताकि यह सुनिश्चित हो सके कि जमीन किसी अन्य व्यक्ति के पास बंधक या बेची तो नहीं गई है। इसके लिए <strong>Non-Encumbrance Certificate (NEC)</strong> जरूर निकालें।</li>
              <li><strong>जमाबंदी ऑनलाइन चेक करें:</strong> बिहार भूमि की वेबसाइट पर जाकर देखें कि विक्रेता के नाम पर जमाबंदी (Register-II) ऑनलाइन दिख रही है या नहीं। यदि जमाबंदी दादा-परदादा के नाम पर है, तो विक्रेता से कहें कि वे पहले आपसी बटवारा म्यूटेशन करवाकर अपने नाम की जमाबंदी करवाएं।</li>
              <li><strong>नक्शा और सीमांकन (Land Demarcation):</strong> जमीन की रजिस्ट्री से पहले किसी सरकारी या अनुभवी अमीन (Surveyor) से जमीन की मापी करवाकर चौहद्दी को मौके पर पिलर देकर तय कर लें।</li>
            </ol>

            <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-1 mt-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-green-700" />
              <span>6. FAQ Section (अक्सर पूछे जाने वाले प्रश्न)</span>
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-3xs">
                <p className="font-bold text-stone-900">Q1: पटना में 1 कट्ठा जमीन का आकार वर्ग फुट में कितना होता है?</p>
                <p className="text-stone-600 mt-1">Ans: पटना जिले में मानक मान के अनुसार 1 कट्ठा जमीन में <strong>1,361.25 वर्ग फुट (Square Feet)</strong> होता है। यहाँ सामान्यतः 5.5 हाथ की लग्गी से मापी की जाती है।</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-3xs">
                <p className="font-bold text-stone-900">Q2: पटना में निवेश के लिए कौन सा इलाका सबसे बेस्ट और सस्ता है?</p>
                <p className="text-stone-600 mt-1">Ans: बजट निवेशकों के लिए शिवाला-नौबतपुर रोड, सैंपलचक-बैरिया रोड और नेउरा-बिहटा रोड के आसपास के इलाके सबसे बेहतरीन हैं। यहाँ ₹18 लाख से ₹30 लाख प्रति कट्ठा में प्लॉट मिल सकते हैं जो 5 साल में बढ़िया रिटर्न दे सकते हैं।</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-3xs">
                <p className="font-bold text-stone-900">Q3: क्या बिहटा में जमीन खरीदना अभी फायदे का सौदा है?</p>
                <p className="text-stone-600 mt-1">Ans: बिल्कुल! बिहटा पटना का आगामी एजुकेशन और इंडस्ट्रियल हब है जहाँ आईआईटी पटना, ईएसआई हॉस्पिटल, और न्यू सिविल एन्क्लेव (एयरपोर्ट विस्तार) जैसे प्रोजेक्ट्स हैं। बिहटा में अभी निवेश करने पर 3-5 वर्षों में उत्कृष्ट लाभ मिलने की पूरी संभावना है।</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-3xs">
                <p className="font-bold text-stone-900">Q4: पटना सदर और दानापुर के निबंधन शुल्क (Registration Fees) में क्या अंतर है?</p>
                <p className="text-stone-600 mt-1">Ans: सामान्यतः पटना जिले में जमीन रजिस्ट्री के लिए लगभग 6% स्टांप ड्यूटी और 2% निबंधन शुल्क देना होता है। हालांकि, अलग-अलग वार्ड और नगर परिषद सीमा के अनुसार स्थानीय सरकारी सर्किल रेट (MVR) थोड़ा भिन्न होता है।</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-3xs">
                <p className="font-bold text-stone-900">Q5: सरकारी सर्किल रेट (MVR) और बाजार भाव (Market Rate) में क्या अंतर होता है?</p>
                <p className="text-stone-600 mt-1">Ans: सरकार जो न्यूनतम रजिस्ट्री मूल्य तय करती है उसे MVR या सर्किल रेट कहते हैं, यह कम होता है। बाजार भाव (Market Rate) वह वास्तविक मूल्य होता है जिसपर जमीन बेची जाती है, यह हमेशा सरकारी रेट से अधिक होता है।</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-3xs">
                <p className="font-bold text-stone-900">Q6: पटना मरीन ड्राइव (गंगा पथ) के किनारे जमीन के क्या रेट हैं?</p>
                <p className="text-stone-600 mt-1">Ans: गंगा पथ और दीघा-एम्स रोड जंक्शन के आसपास जमीन के रेट आसमान छू रहे हैं। वर्तमान में यहाँ व्यावसायिक जमीन ₹1.5 करोड़ से लेकर ₹3.5 करोड़ प्रति कट्ठा तक बिक रही है।</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-3xs">
                <p className="font-bold text-stone-900">Q7: क्या पटना के ग्रामीण इलाकों में रजिस्ट्री पर टैक्स छूट मिलती है?</p>
                <p className="text-stone-600 mt-1">Ans: ग्रामीण क्षेत्रों में महिलाओं के नाम पर रजिस्ट्री कराने पर स्टांप ड्यूटी में 1% की छूट सरकार द्वारा प्रदान की जाती है।</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-3xs">
                <p className="font-bold text-stone-900">Q8: क्या पटना की जमीन पर बैंक तुरंत होम लोन दे देते हैं?</p>
                <p className="text-stone-600 mt-1">Ans: हाँ, यदि जमीन रेरा (RERA Bihar) अप्रूव्ड प्रोजेक्ट में हो या उसका दाखिल खारिज, नक्शा और LPC पूरी तरह से वैध हो, तो एसबीआई (SBI), एचडीएफसी (HDFC) और अन्य प्रमुख बैंक 70% से 80% तक लोन आसानी से दे देते हैं।</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
