import Image from "next/image";

const navLinks = [
  { label: "Case studies", href: "#case-studies" },
  { label: "Claude code", href: "#claude-code" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sandra-ejiofor-product-designer", icon: "/images/icon-linkedin.png" },
  { label: "Behance", href: "https://www.behance.net/sandraejiofor708", icon: "/images/icon-behance.png" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-6 sm:px-6 sm:pt-8 lg:pt-[39px]">
      <div className="mx-auto flex w-full max-w-[500px] items-center justify-between gap-3 rounded-full border-[3px] border-green-90 bg-white px-3 py-2 shadow-[0px_4px_3.5px_rgba(255,255,255,0.2)] sm:gap-4 sm:px-5">
        <a
          href="#spline-scene"
          aria-label="Home"
          className="relative size-9 shrink-0 overflow-clip rounded-full bg-black sm:size-[50px]"
        >
          <Image
            src="/profile-pic.png"
            alt="Sandra Ejiofor"
            fill
            quality={100}
            className="object-cover"
            sizes="150px"
          />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-3 font-sans text-sm font-medium tracking-tightest whitespace-nowrap text-black-20 sm:flex sm:gap-[12px]"
        >
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:opacity-70">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-[8px]">
          <div className="flex items-center gap-1.5 sm:gap-[6px]">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="relative size-7 shrink-0 overflow-clip rounded-[4px] bg-black-98 sm:size-8"
              >
                <Image
                  src={social.icon}
                  alt=""
                  fill
                  className="object-cover p-1"
                />
              </a>
            ))}
          </div>

          <a
            href="mailto:Sanzyblues708@gmail.com"
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-green-50 px-3 py-2 font-sans text-xs font-normal tracking-tightest whitespace-nowrap text-white shadow-[0px_4px_3.5px_rgba(104,144,50,0.25)] hover:opacity-90 sm:h-10"
          >
            Contact me
          </a>
        </div>
      </div>
    </header>
  );
}
