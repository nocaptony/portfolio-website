import React from "react";

export default function Footer() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center first-line:bottom-0 bg-[#7D2940]">
      <div className="">© Copyright 2023 by nocaptony </div>
      <div className="">
        Powered by <span className="text-[#B266FF]">Next.js</span> and{" "}
        <span className="text-[#B266FF]">TailwindCSS</span>. Hosted on
        <span className="text-[#B266FF]"> Vercel</span>
      </div>
    </div>
  );
}
