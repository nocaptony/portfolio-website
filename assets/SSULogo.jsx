import Image from "next/image";
import React from "react";
import logo from "../assets/SSU.png";

export default function SSULogo() {
  return (
    <div>
      <Image src={logo} alt="Salem State University" />
    </div>
  );
}
