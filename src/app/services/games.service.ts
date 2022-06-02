import httpService from './http.service'

const GameEndpoint = '/games'

export interface GameProps {
  id: number
  slug: string
  name: string
  name_original: string
  description: string
  metacritic: number
  metacritic_platforms: {
    metascore: number
    url: string
  }[]
  released: Date
  tba: true
  updated: Date
  background_image: string
  background_image_additional: string
  website: string
  rating: number
  rating_top: number
  ratings: {}
  reactions: {}
  added: number
  added_by_status: {}
  playtime: number
  screenshots_count: number
  movies_count: number
  creators_count: number
  achievements_count: number
  parent_achievements_count: string
  reddit_url: string
  reddit_name: string
  reddit_description: string
  reddit_logo: string
  reddit_count: number
  twitch_count: string
  youtube_count: string
  reviews_text_count: string
  ratings_count: number
  suggestions_count: number
  alternative_names: string[]
  metacritic_url: string
  parents_count: number
  additions_count: number
  game_series_count: number
  esrb_rating: {
    id: number
    slug: string
    name: string
  }
  platforms: {
    platform: {
      id: number
      slug: string
      name: string
    }
    released_at: string
    requirements: {
      minimum: string
      recommended: string
    }
  }[]
}

export interface GamesList {
  count: number
  next: string
  previous: string
  results: {
    id: number
    slug: string,
    name: string,
    released: string,
    tba: true,
    background_image: string
    rating: number
    rating_top: number
    ratings: {
      count: number
      id: number
      percent: number
      title: "exceptional"
    }[],
    ratings_count: number
    reviews_text_count: string,
    added: number
    added_by_status: {},
    metacritic: number
    playtime: number
    suggestions_count: number
    updated: Date
    esrb_rating: {
      id: number
      slug: string,
      name: string
    },
    platforms: {
      platform: {
        games_count: number
        id: number 
        image_background: string
        name: string
        slug: string
      },
      released_at: string,
      requirements: {
        minimum: string,
        recommended: string
      }
    }[]
  }[]
}

const gameService = {
  getGame: async (id?:string):Promise<GameProps>  => {
    const { data } = await httpService.get(`${GameEndpoint}${id}`)
    return data  
  },
  getListGame: async ():Promise<GamesList> => {
    const { data } = await httpService.get(`${GameEndpoint}`)
    return data
  }
}
export default gameService

