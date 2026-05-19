import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'live' | 'coming-soon'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-[#F5F5F7] text-[#6E6E73] border border-[rgba(0,0,0,0.08)]',
  live: 'bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]',
  'coming-soon': 'bg-[#F3F4F6] text-[#6B7280] border border-[#E5E7EB]',
}

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium tracking-wide',
        variants[variant],
        className,
      )}
    >
      {variant === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      )}
      {children}
    </span>
  )
}
