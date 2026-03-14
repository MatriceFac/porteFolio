import Title from './Title';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Google',
      role: 'Lead Data Scientist',
      period: '2022 - Présent',
      location: 'Paris, France',
      description: [
        'Développement de modèles de prédiction pour Google Maps',
        'Leadership d\'une équipe de 5 data scientists',
        'Optimisation des algorithmes de recommandation'
      ]
    },
    {
      company: 'Meta',
      role: 'Full Stack Developer',
      period: '2021 - 2022',
      location: 'Londres, UK',
      description: [
        'Création d\'une plateforme interne pour 5000+ utilisateurs',
        'Mise en place d\'une architecture microservices',
        'Optimisation des performances (réduction de 40% du temps de chargement)'
      ]
    },
    {
      company: 'Amazon',
      role: 'Frontend Developer',
      period: '2019 - 2021',
      location: 'Berlin, Allemagne',
      description: [
        'Développement de l\'interface AWS Management Console',
        'Implémentation de tests unitaires',
        'Collaboration avec les équipes UX/UI'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-5 md:px-[10%]">
      <Title>Expérience professionnelle</Title>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="card-body">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent">{exp.company}</h3>
                  <h4 className="text-xl font-semibold">{exp.role}</h4>
                </div>
                <div className="badge badge-accent badge-lg">{exp.period}</div>
              </div>

              <div className="flex items-center gap-4 text-base-content/60 mb-4">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {exp.role}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>
              </div>

              <ul className="list-disc list-inside space-y-2 text-base-content/70">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;