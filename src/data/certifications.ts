export interface Certification {
  id: string;
  name: string;
  issuer: string;
  validity: string;
  credentialUrl: string;
  badgeCode?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export const certifications: Certification[] = [
  {
    id: "azure-ai-engineer",
    name: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    validity: "January 2026 – January 2027",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/veldandaNagaSantoshMohan-6080/E3925D5D810561DA?sharingId=3F1A32D15A3A3694"
  },
  {
    id: "google-analytics",
    name: "Google Analytics Certification",
    issuer: "Google",
    validity: "February 2025 – February 2026",
    credentialUrl: "https://skillshop.credential.net/9285984c-2b65-4c68-8602-3ebb672174ae#acc.3TACjhVS"
  }
];

export const educationList: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "B.Tech in Computer Science and Engineering (CSE)",
    institution: "Bharat Institute of Engineering & Technology, Hyderabad",
    period: "2021 – 2024",
    details: "Full-time undergraduate engineering program focused on foundational computing, data structures, algorithms, and software development."
  },
  {
    id: "diploma-ee",
    degree: "Diploma in Electrical Engineering",
    institution: "TRR College of Technology, Hyderabad",
    period: "2018 – 2021",
    details: "Full-time polytechnic diploma program covering electrical engineering principles, circuit design, and instrumentation."
  },
  {
    id: "class-x",
    degree: "Class X / Secondary School Certificate",
    institution: "Telangana State Board",
    period: "2018",
    details: "Secondary school education completed in Telangana."
  }
];
