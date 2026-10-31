export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Agentic AI & LLM Engineering",
    description: "Designing autonomous, goal-oriented multi-agent workflows and grounded reasoning pipelines.",
    skills: [
      "Agentic AI",
      "Multi-Agent Systems",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Model Context Protocol (MCP)",
      "LangGraph & Azure Agent Framework",
      "AI Tool Orchestration",
      "Prompt Engineering"
    ]
  },
  {
    category: "Backend & Software Engineering",
    description: "Developing scalable, asynchronous microservices and enterprise application integrations.",
    skills: [
      "Python",
      "FastAPI",
      "RESTful APIs",
      "Microservices Architecture",
      "Asynchronous Processing",
      "Enterprise API Integration",
      "Structured Data Processing",
      "WebSockets"
    ]
  },
  {
    category: "Knowledge & Retrieval Systems",
    description: "Structuring complex enterprise domains with graph databases and grounded retrieval mechanisms.",
    skills: [
      "Neo4j",
      "Knowledge Graphs",
      "Graph Modeling & Cypher",
      "RAG Pipelines",
      "Contextual Data Synchronization",
      "Grounded AI Applications"
    ]
  },
  {
    category: "Artificial Intelligence & Core ML",
    description: "Foundational machine learning, deep learning, and statistical modeling.",
    skills: [
      "Artificial Intelligence",
      "Generative AI",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Data Science",
      "Predictive Analytics"
    ]
  },
  {
    category: "Cloud, Infrastructure & Deployment",
    description: "Deploying containerized services and orchestrating cloud AI workloads.",
    skills: [
      "Microsoft Azure",
      "Azure AI Technologies",
      "Docker",
      "Containerization",
      "Cloud Application Development",
      "CI/CD Integration"
    ]
  },
  {
    category: "Frontend & Dynamic UI",
    description: "Crafting responsive, real-time client applications with stateful streaming interfaces.",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Motion for React / Framer Motion",
      "TypeScript",
      "Dynamic UI Integration"
    ]
  }
];
