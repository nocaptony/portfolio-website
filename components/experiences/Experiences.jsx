import React from "react";
import { IoMdSchool } from "react-icons/io";
import { FaUniversity } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SSULogo from "@/assets/SSULogo";
import DevLogo from "@/assets/DevLogo";

export default function Experiences() {
  return (
    <div className="flex flex-col items-center pt-24">
      <h3 className="text-4xl text-zinc-400 pb-10 text-center">
        Education & Work <span className="text-white">Experience</span>
      </h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#3A3B3C", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3A3B3C" }}
          date="08/2018 - 12/2022"
          iconStyle={{ background: "#3A3B3C" }}
          icon={<IoMdSchool />}
        >
          <h3 className="text-2xl">Salem State University</h3>
          <span className="text-zinc-300">Bachelor`&apos;`s Degree, Software Engineering</span>
          <p />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#3A3B3C", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3A3B3C" }}
          date="08/2021 - 05/2022"
          iconStyle={{ background: "#fff" }}
          icon={<SSULogo />}
        >
          <h3 className="text-2xl">Salem State University</h3>
          <span className="text-zinc-300">Java Tutor</span>
          <p>
            Tutoring · Java · Data Structures · Algorithms · Visual Studio Code ·
            Spring Boot · Android Studio · Java 3D
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#3A3B3C", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3A3B3C" }}
          date="08/2022 - Present"
          iconStyle={{ background: "#fff" }}
          icon={<DevLogo />}
        >
          <h3 className="text-2xl">Freelance Developer</h3>
          <span className="text-zinc-300"> Frontend Developer</span>
          <p>
            React · TypeScript · JavaScript · Web Development · Mobile Development · Android Studio ·
            XCode · GitHub · Cascading Style Sheets (CSS) · HTML
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
