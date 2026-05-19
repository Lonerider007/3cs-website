import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Button, Tag } from '@/components/ui'
import { SlideUp } from '@/components/motion/SlideUp'
import { FadeIn } from '@/components/motion/FadeIn'

function GeometricVisual() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
      <circle cx="140" cy="180" r="100" stroke="rgba(0,113,227,0.12)" strokeWidth="1.5" />
      <circle cx="200" cy="160" r="100" stroke="rgba(0,113,227,0.08)" strokeWidth="1.5" />
      <circle cx="260" cy="180" r="100" stroke="rgba(0,113,227,0.06)" strokeWidth="1.5" />
      <circle cx="200" cy="180" r="60" stroke="rgba(0,113,227,0.15)" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="200" cy="180" r="30" fill="rgba(0,113,227,0.06)" stroke="rgba(0,113,227,0.2)" strokeWidth="1" />
      <line x1="80" y1="80" x2="320" y2="280" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
      <line x1="320" y1="80" x2="80" y2="280" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
      <rect x="170" y="150" width="60" height="60" rx="8" stroke="rgba(0,113,227,0.10)" strokeWidth="1" fill="none" />
    </svg>
  )
}

export function AboutTeaser() {
  return (
    <Section bgColor="#FFFFFF">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideUp>
            <div>
              <Tag className="mb-4">About 3Cs AI Innovations</Tag>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.01em] text-[#1D1D1F] mt-3 leading-[1.15]">
                Engineered.{' '}
                <span className="text-[#6E6E73]">Structured.</span>{' '}
                Delivered.
              </h2>
              <p className="mt-5 text-base text-[#6E6E73] leading-relaxed max-w-md">
                3Cs AI Innovations is an AI product and systems company based in Delhi, India.
                We build enterprise-grade AI orchestration and automation systems for businesses
                that need structured execution over experimental promises.
              </p>
              <div className="mt-7">
                <Button href="/about" variant="ghost">
                  Learn About 3Cs →
                </Button>
              </div>
            </div>
          </SlideUp>

          <FadeIn delay={0.15}>
            <GeometricVisual />
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
