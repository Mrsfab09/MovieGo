import { Page404 } from "@/app/components/Page404/Page404";

export default async function Page() {
  return (
    <div>
      <Page404 />
      {/* To do in the future */}
    </div>
  );
}

// import { Sidebar } from "@/app/components/Dashboard/Sidebar/Sidebar";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// export default async function Page({ params }: { params: { id: string } }) {
//   const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

//   if (!API_KEY) {
//     throw new Error(
//       "Brak klucza API. Ustaw NEXT_PUBLIC_TMDB_API_KEY w pliku .env."
//     );
//   }

//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
//   );

//   if (!res.ok) {
//     return notFound();
//   }

//   const movie = await res.json();

//   return (
//     <>
//       <Sidebar />
//       <div className="p-6 flex flex-col items-center">
//         {movie.poster_path ? (
//           <div className="relative w-64 h-96 mb-4">
//             <Image
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt={movie.title || "Plakat"} // fallback
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//         ) : (
//           <div className="w-64 h-96 mb-4 flex items-center justify-center bg-gray-800 text-white">
//             Brak plakatu
//           </div>
//         )}

//         <div className="flex flex-col items-center w-96 text-center">
//           <h1 className="text-2xl font-bold text-white mb-4">{movie.title}</h1>
//           <p className="text-gray-300">{movie.overview || "Brak opisu."}</p>
//           <p className="text-gray-400 mt-2">
//             Ocena:{" "}
//             {typeof movie.vote_average === "number"
//               ? movie.vote_average.toFixed(1)
//               : "Brak"}{" "}
//             | Premiera: {movie.release_date || "Brak"}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
