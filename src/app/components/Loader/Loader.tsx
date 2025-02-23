import { useEffect, useState } from 'react';

export function Loader () {
  const [isLoading, setIsLoading] = useState(true);

  // Symulacja ładowania (np. żądanie API)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      {isLoading ? (
        <div className="w-24 h-24 border-8 border-t-orange-500 border-gray-200 rounded-full animate-spin"></div>
      ) : (
        <div className="text-white text-2xl font-semibold">
          Welcome to Movie Go!
        </div>
      )}
    </div>
  );
};
