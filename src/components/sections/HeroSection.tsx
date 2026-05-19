'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Button } from '@/components/ui'
import { Container } from '@/components/layout/Container'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-[#F5F5F7] to-white pt-16">
      <Container>
        <div className="py-24 md:py-32 flex flex-col items-center text-center">
          <LazyMotion features={domAnimation}>
            <m.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="inline-block text-xs font-semibold uppercase tracking-[0.08em] text-[#6E6E73] border border-[rgba(0,0,0,0.10)] rounded-full px-4 py-1.5 mb-8"
            >
              Enterprise AI Systems
            </m.span>

            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] text-[#1D1D1F] leading-[1.05] max-w-4xl"
            >
              AI Orchestration &amp; Automation Systems For Modern Businesses
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
              className="mt-7 text-lg text-[#6E6E73] max-w-[560px] leading-relaxed"
            >
              We design, build, and deploy intelligent AI systems for startups, traders, and enterprises
              that need real operational leverage — not hype.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.36, ease: 'easeOut' }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-3"
            >
              <Button href="/solutions" variant="primary" size="lg">
                Explore Solutions →
              </Button>
              <Button href="/case-studies" variant="secondary" size="lg">
                View Case Studies
              </Button>
            </m.div>
          </LazyMotion>
        </div>
      </Container>
    </section>
  )
}
