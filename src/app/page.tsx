import type { Metadata } from 'next'
import { siteConfig } from '@/lib/metadata'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesStrip } from '@/components/sections/ServicesStrip'
import { AboutTeaser } from '@/components/sections/AboutTeaser'
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesStrip />
      <AboutTeaser />
      <CaseStudiesPreview />
      <CTABand />
    </>
  )
}
