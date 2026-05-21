import { useState } from 'react';
import Title from './Title';
import { Code2, Database, Brain, Award, Calendar, MapPin, Mail, ChevronRight } from 'lucide-react';
import profileImg from '../assets/profile.png';

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const expertise = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Développement Full Stack',
      description: 'Création d\'applications web robustes avec React, Node.js et architectures modernes. Expertise en TypeScript, Next.js et TailwindCSS.',
      skills: ['React', 'Node.js', 'TypeScript', 'Next.js', 'TailwindCSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Science & IA',
      description: 'Analyse de données, machine learning et deep learning pour des solutions intelligentes. Spécialisation en Python, TensorFlow et Scikit-learn.',
      skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'SQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Architecture Logicielle',
      description: 'Conception de systèmes scalables et maintenance de code de haute qualité. Maîtrise des design patterns et des microservices.',
      skills: ['Design Patterns', 'Microservices', 'API Design', 'Clean Code', 'Docker'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { value: '5+', label: 'Années d\'expérience', icon: <Calendar /> },
    { value: '30+', label: 'Projets réalisés', icon: <Award /> },
    { value: '15+', label: 'Clients satisfaits', icon: <Mail /> },
    { value: '10+', label: 'Technologies maîtrisées', icon: <Code2 /> }
  ];

  return (
    <div className="container mx-auto px-5 md:px-[10%]">
      <Title>À propos de moi</Title>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Colonne gauche */}
        <div className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-2xl animate-rotate opacity-50"></div>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-premium p-4 rounded-xl text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent to-primary p-2 text-white group-hover:rotate-12 transition-transform">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-base-content/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite */}
        <div className="space-y-6">
          <div className="card-premium p-6 rounded-xl">
            <p className="text-lg text-base-content/80 leading-relaxed">
              Passionné par le développement logiciel et la data science, je crée des solutions 
              innovantes qui allient performance technique et intelligence artificielle. 
              Mon approche combine rigueur scientifique et créativité pour résoudre des problèmes complexes.
            </p>
          </div>

          {/* Tabs d'expertise */}
          <div className="flex space-x-2 border-b border-base-300">
            {expertise.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-4 py-2 relative transition-all duration-300 ${
                  activeTab === index
                    ? 'text-accent font-medium'
                    : 'text-base-content/60 hover:text-base-content'
                }`}
              >
                <span className={`transition-transform ${activeTab === index ? 'scale-110' : ''}`}>
                  {item.icon}
                </span>
                <span className="hidden md:inline">{item.title.split(' ')[0]}</span>
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-primary"></div>
                )}
              </button>
            ))}
          </div>

          {/* Contenu du tab actif */}
          <div className="card-premium p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${expertise[activeTab].color} p-3 text-white`}>
                {expertise[activeTab].icon}
              </div>
              <h3 className="text-xl font-bold">{expertise[activeTab].title}</h3>
            </div>
            <p className="text-base-content/70 mb-4">{expertise[activeTab].description}</p>
            <div className="flex flex-wrap gap-2">
              {expertise[activeTab].skills.map((skill, index) => (
                <span
                  key={index}
                  className="badge badge-accent badge-outline p-3 skill-badge"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Parcours */}
          <div className="card-premium p-6 rounded-xl">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Parcours
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-2 h-2 mt-2 rounded-full bg-accent group-hover:scale-150 transition-transform"></div>
                <div>
                  <p className="font-medium">Master en Data Science</p>
                  <p className="text-sm text-blue-500 text-base-content/60">Université de Yaoundé I • année en cours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                <div>
                  <p className="font-medium">Licence en Informatique</p>
                  <p className="text-sm text-base-content/60">Université dE Yaoundé I • 2024-2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;