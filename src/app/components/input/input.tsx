import React from 'react'
import { InputProps } from './inputProps'
import cn from 'classnames'
import style from './input.module.sass'

export const Input: React.FC<InputProps> = ({children, className, ...props}): JSX.Element => {

  return (
    <div className={cn(style.input, className)}>
      <label htmlFor="" className={style.label}>
        {children}
        <input
          {...props}
          type="text" />
      </label>
    </div>
  )
}