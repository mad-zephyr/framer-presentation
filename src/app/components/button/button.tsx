import React from 'react'
import { ButtonProps } from './buttonProps'
import styles from './button.module.sass'
import cn from 'classnames'

export const Button: React.FC<ButtonProps> = ({ children, className, size, color }): JSX.Element => {
  
  return (
    <button className={cn(className, styles.btn, {
      [styles.small]: size === 'small',
      [styles.big]: size === 'big',
      [styles.light]: color === 'light',
      [styles.dark]: color === 'dark',
    })} >{children}</button>
  )
}