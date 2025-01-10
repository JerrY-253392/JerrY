"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const stats = [
  { value: "5+", label: "Experiences" },
  { value: "20+", label: "Project done" },
  { value: "80+", label: "Happy Clients" },
];

const Main = ({ setActiveMenu }) => {
  return (
    <>
      <div
        onMouseEnter={() => setActiveMenu("Home")}
        id="Home"
        className="full h-screen flex items-center  text-[#7b7b7b] "
      >
        <div className="w-3/5  flex justify-center items-center animate-fade-in ">
          <div className="flex flex-col items-center">
            <p className="uppercase text-sm tracking-widest ">My Portfolio</p>
            <h1 className="py-4  text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF3414] to-[#EB2519]">
                Hi
              </span>
              , I'm
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF3414] to-[#EB2519]">
                {" "}
                JerrY
              </span>
            </h1>
            <h1 className="py-2 font-bold h-12 text-4xl">
              <Typewriter
                words={["MERN-Stack Web Developer"]}
                loop={true}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="py-2 text-lg  text-center  max-w-[70%] m-auto">
              With a passion for creating end-to-end experiences, I excel at
              blending technology and creativity to deliver functional and
              elegant software that makes an impact.
            </p>
            <div className="flex space-x-6 items-center justify-between max-w-[330px] m-auto p-4">
              <div className="rounded-full border border-[#7b7b7b] p-3 cursor-pointer hover:scale-125 ease-in-out duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full  p-3 border border-[#7b7b7b] cursor-pointer hover:scale-125 ease-in-out duration-300">
                <FaGithub />
              </div>
              <div className="rounded-full  p-3 border border-[#7b7b7b] cursor-pointer hover:scale-125 ease-in-out duration-300">
                <MdOutlineMail />
              </div>
              <div className="rounded-full  p-3 border border-[#7b7b7b]  cursor-pointer hover:scale-125 ease-in-out duration-300">
                <BsFillPersonLinesFill />
              </div>
            </div>

            <div className="max-w-lg flex justify-center space-x-12 mt-12 animate-pulse">
              <button className="px-10 py-2 rounded-xl bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white relative overflow-hidden transition-bg-pos duration-700 hover:bg-gradient-to-l">
                Hire Me
              </button>
              <button className="px-10 py-2 border-2 border-[#7b7b7b] rounded-xl hover:bg-[#7b7b7b] hover:text-[#1b1b1b]">
                Download Resume
              </button>
            </div>

            <div className="bg-[#341A18] mt-8 w-1/2 rounded-xl text-white py-4 px-6 flex justify-around items-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-8">
                  <div className="">
                    <span className="text-orange-500 text-xl font-bold">
                      {stat.value}
                    </span>
                    <p className="text-[#7b7b7b] text-lg font-bold">
                      {stat.label}
                    </p>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="border-l border-white h-12"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="relative flex justify-center items-center">
            <Image
              src={"/assets/skillsimages/Me.png"}
              width={750}
              height={750}
              quality={100}
              className="relative  z-10 object-cover max-w-xl saturate-50 grayscale  mix-blend-hard-light "
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
