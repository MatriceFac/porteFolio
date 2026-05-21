import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Observer pour animations au scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      
      <main>
        {/* Section Accueil - sans scroll reveal pour éviter les problèmes */}
        <section id="home" className="min-h-screen pt-20">
          <Home />
        </section>

        {/* Sections avec scroll reveal */}
        <section id="about" className="py-20 bg-base-200 scroll-reveal">
          <About />
        </section>

        <section id="experience" className="py-20 scroll-reveal">
          <Experience />
        </section>

        <section id="projects" className="py-20 bg-base-200 scroll-reveal">
          <Projects />
        </section>

        <section id="contact" className="py-20 scroll-reveal">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;