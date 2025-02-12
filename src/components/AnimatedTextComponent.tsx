import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

export function AnimatedShinyTextComponent() {
  return (
    <div className="z-10 flex pt-10 pb-5 md:pb-0 items-center justify-center">
      <div
        className={cn(
          "group rounded-full bg-neutral-100 text-base text-white transition-all ease-in",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
          <span className="text-sm md:text-lg">Excellence in Every Pixel.</span>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
