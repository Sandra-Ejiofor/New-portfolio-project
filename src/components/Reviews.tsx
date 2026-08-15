import Image from "next/image";

const IMG = "/images/reviews";

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-green-10">
      <div className="absolute left-[-2.08%] top-[-38%] h-[138%] w-[104.17%]">
        <Image
          src={`${IMG}/bg-gradient.png`}
          alt=""
          fill
          className="object-cover"
          sizes="105vw"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:aspect-[1440/1087] lg:block lg:px-0 lg:py-0">
        <h2 className="w-full max-w-[600px] text-center font-display text-3xl leading-[1.3] font-semibold tracking-tightest text-black-98 sm:text-4xl lg:absolute lg:left-1/2 lg:top-[4.23%] lg:w-[58.19%] lg:max-w-none lg:-translate-x-1/2 lg:text-[48px]">
          Reviews from Upwork and Contra
        </h2>

        <div className="w-full max-w-[420px] lg:absolute lg:left-[7.5%] lg:top-[13.16%] lg:w-[28.89%] lg:max-w-none">
          <Image
            src={`${IMG}/review-1-morakinyo.png`}
            alt="Review from Morakinyo David"
            width={416}
            height={247}
            className="h-auto w-full rounded-lg"
            sizes="(min-width: 1024px) 29vw, 90vw"
          />
        </div>

        <div className="w-full max-w-[624px] lg:absolute lg:left-1/2 lg:top-[20.15%] lg:w-[43.33%] lg:max-w-none">
          <Image
            src={`${IMG}/review-2-benita.png`}
            alt="Review from Benita Chimma"
            width={624}
            height={371}
            className="h-auto w-full rounded-lg"
            sizes="(min-width: 1024px) 44vw, 90vw"
          />
        </div>

        <div className="w-full max-w-[621px] lg:absolute lg:left-[19.24%] lg:top-[61.88%] lg:w-[43.13%] lg:max-w-none">
          <Image
            src={`${IMG}/review-3-upwork.png`}
            alt="Upwork review"
            width={621}
            height={250}
            className="h-auto w-full rounded-lg"
            sizes="(min-width: 1024px) 44vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
