import React from "react";
import MovieInfo from "../../../commons/MovieInfo";
import MovieImage from "../../../commons/MovieImage";
import { motion } from "framer-motion";

const MovieListItem = ({ movie }) => {
  return (
    <motion.ul>
      <motion.li>
        <MovieInfo movie={movie} />
        <MovieImage movie={movie} />
      </motion.li>
    </motion.ul>
  );
};

export default MovieListItem;
