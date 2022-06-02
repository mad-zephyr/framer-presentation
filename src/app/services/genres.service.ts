import httpService from './http.service'

const GenresEndpoint = '/genres'

interface Genre {
  games?: Array<GenreGameProps>
  id: number 
  name: string
  slug: string
  games_count: number
  image_background: string
}

interface GenreGameProps {
  id: number
  slug: string
  added: number
}
 
export interface GenresProps {
  count: number
  next: string
  previous: string
  results: Array<Genre>
}

const genrestService = {
  get: async ():Promise<GenresProps>  => {
    const { data } = await httpService.get(GenresEndpoint)
    return data
  }
}
export default genrestService