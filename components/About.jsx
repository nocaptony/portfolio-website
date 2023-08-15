import { motion } from "framer-motion";
export default function About() {
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-full
    px-10 justify-evenly mx-auto items-center"
    >
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="/aboutPic.png"
        alt="user picture"
        className="mt-20 md:mb-0 flex-shrink-0 w-52 h-52 md:w-[300px] md:h-[300px]
        rounded-full object-cover md:rounded-lg 
        xl:w-[400px] xl:h-[400px] "
      />
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-3 px-0 md:px-10 text-left"
      >
        <p className=" text-zinc-400 sm:text-[25px] text-[14px] text-secondary edison uppercase tracking-wider">
          Introduction
        </p>
        <p className=" text-zinc-200 text-base sm:text-lg md:text-xl lg:text-xl">
           Hello, I'm Tony Karaj, a dedicated software developer with a dynamic skill set that spans both backend and frontend realms. 
           My academic journey laid a strong foundation in backend development, where I mastered languages like Java, Python, C, and C++. 
           These years not only sharpened my coding abilities but also instilled in me a passion for solving intricate problems efficiently.
           Stepping into the world of frontend development, I embarked on a year-long journey that saw me dive into the intricacies of React Native, TypeScript, and JavaScript. 
           Through freelancing and hands-on projects, I have honed the art of translating user requirements into visually appealing and seamlessly functional interfaces. 
           Understanding user behavior and preferences has become second nature, allowing me to create experiences that captivate and engage.
           My approach to development is characterized by a blend of technical expertise and creative finesse. 
           I revel in crafting elegant solutions that marry the robustness of backend architecture with the elegance of frontend design. 
           What drives me is the constant pursuit of innovation, the thrill of exploring new technologies, and the satisfaction of turning abstract ideas into tangible digital realities.
        </p>
      </motion.div>
    </div>
  );
}
