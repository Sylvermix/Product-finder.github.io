/**
 * Button — DS-AI
 * Figma: https://www.figma.com/design/CVNmGt7NvV58jNCoqcvins/DS-AI
 * Node: General > Button (11:892)
 */
import { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', fullWidth = false, className, children, ...props }, ref) => {
    const classes = [
      styles.button,
      variant === 'secondary' ? styles.secondary : styles.primary,
      fullWidth ? styles.fullWidth : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
