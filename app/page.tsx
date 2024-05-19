import Image from "next/image";
import Hero from "./components/hero";
import Header from "./components/header";
import { useState } from "react";
import StickyHeader from "./components/StickyHeader";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <StickyHeader />
      <Hero />
      <div className="main-container eerie-background">
        <p className="h-screen">fa</p>
        <Footer />
      </div>
    </>
  );
}
