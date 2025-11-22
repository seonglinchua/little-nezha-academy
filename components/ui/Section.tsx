import React from 'react'
import Container from './Container'

export interface SectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  background?: 'white' | 'light' | 'gradient' | 'primary'
  id?: string
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerSize = 'lg',
  background = 'white',
  id,
}) => {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-nezha-neutral-50',
    gradient: 'bg-gradient-to-br from-nezha-primary-50 via-nezha-accent-50 to-nezha-secondary-50',
    primary: 'nezha-gradient-primary text-white',
  }

  return (
    <section id={id} className={`nezha-section ${backgrounds[background]} ${className}`}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}

export default Section
