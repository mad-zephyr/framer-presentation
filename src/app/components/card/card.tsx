import React from 'react'
import styles from './card.module.sass'
import { CardProps } from './card.props'
import { motion } from 'framer-motion';

export const Card: React.FC<CardProps> = ({ img, title }): JSX.Element => {
  
  const motionVariants = {
    hidden: {
      opacity: 0,
      x: '100vw '
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {delay: 0.5, duration: 1.5}
    },
    exit: {
      opacity: 0,
      x: '-20vh',
      transition: {ease: 'easeInOut', delay: 1, duration: 1.5}
    }
  }
  return (
    <motion.div
      variants={motionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      key={img}
      className={styles.card}>
      <div className={styles.title}>{title}</div>
      <img src={img} alt="gameCover" />
    </motion.div>
  )
}