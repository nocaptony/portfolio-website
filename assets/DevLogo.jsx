import Image from "next/image";
import React from "react";
import logo from "../assets/DevLogo.png";

export default function DevLogo() {
  return (
    <div>
      <Image src={logo} alt="Developer Logo" />
    </div>
  );
}
