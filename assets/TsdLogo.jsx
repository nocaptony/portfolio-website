import Image from "next/image";
import React from "react";
import logo from "../assets/tsd.png";

export default function TsdLogo() {
  return (
    <div>
      <Image src={logo} alt="TSD Logo" />
    </div>
  );
}
