import Image from "next/image";
import React from "react";
import logo from "../assets/HtdLogo.png";

export default function HtdLogo() {
  return (
    <div>
      <Image src={logo} alt="HTD Logo" />
    </div>
  );
}
