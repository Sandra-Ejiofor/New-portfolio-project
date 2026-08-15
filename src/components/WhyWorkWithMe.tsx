import Image from "next/image";

type Card = {
  title: string;
  description: string;
  bg: string;
  icon: string;
  icon2: string;
};

const cards: Card[] = [
  {
    title: "End-to-end design",
    description:
      "Web, product, branding, illustrations and motion all under one roof. No handoffs, no gaps",
    bg: "/images/why-work-with-me/card-end-to-end-bg.png",
    icon: "/images/why-work-with-me/card-end-to-end-icon.png",
    icon2: "top-[11.8%] left-[34.1%] w-[34%] aspect-[101/90.34]",
  },
  {
    title: "Saas-native thinking",
    description:
      "Design decisions built around conversion, onboarding, and retention, not just aesthetics",
    bg: "/images/why-work-with-me/card-saas-bg.png",
    icon: "/images/why-work-with-me/card-saas-icon.png",
    icon2: "top-[16.7%] left-[29.9%] w-[38.6%] aspect-[150/100]",
  },
  {
    title: "Fast, direct, reliable",
    description:
      "You work directly with me, start to finish. No handoffs, no middlemen.",
    bg: "/images/why-work-with-me/card-fast-bg.png",
    icon: "/images/why-work-with-me/card-fast-icon.png",
    icon2: "top-[11.9%] left-[35.6%] w-[30.1%] aspect-square",
  },
  {
    title: "Strategic by default",
    description:
      "Every project starts with the problem. The result is design that looks great and produces measurable result",
    bg: "/images/why-work-with-me/card-strategic-bg.png",
    icon: "/images/why-work-with-me/card-strategic-icon.png",
    icon2: "top-[13.6%] left-[34.25%] w-[30%] aspect-[83.814/80.607]",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="relative z-10 bg-black-99 px-4 py-16 sm:px-6 sm:py-20 lg:py-[81px]">
      <div className="mx-auto flex w-full max-w-[815px] flex-col items-center gap-10 sm:gap-12 lg:gap-[52px]">
        <div className="flex flex-col items-center gap-3 text-center lg:gap-[12px]">
          <div className="rounded-xl border-[0.4px] border-black-98 bg-white px-3 py-1 shadow-[0px_7px_6px_rgba(200,202,198,0.25)]">
            <p className="font-sans text-sm font-medium tracking-tightest whitespace-nowrap text-black-40">
              Why work with me ?
            </p>
          </div>
          <h2 className="max-w-[560px] font-display text-3xl leading-[1.3] font-semibold tracking-tightest text-green-10 sm:text-4xl lg:text-[48px]">
            One designer, every touchpoint covered.
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-[15px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="aspect-[400/300] w-full rounded-[13px] border-[1.1px] border-black-80 bg-white p-1.5"
            >
              <div className="relative size-full overflow-hidden rounded-[9px] border-[1.1px] border-black-80 bg-green-97">
                <Image
                  src={card.bg}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 400px, 100vw"
                />

                <div className={`absolute ${card.icon2}`}>
                  <Image
                    src={card.icon}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>

                <div className="absolute inset-x-[8%] top-[56%] flex flex-col items-center gap-3 sm:gap-4">
                  <p className="w-full text-center font-sans text-sm font-medium tracking-tightest text-black-20 sm:text-base">
                    {card.title}
                  </p>
                  <div className="h-px w-full bg-black-98" />
                  <p className="w-full text-center font-sans text-[11px] leading-[1.3] font-normal tracking-tightest text-black-60 sm:text-xs">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
