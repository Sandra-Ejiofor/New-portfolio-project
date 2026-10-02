import Image from "next/image";

type Tile = {
  src: string;
  /** decorative background frame the screenshot sits inside, if any */
  frame?: string;
};

type Project = {
  title: string;
  description: React.ReactNode;
  liveHref: string;
  caseStudyHref: string;
  tiles: Tile[];
  direction: "left" | "right";
  /** "contain" scales the whole screenshot down to fit the tile with no cropping */
  fit?: "cover" | "contain";
  /** hide the "View live Project" button, default shows it */
  showLive?: boolean;
  /** hide the "View Case Study" button, default shows it */
  showCaseStudy?: boolean;
};

const IMG = "/images/featured-works";

const projects: Project[] = [
  {
    title: "Ember landing page",
    description:
      "Designed Ember's landing page to showcase the product's value proposition with clarity in a simple, unique style.",
    liveHref: "https://myember.app/",
    caseStudyHref:
      "https://www.figma.com/design/Jt5lKz48rqNUmWbqjGGGwf/New-Portfolio-Project?node-id=206-941&t=7QkGZl7v47eZBxlq-4",
    direction: "left",
    showCaseStudy: false,
    tiles: [
      { src: `${IMG}/ember-1.png` },
      { src: `${IMG}/ember-2.png` },
      { src: `${IMG}/ember-3.png` },
      { src: `${IMG}/ember-4.png` },
    ],
  },
  {
    title: "Scrubbe - Cybersecurity Platform",
    description:
      "Scrubbe is a developer-first incident management platform that helps teams detect and resolve outages faster. It reduces downtime through automated alerts, clear ownership and simple workflows.",
    liveHref: "https://www.scrubbe.com/",
    caseStudyHref: "https://www.behance.net/gallery/254328609/Incident-Managemnet",
    direction: "right",
    showLive: false,
    tiles: [
      { src: `${IMG}/scrubbe-1.png` },
      { src: `${IMG}/scrubbe-2.png` },
      { src: `${IMG}/scrubbe-3.png` },
      { src: `${IMG}/scrubbe-4.png` },
      { src: `${IMG}/scrubbe-5.png` },
      { src: `${IMG}/scrubbe-6.png` },
      { src: `${IMG}/scrubbe-7.png` },
      { src: `${IMG}/scrubbe-8.png` },
    ],
  },
  {
    title: "Buddy - Gaming app",
    description: (
      <>
        <span className="text-[#be9a09]">Buddy</span>
        <span className="text-[#474747]">{" - "}</span>
        is a gamified AI companion app that turns everyday habits into a
        live, ongoing game, one where the &ldquo;character&rdquo; is a
        companion the user raises, levels up, and customizes over time. Like
        a mobile pet-raising game (think Tamagotchi or Neko Atsume), the
        companion isn&rsquo;t just a mascot, it&rsquo;s the game&rsquo;s core
        progression system, reacting and evolving based on how the player
        engages.
      </>
    ),
    liveHref: "#",
    caseStudyHref: "https://www.behance.net/gallery/254329813/Buddy-Gaming-app",
    direction: "left",
    tiles: [
      { src: `${IMG}/buddy-1.png` },
      { src: `${IMG}/buddy-2.png`, frame: `${IMG}/buddy-frame.png` },
      { src: `${IMG}/buddy-3.png` },
      { src: `${IMG}/buddy-4.png`, frame: `${IMG}/buddy-frame.png` },
      { src: `${IMG}/buddy-5.png`, frame: `${IMG}/buddy-frame.png` },
      { src: `${IMG}/buddy-6.png` },
    ],
  },
  {
    title: "Smart Transit - AI Powered transportation System",
    description:
      "Redesigned for real-time updates and less user friction. Improved route, clarity and navigation flow for returning users",
    liveHref: "#",
    caseStudyHref:
      "https://www.behance.net/gallery/222969617/Smart-Transit-AI-Powered-real-time-transit-system",
    direction: "right",
    showLive: false,
    tiles: [
      { src: `${IMG}/smarttransit-1.png`, frame: `${IMG}/smarttransit-frame.png` },
      { src: `${IMG}/smarttransit-2.png`, frame: `${IMG}/smarttransit-frame.png` },
      { src: `${IMG}/smarttransit-3.png`, frame: `${IMG}/smarttransit-frame.png` },
      { src: `${IMG}/smarttransit-4.png`, frame: `${IMG}/smarttransit-frame.png` },
    ],
  },
  {
    title: "Genz-Ad",
    description:
      "Genz-Ad is a web based creative tool that helps teams generate, customize, and publish high-performing ads faster. It streamlines ideation and iteration with flexible templates and quick edits",
    liveHref: "#",
    caseStudyHref: "https://www.behance.net/gallery/243402563/Genz-Ad",
    direction: "left",
    fit: "contain",
    showLive: false,
    tiles: [
      { src: `${IMG}/genzad-1.png` },
      { src: `${IMG}/genzad-2.png` },
      { src: `${IMG}/genzad-3.png` },
      { src: `${IMG}/genzad-4.png` },
      { src: `${IMG}/genzad-5.png` },
    ],
  },
];

function ArrowButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 shrink-0 items-center justify-center gap-1 rounded-full border border-black-90 px-3 py-2 shadow-[0px_4px_7px_0px_rgba(104,144,50,0.25)] hover:bg-black-90"
    >
      <span className="font-sans text-xs tracking-tightest whitespace-nowrap text-green-20">
        {label}
      </span>
      <span className="flex size-[18px] rotate-45 items-center justify-center">
        <Image
          src={`${IMG}/icon-arrow-line.svg`}
          alt=""
          width={18}
          height={18}
        />
      </span>
    </a>
  );
}

function ProjectTicker({
  tiles,
  direction,
  fit = "cover",
}: {
  tiles: Tile[];
  direction: "left" | "right";
  fit?: "cover" | "contain";
}) {
  const track = [...tiles, ...tiles];
  const durationSeconds = tiles.length * 5;

  return (
    <div className="w-full overflow-hidden">
      <div
        className={`flex w-max gap-4 lg:gap-[24px] ${
          direction === "right" ? "animate-marquee-right" : "animate-marquee-left"
        }`}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {track.map((tile, index) => (
          <div
            key={index}
            className="aspect-[500/450] w-[240px] shrink-0 rounded-[13px] border-[1.1px] border-black-90 bg-white p-1.5 sm:w-[320px] lg:w-[500px]"
          >
            <div className="relative size-full overflow-hidden rounded-[9px] border-[1.1px] border-black-90 bg-black-92">
              {tile.frame && (
                <Image src={tile.frame} alt="" fill className="object-cover" sizes="500px" />
              )}
              <Image
                src={tile.src}
                alt=""
                fill
                className={
                  tile.frame
                    ? "object-contain p-[6%]"
                    : fit === "contain"
                      ? "object-contain"
                      : "object-cover"
                }
                sizes="500px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturedWorks() {
  return (
    <section
      id="case-studies"
      className="relative z-10 flex flex-col items-center gap-10 bg-green-98 px-4 py-10 sm:px-6 sm:py-12 lg:gap-[49px] lg:px-[50px] lg:py-[40px]"
    >
      <div className="flex w-full max-w-[838px] flex-col items-center gap-6 lg:gap-[24px]">
        <div className="flex flex-col items-center gap-3 text-center lg:gap-[12px]">
          <div className="rounded-xl border-[0.4px] border-black-98 bg-white px-3 py-1 shadow-[0px_7px_6px_rgba(200,202,198,0.25)]">
            <p className="font-sans text-sm font-medium tracking-tightest whitespace-nowrap text-black-40">
              Featured works
            </p>
          </div>
          <h2 className="font-display text-3xl leading-[1.3] font-semibold tracking-tightest text-green-10 sm:text-4xl lg:text-[48px]">
            Designs that solved real problems
          </h2>
        </div>


      </div>

      <div className="flex w-full max-w-[1340px] flex-col gap-6 lg:gap-[24px]">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex w-full flex-col gap-6 overflow-hidden rounded-xl bg-white p-6 shadow-[0px_7px_12px_0px_rgba(218,218,218,0.25)] sm:p-8 lg:gap-[24px] lg:rounded-[12px] lg:p-[32px]"
          >
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
              <div className="flex w-full flex-col items-start gap-6 lg:w-[332px] lg:gap-[24px]">
                <div className="flex w-full flex-col items-start gap-1.5 lg:gap-[6px]">
                  <p className="font-sans text-lg font-medium tracking-tightest text-black sm:text-[22px]">
                    {project.title}
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="flex h-[30px] items-center overflow-hidden rounded-xl border-[0.5px] border-black-98 bg-white px-1 shadow-[0px_7px_12px_0px_rgba(210,235,173,0.25)]">
                      <Image
                        src={`${IMG}/figma-logo.png`}
                        alt="Figma"
                        width={20}
                        height={25}
                        className="h-[25px] w-5 object-contain"
                      />
                    </div>
                    <div className="flex h-[30px] w-8 items-center justify-center overflow-hidden rounded-xl border-[0.5px] border-black-98 bg-white shadow-[0px_7px_12px_0px_rgba(210,235,173,0.25)]">
                      <Image
                        src={`${IMG}/jitter-logo.png`}
                        alt="Jitter"
                        width={32}
                        height={12}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {project.showLive !== false && (
                    <ArrowButton href={project.liveHref} label="View live Project" />
                  )}
                  {project.showCaseStudy !== false && (
                    <ArrowButton href={project.caseStudyHref} label="View Case Study" />
                  )}
                </div>
              </div>
              <p className="font-sans text-sm tracking-tightest text-black-40 lg:w-[412px] lg:text-[14px]">
                {project.description}
              </p>
            </div>

            <ProjectTicker
              tiles={project.tiles}
              direction={project.direction}
              fit={project.fit}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
