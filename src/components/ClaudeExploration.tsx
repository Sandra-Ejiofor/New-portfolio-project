import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  liveHref: string;
};

const IMG = "/images/claude-exploration";

const projects: Project[] = [
  {
    title: "Creative Video Agency",
    description: "A landing page for a creative video agency",
    image: `${IMG}/project-1-creative-video-agency.png`,
    liveHref: "https://agency-day-2.vercel.app/",
  },
  {
    title: "Weme-AI creative collaborator",
    description:
      "A landing page for AI- creative collaborator styled around games card",
    image: `${IMG}/project-2-weme-ai.png`,
    liveHref: "https://weme-day-3.vercel.app/",
  },
  {
    title: "Avant",
    description: "A creative studio website with full nav screen overlay",
    image: `${IMG}/project-3-avant.png`,
    liveHref: "https://navbar-day-23.vercel.app/",
  },
  {
    title: "Nexalaw",
    description: "A web app for understanding legal terms and contracts",
    image: `${IMG}/project-4-nexalaw.png`,
    liveHref: "https://nexalaw.vercel.app/",
  },
  {
    title: "Apex - Footer",
    description:
      "A polished footer for a fintech brand with a scrolling services marque",
    image: `${IMG}/project-5-apex-footer.png`,
    liveHref: "https://apex-footer-day4.vercel.app/",
  },
  {
    title: "Vendy TV",
    description:
      "A retro-TV themed page for films, podcasts and branded content studio",
    image: `${IMG}/project-6-vendy-tv.png`,
    liveHref: "https://retrotv-day-29.vercel.app/",
  },
];

export default function ClaudeExploration() {
  return (
    <section
      id="claude-code"
      className="relative z-10 flex flex-col items-center gap-10 bg-green-98 px-4 py-10 sm:px-6 sm:py-12 lg:gap-[48px] lg:px-[170px] lg:py-[60px]"
    >
      <div className="flex flex-col items-center gap-3 text-center lg:gap-[12px]">
        <div className="rounded-xl border-[0.4px] border-black-98 bg-white px-3 py-1 shadow-[0px_7px_6px_rgba(200,202,198,0.25)]">
          <p className="font-sans text-sm font-medium tracking-tightest whitespace-nowrap text-black-40">
            Featured works
          </p>
        </div>
        <h2 className="max-w-[720px] font-display text-3xl leading-[1.3] font-semibold tracking-tightest text-green-10 sm:text-4xl lg:text-[48px]">
          Claude code exploration ( Designed in Figma and built in
          Claude-code )
        </h2>
      </div>

      <div className="grid w-full max-w-[1085px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[24px]">
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-full rounded-[13px] border-[1.1px] border-black-90 bg-white p-1.5"
          >
            <div className="flex flex-col items-start overflow-hidden rounded-[9px] border-[1.1px] border-black-90 bg-white">
              <div className="relative aspect-[330/200] w-full shrink-0 bg-black-90">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 330px, (min-width: 640px) 45vw, 90vw"
                />
              </div>

              <div className="flex w-full flex-col items-start gap-3 p-3">
                <div className="flex w-full flex-col items-start gap-1.5">
                  <p className="font-sans text-base font-medium tracking-tightest text-black">
                    {project.title}
                  </p>
                  <p className="line-clamp-2 min-h-[32px] w-full font-sans text-xs leading-[1.3] tracking-tightest text-black-40">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="flex h-[30px] items-center overflow-hidden rounded-xl border-[0.5px] border-black-98 bg-white px-1 shadow-[0px_7px_12px_0px_rgba(210,235,173,0.25)]">
                      <Image
                        src="/images/featured-works/figma-logo.png"
                        alt="Figma"
                        width={20}
                        height={25}
                        className="h-[25px] w-5 object-contain"
                      />
                    </div>
                    <div className="flex h-[30px] items-center justify-center overflow-hidden rounded-xl border-[0.5px] border-black-98 bg-white px-2 shadow-[0px_7px_12px_0px_rgba(210,235,173,0.25)]">
                      <Image
                        src={`${IMG}/claude-logo.png`}
                        alt="Claude"
                        width={56}
                        height={14}
                        className="h-[14px] w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 shrink-0 items-center justify-center gap-1 rounded-full border border-black-90 px-3 py-2 shadow-[0px_4px_7px_0px_rgba(104,144,50,0.25)] hover:bg-black-90"
                >
                  <span className="font-sans text-xs tracking-tightest whitespace-nowrap text-green-20">
                    View live Project
                  </span>
                  <span className="flex size-[18px] rotate-45 items-center justify-center">
                    <Image
                      src="/images/featured-works/icon-arrow-line.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
