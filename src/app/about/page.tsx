import type { Metadata } from 'next'
import { MapPin } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { GlassCard, Tag } from '@/components/ui'
import { CTABand } from '@/components/sections/CTABand'
import { SlideUp } from '@/components/motion/SlideUp'
import { HowWeWorkGrid } from '@/components/sections/HowWeWorkGrid'

export const metadata: Metadata = {
  title: 'About',
  description: 'About 3Cs AI Innovations — AI product and systems company based in Delhi, India.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <Section bgColor="#F5F5F7" className="pt-32">
        <Container>
          <SlideUp>
            <Tag className="mb-4">About 3Cs</Tag>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.02em] text-[#1D1D1F] max-w-2xl leading-[1.05] mt-3">
              Three Champs AI Innovations
            </h1>
            <p className="mt-5 text-lg text-[#6E6E73] max-w-[600px] leading-relaxed">
              3Cs AI Innovations is an AI product and systems company based in Delhi, India. We build
              enterprise-grade AI orchestration and automation systems for businesses that need structured
              execution over experimental promises. Every product we ship is production-ready, tested, and
              built to operate at scale.
            </p>
          </SlideUp>
        </Container>
      </Section>

      {/* Mission */}
      <Section bgColor="#FFFFFF">
        <Container>
          <SlideUp>
            <div className="max-w-3xl mx-auto text-center">
              <Tag className="mb-4">Our Mission</Tag>
              <p className="text-2xl md:text-3xl font-semibold text-[#1D1D1F] leading-snug tracking-[-0.01em]">
                We build AI systems that work — structured, tested, and delivered. No prototypes, no demos,
                no toy examples. Only production-grade AI that operates at the speed of business.
              </p>
            </div>
          </SlideUp>
        </Container>
      </Section>

      {/* How We Work */}
      <Section bgColor="#F5F5F7">
        <Container>
          <SlideUp>
            <div className="mb-12 text-center">
              <Tag className="mb-3">How We Work</Tag>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.01em] text-[#1D1D1F] mt-3">
                A Structured Process. Every Time.
              </h2>
            </div>
          </SlideUp>
          <HowWeWorkGrid />
        </Container>
      </Section>

      {/* Team */}
      <Section bgColor="#FFFFFF">
        <Container>
          <SlideUp>
            <div className="mb-10">
              <Tag className="mb-3">Team</Tag>
              <h2 className="text-3xl font-bold tracking-[-0.01em] text-[#1D1D1F] mt-3">Leadership</h2>
            </div>
            <div className="max-w-sm">
              <GlassCard>
                <div className="w-12 h-12 rounded-full bg-[#F5F5F7] border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-lg font-bold text-[#1D1D1F] mb-4">
                  S
                </div>
                <h3 className="text-lg font-semibold text-[#1D1D1F]">Sumit Verma</h3>
                <p className="text-sm text-[#0071E3] font-medium mt-0.5">Founder</p>
                <p className="text-sm text-[#6E6E73] mt-3 leading-relaxed">
                  Builder of AI systems. Founder of 3Cs AI Innovations.
                </p>
                <div className="flex items-center gap-1.5 mt-3 text-xs text-[#86868B]">
                  <MapPin size={12} />
                  Delhi, India
                </div>
              </GlassCard>
            </div>
          </SlideUp>
        </Container>
      </Section>

      <CTABand />
    </>
  )
}
