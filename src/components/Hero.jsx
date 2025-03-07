import React from "react";
import IconItem from "./IconItem";
import Tsparticles from "./tsparticles";
import { imageItem } from "../assets/asset";

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 md:mb-0 mb-8 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi there,
              <br />
              I'm Thoai
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer & Designer</p>
            <p>
              I'm a passionate web developer with expertise in React, Node.js
            </p>
            <button className="text-white px-3 py-2 w-max rounded-md">
              Download CV
            </button>
          </div>
          <IconItem />
          <div className="absolute hidden p-4 md:flex bg-primary flex-col  gap-4 rounded-full top-48 right-4">
            <img src={imageItem.facebook} className="w-14" alt="" />
            <img src={imageItem.github} className="w-14" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
