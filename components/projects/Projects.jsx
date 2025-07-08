import React from "react";
import ProjectCard from "./ProjectCard";
import SoccerTracker from "../../public/soccertracker.png";
import MovieDB from "../../public/tmdb.png";
import CapybaraMapper from "../../public/capybaramapper.png";

export default function Projects() {
  return (
    <div className="flex flex-col text-center md:mt-0 items-center p-24 justify-center">
      <h3 className="text-4xl text-zinc-400 pb-10">
        My Recent <span className="text-white">Works</span>
      </h3>
      <ul className="flex flex-col sm:flex-row">
        <ProjectCard imgUrl={MovieDB} title="Tony's Movie Database" link="https://tk-movie-db.netlify.app/"/>
        <ProjectCard imgUrl={CapybaraMapper} title="CapybaraMapper" link="https://github.com/nocaptony/CapybaraMapper"/>
        <ProjectCard imgUrl={SoccerTracker} title="SoccerTracker" link="https://github.com/nocaptony/soccer-tracker"/>
      </ul>
    </div>
  );
}
