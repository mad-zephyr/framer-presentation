import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { BackgroundCube, Card, Player, SegmentGroup, Slider, Segment } from '../../components/components'

import styles from './streamingPage.module.sass'
import { motion, Reorder } from 'framer-motion';

import { data } from '../../mock/mock'
import genrestService, { GenresProps } from '../../services/genres.service'
import gameService, { GameProps, GamesList } from '../../services/games.service';

const initialGenres = {
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "games_count": 0,
      "image_background": "http://example.com"
    }
  ]
}

export const StreamingPage = (): JSX.Element => {
  const [isActiveSegment, setActiveSegmen] = useState<number>(0)
  const [genres, setGenres] = useState<GenresProps>(initialGenres)
  const [games, setGames] = useState<Array<GameProps>>()
  const [sliderGames, setSliderGames] = useState<GamesList>()

  const getGenres = async () => {
    const recivedGenres = await genrestService.get()
    setGenres(recivedGenres)
  }

  const getGames = async () => {
    const linksForPopularGames = genres.results[isActiveSegment].games
    const promiseGames = linksForPopularGames?.map(async (data) => await gameService.getGame(`/${data.id}`))
    promiseGames && Promise.all(promiseGames).then(data => setGames(data))
  }

  const getMainGames = async () => {
    const sliderGames = await gameService.getListGame()
    sliderGames && setSliderGames(sliderGames)
  }

  useEffect(() => {
    getGenres()
    getMainGames()
  }, [])

  useEffect(() => {
    getGames()
  }, [isActiveSegment, genres])

  const variantsAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 1.5 }
    },
    exit: {
      opacity: 0,
      y: '-150px',
      transition: {
        ease: 'easeInOut', delay: 0.2, duration: 1.5
      }
    }
  }

  return (
    <motion.section
      variants={variantsAnimation}
      initial={'hidden'}
      animate={'visible'}
      exit={'exit'}
      key='stream'
      className={styles.section}>
      {sliderGames && <Slider classname={styles.mainSlider}>
        {sliderGames?.results?.map(game => (
          <Player
            key={game.id}
            classname={styles.mainSlider__slides}
            gamer={game.platforms[2].platform.name}
            event={game.ratings[0].title}
            activeClass={styles.active}
            controlExpanded={false}
            imgURL={game.background_image}
            title={game.name}
          />
        ))}
      </Slider>}
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <p>Top Genres</p>
          <SegmentGroup> {genres.results.map((games, index) => index < 12 && <Segment
            key={games.id}
            text={games.name}
            active={isActiveSegment}
            setActive={setActiveSegmen}
            index={index}
          />)}</SegmentGroup>
        </div>
        <div className={styles.row}>
          <div className={styles.row__content}>
            {games?.map(game => <Card key={game.id} img={game.background_image} title={game.name} />)}
          </div>
        </div>
      </div>
      <BackgroundCube />
    </motion.section>
  )
}


