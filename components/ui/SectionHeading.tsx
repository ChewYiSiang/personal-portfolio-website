interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="text-[10px] tracking-[3.5px] uppercase text-faint mb-3 font-medium">
        {label}
      </p>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-content section-heading mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-sm max-w-xl leading-relaxed">{description}</p>
      )}
    </div>
  )
}
