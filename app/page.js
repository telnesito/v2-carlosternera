import AboutMe from "./Pages/AboutMe";
import Experiencies from "./Pages/Experiencies";
import Footer from "./Pages/Footer";
import GetInTouch from "./Pages/GetInTouch";
import Hero from "./Pages/Hero";
import OtherProjects from "./Pages/OtherProjects";
import Projects from "./Pages/Projects";
import BorderSocial from "./components/BorderSocial";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <BorderSocial social={'carlosternera46@gmail.com'} />

      <Hero />
      <Experiencies />
      <AboutMe />

      <Projects />
      <OtherProjects />
      <GetInTouch />
      <Footer />
    </main>
  );
}
