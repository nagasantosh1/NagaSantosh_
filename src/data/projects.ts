export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  clientContext?: string;
  dates: string;
  status?: string;
  featured: boolean;
  isAcademic?: boolean;
  summary: string;
  problemStatement: string;
  architectureApproach: string;
  workflowSteps: string[];
  contributions: string[];
  technologies: string[];
  challengesAndDecisions: string[];
}

export const projects: Project[] = [
  {
    id: "invoice-automation",
    slug: "automation-invoice-generation-agentic-ai",
    title: "Automation Invoice Generation via Agentic AI",
    category: "Agentic AI / Enterprise Workflow Automation",
    clientContext: "Client project: IndiGo (Offsite)",
    dates: "March 2026 – Present",
    status: "Active Development",
    featured: true,
    summary: "A full-stack airline invoice-generation system using a multi-agent architecture to automate complex data extraction, validation, normalization, and invoice creation.",
    problemStatement: "Manual airline invoice generation across diverse passenger itineraries, multi-segment PNRs, and variable tax structures resulted in processing bottlenecks, data discrepancies, and extended cycle times for corporate and travel-partner accounts.",
    architectureApproach: "Implemented an orchestrated multi-agent pipeline where specialized agents handle parameter parsing, document extraction, business-rule validation, and data normalization, coupled with a high-throughput FastAPI backend and real-time WebSocket status streaming.",
    workflowSteps: [
      "Input Parameters (Multi-PNRs, Dates, Routes)",
      "Agent Orchestration & Natural Language Routing",
      "Automated Extraction & Schema Validation",
      "Financial Data Normalization & Tax Rules",
      "Dynamic Invoice Compilation & Persistent History",
      "Client-Side PDF Generation & Instant Download"
    ],
    contributions: [
      "Developed a multi-agent invoice generation workflow for automated data processing and invoice creation.",
      "Implemented natural-language batch processing using inputs such as multiple PNRs, date ranges, source, and destination.",
      "Built a backend using FastAPI with WebSocket integration for real-time processing updates and system logs.",
      "Designed an interactive frontend using React, Tailwind CSS, and Framer Motion with dynamic UI rendering.",
      "Implemented persistent invoice history with optimized database queries and processing logic to support high-volume generation.",
      "Integrated client-side PDF generation for instantaneous downloadable invoices with resilient input validation and error handling."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Multi-Agent Systems",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "WebSockets",
      "PDF Generation"
    ],
    challengesAndDecisions: [
      "Designed decoupled asynchronous workers to prevent blocking the main API thread during heavy batch invoice extraction.",
      "Established WebSocket-based state channels to give operators live feedback on multi-agent execution steps and parsing checkpoints."
    ]
  },
  {
    id: "web-check-in-engine",
    slug: "ai-knowledge-graph-driven-web-check-in-engine",
    title: "AI & Knowledge Graph-Driven Web Check-in Engine",
    category: "Agentic AI / Knowledge Graphs / Airline Technology",
    clientContext: "Client project: IndiGo (Offsite)",
    dates: "November 2025 – February 2026",
    status: "Live",
    featured: true,
    summary: "A multi-agent orchestration system designed to automate PNR retrieval, booking validation, and rule-based passenger eligibility using Neo4j knowledge graphs.",
    problemStatement: "Complex airline check-in workflows involve intricate regulatory rules, visa requirements, infant/wheelchair policies, and variable fare classes that traditional monolithic rule engines struggle to evaluate flexibly without high maintenance latency.",
    architectureApproach: "Integrated Azure Agent Framework with LangGraph and Neo4j knowledge graphs to represent passenger-flight-segment ontologies, using LLM-based reasoning and MCP tools for seamless data synchronization between legacy airline booking engines and AI services.",
    workflowSteps: [
      "User / Passenger Intent & PNR Request",
      "Multi-Agent Orchestration & Security Verification",
      "Neo4j Knowledge Graph Traversal & Rule Reasoning",
      "Authorized MCP Integrations with Legacy Booking Systems",
      "Contextual Eligibility Check & Dynamic Web Check-In Response"
    ],
    contributions: [
      "Designed and implemented multi-agent orchestration for PNR retrieval and booking validation.",
      "Built a rule-based eligibility engine using Neo4j knowledge graphs and LLM-based reasoning for passenger validation scenarios.",
      "Integrated Model Context Protocol (MCP) for contextual data retrieval and synchronization between legacy booking systems and AI-driven components.",
      "Engineered prompt-grounded validation tools ensuring 100% adherence to strict airline regulatory criteria without hallucination."
    ],
    technologies: [
      "Azure Agent Framework",
      "Python",
      "Neo4j",
      "Knowledge Graphs",
      "LLMs",
      "LangGraph",
      "MCP"
    ],
    challengesAndDecisions: [
      "Modelled intricate passenger-segment-seat eligibility rules as directed knowledge graph relationships to avoid slow multi-table SQL joins.",
      "Utilized MCP boundaries to ensure confidential passenger data remains sanitized and protected during agent reasoning cycles."
    ]
  },
  {
    id: "seat-upgrade-pdp",
    slug: "indigo-web-pdp-6eski-seat-upgrade-engine",
    title: "IndiGo Web PDP 6ESKI: Seat Upgrade Engine",
    category: "Backend Engineering / AI-Orchestrated Applications",
    clientContext: "Client project: IndiGo (Offsite)",
    dates: "November 2025 – Present",
    status: "Ongoing (Target: Dec 2026)",
    featured: true,
    summary: "Backend microservices and REST APIs supporting a dynamic seat-upgrade experience involving eligibility validation, pricing logic, and seat inventory synchronization.",
    problemStatement: "Seat upgrade availability fluctuates continuously across domestic and international sectors, necessitating low-latency eligibility calculations and pricing consistency across distributed web booking channels.",
    architectureApproach: "Constructed asynchronous FastAPI microservices with optimized data models, integrating directly into backend airline inventory layers to achieve fast response times during peak booking traffic.",
    workflowSteps: [
      "Seat Upgrade Request Validation",
      "Real-time Inventory & Eligibility Evaluation",
      "Dynamic Pricing Rule Calculation",
      "Legacy Booking System Lock & Synchronization",
      "Consistent State Response to Web Passenger"
    ],
    contributions: [
      "Developed backend microservices and high-performance REST APIs using FastAPI.",
      "Implemented eligibility validation and real-time inventory-related processing.",
      "Built asynchronous processing pipelines and optimized relational data models for concurrent passenger access.",
      "Integrated services with core airline booking systems, actively working toward rigorous data consistency standards."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "Asynchronous Processing",
      "Booking Systems Integration"
    ],
    challengesAndDecisions: [
      "Addressed concurrency race conditions when multiple passengers view the same high-demand seat tier simultaneously.",
      "Optimized query payload structures to minimize serialization overhead in high-throughput API endpoints."
    ]
  },
  {
    id: "flight-cancellation-analytics",
    slug: "flight-cancellation-analytics-dashboard",
    title: "Flight Cancellation Analytics Dashboard",
    category: "Data Analytics / Operational Insights",
    clientContext: "Client project: IndiGo (Offsite)",
    dates: "September 2026 – Present",
    status: "Active",
    featured: true,
    summary: "An analytics dashboard for visualizing flight cancellation data, identifying recurring operational bottlenecks, and translating operational datasets into structured KPIs.",
    problemStatement: "Airline operations generate vast streams of irregular-operations (IRROPS) data. Operations leads required intuitive, structured visibility into cancellation drivers across fleets, airports, and weather patterns.",
    architectureApproach: "Built a centralized operational KPI dashboard aggregating flight disruption metrics with multi-dimensional filtering, trend tracking, and executive decision-support visualization.",
    workflowSteps: [
      "Raw Operational Flight Log Ingestion",
      "Data Cleansing & Disruption Event Tagging",
      "KPI Aggregation (Weather, Technical, ATC, Crew)",
      "Interactive Dashboard Rendering & Multi-Factor Filtering",
      "Data-Driven Operational Insights for Leadership"
    ],
    contributions: [
      "Developed an analytics dashboard tailored for operational flight cancellation tracking.",
      "Transformed raw operational data feeds into structured performance indicators and clear KPI visualizations.",
      "Supported data-driven analysis to assist cross-functional airline operations teams.",
      "Collaborated with technical and operations stakeholders to continuously refine visualization accuracy and metric relevance."
    ],
    technologies: [
      "Python",
      "Data Analytics",
      "Operational Dashboards",
      "KPI Modeling",
      "Data Visualization",
      "Statistical Analysis"
    ],
    challengesAndDecisions: [
      "Standardized multi-source disruption classifications to present a unified view of cancellation causes across regional hubs.",
      "Ensured synthetic illustrative metrics were clearly differentiated from live operational feeds during staging reviews."
    ]
  },
  {
    id: "upgrade-to-stretch",
    slug: "indigo-web-upgrade-to-stretch",
    title: "IndiGo Web: Upgrade to Stretch",
    category: "Backend Engineering / Airline Applications",
    clientContext: "Client project: IndiGo (Offsite)",
    dates: "August 2025 – September 2025",
    status: "Live",
    featured: true,
    summary: "A web-based premium seat upgrade system enabling eligible passengers to seamlessly upgrade to Stretch seats during initial booking and web check-in.",
    problemStatement: "Introducing premium Stretch seating required modular eligibility checking and pricing computation that integrated cleanly into both the booking flow and existing web check-in pipelines.",
    architectureApproach: "Engineered scalable FastAPI microservices containerized with Docker and deployed on Microsoft Azure, featuring asynchronous integrations to airline PNR and seat-map services.",
    workflowSteps: [
      "Passenger PNR & Booking Query",
      "Stretch Seating Inventory Availability Check",
      "Dynamic Upgrade Fee Calculation",
      "Seat Map Reservation & Booking Lock",
      "Secure Transaction Confirmation & E-Ticket Update"
    ],
    contributions: [
      "Implemented eligibility and pricing logic based on booking data, seat availability, and commercial business rules.",
      "Integrated backend services with booking systems to retrieve relevant PNR and seat data reliably.",
      "Built FastAPI-based microservices with asynchronous processing for low-latency passenger response times.",
      "Containerized services using Docker and configured cloud deployment pipelines on Microsoft Azure."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Microservices",
      "Docker",
      "Microsoft Azure",
      "REST APIs"
    ],
    challengesAndDecisions: [
      "Containerized microservices with lightweight Alpine images to ensure rapid autoscaling during promotional fare campaigns.",
      "Designed fault-tolerant fallback modes to preserve standard seat selection if external pricing services encounter latency spikes."
    ]
  },
  {
    id: "face-recognition-pca",
    slug: "pca-with-ann-algorithm-face-recognition",
    title: "Implementation of PCA with ANN for Face Recognition",
    category: "Machine Learning / Computer Vision / Academic Project",
    dates: "March 2024 – May 2024",
    status: "Completed",
    featured: false,
    isAcademic: true,
    summary: "An academic computer vision research project exploring Principal Component Analysis (PCA) for dimensionality reduction and Artificial Neural Networks (ANN) for facial classification.",
    problemStatement: "High-dimensional raw image data presents extreme computational complexity and susceptibility to the curse of dimensionality when performing facial recognition across variable lighting conditions.",
    architectureApproach: "Extracted eigenfaces through covariance matrix decomposition, projected facial vectors onto lower-dimensional eigenspaces, and trained a multi-layer feedforward ANN for identity classification.",
    workflowSteps: [
      "Facial Image Normalization & Grayscale Conversion",
      "Covariance Matrix Calculation & Eigenvector Decomposition",
      "Dimensionality Reduction via Top Principal Components (Eigenfaces)",
      "Multi-Layer Artificial Neural Network Training",
      "Subject Classification & Recognition Evaluation"
    ],
    contributions: [
      "Explored PCA for dimensionality reduction and compact representation of facial image datasets.",
      "Examined covariance-based feature extraction and the mathematical formulation of eigenfaces.",
      "Investigated multi-class facial identification using an Artificial Neural Network architecture.",
      "Studied the crucial role of input preparation, illumination normalization, and feature vector representation."
    ],
    technologies: [
      "Python",
      "Computer Vision",
      "Machine Learning",
      "PCA (Eigenfaces)",
      "Artificial Neural Networks (ANN)",
      "NumPy",
      "Scikit-Learn"
    ],
    challengesAndDecisions: [
      "Balanced the trade-off between the number of retained principal components and classification accuracy to optimize training time.",
      "Emphasized rigorous pre-processing (histogram equalization and cropping) to reduce sensitivity to lighting variations."
    ]
  },
  {
    id: "graduate-admission-prediction",
    slug: "graduate-admission-prediction-ml",
    title: "Graduate Admission Prediction Using Machine Learning",
    category: "Machine Learning / Data Science / Predictive Analytics",
    dates: "February 2024 – May 2024",
    status: "Completed",
    featured: false,
    isAcademic: true,
    summary: "An academic predictive analytics project evaluating machine learning models to estimate graduate admission probabilities based on applicant academic profiles.",
    problemStatement: "Prospective graduate applicants face uncertainty regarding university admission criteria, requiring predictive tools to model the relationship between academic metrics and admission decisions.",
    architectureApproach: "Structured an end-to-end data pipeline from feature engineering (GRE, TOEFL, CGPA, research experience) to model training, evaluation, and interactive prediction output.",
    workflowSteps: [
      "Applicant Profile Ingestion (GRE, TOEFL, CGPA, SOP, LOR)",
      "Feature Scaling, Correlation Analysis & Collinearity Checks",
      "Multi-Model Regression & Classification Evaluation",
      "Model Validation & Performance Benchmarking",
      "Admission Probability Estimation Interface"
    ],
    contributions: [
      "Explored applicant feature dynamics such as standardized test scores, undergraduate GPA, and university ratings.",
      "Evaluated multiple supervised machine learning approaches (Linear Regression, Random Forests, Support Vector Machines).",
      "Applied software engineering principles including modular architecture, UML diagrams, and structured data validation.",
      "Implemented comprehensive testing methodologies spanning unit, integration, and functional validation."
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Predictive Analytics",
      "Data Science",
      "Pandas",
      "Scikit-Learn",
      "Software Engineering & UML"
    ],
    challengesAndDecisions: [
      "Identified undergraduate CGPA and GRE scores as primary predictive weights while accounting for qualitative factors like research experience.",
      "Framed outcomes as probability estimates rather than absolute guarantees to uphold ethical prediction standards."
    ]
  }
];
