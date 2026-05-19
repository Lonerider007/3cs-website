'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { GlassCard, Badge, Tag } from '@/components/ui'
import { StaggerChildren, itemVariants } from '@/components/motion/StaggerChildren'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { SlideUp } from '@/components/motion/SlideUp'

export function CaseStudiesPreview() {
  return (
    <Section bgColor="#F5F5F7">
      <Container>
        <SlideUp>
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <Tag className="mb-3">Case Studies</Tag>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.01em] text-[#1D1D1F]">
                Built. Delivered. Documented.
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-[#0071E3] hover:text-[#0077ED] flex items-center gap-1 transition-colors shrink-0"
            >
              View All Case Studies <ArrowRight size={14} />
            </Link>
          </div>
        </SlideUp>

        <LazyMotion features={domAnimation}>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 — Delta AI Trading Bot */}
            <m.div variants={itemVariants}>
              <Link href="/case-studies/delta-ai-bot">
                <GlassCard hover className="h-full flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="live">Live</Badge>
                    <Tag>Trading Automation</Tag>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1D1D1F] leading-snug">
                      Delta AI Trading Bot
                    </h3>
                    <p className="mt-2 text-sm text-[#6E6E73] leading-relaxed">
                      AI-powered derivatives trading bot for Delta Exchange India. Paper and live modes,
                      85 tests passing, full risk management layer.
                    </p>
                  </div>
                  <div className="mt-auto pt-3 border-t border-[rgba(0,0,0,0.06)]">
                    <p className="text-xs text-[#86868B]">Client: Confidential · Stack: Python · Ollama</p>
                  </div>
                </GlassCard>
              </Link>
            </m.div>

            {/* Card 2 — Coming Soon */}
            <m.div variants={itemVariants}>
              <GlassCard className="h-full flex flex-col gap-4 opacity-50">
                <Badge variant="coming-soon">Coming Soon</Badge>
                <p className="text-sm text-[#86868B] italic">Case study in progress.</p>
              </GlassCard>
            </m.div>

            {/* Card 3 — Coming Soon */}
            <m.div variants={itemVariants}>
              <GlassCard className="h-full flex flex-col gap-4 opacity-50 hidden lg:flex">
                <Badge variant="coming-soon">Coming Soon</Badge>
                <p className="text-sm text-[#86868B] italic">Case study in progress.</p>
              </GlassCard>
            </m.div>
          </StaggerChildren>
        </LazyMotion>
      </Container>
    </Section>
  )
}
