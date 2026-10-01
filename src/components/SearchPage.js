import {useLocation} from 'react-router-dom'
import useMovieList from '../hooks/useMovieList'
import {getSearchUrl} from '../api/tmdb'
import MovieListPage from './MovieListPage'

const SearchResults = ({query}) => {
  const {status, movies, totalPages, page, setPage} = useMovieList(p =>
    getSearchUrl(query, p),
  )

  return (
    <MovieListPage
      title={`Results for "${query}"`}
      movies={movies}
      isLoading={status === 'loading'}
      isError={status === 'failure'}
      page={page}
      totalPages={totalPages}
      onPageChange={setPage}
      emptyMessage={`No movies match "${query}".`}
    />
  )
}

const SearchPage = () => {
  const location = useLocation()
  const query = (new URLSearchParams(location.search).get('q') || '').trim()

  if (!query) {
    return (
      <div className="page">
        <p className="message">Type a movie name and press Search</p>
      </div>
    )
  }

  return <SearchResults key={`search-${query}`} query={query} />
}

export default SearchPage
