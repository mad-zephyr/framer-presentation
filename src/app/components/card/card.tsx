import React from 'react'
import styles from './card.module.sass'
import { CardProps } from './card.props'

export const Card: React.FC<CardProps> = ({ img, title }): JSX.Element => {

  return (
    <div
      className={styles.card}>
      <div className={styles.title}>{title}</div>
      <img src={img} alt="gameCover" />
    </div>
  )
}