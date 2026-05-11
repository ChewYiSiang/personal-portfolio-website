interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-[10px] tracking-[4px] uppercase text-cyber-cyan mb-2">
        {label}
      </p>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-100 section-heading mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 text-sm max-w-xl leading-relaxed">{description}</p>
      )}
    </div>
  )
}
