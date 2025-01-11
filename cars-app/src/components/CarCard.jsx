/* eslint-disable react/prop-types */
import { FaCar } from "react-icons/fa";

function CarCard({ car }) {
  return (
    <div className="max-w-lg w-full rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105">
      <div className="h-48 bg-gray-800 flex items-center justify-center">
        <FaCar className="text-blue-300 size-24" />
      </div>

      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-xl text-gray-800">
            {car.brand} {car.model}
          </h2>
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {car.year}
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-semibold">Couleur:</span> {car.color}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Immatriculation:</span>{" "}
            {car.registerNumber}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Prix:</span>{" "}
            {car.price.toLocaleString()} €
          </p>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-700 font-semibold">Propriétaire:</p>
            <p className="text-gray-600">
              {car.owner.firstname} {car.owner.lastname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
