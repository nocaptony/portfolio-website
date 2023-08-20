import Image from "next/image";
import React from "react";

export default function ProjectCard(props) {
  const goToProject = () => {
    window.open(props.link, "_blank");
  };

  return (
    <div className="project-card cursor-pointer" onClick={goToProject}>
      <Image
        src={props.imgUrl}
        alt="Profile picture"
        width={300}
        height={300}
        priority={true}
      />
      <div className="pt-10">
        <h1 className="text-4xl">{props.title}</h1>
      </div>
    </div>
  );
}
