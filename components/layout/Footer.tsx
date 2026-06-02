import { personal } from '@/data/personal'

export default function Footer() {
  return (
    <footer className="py-8 text-center font-mono text-xs text-muted border-t border-line">
      <p>
        <span className="text-cyber-cyan">{'<'}</span>
        {' '}{personal.name} · Data &amp; Intelligence Portfolio{' '}
        <span className="text-cyber-cyan">{'/'}</span>
        <span className="text-cyber-cyan">{'>'}</span>
      </p>
    </footer>
  )
}
