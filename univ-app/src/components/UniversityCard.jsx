/* eslint-disable react/prop-types */
import { FaUniversity } from "react-icons/fa";

function UniversityCard({ university }) {
  return (
    <div className="max-w-lg w-full rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105">
      <div className="h-48 bg-gray-800 flex flex-col items-center justify-center">
        <FaUniversity className="text-green-300 size-24" />
        <div className="text-white text-2xl font-bold ml-2">
          {university.alpha_two_code}
        </div>
      </div>

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">
          {university.name}
        </h2>
        <a
          href={university.web_pages[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-800 transition-colors duration-300"
        >
          {university.domains[0]}
        </a>
        <p className="text-gray-600 mt-2">
          {university.stateprovince || university.country}
        </p>
      </div>
    </div>
  );
}

export default UniversityCard;
