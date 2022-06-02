import { ReactNode, SetStateAction } from 'react';

export interface SegmentProps {
  text: string
  index: number
  active: number
  setActive: Function
}


export interface SegmentGroupProps {
  children: ReactNode
}