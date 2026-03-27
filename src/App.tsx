import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;