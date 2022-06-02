import React from 'react'

import styles from './cube.module.sass'
import { motion } from 'framer-motion'

export const BackgroundCube = () => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 3, rotateZ: '0deg' }}
      animate={{ opacity: 1, scale: 1, rotateZ: '-20deg' }}
      transition={{ delay: 0.5, duration: 1.5 }}
      className={styles.cube}
    />
  )
}
