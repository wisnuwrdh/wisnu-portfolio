import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Services } from "@/components/site/services";
import { Projects } from "@/components/site/projects";
import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}