import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;