import React from "react";
import { DiAndroid, DiVisualstudio } from "react-icons/di";
import { IconContext } from "react-icons";
import {
  SiLinux,
  SiMongodb,
  SiAxios,
  SiXcode,
} from "react-icons/si";

export default function Tools() {
  return (
    <IconContext.Provider value={{ className: "react-icons", size: "5rem" }}>
      <ul className="flex flex-wrap justify-center lg:flex-nowrap">
        <li className="skill-card">
          <DiVisualstudio />
        </li>
        <li className="skill-card">
          <SiLinux />
        </li>
        <li className="skill-card">
          <SiMongodb />
        </li>
        <li className="skill-card">
          <SiAxios />
        </li>
        <li className="skill-card">
          <SiXcode />
        </li>
        <li className="skill-card">
          <DiAndroid />
        </li>
      </ul>
    </IconContext.Provider>
  );
}
