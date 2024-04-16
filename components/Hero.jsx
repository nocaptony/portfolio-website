import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "../public/profilePic.png";

function Hero() {
  const [greeting] = useTypewriter({
    words: ["Hello", "你好", "नमस्ते", "Hola", "Bonjour", "مرحباً", "হ্যালো", "Привет", "Olá", "ہیلو", "Halo", "Hallo", "こんにちは", "Dobro Dan", "Ciao"],
    loop: true,
    delaySpeed: 2000,
  });
  const [text] = useTypewriter({
    words: ["I'm Tony", "<SoftwareDeveloper />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <div className="relative mx-auto object-cover">
        <Image
          src={profilePic}
          alt="Profile picture"
          width={180}
          height={180}
          priority={true}
        />
      </div>
      <div className="z-19">
        <h2 className="text-md uppercase text-gray-300 pb-2 tracking-[10px]">
          Programmer
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span>{greeting}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <h1 className="text-xl sm:text-xl md:text-xl lg:text-xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </motion.div>
  );
}

export default Hero;
