
import {useHistory} from 'react-router-dom'
import {getPosterUrl} from '../api/config'
import './MovieCard.css'

const MovieCard = ({movie}) => {
  const history = useHistory()
  const {id, title, poster_path: posterPath, vote_average: rating} = movie
  const posterUrl = getPosterUrl(posterPath)

  return (
    <article className="movie-card">
      <div className="movie-card__poster">
        {posterUrl ? (
          <img src={posterUrl} alt={`${title} poster`} loading="lazy" />
        ) : (
          <div className="movie-card__poster movie-card__poster--placeholder">
            No Image
          </div>
        )}
        <span className="movie-card__rating">{rating}</span>
      </div>
      <h3 className="movie-card__title">{title}</h3>
      <button
        type="button"
        className="movie-card__cta"
        onClick={() => history.push(`/movies/${id}`)}
      >
        View Details
      </button>
    </article>
  )
}

export default MovieCard