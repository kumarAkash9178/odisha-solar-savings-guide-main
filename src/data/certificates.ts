
export interface Certificate {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  dateIssued: string;
  issuedBy: string;
  certificateNumber?: string;
}

export const certificates: Certificate[] = [
  {
    id: "firm-registration",
    title: "Firm Registration Certificate",
    description: "Official acknowledgment of M/S CLANS (CLEAN AND STERILE) firm registration",
    image: "/lovable-uploads/04583dab-f1a2-436b-988f-44187a25e699.png",
    category: "Registration",
    dateIssued: "2020",
    issuedBy: "Office of Inspector-General Registration-cum-Registrar of Firms, Odisha",
    certificateNumber: "7202000780"
  },
  {
    id: "udyam-registration",
    title: "UDYAM Registration Certificate",
    description: "MSME registration certificate for manufacturing enterprise",
    image: "/lovable-uploads/fed72e8b-1aea-46cd-b6d1-4fb28977050b.png",
    category: "MSME",
    dateIssued: "2021",
    issuedBy: "Ministry of Micro, Small and Medium Enterprises",
    certificateNumber: "UDYAM-OD-07-0005701"
  },
  {
    id: "gst-registration",
    title: "GST Registration Certificate",
    description: "Goods and Services Tax registration certificate",
    image: "/lovable-uploads/0fbbec2c-4633-428a-985b-24e870a2a830.png",
    category: "Tax Registration",
    dateIssued: "2021",
    issuedBy: "Government of India",
    certificateNumber: "21AAPFC4632F1ZR"
  },
  {
    id: "trademark-registration",
    title: "Trademark Registration Certificate",
    description: "Trademark registration for CLANS elevator cabins and accessories",
    image: "/lovable-uploads/2aad3b89-1331-4ca4-a997-eb50ed36733e.png",
    category: "Intellectual Property",
    dateIssued: "2024",
    issuedBy: "Trade Marks Registry, Government of India",
    certificateNumber: "6354545"
  },
  {
    id: "iso-9001",
    title: "ISO 9001:2015 Certificate",
    description: "Quality Management System certification for design, manufacturing, and assembly",
    image: "/lovable-uploads/65f6610a-887b-45a1-9fd8-ec9603748e6b.png",
    category: "Quality Management",
    dateIssued: "2021",
    issuedBy: "International Standards Certification",
    certificateNumber: "QMS/092020/7024"
  },
  {
    id: "compliance-certificate",
    title: "Certificate of Compliance",
    description: "Low Voltage Directive compliance for manufacturing standards",
    image: "/lovable-uploads/8546f280-7a5e-4916-b46a-c91f5e7c5804.png",
    category: "Compliance",
    dateIssued: "2021",
    issuedBy: "QVA Certification",
    certificateNumber: "QVA-CLNS-21-184707"
  },
  {
    id: "zed-certification",
    title: "ZED Certification",
    description: "Zero Defect Zero Effect certification for sustainable manufacturing",
    image: "/lovable-uploads/041b5a2e-31b1-4c4a-9b3c-84486b51ea39.png",
    category: "Sustainability",
    dateIssued: "2022",
    issuedBy: "Ministry of Micro, Small & Medium Enterprises",
    certificateNumber: "ZED_29122022_24170"
  }
];
