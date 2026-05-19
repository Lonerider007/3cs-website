import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Tag } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for 3Cs AI Innovations.',
}

export default function TermsPage() {
  return (
    <Section bgColor="#F5F5F7" className="pt-32 min-h-screen">
      <Container>
        <div className="max-w-prose">
          <Tag className="mb-4">Legal</Tag>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-[#1D1D1F] mt-3 mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-[#86868B] mb-10">Last updated: May 2025</p>

          <div className="flex flex-col gap-8 text-sm text-[#6E6E73] leading-relaxed">

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">1. Agreement</h2>
              <p>
                By accessing or using the website of 3Cs AI Innovations (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;),
                you agree to be bound by these Terms of Service. If you do not agree, please do not use
                this website.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">2. Services</h2>
              <p>
                3Cs AI Innovations provides AI orchestration, automation, and intelligent systems as
                professional services. All services are delivered under separate written agreements between
                the Company and the client. Nothing on this website constitutes an offer, guarantee,
                or binding commitment to deliver any specific service.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">3. Intellectual Property</h2>
              <p>
                All content on this website — including text, design, product descriptions, architecture
                concepts, and code — is the exclusive property of 3Cs AI Innovations. No part of this
                website may be copied, reproduced, distributed, or used without prior written permission
                from the Company.
              </p>
              <p className="mt-3">
                Products described on this website, including ORBOX and Delta AI Trading Bot, are
                proprietary systems. All rights are reserved. Unauthorised replication, reverse engineering,
                or commercial use is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">4. Use of Website</h2>
              <p>You agree to use this website only for lawful purposes. You must not:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Use the site in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorised access to any part of the site or its infrastructure</li>
                <li>Submit false or misleading information through the contact form</li>
                <li>Use automated tools to scrape, crawl, or extract content from this website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">5. Limitation of Liability</h2>
              <p>
                This website is provided &quot;as is&quot; without warranties of any kind. 3Cs AI Innovations
                is not liable for any direct, indirect, incidental, or consequential damages arising from
                your use of or inability to use this website or its content.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">6. Confidentiality</h2>
              <p>
                Any information you share with us through the contact form will be treated as confidential
                and used solely for the purpose of evaluating and responding to your enquiry. We will not
                disclose your information to third parties without your consent.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">7. Third-Party Links</h2>
              <p>
                This website may contain links to third-party platforms (e.g. GitHub). We are not
                responsible for the content, privacy practices, or terms of those external sites.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">8. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes shall be subject to the
                exclusive jurisdiction of the courts of Delhi, India.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">9. Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms at any time. Continued use of this website
                after changes constitutes your acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">10. Contact</h2>
              <p>
                For any questions regarding these Terms, contact us at{' '}
                <a href="mailto:samsungsumitv461@gmail.com" className="text-[#0071E3] hover:underline">
                  samsungsumitv461@gmail.com
                </a>.
                <br />
                3Cs AI Innovations · Delhi, India
              </p>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  )
}
