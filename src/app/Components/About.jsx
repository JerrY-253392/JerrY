"use client";

import {
  faCss3Alt,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faN, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const items = [
  { id: 1, value: 90, label: "React", icon: faReact },
  { id: 2, value: 60, label: "Next.js", icon: faN },
  { id: 3, value: 70, label: "MongoDB", icon: faDatabase },
  { id: 4, value: 75, label: "Node.js", icon: faNodeJs },
  { id: 5, value: 85, label: "CSS", icon: faCss3Alt },
  { id: 6, value: 55, label: "FastAPI", icon: faRocket },
];

const About = ({ setActiveMenu }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });
  return (
    <div
      ref={ref}
      onMouseEnter={() => setActiveMenu("About")}
      id="About"
      className=" md:h-screen flex flex-col  items-center py-16 mb-16"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="  text-2xl tracking-widest text-white font-bold ">
          About Me
        </h2>
        <p className=" font-semibold text-[#7b7b7b] ">
          Full Stack Web Developer
        </p>
      </motion.div>
      <div ref={ref} className="m-4 w-full flex  gap-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-1/2 flex justify-center"
        >
          <Image
            src={"/assets/skillsimages/About_Me.png"}
            height={320}
            width={320}
            quality={100}
            alt="/"
            className="grayscale "
          />
        </motion.div>
        <div className="w-1/2 tracking-widest flex flex-col    justify-center ">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="w-3/4"
          >
            <p className=" text-[#7b7b7b]">
              As a passionate and versatile full-stack developer, I specialize
              in bringing ideas to life with elegant and efficient code. From
              designing responsive, intuitive user interfaces on the front end
              to building scalable, secure, and optimized back-end
              architectures, I enjoy crafting complete, end-to-end software
              solutions. My expertise lies in creating seamless user experiences
              that merge creativity with robust functionality. Whether it's
              designing interactive web applications or developing RESTful APIs,
              I am driven to deliver impactful results that make a difference.
              Always eager to learn and innovate, I thrive in transforming
              complex problems into simple, effective solutions
            </p>
            <p className=" py-4 text-white underline cursor-pointer">
              Check out some of my latest projects.
            </p>
            <button className="animate-pulse px-10 py-2  rounded-md bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white relative overflow-hidden transition-bg-pos duration-700 hover:bg-gradient-to-l">
              Download CV
            </button>
          </motion.div>
        </div>
      </div>
      <div>
        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delayChildren: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 py-8"
          style={{ color: "white" }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Staggered animation for items
              }}
              className="flex flex-col items-center"
              style={{ width: 120 }}
            >
              {/* Circular Progress Bar */}
              <div style={{ width: 120, height: 120, position: "relative" }}>
                <CircularProgressbar
                  value={item.value}
                  styles={buildStyles({
                    pathColor: "#FD6F00",
                    trailColor: "#1b1b1b",
                    textColor: "transparent",
                  })}
                />
                {/* Icon Inside Progress Bar */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "2.5rem",
                    color: "#FD6F00",
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </div>
              </div>
              {/* Percentage Text */}
              <div
                className="text-xl font-bold mt-2"
                style={{ color: "#FD6F00" }}
              >
                {item.value}%
              </div>
              {/* Label */}
              <div className="mt-1 text-[#7b7b7b] font-semibold">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default About;
