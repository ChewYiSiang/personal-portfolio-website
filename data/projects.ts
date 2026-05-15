import type { Project } from '@/types'

/**
 * FEATURED PROJECTS
 * ─────────────────
 * These cards appear on the homepage and in the "All Projects" archive.
 *
 * To add a new project:
 *   1. Add an entry to this array.
 *   2. Drop a matching <slug>.mdx file into /content/projects/.
 *      The slug must match exactly (e.g. slug: 'my-project' → my-project.mdx).
 *   3. Set featured: true to show it in the homepage carousel,
 *      or false to only show it in the archive.
 */

export const projects: Project[] = [
  {
    slug: 'smart-plant-companion',
    number: '01',
    title: 'Smart Plant Companion',
    subtitle: 'SUTD Term 1 Design & Innovation Project',
    description:
      'With sensors that monitors moisture, humidity and light, the plant pot provides real-time care advice and personalized plant care tips to users through a talking companion via agentic AI capabilities.',
    longDescription:
      'This project was developed as part of the Design & Innovation module at Singapore University of Technology and Design, where we were challenged to create a product that reimagines interaction in everyday contexts. Through our research, we identified an opportunity to rethink human–plant interactions in gardens, particularly in environments where there is limited access to skilled gardeners for proper plant care.\n\nTo address this, we developed an intelligent plant pot system equipped with sensors that continuously monitor soil moisture, humidity, and light levels, transmitting real-time data to the backend. Accompanying the system is an AI-powered plant companion that provides personalised care tips and recommendations by combining live sensor data with Retrieval-Augmented Generation (RAG) using online plant care resources tailored to specific plant species.\n\nThe project involved interdisciplinary collaboration across hardware, software, and AI development, allowing me to gain hands-on experience in circuit design, sensor integration, and AI infrastructure development while building a functional prototype aimed at improving plant care responsiveness and accessibility.\n\nFuture improvements include reducing token usage and lowering response latency through the implementation of Cache-Augmented Generation (CAG) to complement the existing RAG pipeline.',
    highlights: [
      'Agentic AI infrastructure used to build a conversational plant companion that provides personalized care advice based on real-time sensor data and online plant care resources.',
      'Challenges: Understood the challenges of building a multi-modal AI system that integrates hardware sensors, backend processing, and an LLM-powered conversational agent while maintaining low latency and high accuracy.',
      'Interdisciplinary development: Gained hands-on experience in hardware design and AI infrastructure while building a functional prototype.',
      'Future enhancement plans: Exploring the implementation of Cache-Augmented Generation (CAG) to reduce token usage and lower response latency in the AI companion.'
    ],
    tags: ['Python', 'ESP32', 'Agentic Infrastructure','Google Antigravity', 'RAG', 'Agentic AI'],
    status: 'Completed',
    github: 'https://github.com/ChewYiSiang/smart-plant-pot',
    demo: '',
    image: '',
    gradientFrom: 'rgba(0,245,255,0.04)',
    gradientTo: 'rgba(74,222,128,0.04)',
    featured: true,
  },
  {
    slug: 'sustainfit',
    number: '02',
    title: 'SustainFit AI',
    subtitle: 'Hackathon (SUTD Build for Impact 2026)',
    description:
      'An AI-powered sustainability-focused app designed to help users reduce overconsumption and move away from fast fashion.',
    longDescription:
      'Built during the SUTD Build for Impact 2026 hackathon, SustainFit leverages computer vision and machine learning to analyze clothing items and provide users with sustainability insights. The app classifies garments based on material type and country of origin to estimate their carbon footprint, and offers personalized recommendations for more sustainable alternatives. Developed with a FastAPI backend and React frontend, SustainFit aims to empower consumers to make more environmentally conscious fashion choices. For my part, I created the image generation of clothings based on user input and the tailor guide for the app, which provides users with personalized recommendations on how to alter or upcycle their existing garments to extend their lifespan and reduce waste.',
    highlights: [
      'Garment Analysis: Automatically detect garment type and estimate flat-lay measurements using Gemini 3 Pro Image Preview.',
      'Virtual Try-On: Visualize how a garment looks on a person with AI-generated synthesis powered by Gemini 3 Pro.',
      'Multilingual Tailoring Instructions: Generate technical steps for physical alterations in multiple Southeast Asian languages (Thai, Vietnamese, Indonesian, Malay) powered by the SEA-LION API.',
      'Robust Image Generation: A 3-tier fallback system (Gemini 3 Pro -> Gemini 1.5 -> DALL-E) for reliable AI previews.'
    ],
    tags: ['Python', 'FastAPI', 'OpenAI', 'OpenCV', 'Google Antigravity'],
    status: 'Completed',
    github: 'https://github.com/ChewYiSiang/AglioOlio',
    demo: '',
    image: '',
    gradientFrom: 'rgba(0,245,255,0.04)',
    gradientTo: 'rgba(74,222,128,0.04)',
    featured: true,
  },
  {
    slug: 'ai-garden-app',
    number: '03',
    title: 'Google Capstone Project: AI Garden App',
    subtitle: 'IoT + AI Agent',
    description:
      'A multi-agent garden assistant with a conversational AI system that helps community gardeners optimize their growing practices through coordinated and actionable assistance.',
    longDescription:
      'Built as the capstone project for Google\'s 5-Day AI Agents Intensive Course. Agents are ideal for this project because the challenges faced by community gardeners are both diverse and highly contextual: plant care, resource coordination, and knowledge sharing all require distinct expertise and adaptive decision-making. Multi-agent systems make it possible to modularize these capabilities. Each specialized agent, whether focused on plant health, inventory, or scheduling, can process domain-specific queries and collaborate with each other, resulting in more accurate and personalized assistance. This structure allows the AI to handle complex workflows that go beyond simple question answering, such as diagnosing plant problems and then proactively recommending suitable treatments or finding the necessary tools, mirroring the collaborative dynamics found in real gardening communities.',
    highlights: [
      'LLM agents: LlmAgent with Gemini model for plant health, inventory management, and scheduling tasks.',
      'Multi-agent system: Using workflow agents like parallel agent, sequential agent and loop agent to orchestrate tasks.',
      'Custom tools: Integrated external APIs for plant care, inventory management, and scheduling to enable actionable recommendations.',
      'Session management: Implemented persistent session memory to maintain context across interactions, allowing for personalized and coherent conversations.',
      'Memory management: InMemoryMermoryService for quick prototyping.',
      'Observability: Implemented logging and monitoring with LoggingPlugin to track agent interactions and performance, enabling iterative improvements.',
    ],
    tags: ['Python', 'Google Gemini', 'LLM Agents', 'Workflow Orchestration', 'API Integration', 'Memory Management', 'Google Antigravity'],
    status: 'Completed',
    github: 'https://github.com/ChewYiSiang/AI-Garden-Application',
    demo: '',
    image: '',
    gradientFrom: 'rgba(191,0,255,0.04)',
    gradientTo: 'rgba(74,222,128,0.04)',
    featured: true,
  },
  {
    slug: 'sentiment-analysis-lazada',
    number: '04',
    title: 'Sentiment Analysis for Lazada',
    subtitle: 'NLP + Machine Learning',
    description:
      'Developed a sentiment analysis model to evaluate customer reviews for Lazada products. Utilized BERT-based transformer architecture for accurate emotion classification and implemented a real-time feedback system.',
    longDescription:
      'The project involved collecting and preprocessing customer reviews from Lazada, then training a BERT-based model to classify sentiments as positive, negative, or neutral. The model achieved an accuracy of 92% on a held-out test set and was integrated into Lazada\'s feedback system for real-time analysis.',
    highlights: [
      'BERT-based transformer model for sentiment classification',
      'Data preprocessing and feature engineering for NLP tasks',
      'Real-time feedback integration with Lazada\'s existing system',
      'Model evaluation and performance optimization',
    ],
    tags: ['Python', 'TensorFlow', 'BERT', 'NLP', 'Machine Learning'],
    status: 'In Progress',
    github: 'https://github.com/yourusername/sentiment-analysis-lazada',
    demo: '',
    image: '',
    gradientFrom: 'rgba(234,179,8,0.04)',
    gradientTo: 'rgba(0,245,255,0.04)',
    featured: false
  },
  {
    slug: 'hdb-dashboard',
    number: '05',
    title: 'HDB Analytics Dashboard',
    subtitle: 'Data Analytics (self-initiated project)',
    description:
      'End-to-end data analytics project using PostgreSQL, Python, and Power BI to analyse Singapore HDB resale flat transactions from 2017 to 2026.',
    longDescription:
      'This project involved collecting and preprocessing a dataset of HDB resale flat transactions, which included attributes such as flat type, location, transaction date, and price. I then performed exploratory data analysis (EDA) using Python to uncover trends and insights in the housing market with PostgreSQL as the database. Finally, I created an interactive dashboard in Power BI to visualize key metrics and trends, allowing users to explore the data through filters and dynamic charts.',
    highlights: [
      'Designing a reproducible ETL pipeline using Python + PostgreSQL, including pagination handling for large API datasets',
      'Writing analytical SQL beyond basic SELECT (CTEs, window functions, percentile aggregates, conditional aggregation)',
      'Translating raw transactional data into business-readable insights across five distinct analytical angles',
      'Building a multi-page Power BI report with DAX measures, cross-filtering, dual-axis charts, coordinate-based choropleth maps, and conditional formatting matrices'
    ],
    tags: ['Python', 'PostgreSQL', 'Power BI', 'Data Analytics', 'ETL'],
    status: 'Completed',
    github: 'https://github.com/ChewYiSiang/HDB-Analytic-Dashboard',
    demo: '',
    image: '',
    gradientFrom: 'rgba(0,245,255,0.04)',
    gradientTo: 'rgba(74,222,128,0.04)',
    featured: true,
  },

]
