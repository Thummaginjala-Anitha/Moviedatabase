import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CategoryPage from './components/CategoryPage'
import SearchPage from './components/SearchPage'
import MovieDetailsPage from './components/MovieDetailsPage'
import './App.css'

const NotFound = () => (
  <div className="page">
    <p className="message">Page not found</p>
  </div>
)

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route
        exact
        path="/"
        render={() => <CategoryPage key="popular" category="popular" />}
      />
      <Route
        exact
        path="/top-rated"
        render={() => <CategoryPage key="top_rated" category="top_rated" />}
      />
      <Route
        exact
        path="/upcoming"
        render={() => <CategoryPage key="upcoming" category="upcoming" />}
      />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
