export interface LocationInfo {
  slug: string;
  name: string;
  nameMr: string;
  district: string;
  heroImage: string;
  tagline: string;
  taglineMr: string;
  description: string;
  descriptionMr: string;
  highlights: string[];
  highlightsMr: string[];
  popularCategories: string[];
  connectivity: string;
  connectivityMr: string;
}

export const locationsData: LocationInfo[] = [
  {
    slug: "wai",
    name: "Wai",
    nameMr: "वाई",
    district: "Satara District",
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Historical Temple City along the Krishna River Basin",
    taglineMr: "कृष्णा नदीच्या तीरावरील ऐतिहासिक आणि निसर्गरम्य शहर",
    description:
      "Wai is a picturesque heritage city situated at the base of the Panchgani and Mahabaleshwar hills. Renowned for its ancient temples, cinematic riverside ghats, and pleasant year-round climate, Wai has become one of Western Maharashtra's most desirable residential and land investment destinations.",
    descriptionMr:
      "वाई हे पाचगणी व महाबळेश्वरच्या पायथ्याशी वसलेले निसर्गरम्य आणि ऐतिहासिक शहर आहे. कृष्णा नदीचे घाट, महागणपती मंदिर, आणि चित्रपटांचे चित्रीकरण यामुळे प्रसिद्ध असलेले वाई आता उत्तम रहिवासी व जमीन गुंतवणुकीचे केंद्र बनले आहे.",
    highlights: [
      "Scenic Krishna River waterfront and clean valley microclimate",
      "Immediate gateway to Panchgani (15 mins) and Mahabaleshwar (45 mins)",
      "High demand for clear-title NA bungalow plots & retirement homes",
      "Well-developed civic amenities, hospitals, and educational institutions",
    ],
    highlightsMr: [
      "कृष्णा नदीच्या तीरावरील शुद्ध हवा आणि निसर्गरम्य परिसर",
      "पाचगणीपासून अवघ्या १५ मिनिटांच्या अंतरावर मोक्याचे स्थान",
      "स्पष्ट ७/१२ असलेले एन.ए. बंगलो प्लॉट्स आणि फार्महाऊससाठी मोठी मागणी",
      "शाळा, महाविद्यालये, रुग्णालये आणि दैनंदिन सुविधांची सुसज्जता",
    ],
    popularCategories: ["NA Plots", "Bungalows", "Agricultural Land", "Row Houses"],
    connectivity: "32 km from Satara city, 85 km from Pune via NH-48 (Pune-Bangalore Highway).",
    connectivityMr: "साताऱ्यापासून ३२ किमी, तर पुणे-बंगळुरू महामार्गाने (NH-48) पुण्यापासून ८५ किमी अंतरावर.",
  },
  {
    slug: "mahabaleshwar",
    name: "Mahabaleshwar",
    nameMr: "महाबळेश्वर",
    district: "Satara District",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    tagline: "Queen of Hill Stations — Exclusive High-Altitude Real Estate",
    taglineMr: "महाराष्ट्राचे नंदनवन — भव्य व्हिला आणि विश्रामगृहांचे ठिकाण",
    description:
      "Perched high in the Western Ghats at an elevation of 1,353 meters, Mahabaleshwar is Maharashtra's premier hill destination. Properties here represent rare, high-prestige assets with dense forest vistas, strawberry farms, and cool mountain air.",
    descriptionMr:
      "सह्याद्रीच्या डोंगररांगांमध्ये १३५३ मीटर उंचीवर वसलेले महाबळेश्वर हे महाराष्ट्रातील सर्वोच्च पर्यटनस्थळ आहे. येथील मालमत्ता ही अत्यंत प्रतिष्ठित मानली जाते. घनदाट जंगले आणि स्ट्रॉबेरी बागांचा निसर्ग अनुभवता येतो.",
    highlights: [
      "Prestigious vacation home and luxury hospitality corridor",
      "Year-round misty mountain climate and perennial greenery",
      "Stringent eco-sensitive zoning requiring meticulous legal due diligence",
    ],
    highlightsMr: [
      "उच्चभ्रू हॉलिडे होम्स आणि रिसॉर्ट्ससाठी प्रसिद्ध परिसर",
      "वर्षभर आल्हाददायक व थंड हवामान",
      "पर्यावरण संवेदनशील क्षेत्र असल्याने कागदपत्रांची अचूक तपासणी आवश्यक",
    ],
    popularCategories: ["Bungalows", "Agricultural Land", "Commercial Properties"],
    connectivity: "30 km from Wai, 120 km from Pune, direct scenic ghat road access.",
    connectivityMr: "वाईपासून ३० किमी, पुण्यापासून १२० किमी, निसर्गरम्य घाट रस्त्याने जोडलेले.",
  },
  {
    slug: "panchgani",
    name: "Panchgani",
    nameMr: "पाचगणी",
    district: "Satara District",
    heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    tagline: "Serene Tableland, Boarding Schools & Valley-Facing Estates",
    taglineMr: "टेबललँड, निवासी शाळा आणि डोंगरखोऱ्यांच्या विलोभनीय परिसरातील जागा",
    description:
      "Surrounded by five rolling Sahyadri hills, Panchgani is world-famous for its Table Land plateau, prestigious international residential schools, and crisp unpolluted air. It is a favored haven for luxury villas and private holiday properties.",
    descriptionMr:
      "पाच टेकड्यांनी वेढलेले पाचगणी हे भव्य टेबललँड, नामांकित निवासी शाळा आणि शुद्ध हवेसाठी जगभर प्रसिद्ध आहे. शांतता आणि निसर्गाच्या सान्निध्यात राहू इच्छिणाऱ्यांसाठी हे उत्तम ठिकाण आहे.",
    highlights: [
      "Breathtaking views of Dhom Dam backwaters and Krishna Valley",
      "High rental and homestay yields for well-maintained villas",
      "Just 15-20 minutes scenic drive from Wai",
    ],
    highlightsMr: [
      "धोम धरणाचा विस्तीर्ण जलाशय आणि खोऱ्यांचे नयनरम्य दृश्य",
      "व्हिला आणि होमस्टेसाठी उत्तम पर्यटनाचा ओघ",
      "वाई शहरापासून अवघ्या १५ ते २० मिनिटांचे अंतर",
    ],
    popularCategories: ["Bungalows", "NA Plots", "Lease Properties"],
    connectivity: "18 km from Wai, 100 km from Pune via Surur-Wai-Panchgani route.",
    connectivityMr: "वाईपासून १८ किमी, सुरूर-वाई मार्गाने पुण्यापासून १०० किमी अंतरावर.",
  },
  {
    slug: "satara",
    name: "Satara",
    nameMr: "सातारा",
    district: "Satara District",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    tagline: "Historic District Capital & Rapidly Growing Commercial Epicenter",
    taglineMr: "ऐतिहासिक जिल्हा मुख्यालय आणि वेगाने विस्तारणारे व्यापारी केंद्र",
    description:
      "As the administrative seat of the district and former Maratha capital, Satara blends rich historical pride with modern urban infrastructure. Situated adjacent to the Kaas Flower Plateau (UNESCO World Heritage Site), Satara offers diverse residential plots, flats, and commercial opportunities.",
    descriptionMr:
      "छत्रपती शिवरायांच्या वारशाने पावन झालेले सातारा शहर हे जिल्ह्याचे प्रशासकीय व व्यापारी केंद्र आहे. कास पठाराच्या सान्निध्यात असलेले हे शहर आता उत्तम निवासी टाउनशिप्स व व्यापारी इमारतींसह वेगाने विस्तारत आहे.",
    highlights: [
      "Major administrative, healthcare, and educational hub",
      "Immediate proximity to NH-48 Pune-Bengaluru Industrial Highway",
      "Diverse options from budget apartments to prime commercial spaces",
    ],
    highlightsMr: [
      "जिल्ह्यातील मुख्य प्रशासकीय, शैक्षणिक व वैद्यकीय केंद्र",
      "पुणे-बंगळुरू राष्ट्रीय महामार्ग लगत मोक्याचे स्थान",
      "निवासी सोसायट्या, रो-हाउसेस आणि व्यावसायिक दुकानांसाठी उत्तम पर्याय",
    ],
    popularCategories: ["Flats", "Commercial Properties", "NA Plots", "Row Houses"],
    connectivity: "Directly located on NH-48; 110 km from Pune, 260 km from Mumbai.",
    connectivityMr: "राष्ट्रीय महामार्ग ४८ वर थेट जोडलेले; पुण्यापासून ११० किमी, मुंबईपासून २६० किमी.",
  },
  {
    slug: "shirwal",
    name: "Shirwal",
    nameMr: "शिरवळ",
    district: "Satara District",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Booming Industrial & Logistics Corridor of Satara",
    taglineMr: "औद्योगिक आणि लॉजिस्टिक्स क्षेत्रातील वेगाने वाढणारी बाजारपेठ",
    description:
      "Strategically situated midway between Pune and Satara along NH-48, Shirwal is a powerhouse of MIDC manufacturing, engineering, and logistics. It is an investment hotspot for commercial spaces, worker housing, and high-appreciation land parcels.",
    descriptionMr:
      "पुणे आणि साताऱ्याच्या अगदी मध्यावर महामार्गावर असलेले शिरवळ हे एमआयडीसी, उद्योग व लॉजिस्टिक्सचे मोठे केंद्र आहे. व्यावसायिक जागा, कामगारांसाठी निवासी गृहप्रकल्प व जमिनीच्या गुंतवणुकीसाठी हे अत्यंत फायदेशीर ठिकाण आहे.",
    highlights: [
      "Robust MIDC industrial hub hosting major multinationals and factories",
      "Very high rental demand for flats and residential hostels",
      "Exceptional highway connectivity just 50 km from Pune city outskirts",
    ],
    highlightsMr: [
      "अनेक नामांकित कंपन्यांसह विस्तारलेले एमआयडीसी क्षेत्र",
      "भाडेतत्त्वावरील फ्लॅट्स आणि कामगार वसाहतींसाठी प्रचंड मागणी",
      "पुण्यापासून अवघ्या ५० किमी अंतरावर महामार्गावरील जलद संपर्क",
    ],
    popularCategories: ["Commercial Properties", "Flats", "Agricultural Land", "NA Plots"],
    connectivity: "Direct NH-48 highway frontage; 50 km from Pune, 60 km from Satara.",
    connectivityMr: "महामार्गालगत थेट स्थान; पुण्यापासून ५० किमी, साताऱ्यापासून ६० किमी.",
  },
  {
    slug: "khandala",
    name: "Khandala",
    nameMr: "खंडाळा",
    district: "Satara District",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    tagline: "Agricultural Expansion & Strategically Positioned Land Belts",
    taglineMr: "शेती, फार्महाउस आणि वेगाने विस्तारणारे गुंतवणूक क्षेत्र",
    description:
      "Khandala (Bavdhan-Khandala belt in Satara district) is recognized for its fertile agricultural tracts, expanding small-scale manufacturing zones, and accessible open land holdings ideal for large farmhouses and forward-looking investments.",
    descriptionMr:
      "सातारा जिल्ह्यातील खंडाळा-बावधन पट्टा हा सुपीक शेतजमीन, कृषी पर्यटन, फार्महाऊस व लघुउद्योगांसाठी ओळखला जातो. भविष्यातील दूरगामी गुंतवणुकीसाठी येथे मोठ्या आकाराच्या जमिनी उपलब्ध आहेत.",
    highlights: [
      "Abundant availability of clear-title agricultural acreage",
      "Fast developing connectivity connecting Wai and Pune-Satara highway",
      "Attractive entry valuations for long-term capital growth",
    ],
    highlightsMr: [
      "स्पष्ट ७/१२ असलेल्या मोठ्या आकाराच्या शेतजमिनी सहज उपलब्ध",
      "वाई आणि मुख्य महामार्गाला जोडणारा उत्तम रस्ते संपर्क",
      "दीर्घकालीन चांगल्या परताव्यासाठी किफायतशीर किमती",
    ],
    popularCategories: ["Agricultural Land", "NA Plots", "Commercial Properties"],
    connectivity: "15 km from Wai, 60 km from Pune, smooth state highway link.",
    connectivityMr: "वाईपासून १५ किमी, पुण्यापासून ६० किमी, चांगला डांबरी रस्ता संपर्क.",
  },
];
