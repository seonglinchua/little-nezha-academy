import React from 'react'
import { Section, Badge, Card, Button } from '@/components/ui'
import { landingPageContent } from '@/lib/content'

const Modules: React.FC = () => {
  const { modules } = landingPageContent

  const colorMap = {
    primary: 'bg-gradient-to-br from-nezha-primary-500 to-nezha-primary-600',
    secondary: 'bg-gradient-to-br from-nezha-secondary-500 to-nezha-secondary-600',
    accent: 'bg-gradient-to-br from-nezha-accent-400 to-nezha-accent-500',
    trust: 'bg-gradient-to-br from-nezha-trust-500 to-nezha-trust-600',
    success: 'bg-gradient-to-br from-nezha-success-500 to-nezha-success-600',
  }

  return (
    <Section id="modules" background="gradient">
      <div className="text-center mb-16">
        <Badge variant="secondary" size="lg" className="mb-4">
          {modules.sectionBadge}
        </Badge>
        <h2 className="text-display-sm md:text-display-md font-display font-bold text-nezha-neutral-900 mb-4">
          {modules.headline}
        </h2>
        <p className="text-body-lg text-nezha-neutral-600 max-w-2xl mx-auto">
          {modules.subheadline}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.items.map((module, index) => (
          <Card
            key={module.id}
            variant="default"
            padding="xl"
            className="flex flex-col group"
          >
            {/* Module Icon Header */}
            <div
              className={`text-6xl mb-6 w-20 h-20 flex items-center justify-center rounded-nezha-lg ${
                colorMap[module.color as keyof typeof colorMap]
              } shadow-nezha-md group-hover:scale-110 transition-all`}
            >
              {module.icon}
            </div>

            {/* Module Title */}
            <h3 className="text-heading-lg font-display font-bold text-nezha-neutral-900 mb-3">
              {module.title}
            </h3>

            {/* Module Description */}
            <p className="text-body-md text-nezha-neutral-600 mb-6 leading-relaxed">
              {module.description}
            </p>

            {/* Age & Difficulty */}
            <div className="flex gap-2 mb-6">
              <Badge variant="trust" size="sm">
                {module.ageRange}
              </Badge>
              <Badge variant="accent" size="sm">
                {module.difficulty}
              </Badge>
            </div>

            {/* Features List */}
            <div className="mb-6 flex-grow">
              <ul className="space-y-2">
                {module.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-body-sm text-nezha-neutral-700">
                    <span className="text-nezha-success-500 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Button variant="outline" size="md" fullWidth className="mt-auto">
              Explore {module.title.split(' ')[0]}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Modules
