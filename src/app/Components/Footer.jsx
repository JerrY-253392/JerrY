"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMail, MdOutlineMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const navData = [
  { label: "Home", href: "/#Home" },
  { label: "About", href: "/#About" },
  { label: "Projects", href: "/#Projects" },
  { label: "Skills", href: "/#Skills" },
  { label: "Contact", href: "/#Contact" },
];

const Footer = ({ activeMenu, setActiveMenu }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });
  const handleActive = (menu) => {
    setActiveMenu(menu);
  };
  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="h-auto bg-[#1b1b1b] text-[#7b7b7b] "
    >
      <div className="self-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EF3414] to-[#EB2519]">
        <h2 className="py-8 text-center">JERRY</h2>
      </div>

      <div className="w-full flex justify-center">
        <ul className="hidden md:flex px-4 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          {navData.map((item) => (
            <Link href={item.href} key={item.label}>
              <li
                className={`block py-2 px-3 rounded md:bg-transparent hover:text-[#EF3414] ${
                  activeMenu === item.label ? "text-[#EF3414]" : ""
                }`}
                onClick={() => handleActive(item.label)}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex space-x-2 items-center justify-between w-1/6  m-auto p-8">
        <div className="rounded-full border border-[#7b7b7b] p-2 cursor-pointer hover:scale-125 ease-in-out duration-300">
          <FaLinkedinIn />
        </div>
        <div className="rounded-full  p-2 border border-[#7b7b7b] cursor-pointer hover:scale-125 ease-in-out duration-300">
          <FaGithub />
        </div>
        <div className="rounded-full  p-2 border border-[#7b7b7b] cursor-pointer hover:scale-125 ease-in-out duration-300">
          <MdOutlineMail />
        </div>
        <div className="rounded-full  p-2 border border-[#7b7b7b]  cursor-pointer hover:scale-125 ease-in-out duration-300">
          <BsFillPersonLinesFill />
        </div>
      </div>

      <div className="flex justify-center space-x-4  p-4">
        <div className="flex items-center space-x-2">
          <MdOutlineMail className="text-xl" />
          <span>ahmadali253392@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <HiOutlinePhone className="text-xl" />
          <span>+92 332 5471698</span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center py-4">
        <hr className="  border-t border-gray-600 bg-gray-700 shadow-lg w-1/3" />
        <span className="py-1 text-xs font-semibold">
          Designed by @Ahmad Ali Full Stack Web Developer
        </span>
      </div>
    </motion.div>
  );
};

export default Footer;
