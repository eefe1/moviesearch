import React, { useState } from "react";
import MovieListItem from "./components/MovieListItem";
import { MovieContext } from "../../contexts/MovieContext";
import SearchBar from "./components/SearchBar";
import "../../App.css";

const MovieListPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  
  const searchMovies = async (e) => {
    e.preventDefault();
  
    const url = `https://api.themoviedb.org/3/search/movie?api_key=60b33628b01c09b289a952d16539213f&language=en-US&query=${query}&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    
      <MovieContext.Provider value={{ searchMovies, setQuery, movies}}>
        <div className="container">
          <h1 className="title">Movii</h1>
          <SearchBar />
              {movies
                .filter((movie) => movie.poster_path)
                .map((movie) => (
                  <MovieListItem movie={movie} key={movie.id} />
                ))}
          
        </div>
        
      </MovieContext.Provider>

  );
};

export default MovieListPage;
