import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getCaseStudy, getAllCaseStudies } from '@/lib/case-studies'
import { Container } from '@/components/layout/Container'
import { Tag, Badge, Button } from '@/components/ui'
import { siteConfig } from '@/lib/metadata'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies()
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}
  return {
    title: cs.title,
    description: cs.outcome,
    openGraph: {
      title: `${cs.title} | ${siteConfig.name}`,
      description: cs.outcome,
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) notFound()

  return (
    <div className="pt-24 pb-24 bg-white">
      <Container>
        {/* Back link */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-1.5 text-sm text-[#6E6E73] hover:text-[#1D1D1F] transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Back to Case Studies
        </Link>

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#86868B] mb-1">Client</p>
                <p className="text-sm text-[#1D1D1F]">{cs.client}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#86868B] mb-1">Date</p>
                <p className="text-sm text-[#1D1D1F]">{cs.date}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#86868B] mb-1">Stack</p>
                <p className="text-sm text-[#1D1D1F] leading-relaxed">{cs.stack}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#86868B] mb-1">Outcome</p>
                <p className="text-sm text-[#1D1D1F] leading-relaxed">{cs.outcome}</p>
              </div>
              <div className="pt-4 border-t border-[rgba(0,0,0,0.08)]">
                <Button href="/contact" variant="primary" size="sm">
                  Start a Project →
                </Button>
              </div>
            </div>
          </aside>

          {/* Article body */}
          <article className="max-w-prose">
            <div className="flex items-center gap-3 mb-5">
              <Badge variant="live">Live</Badge>
              <Tag>{cs.tag}</Tag>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-[#1D1D1F] leading-[1.1] mb-8">
              {cs.title}
            </h1>

            {/* Mobile meta */}
            <div className="lg:hidden flex flex-wrap gap-4 mb-8 pb-6 border-b border-[rgba(0,0,0,0.08)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#86868B] mb-0.5">Client</p>
                <p className="text-sm text-[#1D1D1F]">{cs.client}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#86868B] mb-0.5">Stack</p>
                <p className="text-sm text-[#1D1D1F]">{cs.stack}</p>
              </div>
            </div>

            <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#1D1D1F] prose-p:text-[#6E6E73] prose-p:leading-relaxed prose-li:text-[#6E6E73] prose-strong:text-[#1D1D1F]">
              <MDXRemote source={cs.content} />
            </div>

            <div className="mt-16 pt-8 border-t border-[rgba(0,0,0,0.08)]">
              <p className="text-sm text-[#6E6E73] mb-4">Interested in a similar project?</p>
              <Button href="/contact" variant="primary" size="md">
                Start a Project →
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </div>
  )
}
