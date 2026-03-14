import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code2, Database, Brain, Sparkles } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Développeur Full Stack',
    'Data Scientist',
    'Architecte Logiciel',
    'Ingénieur IA'
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && typedText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setTypedText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : currentRole.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, roleIndex, isDeleting]);

  const socialLinks = [
    { icon: <Github />, href: '#', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: <Linkedin />, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: <Mail />, href: 'mailto:MatriceFac@gmail.com', label: 'Email', color: 'hover:bg-red-500' }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cercles décoratifs animés */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float-reverse"></div>
      
      <div className="container mx-auto px-5 md:px-[10%] relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="space-y-6 animate-slide-left">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-medium">Bienvenue sur mon portfolio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-base-content">Bonjour, je suis</span>
              <span className="gradient-text block">Matrice</span>
            </h1>

            <div className="h-16">
              <h2 className="text-2xl md:text-3xl text-base-content/70">
                Je suis{' '}
                <span className="text-accent font-bold relative">
                  {typedText}
                  <span className="absolute -right-2 top-0 w-1 h-full bg-accent animate-blink"></span>
                </span>
              </h2>
            </div>

            <p className="text-lg text-base-content/60 leading-relaxed">
              Passionné par la création d'applications web innovantes et l'analyse de données. 
              Je transforme des idées en solutions performantes et élégantes, avec une expertise 
              en Full Stack et Data Science.
            </p>

            {/* Badges de compétences */}
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-accent badge-lg p-4 gap-2 animate-scale delay-100">
                <Code2 className="w-4 h-4" />
                <span>Full Stack</span>
              </div>
              <div className="badge badge-accent badge-lg p-4 gap-2 animate-scale delay-200">
                <Database className="w-4 h-4" />
                <span>Data Science</span>
              </div>
              <div className="badge badge-accent badge-lg p-4 gap-2 animate-scale delay-300">
                <Brain className="w-4 h-4" />
                <span>Machine Learning</span>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={scrollToProjects}
                className="btn btn-accent btn-lg group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                Voir mes projets
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <button 
                onClick={scrollToContact}
                className="btn btn-outline btn-lg group border-2 hover:border-accent"
              >
                Me contacter
                <Mail className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-circle btn-ghost hover:scale-110 transition-all duration-300 ${social.color} group animate-scale`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={social.label}
                >
                  <div className="w-5 h-5 group-hover:rotate-12 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Image avec effets premium */}
          <div className="relative animate-slide-right">
            <div className="relative w-80 h-80 mx-auto">
              {/* Cercles animés */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-4 border-2 border-accent rounded-full animate-spin-slow-reverse"></div>
              <div className="absolute inset-8 border-2 border-primary rounded-full animate-spin-slow"></div>
              
              {/* Image */}
              <div className="absolute inset-12 overflow-hidden rounded-full border-4 border-accent shadow-2xl group">
                <img
                  src={profileImg}
                  alt="Matrice"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Badge flottant */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded-full shadow-lg animate-float">
                <span className="text-sm font-bold">5+ ans d'exp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs uppercase tracking-wider text-base-content/40">Découvrir</span>
            <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
              <div className="w-1 h-2 bg-accent rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;