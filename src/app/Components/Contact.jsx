import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = ({ setActiveMenu }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.4, 
  });

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setActiveMenu("Contact")}
      id="Contact"
      className="w-full bg-[#121212] h-auto p-2 my-16"
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full flex flex-col items-center">
        <h2 className="py-2 text-2xl tracking-widest text-white font-bold">
          Contact Me
        </h2>
        <p className="font-semibold text-[#7b7b7b]">
          Cultivating Connections: Reach Out And Connect With Me
        </p>
        <div className="p-8 flex w-full justify-center gap-8">
          <div className="w-3/5 lg:p-12">
            <div className="p-4 text-[#7b7b7b]">
              <form className="flex flex-col gap-4">
                <div className="flex space-x-4 w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border w-full placeholder:text-[#7b7b7b] outline-none rounded-lg p-3 bg-[#1b1b1b] border-gray-700"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border w-full rounded-lg p-3 placeholder:text-[#7b7b7b] outline-none bg-[#1b1b1b] border-gray-700"
                  />
                </div>
                <div className="flex space-x-4 w-full">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="border w-full rounded-lg p-3 placeholder:text-[#7b7b7b] outline-none bg-[#1b1b1b] border-gray-700"
                  />
                  <select
                    name="service"
                    className="border w-full rounded-lg p-3 placeholder:text-[#7b7b7b] outline-none bg-[#1b1b1b] border-gray-700"
                  >
                    <option value="">Service Of Interest</option>
                    <option value="web-development">Web Development</option>
                    <option value="seo">SEO</option>
                    <option value="digital-marketing">Digital Marketing</option>
                  </select>
                </div>
                <div className="flex space-x-4 w-full">
                  <input
                    type="text"
                    name="timeline"
                    placeholder="Timeline"
                    className="border w-full h-12 placeholder:text-[#7b7b7b] outline-none rounded-lg p-3 bg-[#1b1b1b] border-gray-700 col-span-2"
                  />
                  <textarea
                    name="projectDetails"
                    rows="4"
                    placeholder="Project Details..."
                    className="border w-full rounded-lg p-3 placeholder:text-[#7b7b7b] outline-none bg-[#1b1b1b] border-gray-700 col-span-2"
                  ></textarea>
                </div>
                <div className="w-full flex justify-end">
                  <button
                    type="submit"
                    className="px-10 py-2 border-2 border-[#7b7b7b] rounded-xl hover:bg-[#7b7b7b] hover:text-[#1b1b1b]"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
