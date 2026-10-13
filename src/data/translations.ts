export type Language = "en" | "mr";

export interface Translations {
  nav: {
    home: string;
    about: string;
    properties: string;
    services: string;
    locations: string;
    contact: string;
    enquire: string;
    callNow: string;
  };
  hero: {
    tagline: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    exploreBtn: string;
    talkToExpert: string;
    officeLocation: string;
  };
  categories: {
    title: string;
    subtitle: string;
    naPlots: string;
    naPlotsDesc: string;
    agriLand: string;
    agriLandDesc: string;
    bungalows: string;
    bungalowsDesc: string;
    rowHouses: string;
    rowHousesDesc: string;
    flats: string;
    flatsDesc: string;
    commercial: string;
    commercialDesc: string;
    viewListings: string;
  };
  commitments: {
    badge: string;
    title: string;
    subtitle: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
    point4Title: string;
    point4Desc: string;
  };
  locationsSection: {
    badge: string;
    title: string;
    subtitle: string;
    exploreArea: string;
  };
  consultation: {
    title: string;
    subtitle: string;
    callBtn: string;
    whatsappBtn: string;
    visitOffice: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    categories: string;
    contactInfo: string;
    hours: string;
    hoursValue: string;
    copyright: string;
    disclaimer: string;
  };
  common: {
    viewDetails: string;
    enquireNow: string;
    bookVisit: string;
    callOffice: string;
    chatWhatsApp: string;
    verifiedTitle: string;
    location: string;
    category: string;
    price: string;
    area: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      properties: "Properties",
      services: "Services",
      locations: "Locations",
      contact: "Contact",
      enquire: "Enquire Now",
      callNow: "Call +91 9923035351",
    },
    hero: {
      tagline: "Premier Real Estate Consultancy · Wai, Satara",
      title: "Find Your Place.",
      titleAccent: "Build Your Future.",
      subtitle:
        "Explore verified NA plots, agricultural land, bungalows, and commercial opportunities across Wai, Mahabaleshwar, Panchgani, and Satara with personalized local real estate guidance.",
      exploreBtn: "Explore Properties",
      talkToExpert: "Talk to an Expert",
      officeLocation: "Songirwadi, Wai · Satara District",
    },
    categories: {
      title: "Property Categories",
      subtitle: "Tailored land, residential, and commercial opportunities curated with strict title verification.",
      naPlots: "NA Plots",
      naPlotsDesc: "Sanctioned non-agricultural residential and villa plots with clear demarcation and verified title.",
      agriLand: "Agricultural Land",
      agriLandDesc: "Fertile agricultural holdings and farm land along the scenic Krishna river valley.",
      bungalows: "Bungalows & Villas",
      bungalowsDesc: "Private hillside retreats and luxury holiday homes in Panchgani, Mahabaleshwar & Wai foothills.",
      rowHouses: "Row Houses",
      rowHousesDesc: "Modern gated community living with private parking and secure suburban amenities in Wai.",
      flats: "Flats & Apartments",
      flatsDesc: "Well-connected 1, 2 & 3 BHK residences situated near central commercial hubs and educational centers.",
      commercial: "Commercial Properties",
      commercialDesc: "High-visibility retail shops, commercial buildings, and highway-facing plots along NH-48 and Wai city.",
      viewListings: "View Opportunities",
    },
    commitments: {
      badge: "Why Choose AR Vastu",
      title: "Committed to Integrity, Transparency & Local Expertise",
      subtitle: "Navigating real estate in the Western Ghats requires authentic local ground knowledge, document scrutiny, and clear communication.",
      point1Title: "Local Market Knowledge",
      point1Desc: "Rooted directly in Wai with intimate ground familiarity across Satara, Panchgani, Mahabaleshwar, and Shirwal belts.",
      point2Title: "Personalized Assistance",
      point2Desc: "Direct one-on-one consultation with Anant Kale, ensuring your family's exact vision or investment criteria is prioritized.",
      point3Title: "Clear Communication",
      point3Desc: "Transparent guidance on documentation, revenue papers (7/12 extracts, NA sanction), and title clearances.",
      point4Title: "End-to-End Deal Support",
      point4Desc: "Complete assistance from site inspection and negotiations to registration and handover.",
    },
    locationsSection: {
      badge: "Regional Coverage",
      title: "Locations We Serve",
      subtitle: "Discover prime property zones across Satara district's most sought-after scenic and industrial corridors.",
      exploreArea: "Explore Region",
    },
    consultation: {
      title: "Your Next Property Decision Starts Here.",
      subtitle: "Schedule a private site visit or speak directly with Anant Kale for trusted real estate advisory in Wai and surrounding regions.",
      callBtn: "Call +91 9923035351",
      whatsappBtn: "WhatsApp Us Now",
      visitOffice: "Visit Our Office in Wai",
    },
    footer: {
      about: "AR Vastu – Developers & Real Estate is a premier property consultancy based in Wai, Maharashtra. Specializing in verified NA plots, agricultural land, bungalows, and commercial properties.",
      quickLinks: "Quick Navigation",
      categories: "Property Types",
      contactInfo: "Office Contact",
      hours: "Office Hours",
      hoursValue: "9:00 AM – 5:00 PM IST",
      copyright: "AR Vastu – Developers & Real Estate. All rights reserved.",
      disclaimer: "Information provided is for property guidance and direct advisory. Please verify revenue documents and local permissions prior to transactions.",
    },
    common: {
      viewDetails: "View Details",
      enquireNow: "Enquire Now",
      bookVisit: "Schedule Site Visit",
      callOffice: "Call Office",
      chatWhatsApp: "WhatsApp",
      verifiedTitle: "Direct Advisory",
      location: "Location",
      category: "Category",
      price: "Price",
      area: "Area",
    },
  },
  mr: {
    nav: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      properties: "प्रॉपर्टीज",
      services: "सेवा",
      locations: "परिसर",
      contact: "संपर्क",
      enquire: "चौकशी करा",
      callNow: "कॉल करा +91 9923035351",
    },
    hero: {
      tagline: "विश्वासू रिअल इस्टेट सल्लागार · वाई, सातारा",
      title: "तुमची हक्काची जागा निवडा.",
      titleAccent: "उज्वल भविष्य घडवा.",
      subtitle:
        "वाई, महाबळेश्वर, पाचगणी आणि सातारा परिसरातील एन.ए. प्लॉट्स, शेतजमीन, बंगले आणि व्यावसायिक जागांसाठी प्रामाणिक व स्थानिक मार्गदर्शन.",
      exploreBtn: "प्रॉपर्टीज पहा",
      talkToExpert: "तज्ज्ञांशी चर्चा करा",
      officeLocation: "सोनगिरवाडी, वाई · सातारा जिल्हा",
    },
    categories: {
      title: "प्रॉपर्टीचे प्रकार",
      subtitle: "कायदेशीर पडताळणीसह जमीन, निवासी व व्यावसायिक गुंतवणुकीच्या उत्तम संधी.",
      naPlots: "एन.ए. प्लॉट्स (NA Plots)",
      naPlotsDesc: "मंजूर निवासी व व्हिला प्लॉट्स, स्पष्ट सीमांकन आणि खात्रीशीर कागदपत्रांसह.",
      agriLand: "शेतजमीन (Agricultural Land)",
      agriLandDesc: "कृष्णा नदी खोऱ्यातील सुपीक, निसर्गरम्य शेती आणि फार्महाऊससाठी योग्य जमिनी.",
      bungalows: "स्वतंत्र बंगले आणि व्हिला",
      bungalowsDesc: "पाचगणी आणि महाबळेश्वरच्या कुशीत शांत व निसर्गरम्य सुट्टीतील निवासस्थाने.",
      rowHouses: "रो-हाउसेस (Row Houses)",
      rowHousesDesc: "वाईमधील आधुनिक गेटेड सोसायट्या, स्वतःचे पार्किंग व सुरक्षित वातावरण.",
      flats: "फ्लॅट्स आणि अपार्टमेंट्स",
      flatsDesc: "शहरातील मुख्य ठिकाणांजवळ १, २ व ३ बीएचके प्रशस्त घरे.",
      commercial: "व्यावसायिक जागा (Commercial)",
      commercialDesc: "महामार्गालगतच्या मोक्याच्या जागा, दुकाने आणि व्यावसायिक इमारती.",
      viewListings: "संधी पहा",
    },
    commitments: {
      badge: "एआर वास्तू का निवडावे?",
      title: "पारदर्शकता, स्थानिक अनुभव आणि विश्वासार्हता",
      subtitle: "पश्चिम महाराष्ट्रातील रिअल इस्टेटमध्ये योग्य निर्णय घेण्यासाठी जमिनीचा अचूक इतिहास आणि स्थानिक समज अत्यंत आवश्यक असते.",
      point1Title: "स्थानिक बाजारपेठेचा सखोल अभ्यास",
      point1Desc: "वाई, पाचगणी, महाबळेश्वर, सातारा आणि शिरवळ भागातील जमिनींचा दांडगा अनुभव.",
      point2Title: "वैयक्तिक मार्गदर्शन",
      point2Desc: "अनंत काळे यांच्यासोबत थेट चर्चा करून तुमच्या गरजांनुसार योग्य जागेची निवड.",
      point3Title: "पारदर्शक व स्वच्छ व्यवहार",
      point3Desc: "७/१२ उतारे, फेरफार नोंदी, एन.ए. ऑर्डर्स व कायदेशीर कागदपत्रांची संपूर्ण माहिती.",
      point4Title: "सुरुवातीपासून शेवटपर्यंत सोबत",
      point4Desc: "जागेची पाहणी, वाटाघाटी, खरेदीखत नोंदणी ते ताबा मिळेपर्यंत पूर्ण सहकार्य.",
    },
    locationsSection: {
      badge: "कार्यक्षेत्र",
      title: "आम्ही सेवा देत असलेले परिसर",
      subtitle: "सातारा जिल्ह्यातील निसर्गरम्य आणि वेगाने विकसित होणाऱ्या महत्त्वाच्या भागांची माहिती.",
      exploreArea: "माहिती पहा",
    },
    consultation: {
      title: "तुमचा पुढील प्रॉपर्टीचा निर्णय आजच घ्या.",
      subtitle: "जागेची प्रत्यक्ष पाहणी (Site Visit) ठरवण्यासाठी किंवा अधिक माहितीसाठी थेट अनंत काळे यांच्याशी संपर्क साधा.",
      callBtn: "कॉल करा: +91 9923035351",
      whatsappBtn: "व्हॉट्सॲपवर मेसेज करा",
      visitOffice: "वाई येथील कार्यालयास भेट द्या",
    },
    footer: {
      about: "एआर वास्तू – डेव्हलपर्स अँड रिअल इस्टेट, वाई (महाराष्ट्र). एन.ए. प्लॉट्स, शेतजमीन, बंगले व व्यावसायिक जागांसाठी स्थानिक पातळीवरील विश्वासू सल्लागार.",
      quickLinks: "महत्वाच्या लिंक्स",
      categories: "प्रॉपर्टी प्रकार",
      contactInfo: "कार्यालयीन संपर्क",
      hours: "कार्यालयीन वेळ",
      hoursValue: "सकाळी ९:०० ते संध्याकाळी ५:००",
      copyright: "एआर वास्तू – डेव्हलपर्स अँड रिअल इस्टेट. सर्व हक्क राखीव.",
      disclaimer: "प्रस्तुत माहिती केवळ सल्ला व मार्गदर्शनासाठी आहे. व्यवहारापूर्वी सर्व मूळ महसूल कागदपत्रे तपासून घ्यावीत.",
    },
    common: {
      viewDetails: "तपशील पहा",
      enquireNow: "चौकशी करा",
      bookVisit: "साइट व्हिजिट बुक करा",
      callOffice: "कॉल करा",
      chatWhatsApp: "व्हॉट्सॲप",
      verifiedTitle: "थेट सल्लागार",
      location: "ठिकाण",
      category: "प्रकार",
      price: "किंमत",
      area: "क्षेत्रफळ",
    },
  },
};
