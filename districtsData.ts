export interface DistrictInfo {
  id: string;
  nameEn: string;
  nameHi: string;
  defaultLaggi: number; // in cubits (हाथ)
  notes?: string;
}

export const BIHAR_DISTRICTS: DistrictInfo[] = [
  { id: "patna", nameEn: "Patna", nameHi: "पटना", defaultLaggi: 5.5 },
  { id: "gaya", nameEn: "Gaya", nameHi: "गया", defaultLaggi: 5.5 },
  { id: "muzaffarpur", nameEn: "Muzaffarpur", nameHi: "मुजफ्फरपुर", defaultLaggi: 6.5 },
  { id: "darbhanga", nameEn: "Darbhanga", nameHi: "दरभंगा", defaultLaggi: 6.0 },
  { id: "bhagalpur", nameEn: "Bhagalpur", nameHi: "भागलपुर", defaultLaggi: 5.5 },
  { id: "nalanda", nameEn: "Nalanda", nameHi: "नालंदा", defaultLaggi: 5.5 },
  { id: "vaishali", nameEn: "Vaishali", nameHi: "वैशाली", defaultLaggi: 6.5 },
  { id: "sitamarhi", nameEn: "Sitamarhi", nameHi: "सीतामढ़ी", defaultLaggi: 6.5 },
  { id: "madhubani", nameEn: "Madhubani", nameHi: "मधुबनी", defaultLaggi: 6.5 },
  { id: "samastipur", nameEn: "Samastipur", nameHi: "समस्तीपुर", defaultLaggi: 6.0 },
  { id: "begusarai", nameEn: "Begusarai", nameHi: "बेगूसराय", defaultLaggi: 6.0 },
  { id: "munger", nameEn: "Munger", nameHi: "मुंगेर", defaultLaggi: 5.5 },
  { id: "purnia", nameEn: "Purnia", nameHi: "पूर्णिया", defaultLaggi: 6.0 },
  { id: "araria", nameEn: "Araria", nameHi: "अररिया", defaultLaggi: 6.0 },
  { id: "supaul", nameEn: "Supaul", nameHi: "सुपौल", defaultLaggi: 6.0 },
  { id: "saharsa", nameEn: "Saharsa", nameHi: "सहरसा", defaultLaggi: 6.0 },
  { id: "khagaria", nameEn: "Khagaria", nameHi: "खगड़िया", defaultLaggi: 5.5 },
  { id: "east_champaran", nameEn: "East Champaran", nameHi: "पूर्वी चंपारण", defaultLaggi: 6.5 },
  { id: "west_champaran", nameEn: "West Champaran", nameHi: "पश्चिमी चंपारण", defaultLaggi: 6.5 },
  { id: "gopalganj", nameEn: "Gopalganj", nameHi: "गोपालगंज", defaultLaggi: 6.5 },
  { id: "siwan", nameEn: "Siwan", nameHi: "सीवान", defaultLaggi: 6.5 },
  { id: "saran", nameEn: "Saran", nameHi: "सारण", defaultLaggi: 6.5 },
  { id: "bhojpur", nameEn: "Bhojpur", nameHi: "भोजपुर", defaultLaggi: 5.5 },
  { id: "buxar", nameEn: "Buxar", nameHi: "बक्सर", defaultLaggi: 5.5 },
  { id: "rohtas", nameEn: "Rohtas", nameHi: "रोहतास", defaultLaggi: 5.5 },
  { id: "kaimur", nameEn: "Kaimur", nameHi: "कैमूर", defaultLaggi: 5.5 },
  { id: "aurangabad", nameEn: "Aurangabad", nameHi: "औरंगाबाद", defaultLaggi: 5.5 },
  { id: "nawada", nameEn: "Nawada", nameHi: "नवादा", defaultLaggi: 5.5 },
  { id: "jehanabad", nameEn: "Jehanabad", nameHi: "जहानाबाद", defaultLaggi: 5.5 },
  { id: "arwal", nameEn: "Arwal", nameHi: "अरवल", defaultLaggi: 5.5 },
  { id: "sheikhpura", nameEn: "Sheikhpura", nameHi: "शेखपुरा", defaultLaggi: 5.5 },
  { id: "lakhisarai", nameEn: "Lakhisarai", nameHi: "लखीसराय", defaultLaggi: 5.5 },
  { id: "jamui", nameEn: "Jamui", nameHi: "जमुई", defaultLaggi: 5.5 },
  { id: "banka", nameEn: "Banka", nameHi: "बांका", defaultLaggi: 5.5 }
];

export interface CalculationResult {
  bigha: number;
  katha: number;
  dhur: number;
  dhurki: number;
  sqFt: number;
  sqYard: number;
  acre: number;
  dismil: number;
}

/**
 * Calculates conversion values based on input Bigha and Laggi length (in cubits/हाथ).
 * 
 * In Bihar:
 * 1 হাত (cubit) = 1.5 feet (18 inches)
 * Laggi size in feet = Laggi in cubits * 1.5
 * 1 Dhur = (Laggi size in feet)^2
 * 1 Katha = 20 Dhur
 * 1 Bigha = 20 Katha = 400 Dhur
 * 1 Acre = 43,560 sq ft = 100 Dismil (Decimal)
 * 1 Dismil = 435.6 sq ft
 */
export function calculateFromBigha(bigha: number, laggi: number): CalculationResult {
  const laggiInFeet = laggi * 1.5;
  const dhurInSqFt = Math.pow(laggiInFeet, 2);
  const kathaInSqFt = dhurInSqFt * 20;
  const bighaInSqFt = kathaInSqFt * 20; // 1 Bigha = 20 Katha = 400 Dhur

  const totalSqFt = bigha * bighaInSqFt;
  
  return {
    bigha: bigha,
    katha: bigha * 20,
    dhur: bigha * 400,
    dhurki: bigha * 8000, // 1 Dhur = 20 Dhurki
    sqFt: Number(totalSqFt.toFixed(2)),
    sqYard: Number((totalSqFt / 9).toFixed(2)),
    acre: Number((totalSqFt / 43560).toFixed(4)),
    dismil: Number((totalSqFt / 435.6).toFixed(2))
  };
}

/**
 * Custom function that represents the exact hardcoded formula requested by the user:
 * "Bihar conversion: 1 Bigha = 20 Katha = 1,600 Dhur = 27,220 Sq Ft = 0.625 Acre"
 * (which represents 1 Bigha = 27,220 sq ft, 1 Katha = 1361 sq ft, 1 Acre = 43560 sq ft, Dismil = 435.6 sq ft)
 */
export function calculateFromBighaStandardRequested(bigha: number): CalculationResult {
  const totalSqFt = bigha * 27220; // Exact Sq Ft requested by user
  return {
    bigha: bigha,
    katha: bigha * 20,
    dhur: bigha * 1600, // 1600 Dhur as requested
    dhurki: bigha * 1600 * 20,
    sqFt: totalSqFt,
    sqYard: Number((totalSqFt / 9).toFixed(2)),
    acre: Number((totalSqFt / 43560).toFixed(4)),
    dismil: Number((totalSqFt / 435.6).toFixed(2))
  };
}
