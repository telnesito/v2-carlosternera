import Experiencies from "./Pages/Experiencies";
import Hero from "./Pages/Hero";
import BorderSocial from "./components/BorderSocial";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <BorderSocial social={'carlosternera46@gmail.com'} />

      <Hero />
      <Experiencies />
      <Hero />

    </main>
  );
}
