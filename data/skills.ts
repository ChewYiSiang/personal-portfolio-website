import type { SkillCategory } from '@/types'

/**
 * TECH STACK
 * ──────────
 * Each category renders as a horizontal chip carousel.
 * Add/remove chips freely — the carousel handles overflow automatically.
 *
 * Fields:
 *   label — Category heading shown above the row
 *   chips — Array of { icon: emoji, name: display string }
 */

export const skills: SkillCategory[] = [
  {
    label: 'Languages',
    chips: [
      { icon: '🐍', name: 'Python' },
      { icon: '🗄️', name: 'SQL' },
      { icon: '🌐', name: 'JavaScript' },
    ],
  },
  {
    label: 'AI / ML',
    chips: [
      { icon: '🧠', name: 'TensorFlow' },
      { icon: '🔥', name: 'PyTorch' },
      { icon: '🔬', name: 'Scikit-learn' },
      { icon: '🤖', name: 'LangChain' },
      { icon: '🎯', name: 'Keras' },
      { icon: '👁️', name: 'OpenCV' },
      { icon: '🧬', name: 'HuggingFace' },
    ],
  },
  {
    label: 'Data Engineering',
    chips: [
      { icon: '💥', name: 'Apache Spark' },
      { icon: '📨', name: 'Kafka' },
      { icon: '🌊', name: 'Airflow' },
      { icon: '🔧', name: 'dbt' },
      { icon: '🐘', name: 'PostgreSQL' },
      { icon: '☁️', name: 'BigQuery' },
    ],
  },
  {
    label: 'Tools & Infra',
    chips: [
      { icon: '🐳', name: 'Docker' },
      { icon: '📊', name: 'Plotly' },
      { icon: '📈', name: 'Tableau' },
      { icon: '🎈', name: 'Streamlit' },
      { icon: '📡', name: 'PowerBI' },
      { icon: '🌿', name: 'Git' },
      { icon: '🤖', name: 'AI Development' },
    ],
  },
]
