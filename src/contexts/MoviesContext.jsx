
import { createContext, useState } from "react";

export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
    const [movies, setMovies] = useState([]);

    return (
        <MoviesContext.Provider value={{ movies, setMovies }}>
            {props.children}
        </MoviesContext.Provider>
    )
}

export default MoviesContextProvider

  // useEffect(() => {
    //     async function fetchData() {

    //         const { data } = await axios.get(
    //             `${SEARCH_URL}${searchQuery}`
    //         );
    //         setMovies(data.results);

    //     }
    //     fetchData();
    // }, []);


    //const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=35e395151e242c0b16a76cc7c618b051&query=spider`;
 //const FEATURED_URL = `https://api.themoviedb.org/3/movie/popular?api_key=35e395151e242c0b16a76cc7c618b051&language=en-US&page=1`