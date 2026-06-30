import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Showcase } from "@/components/showcase";
import { Architecture } from "@/components/architecture";
import { Install } from "@/components/install";
import { Providers } from "@/components/providers";
import { Network } from "@/components/network";
import { Skills } from "@/components/skills";
import { Download } from "@/components/download";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Skills />
        <Showcase />
        <Architecture />
        <Install />
        <Providers />
        <Network />
        <Download />
      </main>
      <Footer />
    </>
  );
}
