import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
