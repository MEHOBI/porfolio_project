import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="font-quick overflow-x-hidden text-[18px]">
      <Navbar />
      <Hero />
      <Services />
      <Education/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}
