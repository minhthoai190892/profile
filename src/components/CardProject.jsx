import React from "react";
import { imageItem } from "../assets/asset";

export default function CardProject({ project }) {
  console.log(project);

  return (
    <div className="border border-x-red-400 rounded-lg w-[350px] lg:w-[400px] bg-red-50">
      <img src={project.image} alt="" className="rounded-lg w-full" />
      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2">{project.title}</h1>
        <p>{project.desc}</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-red-500 text-white px-3 py-2 rounded-md">
            <a href={project.linkDemo} target="_blank">
              Link Demo
            </a>
          </button>
          <button className="bg-blue-50 text-white px-3 py-2 rounded-md">
            <a href={project.github} target="_blank" className="flex gap-1">
              <img src={imageItem.github} alt="" className="w-6" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
