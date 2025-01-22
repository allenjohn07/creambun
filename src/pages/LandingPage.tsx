import AboutComponent from "@/components/AboutComponent";
import ContactComponent from "@/components/ContactComponent";
import FooterComponent from "@/components/FooterComponent";
import { InteractiveGridPatternComponent } from "@/components/GridComponent";
import { MagicCardComponent } from "@/components/MagicCardComponent";
import { OrbitingWebComponent } from "@/components/OrbitingWeb";
import { ProjectCard } from "@/components/work/workCard";
import { Globe } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
export const dynamic = 'force-dynamic'

const LandingPage = () => {
  return (
    <div>
      <section>
        <InteractiveGridPatternComponent />
      </section>

      <section className="h-fit px-5 relative flex flex-col items-center justify-center">
        <div className="h-32" id="services"></div>
        <h1 className="z-10 whitespace-pre-wrap w-full text-center text-5xl md:text-[5rem] abril-fatface-regular tracking-tighter text-black dark:text-white mb-5">What we offer
        </h1>
        <MagicCardComponent />
      </section>

      <section className="flex flex-col items-center justify-center">
        <div className="h-20"></div>
        <OrbitingWebComponent />
      </section>

      <section className="flex flex-col items-center justify-center">
        <div className="h-32" id="works"></div>
        <h1 className="z-10 whitespace-pre-wrap w-full text-center text-5xl md:text-[5rem] abril-fatface-regular tracking-tighter text-black dark:text-white">
          Things We&apos;ve Built
        </h1>
        <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-2 p-5 gap-0 md:gap-10">
          <ProjectCard
            href={"https://cubingkerala.org"}
            key={"Cubing Kerala"}
            title={"Cubing Kerala Website"}
            description={
              "Dedicated Web Application for the Rubik's Cube Community in Kerala."
            }
            dates={""}
            tags={[
              "Next.js",
              "TypeScript",
              "Prisma",
              "PostgreSQL",
              "WCA Login",
              "WCA API's",
              "Tailwind",
              "Shadcn UI",
              "Magic UI",
              "Lottie JSON",
            ]}
            image={"/cubingkerala.png"}
            links={[
              {
                type: "Website",
                href: "https://cubingkerala.org",
                icon: <Globe className="size-3" />,
              },
              {
                type: "Source",
                href: "https://github.com/cubingkeralaorg/cubingkerala",
                icon: <FaGithub className="size-3" />,
              },
            ]}
            width={1080}
            height={1080}
          />
          <ProjectCard
            href={"https://allenjohn.online"}
            key={"Portfolio"}
            title={"Portfolio Website"}
            description={"Minimal portfolio website."}
            dates={""}
            tags={[
              "Next.js",
              "TypeScript",
              "Tailwind",
              "Shadcn UI",
              "Magic UI",
            ]}
            image={"/allenjohn.online.png"}
            links={[
              {
                type: "Website",
                href: "https://allenjohn.online",
                icon: <Globe className="size-3" />,
              },
              {
                type: "Source",
                href: "https://github.com/allenjohn07/allenjohn.online",
                icon: <FaGithub className="size-3" />,
              },
            ]}
            width={1080}
            height={1080}
          />
        </div>
      </section>

      <section className="flex -mt-10 md:mt-0 flex-col items-center justify-start">
        <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-2 p-5 gap-0 md:gap-10">
          <ProjectCard
            href={"/"}
            key={"Creambun"}
            title={"Creambun Website"}
            description={
              "Dedicated Web Application for the Creambun."
            }
            dates={""}
            tags={[
              "Next.js",
              "TypeScript",
              "Tailwind",
              "Shadcn UI",
              "Magic UI",
              "FancyComponents",
            ]}
            image={"/creambun.png"}
            links={[
              {
                type: "Website",
                href: "/",
                icon: <Globe className="size-3" />,
              },
              {
                type: "Source",
                href: "https://github.com/allenjohn07/creambun",
                icon: <FaGithub className="size-3" />,
              },
            ]}
            width={1080}
            height={1080}
          />
          </div>
      </section>

      {/* Video section  */}
      <section className="text-center mt-10 hover:underline hover:text-blue-700 cursor-pointer hover:underline-offset-4">
        <Link href={"https://www.instagram.com/_allenjohn_/reels"}><span>Check Videos on Instagram</span></Link>
      </section>

      <section
        id="about"
        className="h-screen flex px-5 flex-col items-center justify-center"
      >
        <div className="h-20"></div>
        <h1 className="z-10 whitespace-pre-wrap w-full text-center text-5xl md:text-[5rem] abril-fatface-regular tracking-tighter text-black dark:text-white mb-5">
          About Us
        </h1>
        <AboutComponent />
      </section>

      <section
        id="contact"
        className="h-screen px-5 flex flex-col items-center justify-center"
      >
        <h1 className="z-10 whitespace-pre-wrap w-full text-center text-5xl md:text-[5rem] abril-fatface-regular tracking-tighter text-black dark:text-white mb-5">
          Contact
        </h1>
        <ContactComponent />
      </section>

      <section className="h-[80vh] flex flex-col items-center justify-end">
        <FooterComponent />
      </section>
    </div>
  );
};

export default LandingPage;
