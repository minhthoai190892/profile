import React from "react";
import { imageItem } from "../assets/asset";
import heroImage from "../assets/Hero.png";

export default function IconItem() {
  return (
    <div className="md:w-1/2 relative flex justify-center items-end">
      <img src={heroImage} alt="" className="lg:h-[90vh] h-96" />
      <img
        src={imageItem.css}
        alt=""
        className="absolute w-10 top-36 left-0 rounded-full lg:hidden md:hidden "
      />
      <img
        src={imageItem.html}
        alt=""
        className="absolute w-10 top-14 left-0 rounded-full lg:hidden md:hidden "
      />
      <img
        src={imageItem.js}
        alt=""
        className="absolute w-10 top-[-50px]  left-28 rounded-full lg:hidden md:hidden "
      />
      <img
        src={imageItem.express}
        alt=""
        className="absolute w-10 top-[-10px] right-16 rounded-full lg:hidden md:hidden "
      />
      <img
        src={imageItem.mongodb}
        alt=""
        className="absolute w-10 top-20 right-0 rounded-full lg:hidden md:hidden "
      />
      <img
        src={imageItem.nextJs}
        alt=""
        className="absolute w-10 top-36 right-0 rounded-full lg:hidden md:hidden "
      />
      <img
        src={imageItem.react}
        alt=""
        className="absolute w-10 bottom-36 right-0 rounded-full lg:hidden md:hidden "
      />
      <img
        src={imageItem.tailwind}
        alt=""
        className="absolute w-10 top-52 left-10 rounded-full lg:hidden md:hidden "
      />
      <img
        src={imageItem.zustand}
        alt=""
        className="absolute w-28 top-[-50px] left-0 rounded-full lg:hidden md:hidden  "
      />
      <img
        src={imageItem.nodejs}
        alt=""
        className="absolute w-10 bottom-32 right-10 rounded-full lg:hidden md:hidden "
      />
    </div>
  );
}
