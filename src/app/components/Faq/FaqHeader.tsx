/*
******************************************************
 nazwa funkcji: FaqHeader
 opis: Komponent wyswietlajacy opis sekcji Faq
*****************************************************
*/

export function FaqHeader() {
  return (
    <div className="text-center max-w-2xl flex flex-col mx-auto sm:mb-8">
      <h2 className="text-gray-300 font-semibold tracking-tight text-5xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl">
        🎬 Got questions? We’ve got answers! 🎬 <br />
        Welcome to the MovieGo FAQ! Here, you’ll find answers to common
        questions about our app, features, and recommendations. Check below for
        details—if you need more help, feel free to reach out! 🍿✨
      </p>
    </div>
  );
}
