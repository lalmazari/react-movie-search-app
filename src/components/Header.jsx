import { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../contexts/MoviesContext'
import axios from 'axios'

function Header() {

  const { setMovies } = useContext(MoviesContext)
  const [searchQuery, setSearchQuery] = useState('')

  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;
  const FEATURED_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

  useEffect(() => {
    getMovies(FEATURED_URL)
  },[])

  const getMovies = async (API) => {
    const { data } = await axios.get(API);
    setMovies(data.results);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchQuery) {
      getMovies(SEARCH_URL + searchQuery)
      setSearchQuery('')
    }
  }

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className='row'>
      <div className='col'>
        <h1 className='display-3 text-center pt-5'>Search Your Favourite Movie</h1>
        <div className='row py-3 d-flex justify-content-center'>
          <form className="input-group w-50 " onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search a Movie"
              value={searchQuery}
              onChange={handleOnChange}
              aria-label="Search"
              aria-describedby="search-addon" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header