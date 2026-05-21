import { useState } from 'react';
import Title from './Title';
import { Github, ExternalLink, Eye, Code, Sparkles } from 'lucide-react';


import project2 from '../assets/2.jpeg';
import project4 from '../assets/4.jpeg';
import project5 from '../assets/5.jpeg';
import project6 from '../assets/6.jpeg';
import project7 from '../assets/7.jpeg';
import project8 from '../assets/8.jpeg';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Amélioration de la Mobilité au Sénégal',
      description: 'Application pour améiorer la mobilité au Sénégal avec un jeu de données disponible pour un challenge repondant a une problématique métier au Sénégal',
      longDescription: 'Utilise l\'expertise et compétence en datascience pour fournir une solution face a la problématique soulever ',
      image: project2,
      technologies: ['Classe d\'algorithme', 'PowerBI', 'TensorFlow.js'],
      category: 'Challenge',
      features: ['IA prédictive', 'Temps réel', 'Analytics'],
      demo: '#',
      code: 'www.github/MatriceFac.com',
      stats: { views: 1200, likes: 45 }
    },
    {
      id: 2,
      title: 'Génération Automatique de Modèle ',
      description: 'Plateforme d\'automatisation et de génération automatique de modèle ',
      longDescription: 'Automatiser les processus de génération de modèle(réverse-ingenieurie et génération du code source).',
      image: project7,
      technologies: ['Flask', 'Python'],
      category: 'AUTOMATISATION',
      features: ['Temps réel', 'API REST'],
      demo: '#',
      code: 'www.github/MatriceFac.com',
      stats: { views: 850, likes: 32 }
    },
    {
      id: 3,
      title: 'Assistance Hospitalier',
      description: 'Plateforme d\'assistance qui permet au malade d\'avoir des médécin assiter qui font des efférence sur leurs traitements et joue le rôle de médécin guide .',
      longDescription: 'Ce faire assiter par une IA. La mise en place d\'une communication réel patient-malade-Tout ceci assiter par une IA ',
      image: project4,
      technologies: ['Modele d\'IA', 'FrontEnd-patient et Frontend Médécin', 'Auth',],
      category: 'Machine_Learning',   
      features: ['Temps réel', 'Export PDF', 'API REST'],
      demo: '#',
      code: 'www.github/MatriceFac.com',
      stats: {}
    },
    {
      id: 4,
      title: 'Plate forme de parie sportif',
      description: "API d'analyse d'impact sur les paries sportif et prédiction de score utilisant le machine learning.",
      longDescription: "Évalue et fait des prédiction de score avec une partie explicabilité des résultats fournies à partir de leurs caractéristiques avec des modèles ML avancés.",
      image: project8,
      technologies: ['FastAPI', 'Scikit-learn', 'classe d\'algorithme de machine learning'],
      category: 'Machine_Learning',
      features: ['ML Model', 'Scalable', 'Documentation'],
      demo: '#',
      code: 'www.github/MatriceFac.com',
      stats: { views: 650, likes: 28 }
    },
        {
      id: 4,
      title: 'Detection de Fraudes avec Néo4J',
      description: "Détection de Fraude dans une banque local avec le logiciel Néo4j utilisant le machine learning.",
      longDescription: "Évalue le profil des Fraudeurs et détecte automatiquement les fraudes dans un environnement distribuée sous forme de graphe à partir de leurs caractéristiques avec des modèles ML avancés.",
      image: project5,
      technologies: ['Néo4j', 'Scikit-learn', 'Docker', 'AWS'],
      category: 'Challenge',
      features: ['ML Model', 'Scalable', 'Documentation'],
      demo: '#',
      code: 'www.github/MatriceFac.com',
      stats: { views: 650, likes: 28 }
    },

        {
      id: 5,
      title: 'Detection d\'objet et reconnaissance d\'image',
      description: "Détection d\'image et reconnaissance de personne pour la conférence \'CRI|2025\' utilisant le machine learning.",
      longDescription: "Projet de reconnaissance de visage donnant lieu à la reconnaissance de visage ré-utilisable en entreprise ou dans des projets de recheche.",
      image: project6,
      technologies: ['CNN', 'DESCRIPTEURS DE CARACTERISTICS'],
      category: 'Challenge',
      features: ['ML Model', 'Scalable', 'Documentation'],
      demo: '#',
      code: 'www.github/MatriceFac.com',
      stats: { views: 650, likes: 28 }
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'AUTOMATISATION', label: 'AUTOMATISATION', icon: <Code className="w-4 h-4" /> },
    { id: 'Challenge', label: 'Challenge', icon: <Eye className="w-4 h-4" /> },
    { id: 'Machine_Learning', label: 'Machine Learning', icon: <Code className="w-4 h-4" /> }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-5 md:px-[10%]">
      <Title>Mes projets</Title>

      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`btn gap-2 transition-all duration-300 ${
              filter === cat.id 
                ? 'btn-accent shadow-lg scale-105' 
                : 'btn-ghost hover:scale-105'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative card-premium rounded-2xl overflow-hidden animate-fade-up"
            style={{ animationDelay: `${index * 150}ms` }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay avec fonctionnalités */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span key={i} className="badge badge-accent badge-sm animate-fade-up">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Badge catégorie */}
              <div className="absolute top-4 left-4">
                <span className={`badge ${
                  project.category === 'fullstack' ? 'badge-primary' :
                  project.category === 'dataviz' ? 'badge-secondary' :
                  'badge-accent'
                }`}>
                  {project.category}
                </span>
              </div>

              {/* Stats */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="badge badge-ghost gap-1">
                  <Eye className="w-3 h-3" />
                  {project.stats.views}
                </div>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-base-content/70 mb-4">
                {hoveredProject === project.id ? project.longDescription : project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="badge badge-outline badge-sm">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="badge badge-ghost badge-sm">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <a
                  href={project.demo}
                  className="btn btn-accent flex-1 btn-sm group/btn"
                  target="_blank"
                  rel="noopener"
                >
                  <ExternalLink className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
                  Demo
                </a>
                <a
                  href={project.code}
                  className="btn btn-ghost flex-1 btn-sm group/btn"
                  target="_blank"
                  rel="noopener"
                >
                  <Github className="w-4 h-4 mr-1 group-hover/btn:rotate-12 transition-transform" />
                  Code
                </a>
              </div>
            </div>

            {/* Indicateur de projet actif */}
            {hoveredProject === project.id && (
              <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            )}
          </div>
        ))}
      </div>

      {/* Message de fin */}
      <div className="text-center mt-12">
        <p className="text-base-content/60">
          D'autres projets sont disponibles sur mon{' '}
          <a 
            href="www.github/MatriceFac.com" 
            target="_blank" 
            rel="noopener"
            className="text-accent hover:underline font-medium"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;