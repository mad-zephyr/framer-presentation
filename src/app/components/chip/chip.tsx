import React from 'react'
import { ChipProps } from './chip.props'

import styles from './chip.module.sass'

export const Chip: React.FC<ChipProps> = ({children}): JSX.Element => {

  return (
    <div className={styles.section}>{ children}</div>
  )
}