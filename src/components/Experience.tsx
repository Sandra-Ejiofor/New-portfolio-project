import Image from "next/image";

type Job = {
  title: string;
  role: string;
  location: string;
  period: string;
  description: string;
};

const jobs: Job[] = [
  {
    title: "Lead UI/UX Designer, Scrubbe",
    role: "Lead UI/UX Designer",
    location: "Remote, USA",
    period: "2025 - Present",
    description:
      "Helped grow the startup from early-stage to a meaningful user base through strategic design decisions and marketing collaboration. Redesigned onboarding flows to significantly improve activation, built a threat detection dashboard that helped analysts identify threats faster through better layout, and introduced a scalable design system that accelerated cross-team iteration.",
  },
  {
    title: "UI/UX Designer, Bitex Consulting",
    role: "Web & Product Designer",
    location: "Remote, New York",
    period: "2023 - 2024",
    description:
      "Led end-to-end UX redesign of a real estate platform that meaningfully improved user retention and generated additional revenue. Built scalable design systems, wrote product copy that boosted engagement, and collaborated cross-functionally to ensure strong design accuracy during implementation.",
  },
  {
    title: "Product Designer, Smarthive Tech",
    role: "Product Designer",
    location: "Remote, Nigeria",
    period: "2022 - 2023",
    description:
      "Co-designed a B2B SaaS messaging platform from research to launch, contributing to a successful rollout with strong adoption among target clients. Restructured information architecture and user flows, noticeably reducing client onboarding time and improving completion rates.",
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-green-45">
      <div className="absolute inset-0">
        <Image
          src="/images/experience/bg-gradient.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[838px] flex-col items-center gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:gap-[33px] lg:py-[50px]">
        <div className="flex flex-col items-center gap-3 text-center lg:gap-[12px]">
          <div className="rounded-xl border-[0.4px] border-black-98 bg-white px-3 py-1 shadow-[0px_7px_6px_rgba(200,202,198,0.25)]">
            <p className="font-sans text-sm font-medium tracking-tightest whitespace-nowrap text-black-40">
              Experience
            </p>
          </div>
          <h2 className="font-display text-3xl leading-[1.3] font-semibold tracking-tightest text-black sm:text-4xl lg:text-[48px]">
            Shaped by real work, real clients, real results.
          </h2>
        </div>

        <div className="w-full rounded-xl border border-black-90 bg-white p-2.5">
          <div className="flex w-full flex-col gap-5 rounded-md border border-black-90 bg-black-99 px-4 py-5 sm:px-6 lg:px-[31px] lg:py-[19px]">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="flex w-full flex-col gap-5 border-b border-black-98 pb-8"
              >
                <div className="flex w-full flex-col items-start justify-between gap-2 font-sans font-medium sm:flex-row sm:gap-4">
                  <div className="flex w-full flex-col items-start gap-1.5 sm:w-auto">
                    <p className="text-lg tracking-tightest text-black sm:text-xl">
                      {job.title}
                    </p>
                    <div className="flex flex-wrap items-center text-sm tracking-tightest whitespace-nowrap text-black-70">
                      <p>{job.role}</p>
                      <p>{`. ${job.location}`}</p>
                    </div>
                  </div>
                  <p className="shrink-0 text-sm tracking-tightest whitespace-nowrap text-black-70">
                    {job.period}
                  </p>
                </div>
                <div className="flex w-full items-start gap-3">
                  <div className="h-[35px] w-1 shrink-0 rounded-sm border-[0.4px] border-[#8da769] bg-[#e6edda]" />
                  <p className="w-full font-sans text-sm font-medium tracking-tightest text-black-50">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
