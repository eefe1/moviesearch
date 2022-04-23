import React from "react";
import { motion } from "framer-motion";

const MovieImage = ({ movie }) => {
  return (
    <motion.div
      transition={{
        delay: 1,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 2 },
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + "poster"}
      />
    </motion.div>
  );
};

export default MovieImage;
