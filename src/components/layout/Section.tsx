import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  bgColor?: string
}

export function Section({ children, className, id, bgColor }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-20 lg:py-24', className)}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      {children}
    </section>
  )
}
