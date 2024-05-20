"use client";
import React, { useState, useEffect } from "react";
import Header from "./header";

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 600);
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header
        bgClass="ivory-color"
        className={`sticky-header ${isSticky ? "visible" : ""}`}
      />

      <Header bgClass="bg-opacity-50" />
    </>
  );
};

export default StickyHeader;
