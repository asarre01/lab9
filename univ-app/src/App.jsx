import { useEffect, useState } from "react";
import UniversityCard from "./components/UniversityCard";


function App() {
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUniversities = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=Senegal"
      );
      const data = await response.json();
      setUniversities(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
        <div className="text-xl font-semibold animate-pulse text-yellow-500">
          Loading...
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
        <h1 className="text-3xl font-semibold text-green-300">
          Universités du Sénégal
        </h1>
        <p className="text-gray-400">Liste des universités sénégalaises</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {universities.map((university, index) => (
          <UniversityCard key={index} university={university} />
        ))}
      </div>
    </div>
  );
}

export default App;
