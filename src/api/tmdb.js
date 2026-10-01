import {API_KEY, BASE_URL} from './config'

export const getListUrl = (category, page) =>
  `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`

export const getSearchUrl = (query, page) =>
  `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
    query,
  )}&page=${page}`

export const getDetailsUrl = movieId =>
  `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`

export const getCreditsUrl = movieId =>
  `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
