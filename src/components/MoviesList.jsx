import { useContext } from "react"
import { MoviesContext } from "../contexts/MoviesContext"
import MovieCard from "./MovieCard"


const MoviesList = () => {

    const { movies } = useContext(MoviesContext)


    return (
        <div className="container">
            <div className='row'>
                {
                    movies.map((movie) => (
                        <div className='col-lg-3 py-3 ' key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default MoviesList

// {
//     movies.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase())).map((movie) => (
//         <div className='col-lg-3 py-3 ' key={movie.id}>
//             <MovieCard movie={movie} />
//         </div>
//     ))
// }