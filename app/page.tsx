import Image from "next/image";
import Hero from "./components/hero";
import Header from "./components/header";
import StickyHeader from "./components/StickyHeader";
import Footer from "./components/Footer";
import "../lib/fontawesome";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <StickyHeader />
      <Hero />
      <div className="main-container gray3-bg">
        <p className="h-screen">fa</p>

        <span className="scroll">S</span>
        <span className="scroll">C</span>
        <span className="scroll">R</span>
        <span className="scroll">O</span>
        <span className="scroll">L</span>
        <span className="scroll">L</span>

        <Contact />
        <Footer />
      </div>
    </>
  );
}
