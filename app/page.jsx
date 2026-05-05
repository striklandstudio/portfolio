import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
