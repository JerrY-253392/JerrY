"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { motion } from "framer-motion";

const navData = [
  { label: "Home", href: "/#Home" },
  { label: "Skills", href: "/#Skills" },
  { label: "About", href: "/#About" },
  { label: "Projects", href: "/#Projects" },
  { label: "Contact", href: "/#Contact" },
];

const Header = ({ activeMenu, setActiveMenu }) => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  const handleActive = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div
      className={`fixed w-full h-20 z-[100] bg-[#121212] transition-all duration-300 ${
        shadow ? "bg-opacity-75 shadow-md" : "bg-opacity-50"
      }`}
    >
      <nav className="text-[#7b7b7b] text-xl font-semibold px-20">
        <div className="flex items-center justify-between mx-auto p-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="self-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EF3414] to-[#EB2519]"
          >
            <h2 className="px-8">JERRY</h2>
          </motion.div>

          <div className="animate-fade-in">
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
            <div className="md:hidden">
              <MdOutlineMenu size={25} />
            </div>
          </div>

          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="px-10 py-2 rounded-xl bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white relative overflow-hidden transition-bg-pos duration-700 hover:bg-gradient-to-l"
          >
            Hire Me
          </motion.button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
