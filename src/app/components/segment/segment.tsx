import React, { SyntheticEvent, useState } from 'react'

import { LayoutGroup, motion } from 'framer-motion'
import { SegmentGroupProps, SegmentProps } from './segment.props' 

import styles from './segment.module.sass'

const ActiveBorder: React.FC = (): JSX.Element => {
  return (
    <motion.div
      layoutId='border'
      className={styles.border}
    >
    </motion.div>
  )
}
const ActiveHighlight: React.FC = (): JSX.Element => {
  return (
    <motion.div
      layoutId='highligth'
      initial={{opacity: 0}}
      animate={{ opacity: 1 }} 
      transition={{delay: 0.1, duration: 0.3}}
      className={styles.highlight}
    >
    </motion.div>
  )
}

export const Segment: React.FC<SegmentProps> = ({ active, setActive, index, text }): JSX.Element => {
  const [isHover, setHover] = useState<boolean>(false)
  const handlerSetActive = () => setActive(index)
  const handleHover = (e: SyntheticEvent) => { 
    e.type === 'mouseenter'
      ? setHover(true)
      : setHover(false)
  } 
  return (
    <div
      className={styles.segment}
      onClick={handlerSetActive}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {text}
      {active === index && <ActiveBorder />}
      {isHover && <ActiveHighlight />}
    </div>
  )
}

export const SegmentGroup: React.FunctionComponent<SegmentGroupProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.section}>
      {children}
      <div className={styles.wrapper}> </div>
    </div>
  )
}