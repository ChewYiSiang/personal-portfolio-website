import { type ClassValue, clsx } from 'clsx'

/** Merge Tailwind class names safely. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/** Map a project status string to Tailwind colour classes. */
export function statusColour(status: string): string {
  switch (status) {
    case 'Active':
      return 'text-green-400 bg-green-400/10 border-green-400/25'
    case 'Completed':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/25'
    case 'In Progress':
      return 'text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/20'
    case 'Archived':
      return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    default:
      return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
  }
}

/** Convert an accent hex/rgb to Tailwind-safe inline style strings. */
export function accentStyle(accent: string) {
  return {
    borderLeftColor: accent,
    dotBackground: accent,
    dotShadow: `0 0 10px ${accent}99`,
  }
}
