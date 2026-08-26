import OrbitalCarousel from "@/components/OrbitalCarousel";

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center px-4 pt-10 pb-16 text-center sm:px-6 sm:pt-14 md:pt-20 lg:pt-[80px]">
      <div className="flex w-full max-w-[511px] flex-col items-center gap-4 sm:gap-[16px]">
        <h1 className="w-full font-display text-4xl leading-[1.3] font-semibold tracking-tightest text-white sm:text-5xl lg:text-[48px]">
          I help founders build products people want to use and pay for
        </h1>
        <p className="w-full font-sans text-sm leading-[1.3] font-medium tracking-tightest text-black-98 sm:text-base">
          World-class web and product design for high-growth startups built
          to attract, convert, retain and scale.
        </p>
      </div>

      <a
        href="mailto:Sanzyblues708@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-white px-3 py-2 font-sans text-xs font-normal tracking-tightest whitespace-nowrap text-green-10 shadow-[0px_4px_3.5px_rgba(199,233,152,0.25)] hover:bg-black-90 sm:mt-[24px]"
      >
        Send a message
      </a>

      <div className="mt-6 w-full sm:mt-8 lg:mt-[32px]">
        <OrbitalCarousel />
      </div>
    </div>
  );
}
