import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { GlassCard, Badge, Tag } from '@/components/ui'
import { SlideUp } from '@/components/motion/SlideUp'
import { getAllCaseStudies } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real AI projects built and delivered by 3Cs AI Innovations.',
}

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies()

  return (
    <>
      <Section bgColor="#F5F5F7" className="pt-32">
        <Container>
          <SlideUp>
            <Tag className="mb-4">Case Studies</Tag>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.02em] text-[#1D1D1F] max-w-2xl leading-[1.05] mt-3">
              Built. Delivered. Documented.
            </h1>
            <p className="mt-5 text-lg text-[#6E6E73] max-w-[480px] leading-relaxed">
              Every case study is a real project — delivered to a real client with real outcomes.
            </p>
          </SlideUp>
        </Container>
      </Section>

      <Section bgColor="#FFFFFF">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <SlideUp key={cs.slug}>
                <Link href={`/case-studies/${cs.slug}`}>
                  <GlassCard hover className="h-full flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="live">Live</Badge>
                      <Tag>{cs.tag}</Tag>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-[#1D1D1F] leading-snug">{cs.title}</h2>
                      <p className="mt-2 text-sm text-[#6E6E73] leading-relaxed">{cs.outcome}</p>
                    </div>
                    <div className="pt-3 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between">
                      <p className="text-xs text-[#86868B]">{cs.client}</p>
                      <ArrowRight size={14} className="text-[#0071E3]" />
                    </div>
                  </GlassCard>
                </Link>
              </SlideUp>
            ))}

            {/* Placeholder cards */}
            <GlassCard className="opacity-40 hidden lg:block">
              <Badge variant="coming-soon">Coming Soon</Badge>
              <p className="mt-3 text-sm text-[#86868B] italic">Case study in progress.</p>
            </GlassCard>
          </div>
        </Container>
      </Section>
    </>
  )
}
