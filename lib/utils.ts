import { type ClassValue, clsx } from 'clsx'

/** Merge Tailwind class names safely. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/** Map a project status string to Tailwind colour classes (theme-robust). */
export function statusColour(status: string): string {
  switch (status) {
    case 'Active':
      return 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    case 'Completed':
      return 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/30'
    case 'In Progress':
      return 'text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/25'
    case 'Archived':
      return 'text-faint bg-tint border-line'
    default:
      return 'text-faint bg-tint border-line'
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
