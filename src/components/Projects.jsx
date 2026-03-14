import { useState } from 'react';
import Title from './Title';
import { Github, ExternalLink, Eye, Code, Sparkles } from 'lucide-react';
import project1 from '../assets/i1.png';
import project2 from '../assets/i2.png';
import project3 from '../assets/i3.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Task Manager',
      description: 'Application de gestion de tâches avec recommandations IA pour optimiser la productivité.',
      longDescription: 'Utilise TensorFlow.js pour analyser les habitudes de travail et suggérer des optimisations en temps réel.',
      image: project1,
      technologies: ['React', 'Node.js', 'TensorFlow.js', 'MongoDB'],
      category: 'fullstack',
      features: ['IA prédictive', 'Temps réel', 'Analytics'],
      demo: '#',
      code: '#',
      stats: { views: 1200, likes: 45 }
    },
    {
      id: 2,
      title: 'DataViz Platform',
      description: 'Plateforme de visualisation de données interactive avec tableaux de bord personnalisables.',
      longDescription: 'Créez des visualisations complexes à partir de sources de données multiples avec export en temps réel.',
      image: project2,
      technologies: ['D3.js', 'Python', 'Flask', 'PostgreSQL'],
      category: 'dataviz',
      features: ['Temps réel', 'Export PDF', 'API REST'],
      demo: '#',
      code: '#',
      stats: { views: 850, likes: 32 }
    },
    {
      id: 3,
      title: 'EcoScore API',
      description: "API d'analyse d'impact environnemental utilisant le machine learning.",
      longDescription: "Évalue l'empreinte carbone des produits à partir de leurs caractéristiques avec des modèles ML avancés.",
      image: project3,
      technologies: ['FastAPI', 'Scikit-learn', 'Docker', 'AWS'],
      category: 'ml',
      features: ['ML Model', 'Scalable', 'Documentation'],
      demo: '#',
      code: '#',
      stats: { views: 650, likes: 28 }
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Code className="w-4 h-4" /> },
    { id: 'dataviz', label: 'Data Viz', icon: <Eye className="w-4 h-4" /> },
    { id: 'ml', label: 'Machine Learning', icon: <Code className="w-4 h-4" /> }
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
            href="#" 
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