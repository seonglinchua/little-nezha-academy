import React from 'react'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'trust'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-display font-semibold rounded-full'

  const variants = {
    primary: 'bg-nezha-primary-100 text-nezha-primary-700',
    secondary: 'bg-nezha-secondary-100 text-nezha-secondary-700',
    accent: 'bg-nezha-accent-100 text-nezha-accent-700',
    success: 'bg-nezha-success-100 text-nezha-success-700',
    trust: 'bg-nezha-trust-100 text-nezha-trust-700',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
