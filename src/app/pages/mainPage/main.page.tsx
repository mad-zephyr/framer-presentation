import React from 'react'
import { BackgroundCube, Button, Player } from '../../components/components'

import styles from './mainPage.module.sass'
import ImgX from '../../assets/images/gemesX.jpeg'
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion';

export const MainPage = (): JSX.Element => {
  const motionVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {delay: 0.2, duration: 1.5}
    },
    exit: {
      opacity: 0,
      y: '-150px',
      transition: {ease: 'easeIn', delay: 0.2, duration: 1.5}
    }
  }

  return ( 
    <motion.section
      variants={motionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      key='main'
      className={styles.section}
    >
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.subtitle}>Streaming</div>
          <div className={styles.title}>Give support and connect with your favourite creators</div>
          <div className={styles.descryptor}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div className={styles.controls}>
            <Button size='big' color='dark'><Link to='/streaming'> Get started </Link></Button>
            <Button size='big' color='light'>Learn more</Button>
          </div>
        </div>
        <Player
          imgURL={ImgX}
          controls={true}
          gamer={'Game tag'}
          title={'World championship PUBG'}
          event={'PUBG Mobile'}
        />
      </div>
        <BackgroundCube />
    </motion.section> 
  )
}