
import { DetailedHTMLProps, HtmlHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>  {
  className?: string
  children: ReactNode

}