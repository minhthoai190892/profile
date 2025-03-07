import React from "react";
import { imageItem } from "../assets/asset";
const skills = [
  { title: "HTML", image: imageItem.html },
  { title: "CSS", image: imageItem.css },
  { title: "Javascript", image: imageItem.js },
  { title: "ReactJs", image: imageItem.react },
  { title: "Tailwind", image: imageItem.tailwind },
  { title: "Zustand", image: imageItem.zustand },
  { title: "Mongodb", image: imageItem.mongodb },
  { title: "Express", image: imageItem.express },
  { title: "NextJs", image: imageItem.nextJs },
  { title: "Nodejs", image: imageItem.nodejs },
];
export default function About() {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-tighter uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tighter text-neutral sm:text-4xl">
              Hi, I'm Thoại
            </p>
            <p className="mt-4 max-w-2xl text-xl text-stone-400 lg:mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
              maxime dolores voluptate explicabo ipsa culpa aut quae excepturi
              consequatur id doloremque vel eum corporis molestias at laudantium
              a, fugit magni.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-neutral">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, voluptas. Vero facere totam consequatur a deserunt
                  adipisci cupiditate consequuntur magnam maxime, neque animi,
                  ullam porro atque hic ut mollitia iure.
                </p>
                <img
                  src={imageItem.merntack}
                  alt=""
                  className="p-2 rounded-lg w-52 mt-4"
                />
              </div>
              <div className="border shadow-lg rounded-lg md:p-7 flex flex-col gap-4 items-center shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Skill & Expertise
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  {skills.map((el) => (
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={el.image} className="w-10" alt="" />
                      <span>{el.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              corporis doloremque suscipit saepe alias sint voluptates eius
              laudantium? Molestiae repellat tenetur velit commodi, excepturi
              non at aperiam quos iste sit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
