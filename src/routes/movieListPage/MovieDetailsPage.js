import React from "react";
//import { MovieContext } from "../../contexts/MovieContext";
import { useParams } from "react-router-dom";


const MovieDetailsPage = () => {
  //const context = useContext(MovieContext);
  //console.log(movies.match.params.id);
  const movies = useParams();
  const movie = movies.find(i => i._id === movies.match.params.id);
  

  return (
    <>
      {/* {context.movies.map((movie) => ( */}
        <li>
          <img className="image" src={movie.image} alt="" />
          <h1>{movie.title}</h1>
        </li>
     {/*  ))} */}
    </>
  );
};

export default MovieDetailsPage;
