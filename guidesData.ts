export interface GuideContent {
  titleHi: string;
  titleEn: string;
  subtitleHi: string;
  subtitleEn: string;
  stepsHi: string[];
  stepsEn: string[];
  importantNotesHi: string[];
  importantNotesEn: string[];
}

export const GUIDES_DATA: Record<string, GuideContent> = {
  dakhil_kharij: {
    titleHi: "दाखिल-खारिज (Mutation) गाइड",
    titleEn: "Dakhil Kharij (Mutation) Guide",
    subtitleHi: "जमीन रजिस्ट्री के बाद सरकारी रिकॉर्ड (रजिस्टर II) में नया नाम चढ़वाने की पूरी प्रक्रिया:",
    subtitleEn: "The complete process to update the new owner's name in official land records (Register II) after registration:",
    stepsHi: [
      "रजिस्ट्री के बाद सबसे पहले **Bihar Bhumi Portal** पर जाएं।",
      "अपने मोबाइल नंबर से नया अकाउंट बनाएं या लॉगिन करें।",
      "**'Apply New Mutation' (नया दाखिल-खारिज आवेदन)** पर क्लिक करें।",
      "सभी आवश्यक विवरण भरें (खरीददार का नाम, विक्रेता का नाम, खाता-खेसरा नंबर, रकबा, डीड/केवाला नंबर और रजिस्ट्री की तारीख)।",
      "रजिस्ट्री डीड (केवाला डीड) की **PDF फाइल** बनाकर अपलोड करें (साफ स्कैन होनी चाहिए)।",
      "आवेदन सबमिट करने के बाद **रसीद (Acknowledge Receipt)** डाउनलोड कर लें।",
      "राजस्व कर्मचारी और अंचल अधिकारी (CO) आपके दस्तावेजों की जांच करके 21 से 45 दिनों के अंदर म्यूटेशन स्वीकार करेंगे।"
    ],
    stepsEn: [
      "Go to the official **Bihar Bhumi Portal** after land registration.",
      "Register an account with your mobile number or log in.",
      "Click on **'Apply New Mutation'** on the dashboard.",
      "Fill in all the required details (Buyer & Seller info, Khata-Khesra numbers, Area, Deed/Kewala Number, and Registration Date).",
      "Upload a clean **PDF scan of your sale deed (Kewala Deed)**.",
      "After submitting, download the **Acknowledge Receipt/Case Number**.",
      "The Revenue Karamchari and Anchal Adhikari (CO) will verify and approve the mutation within 21 to 45 days."
    ],
    importantNotesHi: [
      "आवेदन के लिए कोई सरकारी शुल्क नहीं है, यह सेवा बिल्कुल निशुल्क है।",
      "म्यूटेशन की स्थिति चेक करने के लिए आप पोर्टल पर **'View Mutation Application Status'** का उपयोग कर सकते हैं।"
    ],
    importantNotesEn: [
      "There is no official government fee for filing an online mutation; it is free of cost.",
      "You can track the status of your application anytime using the **'View Mutation Application Status'** tool with your Case Number."
    ]
  },
  registry_rate: {
    titleHi: "जमीन सरकारी रेट (MVR) चेक गाइड",
    titleEn: "Government Land Rate (MVR) Check Guide",
    subtitleHi: "बिहार में किसी भी जमीन का सरकारी मूल्य (Minimum Valuation Register) जानने की विधि:",
    subtitleEn: "How to check the official circle rates (Minimum Valuation Register) of land in Bihar:",
    stepsHi: [
      "बिहार मद्यनिषेध, उत्पाद एवं निबंधन विभाग (Registration Department) के पोर्टल पर जाएं या **MVR Details** विकल्प खोजें।",
      "अपना **जिला (District)** और फिर संबंधित **रजिस्ट्री ऑफिस (Registry Office)** चुनें।",
      "संबंधित **अंचल (Circle/Block)** और फिर **मौज (Village/Mauza)** का चयन करें।",
      "मौज चुनने के बाद जमीन के प्रकार (जैसे: आवासीय, कृषि, व्यावसायिक, सड़क के किनारे) के अनुसार सरकारी प्रति डेसिमल या प्रति कट्ठा रेट की लिस्ट खुल जाएगी।"
    ],
    stepsEn: [
      "Visit the Bihar Registration Department portal or search for **MVR Details Bihar**.",
      "Select your **District** and the corresponding **Registry Office**.",
      "Select your **Circle (Block)** and then the specific **Mauza (Village)**.",
      "The portal will display the minimum valuation rates according to land classifications (e.g., Residential, Agricultural, Commercial, Roadside) per Dismil/Katha."
    ],
    importantNotesHi: [
      "जमीन की रजिस्ट्री हमेशा सरकारी रेट (MVR) या उससे अधिक के मूल्य पर ही की जा सकती है, कम पर नहीं।",
      "MVR दरें हर साल सरकार द्वारा संशोधित की जाती हैं।"
    ],
    importantNotesEn: [
      "Land registration must always be done at or above the official MVR rate, never below it.",
      "MVR rates are revised annually by the state government."
    ]
  },
  jamabandi: {
    titleHi: "जमाबंदी पंजी (Jamabandi/Register II) गाइड",
    titleEn: "Jamabandi Register II Guide",
    subtitleHi: "अपनी जमीन का खतियान और वर्तमान जमाबंदी रिकॉर्ड ऑनलाइन देखने और डाउनलोड करने की प्रक्रिया:",
    subtitleEn: "How to view and download your land possession record (Jamabandi / Register II) online:",
    stepsHi: [
      "**Bihar Bhumi Portal** के होमपेज पर जाएं।",
      "**'जमाबंदी पंजी देखें' (View Jamabandi Register)** बटन पर क्लिक करें।",
      "अपने जिला, अंचल, हल्का और मौजा का चयन करें।",
      "आप जमाबंदी को **रैयत के नाम (Owner Name)**, **खाता नंबर (Khata)**, **खेसरा नंबर (Plot)** या **जमाबंदी नंबर** से खोज सकते हैं।",
      "सर्च रिजल्ट में अपने नाम के आगे **'देखें' (Eye Icon)** पर क्लिक करें।",
      "पूरी जमाबंदी पंजी डिजिटल रूप में खुल जाएगी, जिसे आप **PDF डाउनलोड** या प्रिंट कर सकते हैं।"
    ],
    stepsEn: [
      "Visit the home page of the **Bihar Bhumi Portal**.",
      "Click on the **'जमाबंदी पंजी देखें' (View Jamabandi Register)** button.",
      "Select your District, Circle, Halka, and Mauza (Village).",
      "Search for records using **Raiyat Name (Owner)**, **Khata Number**, **Khesra Number (Plot)**, or **Jamabandi Number**.",
      "Click on the **'View' (Eye icon)** next to your land details.",
      "The full Jamabandi record (Register II) will open up, which you can save as a **PDF or print**."
    ],
    importantNotesHi: [
      "अगर आपकी जमाबंदी में कोई त्रुटी (Spelling or Area mistake) है, तो उसे सुधारने के लिए **'परिमार्जन' (Parimarjan Portal)** पर ऑनलाइन शिकायत दर्ज करें।"
    ],
    importantNotesEn: [
      "If you notice any corrections needed in your online Jamabandi, you can submit a correction request online via the **'Parimarjan Portal'**."
    ]
  },
  lpc: {
    titleHi: "भूमि स्वामित्व प्रमाणपत्र (LPC) गाइड",
    titleEn: "Land Possession Certificate (LPC) Guide",
    subtitleHi: "सरकारी लोन, पीएम किसान सम्मान निधि, या अदालती कार्यों के लिए आवश्यक LPC ऑनलाइन आवेदन करने की विधि:",
    subtitleEn: "How to apply for a Land Possession Certificate (LPC) online, required for agricultural loans, subsidies, or bank/court matters:",
    stepsHi: [
      "**Bihar Bhumi Portal** पर लॉगिन करें।",
      "**'Apply for LPC' (एलपीसी के लिए आवेदन)** विकल्प चुनें।",
      "अपने जिला, अंचल और मौजा का चयन करके अपनी जमीन की वर्तमान जमाबंदी खोजें।",
      "अपनी जमाबंदी पर क्लिक करें और **'LPC आवेदन हेतु आगे बढ़ें'** चुनें।",
      "आवेदक का पूरा विवरण दर्ज करें और एक **स्व-घोषणा पत्र (Self Declaration Form)** डाउनलोड कर उसे भरकर स्कैन कॉपी अपलोड करें।",
      "आवेदन सबमिट करें। जांच के बाद अंचल कार्यालय 10-15 दिनों में आपका LPC डिजिटल हस्ताक्षरित जारी कर देगा।"
    ],
    stepsEn: [
      "Log in to the **Bihar Bhumi Portal**.",
      "Click on **'Apply for LPC'** from the sidebar menu.",
      "Select District, Circle, and Mauza to find your active Jamabandi.",
      "Select your Jamabandi and click **'Proceed for LPC application'**.",
      "Fill in the applicant details and upload a signed **Self Declaration Form** (available on portal) as a PDF.",
      "Submit the application. CO/CI will verify and issue the digitally signed LPC within 10 to 15 days."
    ],
    importantNotesHi: [
      "LPC केवल उन्हीं जमीनों का बन सकता है जिसकी जमाबंदी ऑनलाइन अपडेटेड है और अद्यतन रसीद (latest tax) कटी हुई है।"
    ],
    importantNotesEn: [
      "An LPC can only be generated if your online Jamabandi is fully updated and you have paid the latest land tax (Rasid)."
    ]
  }
};
