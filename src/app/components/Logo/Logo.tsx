import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../../public/film.svg";

interface LogoProps {
  width: number;
  height: number;
  font?: string;
}
export function Logo({ width, height, font = "2xl" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image width={width} height={height} src={LOGO} alt="MovieGo Logo" />
      <span
        className={`self-center text-${font} font-semibold whitespace-nowrap dark:text-white`}
      >
        MovieGo
      </span>
    </Link>
  );
}
