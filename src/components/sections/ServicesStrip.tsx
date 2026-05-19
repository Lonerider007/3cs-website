import {
  Network,
  Zap,
  GitBranch,
  Plug,
  BarChart3,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'

const services = [
  { icon: Network, label: 'AI Orchestration' },
  { icon: Zap, label: 'AI Automation' },
  { icon: GitBranch, label: 'Intelligent Workflows' },
  { icon: Plug, label: 'AI Integrations' },
  { icon: BarChart3, label: 'Analytics Infrastructure' },
]

export function ServicesStrip() {
  return (
    <div className="border-t border-b border-[rgba(0,0,0,0.08)] bg-white py-5">
      <Container>
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide md:justify-center">
          {services.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="flex items-center gap-2.5 shrink-0 text-[#6E6E73] group"
            >
              {i > 0 && (
                <span className="w-px h-4 bg-[rgba(0,0,0,0.10)] mr-2 hidden md:block" />
              )}
              <Icon size={16} className="text-[#86868B] group-hover:text-[#0071E3] transition-colors" />
              <span className="text-sm font-medium whitespace-nowrap group-hover:text-[#1D1D1F] transition-colors">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
