import React from "react";
import { IoMdSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SSULogo from "@/assets/SSULogo";
import DevLogo from "@/assets/DevLogo";
import Dev1Logo from "@/assets/Dev1Logo";
import HtdLogo from "@/assets/HtdLogo"
import Psupport from "@/assets/Psupport";
import LogixHealth from "@/assets/LogixHealth";
import TsdLogo from "@/assets/TsdLogo";

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
          <span className="text-zinc-300">Bachelor&apos;s Degree, Software Engineering</span>
          <p />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#3A3B3C", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3A3B3C" }}
          date="10/2021 - 11/2022"
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
          date="06/2023 - 09/2023"
          iconStyle={{ background: "#fff" }}
          icon={<DevLogo />}
        >
          <h3 className="text-2xl">Commit s.r.l</h3>
          <span className="text-zinc-300">Front-End Developer Internship</span>
          <p>
            React · TypeScript · JavaScript · Web Development · Mobile Development · Android Studio ·
            XCode · GitHub · Cascading Style Sheets (CSS) · HTML
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#3A3B3C", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3A3B3C" }}
          date="10/2023 - Present"
          iconStyle={{ background: "#fff" }}
          icon={<Dev1Logo />}
        >
          <h3 className="text-2xl">Freelance Software Developer</h3>
          <p>
          Software development • Web development • Mobile app development • 
          Backend development • Frontend development • Full-stack development • Agile development • 
          Project management • Version control • Code review
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#3A3B3C", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3A3B3C" }}
          date="03/2024 - 06/2024"
          iconStyle={{ background: "#fff" }}
          icon={<HtdLogo />}
        >
          <h3 className="text-2xl">HTD Talent</h3>
          <span className="text-zinc-300">Java Async/Sync Training</span>
          <p>
            Java · Maven · Spring Boot · JUnit · Testing · IntelliJ ·
            GitHub · Slack · Docker · SQL · JavaScript · React
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#3A3B3C", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3A3B3C" }}
          date="07/2024 - 09/2024"
          iconStyle={{ background: "#fff" }}
          icon={<Psupport />}
        >
          <h3 className="text-2xl">OPS CO Solutions</h3>
          <span className="text-zinc-300">Production Support Analyst Training</span>
          <p>
          Production Support • Linux • Grafana • 
          Jenkins • DevOps • MySQL • AWS • GitHub • Python •
          Tickets • SQL Server Management Studio 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#3A3B3C", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3A3B3C" }}
          date="01/2025 - 07/2025"
          iconStyle={{ background: "#fff" }}
          icon={<LogixHealth />}
        >
          <h3 className="text-2xl">LogixHealth</h3>
          <span className="text-zinc-300">ERA Specialist</span>
          <p>
          Automation • Python • Allscripts • 
          Microsoft Teams • Scripting • Testing •
          Tickets • Troubleshooting • Health Care • Insurance
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#3A3B3C", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3A3B3C" }}
          date="07/2025 - Present"
          iconStyle={{ background: "#fff" }}
          icon={<TsdLogo />}
        >
          <h3 className="text-2xl">TSD Mobility Solutions</h3>
          <span className="text-zinc-300">Software QA Analyst</span>
          <p>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
