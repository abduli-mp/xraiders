import Header from "./components/Header";
import Hero from "./components/Hero";
import Games from "./components/Games";
import About from "./components/About";
import Join from "./components/Join";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Games />
        <About />
        <Join />
      </main>
      <Footer />
    </>
  );
}
