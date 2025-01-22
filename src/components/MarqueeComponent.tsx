import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    body: "Crafting stunning websites, editing captivating stories.",
  },
  {
    body: "Where web meets creativity and videos come to life.",
  },
  {
    body: "Your vision, our code and cinematic touch.",
  },
  {
    body: "Seamless web solutions and standout video edits.",
  },
  {
    body: "From pixels to perfection, we do it all.",
  },
  {
    body: "Design, develop, edit—excellence at every step.",
  },
  {
    body: "Innovating the web, transforming your videos.",
  },
  {
    body: "Building brands with code and creativity.",
  },
  {
    body: "Dynamic websites, compelling edits—delivered.",
  },
  {
    body: "Empowering your digital journey with web and video magic.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ body }: { body: string }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden p-2",
        // light styles
        "",
        // dark styles
        ""
      )}
    >
      <blockquote className="text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeComponent() {
  return (
    <div className="flex w-full bg-black text-white flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.body} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.body} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
