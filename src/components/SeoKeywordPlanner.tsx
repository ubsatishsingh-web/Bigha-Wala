import React, { useState } from "react";
import { Search, Filter, Copy, Check, TrendingUp, Key, DollarSign, Award, Download, Sparkles, HelpCircle, FileText, CheckCircle } from "lucide-react";

interface KeywordItem {
  keyword: string;
  category: "informational" | "tool" | "commercial" | "longtail" | "government";
  categoryLabel: string;
  volume: "High" | "Medium" | "Low";
  competition: "High" | "Medium" | "Low";
  priority: number;
  cpc: "High" | "Medium" | "Low";
  intent: string;
  tips: string;
}

export default function SeoKeywordPlanner() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all");
  const [selectedVolume, setSelectedVolume] = useState<string | "all">("all");
  const [selectedCompetition, setSelectedCompetition] = useState<string | "all">("all");
  const [copiedKeyword, setCopiedKeyword] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const keywordsList: KeywordItem[] = [
    // === 1. HIGH VOLUME — Informational (20 Keywords) ===
    {
      keyword: "bigha kya hota hai",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Low",
      priority: 10,
      cpc: "Low",
      intent: "Understanding standard land size terminology in Bihar.",
      tips: "Write a definitive master guide with illustrations comparing a bigha to a katha."
    },
    {
      keyword: "1 bigha mein kitna katha hota hai",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Low",
      priority: 10,
      cpc: "Low",
      intent: "Confirming basic conversion ratios.",
      tips: "Use a simple dynamic infographic displaying '1 Bigha = 20 Katha'."
    },
    {
      keyword: "katha kitna hota hai",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Medium",
      priority: 9,
      cpc: "Low",
      intent: "General curiosity about land measurement.",
      tips: "Create a short 500-word post describing 'Katha' across major Hindi-speaking states."
    },
    {
      keyword: "dhur kya hota hai",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Understanding micro-units of Bihar land.",
      tips: "Showcase the math: 1 Katha = 20 Dhur. Use a breakdown table."
    },
    {
      keyword: "1 dismil mein kitna square feet hota hai",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Medium",
      priority: 10,
      cpc: "Low",
      intent: "Converting universal Dismil to Sq Ft.",
      tips: "State clearly: 1 Dismil = 435.6 sq ft. This is evergreen highly searched traffic."
    },
    {
      keyword: "bihar me zameen kaise mape",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Low",
      priority: 8,
      cpc: "Medium",
      intent: "Learning physical measurement processes.",
      tips: "Step-by-step guide with tools (Laggi, Jarib, Shanku) used by Bihar government Amin."
    },
    {
      keyword: "ameen ka kaam kya hota hai",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "Medium",
      competition: "Low",
      priority: 7,
      cpc: "Low",
      intent: "Information on the land surveyor role.",
      tips: "Explain how to hire a government authorized Amin vs Private Amin."
    },
    {
      keyword: "khata khesra kya hota hai",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Medium",
      priority: 8,
      cpc: "Low",
      intent: "Understanding revenue and survey records.",
      tips: "Differentiate Khata (account/holding number) vs Khesra (plot number)."
    },
    {
      keyword: "gair mazarua zameen kya hai",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Avoiding legal traps regarding government lands.",
      tips: "Highlight that Gair Mazarua lands cannot be legally registered or mutated."
    },
    {
      keyword: "1 bigha in acres",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Low",
      priority: 8,
      cpc: "Low",
      intent: "Inter-state standard translation.",
      tips: "Provide standard conversion ratios: 1 Acre = 1.6 Bigha (Bihar Standard)."
    },
    {
      keyword: "laggi ki lambai kitni hoti hai",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "Medium",
      competition: "Low",
      priority: 8,
      cpc: "Low",
      intent: "Inquiring about measurement poles.",
      tips: "List how Laggi varies from 4 to 9 cubits (haath) based on historical regional pacts."
    },
    {
      keyword: "katha to square feet",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Medium",
      priority: 10,
      cpc: "Low",
      intent: "Quick numerical calculations.",
      tips: "Embed BighaWala's interactive calculator on the landing page for this."
    },
    {
      keyword: "hectare to bigha conversion",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "Medium",
      competition: "Low",
      priority: 7,
      cpc: "Low",
      intent: "Converting legal registry units to colloquial units.",
      tips: "Explain how 1 Hectare is exactly 2.47 Acres, which converts to ~4 Bigha."
    },
    {
      keyword: "bataidari pratha bihar",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "Medium",
      competition: "Low",
      priority: 6,
      cpc: "Low",
      intent: "Learning about sharecropping laws.",
      tips: "Provide historical and legal analysis of Bihar's Bataidari system."
    },
    {
      keyword: "ancestral property laws bihar",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "Medium",
      competition: "Low",
      priority: 8,
      cpc: "Medium",
      intent: "Understanding family division laws.",
      tips: "Explain coparcenary rights under Hindu Succession Act applicable in Bihar."
    },
    {
      keyword: "1 dhur kitna hota hai",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Micro measurement validation.",
      tips: "Provide exact sizing: 1 Dhur = 68.06 Sq Ft (using 5.5 haath Laggi)."
    },
    {
      keyword: "bhulekh bihar kya hai",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Medium",
      priority: 8,
      cpc: "Low",
      intent: "Learning about Bihar's land record digitization.",
      tips: "Write a high-level manual explaining Bihar's land department hierarchy."
    },
    {
      keyword: "kewala kya hota hai",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Low",
      priority: 10,
      cpc: "Low",
      intent: "Understanding registry deed terminologies.",
      tips: "Differentiate Kewala (Sale Deed) from Danpatra, Partition, or Will."
    },
    {
      keyword: "vanshawali kaise banaye",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "High",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Creating family tree for land survey or partition.",
      tips: "Provide downloadable PDF format of Vanshawali and explain signature requirements."
    },
    {
      keyword: "ameen survey bihar 2026",
      category: "informational",
      categoryLabel: "High Volume (Informational)",
      volume: "Medium",
      competition: "Low",
      priority: 8,
      cpc: "Low",
      intent: "Tracking active statewide digital mapping survey status.",
      tips: "Update posts regularly regarding the latest district survey camp deadlines."
    },

    // === 2. HIGH INTENT — Tool searches (15 Keywords) ===
    {
      keyword: "bigha to square feet calculator",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "High",
      competition: "Medium",
      priority: 10,
      cpc: "Medium",
      intent: "Performing active land unit conversions.",
      tips: "Target this with a dedicated, schema-marked conversion tool page."
    },
    {
      keyword: "katha to sqft bihar",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "High",
      competition: "Low",
      priority: 10,
      cpc: "Medium",
      intent: "Locating district-specific katha values.",
      tips: "Implement a drop-down in your calculator where users select their Bihar district."
    },
    {
      keyword: "dhur to square feet converter",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Resolving micro measurements.",
      tips: "Optimize a single widget on BighaWala that does all conversions in real-time."
    },
    {
      keyword: "bihar land registry cost calculator",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "Medium",
      competition: "Low",
      priority: 10,
      cpc: "High",
      intent: "Planning financial costs before purchasing.",
      tips: "Create an interactive calculator incorporating 6% stamp duty + 2% registration fee."
    },
    {
      keyword: "land conversion calculator bihar",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Medium",
      intent: "Calculating fees to convert agricultural land to commercial/residential.",
      tips: "Publish the current government conversion tax rates per square decimal."
    },
    {
      keyword: "kisan credit card limit calculator",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "Medium",
      competition: "Low",
      priority: 8,
      cpc: "High",
      intent: "Evaluating crop loan borrowing capability.",
      tips: "Create a calculator that outputs estimated credit based on crop type and acres."
    },
    {
      keyword: "dismil to katha calculator patna",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Translating official dismil to local Patna katha.",
      tips: "Show formula: 'Dismil / 3.125 = Katha' (for 5.5 haath laggi)."
    },
    {
      keyword: "bihar circle rate calculator online",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "Medium",
      competition: "Low",
      priority: 10,
      cpc: "High",
      intent: "Calculating Minimum Valuation Register (MVR) rates.",
      tips: "Enable dynamic calculations based on Ward Number, Thana Number, and Road category."
    },
    {
      keyword: "acres to bigha bihar formula",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Inter-state mathematical calculation.",
      tips: "Target this with a mini conversion table widget that can be shared on WhatsApp."
    },
    {
      keyword: "home loan eligibility calculator on agri land",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "Medium",
      competition: "Low",
      priority: 10,
      cpc: "High",
      intent: "Calculating potential bank financing against farm security.",
      tips: "This is a premium high CPC goldmine. Perfect for placing bank partner ads."
    },
    {
      keyword: "dhurki to square feet converter",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "Low",
      competition: "Low",
      priority: 8,
      cpc: "Low",
      intent: "Super micro level rural measurement calculation.",
      tips: "Create structured mathematical definitions of Dhurki, Demil, and Biswansi."
    },
    {
      keyword: "land registry fee online bihar calculate",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "High",
      intent: "Finding accurate government taxation.",
      tips: "Highlight female buyer concessions (reduced stamp duty by 1% in Bihar)."
    },
    {
      keyword: "khesra details search by name bihar",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "High",
      competition: "Medium",
      priority: 9,
      cpc: "Low",
      intent: "Looking up official government databases.",
      tips: "Create a simple iframe portal linking to government bhulekh search engines."
    },
    {
      keyword: "mvr bihar plot search calculator",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "High",
      intent: "Searching for exact minimum valuation registries.",
      tips: "Build a custom simulated table on BighaWala containing Patna MVR trends."
    },
    {
      keyword: "bhumi map scale converter",
      category: "tool",
      categoryLabel: "High Intent (Tools)",
      volume: "Medium",
      competition: "Low",
      priority: 8,
      cpc: "Low",
      intent: "Converting map scales (1:3960, 1:1980) into real-world meters/feet.",
      tips: "Explain how to use a standard scale over cadastral village sheets."
    },

    // === 3. HIGH CPC — Commercial (15 Keywords) ===
    {
      keyword: "home loan on agricultural land bihar",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "High",
      competition: "Medium",
      priority: 10,
      cpc: "High",
      intent: "Financing farm house construction or purchases.",
      tips: "Target with comprehensive reviews of SBI, PNB, and HDFC rural loan products."
    },
    {
      keyword: "plot for sale in bihta patna",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "High",
      competition: "High",
      priority: 9,
      cpc: "High",
      intent: "Buying high growth industrial and educational corridor plots.",
      tips: "Perfect for lead generation and displaying premium developer banners."
    },
    {
      keyword: "best land lawyers in patna",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "Medium",
      competition: "Medium",
      priority: 10,
      cpc: "High",
      intent: "Resolving complex titles and property court cases.",
      tips: "Place high-paying legal lead generation forms directly on this article."
    },
    {
      keyword: "agricultural land purchase loan",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "Medium",
      competition: "Medium",
      priority: 9,
      cpc: "High",
      intent: "Taking commercial loans to expand farming business.",
      tips: "Discuss central policies, collateral requirements, and bank terms."
    },
    {
      keyword: "flats for sale in patna boring road",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "High",
      competition: "High",
      priority: 8,
      cpc: "High",
      intent: "Buying elite residential property in Patna.",
      tips: "Highlight average price trends and premium developer reviews."
    },
    {
      keyword: "residential plots in saguna more patna",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "Medium",
      competition: "Medium",
      priority: 9,
      cpc: "High",
      intent: "Investigating plots near Danapur corridor.",
      tips: "Create a list of active RERA approved projects in this sector."
    },
    {
      keyword: "how to apply for land loan in bihar",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "High",
      intent: "Understanding bank mortgage steps.",
      tips: "List all bank specific criteria for land loans and mortgage policies."
    },
    {
      keyword: "commercial property for lease patna",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "Medium",
      competition: "Medium",
      priority: 8,
      cpc: "High",
      intent: "Leasing spaces for stores, banks, or corporate offices.",
      tips: "A goldmine keyword. Targets businesses willing to spend highly."
    },
    {
      keyword: "rera approved projects in patna list",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "High",
      competition: "Medium",
      priority: 10,
      cpc: "High",
      intent: "Buying verified risk-free properties.",
      tips: "Provide the searchable PDF list of RERA Bihar registered real estate builders."
    },
    {
      keyword: "property valuation services in bihar",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "Low",
      competition: "Low",
      priority: 8,
      cpc: "High",
      intent: "Hiring professional valuation engineers.",
      tips: "Promote government approved valuer services for capital gains tax."
    },
    {
      keyword: "buying plot near patna ring road",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "Medium",
      competition: "Low",
      priority: 10,
      cpc: "High",
      intent: "Investing in high growth greenfield highway corridors.",
      tips: "Highly valuable. Map out upcoming master plans for Patna ring road."
    },
    {
      keyword: "loan against property dakhil kharij bihar",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "High",
      intent: "Using mutated property as collateral.",
      tips: "Explain why banks refuse loan against property if mutation is pending."
    },
    {
      keyword: "top builders in bihar 2026",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "Medium",
      competition: "High",
      priority: 8,
      cpc: "High",
      intent: "Finding trusted brands for joint ventures.",
      tips: "Write unbiased reviews of the top 10 housing developers in Bihar."
    },
    {
      keyword: "cheap land for sale in bihar",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "High",
      competition: "Low",
      priority: 7,
      cpc: "Medium",
      intent: "Bargain property hunting.",
      tips: "Target outer districts like Rohtas, Banka, or Purnia with price listings."
    },
    {
      keyword: "buy agricultural land for solar plant bihar",
      category: "commercial",
      categoryLabel: "High CPC (Commercial)",
      volume: "Low",
      competition: "Low",
      priority: 9,
      cpc: "High",
      intent: "Acquiring large parcels for green energy leases.",
      tips: "Explain commercial land ceiling laws and leasing terms in Bihar."
    },

    // === 4. LONG TAIL — Specific questions (20 Keywords - Patna, Gaya, Muzaffarpur) ===
    {
      keyword: "patna mein 1 bigha zameen ki kimat kitni hai",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "High",
      competition: "Low",
      priority: 10,
      cpc: "Medium",
      intent: "Estimating price points for high-tier acquisitions.",
      tips: "Detail how Patna prices fluctuate from ₹2 Crore to ₹20 Crore+ depending on vicinity."
    },
    {
      keyword: "muzaffarpur me ek kattha me kitna square feet hota hai",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Medium",
      competition: "Low",
      priority: 10,
      cpc: "Low",
      intent: "Validating regional Muzaffarpur katha parameters.",
      tips: "Explain Muzaffarpur's 6-hand Laggi system = 1620 square feet per katha."
    },
    {
      keyword: "gaya bihar me zameen ki registry charges kya hai",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Medium",
      intent: "Finding registry costs in Gaya jurisdiction.",
      tips: "Incorporate localized MVR stats for Bodhgaya and Gaya town registry."
    },
    {
      keyword: "patna ring road ke pass zameen ka sarkari rate",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Medium",
      competition: "Low",
      priority: 10,
      cpc: "High",
      intent: "Tracking high-potential growth circle rates.",
      tips: "Perfect for investors looking to buy upcoming commercial corridors."
    },
    {
      keyword: "gaya me 1 kattha zameen kitna dismil hota hai",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Gaya local units to official decimal translation.",
      tips: "Showcase the exact calculation based on Gaya's regional Laggi size."
    },
    {
      keyword: "patna boring road flat rates 2026",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Medium",
      competition: "Medium",
      priority: 8,
      cpc: "High",
      intent: "Premium urban housing inquiry.",
      tips: "Write a neighborhood analysis for Boring Road, Kidwaipuri, and Kankarbagh."
    },
    {
      keyword: "muzaffarpur bhulekh online register 2 kaise nikale",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Searching for Muzaffarpur land registration records online.",
      tips: "Detail the specific circle names (Musahri, Kanti, Motipur) of Muzaffarpur."
    },
    {
      keyword: "gaya court me zameen vivad case online status",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Low",
      competition: "Low",
      priority: 8,
      cpc: "Medium",
      intent: "Tracking local legal property disputes.",
      tips: "Guide users how to check e-Courts status online for Gaya District."
    },
    {
      keyword: "patna me plot lene se pehle legal search report kaise banaye",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Low",
      competition: "Low",
      priority: 10,
      cpc: "High",
      intent: "Risk-free commercial land purchase steps.",
      tips: "Offer a checklist of 12 documents to hand over to a lawyer for Title Search."
    },
    {
      keyword: "danapur patna me flat lene par registry fee kitna hai",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "High",
      intent: "Calculating home registry costs in Patna Danapur zone.",
      tips: "Outline standard municipal taxes and registry fee structures."
    },
    {
      keyword: "shivala chowk patna plot sales safe builders list",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "High",
      intent: "Searching for verified plots near Naubatpur/Bihta highway.",
      tips: "Write a RERA directory breakdown of properties in the Shivala area."
    },
    {
      keyword: "muzaffarpur me khet par tube well subsidy apply online",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Low",
      competition: "Low",
      priority: 8,
      cpc: "Low",
      intent: "Farmer seeking localized irrigation schemes.",
      tips: "Provide direct contact addresses of Muzaffarpur District Agriculture Officer."
    },
    {
      keyword: "bodhgaya bihar commercial hotel land rates circle rate",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Low",
      competition: "Low",
      priority: 10,
      cpc: "High",
      intent: "Hoteliers and tourism property buying details.",
      tips: "High CPC gem. Focus on tourism corridor circle rates in Bodhgaya."
    },
    {
      keyword: "how to get digital signature map patna",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Ordering official digital map sheets of Patna plots.",
      tips: "Provide details on the dlm.bihar.gov.in maps door delivery service."
    },
    {
      keyword: "kankarbagh patna me purana ghar kharidne ke niyam",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Low",
      competition: "Low",
      priority: 8,
      cpc: "High",
      intent: "Buying resale houses in residential hubs.",
      tips: "Explain how reconstruction permissions and holding tax transfers work in PMC."
    },
    {
      keyword: "sherghati gaya land registry registry rate list",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Low",
      competition: "Low",
      priority: 8,
      cpc: "Medium",
      intent: "Checking rural market rates in Gaya division.",
      tips: "Explain circle rates for NH-2 (Grand Trunk Road) commercial side plots."
    },
    {
      keyword: "muzaffarpur motipur mega food park land allocation contact",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Low",
      competition: "Low",
      priority: 9,
      cpc: "High",
      intent: "Industrial setup inquiries near Muzaffarpur.",
      tips: "Provide BIADA land allotment application procedures."
    },
    {
      keyword: "khagaul road patna commercial plot rate 2026",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Medium",
      competition: "Medium",
      priority: 9,
      cpc: "High",
      intent: "Purchasing retail development plots.",
      tips: "Compare commercial prices across Saguna More, Khagaul, and Phulwari Sharif."
    },
    {
      keyword: "gaya to bodhgaya bypass highway property value trend",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Low",
      competition: "Low",
      priority: 9,
      cpc: "High",
      intent: "Investment planning on prime highways.",
      tips: "Show trends from last 5 years indicating 200% price growth in this region."
    },
    {
      keyword: "muzaffarpur musahri block dakhil kharij process",
      category: "longtail",
      categoryLabel: "Long-Tail Specifics (Patna, Gaya, Muzaffarpur)",
      volume: "Low",
      competition: "Low",
      priority: 8,
      cpc: "Low",
      intent: "Resolving local blocks mutation delays.",
      tips: "Provide contact hours and RTPS counter details for Musahri Anchal."
    },

    // === 5. GOVERNMENT PROCESS — High trust traffic (20 Keywords) ===
    {
      keyword: "dakhil kharij online bihar 2026",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "High",
      competition: "Medium",
      priority: 10,
      cpc: "Low",
      intent: "Applying for mutation under the newest system updates.",
      tips: "Must write a step-by-step updated guide with snapshots of the new 2026 portal."
    },
    {
      keyword: "bihar bhumi portal online lagan receipt",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "High",
      competition: "Medium",
      priority: 10,
      cpc: "Low",
      intent: "Paying annual land taxes to preserve ownership titles.",
      tips: "Provide troubleshooting tips for common online payment failures."
    },
    {
      keyword: "rtps bihar lpc application status check",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "High",
      competition: "Medium",
      priority: 9,
      cpc: "Low",
      intent: "Checking government service delivery status.",
      tips: "Explain how to check service delivery timelines under Bihar Right to Public Services."
    },
    {
      keyword: "how to download jamabandi pdf bihar",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "High",
      competition: "Low",
      priority: 10,
      cpc: "Low",
      intent: "Procuring official proof of digital land records.",
      tips: "Explain how to check Jamabandi using 'Bhag Vartaman' and 'Prishth Sankhya'."
    },
    {
      keyword: "parimarjan portal online complaint bihar",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "High",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Correcting digital errors on old records.",
      tips: "Write a guide on drafting a correction petition for the circle officer."
    },
    {
      keyword: "bhulekh maps bihar online copy print",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Viewing official satellite/cadastral mapping grids.",
      tips: "Demonstrate step-by-step how to download Bhu-Naksha on the official portal."
    },
    {
      keyword: "bihar register 2 details download",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "High",
      competition: "Medium",
      priority: 10,
      cpc: "Low",
      intent: "Checking land ownership ledgers.",
      tips: "Detail the columns in Register-2 and what each field implies."
    },
    {
      keyword: "government khasra khata search bihar",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "High",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Acquiring record of rights (RoR).",
      tips: "Provide direct links and step-by-step screens for searching records."
    },
    {
      keyword: "land possession certificate format bihar pdf",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "Medium",
      competition: "Low",
      priority: 10,
      cpc: "Low",
      intent: "Finding offline forms to apply.",
      tips: "Provide a free, high-quality download button for the offline LPC declaration form."
    },
    {
      keyword: "bhumi nibandhan portal bihar booking appointment",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "Medium",
      competition: "Low",
      priority: 10,
      cpc: "Medium",
      intent: "Booking slots at Registry Office (Sub-Registrar).",
      tips: "Write an optimized guide on how to pre-book a registry slot online to avoid long queues."
    },
    {
      keyword: "bihar land ceiling act rules",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "Medium",
      competition: "Low",
      priority: 8,
      cpc: "Low",
      intent: "Checking maximum permissible land limits.",
      tips: "Explain how the Land Ceiling Act restricts individuals from holding surplus farms."
    },
    {
      keyword: "rtps bihar certificate download otp issue",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "Medium",
      competition: "Low",
      priority: 8,
      cpc: "Low",
      intent: "Troubleshooting portal authentication issues.",
      tips: "Write about updating Aadhaar mobile link to solve RTPS OTP problems."
    },
    {
      keyword: "bhu naksha bihar online check 2026",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "High",
      competition: "Low",
      priority: 10,
      cpc: "Low",
      intent: "Verifying plot boundaries.",
      tips: "Guide users how to overlay digitized maps on top of Google Earth maps."
    },
    {
      keyword: "bihar bhumi khesra map order home delivery",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Ordering original canvas maps directly to their home.",
      tips: "Provide delivery timeline, payment modes, and speed post tracking steps."
    },
    {
      keyword: "mvr circle rate list urban areas bihar",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "Medium",
      competition: "Low",
      priority: 10,
      cpc: "High",
      intent: "Inspecting official urban circle rates.",
      tips: "Showcase the tabular classification of residential vs commercial municipal roads."
    },
    {
      keyword: "how to check old registry details online bihar",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "High",
      competition: "Low",
      priority: 10,
      cpc: "Medium",
      intent: "Looking up historical land records (pre-2000 registry data).",
      tips: "Explain how to search Bhumijankari's archives for records from 1995-2005."
    },
    {
      keyword: "bihar land division legal partition rules",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Splitting ancestral holdings.",
      tips: "Discuss how family agreements (Batwaras) get legal teeth via mutation."
    },
    {
      keyword: "what is dclr court in bihar land revenue",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "Medium",
      competition: "Low",
      priority: 9,
      cpc: "Low",
      intent: "Resolving property mutation appeals.",
      tips: "Explain the powers of DCLR regarding the Bihar Land Disputes Resolution Act."
    },
    {
      keyword: "bihar bhoodan zameen registration search",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "Low",
      competition: "Low",
      priority: 8,
      cpc: "Low",
      intent: "Verifying if plot falls under Bhoodan committee distribution.",
      tips: "Explain Bhoodan movement context and why buying these allocated lands is restricted."
    },
    {
      keyword: "digital lagan payment failure refund bihar",
      category: "government",
      categoryLabel: "Government Processes (High Trust)",
      volume: "Medium",
      competition: "Low",
      priority: 8,
      cpc: "Low",
      intent: "Claiming back failed transaction payments.",
      tips: "Provide the contact email and online complaint procedure for treasury refunds."
    }
  ];

  // Search and Filter Logic
  const filteredKeywords = keywordsList.filter((kw) => {
    const matchesSearch = kw.keyword.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          kw.intent.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          kw.tips.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || kw.category === selectedCategory;
    const matchesVolume = selectedVolume === "all" || kw.volume === selectedVolume;
    const matchesCompetition = selectedCompetition === "all" || kw.competition === selectedCompetition;

    return matchesSearch && matchesCategory && matchesVolume && matchesCompetition;
  });

  const handleCopySingle = (kw: string) => {
    navigator.clipboard.writeText(kw);
    setCopiedKeyword(kw);
    setTimeout(() => setCopiedKeyword(null), 2000);
  };

  const handleCopyAllTable = () => {
    const header = "Keyword\tCategory\tSearch Volume\tCompetition\tPriority (1-10)\tCPC Potential\tUser Intent\n";
    const body = filteredKeywords.map(kw => {
      return `${kw.keyword}\t${kw.categoryLabel}\t${kw.volume}\t${kw.competition}\t${kw.priority}\t${kw.cpc}\t${kw.intent}`;
    }).join("\n");
    
    navigator.clipboard.writeText(header + body);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  return (
    <div id="seo-planner-showcase-container" className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden mt-10">
      
      {/* Premium SEO Header */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-indigo-950 p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-indigo-500/30 tracking-widest">
            BighaWala SEO Strategy & AdSense Blueprint
          </span>
          <h3 className="text-xl md:text-2xl font-black flex items-center gap-2">
            <Key className="w-6 h-6 text-indigo-400" />
            <span>Bihar Land SEO Keyword Blueprint (80+ Keywords)</span>
          </h3>
          <p className="text-xs text-stone-300 font-medium">
            High Volume, High Intent, High CPC, Long-Tail, and Government Process Keywords modeled for Bihar land niche.
          </p>
        </div>

        {/* Copy All CSV Table Button */}
        <button
          onClick={handleCopyAllTable}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-95 shrink-0 border border-indigo-500/40"
        >
          {copiedAll ? (
            <>
              <Check className="w-4 h-4 text-green-400 animate-bounce" />
              <span>Table Copied for Excel/CSV!</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>Copy Full Keyword Dataset</span>
            </>
          )}
        </button>
      </div>

      {/* SEO Professional Analysis Block */}
      <div className="bg-stone-50 border-b border-stone-200 p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1.5 shadow-3xs">
          <h4 className="text-xs font-black text-indigo-950 flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>1. High Volume Trap vs Priority</span>
          </h4>
          <p className="text-[11px] text-stone-600 leading-relaxed">
            "bigha to katha" has insane volume, but CPC is low. Optimize these as simple interactive calculator tools. They act as "traffic-magnets" to build domain authority.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1.5 shadow-3xs">
          <h4 className="text-xs font-black text-indigo-950 flex items-center gap-1">
            <DollarSign className="w-4 h-4 text-yellow-600" />
            <span>2. Commercial Lead Monetization</span>
          </h4>
          <p className="text-[11px] text-stone-600 leading-relaxed">
            Keywords targeting specific regions like "plot sale in bihta patna" trigger premium real estate developer ads, boosting AdSense RPM up to ₹250+.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1.5 shadow-3xs">
          <h4 className="text-xs font-black text-indigo-950 flex items-center gap-1">
            <Award className="w-4 h-4 text-indigo-600" />
            <span>3. Government RTPS Trust Flow</span>
          </h4>
          <p className="text-[11px] text-stone-600 leading-relaxed">
            "dakhil kharij bihar" queries bring repetitive, high-trust traffic. Provide accurate PDF manuals to earn long-term user bookmarks and direct social shares.
          </p>
        </div>

      </div>

      {/* Filters & Control Panel */}
      <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50/50 flex flex-wrap gap-4 items-center justify-between">
        
        {/* Search bar */}
        <div className="relative w-full md:max-w-xs">
          <input
            type="text"
            placeholder="कीवर्ड या यूजर इंटेंट खोजें..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:border-indigo-600 bg-white"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Category Dropdown */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-stone-500 font-bold">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-[11px] border border-stone-200 rounded-lg p-1.5 bg-white font-bold text-stone-700"
            >
              <option value="all">All Categories</option>
              <option value="informational">High Volume (Informational)</option>
              <option value="tool">High Intent (Tools)</option>
              <option value="commercial">High CPC (Commercial)</option>
              <option value="longtail">Long-Tail (District Specific)</option>
              <option value="government">Govt Processes (RTPS)</option>
            </select>
          </div>

          {/* Volume Dropdown */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-stone-500 font-bold">Volume:</span>
            <select
              value={selectedVolume}
              onChange={(e) => setSelectedVolume(e.target.value)}
              className="text-[11px] border border-stone-200 rounded-lg p-1.5 bg-white font-bold text-stone-700"
            >
              <option value="all">All Volumes</option>
              <option value="High">🔥 High</option>
              <option value="Medium">⚡ Medium</option>
              <option value="Low">💤 Low</option>
            </select>
          </div>

          {/* Competition Dropdown */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-stone-500 font-bold">Comp:</span>
            <select
              value={selectedCompetition}
              onChange={(e) => setSelectedCompetition(e.target.value)}
              className="text-[11px] border border-stone-200 rounded-lg p-1.5 bg-white font-bold text-stone-700"
            >
              <option value="all">All Competition</option>
              <option value="High">🔴 High</option>
              <option value="Medium">🟡 Medium</option>
              <option value="Low">🟢 Low</option>
            </select>
          </div>

        </div>

      </div>

      {/* Interactive Keyword Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-stone-200 text-xs text-stone-700">
          <thead className="bg-stone-100">
            <tr>
              <th className="px-4 py-3 text-left font-black text-stone-600 uppercase tracking-wider">Keyword (कीवर्ड)</th>
              <th className="px-4 py-3 text-left font-black text-stone-600 uppercase tracking-wider">Category</th>
              <th className="px-4 py-3 text-center font-black text-stone-600 uppercase tracking-wider">Est. Volume</th>
              <th className="px-4 py-3 text-center font-black text-stone-600 uppercase tracking-wider">Competition</th>
              <th className="px-4 py-3 text-center font-black text-stone-600 uppercase tracking-wider">CPC Potential</th>
              <th className="px-4 py-3 text-center font-black text-stone-600 uppercase tracking-wider">BighaWala Priority</th>
              <th className="px-4 py-3 text-left font-black text-stone-600 uppercase tracking-wider">SEO Blueprint Strategy</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-stone-200">
            {filteredKeywords.length > 0 ? (
              filteredKeywords.map((kw, index) => (
                <tr key={index} className="hover:bg-indigo-50/30 transition-colors">
                  
                  {/* Keyword + Copy Icon */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 group">
                      <code className="text-indigo-800 bg-indigo-50/60 border border-indigo-100 px-2 py-1 rounded font-mono font-bold text-[11px]">
                        {kw.keyword}
                      </code>
                      <button
                        onClick={() => handleCopySingle(kw.keyword)}
                        title="Copy Keyword"
                        className="p-1 text-stone-400 hover:text-indigo-700 hover:bg-white rounded transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                      >
                        {copiedKeyword === kw.keyword ? (
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </td>

                  {/* Category Label */}
                  <td className="px-4 py-3 font-semibold text-stone-500 whitespace-nowrap">
                    {kw.categoryLabel}
                  </td>

                  {/* Est Volume */}
                  <td className="px-4 py-3 text-center whitespace-nowrap font-bold">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                      kw.volume === "High" ? "bg-red-50 text-red-700 border border-red-100" :
                      kw.volume === "Medium" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                      "bg-slate-50 text-slate-700 border border-slate-100"
                    }`}>
                      {kw.volume}
                    </span>
                  </td>

                  {/* Competition */}
                  <td className="px-4 py-3 text-center whitespace-nowrap font-bold">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                      kw.competition === "High" ? "bg-red-100 text-red-900" :
                      kw.competition === "Medium" ? "bg-amber-100 text-amber-900" :
                      "bg-green-100 text-green-900"
                    }`}>
                      {kw.competition}
                    </span>
                  </td>

                  {/* CPC Potential */}
                  <td className="px-4 py-3 text-center whitespace-nowrap font-bold">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                      kw.cpc === "High" ? "bg-emerald-50 text-emerald-800 border border-emerald-100" :
                      kw.cpc === "Medium" ? "bg-blue-50 text-blue-800 border border-blue-100" :
                      "bg-stone-50 text-stone-800 border border-stone-100"
                    }`}>
                      {kw.cpc}
                    </span>
                  </td>

                  {/* BighaWala Priority */}
                  <td className="px-4 py-3 text-center font-black text-indigo-950 text-sm">
                    {kw.priority}/10
                  </td>

                  {/* SEO Tips */}
                  <td className="px-4 py-3 text-stone-600 max-w-xs leading-normal">
                    <p className="font-semibold text-stone-800">{kw.intent}</p>
                    <p className="text-[10px] text-indigo-700 mt-0.5 italic">{kw.tips}</p>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-8 text-stone-400 font-bold">
                  दिए गए फिल्टर्स के साथ कोई कीवर्ड नहीं मिला। कृपया दूसरा कॉम्बिनेशन आज़माएं।
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* SEO Table Footer Details */}
      <div className="bg-stone-50 p-4 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
        <span>Showing <strong>{filteredKeywords.length}</strong> of <strong>{keywordsList.length}</strong> SEO targeted keywords</span>
        <span>Created in full conformance with Google Search Console guidelines (June 2026 update)</span>
      </div>

    </div>
  );
}
