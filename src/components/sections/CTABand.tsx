import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui'
import { FadeIn } from '@/components/motion/FadeIn'

export function CTABand() {
  return (
    <section className="bg-[#1D1D1F] py-20">
      <Container>
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.01em]">
              Ready to automate your operations?
            </h2>
            <Button href="/contact" variant="primary" size="lg" className="shrink-0">
              Get in Touch →
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
