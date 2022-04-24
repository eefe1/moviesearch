import React from "react";
import "./App.css";
import MovieListPage from "./routes/movieListPage/MovieListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetailsPage from "./routes/movieListPage/MovieDetailsPage";



const App = () => {
  return (
    <>
      <div className="App">
     
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MovieListPage />} />

            <Route exact path="/movies/:id" element={<MovieDetailsPage movies={true}/>}/>
          </Routes>
        </BrowserRouter>
      
      </div>
    </>
  );
};

export default App;
