import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import MovieGrid from './MovieGrid'
import Pagination from './Pagination'

const MovieListPage = ({
  title,
  movies = [],
  isLoading,
  isError,
  page,
  totalPages,
  onPageChange,
  emptyMessage = 'No movies found.',
}) => (
  <div className="page container">
    <div className="page-heading">
      <h1 className="page-heading__title">{title}</h1>
      <span className="page-heading__rule" />
    </div>

    {isLoading && <Loader />}

    {!isLoading && isError && (
      <ErrorMessage message="We couldn't load these movies right now. Please try again in a moment." />
    )}

    {!isLoading && !isError && movies.length === 0 && (
      <ErrorMessage title="No results" message={emptyMessage} />
    )}

    {!isLoading && !isError && movies.length > 0 && (
      <>
        <MovieGrid movies={movies} />
        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={onPageChange}
        />
      </>
    )}
  </div>
)

export default MovieListPage
