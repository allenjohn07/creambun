"use client";

import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { Button } from "./ui/button";
import { AnimatedShinyTextComponent } from "./AnimatedTextComponent";
import Link from "next/link";

export function InteractiveGridPatternComponent() {
  return (
    <div className="relative px-3 flex h-full w-full flex-col items-center justify-start pt-[10vh] overflow-hidden rounded-lg bg-background">
      <AnimatedShinyTextComponent />
      <p className="z-10 hidden md:block whitespace-pre-wrap w-full text-center text-[5rem] abril-fatface-regular tracking-tighter text-black dark:text-white">
        Bring Your Digital Vision to Life
      </p>
      <p className="z-10 block md:hidden w-full text-center text-5xl abril-fatface-regular tracking-tighter text-black dark:text-white">
        Bring Your Digital Vision to Life
      </p>
      <p className="z-10 pt-5 hidden md:block whitespace-pre-wrap w-full md:w-1/2 text-center text-3xl abril-fatface-regular tracking-tighter text-black dark:text-white">
        Expert{" "}
        <span className="bg-blue-400/50 rounded-md px-2">
          <span>web development</span>
        </span>{" "}
        and{" "}
        <span className="bg-[#fdc79a] rounded-md px-2">
          <span>Video Editing</span>
        </span>{" "}
        services <br /> to elevate your online presence
      </p>
      {/* mobile */}
      <p className="z-10 pt-5 block md:hidden whitespace-pre-wrap w-full md:w-1/2 text-center text-lg abril-fatface-regular tracking-tighter text-black dark:text-white"> 
        Expert{" "}
        <span className="bg-blue-400/50 rounded-md px-2">
          <span>web development</span>
        </span>{" "}
        &{" "}
        <span className="bg-[#fdc79a] rounded-md px-2">
          <span>Video Editing</span>
        </span>{" "}
        services to elevate your online presence
      </p>
      <div className="flex items-center p-5 md:p-7 justify-center gap-2 z-10">
        <Link href={"/#services"}><Button className="text-xs md:text-[15px] px-2 py-1">Explore Services</Button></Link> 
       <Link href={"/#services"}>
          <Button className="bg-transparent border border-black px-2 py-1 text-xs md:text-[15px] text-black hover:bg-transparent">
            Learn More
          </Button>
       </Link>
      </div>
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-blue-500"
      />

      
    </div>
  );
}
