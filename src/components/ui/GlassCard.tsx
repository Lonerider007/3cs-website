import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6',
        'bg-white/70 backdrop-blur-[20px] saturate-150',
        'border border-[rgba(0,0,0,0.08)]',
        'shadow-md',
        hover &&
          'transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-[rgba(0,0,0,0.12)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
