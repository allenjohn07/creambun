'use client'

import React from "react";
import { MarqueeComponent } from "./MarqueeComponent";
import CenterUnderline from "./fancy/underline-center";
import Link from "next/link";

const FooterComponent: React.FC = () => {
  return (
    <>
      <MarqueeComponent />
      <div className="sticky z-0 bottom-0 left-0 w-full h-80 bg-white flex justify-center items-center">
        <div className="relative max-w-screen-lg mx-auto overflow-hidden w-full h-full flex justify-end text-right items-start py-12 text-primaryRed">
          <div className="flex flex-row mr-10 md:mr-0 tracking-tighter space-x-12 sm:pace-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul className="flex flex-col gap-1">
              <Link href={"/"}>
                <CenterUnderline label="Home" className="w-fit" />
              </Link>
              <Link href={"#services"}>
                <CenterUnderline label="Services" className="w-fit" />
              </Link>
              <Link href={"#works"}>
                <CenterUnderline label="Works" className="w-fit" />
              </Link>
              <Link href={"#about"}>
                <CenterUnderline label="About" className="w-fit" />{" "}
              </Link>
            </ul>
            <ul className="flex flex-col gap-1">
              <CenterUnderline label="Github" className="w-fit" />
              <CenterUnderline label="Instagram" className="w-fit" />
            </ul>
          </div>
          <h2 className="absolute abril-fatface-regular bottom-0 left-5 md:left-0 tracking-tighter translate-y-1/3 sm:text-[192px]  text-[60px] font-calendas">
            Creambun
          </h2>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
