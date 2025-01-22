import React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import CenterUnderline from "./fancy/underline-center";

const NavbarComponent = () => {
  return (
    <div
      className="flex bg-white z-50 sticky top-0 justify-between items-center bg-transparent px-5 md:px-56 py-5 mx-auto"
    >
      <Link href={"/"}>
        <h1 className="text-5xl md:text-5xl tracking-tighter abril-fatface-regular">
          Creambun
        </h1>
      </Link>
      <div className="hidden md:flex h-5 items-center space-x-4">
        <Link className="tracking-tighter text-xl" href="#services">
          <CenterUnderline label="services" />
        </Link>
        <span className="text-neutral-200">|</span>
        <Link className="tracking-tighter text-xl" href="#works">
          <CenterUnderline label="works" />
        </Link>
        <span className="text-neutral-200">|</span>
        <Link className="tracking-tighter text-xl" href="#about">
          <CenterUnderline label="about" />
        </Link>
        <span className="text-neutral-200">|</span>
        <Link className="tracking-tighter text-xl" href="#contact">
          <CenterUnderline label="contact" />
        </Link>
      </div>
      {/* menu for smaller screens */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <div className="border p-4 rounded-full">
              <Menu size={30} className="hover:cursor-pointer" />
            </div>
          </SheetTrigger>
          <SheetContent style={{ zIndex: 10000 }} className="w-full">
            <SheetHeader>
              <SheetTitle className="text-5xl mt-2 tracking-tighter abril-fatface-regular text-start">
                Creambun
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col h-5 mt-5 items-start space-y-5">
              <Link className="tracking-tighter text-3xl" href="#services">
                <SheetClose><CenterUnderline label="services" /></SheetClose>
              </Link>
              <Link className="tracking-tighter text-3xl" href="#works">
                <SheetClose><CenterUnderline label="works" /></SheetClose>
              </Link>
              <Link className="tracking-tighter text-3xl" href="#about">
                <SheetClose><CenterUnderline label="about" /></SheetClose>
              </Link>
              <Link className="tracking-tighter text-3xl" href="#contact">
                <SheetClose><CenterUnderline label="contact" /></SheetClose>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
export default NavbarComponent;
