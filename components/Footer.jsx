import React from "react";

export default function Footer() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center first-line:bottom-0 bg-[#1B1B1B]">
      <div className="">© Copyright 2023 by nocaptony </div>
      <div className="">
        Powered by <span className="text-[#4ac4a3]">Next.js</span> and{" "}
        <span className="text-[#4ac4a3]">TailwindCSS</span>. Hosted on
        <span className="text-[#4ac4a3]"> Vercel</span>
      </div>
    </div>
  );
}
