import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative z-10">
      <div className="text-center">
        <p className="font-mono text-cyber-cyan text-[10px] tracking-[4px] uppercase mb-3">Error 404</p>
        <h1 className="font-display font-extrabold text-5xl gradient-text mb-4">Page Not Found</h1>
        <p className="text-gray-600 font-mono text-sm mb-8">
          {'>>> '}The data you&apos;re looking for doesn&apos;t exist in this cluster.
        </p>
        <Link href="/" className="btn-cyber inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-mono text-sm">
          ← Return to Base
        </Link>
      </div>
    </div>
  )
}
