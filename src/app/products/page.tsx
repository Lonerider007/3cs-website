import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Badge, Tag, Button } from '@/components/ui'
import { CTABand } from '@/components/sections/CTABand'
import { SlideUp } from '@/components/motion/SlideUp'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Purpose-built AI products from 3Cs AI Innovations — live and in development.',
}

export default function ProductsPage() {
  return (
    <>
      <Section bgColor="#F5F5F7" className="pt-32">
        <Container>
          <SlideUp>
            <Tag className="mb-4">Our Products</Tag>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.02em] text-[#1D1D1F] max-w-2xl leading-[1.05] mt-3">
              Purpose-Built AI Products
            </h1>
            <p className="mt-5 text-lg text-[#6E6E73] max-w-[500px] leading-relaxed">
              Production-grade AI systems designed for real operational deployment.
            </p>
          </SlideUp>
        </Container>
      </Section>

      <Section bgColor="#FFFFFF">
        <Container>
          <div className="flex flex-col gap-6">

            {/* ORBOX */}
            <SlideUp>
              <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 md:p-10 bg-white shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="live">Live</Badge>
                      <Tag>Cognitive Runtime</Tag>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1F] tracking-[-0.01em]">
                      ORBOX
                    </h2>
                    <p className="mt-1 text-sm font-medium text-[#6E6E73]">
                      Synthetic Cognitive Brain Layer
                    </p>
                    <p className="mt-3 text-base text-[#6E6E73] leading-relaxed max-w-2xl">
                      A memory-native cognitive runtime that sits between any language model and
                      the user. ORBOX orchestrates cognition — persistent memory, adaptive recall,
                      and intelligent model routing — so every interaction builds on the last.
                      Built for enterprise conversational systems and privacy-first AI deployments.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        'Persistent Memory',
                        'Adaptive Recall',
                        'Multi-Model Routing',
                        'Validation Layer',
                        'Fully Local Deployment',
                      ].map((cap) => (
                        <span
                          key={cap}
                          className="text-xs font-medium text-[#6E6E73] bg-[#F5F5F7] border border-[rgba(0,0,0,0.08)] px-3 py-1 rounded-full"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Button href="/contact" variant="primary" size="md">
                      Enquire →
                    </Button>
                  </div>
                </div>
              </div>
            </SlideUp>

            {/* Delta AI Trading Bot */}
            <SlideUp delay={0.1}>
              <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 md:p-10 bg-white shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="live">Live</Badge>
                      <Tag>Trading Automation</Tag>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1F] tracking-[-0.01em]">
                      Delta AI Trading Bot
                    </h2>
                    <p className="mt-3 text-base text-[#6E6E73] leading-relaxed max-w-2xl">
                      An AI-powered derivatives trading system built for crypto futures markets.
                      Operates autonomously with real-time signal generation, dynamic risk management,
                      and structured execution — across paper and live trading modes.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        'AI Signal Generation',
                        'Autonomous Execution',
                        'Risk Management Layer',
                        'Paper & Live Modes',
                        'Real-Time Monitoring',
                      ].map((cap) => (
                        <span
                          key={cap}
                          className="text-xs font-medium text-[#6E6E73] bg-[#F5F5F7] border border-[rgba(0,0,0,0.08)] px-3 py-1 rounded-full"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Button href="/contact" variant="primary" size="md">
                      Enquire →
                    </Button>
                  </div>
                </div>
              </div>
            </SlideUp>

            {/* Coming Soon */}
            <SlideUp delay={0.2}>
              <div className="rounded-2xl border border-[rgba(0,0,0,0.06)] p-8 md:p-10 bg-[#FAFAFA] opacity-60">
                <Badge variant="coming-soon">Coming Soon</Badge>
                <h2 className="text-xl font-semibold text-[#6E6E73] mt-4">More Products In Development</h2>
                <p className="mt-2 text-sm text-[#86868B]">
                  Additional AI products are currently in development and will be announced here.
                </p>
              </div>
            </SlideUp>

          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  )
}
