import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  width?: number,
  height?: number,
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  width,
  height,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col mt-5 md:mt-0 relative overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-fit"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={width}
            height={height}
            className="h-50 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2 py-2">
        <div className="space-y-0">
          <CardTitle className="text-base">{title}</CardTitle>
          <time className="font-normal tracking-tighter text-sm text-neutral-600">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="max-w-full font-normal tracking-tighter text-sm">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col px-2 py-1">
        {tags && tags.length > 0 && (
          <div className="flex min-h-10 flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 h-5 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      {/* <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex absolute bottom-2 flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter> */}
    </Card>
  );
}