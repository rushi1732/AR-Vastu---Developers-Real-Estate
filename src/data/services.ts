export interface ServiceInfo {
  id: string;
  title: string;
  titleMr: string;
  iconName: string;
  shortDesc: string;
  shortDescMr: string;
  fullDesc: string;
  fullDescMr: string;
  features: string[];
  featuresMr: string[];
  ctaLabel: string;
}

export const servicesData: ServiceInfo[] = [
  {
    id: "buying",
    title: "Property Buying Assistance",
    titleMr: "प्रॉपर्टी खरेदी मार्गदर्शन",
    iconName: "Search",
    shortDesc: "End-to-end guidance to find, inspect, and legally acquire verified properties in Wai, Panchgani, and Satara.",
    shortDescMr: "तुमच्या पसंतीनुसार खात्रीशीर जागा शोधणे, प्रत्यक्ष पाहणी करणे आणि कायदेशीर तपासणीसह खरेदीसाठी संपूर्ण मदत.",
    fullDesc:
      "Buying land or residential real estate in the Western Ghats requires careful due diligence. AR Vastu guides prospective buyers from initial requirement matching and ground visits to revenue paper verification (7/12, ferfar, zone verification) and final sale deed execution.",
    fullDescMr:
      "सह्याद्रीच्या परिसरात जागा खरेदी करताना स्थानिक नियमांची काटेकोर तपासणी लागते. एआर वास्तू खरेदीदारांना योग्य जागेची निवड, प्रत्यक्ष पाहणी, ७/१२ व फेरफार नोंदींची पडताळणी ते खरेदीखत नोंदणीपर्यंत संपूर्ण पारदर्शक मार्गदर्शन करते.",
    features: [
      "Targeted search tailored to budget and purpose (residential, villa, agriculture)",
      "Strict legal verification of ownership chain and revenue papers",
      "Fair price discovery through local market price comparison",
      "Assistance with site demarcation, registration, and mutation entries",
    ],
    featuresMr: [
      "तुमच्या बजेट आणि गरजेनुसार योग्य जागेची अचूक निवड",
      "मालकी हक्क, महसूल नोंदी आणि फेरफार यांची कायदेशीर तपासणी",
      "स्थानिक बाजारभावाचा प्रत्यक्ष अभ्यास करून योग्य दरात व्यवहार",
      "जागेचे सीमांकन, दस्तऐवज नोंदणी व फेरफार नोंदीसाठी सहकार्य",
    ],
    ctaLabel: "Enquire for Buying",
  },
  {
    id: "selling",
    title: "Property Selling Assistance",
    titleMr: "प्रॉपर्टी विक्री सहाय्य",
    iconName: "TrendingUp",
    shortDesc: "Targeted marketing to qualified buyers with confidential, ethical, and transparent representation.",
    shortDescMr: "तुमच्या जागेला योग्य ग्राहक मिळवून देणे आणि सन्माननीय व पारदर्शक मार्गाने व्यवहार पूर्ण करणे.",
    fullDesc:
      "Selling your NA plot, bungalow, or farmland requires reaching the right serious buyers while ensuring the true market worth is realized. AR Vastu provides honest valuation advice, prepares property presentations, and manages buyer inquiries responsibly.",
    fullDescMr:
      "तुमचा प्लॉट, शेतजमीन किंवा घर विकताना योग्य आणि प्रामाणिक ग्राहक शोधणे महत्त्वाचे असते. एआर वास्तू वाजवी बाजारभाव ठरवून, जागेचे योग्य सादरीकरण करून व्यवहार सुरळीत पार पाडण्यास मदत करते.",
    features: [
      "Realistic market valuation based on recent neighborhood transactions",
      "Screening genuine buyers to respect your privacy and time",
      "Structuring smooth transaction timelines and clear payment milestones",
      "Comprehensive guidance on documentation handover and registration",
    ],
    featuresMr: [
      "परिसरातील चालू बाजारभावानुसार जागेचे वाजवी मूल्यांकन",
      "केवळ खात्रीशीर व गंभीर ग्राहकांशीच थेट संपर्क",
      "व्यवहारातील पैशांचे टप्पे व कायदेशीर अटींचे नियोजन",
      "कागदपत्रांची हस्तांतरण प्रक्रिया सुलभरीत्या पूर्ण करणे",
    ],
    ctaLabel: "Sell Your Property",
  },
  {
    id: "na-plots",
    title: "NA Plots (Non-Agricultural)",
    titleMr: "एन.ए. प्लॉट्स (NA Plots)",
    iconName: "Compass",
    shortDesc: "Town-planning sanctioned residential plots with clear demarcation, road access, and verified titles.",
    shortDescMr: "नगररचना मंजूर (Collector/Town Planning Approved) निवासी प्लॉट्स, रस्ते व वीज-पाण्याच्या सोयीसह.",
    fullDesc:
      "Non-Agricultural (NA) plots are the gold standard for individuals looking to construct custom homes, holiday bungalows, or secure long-term appreciating land. We deal exclusively in demarcated plots with valid NA collector sanctions.",
    fullDescMr:
      "स्वतःचे घर किंवा सुट्टीतील बंगला बांधण्यासाठी एन.ए. प्लॉट्स हा सर्वात सुरक्षित पर्याय आहे. आम्ही केवळ अधिकृत मंजुरी, मोकळा रस्ता आणि स्पष्ट हक्क असलेलेच प्लॉट्स उपलब्ध करून देतो.",
    features: [
      "Collector or Town Planning approved layout sanctions",
      "Clear internal road access, electricity pole proximity, and water provisions",
      "Individual 7/12 extract separation (Swatantra 7/12)",
      "Ready for immediate plan approval and construction",
    ],
    featuresMr: [
      "कलेक्टर किंवा टाउन प्लॅनिंग मंजूर लेआउट्स",
      "अंतर्गत रस्ते, वीज आणि पाण्याची सोय",
      "स्वतंत्र ७/१२ उतारा आणि बिनबोभाट ताबा",
      "तत्काळ बांधकाम परवानगीसाठी योग्य जागा",
    ],
    ctaLabel: "Explore NA Plots",
  },
  {
    id: "agri-land",
    title: "Agricultural Land & Farmhouses",
    titleMr: "शेतजमीन व फार्महाऊस कन्सल्टन्सी",
    iconName: "Trees",
    shortDesc: "Fertile agricultural holdings, river-touch farms, and scenic valley parcels across Satara district.",
    shortDescMr: "कृष्णा खोऱ्यातील सुपीक शेती, नदीकाठच्या जमिनी आणि फार्महाऊससाठी योग्य निसर्गरम्य जागा.",
    fullDesc:
      "From organic farming and agro-tourism to peaceful retirement estates, agricultural land in Wai and surrounding valleys is highly prized. We assist qualified agriculturists with title verification, access roads, and boundary checks.",
    fullDescMr:
      "सेंद्रिय शेती, ॲग्रो-टुरिझम किंवा शांत जीवनशैलीसाठी वाई आणि सातारा परिसरातील शेतजमिनींना मोठी पसंती आहे. शेतकरी दाखला असलेल्या ग्राहकांना कायदेशीर बाबींची खात्री करून योग्य शेती शोधून देतो.",
    features: [
      "Riverfront, canal-irrigated, and borewell-supported fertile tracts",
      "Scrutiny of farmer status eligibility and revenue transfer laws",
      "Ground verification of access right-of-way (Vahiwat road rights)",
      "Advisory on tree plantation, fencing, and farmhouse permissible norms",
    ],
    featuresMr: [
      "नदीकाठच्या, कालवा बागायत आणि पाणी उपलब्ध असलेल्या जमिनी",
      "शेतकरी दाखला व महसूल नियमांचे अचूक मार्गदर्शन",
      "वहिवाट रस्ता व सीमांची प्रत्यक्ष खात्री",
      "तारेचे कुंपण, वृक्षारोपण व फार्महाऊस नियमांची माहिती",
    ],
    ctaLabel: "Enquire for Agricultural Land",
  },
  {
    id: "residential",
    title: "Bungalows, Row Houses & Flats",
    titleMr: "बंगले, रो-हाउसेस आणि फ्लॅट्स",
    iconName: "Home",
    shortDesc: "Ready-to-move and under-construction residences tailored for modern families and second-home buyers.",
    shortDescMr: "तयार व नवीन बांधकामाधीन घरे, स्वतंत्र बंगले आणि प्रशस्त फ्लॅट्सची माहिती.",
    fullDesc:
      "Whether you are seeking a standalone scenic bungalow overlooking Dhom backwaters or a convenient family flat near Wai's commercial schools and clinics, we present verified residential properties that match your lifestyle expectations.",
    fullDescMr:
      "धोम धरणाच्या नयनरम्य परिसरातील स्वतंत्र व्हिला असो किंवा वाई शहरातील शाळा-रुग्णालयांजवळील प्रशस्त फ्लॅट, तुमच्या गरजेनुसार उत्तम घरे उपलब्ध करून दिली जातात.",
    features: [
      "Independent luxury bungalows in Wai, Panchgani, and Mahabaleshwar",
      "Gated row houses with private parking and community security",
      "Central Wai 1, 2, and 3 BHK apartments with easy transit access",
      "Structural inspection, layout verification, and occupancy readiness",
    ],
    featuresMr: [
      "वाई, पाचगणी व महाबळेश्वरमधील निसर्गरम्य स्वतंत्र बंगले",
      "सुरक्षित गेटेड सोसायट्यांमधील रो-हाउसेस",
      "मध्यवर्ती वाईमधील १, २ आणि ३ बीएचके फ्लॅट्स",
      "बांधकाम गुणवत्ता आणि कायदेशीर पूर्णत्वाचा दाखला तपासणी",
    ],
    ctaLabel: "View Residential Homes",
  },
  {
    id: "commercial",
    title: "Commercial Properties & Leases",
    titleMr: "व्यावसायिक जागा आणि भाडेतत्त्व (Lease)",
    iconName: "Building2",
    shortDesc: "Prime highway frontage plots, retail storefronts, and long-term commercial lease arrangements.",
    shortDescMr: "महामार्गालगतच्या व्यावसायिक जागा, दुकाने आणि दीर्घकालीन भाडेतत्त्वावरील (Lease) व्यवहार.",
    fullDesc:
      "Capitalize on the heavy vehicular transit along the Pune-Satara highway (NH-48) and the thriving tourist flow into Wai, Panchgani, and Mahabaleshwar. We assist investors and business operators in securing strategic commercial real estate.",
    fullDescMr:
      "पुणे-बंगळुरू महामार्ग आणि महाबळेश्वर-पाचगणीकडे जाणाऱ्या पर्यटकांच्या गर्दीचा फायदा घेण्यासाठी व्यावसायिक दुकाने, हॉटेल्स किंवा वेअरहाउससाठी मोक्याच्या जागा मिळवून देतो.",
    features: [
      "High-footfall market shops in central Wai and Satara",
      "NH-48 highway-touch commercial land parcels suitable for logistics & petrol pumps",
      "Hospitality and resort lease properties in hill zones",
      "Formal commercial lease agreements and compliance facilitation",
    ],
    featuresMr: [
      "वाई व सातारा बाजारपेठेतील मोक्याची दुकाने",
      "महामार्गालगत व्यावसायिक कामांसाठी योग्य जमिनीचे तुकडे",
      "पर्यटन भागातील रिसॉर्ट्स व हॉटेल्सचे भाडे करार",
      "कायदेशीर व सुरक्षित लीज करारांची तयारी",
    ],
    ctaLabel: "Enquire for Commercial Spaces",
  },
];
