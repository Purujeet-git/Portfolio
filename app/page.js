import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import RecentProject from "./components/RecentProject";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <div className="w-full">
        {/* We omitted FloatingNav to align with a more minimal aesthetic, or it can be reimagined later */}
        <Hero/>
        <TechMarquee/>
        <div className="max-w-7xl mx-auto w-full sm:px-10">
          <RecentProject/>
          <About/>
          <ContactForm/>
        </div>
      </div>
    </main>
  );
}
