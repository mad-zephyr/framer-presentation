import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as InstaIcon } from '../../assets/social-icons/instagram.svg'
import { ReactComponent as Fbicon } from '../../assets/social-icons/facebook.svg'
import { ReactComponent as TweeterIcon } from '../../assets/social-icons/twitter.svg'
import { ReactComponent as YoutubeIcon } from '../../assets/social-icons/youtube.svg'

import styles from './footer.module.sass'

export const Footer: React.FC = (): JSX.Element => {
  
  const links = [
    {link: '/Features', title: 'Features'},
    {link: '/Integrations', title: 'Integrations'},
    {link: '/Security', title: 'Security'},
    {link: '/Support', title: 'Support'},
  ]

  const socialLinks = [
    {component: <InstaIcon />, link: 'instagram.com'},
    {component: <Fbicon />, link: 'facebook.com'},
    {component: <TweeterIcon />, link: 'tweeter.com'},
    {component: <YoutubeIcon />, link: 'youtube.com'},
  ]
 
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.left}>
          <div className={styles.logo}> <Link to='/'> LOGO</Link> </div>
          <div className={styles.links}>
            {links.map((link, index) => (
              <Link key={link.title + index} to={`${link.link}`}>{link.title} </Link>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          {socialLinks.map((link, index) => (
            <a key={link.link + index} href={`https://${link.link}`} target='_blank' rel="noreferrer">{link.component }</a>
          ))}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.left}>
          <div className={styles.descriptor}>© 2021 Company Ltd. All rights reserved</div>
        </div>
        <div className={styles.right}>
          <div className={styles.descriptor}>Privacy Policy</div>
          <div className={styles.descriptor}>Terms of Service</div>
        </div>
      </div>
    </footer>
  )
}