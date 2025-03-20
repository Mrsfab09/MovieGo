import { Faq } from "./components/Faq/Faq";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

/*
******************************************************
 nazwa funkcji: Home
 opis: Komponent wyswietlajacy główną stronę 
*****************************************************
*/

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Faq />
      <Footer />
    </>
  );
}
