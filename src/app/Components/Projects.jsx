"use client";
import Image from "next/image";
import { useState } from "react";

const Projects = ({ setActiveMenu }) => {
  const [filter, setFilter] = useState("Web");

  return (
    <div
      onMouseEnter={() => setActiveMenu("Projects")}
      id="Projects"
      className="w-full   bg-[#121212]"
    >
      <div className="text-center">
        <h2 className="  text-2xl tracking-widest text-white font-bold ">
          Projects
        </h2>
        <p className=" font-semibold text-[#7b7b7b] ">What I Have Built</p>
      </div>
      <div className="w-full flex justify-center py-6">
        <div className="flex flex-wrap justify-center gap-4 w-3/4 text-[#7b7b7b] ">
          <button
            onClick={() => setFilter("Web")}
            className={` py-3 px-8 rounded-lg ${
              filter === "Web"
                ? "bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white"
                : "bg-[#1b1b1b]"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setFilter("MERN")}
            className={` py-3 px-8 rounded-lg ${
              filter === "MERN"
                ? "bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white"
                : "bg-[#1b1b1b]"
            }`}
          >
            MERN Development
          </button>
          <button
            onClick={() => setFilter("React")}
            className={` py-3 px-8 rounded-lg ${
              filter === "React"
                ? "bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white"
                : "bg-[#1b1b1b]"
            }`}
          >
            React Projects
          </button>
          <button
            onClick={() => setFilter("Web3")}
            className={` py-3 px-8 rounded-lg ${
              filter === "Web3"
                ? "bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white"
                : "bg-[#1b1b1b]"
            }`}
          >
            Web 3 BlockChains
          </button>
          <button
            onClick={() => setFilter("AI")}
            className={` py-3 px-8 rounded-lg ${
              filter === "AI"
                ? "bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white"
                : "bg-[#1b1b1b]"
            }`}
          >
            AI development Chatbots
          </button>
        </div>
      </div>
      <div className="w-full mx-auto px-2 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src={"/assets/optimal/1.png"}
            width={500}
            height={500}
            alt="/"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
