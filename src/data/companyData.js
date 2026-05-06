export const products = [
  {
    id: "ai-ml-platform",
    name: "AI and Machine Learning Development Platforms",
    shortDesc: "End-to-end ML lifecycle management.",
    tagline: "Unleash the Power of Machine Intelligence",
    overview: "A comprehensive platform to build, train, deploy, and scale AI models securely.",
    industries: ["Finance", "Healthcare", "Manufacturing"],
    howItWorks: [
      "Data Ingestion & Cleaning",
      "Model Training with Auto-scaling",
      "Deployment to Edge/Cloud",
      "Continuous Monitoring"
    ],
    coreFunctions: ["AutoML", "Model Versioning", "Distributed Training"],
    technologies: ["TensorFlow", "PyTorch", "Kubernetes"],
    benefits: [
      { title: "Performance", desc: "Accelerates model training by up to 5x." },
      { title: "Security", desc: "Enterprise-grade data encryption and privacy." },
      { title: "Scalability", desc: "Scales seamlessly from 1 to 10,000+ nodes." },
      { title: "Cost efficiency", desc: "Optimized resource utilization reduces cloud costs." }
    ],
    futureGrowth: "Fully autonomous model generation and real-time self-healing AI networks.",
    icon: "BrainCircuit",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "devops-cicd",
    name: "DevOps and CI/CD Tools",
    shortDesc: "Automated, secure, and rapid deployment pipelines.",
    tagline: "Accelerate Your Delivery Velocity",
    overview: "Next-gen CI/CD tools emphasizing extreme speed and zero-downtime deployments.",
    industries: ["Telecommunication", "Retail", "Software Development"],
    howItWorks: [
      "Code Commit Trigger",
      "Automated Testing & Security Scanning",
      "Container Image Build",
      "Deployment to Staging/Production"
    ],
    coreFunctions: ["Pipeline as Code", "Canary Deployments", "Secret Management"],
    technologies: ["Docker", "Kubernetes", "Go"],
    benefits: [
      { title: "Performance", desc: "Sub-minute deployment cycles." },
      { title: "Security", desc: "Shift-left vulnerability scanning." },
      { title: "Scalability", desc: "Handles thousands of parallel builds." },
      { title: "Cost efficiency", desc: "Serverless build executors." }
    ],
    futureGrowth: "AI-predicted code failure analysis before deployment.",
    icon: "Rocket",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "cyber-threat-intel",
    name: "Cybersecurity Threat Intelligence Platforms",
    shortDesc: "Predict and mitigate cyber threats in real-time.",
    tagline: "Stay Ahead of the Next Attack",
    overview: "An AI-powered defensive engine that proactively hunts network anomalies and neutralizes threats.",
    industries: ["Defence Technology", "Finance", "Energy & Utilities"],
    howItWorks: [
      "Global Threat Feed Ingestion",
      "Behavioral Anomaly Detection",
      "Automated Quarantine protocols",
      "Incident Reporting"
    ],
    coreFunctions: ["Zero-Day Detection", "Network Traffic Analysis", "Endpoint Security"],
    technologies: ["AI Anomaly Detection", "Blockchain Verification"],
    benefits: [
      { title: "Performance", desc: "Millisecond threat neutralization." },
      { title: "Security", desc: "Military-grade network lockdown." },
      { title: "Scalability", desc: "Protects millions of endpoints globally." },
      { title: "Cost efficiency", desc: "Dramatically lowers breach recovery costs." }
    ],
    futureGrowth: "Quantum encryption resilience and autonomous retaliatory defense networks.",
    icon: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "cloud-native-app-platform",
    name: "Cloud-Native Application Platforms",
    shortDesc: "Build and run scalable apps in modern dynamic environments.",
    tagline: "The Foundation for Modern Software",
    overview: "A unified platform for microservices, serverless functions, and containerized apps.",
    industries: ["Software Development", "Retail", "Logistics"],
    howItWorks: [
      "Microservice Orchestration",
      "Service Mesh Integration",
      "Distributed Tracing",
      "Automated Health Checks"
    ],
    coreFunctions: ["Multi-cloud capability", "Serverless execution", "Traffic routing"],
    technologies: ["Kubernetes", "Istio", "Envoy"],
    benefits: [
      { title: "Performance", desc: "Near-instant startup times." },
      { title: "Security", desc: "Default zero-trust architecture." },
      { title: "Scalability", desc: "Infinite horizontal scaling." },
      { title: "Cost efficiency", desc: "Pay-as-you-go down to the millisecond." }
    ],
    futureGrowth: "Hyper-localized edge deployments masking backend complexity.",
    icon: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "rpa-software",
    name: "Robotic Process Automation Software",
    shortDesc: "Automate repetitive, rule-based business processes.",
    tagline: "Empower Your Workforce, Automate the Rest",
    overview: "Intelligent software bots that integrate with existing systems to automate mundane tasks.",
    industries: ["Finance", "Healthcare", "Manufacturing"],
    howItWorks: [
      "Process Discovery",
      "Bot Scripting & Training",
      "System Integration",
      "Automated Execution & Logging"
    ],
    coreFunctions: ["Screen Scraping", "API Integration", "Cognitive Automation"],
    technologies: ["Computer Vision", "NLP", "Python"],
    benefits: [
      { title: "Performance", desc: "24/7 continuous operation." },
      { title: "Security", desc: "Auditable and compliant execution trails." },
      { title: "Scalability", desc: "Instantly deploy thousands of virtual workers." },
      { title: "Cost efficiency", desc: "Reduces operational overhead by up to 60%." }
    ],
    futureGrowth: "Autonomous process discovery and self-healing automation workflows.",
    icon: "Bot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "edge-iot-platforms",
    name: "Edge Computing and IoT Platforms",
    shortDesc: "Process data closer to where it's generated.",
    tagline: "Intelligence at the Edge of the Network",
    overview: "A decentralized computing paradigm bridging IoT devices with cloud analytics.",
    industries: ["Manufacturing", "Automotive", "Agriculture"],
    howItWorks: [
      "Sensor Data Collection",
      "Local Processing & Filtering",
      "Real-time Decision Making",
      "Cloud Synchronization"
    ],
    coreFunctions: ["Device Management", "Edge Analytics", "Offline Operation"],
    technologies: ["MQTT", "Edge AI", "5G"],
    benefits: [
      { title: "Performance", desc: "Ultra-low latency responses." },
      { title: "Security", desc: "Data processed locally, minimizing transmission risks." },
      { title: "Scalability", desc: "Handles millions of concurrent device connections." },
      { title: "Cost efficiency", desc: "Reduces bandwidth and cloud storage costs." }
    ],
    futureGrowth: "Swarm intelligence and fully autonomous local networks.",
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "quantum-dev-platform",
    name: "Quantum Computing Development Platforms",
    shortDesc: "Develop and simulate quantum algorithms.",
    tagline: "The Next Era of Computational Power",
    overview: "A cloud-based environment for programming quantum computers and running complex simulations.",
    industries: ["Pharmaceutical", "Chemical", "Finance"],
    howItWorks: [
      "Algorithm Design",
      "Quantum Simulation",
      "Hardware Execution",
      "Result Analysis"
    ],
    coreFunctions: ["Circuit Composition", "Error Mitigation", "Hybrid Quantum-Classical Execution"],
    technologies: ["Qiskit", "Superconducting Qubits"],
    benefits: [
      { title: "Performance", desc: "Solves intractable problems in minutes." },
      { title: "Security", desc: "Quantum-safe encryption development." },
      { title: "Scalability", desc: "Access to next-gen multiqubit systems." },
      { title: "Cost efficiency", desc: "Cloud access eliminates hardware procurement costs." }
    ],
    futureGrowth: "Fault-tolerant quantum computing and widespread commercial integration.",
    icon: "Hexagon",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "explainable-ai",
    name: "Explainable AI Systems",
    shortDesc: "Transparent and interpretable AI models.",
    tagline: "AI You Can Understand and Trust",
    overview: "Tools and frameworks to ensure AI decisions are transparent, auditable, and unbiased.",
    industries: ["Finance", "Healthcare", "Defence Technology"],
    howItWorks: [
      "Model Import",
      "Feature Attribution Analysis",
      "Bias Detection",
      "Explanation Generation"
    ],
    coreFunctions: ["LIME/SHAP Integration", "Counterfactual Explanations", "Compliance Reporting"],
    technologies: ["Python", "XAI Frameworks"],
    benefits: [
      { title: "Performance", desc: "Maintains model accuracy while adding transparency." },
      { title: "Security", desc: "Identifies vulnerabilities in model logic." },
      { title: "Scalability", desc: "Applies to diverse model architectures." },
      { title: "Cost efficiency", desc: "Reduces regulatory compliance overhead." }
    ],
    futureGrowth: "Standardized causal inference and universal AI regulation compliance.",
    icon: "Eye",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "big-data-analytics",
    name: "Big Data Analytics Frameworks",
    shortDesc: "Extract insights from massive datasets.",
    tagline: "Turn Data into Strategic Advantage",
    overview: "Distributed computing frameworks for processing, analyzing, and visualizing petabytes of data.",
    industries: ["Retail", "Telecommunication", "Energy & Utilities"],
    howItWorks: [
      "Data Ingestion Pipeline",
      "Distributed Storage",
      "Parallel Processing",
      "Interactive Visualization"
    ],
    coreFunctions: ["Batch Processing", "Stream Analytics", "Data Warehousing"],
    technologies: ["Apache Spark", "Hadoop", "Kafka"],
    benefits: [
      { title: "Performance", desc: "In-memory processing for rapid queries." },
      { title: "Security", desc: "Granular access controls and data masking." },
      { title: "Scalability", desc: "Elastically scales to handle expanding data lakes." },
      { title: "Cost efficiency", desc: "Optimized storage tiering." }
    ],
    futureGrowth: "Real-time global data fabrics and automated insight generation.",
    icon: "Database",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "chatbot-nlp",
    name: "Chatbot & NLP Tools",
    shortDesc: "Conversational AI and language processing.",
    tagline: "Human-Like Interaction at Scale",
    overview: "Platforms for building intelligent virtual assistants and analyzing textual data.",
    industries: ["Customer Service", "Healthcare", "Education"],
    howItWorks: [
      "Intent Recognition",
      "Entity Extraction",
      "Dialogue Management",
      "Response Generation"
    ],
    coreFunctions: ["Multilingual Support", "Sentiment Analysis", "Omnichannel Integration"],
    technologies: ["Transformers", "Large Language Models"],
    benefits: [
      { title: "Performance", desc: "Instantaneous responses to complex queries." },
      { title: "Security", desc: "PII redaction and secure conversation storage." },
      { title: "Scalability", desc: "Handles infinite simultaneous conversations." },
      { title: "Cost efficiency", desc: "Drastically reduces support center costs." }
    ],
    futureGrowth: "Emotionally intelligent avatars and hyper-personalized interactions.",
    icon: "MessageSquare",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ar-dev-kits",
    name: "Augmented Reality Development Kits",
    shortDesc: "Build immersive AR experiences.",
    tagline: "Bridge the Digital and Physical Worlds",
    overview: "SDKs and tools for creating spatial computing applications and interactive overlays.",
    industries: ["Retail", "Education", "Manufacturing"],
    howItWorks: [
      "Environment Mapping",
      "Object Recognition",
      "3D Rendering",
      "Spatial Interaction"
    ],
    coreFunctions: ["Plane Detection", "Image Tracking", "Occlusion"],
    technologies: ["ARCore", "ARKit", "Unity"],
    benefits: [
      { title: "Performance", desc: "High frame-rate rendering on mobile devices." },
      { title: "Security", desc: "Privacy-preserving sensor data processing." },
      { title: "Scalability", desc: "Cross-platform deployment capabilities." },
      { title: "Cost efficiency", desc: "Accelerates training and reduces prototyping costs." }
    ],
    futureGrowth: "Persistent global AR layers and wearable neural interfaces.",
    icon: "Glasses",
    image: "https://bluewhaleapps.com/wp-content/uploads/2019/05/AR-VR-Tools-Banner.jpg"
  },
  {
    id: "blockchain-smart-contracts",
    name: "Blockchain & Smart Contract Platforms",
    shortDesc: "Decentralized applications and trustless networks.",
    tagline: "Secure, Transparent, and Immutable",
    overview: "Infrastructure for developing distributed ledgers and self-executing agreements.",
    industries: ["Finance", "Logistics", "Healthcare"],
    howItWorks: [
      "Network Consensus",
      "Transaction Validation",
      "Smart Contract Execution",
      "Ledger Update"
    ],
    coreFunctions: ["Tokenization", "Decentralized Identity", "Consensus Mechanisms"],
    technologies: ["Ethereum", "Hyperledger", "Rust"],
    benefits: [
      { title: "Performance", desc: "High throughput Layer-2 solutions." },
      { title: "Security", desc: "Cryptographically secured data integrity." },
      { title: "Scalability", desc: "Interoperable multi-chain architectures." },
      { title: "Cost efficiency", desc: "Eliminates intermediaries and associated fees." }
    ],
    futureGrowth: "Seamless cross-chain interoperability and quantum-resistant ledgers.",
    icon: "Link",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "cyber-vuln-management",
    name: "Cybersecurity Vulnerability Management",
    shortDesc: "Identify and patch system vulnerabilities.",
    tagline: "Fortify Your Digital Infrastructure",
    overview: "Continuous scanning and assessment tools to discover and remediate security flaws.",
    industries: ["Defence Technology", "Finance", "Energy & Utilities"],
    howItWorks: [
      "Asset Discovery",
      "Vulnerability Scanning",
      "Risk Prioritization",
      "Patch Deployment"
    ],
    coreFunctions: ["Automated Patching", "Compliance Audits", "Attack Surface Management"],
    technologies: ["CVSS", "Cloud Security Posture Management"],
    benefits: [
      { title: "Performance", desc: "Non-intrusive continuous scanning." },
      { title: "Security", desc: "Proactive mitigation against zero-day exploits." },
      { title: "Scalability", desc: "Covers hybrid and multi-cloud environments." },
      { title: "Cost efficiency", desc: "Prevents costly data breaches and downtime." }
    ],
    futureGrowth: "AI-driven automated self-patching and predictive threat modeling.",
    icon: "Lock",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "api-management",
    name: "API Management Platforms",
    shortDesc: "Create, secure, and monitor APIs.",
    tagline: "The Connective Tissue of Modern Digital Enterprises",
    overview: "Centralized control over API lifecycles, enabling secure and efficient integrations.",
    industries: ["Software Development", "Retail", "Telecommunication"],
    howItWorks: [
      "API Design & Mocking",
      "Gateway Configuration",
      "Authentication & Rate Limiting",
      "Analytics Monitoring"
    ],
    coreFunctions: ["Developer Portal", "Throttling", "API Monetization"],
    technologies: ["GraphQL", "REST", "gRPC"],
    benefits: [
      { title: "Performance", desc: "Low-latency API gateway routing." },
      { title: "Security", desc: "Robust OAuth and API key management." },
      { title: "Scalability", desc: "Handles massive API request volumes." },
      { title: "Cost efficiency", desc: "Centralized management reduces redundancy." }
    ],
    futureGrowth: "Autonomous API discovery and AI-generated integrations.",
    icon: "Network",
    image: "https://gotapi.com/wp-content/uploads/2023/10/api_mgt.png"
  },
  {
    id: "containerization-orchestration",
    name: "Containerization & Orchestration",
    shortDesc: "Manage and deploy containerized applications.",
    tagline: "Portability and Scale On-Demand",
    overview: "Tools for packaging applications and automating their deployment, scaling, and management.",
    industries: ["Software Development", "Logistics", "Entertainment and Media"],
    howItWorks: [
      "Image Building",
      "Cluster Provisioning",
      "Workload Scheduling",
      "Automated Scaling"
    ],
    coreFunctions: ["Load Balancing", "Self-Healing", "Rolling Updates"],
    technologies: ["Docker", "Kubernetes", "Helm"],
    benefits: [
      { title: "Performance", desc: "Optimized resource density." },
      { title: "Security", desc: "Isolated execution environments." },
      { title: "Scalability", desc: "Dynamic provisioning based on load." },
      { title: "Cost efficiency", desc: "Maximizes infrastructure utilization." }
    ],
    futureGrowth: "Serverless container execution and seamless multi-cloud federation.",
    icon: "Box",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "predictive-analytics-bi",
    name: "Predictive Analytics & BI Tools",
    shortDesc: "Forecast future trends with data intelligence.",
    tagline: "See the Future of Your Business",
    overview: "Advanced Business Intelligence platforms leveraging historical data to predict future outcomes.",
    industries: ["Retail", "Finance", "Manufacturing"],
    howItWorks: [
      "Data Aggregation",
      "Statistical Modeling",
      "Machine Learning Forecasting",
      "Interactive Dashboarding"
    ],
    coreFunctions: ["Data Visualization", "Scenario Modeling", "Anomaly Detection"],
    technologies: ["Python", "SQL", "Tableau/PowerBI architectures"],
    benefits: [
      { title: "Performance", desc: "Real-time analytical processing." },
      { title: "Security", desc: "Role-based access to sensitive forecasts." },
      { title: "Scalability", desc: "Processes massive historical datasets." },
      { title: "Cost efficiency", desc: "Optimizes supply chains and marketing spends." }
    ],
    futureGrowth: "Prescriptive analytics recommending direct autonomous actions.",
    icon: "BarChart",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "virtualization-software",
    name: "Virtualization Software",
    shortDesc: "Abstract and manage hardware resources.",
    tagline: "Maximize Your Infrastructure Efficiency",
    overview: "Hypervisors and management tools for creating virtual machines and virtualized networks.",
    industries: ["IT Infrastructure", "Education", "Telecommunication"],
    howItWorks: [
      "Hardware Abstraction",
      "VM Provisioning",
      "Resource Allocation",
      "Migration & Backup"
    ],
    coreFunctions: ["Hypervisor Management", "Live Migration", "Virtual SAN"],
    technologies: ["KVM", "VMware", "Hyper-V"],
    benefits: [
      { title: "Performance", desc: "Near bare-metal execution speeds." },
      { title: "Security", desc: "Strong isolation between virtual environments." },
      { title: "Scalability", desc: "Rapid provisioning of new environments." },
      { title: "Cost efficiency", desc: "Reduces physical hardware footprint." }
    ],
    futureGrowth: "Deep integration with container runtimes and edge virtualization.",
    icon: "Server",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "network-security-systems",
    name: "Network Security Systems",
    shortDesc: "Protect your network infrastructure.",
    tagline: "An Impenetrable Defensive Perimeter",
    overview: "Comprehensive solutions including firewalls, IDS/IPS, and VPNs to secure data in transit.",
    industries: ["Defence Technology", "Finance", "Healthcare"],
    howItWorks: [
      "Traffic Monitoring",
      "Intrusion Detection",
      "Policy Enforcement",
      "Threat Mitigation"
    ],
    coreFunctions: ["Next-Gen Firewall", "DDoS Protection", "Secure Remote Access"],
    technologies: ["Deep Packet Inspection", "Zero Trust Architectures"],
    benefits: [
      { title: "Performance", desc: "High-throughput traffic inspection." },
      { title: "Security", desc: "Comprehensive protection against external and internal threats." },
      { title: "Scalability", desc: "Adapts to expanding network perimeters." },
      { title: "Cost efficiency", desc: "Consolidated security appliances reduce complexity." }
    ],
    futureGrowth: "AI-driven autonomous response to novel network attacks.",
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "data-privacy-compliance",
    name: "Data Privacy & Compliance Software",
    shortDesc: "Ensure regulatory adherence and data protection.",
    tagline: "Trust Through Transparency and Protection",
    overview: "Tools to manage consent, map sensitive data, and ensure compliance with global regulations.",
    industries: ["Healthcare", "Finance", "Pharmaceutical"],
    howItWorks: [
      "Data Discovery & Mapping",
      "Consent Management",
      "Risk Assessment",
      "Compliance Reporting"
    ],
    coreFunctions: ["Automated Data Subject Requests", "PIA/DPIA Automation", "Vendor Risk Management"],
    technologies: ["Data Governance Frameworks", "Encryption Models"],
    benefits: [
      { title: "Performance", desc: "Streamlines compliance workflows." },
      { title: "Security", desc: "Enforces strict access and anonymization policies." },
      { title: "Scalability", desc: "Adapts to new emerging global regulations." },
      { title: "Cost efficiency", desc: "Avoids severe regulatory fines." }
    ],
    futureGrowth: "Fully automated global compliance synchronization.",
    icon: "FileCheck",
    image: "https://images.unsplash.com/photo-1643962577583-a4c880a109ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "autonomous-systems",
    name: "Autonomous Systems Platforms",
    shortDesc: "Control and manage self-operating systems.",
    tagline: "The Brains Behind Next-Gen Robotics",
    overview: "Software architectures for drones, autonomous vehicles, and robotic ecosystems.",
    industries: ["Automotive", "Aerospace", "Logistics"],
    howItWorks: [
      "Sensor Fusion",
      "Path Planning",
      "Real-time Control",
      "Fleet Management"
    ],
    coreFunctions: ["Simultaneous Localization and Mapping (SLAM)", "Collision Avoidance", "Swarm Coordination"],
    technologies: ["ROS (Robot Operating System)", "Computer Vision"],
    benefits: [
      { title: "Performance", desc: "Millisecond-level reaction times." },
      { title: "Security", desc: "Fail-safe mechanisms and redundant control systems." },
      { title: "Scalability", desc: "Manages vast fleets of autonomous units." },
      { title: "Cost efficiency", desc: "Dramatically lowers logistics and operational costs." }
    ],
    futureGrowth: "Level 5 full autonomy across all transport and industrial sectors.",
    icon: "Navigation",
    image: "https://images.unsplash.com/photo-1677756041243-08ac39882525?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const industries = [
  { name: "Aerospace", icon: "🚀", position: "top" },
  { name: "Agriculture", icon: "🌾", position: "left" },
  { name: "Automotive", icon: "🚗", position: "right" },
  { name: "Chemical", icon: "⚗️", position: "top" },
  { name: "Defence Technology", icon: "🛡️", position: "left" },
  { name: "Education", icon: "🎓", position: "top" },
  { name: "Energy & Utilities", icon: "⚡", position: "right" },
  { name: "Entertainment and Media", icon: "🎬", position: "top" },
  { name: "Finance", icon: "💰", position: "left" },
  { name: "Food Technology", icon: "🍔", position: "right" },
  { name: "Healthcare", icon: "🏥", position: "top" },
  { name: "Infrastructure", icon: "🏗️", position: "left" },
  { name: "Logistics", icon: "📦", position: "right" },
  { name: "Manufacturing", icon: "🏭", position: "top" },
  { name: "Ocean Technology", icon: "🌊", position: "left" },
  { name: "Oil and Gas", icon: "🛢️", position: "right" },
  { name: "Pharmaceutical", icon: "💊", position: "top" },
  { name: "Retail", icon: "🛍️", position: "left" },
  { name: "Sports Technology", icon: "⚽", position: "right" },
  { name: "Technology", icon: "🖥️", position: "left" },
  { name: "Telecommunication", icon: "📡", position: "top" },
  { name: "Textile", icon: "🧵", position: "left" },
  { name: "Transportation", icon: "🚌", position: "right" },
  { name: "Travel", icon: "✈️", position: "top" },

];

export const services = [
  {
    id: "software-development",
    title: "Software Development",
    desc: "TechBrain Networks offers a full range of software development services, specializing in creating innovative and customized solutions for businesses across multiple industries. We develop robust, scalable, and secure applications for web, mobile, and desktop platforms, ensuring they are tailored to meet the unique requirements of each client.",
    image: "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "hardware-engineering",
    title: "Hardware Engineering",
    desc: "TechBrain Networks offers expert hardware engineering services designed to bring innovative and reliable products to market. Our team specializes in end-to-end hardware development, from concept design and prototyping to testing and production.",
    image: "https://plus.unsplash.com/premium_photo-1682124631890-1f5ac047887d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    id: "product-design",
    title: "Product Design",
    desc: "TechBrain Networks delivers innovative product design services, transforming ideas into market-ready solutions. Our team excels in creating user-centric designs that balance functionality, aesthetics, and usability.",
    image: "https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "research-development",
    title: "Research & Development",
    desc: "TechBrain Networks offers comprehensive Research & Development (R&D) services, driving innovation and technological advancements for businesses. Our team specializes in exploring new technologies, developing prototypes, and conducting in-depth testing to turn ideas into viable products.",
    image: "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const careers = [
  { title: "Android Developer", skill: "Java, Kotlin" },
  { title: "CAD/CAM Designer", skill: "Solidworks" },
  { title: "DFT Engineer", skill: "DFT Methodologies, ATPG, JTAG" },
  { title: "FARM-stack Developer", skill: "FastAPI, ReactJs, MongoDB" },
  { title: "FPGA Designer", skill: "VHDL, modelsim, xilinx vivado" },
  { title: "Hardware Design & Testing", skill: "C, Embedded C, RTOS, Kicad" },
  { title: "IOS Developer", skill: "Swift" },
  { title: "Machine Learning Engineer", skill: "Python, Keras, Opencv, Scikit, Tensorflow" },
  { title: "MEAN-stack Developer", skill: "AngularJs, NodeJs, MongoDB, ExpressJs" },
  { title: "MERN-stack Developer", skill: "ReactJs, NodeJs, MongoDB, ExpressJs" },
  { title: "Physical Design Engineer", skill: "RTL-to-GDSII Flow, Place and Route" },
  { title: "Robotics Engineer", skill: "C++, Python, ROS" },
  { title: "Software Tester", skill: "Automation and Manual Testing" },
  { title: "UX/UI Designer", skill: "Framer, Figma, Adobe XD, Sketch" },
  { title: "Verification Engineer", skill: "SystemVerilog, UVM" },
  { title: "VLSI Design Engineer", skill: "RTL Design, Verilog, Synthesis" }
];
