import React from 'react'
import { Section, Button } from '@/components/ui'
import { landingPageContent } from '@/lib/content'

const CTA: React.FC = () => {
  const { cta } = landingPageContent

  return (
    <Section id="cta" background="gradient">
      <div className="relative overflow-hidden rounded-nezha-xl bg-gradient-to-r from-nezha-primary-500 via-nezha-secondary-500 to-nezha-primary-500 p-12 md:p-16 lg:p-20 text-center shadow-nezha-xl">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-display-sm md:text-display-md lg:text-display-lg font-display font-extrabold text-white mb-6">
            {cta.headline}
          </h2>
          <p className="text-heading-sm md:text-heading-md text-white/90 mb-8 max-w-2xl mx-auto">
            {cta.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="accent"
              size="xl"
              className="bg-white text-nezha-primary-600 hover:bg-nezha-neutral-50 shadow-nezha-lg"
            >
              {cta.primaryCTA}
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              {cta.secondaryCTA}
            </Button>
          </div>

          {/* Trust Features */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            {cta.features.map((feature, index) => (
              <div key={index} className="text-body-md font-medium">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CTA
