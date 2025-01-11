/* eslint-disable react/prop-types */
import { MdOutlineVideoCameraBack } from "react-icons/md";

function MovieCard({ movie }) {
  return (
    <div className="max-w-lg w-72 rounded-lg overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 hover:scale-105">
      <div className="h-48 bg-gray-800 flex items-center justify-center">
        <MdOutlineVideoCameraBack className=" text-yellow-300 size-24" />
      </div>

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-yellow-300">{movie.title}</h2>
        <p className="text-gray-600">{movie.releaseYear}</p>
      </div>
    </div>
  );
}

export default MovieCard;
