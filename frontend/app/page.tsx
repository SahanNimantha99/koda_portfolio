import Content from "@/components/Content";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto w-full px-0">
      <div className="max-w-8xl w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <FaHome />,
            },
          ]}
        />
        <Hero />
        <Content />
      </div>
    </main>
  );
}
