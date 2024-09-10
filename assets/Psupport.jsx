import Image from "next/image";
import React from "react";
import logo from "../assets/psupport.png";

export default function Psupport() {
  return (
    <div>
      <Image src={logo} alt="Production Support Logo" />
    </div>
  );
}
