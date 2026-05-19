import Link from 'next/link'
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
                {/* LinkedIn brand icon — not in lucide-react v1.x */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
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
