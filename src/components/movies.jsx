import { useState } from "react";
import { motion } from "framer-motion";

const Movie = ({ movieData }) => {
	const [movie, setMovie] = useState(false);
	function movieShow() {
		setMovie((prev) => !prev);
	}

	function movieLeave() {
		setMovie((prev) => !prev);
	}

	return (
		<motion.div
			layout
			exit={{ opacity: 0 }}
			className="relative"
		>
			<img
				className="w-full rounded-3xl cursor-pointer"
				src={movieData.img}
				alt={movieData.name}
				onMouseOver={movieShow}
				onMouseLeave={movieLeave}
			/>
			{movie && (
				<div className="bg-gray-300 flex flex-col justify-center bg-opacity-80 absolute bottom-0 rounded-b-3xl left-[50%] translate-x-[-50%] w-full h-[25%]">
					<h1 className="text-2xl text-center"> Name: {movieData.name} </h1>
					<h2 className="text-center text-lg"> {movieData.year}</h2>
				</div>
			)}
		</motion.div>
	);
};

export default Movie;
