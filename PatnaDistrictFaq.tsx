import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Copy, Check, Info, MapPin, Phone, Landmark, DollarSign, Scale, ExternalLink, Download } from "lucide-react";

interface FaqItem {
  qNo: number;
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
  category: "rates" | "buying" | "conversion" | "contacts" | "disputes" | "rules";
  categoryLabel: string;
}

export default function PatnaDistrictFaq() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(1); // Open first by default
  const [copiedSchema, setCopiedSchema] = useState(false);

  const patnaFaqs: FaqItem[] = [
    {
      qNo: 1,
      category: "conversion",
      categoryLabel: "Land Measurement (माप और लग्गी)",
      questionHi: "पटना में 1 कट्ठा जमीन कितने स्क्वायर फीट (Sq Ft) की होती है?",
      questionEn: "What is the size of 1 Katha land in Patna in Sq Ft?",
      answerHi: "पटना और उसके आसपास के क्षेत्रों में मानक 5.5 हाथ की लग्गी (Laggi) का उपयोग किया जाता है। इस लग्गी के अनुसार पटना में 1 कट्ठा जमीन = 1361.25 वर्ग फीट (Square Feet) होती है। गज में यह लगभग 151.25 वर्ग गज (Sq Yards) के बराबर होती है। 1 बीघा में कुल 20 कट्ठा (यानी 27,225 Sq Ft) होते हैं।",
      answerEn: "In Patna and surrounding regions, a standard 5.5-hand Laggi (measuring rod) is used. According to this Laggi, 1 Katha of land in Patna = 1361.25 Square Feet. In square yards, it is approx 151.25 Sq Yards. 1 Bigha consists of 20 Kathas (equivalent to 27,225 Sq Ft)."
    },
    {
      qNo: 2,
      category: "rates",
      categoryLabel: "Land Rates & circle rates (सर्किल रेट और दाम)",
      questionHi: "पटना में जमीन रजिस्ट्री शुल्क (Stamp Duty & Registry charges) कितना है?",
      questionEn: "What are the land registry charges and stamp duty in Patna?",
      answerHi: "बिहार सरकार के नियमानुसार, पटना में सामान्यतः पुरुष खरीदारों के लिए कुल रजिस्ट्री चार्ज सर्किल रेट (MVR) का 8% (6% स्टांप ड्यूटी + 2% निबंधन शुल्क) लगता है। महिला खरीदारों को प्रोत्साहन देने के लिए स्टांप ड्यूटी में 1% की छूट मिलती है, जिससे उनके लिए कुल खर्च 7% होता है। इसके अलावा कोर्ट फीस व सर्विस चार्ज अलग से जुड़ते हैं।",
      answerEn: "As per Bihar government rules, the standard land registration fee in Patna is 8% of the circle rate/MVR for male buyers (6% Stamp Duty + 2% Registration Fee). For female buyers, there is a 1% concession on stamp duty, making the total registry cost 7% of the MVR."
    },
    {
      qNo: 3,
      category: "rates",
      categoryLabel: "Land Rates & circle rates (सर्किल रेट और दाम)",
      questionHi: "पटना बाईपास और रिंग रोड के पास जमीन का सरकारी रेट (MVR) कैसे जानें?",
      questionEn: "How to find government land rates (MVR) near Patna bypass and Ring Road?",
      answerHi: "पटना बाईपास, रिंग रोड और एनएच (NH) से सटी जमीनों का सरकारी न्यूनतम मूल्य (MVR) जानने के लिए आप बिहार भूमि सुधार विभाग के 'निबंधन' पोर्टल (bhumijankari.bihar.gov.in) पर जा सकते हैं। वहां 'View MVR' विकल्प में पटना जिला, संबंधित अंचल (जैसे संपतचक, फतुहा) और मौजा का चयन करें। यहाँ सड़क की श्रेणी (मुख्य सड़क, लिंक रोड या देहाती मार्ग) के अनुसार सर्किल रेट सूचीबद्ध रहता है।",
      answerEn: "To check the Minimum Valuation Register (MVR) near Patna Bypass, Ring Road, or national highways, visit the official Bihar registration portal (bhumijankari.bihar.gov.in). Choose 'View MVR', select Patna district, the respective circle (Anchal like Sampatchak or Fatuha), and the village (Mauza). Rates are listed categorized by road accessibility (Main Highway, Link Road, or Rural Road)."
    },
    {
      qNo: 4,
      category: "rules",
      categoryLabel: "Land Rules & Approvals (सरकारी नियम)",
      questionHi: "पटना में खेती की जमीन को आवासीय (Residential/Commercial) कैसे करवाएं?",
      questionEn: "How to convert agricultural land to residential or commercial in Patna?",
      answerHi: "कृषि भूमि का डायवर्जन (Conversion) कराने के लिए पटना अनुमंडल पदाधिकारी (SDO) के समक्ष आवेदन करना होता है। इसके लिए आपको 'बिहार भूमि' पोर्टल पर ऑनलाइन आवेदन करना होगा, चालू वर्ष की लगान रसीद, जमाबंदी कॉपी और भू-परिवर्तन शुल्क (जमीन के सरकारी मूल्य का एक निश्चित प्रतिशत) जमा करना होगा। SDO कार्यालय से अंचल अधिकारी की रिपोर्ट के बाद इसकी मंजूरी मिलती है।",
      answerEn: "To convert agricultural land into residential or commercial usage (Land Diversion) in Patna, you must submit an application to the Sub-Divisional Officer (SDO). Apply online on the Bihar Bhumi portal, upload updated land tax receipts, Jamabandi copy, and pay the conversion fee (a set percentage of the government valuation). Final approval is issued post CO inspection report."
    },
    {
      qNo: 5,
      category: "rates",
      categoryLabel: "Land Rates & circle rates (सर्किल रेट और दाम)",
      questionHi: "पटना नगर निगम (PMC) क्षेत्र में होल्डिंग टैक्स ऑनलाइन कैसे जमा करें?",
      questionEn: "How to pay PMC holding tax online in Patna?",
      answerHi: "पटना नगर निगम (Patna Municipal Corporation) क्षेत्र के अंतर्गत आने वाले घरों व प्लॉट का होल्डिंग टैक्स चुकाने के लिए 'PMC Patna' की आधिकारिक वेबसाइट (pmc.bihar.gov.in) पर जाएं। वहां 'Self Assessment & Pay Holding Tax' चुनें। अपना होल्डिंग नंबर (या वार्ड नंबर और नाम) दर्ज कर बकाया टैक्स देखें और नेट बैंकिंग, यूपीआई या क्रेडिट कार्ड द्वारा तुरंत ऑनलाइन भुगतान करें।",
      answerEn: "To pay Holding/Property Tax online for properties within Patna Municipal Corporation (PMC) limits, visit the official portal (pmc.bihar.gov.in). Go to the property tax payment section, enter your Unique Holding ID or Ward number, view outstanding dues, and pay securely using UPI, Net Banking, or Debit/Credit cards."
    },
    {
      qNo: 6,
      category: "buying",
      categoryLabel: "Property Buying Tips (जमीन खरीद सलाह)",
      questionHi: "बिहटा (Bihta Patna) में प्लॉट खरीदने से पहले कौन से कागजात चेक करें?",
      questionEn: "What papers to check before buying a plot in Bihta, Patna?",
      answerHi: "बिहटा एक बड़ा एजुकेशनल और इंडस्ट्रियल हब बन रहा है। यहाँ प्लॉट लेने से पहले: 1) विक्रेता के नाम की ऑनलाइन जमाबंदी और अद्यतन लगान रसीद। 2) पिछले 30 वर्षों का केवाला (Sale Deed)। 3) निबंधन कार्यालय से प्राप्त गैर-भार प्रमाण पत्र (NEC)। 4) यदि ज़मीन बिल्डर की है, तो RERA बिहार की वेबसाइट पर प्रोजेक्ट का रजिस्ट्रेशन नंबर और नक्शा पास होने की स्थिति अवश्य जांचें।",
      answerEn: "As Bihta is rapidly growing into an educational & industrial hub, check these before buying: 1) Online Jamabandi and updated rent receipts in the seller's name. 2) Historical chain deeds (Kewala) for at least 30 years. 3) Non-Encumbrance Certificate (NEC) from Danapur registrar. 4) If buying from a developer, verify their RERA Bihar registration number and approved layout maps."
    },
    {
      qNo: 7,
      category: "conversion",
      categoryLabel: "Land Measurement (माप और लग्गी)",
      questionHi: "पटना में जमीन का सरकारी अमीन कैसे बुलाएं और इसकी आधिकारिक फीस क्या है?",
      questionEn: "How to hire a government Amin for measurement in Patna & what is the fee?",
      answerHi: "जमीन की आधिकारिक पैमाइश (Measurement) के लिए आपको 'बिहार भूमि' वेबसाइट या अपने संबंधित अंचल कार्यालय (जैसे पटना सदर, दानापुर, बिहटा) के लोक सेवा केंद्र (RTPS Counter) पर जाकर आवेदन करना होगा। सरकारी अमीन की आधिकारिक नापी फीस ₹500 प्रति प्लॉट है (यह सरकारी नियमों के अधीन बदल सकती है)। आवेदन के बाद अंचल द्वारा तिथि आवंटित की जाती है और अमीन सीमांकन के लिए आता है।",
      answerEn: "To request an official measurement (Napi), submit an application on the Bihar Bhumi portal or visit the RTPS Counter at your local Block/Anchal Office (e.g., Patna Sadar, Danapur, Bihta). The government-stipulated fee is approximately ₹500 per plot. After submission, a date is scheduled, and a government-authorized Amin arrives to survey the boundaries."
    },
    {
      qNo: 8,
      category: "disputes",
      categoryLabel: "Land Disputes (भूमि विवाद निवारण)",
      questionHi: "पटना कलेक्ट्रेट (DM Office) में भूमि विवाद निवारण कोर्ट (DCLR Court) कहाँ है?",
      questionEn: "Where is the Land Dispute Settlement (DCLR) Court in Patna?",
      answerHi: "पटना जिला में भूमि विवादों की सुनवाई के लिए भूमि सुधार उप समाहर्ता (DCLR) कोर्ट कार्यरत हैं। पटना सदर, संपतचक, फुलवारीशरीफ अंचलों का डीसीएलआर कोर्ट कलेक्ट्रेट परिसर (गांधी मैदान के पास) स्थित है। अन्य अनुमंडलों जैसे दानापुर, बाढ़, मसौढ़ी और पालीगंज के लिए संबंधित अनुमंडल मुख्यालयों में पृथक DCLR न्यायालय स्थापित हैं जहां सीमा विवाद और नामांतरण अपीलों की सुनवाई होती है।",
      answerEn: "Land dispute resolution courts headed by the Deputy Collector Land Reforms (DCLR) operate in Patna. The DCLR Sadar (governing Patna Sadar, Sampatchak, and Phulwari) is located at the Patna Collectorate campus near Gandhi Maidan. For sub-divisions like Danapur, Masaurhi, Barh, and Paliganj, DCLR courts sit at their respective sub-divisional headquarters."
    },
    {
      qNo: 9,
      category: "contacts",
      categoryLabel: "Govt Contacts (कार्यालय एवं संपर्क)",
      questionHi: "पटना सदर अंचल कार्यालय (Anchal Office) का पता और काम क्या है?",
      questionEn: "What is Patna Sadar Anchal Office address and scope of work?",
      answerHi: "पटना सदर अंचल कार्यालय छज्जूबाग, पटना (पटना कलेक्ट्रेट के नजदीक) में स्थित है। यह कार्यालय पटना शहर के शहरी और ग्रामीण इलाकों के दाखिल खारिज (Mutation), जमाबंदी सुधार (Parimarjan), भू-लगान रसीद काटने, एलपीसी (LPC) प्रमाण पत्र जारी करने और अमीन द्वारा नापी के काम के लिए नोडल प्रशासनिक केंद्र है। यहाँ के प्रशासनिक प्रमुख अंचल अधिकारी (Circle Officer - CO) होते हैं।",
      answerEn: "The Patna Sadar Anchal Office is located at Chhajubagh, Patna (near Patna Collectorate). This office acts as the administrative nodal center for land mutations (Dakhil Kharij), record corrections (Parimarjan), land revenue receipt collection, LPC issuance, and surveys. The administrative head of this office is the Circle Officer (CO)."
    },
    {
      qNo: 10,
      category: "rules",
      categoryLabel: "Land Rules & Approvals (सरकारी नियम)",
      questionHi: "पटना में फ्लैट खरीदने पर सुपर बिल्ट-अप एरिया और कारपेट एरिया का नियम क्या है?",
      questionEn: "What is the rule for super built-up vs carpet area in Patna flats?",
      answerHi: "बिहार रेरा (RERA Bihar) के सख्त नियमों के अनुसार, बिल्डरों के लिए विज्ञापन और बिक्री समझौतों में 'कारपेट एरिया' (वास्तविक रहने योग्य फर्श का क्षेत्र) का स्पष्ट उल्लेख करना अनिवार्य है। पटना में सुपर बिल्ट-अप एरिया (जिसमें लिफ्ट, लॉबी, सीढ़ियां शामिल हैं) के नाम पर फ्लैट के मूल्य में अनुचित बढ़ोतरी नहीं की जा सकती। खरीदारों को हमेशा कारपेट एरिया के प्रति वर्ग फुट की दर से ही भुगतान करने की सलाह दी जाती है।",
      answerEn: "Under strict RERA Bihar regulations, developers in Patna are legally mandated to declare and quote prices based on 'Carpet Area' (actual usable floor area) rather than inflated 'Super Built-up Area' (which includes shared staircases, lobbies, and lift shafts). Buyers are highly advised to evaluate and negotiate flat purchases based strictly on carpet area pricing."
    },
    {
      qNo: 11,
      category: "rules",
      categoryLabel: "Land Rules & Approvals (सरकारी नियम)",
      questionHi: "दानापुर (Danapur Patna) में मिलिट्री कैंटोनमेंट के पास जमीन लेने के क्या नियम हैं?",
      questionEn: "What are the rules for buying land near Danapur Cantonment Area?",
      answerHi: "दानापुर छावनी (Danapur Cantt) एक संवेदनशील सैन्य क्षेत्र है। इसके बाहरी बाउंड्री के एक निश्चित रेडियस (आमतौर पर 100 से 500 मीटर) के भीतर निजी निर्माण या आवासीय प्लॉट खरीदने पर सख्त प्रतिबंध हैं। ऐसे इलाकों में कोई भी प्लॉट खरीदने या घर बनाने से पहले दानापुर कैंटोनमेंट बोर्ड और स्थानीय अंचल कार्यालय से नो-ऑब्जेक्शन सर्टिफिकेट (NOC) प्राप्त करना अनिवार्य है, अन्यथा निर्माण को अवैध घोषित कर ध्वस्त किया जा सकता है।",
      answerEn: "Danapur Cantonment is a highly restricted defense zone. Strict guidelines prohibit private construction or land purchase within a specific radius (typically 100 to 500 meters) of the outer defense boundary. Before buying a plot or beginning building in these adjacent zones, getting a No-Objection Certificate (NOC) from the Danapur Cantonment Board and local municipal authorities is mandatory."
    },
    {
      qNo: 12,
      category: "rates",
      categoryLabel: "Land Rates & circle rates (सर्किल रेट और दाम)",
      questionHi: "पटना में सगुना मोड़ (Saguna More) और खगौल में जमीन का क्या रेट चल रहा है?",
      questionEn: "What are current land rates in Saguna More and Khagaul, Patna?",
      answerHi: "सगुना मोड़ और खगौल पटना के सबसे प्राइम कमर्शियल और रेसिडेंशियल कॉरिडोर में से हैं। मुख्य सड़कों पर कमर्शियल जमीनों की कीमत ₹1.5 करोड़ से लेकर ₹3.5 करोड़ प्रति कट्ठा तक हो सकती है। लिंक रोड और भीतरी आवासीय कॉलोनियों में जमीन की दरें ₹60 लाख से ₹1.2 करोड़ प्रति कट्ठा के बीच वैरी करती हैं। सटीक सरकारी मूल्य जानने के लिए खगौल रजिस्ट्री कार्यालय की न्यूनतम मूल्यांकन सूची देखें।",
      answerEn: "Saguna More and Khagaul are among Patna's most premium commercial and residential corridors. Commercial plots directly on the main arterial roads range from ₹1.5 Crore to ₹3.5 Crore+ per Katha. In connecting link roads and interior residential colonies, rates hover between ₹60 Lakh to ₹1.2 Crore per Katha. Consult the Khagaul registrar's office for official local MVRs."
    },
    {
      qNo: 13,
      category: "rules",
      categoryLabel: "Land Rules & Approvals (सरकारी नियम)",
      questionHi: "पटना जिला में नया भूमि विशेष सर्वेक्षण (Bihar Land Survey 2026) कब तक चलेगा?",
      questionEn: "How long will the new Bihar Land Survey 2026 run in Patna district?",
      answerHi: "बिहार विशेष सर्वेक्षण का काम पटना जिले के सभी 23 अंचलों में तेजी से चल रहा है। इस सर्वेक्षण का मुख्य उद्देश्य डिजिटल, उपग्रह-आधारित सीमांकन और अद्यतन खतियान रिकॉर्ड तैयार करना है। रैयतों को अपनी वंशावली (प्रपत्र 3-i) और स्वघोषणा पत्र (प्रपत्र 2) अपने शिविर प्रभारी या राजस्व कर्मचारी के पास जमा करने के निर्देश दिए गए हैं। यह सर्वेक्षण अभियान वर्ष 2026 के अंत तक पूरा करने का लक्ष्य सरकार द्वारा रखा गया है।",
      answerEn: "The Bihar Special Land Survey is actively underway across all 23 circles of Patna district. The campaign aims to create modernized satellite-based digital maps and conflict-free ownership titles (Khatiyan). Landholders must submit their ancestral lineage forms (Form 3-i) and self-declarations (Form 2) to their local circle camp. The state government targets completion of this survey by late 2026."
    },
    {
      qNo: 14,
      category: "disputes",
      categoryLabel: "Land Disputes (भूमि विवाद निवारण)",
      questionHi: "पटना में गैर-मजरूआ आम (Gair Mazarua) जमीन का क्या लफड़ा होता है?",
      questionEn: "What is the legal issue with Gair Mazarua common land in Patna?",
      answerHi: "गैर-मजरूआ दो प्रकार की होती है: आम (Common) और खास (Special)। गैर-मजरूआ आम जमीन (जैसे पुराना तालाब, श्मशान, खेल का मैदान, रास्ता) सार्वजनिक हित की सरकारी जमीन होती है। इसकी खरीद-बिक्री या निजी उपयोग पर पूर्णतः कानूनी रोक है। कुछ असामाजिक तत्व फर्जी केवाला डीड बनाकर इसे बेच देते हैं, लेकिन ऐसी जमीन का कभी भी दाखिल खारिज (Mutation) नहीं हो सकता और खरीदार का पैसा पूरी तरह डूब जाता है।",
      answerEn: "Gair Mazarua land is divided into two categories: Aam (Public) and Khas (Special). Gair Mazarua Aam land (like community ponds, pathways, playgrounds) belongs exclusively to the state for public utility. Its sale, purchase, or private transfer is strictly illegal. Fraudsters occasionally forge registry deeds to sell such plots, but mutation will always be rejected, and the buyer will lose their entire investment."
    },
    {
      qNo: 15,
      category: "disputes",
      categoryLabel: "Land Disputes (भूमि विवाद निवारण)",
      questionHi: "क्या पटना में किसी मठ, न्यास (Trust) या मंदिर की जमीन खरीदी जा सकती है?",
      questionEn: "Can monastery, trust, or temple land be purchased legally in Patna?",
      answerHi: "बिहार हिंदू धार्मिक न्यास बोर्ड (Bihar State Board of Religious Trusts) के अंतर्गत पंजीकृत किसी भी मंदिर, मठ या धार्मिक ट्रस्ट की जमीन की सीधी खरीद-बिक्री अवैध है। ऐसी जमीन को केवल विशेष परिस्थितियों में, न्यास बोर्ड की लिखित पूर्व अनुमति और जिला जज की मंजूरी के बाद ही हस्तांतरित या पट्टे पर दिया जा सकता है। बिना न्यास बोर्ड की अनापत्ति (NOC) के खरीदी गई जमीन की रजिस्ट्री रद्द हो जाती है।",
      answerEn: "Direct purchase or sale of land registered under the Bihar State Board of Religious Trusts or temples is legally void. Transfer, long-term lease, or selling of trust-owned lands can only occur under exceptional circumstances with the strict written prior consent of the Religious Trust Board and judicial approvals. Any registration done without a formal Board NOC is subject to cancellation."
    },
    {
      qNo: 16,
      category: "disputes",
      categoryLabel: "Land Disputes (भूमि विवाद निवारण)",
      questionHi: "पटना में दाखिल खारिज (Mutation) ऑनलाइन रिजेक्ट होने पर अपील कहाँ और कैसे करें?",
      questionEn: "Where & how to file an appeal if online mutation is rejected in Patna?",
      answerHi: "यदि अंचल अधिकारी (CO) द्वारा आपका दाखिल खारिज आवेदन खारिज कर दिया जाता है, तो आपको इसकी प्रमाणित प्रति लेकर 30 दिनों के भीतर संबंधित अनुमंडल के भूमि सुधार उप समाहर्ता (DCLR Court) के समक्ष 'म्यूटेशन अपील वाद' (Mutation Appeal Case) दर्ज करना होगा। इसके लिए आप किसी दीवानी वकील (Civil Lawyer) के माध्यम से अपील दायर कर सकते हैं। DCLR मामले की दोबारा सुनवाई कर योग्य पाए जाने पर CO को म्यूटेशन का आदेश देते हैं।",
      answerEn: "If your online land mutation (Dakhil Kharij) application is rejected by the Circle Officer (CO), you can file an official appeal. Submit a 'Mutation Appeal Case' within 30 days of the rejection order before the Deputy Collector Land Reforms (DCLR) of your subdivision. Hire a civil property lawyer to represent your case. Upon verification, the DCLR Court has powers to reverse the CO's decision."
    },
    {
      qNo: 17,
      category: "contacts",
      categoryLabel: "Govt Contacts (कार्यालय एवं संपर्क)",
      questionHi: "पटना में जमीन का डिजिटल सरकारी नक्शा (Cadastral Map) ऑनलाइन आर्डर कैसे करें?",
      questionEn: "How to order a digital cadastral land map online for door delivery in Patna?",
      answerHi: "बिहार सरकार के भूमि अभिलेख निदेशालय ने नक्शों की होम डिलीवरी शुरू की है। पटना के किसी भी मौजा का भू-नक्शा मंगाने के लिए dlm.bihar.gov.in पोर्टल पर जाएं। वहां 'Search Map' पर क्लिक कर अपना जिला, राजस्व थाना और चादर (Sheet) नंबर चुनें। इसके बाद ₹150 प्रति शीट सरकारी शुल्क और स्पीड पोस्ट का कूरियर चार्ज ऑनलाइन भुगतान कर आप नक्शा सीधे अपने घर मंगा सकते हैं।",
      answerEn: "The Bihar Land Records Directorate offers doorstep delivery of digital maps. To order a survey map (Bhu-Naksha) of any village in Patna, visit dlm.bihar.gov.in. Under the 'Search Map' section, select Patna district, revenue thana, and sheet number. Pay the official fee of ₹150 per sheet plus speed post delivery charges online to receive the roll directly at your home."
    },
    {
      qNo: 18,
      category: "buying",
      categoryLabel: "Property Buying Tips (जमीन खरीद सलाह)",
      questionHi: "पटना में पैतृक जमीन बेचने के लिए क्या विक्रेता के नाम पर रसीद होना अनिवार्य है?",
      questionEn: "Is an updated rent receipt in the seller's name mandatory for selling ancestral land in Patna?",
      answerHi: "हाँ, बिहार सरकार के नए राजस्व सुधारों के तहत अब कोई भी व्यक्ति केवल तभी जमीन रजिस्ट्री कर सकता है जब उसके स्वयं के नाम की जमाबंदी ऑनलाइन दर्ज हो और चालू वर्ष की लगान रसीद कटी हो। यदि जमीन दादा या पिता के नाम है, तो पहले आपसी बंटवारा (Partition Deed) कराकर अपने नाम पर दाखिल खारिज (Mutation) कराएं, इसके बाद ही आप उस हिस्से को कानूनी तौर पर बेच पाएंगे।",
      answerEn: "Yes, under new land registry reforms in Bihar, a seller must have an active online Jamabandi ledger and updated rent receipt issued directly under their name to legally sell a plot. If the property is registered under a deceased grandfather/father, the heirs must register a formal partition deed, perform individual mutations, and then execute the sale."
    },
    {
      qNo: 19,
      category: "contacts",
      categoryLabel: "Govt Contacts (कार्यालय एवं संपर्क)",
      questionHi: "पटना जिला के प्रमुख अंचल कार्यालयों (Blocks/Anchals) की सूची कहाँ मिलेगी?",
      questionEn: "Where is the list of major block/anchal offices in Patna district?",
      answerHi: "पटना जिला में कुल 23 प्रशासनिक अंचल (Blocks) हैं। इनमें प्रमुख हैं: पटना सदर, फुलवारीशरीफ, संपतचक, दानापुर, मनेर, बिहटा, नौबतपुर, धनरूआ, पुनपुन, मसौढ़ी, दुल्हिन बाजार, पालीगंज, बख्तियारपुर, बाढ़, और फतुहा। इन सभी कार्यालयों का मुख्य विवरण और संपर्क सूत्र पटना जिला की आधिकारिक एनआईसी वेबसाइट (patna.nic.in) पर 'Directory' सेक्शन के तहत देखा जा सकता है।",
      answerEn: "Patna district comprises 23 administrative blocks (Circles). Major ones include Patna Sadar, Phulwari, Sampatchak, Danapur, Maner, Bihta, Naubatpur, Dhanarua, Punpun, Masaurhi, Dulhin Bazar, Paliganj, Bakhtiyarpur, Barh, and Fatuha. Detailed contact directories for each block circle officer are listed on the official Patna district portal (patna.nic.in)."
    },
    {
      qNo: 20,
      category: "rules",
      categoryLabel: "Land Rules & Approvals (सरकारी नियम)",
      questionHi: "पटना रिंग रोड परियोजना (Patna Ring Road) में अधिग्रहित जमीन का मुआवजा कैसे मिलता है?",
      questionEn: "How is compensation calculated and distributed for Patna Ring Road land acquisition?",
      answerHi: "भूमि अधिग्रहण कानून 2013 के अनुसार, पटना रिंग रोड या किसी अन्य राष्ट्रीय राजमार्ग के लिए अधिग्रहित की जाने वाली निजी भूमि का मुआवजा तय किया जाता है। शहरी क्षेत्रों में सर्किल रेट (MVR) का दोगुना (2x) और ग्रामीण क्षेत्रों में सर्किल रेट का चार गुना (4x) तक मुआवजा दिया जाता है। भू-स्वामी को जिला भू-अर्जन कार्यालय (DLAO Patna) में वंशावली, केवाला, जमाबंदी और एलपीसी दस्तावेज जमा कर क्लैम करना होता है।",
      answerEn: "Under the Land Acquisition Act 2013, compensation for properties acquired for the Patna Ring Road or NH projects is calculated based on local MVR. Urban owners receive up to double (2x) the circle rate, while rural areas receive up to four times (4x). Owners must submit genealogy maps, title deeds, Jamabandi, and LPC documents to the District Land Acquisition Officer (DLAO Patna) to release payments."
    },
    {
      qNo: 21,
      category: "buying",
      categoryLabel: "Property Buying Tips (जमीन खरीद सलाह)",
      questionHi: "पटना में रियल एस्टेट बिल्डर से RERA अप्रूव्ड प्लॉट खरीदने के क्या फायदे हैं?",
      questionEn: "What are the benefits of buying RERA approved plots from builders in Patna?",
      answerHi: "RERA (Real Estate Regulatory Authority) बिहार से अप्रूव्ड प्लॉट खरीदने पर जालसाजी का खतरा लगभग शून्य हो जाता है। इसके मुख्य लाभ हैं: 1) जमीन का मालिकाना हक पूरी तरह साफ और विवाद रहित होता है। 2) टाउनशिप के आंतरिक रास्तों, पार्क और ड्रेनेज के लिए स्वीकृत नक्शा पास रहता है। 3) सरकारी और निजी बैंक से आसानी से होम लोन स्वीकृत हो जाता है। 4) तय समय सीमा में कब्जा न मिलने पर बिल्डर पर जुर्माना लगता है।",
      answerEn: "Buying a RERA Bihar approved plot protects you from fraud. Benefits include: 1) Assured clear, undisputed legal title of the land. 2) Adherence to government-approved layout maps detailing colony internal roads, drainage, and utilities. 3) Seamless approval of home loans from major public & private banks. 4) Direct legal recourse and penalty clauses against developers if delivery is delayed."
    },
    {
      qNo: 22,
      category: "contacts",
      categoryLabel: "Govt Contacts (कार्यालय एवं संपर्क)",
      questionHi: "पटना के अंचल कार्यालयों में भ्रष्टाचार या दलाली की शिकायत कहाँ और कैसे करें?",
      questionEn: "Where & how to complain about corruption/middlemen in Patna anchal offices?",
      answerHi: "यदि पटना के किसी भी ब्लॉक या अंचल कार्यालय में म्यूटेशन, रसीद काटने या LPC के लिए रिश्वत की मांग की जाती है, तो आप निगरानी अन्वेषण ब्यूरो (Vigilance Investigation Bureau, Bihar) की हेल्पलाइन नंबर 0612-2215344 पर शिकायत दर्ज कर सकते हैं। इसके अलावा आप लोक शिकायत निवारण अधिकार कानून (PGRO Court Patna) के तहत जिला मुख्यालय में लिखित शिकायत दर्ज कर CO या कर्मचारियों पर सीधे कार्रवाई करा सकते हैं।",
      answerEn: "If any circle office or employee in Patna demands a bribe or delays work for LPC/Mutation unfairly, register a direct complaint with the Vigilance Investigation Bureau, Bihar via their dedicated helpline at 0612-2215344. Alternatively, you can file a case under the Bihar Right to Public Grievance Redressal Act (PGRO Court Patna) for rapid binding inquiries."
    },
    {
      qNo: 23,
      category: "contacts",
      categoryLabel: "Govt Contacts (कार्यालय एवं संपर्क)",
      questionHi: "पटना सदर अंचल में दाखिल खारिज केस स्टेटस (Case Status) ऑनलाइन कैसे देखें?",
      questionEn: "How to check online mutation case status for Patna Sadar Circle?",
      answerHi: "पटना सदर अंचल में अपने दाखिल खारिज आवेदन की स्थिति जानने के लिए 'बिहार भूमि' (biharbhumi.bihar.gov.in) वेबसाइट पर जाएं। वहां 'दाखिल-खारिज आवेदन स्थिति देखें' विकल्प चुनें। अपना जिला: पटना, अंचल: पटना सदर और वित्तीय वर्ष सिलेक्ट करें। इसके बाद आप केस नंबर (Case Number) या डीड नंबर द्वारा सर्च कर जान सकते हैं कि आपकी फाइल कर्मचारी, सीआई (CI) या सीओ (CO) के पास किस स्तर पर लंबित है।",
      answerEn: "To track your mutation status for Patna Sadar, log on to biharbhumi.bihar.gov.in. Click on 'View Mutation Application Status'. Choose District: Patna, Circle: Patna Sadar, and select the application financial year. Search using your Case Number or Deed number to find if your file is pending with the Revenue Karamchari, Circle Inspector (CI), or Circle Officer (CO)."
    },
    {
      qNo: 24,
      category: "buying",
      categoryLabel: "Property Buying Tips (जमीन खरीद सलाह)",
      questionHi: "पटना के किस इलाके में निवेश (Investment) करने पर सबसे ज्यादा रिटर्न मिलेगा?",
      questionEn: "Which residential areas in Patna offer the highest return on property investment?",
      answerHi: "वर्तमान में पटना में रियल एस्टेट निवेश के लिए 3 सबसे हॉट बेल्ट हैं: 1) **बिहटा और कन्हौली ग्रिड**: रिंग रोड और आईआईटी के पास भारी मांग है। 2) **पटना-बख्तियारपुर फोरलेन और संपतचक**: यहाँ कमर्शियल गोदामों और आवासीय कॉलोनियों का तेजी से विस्तार हो रहा है। 3) **दानापुर-शिवाला-नौबतपुर हाईवे**: यह कॉरिडोर सबसे तेजी से विकसित हो रही रिहायशी बेल्ट है जहां जमीनों की कीमतें हर साल 20% से 30% तक बढ़ रही हैं।",
      answerEn: "Currently, Patna's real estate boasts 3 high-yield investment belts: 1) **Bihta-Kanhauli Grid**: Near the upcoming metro/ring road interchange and IIT. 2) **Patna-Bakhtiyarpur 4-Lane & Sampatchak**: Heavy demand for commercial logistics parks and housing societies. 3) **Danapur-Shivala-Naubatpur Highway**: Fastest-growing residential corridor experiencing an annual capital appreciation of 20% to 30%."
    },
    {
      qNo: 25,
      category: "rules",
      categoryLabel: "Land Rules & Approvals (सरकारी नियम)",
      questionHi: "पटना में पारिवारिक जमीन का आपसी बंटवारा (Partition) रजिस्ट्री कराने का सरकारी खर्च क्या है?",
      questionEn: "What is the official registry fee for registering a family partition deed in Patna?",
      answerHi: "बिहार सरकार के नए नियमों के तहत भाइयों या कानूनी वारिसों के बीच पैतृक संपत्ति के आपसी बंटवारे (Partition Deed) की रजिस्ट्री को बहुत बढ़ावा दिया जा रहा है। अब पारिवारिक सहमति से बंटवारा कराने पर स्टांप ड्यूटी मात्र ₹100 और निबंधन शुल्क भी मात्र ₹100 लगता है। यानी मात्र ₹200 के नाममात्र के सरकारी शुल्क पर आप पटना के निबंधन कार्यालय में बंटवारा डीड दर्ज करवाकर अलग-अलग म्यूटेशन करवा सकते हैं।",
      answerEn: "To reduce property litigations, the Bihar government offers a heavily subsidized rate for registering ancestral family partition deeds (Hissa Batwara). The official stamp duty is capped at just ₹100, and the registration fee is also capped at ₹100. This means for a total nominal fee of just ₹200, you can register a partition deed at any Patna registry office."
    }
  ];

  // Search & category filter logic
  const filteredFaqs = patnaFaqs.filter((faq) => {
    const matchesSearch = 
      faq.questionHi.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.questionEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answerHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answerEn.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleToggleFaq = (qNo: number) => {
    setOpenFaq(openFaq === qNo ? null : qNo);
  };

  // Construct complete JSON-LD Structured Data Schema for SEO pasting or head injection
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": patnaFaqs.map((faq) => ({
      "@type": "Question",
      "name": `${faq.questionHi} (${faq.questionEn})`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${faq.answerHi} | English: ${faq.answerEn}`
      }
    }))
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(JSON.stringify(schemaMarkup, null, 2));
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2500);
  };

  return (
    <div id="patna-district-faq-section" className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden mt-12 max-w-7xl mx-auto">
      
      {/* Visual Header */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-950 to-stone-900 p-6 md:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase px-3 py-1 rounded-full border border-emerald-500/30 tracking-widest inline-block">
            SEO Authority Builder & Schema Hub
          </span>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2.5">
            <Landmark className="w-8 h-8 text-emerald-400" />
            <span>पटना भूमि निर्देशिका: 25 मास्टर सवाल-जवाब (Patna Land FAQs)</span>
          </h2>
          <p className="text-xs text-stone-300 max-w-2xl font-medium leading-relaxed">
            पटना जिला में जमीन मापन, स्थानीय लग्गी (5.5 हाथ), सरकारी रेट, निबंधन कार्यालयों, जमीन विवाद निवारण और महत्वपूर्ण संपर्कों की पूरी जानकारी। साथ ही Google पर १००% इंडेक्स होने के लिए तैयार JSON-LD स्कीमा।
          </p>
        </div>
        
        {/* Schema Copy Call-to-action */}
        <button
          onClick={handleCopySchema}
          className="bg-white text-stone-900 hover:bg-emerald-50 px-4 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-95 shrink-0 border border-emerald-500/10"
        >
          {copiedSchema ? (
            <>
              <Check className="w-4 h-4 text-green-600 animate-bounce" />
              <span>Patna Schema Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-emerald-700" />
              <span>Copy Patna FAQ JSON-LD Schema</span>
            </>
          )}
        </button>
      </div>

      {/* Control Panel: Live search and category filters */}
      <div className="bg-stone-50 border-b border-stone-200 p-4 sm:p-5 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search bar */}
        <div className="relative w-full md:max-w-xs">
          <input
            type="text"
            placeholder="पटना जमीन निर्देशिका में खोजें..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
          />
          <HelpCircle className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
        </div>

        {/* Quick Topic Filter */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <span className="text-[11px] font-black text-stone-500 uppercase tracking-wider">
            विषय फ़िल्टर करें (Filter Topic):
          </span>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all cursor-pointer ${
                selectedCategory === "all" ? "bg-emerald-700 text-white" : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => setSelectedCategory("conversion")}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all cursor-pointer ${
                selectedCategory === "conversion" ? "bg-emerald-700 text-white" : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              मापन (Measurement)
            </button>
            <button
              onClick={() => setSelectedCategory("rates")}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all cursor-pointer ${
                selectedCategory === "rates" ? "bg-emerald-700 text-white" : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              सर्किल रेट (Rates)
            </button>
            <button
              onClick={() => setSelectedCategory("buying")}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all cursor-pointer ${
                selectedCategory === "buying" ? "bg-emerald-700 text-white" : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              खरीद टिप्स (Buying)
            </button>
            <button
              onClick={() => setSelectedCategory("rules")}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all cursor-pointer ${
                selectedCategory === "rules" ? "bg-emerald-700 text-white" : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              सरकारी नियम (Rules)
            </button>
            <button
              onClick={() => setSelectedCategory("disputes")}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all cursor-pointer ${
                selectedCategory === "disputes" ? "bg-emerald-700 text-white" : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              विवाद (Disputes)
            </button>
          </div>
        </div>

      </div>

      {/* Main Accordion Flow */}
      <div className="p-5 md:p-8 space-y-4 bg-stone-50/20">
        
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3.5 max-w-4xl mx-auto">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.qNo;
              return (
                <div
                  key={faq.qNo}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-emerald-600 shadow-sm" : "border-stone-200/80 hover:border-stone-300"
                  }`}
                >
                  
                  {/* Accordion Header */}
                  <button
                    onClick={() => handleToggleFaq(faq.qNo)}
                    className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase px-2 py-0.5 rounded-md">
                          प्र. {faq.qNo}
                        </span>
                        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">
                          {faq.categoryLabel}
                        </span>
                      </div>
                      
                      {/* Bilingual Conversational Questions */}
                      <h4 className="text-sm font-black text-stone-900 leading-snug">
                        {faq.questionHi}
                      </h4>
                      <p className="text-xs text-stone-500 font-medium italic">
                        {faq.questionEn}
                      </p>
                    </div>

                    <div className="bg-stone-100 text-stone-500 group-hover:bg-emerald-50 p-1.5 rounded-lg shrink-0 mt-2">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-700" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-stone-100 bg-stone-50/50 space-y-3">
                      
                      {/* Hindi Answer Section */}
                      <div className="space-y-1">
                        <span className="text-[9px] text-emerald-800 font-black uppercase tracking-wider bg-emerald-100 px-1.5 py-0.5 rounded">
                          उत्तर (Hindi Answer)
                        </span>
                        <p className="text-xs text-stone-800 leading-relaxed font-medium">
                          {faq.answerHi}
                        </p>
                      </div>

                      {/* English Answer Section */}
                      <div className="space-y-1 pt-1 border-t border-stone-200/50">
                        <span className="text-[9px] text-stone-500 font-black uppercase tracking-wider bg-stone-200/60 px-1.5 py-0.5 rounded">
                          English Translation
                        </span>
                        <p className="text-xs text-stone-600 leading-relaxed font-medium italic">
                          {faq.answerEn}
                        </p>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-stone-200">
            <HelpCircle className="w-12 h-12 text-stone-300 mx-auto mb-2" />
            <h4 className="text-xs font-black text-stone-700">कोई सवाल नहीं मिला!</h4>
            <p className="text-[11px] text-stone-500 mt-1">
              कृपया कुछ अन्य खोज शब्द टाइप करें।
            </p>
          </div>
        )}

      </div>

      {/* Directory Quick Resources Footer */}
      <div className="bg-stone-900 text-stone-400 p-6 md:p-8 border-t border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
        
        <div className="space-y-2">
          <h5 className="font-bold text-white flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>पटना सदर अंचल कार्यालय</span>
          </h5>
          <p className="text-[11px] text-stone-400">
            पता: छज्जूबाग, कलेक्ट्रेट परिसर, पटना, बिहार - 800001<br />
            कार्यकाल: सोमवार - शनिवार (सुबह 10:00 से शाम 5:00 बजे)<br />
            प्रमुख कार्य: दाखिल-खारिज अपील, एलपीसी और परिमार्जन
          </p>
        </div>

        <div className="space-y-2">
          <h5 className="font-bold text-white flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>महत्वपूर्ण हेल्पलाइन</span>
          </h5>
          <ul className="space-y-1 text-[11px] text-stone-400">
            <li>• राजस्व एवं भूमि सुधार हेल्पलाइन: 1800-345-6215</li>
            <li>• म्यूटेशन भ्रष्टाचार शिकायत ब्यूरो: 0612-2215344</li>
            <li>• पटना जिला एनआईसी शिकायत सेल: patna.nic.in</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h5 className="font-bold text-white flex items-center gap-1.5">
            <ExternalLink className="w-4 h-4 text-emerald-400" />
            <span>संबंद्धित कड़ियों (Quick Links)</span>
          </h5>
          <ul className="space-y-1 text-[11px]">
            <li>
              <a href="https://biharbhumi.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 flex items-center gap-1">
                <span>बिहार भूमि आधिकारिक पोर्टल</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://bhumijankari.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 flex items-center gap-1">
                <span>भूमि निबंधन एवं केवाला पोर्टल</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
}
