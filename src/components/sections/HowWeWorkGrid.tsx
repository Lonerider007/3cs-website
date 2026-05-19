'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Search, PenTool, Rocket } from 'lucide-react'
import { GlassCard } from '@/components/ui'
import { StaggerChildren, itemVariants } from '@/components/motion/StaggerChildren'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand',
    description: 'Deep requirements capture. No assumptions. Every constraint documented.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Architect',
    description: 'System design before a single line of code. Architecture reviewed and approved.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deliver',
    description: 'Production build, tested, validated, and handed off with documentation.',
  },
]

export function HowWeWorkGrid() {
  return (
    <LazyMotion features={domAnimation}>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => {
          const Icon = step.icon
          return (
            <m.div key={step.number} variants={itemVariants}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-[0.08em] text-[#0071E3]">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#F5F5F7] flex items-center justify-center">
                    <Icon size={16} className="text-[#0071E3]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">{step.title}</h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">{step.description}</p>
              </GlassCard>
            </m.div>
          )
        })}
      </StaggerChildren>
    </LazyMotion>
  )
}
