import Image from "next/image";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
import RecentProject from "./components/RecentProject";
import { navItems } from "@/data";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
export default function Home() {
  return (
    <main className="relative flex justify-center bg-black items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className={[

        ]}/>
        <Hero/>
        <Grid/>
        <RecentProject/>
        <Clients/>
        <Experience/>
        <Approach/>
      </div>
    </main>
  );
}
