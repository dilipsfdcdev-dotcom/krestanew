import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { FeaturedProject } from '@/components/sections/FeaturedProject'
import { HighlightsSection } from '@/components/sections/HighlightsSection'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProject />
      <HighlightsSection />
      <CTASection />
    </>
  )
}
