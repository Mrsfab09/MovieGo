import Image from "next/image";
import { LogoutButton } from "../components/LogoutButton/LogoutButton";

export default function Dashboard() {
  return (
    <>
      <Image width={200} height={200} src={"/assets/logoGo.png"} alt="" />
      <div>Welcome in Dashboard</div>
      <LogoutButton />
    </>
  );
}
