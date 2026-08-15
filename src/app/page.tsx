import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import FeaturedWorks from "@/components/FeaturedWorks";
import ClaudeExploration from "@/components/ClaudeExploration";
import Reviews from "@/components/Reviews";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import SplineScene from "@/components/SplineScene";

export default function Home() {
  return (
    <main className="relative bg-green-10">
      <div className="absolute inset-0">
        <Image
          src="/images/bg-gradient.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <Header />
      <Hero />
      <WhyWorkWithMe />
      <FeaturedWorks />
      <ClaudeExploration />
      <Reviews />
      <Experience />
      <Footer />
      <SplineScene />
    </main>
  );
}
