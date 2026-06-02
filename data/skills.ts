import type { SkillCategory } from '@/types'

/**
 * TECH STACK
 * ──────────
 * `icon` maps to a logo in components/ui/TechIcon.tsx. To add a tech with a
 * brand logo, use its Simple Icons slug (https://simpleicons.org) and register
 * it in TechIcon if it isn't already. Unknown icons fall back to a monogram.
 */
export const skills: SkillCategory[] = [
  {
    label: 'Languages',
    chips: [
      { icon: 'python', name: 'Python' },
      { icon: 'sql', name: 'SQL' },
    ],
  },
  {
    label: 'AI / ML',
    chips: [
      { icon: 'tensorflow', name: 'TensorFlow' },
      { icon: 'pytorch', name: 'PyTorch' },
      { icon: 'scikitlearn', name: 'Scikit-learn' },
      { icon: 'langchain', name: 'LangChain' },
      { icon: 'keras', name: 'Keras' },
      { icon: 'opencv', name: 'OpenCV' },
      { icon: 'huggingface', name: 'HuggingFace' },
    ],
  },
  {
    label: 'Data Analysis & Visualization',
    chips: [
      { icon: 'pandas', name: 'Pandas' },
      { icon: 'numpy', name: 'NumPy' },
      { icon: 'matplotlib', name: 'Matplotlib' },
      { icon: 'seaborn', name: 'Seaborn' },
      { icon: 'plotly', name: 'Plotly' },
      { icon: 'tableau', name: 'Tableau' },
      { icon: 'powerbi', name: 'Power BI' },
    ],
  },
  {
    label: 'Data Engineering',
    chips: [
      { icon: 'dbt', name: 'dbt' },
      { icon: 'postgresql', name: 'PostgreSQL' },
    ],
  },
  {
    label: 'Cloud, DevOps & MLOps',
    chips: [
      { icon: 'git', name: 'Git' },
      { icon: 'docker', name: 'Docker' },
      { icon: 'githubactions', name: 'GitHub Actions' },
      { icon: 'kubernetes', name: 'Kubernetes' },
    ],
  },
  {
    label: 'Developer Tools',
    chips: [
      { icon: 'jupyter', name: 'Jupyter' },
      { icon: 'vscode', name: 'VS Code' },
      { icon: 'claudecode', name: 'Claude Code' },
    ],
  },
]
