export type ContactDetails = {
  companyName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  officeHours: string;
  socialMedia: {
    facebook: string;

  };
};

export const companyDetails: ContactDetails = {
  companyName: "Royal Sea Food International",
  tagline: "Premium Ocean Harvests. Trusted Worldwide.",
  email: "royalseafoodint@gmail.com",
  description:
    "Royal Seafood International is a leading exporter of premium fresh and frozen seafood products. We are committed to delivering the highest quality seafood sourced sustainably from the finest fishing grounds around the world. Our extensive product range includes shrimp, fish, crab, and other seafood delicacies, catering to importers, distributors, and retailers globally.",
  phone: "+8801927670156",
  address: "Khan Tower, M A Majid Soroni, Khulna, Bangladesh",
  country: "Bangladesh",
  officeHours: "Sunday - Thursday",
  socialMedia: {
    facebook: "https://www.facebook.com/profile.php?id=61580200603087"
  },
};


