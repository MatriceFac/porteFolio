import { useState } from 'react';
import Title from './Title';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormStatus('sending');
    
    try {
      // Simulation d'envoi - À remplacer par votre vrai API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Ici vous feriez un vrai appel API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // if (!response.ok) throw new Error('Erreur réseau');
      
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(null), 5000);
      
    } catch (err) {
      // err est utilisé ici pour le logging
      console.error('Erreur lors de l\'envoi:', err);
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const contactInfo = [
    { 
      icon: <Mail />, 
      label: 'Email', 
      value: 'MatriceFac@gmail.com', 
      href: 'mailto:MatriceFac@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    { 
      icon: <Phone />, 
      label: 'Téléphone', 
      value: '+237 677-88-85-61', 
      href: 'tel:+237677888561',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: <MapPin />, 
      label: 'Localisation', 
      value: 'Yaoundé, Cameroun', 
      href: 'https://maps.google.com/?q=Yaoundé,Cameroun',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="container mx-auto px-5 md:px-[10%]">
      <Title>Contactez-moi</Title>

      {/* Messages de statut */}
      {formStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-3 animate-fade-in">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm">Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</span>
        </div>
      )}

      {formStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-3 animate-fade-in">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <span className="text-sm">Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.</span>
        </div>
      )}

      {formStatus === 'sending' && (
        <div className="mb-6 p-4 bg-blue-500/20 border border-blue-500 rounded-lg flex items-center gap-3 animate-fade-in">
          <div className="loading loading-spinner loading-sm text-blue-500"></div>
          <span className="text-sm">Envoi en cours...</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Informations de contact */}
        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target={info.label === 'Localisation' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-base-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} p-3 text-white group-hover:scale-110 transition-transform`}>
                {info.icon}
              </div>
              <div>
                <p className="text-sm text-base-content/60">{info.label}</p>
                <p className="font-medium group-hover:text-accent transition-colors">{info.value}</p>
              </div>
            </a>
          ))}

          <div className="p-6 bg-base-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-3">Disponibilité</h3>
            <p className="text-base-content/70 mb-4">
              Actuellement disponible pour de nouvelles missions et opportunités professionnelles.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Disponible immédiatement</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-base-content/60">Temps de réponse moyen</span>
                <span className="font-medium">&lt; 24h</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-base-300">
              <p className="text-xs text-base-content/40">
                Ou envoyez-moi un email directement à{' '}
                <a href="mailto:MatriceFac@gmail.com" className="text-accent hover:underline">
                  MatriceFac@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="bg-base-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Envoyez-moi un message</h3>
          
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Nom complet <span className="text-accent">*</span></span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`input input-bordered w-full focus:input-accent transition-all ${
                errors.name ? 'input-error' : ''
              }`}
              disabled={formStatus === 'sending'}
            />
            {errors.name && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.name}</span>
              </label>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email <span className="text-accent">*</span></span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`input input-bordered w-full focus:input-accent transition-all ${
                errors.email ? 'input-error' : ''
              }`}
              disabled={formStatus === 'sending'}
            />
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.email}</span>
              </label>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Sujet (optionnel)</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Sujet de votre message"
              className="input input-bordered w-full focus:input-accent transition-all"
              disabled={formStatus === 'sending'}
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Message <span className="text-accent">*</span></span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message..."
              className={`textarea textarea-bordered h-32 focus:textarea-accent transition-all ${
                errors.message ? 'textarea-error' : ''
              }`}
              disabled={formStatus === 'sending'}
            ></textarea>
            {errors.message && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.message}</span>
              </label>
            )}
            <label className="label">
              <span className="label-text-alt text-base-content/40">
                {formData.message.length}/500 caractères
              </span>
            </label>
          </div>

          <button 
            type="submit" 
            className="btn btn-accent w-full group relative overflow-hidden"
            disabled={formStatus === 'sending'}
          >
            {formStatus === 'sending' ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Envoi en cours...
              </>
            ) : (
              <>
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                Envoyer le message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-xs text-center text-base-content/40 mt-4">
            En envoyant ce formulaire, vous acceptez que vos données soient traitées pour vous répondre.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;