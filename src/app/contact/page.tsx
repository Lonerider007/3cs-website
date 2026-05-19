import type { Metadata } from 'next'
import { Mail, ExternalLink, Clock } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Tag } from '@/components/ui'
import { ContactForm } from '@/components/sections/ContactForm'
import { SlideUp } from '@/components/motion/SlideUp'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with 3Cs AI Innovations. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <Section bgColor="#F5F5F7" className="pt-32 min-h-screen">
      <Container>
        <SlideUp>
          <Tag className="mb-4">Contact</Tag>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.02em] text-[#1D1D1F] max-w-lg leading-[1.05] mt-3">
            Start a Conversation
          </h1>
          <p className="mt-4 text-lg text-[#6E6E73] max-w-md leading-relaxed">
            Tell us what you&apos;re building. We&apos;ll tell you how AI can make it work better.
          </p>
        </SlideUp>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form — 2/3 */}
          <div className="lg:col-span-2">
            <SlideUp delay={0.1}>
              <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm p-8 md:p-10">
                <ContactForm />
              </div>
            </SlideUp>
          </div>

          {/* Contact info — 1/3 */}
          <div className="flex flex-col gap-6">
            <SlideUp delay={0.2}>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#0071E3]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#86868B] mb-0.5">Email</p>
                    <a href="mailto:samsungsumitv461@gmail.com" className="text-sm text-[#1D1D1F] hover:text-[#0071E3] transition-colors">
                      samsungsumitv461@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center shrink-0">
                    <ExternalLink size={16} className="text-[#0071E3]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#86868B] mb-0.5">LinkedIn</p>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#1D1D1F] hover:text-[#0071E3] transition-colors">
                      3Cs AI Innovations
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-[#0071E3]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#86868B] mb-0.5">Response Time</p>
                    <p className="text-sm text-[#1D1D1F]">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </Container>
    </Section>
  )
}
