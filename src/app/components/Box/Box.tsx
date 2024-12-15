export function Box() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 p-6">
      {/* Box 1 - Duży prostokąt pionowy */}
      <div className="col-span-2 md:col-span-2 lg:col-span-1 row-span-2 backdrop-blur-md bg-gradient-to-r from-white/10 to-white/5 p-6 rounded-lg border border-white/20 shadow-lg min-h-[300px] flex flex-col">
        <h3 className="text-2xl text-white font-semibold">
          Assets Diversification
        </h3>
        <p className="text-gray-400 mt-2 flex-grow">
          Zarządzaj swoim portfolio filmów z łatwością. Dzięki rozbudowanemu
          systemowi, wszystkie filmy są łatwe do znalezienia i zarządzania nimi.
        </p>
      </div>

      {/* Box 2 - Mały kwadrat */}
      <div className="backdrop-blur-md bg-gradient-to-b from-[#ff433d0e] to-[#ff433d34] p-6 rounded-lg border border-white/25 shadow-lg min-h-[200px] flex flex-col">
        <h3 className="text-xl text-white font-semibold">DeFi Apps</h3>
        <p className="text-gray-300 mt-2 text-sm flex-grow">
          Odkrywaj najnowsze hity filmowe z aplikacjami DeFi.
        </p>
      </div>

      {/* Box 3 - Prostokąt średni */}
      <div className="backdrop-blur-md bg-gradient-to-tr from-white/10 to-white/5 p-6 rounded-lg border border-white/20 shadow-lg min-h-[300px] flex flex-col">
        <h3 className="text-xl text-white font-semibold">
          Safe Portfolio Matrix
        </h3>
        <p className="text-gray-400 mt-2 text-sm flex-grow">
          Bezpieczne i intuicyjne zarządzanie listą filmów oraz subskrypcjami.
        </p>
      </div>

      {/* Box 4 - Prostokąt pionowy */}
      <div className="row-span-1 backdrop-blur-md bg-gradient-to-b from-[#ff433d0e] to-[#ff433d34] p-6 rounded-lg border border-white/20 shadow-lg min-h-[300px] flex flex-col">
        <h3 className="text-xl text-white font-semibold">User Wallet</h3>
        <p className="text-gray-400 mt-2 text-sm flex-grow">
          Zarządzaj swoją subskrypcją oraz historią filmów.
        </p>
      </div>
      {/* Box 4 - Prostokąt pionowy */}
      <div className="row-span-1 backdrop-blur-md bg-gradient-to-r from-white/10 to-white/5 p-6 rounded-lg border border-white/20 shadow-lg min-h-[300px] flex flex-col">
        <h3 className="text-xl text-white font-semibold">User Wallet</h3>
        <p className="text-gray-400 mt-2 text-sm flex-grow">
          Zarządzaj swoją subskrypcją oraz historią filmów.
        </p>
      </div>
    </div>
  );
}
