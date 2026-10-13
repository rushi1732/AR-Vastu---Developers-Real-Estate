export interface Property {
  id: string;
  slug: string;
  title: string;
  titleMr: string;
  category: "NA Plots" | "Agricultural Land" | "Bungalows" | "Row Houses" | "Flats" | "Commercial Properties" | "Lease Properties";
  categoryMr: string;
  location: "Wai" | "Mahabaleshwar" | "Panchgani" | "Satara" | "Shirwal" | "Khandala";
  locationMr: string;
  transactionType: "Buy" | "Sell" | "Lease";
  priceText?: string;
  priceNumeric?: number; // for filtering
  areaText?: string;
  featured?: boolean;
  heroImage: string;
  gallery: string[];
  description: string;
  descriptionMr: string;
  features: string[];
  featuresMr: string[];
  addressSummary: string;
  verificationStatus: "Verified Title" | "Consultation Available";
}

export const initialProperties: Property[] = [
  {
    id: "prop-1",
    slug: "na-residential-plot-songirwadi-wai",
    title: "Sanctioned NA Residential Plot near Songirwadi",
    titleMr: "सोनगिरवाडी जवळ मंजूर एन.ए. निवासी प्लॉट",
    category: "NA Plots",
    categoryMr: "एन.ए. प्लॉट्स",
    location: "Wai",
    locationMr: "वाई",
    transactionType: "Buy",
    priceText: "Price on Direct Consultation",
    priceNumeric: 2500000,
    areaText: "2,200 sq.ft. (2 Guntha)",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "A clearly demarcated Non-Agricultural (NA) residential plot situated in a quiet, accessible sector near Songirwadi, Wai. Features immediate tar road connectivity, dedicated electricity supply poles nearby, and clean revenue papers with clear individual 7/12 extract status.",
    descriptionMr:
      "सोनगिरवाडी, वाई परिसरातील शांत व हवेशीर भागात स्थित मंजूर एन.ए. निवासी प्लॉट. डांबरी रस्ता, जवळच विजेची सोय आणि स्वतंत्र ७/१२ असलेला स्वच्छ व्यवहाराचा प्लॉट.",
    features: [
      "Collector Sanctioned NA Order",
      "Direct 20-ft Access Road",
      "Scenic backdrop of Wai foothills",
      "Ideal for immediate private bungalow construction",
      "Clear revenue title verified with local revenue office",
    ],
    featuresMr: [
      "अधिकृत कलेक्टर एन.ए. मंजुरी",
      "२० फूट रुंद रस्ता",
      "वाईच्या डोंगररांगांचे निसर्गरम्य दृश्य",
      "स्वतःचे घर किंवा बंगला बांधण्यासाठी तत्काळ तयार",
      "स्थानिक महसूल दप्तरी स्वच्छ मालकी हक्क",
    ],
    addressSummary: "Near Songirwadi, Wai, Satara District, Maharashtra",
    verificationStatus: "Verified Title",
  },
  {
    id: "prop-2",
    slug: "fertile-agricultural-land-krishna-river-belt",
    title: "Fertile Agricultural Land in Krishna River Basin",
    titleMr: "कृष्णा नदी खोऱ्यातील सुपीक बागायती शेतजमीन",
    category: "Agricultural Land",
    categoryMr: "शेतजमीन",
    location: "Wai",
    locationMr: "वाई",
    transactionType: "Buy",
    priceText: "Contact for Quote",
    priceNumeric: 6500000,
    areaText: "1.5 Acres (60 Guntha)",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Prime fertile agricultural holding with deep black-cotton soil situated along the scenic Krishna river valley outskirts in Wai. Benefiting from round-the-year water availability and established cart-way access, this parcel is ideal for agro-farming, turmeric, strawberry cultivation, or a riverside farmhouse retreat.",
    descriptionMr:
      "वाई परिसरातील कृष्णा नदीच्या सुपीक खोऱ्यात असलेली उत्तम शेती. मुबलक पाणीपुरवठा, समृद्ध काळी माती आणि थेट वहिवाट रस्ता. हळद, स्ट्रॉबेरी किंवा निसर्गरम्य फार्महाऊससाठी अतिशय योग्य.",
    features: [
      "Abundant water resources and river-belt groundwater",
      "Single family title ownership with no encumbrance",
      "Proper boundary pillars demarcated on ground",
      "Electricity connection available at site",
    ],
    featuresMr: [
      "मुबलक पाणी व बागायतीसाठी अनुकूल जमीन",
      "स्वच्छ व बिनबोभाट कौटुंबिक मालकी हक्क",
      "जागेवर अचूक खुणा व सीमांकन",
      "कृषी वीज कनेक्शनची सोय",
    ],
    addressSummary: "Krishna River Basin corridor, Wai Rural, Satara District",
    verificationStatus: "Verified Title",
  },
  {
    id: "prop-3",
    slug: "luxury-valley-view-villa-panchgani-hills",
    title: "Scenic Valley-Facing Private Bungalow in Panchgani",
    titleMr: "पाचगणी टेकडीवरील व्हॅली व्ह्यू स्वतंत्र व्हिला",
    category: "Bungalows",
    categoryMr: "बंगले व व्हिला",
    location: "Panchgani",
    locationMr: "पाचगणी",
    transactionType: "Buy",
    priceText: "Price upon Qualified Enquiry",
    priceNumeric: 14000000,
    areaText: "3,500 sq.ft. Built-up on 5 Guntha Plot",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "An architecturally built hill bungalow perched with unhindered views overlooking the rolling Western Ghats valleys and Dhom backwaters. Designed with sprawling landscaped terraces, private parking, and high-ceiling master suites, offering complete serenity away from metropolitan noise.",
    descriptionMr:
      "पाचगणीच्या शांत परिसरात सह्याद्रीच्या डोंगरखोऱ्यांचे व धोम जलाशयाचे नयनरम्य दृश्य देणारा स्वतंत्र व्हिला. प्रशस्त टेरेस, सुंदर बाग आणि उत्कृष्ट वास्तुरचना असलेला खास बंगला.",
    features: [
      "Spectacular 180-degree unobstructed valley vista",
      "Independent freehold plot with compound wall",
      "Covered parking for 3 vehicles",
      "High homestay / luxury holiday rental yield potential",
    ],
    featuresMr: [
      "डोंगरखोऱ्यांचे १८० अंश विलोभनीय दृश्य",
      "स्वतंत्र मालकीचा प्लॉट व पक्के कंपाऊंड",
      "३ गाड्यांसाठी सुरक्षित कव्हर पार्किंग",
      "उत्कृष्ट हॉलिडे होम किंवा होमस्टे उत्पन्नाची क्षमता",
    ],
    addressSummary: "Off Wai-Panchgani Ghat Road, Panchgani, Satara District",
    verificationStatus: "Verified Title",
  },
  {
    id: "prop-4",
    slug: "gated-community-row-house-wai",
    title: "Premium 3 BHK Row House in Gated Wai Community",
    titleMr: "वाई मधील सुरक्षित सोसायटीत ३ बीएचके रो-हाउस",
    category: "Row Houses",
    categoryMr: "रो-हाउसेस",
    location: "Wai",
    locationMr: "वाई",
    transactionType: "Buy",
    priceText: "₹ 55 Lakhs (Negotiable upon visit)",
    priceNumeric: 5500000,
    areaText: "1,650 sq.ft. Built-up",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Contemporary two-storey row house situated in a peaceful residential layout close to schools, clinics, and central Wai market. Offers dedicated car porch, private backyard, well-ventilated living areas, and municipal water connection.",
    descriptionMr:
      "मध्यवर्ती वाईमधील शाळा व बाजारपेठेजवळ असलेल्या शांत सोसायटीत प्रशस्त २ मजली रो-हाउस. स्वतःचा कार पोर्च, स्वतंत्र अंगण, स्वच्छ हवा व मुबलक पाणी.",
    features: [
      "3 Spacious Bedrooms with attached balconies",
      "Independent ownership structure with private parking",
      "24-hour water supply & internal paved roads",
      "Immediate possession available",
    ],
    featuresMr: [
      "३ प्रशस्त बेडरूम्स व बाल्कनी",
      "स्वतःचे पार्किंग व स्वतंत्र मालकी हक्क",
      "२४ तास पाणी व प्रशस्त अंतर्गत रस्ते",
      "तत्काळ ताबा उपलब्ध",
    ],
    addressSummary: "Near Gangapuri, Wai, Satara District",
    verificationStatus: "Verified Title",
  },
  {
    id: "prop-5",
    slug: "prime-highway-commercial-plot-shirwal-nh48",
    title: "Prime Highway Commercial Parcel on NH-48 Shirwal",
    titleMr: "शिरवळ राष्ट्रीय महामार्ग (NH-48) लगत मोक्याची व्यावसायिक जागा",
    category: "Commercial Properties",
    categoryMr: "व्यावसायिक जागा",
    location: "Shirwal",
    locationMr: "शिरवळ",
    transactionType: "Buy",
    priceText: "Consultation on Request",
    priceNumeric: 18000000,
    areaText: "10,000 sq.ft. (10 Guntha)",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Strategic commercial parcel offering direct highway frontage along the high-traffic NH-48 Pune-Bengaluru industrial corridor at Shirwal. Exceptional visibility and wide entry apron, perfectly suited for logistics warehouses, retail showroom development, or commercial plaza.",
    descriptionMr:
      "पुणे-बंगळुरू राष्ट्रीय महामार्गालगत शिरवळ येथे थेट महामार्ग दर्शनी असलेली व्यावसायिक जागा. वेअरहाउस, हॉटेल, शोरूम किंवा व्यावसायिक संकुलासाठी अत्यंत मोक्याचे स्थान.",
    features: [
      "Direct NH-48 road frontage with high vehicular count",
      "Heavy MIDC industrial ecosystem in immediate vicinity",
      "High commercial land appreciation corridor",
      "Clean commercial title and zone suitability",
    ],
    featuresMr: [
      "थेट महामार्गावर उत्तम दर्शनी भाग",
      "शिरवळ एमआयडीसी लगतचे मोक्याचे स्थान",
      "वेगाने वाढणारे व्यावसायिक क्षेत्र",
      "स्वच्छ व बिनबोभाट कागदपत्रे",
    ],
    addressSummary: "NH-48 Pune-Satara Highway Corridor, Shirwal, Satara District",
    verificationStatus: "Verified Title",
  },
  {
    id: "prop-6",
    slug: "central-satara-2bhk-family-apartment",
    title: "Well-Connected 2 BHK Residence in Central Satara",
    titleMr: "सातारा शहरात मोक्याच्या ठिकाणी प्रशस्त २ बीएचके फ्लॅट",
    category: "Flats",
    categoryMr: "फ्लॅट्स आणि अपार्टमेंट्स",
    location: "Satara",
    locationMr: "सातारा",
    transactionType: "Buy",
    priceText: "₹ 42 Lakhs",
    priceNumeric: 4200000,
    areaText: "980 sq.ft. Super Built-up",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Vastu-compliant, naturally illuminated 2 BHK apartment located within easy reach of Satara bus stand, reputed colleges, and super-specialty hospitals. Includes covered car parking, lift, security, and dedicated solar water heating.",
    descriptionMr:
      "वास्तुनुसार बांधलेला, भरपूर उजेड व हवा असलेला २ बीएचके फ्लॅट. बस स्थानक, महाविद्यालये आणि रुग्णालयांच्या जवळ. लिफ्ट, सिक्युरिटी व कव्हर पार्किंगसह.",
    features: [
      "East-West facing layout with cross-ventilation",
      "Covered reserved vehicle parking",
      "Elevator with battery backup and solar water connection",
      "Clear conveyance deed title and sanctioned building plans",
    ],
    featuresMr: [
      "पूर्व-पश्चिम दिशेची प्रशस्त रचना",
      "स्वतःचे आरक्षित कव्हर पार्किंग",
      "बॅकअपसह लिफ्ट व सोलर पाण्याची सोय",
      "मंजूर नकाशे व संपूर्ण कायदेशीर कागदपत्रे",
    ],
    addressSummary: "Near Sadar Bazar / Powai Naka, Satara City, Maharashtra",
    verificationStatus: "Verified Title",
  },
];
