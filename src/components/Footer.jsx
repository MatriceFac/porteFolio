import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:MatriceFac@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="relative bg-base-300 pt-16 pb-8 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-5 md:px-[10%] relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">M.</span>
              <span className="text-base-content">dev</span>
            </h3>
            <p className="text-sm text-base-content/60 mb-4">
              Développeur Full Stack et Data Scientist passionné par la création de solutions innovantes.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="btn btn-circle btn-sm btn-ghost hover:btn-accent transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Accueil', 'À propos', 'Expérience', 'Projets', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item === 'Accueil' ? 'home' : 
                             item === 'À propos' ? 'about' :
                             item === 'Expérience' ? 'experience' :
                             item === 'Projets' ? 'projects' : 'contact'}`}
                    className="text-sm text-base-content/60 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="font-bold mb-4">Expertise</h4>
            <ul className="space-y-2">
              <li className="text-sm text-base-content/60 hover:text-accent transition-colors">Full Stack Development</li>
              <li className="text-sm text-base-content/60 hover:text-accent transition-colors">Data Science & IA</li>
              <li className="text-sm text-base-content/60 hover:text-accent transition-colors">Machine Learning</li>
              <li className="text-sm text-base-content/60 hover:text-accent transition-colors">Architecture Cloud</li>
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-base-content/60">MatriceFac@gmail.com</li>
              <li className="text-sm text-base-content/60">+237 677-88-85-61</li>
              <li className="text-sm text-base-content/60">Yaoundé, Cameroun</li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-base-content/10 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-base-content/40">
          <p className="flex items-center gap-1">
            © {currentYear} Matrice. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Fait avec <Heart className="w-4 h-4 text-red-500 animate-pulse" /> au Cameroun
          </p>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 btn btn-circle btn-accent shadow-2xl hover:scale-110 transition-all duration-300 z-50 group animate-float"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;