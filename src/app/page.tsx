import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Emailsection from "./components/Emailsection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
     <Navbar/>
     <div className="container mt-24 mx-auto  py-4">
     <HeroSection/>
     <AboutSection />
     <ProjectsSection />
     <Emailsection />
     <Footer />
     </div>
    </main>
  );
}
