import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Features } from "@/components/Features";
import { Ecosystem } from "@/components/Ecosystem";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen text-slate-900 dark:text-white font-sans transition-colors duration-500 relative overflow-x-hidden">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-[9999] bg-noise mix-blend-overlay"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Mission />
        <Features />
        <Ecosystem />
      </main>
      
      <Footer />
    </div>
  );
}

