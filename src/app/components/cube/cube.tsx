import React from 'react' 

import styles from './cube.module.sass'
import { motion } from 'framer-motion';

export const BackgroundCube = () => {
 
  return (
    <motion.div
      initial={{ scale:3, opacity: 0, rotateZ: '0deg' }}
      animate={{ scale:1, opacity: 1, rotateZ: '20deg' }}
      exit={{ scale:3, opacity: 0 }}
      transition={{delay: 1.5, duration: 1}}
      className={styles.cube}
    /> 
  )
}
