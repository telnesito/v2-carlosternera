import Hero from "./Pages/Hero";
import BorderSocial from "./components/BorderSocial";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <BorderSocial social={'carlosternera46@gmail.com'} />

      <Hero />
      <Hero />

    </main>
  );
}
