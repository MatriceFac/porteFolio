import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, FolderGit2, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'À propos', icon: <User className="w-4 h-4" /> },
    { id: 'experience', label: 'Expérience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'projects', label: 'Projets', icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-base-100/90 backdrop-blur-lg shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-5 md:px-[10%]">
        <div className="flex justify-between items-center h-20">
          {/* Logo avec animation */}
          <button
            onClick={() => scrollToSection('home')}
            className="relative group"
          >
            <h1 className="text-3xl font-bold">
              <span className="gradient-text">M</span>
              <span className="gradient-text-accent">.</span>
              <span className="text-base-content">dev</span>
            </h1>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-accent'
                    : 'text-base-content hover:text-accent'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className={`transition-transform duration-300 ${
                    hoveredItem === item.id ? 'scale-110' : ''
                  }`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
                )}
                
                <div className={`absolute inset-0 bg-accent/10 rounded-lg transition-all duration-300 ${
                  hoveredItem === item.id ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}></div>
              </button>
            ))}

            <button className="ml-4 btn btn-accent btn-sm relative overflow-hidden group">
              <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <ChevronDown className="w-4 h-4 mr-1 group-hover:animate-bounce" />
              CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden btn btn-circle btn-ghost"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-accent/20 text-accent'
                  : 'hover:bg-base-300'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
              {activeSection === item.id && (
                <div className="ml-auto w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;