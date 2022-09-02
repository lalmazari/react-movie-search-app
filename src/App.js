import './app.css'
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import MoviesContextProvider from './contexts/MoviesContext';



const App = () => {
  return (
    <MoviesContextProvider>
      <Header />
      <MoviesList />

    </MoviesContextProvider>
      
  )

}


export default App;
