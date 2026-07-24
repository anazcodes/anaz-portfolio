import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import CodingProfile from "@/components/sections/CodingProfile";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <MobileNav />
      <div className="md:flex">
        <Sidebar />
        <main className="min-w-0 flex-1 md:ml-[300px]">
          <Hero />
          <WhatIDo />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <CodingProfile />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
