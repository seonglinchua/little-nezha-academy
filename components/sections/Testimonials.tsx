import React from 'react'
import { Section, Badge, Card } from '@/components/ui'
import { landingPageContent } from '@/lib/content'

const Testimonials: React.FC = () => {
  const { testimonials } = landingPageContent

  return (
    <Section id="testimonials" background="light">
      <div className="text-center mb-16">
        <Badge variant="primary" size="lg" className="mb-4">
          {testimonials.sectionBadge}
        </Badge>
        <h2 className="text-display-sm md:text-display-md font-display font-bold text-gradient-nezha mb-4">
          {testimonials.headline}
        </h2>
        <p className="text-body-lg text-nezha-neutral-600 max-w-2xl mx-auto">
          {testimonials.subheadline}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.items.map((testimonial, index) => (
          <Card
            key={index}
            variant="bordered"
            padding="lg"
            className="flex flex-col"
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-nezha-accent-400 text-xl">★</span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-body-md text-nezha-neutral-700 leading-relaxed mb-6 flex-grow">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-nezha-neutral-200">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nezha-primary-400 to-nezha-secondary-400 flex items-center justify-center text-white font-display font-bold">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-display font-bold text-nezha-neutral-900">
                  {testimonial.author}
                </div>
                <div className="text-body-sm text-nezha-neutral-600">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Trust Badge */}
      <div className="mt-12 text-center">
        <p className="text-body-lg text-nezha-neutral-600 mb-4">
          Join thousands of happy families
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="text-center">
            <div className="text-heading-xl font-display font-bold text-nezha-primary-500">4.9/5</div>
            <div className="text-body-sm text-nezha-neutral-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-heading-xl font-display font-bold text-nezha-primary-500">50K+</div>
            <div className="text-body-sm text-nezha-neutral-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-heading-xl font-display font-bold text-nezha-primary-500">100K+</div>
            <div className="text-body-sm text-nezha-neutral-600">Lessons Completed</div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
