import { ReactNode } from 'react';

export interface ButtonProps {
  size?: 'small' | 'big'
  color?: 'light' | 'dark'
  className?: string
  children: ReactNode
}