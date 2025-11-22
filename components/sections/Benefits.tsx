import React from 'react'
import { Section, Badge, Card } from '@/components/ui'
import { landingPageContent } from '@/lib/content'

const Benefits: React.FC = () => {
  const { benefits } = landingPageContent

  return (
    <Section id="benefits" background="primary">
      <div className="text-center mb-16">
        <Badge variant="accent" size="lg" className="mb-4 bg-white/20 text-white border-2 border-white/30">
          {benefits.sectionBadge}
        </Badge>
        <h2 className="text-display-sm md:text-display-md font-display font-bold text-white mb-4">
          {benefits.headline}
        </h2>
        <p className="text-body-lg text-white/90 max-w-2xl mx-auto">
          {benefits.subheadline}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.items.map((benefit, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-nezha-lg p-8 text-center border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{benefit.icon}</div>
            <div className="text-display-md font-display font-extrabold text-white mb-2">
              {benefit.stat}
            </div>
            <h3 className="text-heading-sm font-display font-bold text-white mb-3">
              {benefit.title}
            </h3>
            <p className="text-body-sm text-white/80 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Benefits
