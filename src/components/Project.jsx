import React from "react";
import { imageItem } from "../assets/asset";
import CardProject from "./CardProject";
const projects = [
  {
    title: "project 1",
    desc: "description 1",
    image: imageItem.avatar,
    linkDemo: "link demo 1",
    github: "github 1",
  },
  {
    title: "project 2",
    desc: "description 2",
    image: imageItem.avatar,
    linkDemo: "link demo 2",
    github: "github 2",
  },
  {
    title: "project 3",
    desc: "description 3",
    image: imageItem.avatar,
    linkDemo: "link demo 3",
    github: "github 3",
  },
];
export default function Project() {
  return (
    <section id="projects" className="relative bg-gray-600 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((el) => (
            <CardProject project={el} />
          ))}
        </div>
      </div>
    </section>
  );
}
