import {useEffect, useState} from 'react'

const MAX_PAGES = 500

const useMovieList = buildUrl => {
  const [page, setPage] = useState(1)
  const [state, setState] = useState({
    status: 'loading',
    movies: [],
    totalPages: 1,
  })

  useEffect(() => {
    let ignore = false

    const load = async () => {
      setState(prev => ({...prev, status: 'loading'}))
      try {
        const response = await fetch(buildUrl(page))
        const data = await response.json()
        if (ignore) return
        if (!data || !Array.isArray(data.results)) {
          throw new Error('Bad response')
        }
        setState({
          status: 'success',
          movies: data.results,
          totalPages: Math.min(data.total_pages || 1, MAX_PAGES),
        })
      } catch (error) {
        if (!ignore) {
          setState({status: 'failure', movies: [], totalPages: 1})
        }
      }
    }

    load()

    return () => {
      ignore = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return {...state, page, setPage}
}

export default useMovieList
