import React from "react";
import "./App.css";
import MovieListPage from "./routes/movieListPage/MovieListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetailsPage from "./routes/movieListPage/MovieDetailsPage";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";


function showDetail({movie}){
  let {id} = movie.params;
  const imageHasLoaded = true;

return (
  <>
    <MovieListPage movie={id} />
    <AnimatePresence>
      {id && imageHasLoaded && <MovieDetailsPage id={id} key="movie" />}
    </AnimatePresence>
  </>
);
}
const App = () => {
  return (
    <>
      <div className="App">
      <AnimateSharedLayout type="crossfade">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MovieListPage />} />

            <Route exact path="/:id" element={showDetail} />
          </Routes>
        </BrowserRouter>
        </AnimateSharedLayout>
      </div>
    </>
  );
};

export default App;
