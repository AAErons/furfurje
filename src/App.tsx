import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Team } from "./components/Team";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#saturs">
        Pāriet pie satura
      </a>
      <Header />
      <main id="saturs">
        <Hero />
        <Benefits />
        <Team />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
