import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import MissionVision from "./components/MissionVision";
import Programs from "./components/Programs";
import Activities from "./components/Activities";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutUs />
      <MissionVision />
      <Programs />
      <Activities />
      <Values />
      <Contact />
      <Footer />
    </main>
  );
}
