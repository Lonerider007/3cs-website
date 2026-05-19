import { cn } from '@/lib/utils'

interface SeparatorProps {
  className?: string
}

export function Separator({ className }: SeparatorProps) {
  return (
    <hr
      className={cn('border-0 border-t border-[rgba(0,0,0,0.08)] w-full', className)}
    />
  )
}
