import MovieCard from './MovieCard'
import './MovieGrid.css'

const MovieGrid = ({movies}) => (
  <div className="movie-grid">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
)

export default MovieGrid
