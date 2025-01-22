import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiDavinciresolve } from "react-icons/si";


export function OrbitingWebComponent() {
  return (
    <div className="relative flex h-[500px] w-full md:w-1/3 flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl md:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Technologies Used
      </span>

      <OrbitingCircles radius={150} iconSize={40}>
        <FaReact size={100}/>
        <RiNextjsFill size={100}/>
        <SiTypescript size={100}/>
        <BiLogoPostgresql size={100}/>
        <SiPrisma size={100}/>
        <SiMongodb size={100}/>
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={50} reverse speed={2}>
        <SiAdobepremierepro size={100}/>
        <SiAdobeaftereffects size={100}/>
        <SiDavinciresolve size={100}/>
      </OrbitingCircles>
    </div>
  );
}
