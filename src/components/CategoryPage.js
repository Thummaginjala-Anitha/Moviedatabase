import useMovieList from '../hooks/useMovieList'
import {getListUrl} from '../api/tmdb'
import MovieListPage from './MovieListPage'

const TITLES = {
  popular: 'Trending now',
  top_rated: 'Critics picks',
  upcoming: 'Coming soon',
}

const CategoryPage = ({category}) => {
  const {status, movies, totalPages, page, setPage} = useMovieList(p =>
    getListUrl(category, p),
  )

  return (
    <MovieListPage
      title={TITLES[category]}
      movies={movies}
      isLoading={status === 'loading'}
      isError={status === 'failure'}
      page={page}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  )
}

export default CategoryPage
