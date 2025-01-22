"use client";

import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import { Code, Film } from "lucide-react";
import { Button } from "./ui/button";

export function MagicCardComponent() {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex-row md:flex space-y-4 max-w-screen-md md:space-y-0 justify-center items-center gap-5"
      }
    >
      <MagicCard
        className="cursor-pointer tracking-tighter flex-col p-5 w-full md:w-fit h-fit items-center justify-center whitespace-nowrap"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <Code className="h-12 w-12 mb-4 text-primary" />
        <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
        <p className="text-muted-foreground text-wrap mb-4 w-fit">
          Custom websites tailored to your needs. From responsive designs to
          full-stack applications, we bring your ideas to life.
        </p>
        <ul className="list-disc list-inside mb-6 text-muted-foreground">
          <li>Responsive Design</li>
          <li>E-commerce Solutions</li>
          <li>CMS Integration</li>
          <li>Performance Optimization</li>
        </ul>
        <Button variant="outline">Learn More</Button>
      </MagicCard>
      <MagicCard
        className="cursor-pointer tracking-tighter flex-col p-5 w-full md:w-fit h-fit items-center justify-center whitespace-nowrap"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <Film className="h-12 w-12 mb-4 text-primary" />
        <h3 className="text-2xl font-semibold mb-4">Video Editing</h3>
        <p className="text-muted-foreground text-wrap mb-4">
          Professional video editing to make your content stand out. From
          promotional videos to social media content, we&apos;ve got you covered.
        </p>
        <ul className="list-disc list-inside mb-6 text-muted-foreground">
          <li>Color Grading</li>
          <li>Motion Graphics</li>
          <li>Sound Design</li>
          <li>Video Optimization for Web</li>
        </ul>
        <Button variant="outline">Learn More</Button>
      </MagicCard>
    </div>
  );
}
