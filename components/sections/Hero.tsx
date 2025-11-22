'use client'

import React from 'react'
import { Button, Badge, Container } from '@/components/ui'
import { landingPageContent } from '@/lib/content'

const Hero: React.FC = () => {
  const { hero } = landingPageContent

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nezha-primary-50 via-white to-nezha-accent-50 pt-20 pb-32 md:pt-28 md:pb-40">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-nezha-secondary-200 rounded-full opacity-20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-nezha-accent-200 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-nezha-primary-100 rounded-full opacity-10 blur-3xl" />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <Badge variant="accent" size="lg" className="mb-6 animate-bounce-slow">
            {hero.badge}
          </Badge>

          {/* Main Headline */}
          <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-display font-extrabold text-gradient-fun mb-6 max-w-5xl">
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-heading-sm md:text-heading-md text-nezha-neutral-700 mb-4 max-w-3xl">
            {hero.subheadline}
          </p>

          {/* Description */}
          <p className="text-body-lg text-nezha-neutral-600 mb-8 max-w-2xl">
            {hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="primary" size="xl" className="group">
              {hero.primaryCTA}
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
            <Button variant="outline" size="xl">
              {hero.secondaryCTA} 🎥
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-nezha-neutral-600">
            {hero.trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-body-md font-medium">
                <span className="text-nezha-success-500">{badge}</span>
              </div>
            ))}
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 w-full max-w-5xl relative">
            <div className="relative rounded-nezha-xl overflow-hidden shadow-nezha-xl border-4 border-white bg-gradient-to-br from-nezha-trust-100 to-nezha-primary-100 aspect-video flex items-center justify-center">
              {/* Placeholder for hero illustration/screenshot */}
              <div className="text-center p-8">
                <div className="text-6xl mb-4 animate-bounce-slow">🎒✨</div>
                <p className="text-heading-lg font-display text-nezha-primary-600">
                  Interactive Learning Dashboard
                </p>
                <p className="text-body-lg text-nezha-neutral-600 mt-2">
                  Replace with actual product screenshot or illustration
                </p>
              </div>

              {/* Slide Navigation Controls */}
              <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                {/* Previous Button */}
                <button className="pointer-events-auto bg-white/90 hover:bg-white rounded-full p-3 shadow-nezha-md transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-nezha-primary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nezha-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button */}
                <button className="pointer-events-auto bg-white/90 hover:bg-white rounded-full p-3 shadow-nezha-md transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-nezha-primary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nezha-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-nezha-primary-600"></div>
                <div className="w-2 h-2 rounded-full bg-nezha-neutral-300"></div>
                <div className="w-2 h-2 rounded-full bg-nezha-neutral-300"></div>
                <div className="w-2 h-2 rounded-full bg-nezha-neutral-300"></div>
              </div>
            </div>

            {/* Floating Module Icons */}
            <div className="absolute -top-8 -left-8 bg-white rounded-nezha-lg shadow-nezha-md p-4 animate-float hidden lg:block">
              <div className="text-4xl">⏰</div>
            </div>
            <div className="absolute -top-8 -right-8 bg-white rounded-nezha-lg shadow-nezha-md p-4 animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl">🧮</div>
            </div>
            <div className="absolute -bottom-8 left-1/4 bg-white rounded-nezha-lg shadow-nezha-md p-4 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
              <div className="text-4xl">📚</div>
            </div>
            <div className="absolute -bottom-8 right-1/4 bg-white rounded-nezha-lg shadow-nezha-md p-4 animate-float hidden lg:block" style={{ animationDelay: '1.5s' }}>
              <div className="text-4xl">🧩</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
