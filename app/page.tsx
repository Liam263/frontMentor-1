"use client";
import Image from "next/image";
import image1 from "./assets/images/image-web-3-desktop.jpg";
import image01 from "./assets/images/image-retro-pcs.jpg";
import image02 from "./assets/images/image-top-laptops.jpg";
import image03 from "./assets/images/image-gaming-growth.jpg";
import { Cross, CrossIcon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => {
    setHidden(!hidden);
  };
  return (
    <div className="md:px-40 md:py-20 px-4">
      <div className="flex items-center justify-between mb-10">
        <div className="text-7xl font-bold">W.</div>
        <Menu onClick={toggleHidden} className={`size-16 md:hidden`} />
        <ul className={ `hidden md:flex md:flex-row gap-4 text-gray-500 `}>
          <li className="p-4 text-xl hover:text-orange-500">Home</li>
          <li className="p-4 text-xl hover:text-orange-500">New</li>
          <li className="p-4 text-xl hover:text-orange-500">Popular</li>
          <li className="p-4 text-xl hover:text-orange-500">Trending</li>
          <li className="p-4 text-xl hover:text-orange-500">Categories</li>
        </ul>

        {/* Mobile sidebar */}
        <div
          className={`flex  flex-col pl-4 fixed top-0 right-0 h-full bg-white w-3/4 shadow-lg transform ${
            !hidden ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-out`}
        >
          <div className="w-full flex justify-end pr-10 pt-4 mb-10">
            <X className="size-12" onClick={toggleHidden} />
          </div>
          <ul className="flex flex-col gap-2 text-gray-500 ">
            <li className="p-2 text-xl hover:text-orange-500">Home</li>
            <li className="p-2 text-xl hover:text-orange-500">New</li>
            <li className="p-2 text-xl hover:text-orange-500">Popular</li>
            <li className="p-2 text-xl hover:text-orange-500">Trending</li>
            <li className="p-2 text-xl hover:text-orange-500">Categories</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-10 items-center justify-center gap-4">
        <div className="col-span-10 md:col-span-7 h-full">
          <Image src={image1} alt="image1" className="h-[350px]" />
          <div className="flex md:flex-row flex-col mt-10 space-y-4 ">
            <p className="text-6xl font-bold md:w-1/2 ">
              The Bright Future of Web 3.0?
            </p>
            <div className="md:w-1/2  flex flex-col gap-4">
              <p className="  text-xl">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="px-10 py-4 bg-black text-white md:w-1/3 w-1/2 hover:bg-orange-500 hover:text-black">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:col-span-3 col-span-10 md:ml-10 bg-black text-white p-8 gap-4 h-full">
          <p className="text-4xl font-semibold text-orange-400">NEW</p>
          <div className="border-b-slate-500 border-b flex  flex-col gap-2 py-8">
            <p className="text-2xl font-semibold hover:text-orange-400">
              Hydrogen VS Electric Cars
            </p>
            <p className="text-l text-slate-500">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="border-b-slate-500 border-b flex  flex-col gap-2 py-8">
            <p className="text-2xl font-semibold hover:text-orange-400">
              The Downsides of AI Artistry
            </p>
            <p className="text-l text-slate-500">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className=" flex  flex-col gap-2 py-8">
            <p className="text-2xl font-semibold hover:text-orange-400">
              Is VC Funding Drying Up?
            </p>
            <p className="text-l text-slate-500">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols- md:gap-2 gap-14  mt-20">
        <div className=" col-span-9 md:col-span-3 flex flex-row gap-8">
          <Image src={image01} alt="image01" className="h-full w-[150px]" />
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold text-orange-500">01</p>
            <p className="text-2xl font-bold hover:text-orange-500">
              Reviving Retro PCs
            </p>
            <p className="text-xl text-slate-500">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className=" col-span-9 md:col-span-3 flex flex-row gap-8 ">
          <Image src={image02} alt="image02" className="h-full w-[150px]" />
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold text-orange-500">02</p>
            <p className="text-2xl font-bold hover:text-orange-500">
              Top 10 Laptops of 2022
            </p>
            <p className="text-xl text-slate-500">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className=" col-span-9 md:col-span-3 flex flex-row gap-8">
          <Image src={image03} alt="image03" className="h-full w-[150px]" />
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold text-orange-500">03</p>
            <p className="text-2xl font-bold hover:text-orange-500">
              The Growth of Gaming
            </p>
            <p className="text-xl text-slate-500">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </div>
  );
}
