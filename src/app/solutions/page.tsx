import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Tag } from '@/components/ui'
import { CTABand } from '@/components/sections/CTABand'
import { SlideUp } from '@/components/motion/SlideUp'
import { SolutionsGrid } from '@/components/sections/SolutionsGrid'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Enterprise AI orchestration, automation, and intelligent workflow systems for modern businesses.',
}

export default function SolutionsPage() {
  return (
    <>
      <Section bgColor="#F5F5F7" className="pt-32">
        <Container>
          <SlideUp>
            <Tag className="mb-4">Our Services</Tag>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.02em] text-[#1D1D1F] max-w-2xl leading-[1.05] mt-3">
              Structured AI Systems For Real Operations
            </h1>
            <p className="mt-5 text-lg text-[#6E6E73] max-w-[540px] leading-relaxed">
              Every service we offer is a production-grade system — designed, built, and delivered with full documentation.
            </p>
          </SlideUp>
        </Container>
      </Section>

      <Section bgColor="#FFFFFF">
        <Container>
          <SolutionsGrid />
        </Container>
      </Section>

      <CTABand />
    </>
  )
}
