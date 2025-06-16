import Header from "@/components/header";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import DarkModeButton from "@/components/DarkModeButton";
import "./globals.css";


export default function Home() {
  return (
    <main>
      <div>
        <div>
          <Header />
        </div>
        <div className="w-full max-w-4xl mx-auto px-4 mt-50">
          <Intro />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
        <div>
          <DarkModeButton />
        </div>
      </div>
    </main>
  );
}
