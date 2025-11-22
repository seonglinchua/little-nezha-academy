import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, fullWidth = false, className = '', ...props }, ref) => {
    const baseStyles = 'nezha-btn inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'nezha-gradient-primary text-white hover:shadow-nezha-lg',
      secondary: 'bg-nezha-secondary-500 text-white hover:bg-nezha-secondary-600',
      accent: 'bg-nezha-accent-400 text-nezha-neutral-900 hover:bg-nezha-accent-500',
      outline: 'border-2 border-nezha-primary-500 text-nezha-primary-600 hover:bg-nezha-primary-50',
      ghost: 'text-nezha-primary-600 hover:bg-nezha-primary-50',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl',
    }

    const widthClass = fullWidth ? 'w-full' : ''

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
