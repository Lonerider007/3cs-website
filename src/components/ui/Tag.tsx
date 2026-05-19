import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block text-xs font-medium uppercase tracking-[0.08em] text-[#6E6E73]',
        className,
      )}
    >
      {children}
    </span>
  )
}
