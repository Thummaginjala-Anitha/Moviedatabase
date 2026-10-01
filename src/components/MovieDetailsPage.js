import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getDetailsUrl, getCreditsUrl} from '../api/tmdb'
import {getPosterUrl} from '../api/config'
import CastCard from './CastCard'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'

const MAX_CAST = 12

const MovieDetailsPage = () => {
  const {movieId} = useParams()
  const [state, setState] = useState({status: 'loading', movie: null, cast: []})

  useEffect(() => {
    let ignore = false
    setState({status: 'loading', movie: null, cast: []})

    Promise.all([
      fetch(getDetailsUrl(movieId)).then(response => response.json()),
      fetch(getCreditsUrl(movieId)).then(response => response.json()),
    ])
      .then(([movie, credits]) => {
        if (ignore) return
        if (!movie || !movie.id) throw new Error('Bad response')
        setState({
          status: 'success',
          movie,
          cast: (credits.cast || []).slice(0, MAX_CAST),
        })
      })
      .catch(() => {
        if (!ignore) setState({status: 'failure', movie: null, cast: []})
      })

    return () => {
      ignore = true
    }
  }, [movieId])

  const {status, movie, cast} = state

  if (status === 'loading') {
    return (
      <div className="page">
        <Loader />
      </div>
    )
  }

  if (status === 'failure') {
    return (
      <div className="page">
        <ErrorMessage />
      </div>
    )
  }

  const posterUrl = getPosterUrl(movie.poster_path)
  const genres = (movie.genres || []).map(genre => genre.name).join(', ')

  return (
    <div className="page">
      <section className="details">
        {posterUrl && (
          <img className="details__poster" src={posterUrl} alt={movie.title} />
        )}
        <div className="details__info">
          <h2 className="details__title">{movie.title}</h2>
          <p className="rating">{movie.vote_average}</p>
          {movie.runtime ? <p>{movie.runtime} minutes</p> : null}
          {genres && <p>{genres}</p>}
          <p>{movie.release_date}</p>
          <p className="details__overview">{movie.overview}</p>
        </div>
      </section>

      <section>
        <h2>Cast</h2>
        <div className="cast-grid">
          {cast.map(member => (
            <CastCard key={member.credit_id || member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default MovieDetailsPage
