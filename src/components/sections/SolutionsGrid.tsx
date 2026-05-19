'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Network, Zap, GitBranch, Plug, BarChart3 } from 'lucide-react'
import { GlassCard, Button } from '@/components/ui'
import { StaggerChildren, itemVariants } from '@/components/motion/StaggerChildren'

const services = [
  {
    id: 'orchestration',
    icon: Network,
    title: 'AI Orchestration',
    description:
      'Design and deploy multi-agent AI systems that coordinate complex workflows autonomously. We architect the decision layers, data flows, and agent hierarchies that make enterprise AI reliable.',
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'AI Automation',
    description:
      'Replace repetitive manual processes with intelligent, self-operating pipelines. From document processing to multi-step business logic — automated end-to-end.',
  },
  {
    id: 'workflows',
    icon: GitBranch,
    title: 'Intelligent Workflow Systems',
    description:
      'Restructure business operations around AI-native processes. We re-architect workflows so AI becomes the operating layer, not a bolt-on tool.',
  },
  {
    id: 'integrations',
    icon: Plug,
    title: 'AI Integrations',
    description:
      'Connect existing tools and platforms with AI capabilities via APIs and custom connectors. Your stack, enhanced with intelligence — no rip-and-replace required.',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics Infrastructure',
    description:
      'Build the data layer that makes AI decisions reliable and auditable. Pipelines, stores, and dashboards that give AI systems the signal quality they need.',
  },
]

export function SolutionsGrid() {
  return (
    <LazyMotion features={domAnimation}>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <m.div key={service.id} variants={itemVariants} id={service.id}>
              <GlassCard hover className="h-full flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                  <Icon size={20} className="text-[#0071E3]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1D1D1F]">{service.title}</h3>
                  <p className="mt-2 text-sm text-[#6E6E73] leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-auto pt-3">
                  <Button href="/contact" variant="ghost" size="sm">
                    Learn More →
                  </Button>
                </div>
              </GlassCard>
            </m.div>
          )
        })}
      </StaggerChildren>
    </LazyMotion>
  )
}
