import React from 'react'
import { Button } from '../button/button'

import { ReactComponent as LiveIcon } from '../../assets/monitor.svg'
import { ReactComponent as SearchIcon } from '../../assets/search.svg'
import avatar from '../../assets/avatar.jpg'

import styles from './header.module.sass'
import { Input } from '../components'
import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {
  return (
    <header className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.logo}> <Link to='/'>ENDA TV</Link> </div>
          <Button>LIVE<LiveIcon /></Button>
        </div>
        <Input className={styles.search}> <SearchIcon /></Input>
        <div className={styles.controls}>
          <div className={styles.avatar}>
            <img src={avatar} alt="avatar" />
            <div className={styles.counter}>12</div>
          </div>
          <Button size='small' color='dark'><Link to='/reorder'> Login  </Link></Button>
          <Button size='small' color='dark'> Sign Up</Button>
        </div>
      </div>
    </header>
  )
}

