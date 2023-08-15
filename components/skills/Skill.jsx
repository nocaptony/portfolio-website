import React from "react";
import { DiReact, DiJava, DiJavascript1, DiPython } from "react-icons/di";
import { IconContext } from "react-icons";
import { SiTypescript, SiCplusplus } from "react-icons/si";

export default function Skill() {
  return (
    <IconContext.Provider value={{ className: "react-icons", size: "5rem" }}>
      <ul className="flex flex-wrap justify-center lg:flex-nowrap">
        <li className="skill-card">
          <DiReact />
        </li>
        <li className="skill-card">
          <DiJavascript1 />
        </li>
        <li className="skill-card">
          <SiTypescript />
        </li>
        <li className="skill-card">
          <DiJava />
        </li>
        <li className="skill-card">
          <DiPython />
        </li>
        <li className="skill-card">
          <SiCplusplus />
        </li>
      </ul>
    </IconContext.Provider>
  );
}
