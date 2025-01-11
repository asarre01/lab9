import { useEffect, useState } from "react";
import CarCard from "./components/CarCard";

function App() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCars = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/cars");
      const data = await response.json();
      setCars(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
        <div className="text-xl font-semibold animate-pulse text-blue-500">
          Chargement...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl font-semibold text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 px-12 bg-gray-950">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-300">
          Catalogue de Voitures
        </h1>
        <p className="text-gray-400">
          Notre collection de véhicules disponibles
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
