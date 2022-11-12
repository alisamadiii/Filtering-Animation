import { useState } from "react";
import Movie from "./components/movies";
import Filtering from "./components/filtering";

import Movies from "./content/movie.json";

import { motion, AnimatePresence } from "framer-motion";

function App() {
  // Movie Anger = action = 1, Adventure = 2, Animation = 3, Comedy = 4, Family = 5, Horror = 6;
  const [movieData, setMovieData] = useState(Movies);
  const [movieFilter, setMovieFilter] = useState(movieData);

  return (
    <div className="App px-[10%] lg:px-4 py-12">
      <h1 className="text-center text-[64px] font-bold lg:text-[5vw] md:text-[24px]">Filtering Animation</h1>
      <Filtering movieFilter={movieData} setMovieFilter={setMovieFilter} />
      <motion.div
        layout
        className="grid grid-cols-4 gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <AnimatePresence>
          {movieFilter.map((movies) => {
            return <Movie key={movies.name} movieData={movies} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
