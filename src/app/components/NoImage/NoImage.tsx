import Image from "next/image";

/*
******************************************************
 nazwa funkcji: NoImage
 opis: Komponent wyswietlajacy obrazek w przypadku braku obrazka filmu 
*****************************************************
*/

export function NoImage() {
  return (
    <Image
      className="opacity-40 object-cover transition-transform duration-300 group-hover:scale-105 ml-2"
      src={"/no-image.svg"}
      layout="fill"
      alt="no-image"
    />
  );
}
