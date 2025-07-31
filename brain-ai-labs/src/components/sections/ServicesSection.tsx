import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  MessageSquare, 
  TrendingUp, 
  Camera, 
  FileText,
  ArrowRight,
  Zap
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Algoritmos inteligentes que aprenden y mejoran automáticamente con la experiencia.",
      features: ["Modelos Predictivos", "Clasificación Automática", "Reconocimiento de Patrones", "Optimización Continua"],
      color: "accent-blue"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización IA",
      description: "Procesos empresariales automatizados que optimizan eficiencia y reducen costos operativos.",
      features: ["Flujos de Trabajo", "Procesamiento Automático", "Integración de Sistemas", "Monitoreo 24/7"],
      color: "accent-purple"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chatbots Inteligentes",
      description: "Asistentes virtuales conversacionales que mejoran la experiencia del cliente.",
      features: ["NLP Avanzado", "Multiidioma", "Integración CRM", "Aprendizaje Continuo"],
      color: "accent-green"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Análisis Predictivo",
      description: "Insights basados en datos que anticipan tendencias y optimizan decisiones estratégicas.",
      features: ["Forecasting", "Análisis de Riesgo", "Segmentación", "KPIs Inteligentes"],
      color: "accent-blue"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Sistemas de visión artificial para reconocimiento, inspección y análisis visual automatizado.",
      features: ["Reconocimiento Facial", "Control de Calidad", "Detección de Objetos", "OCR Avanzado"],
      color: "accent-purple"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Procesamiento NLP",
      description: "Análisis y comprensión de texto para extraer insights valiosos de datos no estructurados.",
      features: ["Análisis de Sentimientos", "Extracción de Entidades", "Resumen Automático", "Traducción IA"],
      color: "accent-green"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="servicios" className="section-padding bg-gradient-to-b from-primary-black to-gray-dark">
      <div className="container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 glassmorphism px-4 py-2 rounded-full mb-6"
          >
            <Cpu className="w-4 h-4 text-accent-blue" />
            <span className="text-sm font-medium text-primary-white">
              Nuestros Servicios
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Soluciones de IA</span>{' '}
            <span className="text-primary-white">a medida</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Transformamos tu negocio con tecnologías de inteligencia artificial 
            adaptadas a tus necesidades específicas y objetivos empresariales.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glassmorphism p-8 rounded-2xl h-full transition-all duration-300 hover:shadow-glow border-transparent hover:border-accent-blue/30">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r from-${service.color} to-accent-purple mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-primary-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-primary-white mb-4 group-hover:text-accent-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className="flex items-center space-x-2 text-accent-blue font-medium group-hover:text-accent-purple transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Saber más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-accent-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-8 text-lg">
            ¿No encuentras lo que necesitas? Creamos soluciones personalizadas.
          </p>
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Consulta Personalizada
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;