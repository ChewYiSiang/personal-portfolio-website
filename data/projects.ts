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
    slug: 'sustainfit',
    number: '01',
    title: 'SustainFit',
    subtitle: 'Hackathon Project',
    description:
      'A hackathon-born platform using computer vision and ML to address fast-fashion sustainability. Classifies garments via fine-tuned EfficientNet, estimates carbon footprint, and surfaces sustainable alternatives for consumers.',
    longDescription:
      'Built in 24 hours at SustainHack 2024. The core pipeline: image upload → EfficientNetV2 classifier (92% top-1 accuracy) → carbon scoring engine based on material & origin coefficients → recommendation API. Placed as Top Finalist among 40+ competing teams.',
    highlights: [
      'Fine-tuned EfficientNetV2 garment classifier — 92% top-1 accuracy',
      'Carbon footprint scoring via material type & country-of-origin data',
      'Sustainable product recommendation engine',
      'FastAPI backend + React frontend, deployed on Vercel',
    ],
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Computer Vision', 'Docker'],
    status: 'Completed',
    github: 'https://github.com/yourusername/sustainfit',
    demo: '',
    image: '',
    gradientFrom: 'rgba(0,245,255,0.04)',
    gradientTo: 'rgba(74,222,128,0.04)',
    featured: true,
  },
  {
    slug: 'smart-garden',
    number: '02',
    title: 'Smart Garden Assistant',
    subtitle: 'IoT + AI Pipeline',
    description:
      'Full end-to-end IoT environmental monitoring. Sensor data flows from ESP32-C3 (DS18B20 temp + capacitive moisture sensors) → MQTT broker → InfluxDB time-series DB → LangChain AI agent that recommends autonomous garden actions.',
    longDescription:
      'ESP32-C3 firmware written in C++ reads temperature over the 1-Wire protocol and soil moisture via ADC every 60 s. Data is published at MQTT QoS 1 to a Mosquitto broker, ingested by Telegraf into InfluxDB, then consumed by a Python LangChain agent that interprets sensor trends and advises actions like "water in 2 hours".',
    highlights: [
      'ESP32-C3 firmware in C++ — DS18B20 + capacitive moisture sensor',
      'MQTT (QoS 1) → Telegraf → InfluxDB real-time pipeline',
      'LangChain AI agent for contextual garden recommendations',
      'Moisture % calibrated via linear interpolation formula',
    ],
    tags: ['ESP32-C3', 'C++', 'MQTT', 'InfluxDB', 'Python', 'LangChain', 'Telegraf'],
    status: 'Active',
    github: 'https://github.com/yourusername/smart-garden',
    demo: '',
    image: '',
    gradientFrom: 'rgba(191,0,255,0.04)',
    gradientTo: 'rgba(74,222,128,0.04)',
    featured: true,
  },
  {
    slug: 'financial-analytics',
    number: '03',
    title: 'Financial Analytics Dashboard',
    subtitle: 'Investment Intelligence',
    description:
      'Dividend-focused investment tracker for ETF portfolios (SCHD, JEPQ). Computes yield-on-cost, dividend growth rate, and projects future income using Monte Carlo simulation. Triggers rebalancing alerts on allocation drift.',
    longDescription:
      'SCHD (dividend growth, ~3.5% yield, ~10% DGR) and JEPQ (covered-call income, ~9-11% yield) form complementary strategies. The dashboard unifies both, tracks drift vs. target weights, and runs 10,000 Monte Carlo simulations to produce 20-year income distributions with confidence intervals.',
    highlights: [
      'yFinance data pipeline writing to a SQLite transaction ledger',
      'Yield-on-cost & dividend growth rate (DGR) analytics',
      'Monte Carlo income projection — 10,000 simulations per run',
      'Rebalancing alert triggered on ±5% allocation drift threshold',
    ],
    tags: ['Python', 'Pandas', 'Plotly', 'yFinance', 'Streamlit', 'SQL', 'NumPy'],
    status: 'In Progress',
    github: 'https://github.com/yourusername/financial-analytics',
    demo: '',
    image: '',
    gradientFrom: 'rgba(234,179,8,0.04)',
    gradientTo: 'rgba(0,245,255,0.04)',
    featured: true,
  },
]
