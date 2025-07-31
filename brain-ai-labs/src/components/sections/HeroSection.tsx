import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import ParticleBackground from '../animations/ParticleBackground';

const HeroSection: React.FC = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-dark via-primary-black to-gray-dark-alt">
        <ParticleBackground />
      </div>
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent-blue rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 border border-accent-purple rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-accent-green rounded-full animate-pulse-glow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center space-x-2 glassmorphism px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent-blue" />
            <span className="text-sm font-medium text-primary-white">
              Líderes en Inteligencia Artificial
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-shadow leading-tight"
          >
            <span className="gradient-text">Transformamos</span>{' '}
            <span className="text-primary-white">tu negocio con</span>{' '}
            <span className="gradient-text">Inteligencia Artificial</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Potenciamos empresas con soluciones de IA de vanguardia. 
            Machine Learning, automatización inteligente y análisis predictivo 
            que impulsan el crecimiento exponencial.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollToSection('#servicios')}
            >
              <span>Descubre nuestros servicios</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollToSection('#casos')}
            >
              <Play className="w-5 h-5" />
              <span>Ver casos de éxito</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          >
            {[
              { number: '100+', label: 'Proyectos Completados' },
              { number: '95%', label: 'Tasa de Éxito' },
              { number: '50+', label: 'Clientes Satisfechos' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center glassmorphism p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-accent-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;