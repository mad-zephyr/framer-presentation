import React, { useState } from 'react'
import { motion } from 'framer-motion'
import cn from 'classnames'

import { PlayerProps } from './player.props'
import { ReactComponent as PlayIcon } from './assets/play.svg'
import { ReactComponent as VolIcon } from './assets/volume.svg'
import { ReactComponent as SettingsIcon } from './assets/settings.svg'
import { ReactComponent as FulscreenIcon } from './assets/maximize.svg'
import { ReactComponent as EyeIcon } from './assets/eye.svg'

import image from '../../assets/images/gemesX.jpeg'

import styles from './player.module.sass'
import { Chip } from '../components'
import { setWindowOverflow } from './../../helpers/setWindowOverflow';

export const Player: React.FC<PlayerProps> = ({ imgURL = image, controlExpanded = true, controls = false, gamer, title, event, classname, live }): JSX.Element => {
  const [isControlExpanded, setIsControlExpanded] = useState<boolean>(controlExpanded)
  const [isFullcreen, setFullcreen] = useState<boolean>(false)
  const handlerExpand = () => {
    setFullcreen(prevState => {
      setWindowOverflow(!prevState)
      return !prevState
    })
    setIsControlExpanded(prevState => !prevState)
  }

  return (
    <motion.div
      layout
      initial={styles.player}
      animate={{ x: 0, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className={cn(classname, styles.player, {
        [styles.player__fullscreen]: isFullcreen
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.live}><Chip>Live</Chip></div>
        <img className={styles.screen} src={imgURL} alt="" />
        {controls && <div className={cn(styles.controls, { [styles.controls__expanded]: isControlExpanded })}>
          <div className={styles.left}>
            <PlayIcon />
            <VolIcon />
            <Chip>Live</Chip>
          </div>
          <div className={styles.center}></div>
          <div className={styles.right}>
            <Chip><EyeIcon />4.1k viewers</Chip>
            <SettingsIcon />
            <FulscreenIcon onClick={handlerExpand} />
          </div>
        </div>}
        {!controls && <div className={styles.sticker}>
          <div className={styles.gamer}>{gamer}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.event}>{event}</div>
        </div>}
      </div>
    </motion.div>
  )
}