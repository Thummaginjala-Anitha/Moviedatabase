import {useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  {label: 'Popular', to: '/'},
  {label: 'Top Rated', to: '/top-rated'},
  {label: 'Upcoming', to: '/upcoming'},
]

const Navbar = () => {
  const [query, setQuery] = useState('')
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault()
    const trimmed = query.trim()
    if (trimmed) {
      history.push(`/search?q=${encodeURIComponent(trimmed)}`)
    }
  }

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <NavLink to="/" className="navbar__brand-link">
          <h1 className="navbar__brand">movieDB</h1>
        </NavLink>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              exact={link.to === '/'}
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <h1 className="navbar__link-title">{link.label}</h1>
            </NavLink>
          ))}
        </nav>

        <form className="navbar__search" onSubmit={handleSubmit} role="search">
          <input
            type="text"
            placeholder="Search movies…"
            aria-label="Search movies"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  )
}

export default Navbar
