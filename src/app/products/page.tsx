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
                      Adaptive Unified Runtime Engine for Contextual Intelligence Systems
                    </p>
                    <p className="mt-3 text-base text-[#6E6E73] leading-relaxed max-w-2xl">
                      A memory-native cognitive runtime that sits between you and any language model.
                      ORBOX does not generate language — it orchestrates cognition. It remembers, reasons,
                      recalls, and routes across sessions, so the model can focus purely on generation.
                      Built for BPO, long-context conversational systems, and privacy-first AI deployments.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        'Persistent Memory (STM + LTM)',
                        'Adaptive Recall Engine',
                        'Emotional & Tonal Awareness',
                        'Hallucination Validation',
                        'Model Routing',
                        'Fully Local (Ollama)',
                        '7 Phases Complete',
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
                  <div className="shrink-0 flex flex-col gap-2 items-start">
                    <Button href="/contact" variant="primary" size="md">
                      Enquire →
                    </Button>
                    <a
                      href="https://github.com/Lonerider007/orbox-brain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#86868B] hover:text-[#1D1D1F] transition-colors"
                    >
                      View on GitHub ↗
                    </a>
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
                      An AI-powered crypto derivatives trading bot built for Delta Exchange India. Operates 24/7
                      on BTC and ETH perpetual futures using real-time signal generation via a locally-hosted LLM,
                      paper and live trading modes, dynamic position sizing, and a full risk management layer.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        'AI Signal Generation',
                        '15-Min Candles',
                        'Paper + Live Mode',
                        'Dynamic Position Sizing',
                        'Circuit Breaker',
                        '85 Tests Passing',
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
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="coming-soon">Coming Soon</Badge>
                </div>
                <h2 className="text-xl font-semibold text-[#6E6E73]">More Products In Development</h2>
                <p className="mt-2 text-sm text-[#86868B]">
                  Additional AI products are currently being built and will be announced here.
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
