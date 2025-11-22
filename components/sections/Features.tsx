import React from 'react'
import { Section, Badge, Card } from '@/components/ui'
import { landingPageContent } from '@/lib/content'

const Features: React.FC = () => {
  const { features } = landingPageContent

  const colorMap = {
    primary: 'text-nezha-primary-500 bg-nezha-primary-50',
    secondary: 'text-nezha-secondary-500 bg-nezha-secondary-50',
    accent: 'text-nezha-accent-500 bg-nezha-accent-50',
    trust: 'text-nezha-trust-500 bg-nezha-trust-50',
    success: 'text-nezha-success-500 bg-nezha-success-50',
  }

  return (
    <Section id="features" background="white">
      <div className="text-center mb-16">
        <Badge variant="primary" size="lg" className="mb-4">
          {features.sectionBadge}
        </Badge>
        <h2 className="text-display-sm md:text-display-md font-display font-bold text-gradient-nezha mb-4">
          {features.headline}
        </h2>
        <p className="text-body-lg text-nezha-neutral-600 max-w-2xl mx-auto">
          {features.subheadline}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.items.map((feature, index) => (
          <Card
            key={index}
            variant="fun"
            padding="lg"
            className="group"
          >
            <div
              className={`text-5xl mb-4 w-16 h-16 flex items-center justify-center rounded-nezha ${
                colorMap[feature.color as keyof typeof colorMap]
              } group-hover:scale-110 transition-transform`}
            >
              {feature.icon}
            </div>
            <h3 className="text-heading-md font-display font-bold text-nezha-neutral-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-body-md text-nezha-neutral-600 leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Features
