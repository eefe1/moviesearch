import React from "react";
//import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MovieInfo = ({ movie }) => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{
        type: "tween",
        duration: "2",
        delay: "1",
      }}
      className="content"
    >
      <span>{movie.title}</span>
      <p>Date: {movie.release_date}</p>
      <p>
        <small>Rating: {movie.vote_average}</small>
      </p>
      <Link to="/MovieDetailsPage">
        <button className="btn btn-success">Overview</button>
        {/*       <p className="card--desc">{movie.overview}</p>
         */}{" "}
      </Link>
    </motion.div>
  );
};

export default MovieInfo;
