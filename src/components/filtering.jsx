import { useEffect, useState } from "react";

const Filtering = ({ movieFilter, setMovieFilter }) => {
  const [genre, setGenre] = useState(0);

  useEffect(() => {
    if (genre == 0) {
      setMovieFilter(movieFilter);
    }

    const filter = movieFilter.filter((movies) => {
      return movies.genre.includes(genre);
    });
    setMovieFilter(filter);
  }, [genre]);

  return (
    <div className="flex flex-wrap gap-2 my-8">
      <button
        onClick={() => setGenre(0)}
        className={`px-4 py-1 rounded-full border-2 border-blue-800 duration-200 ${
          genre == 0 ? "bg-blue-800 text-white" : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => setGenre(1)}
        className={`px-4 py-1 rounded-full border-2 border-blue-800 duration-200 ${
          genre == 1 ? "bg-blue-800 text-white" : ""
        }`}
      >
        Action
      </button>
      <button
        onClick={() => setGenre(2)}
        className={`px-4 py-1 rounded-full border-2 border-blue-800 duration-200 ${
          genre == 2 ? "bg-blue-800 text-white" : ""
        }`}
      >
        Adventure
      </button>
      <button
        onClick={() => setGenre(3)}
        className={`px-4 py-1 rounded-full border-2 border-blue-800 duration-200 ${
          genre == 3 ? "bg-blue-800 text-white" : ""
        }`}
      >
        Animation
      </button>
      <button
        onClick={() => setGenre(6)}
        className={`px-4 py-1 rounded-full border-2 border-blue-800 duration-200 ${
          genre == 6 ? "bg-blue-800 text-white" : ""
        }`}
      >
        Horror
      </button>
      <button
        onClick={() => setGenre(4)}
        className={`px-4 py-1 rounded-full border-2 border-blue-800 duration-200 ${
          genre == 4 ? "bg-blue-800 text-white" : ""
        }`}
      >
        Comedy
      </button>
      <button
        onClick={() => setGenre(5)}
        className={`px-4 py-1 rounded-full border-2 border-blue-800 duration-200 ${
          genre == 5 ? "bg-blue-800 text-white" : ""
        }`}
      >
        Family
      </button>
    </div>
  );
};

export default Filtering;
