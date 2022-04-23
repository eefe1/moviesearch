import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { MovieContext } from '../../contexts/MovieContext';
import { motion } from "framer-motion";

const MovieDetailsPage = ({id, movies}) => {
  const context = useContext(MovieContext);

  const { overview, poster_path, title } = context(movies.find(movie => movie.id === id));
  

  return (
<>
<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={poster_path} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{title}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
    <p>{overview}</p>
          </motion.div>
        </motion.div>
        </div>
    </>
  );
}

export default MovieDetailsPage;
