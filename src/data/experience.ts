export interface Experience {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  dates: string;
  location?: string;
  clientContext?: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "aionos",
    role: "Associate Software Engineer – AI/ML",
    company: "AIONOS",
    employmentType: "Full-time",
    dates: "August 2025 – Present",
    clientContext: "Client project: IndiGo",
    description: [
      "Developed Python-based backend services and RESTful APIs using FastAPI for enterprise applications and AI-driven airline workflows.",
      "Built and integrated application workflows involving enterprise APIs, structured data, and business logic.",
      "Contributed to AI-enabled workflows, multi-agent systems, and backend integration with legacy enterprise systems.",
      "Engineered reliable, maintainable microservices with asynchronous processing and strict data consistency standards."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Agentic AI",
      "Neo4j",
      "Microsoft Azure",
      "RESTful APIs",
      "Docker",
      "Microservices"
    ]
  },
  {
    id: "internship-studio",
    role: "Data Science & Machine Learning – Other",
    company: "Internship Studio",
    employmentType: "Internship",
    dates: "January 2025 – June 2025",
    description: [
      "Applied machine learning methodologies and statistical algorithms to analyze structured datasets.",
      "Constructed predictive models, executed data cleaning pipelines, and derived analytical insights.",
      "Collaborated on practical machine learning exercises focusing on model evaluation and data validation."
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Data Science",
      "Pandas",
      "Scikit-Learn",
      "Data Visualization"
    ]
  }
];
