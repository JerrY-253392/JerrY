"use client";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useState } from "react";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <div>
      <Header setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <Main setActiveMenu={setActiveMenu} />
      <Skills setActiveMenu={setActiveMenu} />
      <About setActiveMenu={setActiveMenu} />
      <Projects setActiveMenu={setActiveMenu} />
      <Contact setActiveMenu={setActiveMenu} />
      <Footer setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
    </div>
  );
}
