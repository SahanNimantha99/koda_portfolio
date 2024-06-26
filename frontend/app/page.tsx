import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";

export default function Home() {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-0 w-full px-0">
      <div className="max-w-8xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Hero2 />
        <Hero3 />
      </div>
    </main>
  );
}
