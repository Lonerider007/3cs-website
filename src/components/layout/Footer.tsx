import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Container } from './Container'
import { Separator } from '@/components/ui'

const solutionLinks = [
  { label: 'AI Orchestration', href: '/solutions#orchestration' },
  { label: 'AI Automation', href: '/solutions#automation' },
  { label: 'Intelligent Workflows', href: '/solutions#workflows' },
  { label: 'AI Integrations', href: '/solutions#integrations' },
  { label: 'Analytics Infrastructure', href: '/solutions#analytics' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-[#1D1D1F] text-white">
      <Container>
        <div className="pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Col 1: Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-1.5 mb-4">
                <span className="font-bold text-lg">3Cs</span>
                <span className="font-medium text-lg text-[#0071E3]">AI</span>
              </div>
              <p className="text-sm text-[#86868B] leading-relaxed max-w-[220px]">
                AI Orchestration & Automation Systems For Modern Businesses
              </p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-[#86868B] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Col 2: Solutions */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6E6E73] mb-4">
                Solutions
              </p>
              <ul className="space-y-3">
                {solutionLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#86868B] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6E6E73] mb-4">
                Company
              </p>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#86868B] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Legal */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6E6E73] mb-4">
                Legal
              </p>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-sm text-[#86868B] hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-[#86868B] hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mt-12 mb-6 border-[rgba(255,255,255,0.08)]" />

          <p className="text-xs text-[#86868B]">
            © 2025 3Cs AI Innovations. All rights reserved. Delhi, India.
          </p>
        </div>
      </Container>
    </footer>
  )
}
