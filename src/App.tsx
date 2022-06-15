import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

// http://www.omdbapi.com/?i=tt3896198&apikey=ffdc54d9
// ffdc54d9

type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

const API_URL: string = "http://www.omdbapi.com/?apikey=ffdc54d9";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    //console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img 
          src={SearchIcon} 
          alt="search" 
          onClick={() => {searchMovies(searchTerm)}} 
        />
      </div>
      {movies?.length > 0 ? (
        <div className="containter">
          {movies.map((movie) => (
            <MovieCard
              Poster={movie.Poster}
              Title={movie.Title}
              Type={movie.Type}
              Year={movie.Year}
              imdbID={movie.imdbID}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

/*
<MovieCard 
  Poster={movies[0].Poster} 
  Title={movies[0].Title} 
  Type={movies[0].Type} 
  Year={movies[0].Year} 
  imdbID={movies[0].imdbID}
/>
*/
