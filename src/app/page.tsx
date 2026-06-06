import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SelectedWork from "@/components/selected-work";
import Approach from "@/components/approach";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
