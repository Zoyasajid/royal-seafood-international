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
  companyName: "Seafood International Exports",
  tagline: "Premium Ocean Harvests. Trusted Worldwide.",
  description:
    "Seafood International Exports is a specialized trader and consolidator of high-quality fresh and frozen seafood. From certified aquaculture farms to responsible wild-caught fisheries, we connect reliable producers with importers, distributors, and retailers in more than 40 countries.",
  email: "royalseafoodint@gmail.com",
  phone: "+8801927670156",
  address: "Khan Tower, M A Majid Soroni, Khulna, Bangladesh",
  country: "Bangladesh",
  officeHours: "09:00 AM – 19.00 PM Saturday- Thursday",
  socialMedia: {
    facebook: "https://www.facebook.com/profile.php?id=61580200603087"
  },
};


