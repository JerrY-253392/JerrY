"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCube,
  faFire,
  faN,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FaNodeJs, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillsData = [
  {
    name: "HTML/CSS",
    icon: (
      <FontAwesomeIcon icon={faHtml5} size="2x" style={{ color: "#E44D26" }} />
    ),
  },
  {
    name: "Firebase",
    icon: (
      <FontAwesomeIcon icon={faFire} size="2x" style={{ color: "#FFCA28" }} />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <FontAwesomeIcon icon={faJs} size="2x" style={{ color: "#F7DF1E" }} />
    ),
  },
  {
    name: "React",
    icon: (
      <FontAwesomeIcon icon={faReact} size="2x" style={{ color: "#61DAFB" }} />
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <FontAwesomeIcon
        icon={faCss3Alt}
        size="2x"
        style={{ color: "#06B6D4" }}
      />
    ),
  },
  {
    name: "GitHub",
    icon: (
      <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#fff" }} />
    ),
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={100} style={{ color: "#339933" }} />,
  },
  {
    name: "MongoDB",
    icon: <FaDatabase size={100} style={{ color: "#47A248" }} />,
  },
  // {
  //   name: "Next.js",
  //   icon: <FontAwesomeIcon icon={faN} size="2x" style={{ color: "#000" }} />,
  // },
  // {
  //   name: "FastAPI",
  //   icon: <FaNodeJs size={100} style={{ color: "#009688" }} />,
  // },
  // {
  //   name: "AI/Chatbots",
  //   icon: (
  //     <FontAwesomeIcon icon={faRobot} size="2x" style={{ color: "#FF5733" }} />
  //   ),
  // },
  // {
  //   name: "Web3",
  //   icon: (
  //     <FontAwesomeIcon icon={faCube} size="2x" style={{ color: "#F7931A" }} />
  //   ),
  // },
];
const Skills = ({ setActiveMenu }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }} // Start below with opacity 0
      animate={inView ? { y: 0, opacity: 1 } : {}} // Animate to normal position and full opacity
      transition={{ duration: 1 }} // Control animation duration
      onMouseEnter={() => setActiveMenu("Skills")}
      id="Skills"
      className="w-full h-auto py-12"
    >
      <div className="w-full flex flex-col justify-center items-center h-full">
        <h2 className="text-2xl tracking-widest text-white font-bold">
          Skills
        </h2>
        <h2 className="font-semibold text-[#7b7b7b]">What I Can Do</h2>
        <div className="w-4/5 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center bg-[#1b1b1b] p-6 rounded-xl shadow-lg max-w-xs"
              initial={{ y: 50, opacity: 0 }} // Individual skill starts off-screen
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animates into view
              transition={{
                duration: 0.5,
                delay: 0.1 * skillsData.indexOf(skill),
              }} // Add delay for staggered animation
            >
              <div className="text-orange-500 text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-orange-500 text-xl font-semibold mb-2">
                {skill.name}
              </h3>
              <p className="text-[#7b7b7b] text-sm text-center">
                Lorem ipsum dolor sit amet. <br />
                Imperdiet Lorem ipsum dolor sit amet consectetur.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
