import React from "react";
import { useContext } from 'react';
import { MovieContext } from '../../../contexts/MovieContext';


function SearchBar() {
  const context = useContext(MovieContext);


  return (
    <>
          <form className="form" onSubmit={context.searchMovies}>
            <label className="label" htmlFor="query"></label>
            <input
              name="query"
              type="text"
              className="input"
              placeholder="Search..."
              value={context.query}
              onChange={(e) => context.setQuery(e.target.value)}
            />
            <button className="button" type="submit">
              Search
            </button>
          </form>
    </>
  );
}

export default SearchBar;
