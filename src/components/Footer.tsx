const contactLinks = [
  { label: "Sanzyblues708@gmail.com", href: "mailto:sanzyblues708@gmail.com" },
  { label: "+2348143178124", href: "tel:+2348143178124" },
  { label: "Behance", href: "https://www.behance.net/sandraejiofor708" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/sandra-ejiofor-product-designer" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 flex flex-col items-center justify-center gap-10 bg-white px-4 py-16 leading-[1.3] sm:gap-12 sm:px-6 sm:py-20 lg:gap-[33px] lg:p-20"
    >
      <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-5 lg:w-auto lg:flex-1 lg:items-start lg:gap-[19px] lg:text-left">
          <p className="font-sans text-base font-medium tracking-tightest text-black-20 sm:text-lg lg:text-[22px]">
            Have a project in mind ?
          </p>
          <p className="w-full font-display text-6xl font-semibold tracking-tightest text-[#d9d9d9] sm:text-7xl md:text-8xl lg:text-[164px]">
            Let’s talk
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-2 text-center font-sans text-base font-medium tracking-tightest text-black-20 sm:gap-2.5 sm:text-lg lg:w-[275px] lg:shrink-0 lg:gap-[9px] lg:text-[22px]">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="[text-underline-position:from-font] w-full underline decoration-solid decoration-from-font hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <p className="hidden w-full font-display text-6xl font-semibold tracking-tightest text-black sm:block sm:text-7xl md:text-8xl lg:text-[170px]">
        Sandra Ejiofor
      </p>
    </footer>
  );
}
