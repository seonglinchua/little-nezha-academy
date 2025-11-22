import React from 'react'

export interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'fun' | 'bordered' | 'gradient'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  hover?: boolean
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  hover = true,
}) => {
  const baseStyles = 'rounded-nezha-lg transition-all duration-300'

  const variants = {
    default: 'bg-white shadow-nezha-md',
    fun: 'nezha-card-fun',
    bordered: 'bg-white border-2 border-nezha-primary-200 shadow-nezha-sm',
    gradient: 'nezha-gradient-fun text-white shadow-nezha-lg',
  }

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  }

  const hoverStyles = hover && variant !== 'gradient'
    ? 'hover:shadow-nezha-lg hover:-translate-y-1'
    : ''

  return (
    <div className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}

export default Card
