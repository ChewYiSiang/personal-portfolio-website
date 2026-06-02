import type { SkillCategory } from '@/types'

export const skills: SkillCategory[] = [
  {
    label: 'Languages',
    chips: [
      { icon: '🐍', name: 'Python' },
      { icon: '🗄️', name: 'SQL' },
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
    label: 'Data Analysis & Visualization',
    chips: [
      { icon: '🐼', name: 'Pandas' },
      { icon: '🔢', name: 'NumPy' },
      { icon: '📊', name: 'Matplotlib' },
      { icon: '🌊', name: 'Seaborn' },
      { icon: '📈', name: 'Plotly' },
      { icon: '📉', name: 'Tableau' },
      { icon: '📡', name: 'Power BI' },
    ],
  },
  {
    label: 'Data Engineering',
    chips: [
      { icon: '🔧', name: 'dbt' },
      { icon: '🐘', name: 'PostgreSQL' },
    ],
  },
  {
    label: 'Cloud, DevOps & MLOps',
    chips: [
      { icon: '🌿', name: 'Git' },
      { icon: '🐳', name: 'Docker' },
      { icon: '☁️', name: 'GitHub Actions' },
      { icon: '🔄', name: 'Kubernetes' },
    ],
  },
  {
    label: 'Developer Tools',
    chips: [
      { icon: '📓', name: 'Jupyter' },
      { icon: '💻', name: 'VS Code' },
      { icon: '🧑‍💻', name: 'Claude Code' },
    ],
  },
]
