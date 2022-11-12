import { motion } from "framer-motion";

const Movie = ({ movieData }) => {
  return (
    <motion.div layout exit={{ opacity: 0 }}>
      <h1 className="mb-2 text-sm"> {movieData.name} </h1>
      <img className="w-full rounded-3xl" src={movieData.img} alt="" />
    </motion.div>
  );
};

export default Movie;
