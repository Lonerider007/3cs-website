import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Tag } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for 3Cs AI Innovations.',
}

export default function PrivacyPage() {
  return (
    <Section bgColor="#F5F5F7" className="pt-32 min-h-screen">
      <Container>
        <div className="max-w-prose">
          <Tag className="mb-4">Legal</Tag>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-[#1D1D1F] mt-3 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#86868B] mb-10">Last updated: May 2025</p>

          <div className="flex flex-col gap-8 text-sm text-[#6E6E73] leading-relaxed">

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">1. Overview</h2>
              <p>
                3Cs AI Innovations (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting the privacy
                of individuals who interact with our website at 3csinnovation.netlify.app and any associated
                services. This policy explains what information we collect, how we use it, and your rights
                in relation to it.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">2. Information We Collect</h2>
              <p className="mb-3">We collect only the information you voluntarily provide through our contact form:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Company or organisation name</li>
                <li>Service of interest</li>
                <li>Project description</li>
              </ul>
              <p className="mt-3">
                We do not collect cookies, tracking pixels, analytics identifiers, or any data through
                passive means. We do not use Google Analytics, Meta Pixel, or any third-party tracking tools.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">3. How We Use Your Information</h2>
              <p>Information submitted through our contact form is used solely to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to your enquiry</li>
                <li>Assess whether our services are a fit for your requirements</li>
                <li>Communicate with you regarding your project</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or share your information with any third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">4. Data Storage</h2>
              <p>
                Contact form submissions are delivered directly to our business email. We do not maintain
                a database of contact form entries beyond standard email storage. Data is retained only
                as long as necessary to fulfil the purpose for which it was submitted.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Request access to any personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent to any communication from us at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:samsungsumitv461@gmail.com" className="text-[#0071E3] hover:underline">
                  samsungsumitv461@gmail.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">6. Third-Party Services</h2>
              <p>
                Our website is hosted on Netlify. Email delivery uses Gmail SMTP. These services operate
                under their own privacy policies. We do not share your data with these services beyond
                what is technically necessary for website operation and email delivery.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">7. Changes to This Policy</h2>
              <p>
                We may update this policy as our services evolve. Any changes will be reflected on this
                page with an updated date. Continued use of our website after changes constitutes acceptance
                of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">8. Contact</h2>
              <p>
                For any privacy-related questions, write to us at{' '}
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
