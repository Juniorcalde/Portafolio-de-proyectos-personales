import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Quote,
  TrendingUp,
  Users,
  Clock,
  Star
} from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    improvement: string;
    icon: React.ReactNode;
  }[];
  testimonial: {
    text: string;
    author: string;
    position: string;
    avatar?: string;
  };
  image: string;
  tags: string[];
}

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  avatar?: string;
}

const PortfolioSection: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Automatización de Atención al Cliente",
      company: "TechCorp Solutions",
      industry: "Tecnología",
      challenge: "Altos volúmenes de consultas repetitivas saturaban al equipo de soporte, generando demoras de hasta 48 horas en respuestas.",
      solution: "Implementamos un chatbot inteligente con NLP avanzado que maneja el 80% de consultas automáticamente, escalando casos complejos a agentes humanos.",
      results: [
        {
          metric: "Tiempo de Respuesta",
          improvement: "95% reducción",
          icon: <Clock className="w-5 h-5" />
        },
        {
          metric: "Satisfacción Cliente",
          improvement: "40% incremento",
          icon: <Star className="w-5 h-5" />
        },
        {
          metric: "Costos Operativos",
          improvement: "60% reducción",
          icon: <TrendingUp className="w-5 h-5" />
        }
      ],
      testimonial: {
        text: "Brain AI Labs transformó completamente nuestra atención al cliente. La implementación fue perfecta y los resultados superaron nuestras expectativas.",
        author: "María González",
        position: "Directora de Operaciones"
      },
      image: "/api/placeholder/600/400",
      tags: ["Chatbots", "NLP", "Automatización"]
    },
    {
      id: 2,
      title: "Análisis Predictivo de Ventas",
      company: "RetailMax",
      industry: "Retail",
      challenge: "Dificultades para predecir demanda resultaban en exceso de inventario y productos agotados, afectando la rentabilidad.",
      solution: "Desarrollamos un sistema de ML que analiza patrones históricos, tendencias de mercado y factores externos para predecir demanda con 95% de precisión.",
      results: [
        {
          metric: "Precisión Pronósticos",
          improvement: "95% exactitud",
          icon: <TrendingUp className="w-5 h-5" />
        },
        {
          metric: "Optimización Inventario",
          improvement: "35% reducción",
          icon: <Clock className="w-5 h-5" />
        },
        {
          metric: "Incremento Ventas",
          improvement: "28% aumento",
          icon: <Star className="w-5 h-5" />
        }
      ],
      testimonial: {
        text: "El sistema predictivo nos ha dado una ventaja competitiva increíble. Ahora tomamos decisiones basadas en datos, no en intuición.",
        author: "Carlos Mendoza",
        position: "Gerente General"
      },
      image: "/api/placeholder/600/400",
      tags: ["Machine Learning", "Análisis Predictivo", "Retail"]
    },
    {
      id: 3,
      title: "Reconocimiento Visual en Manufactura",
      company: "IndustrialTech",
      industry: "Manufactura",
      challenge: "Control de calidad manual lento y propenso a errores humanos, con un 12% de productos defectuosos llegando al mercado.",
      solution: "Implementamos un sistema de Computer Vision que inspecciona productos en tiempo real, detectando defectos con precisión superhuman.",
      results: [
        {
          metric: "Detección Defectos",
          improvement: "99.7% precisión",
          icon: <Star className="w-5 h-5" />
        },
        {
          metric: "Velocidad Inspección",
          improvement: "300% más rápido",
          icon: <Clock className="w-5 h-5" />
        },
        {
          metric: "Costos Calidad",
          improvement: "45% reducción",
          icon: <TrendingUp className="w-5 h-5" />
        }
      ],
      testimonial: {
        text: "La precisión del sistema de visión artificial es impresionante. Ha revolucionado nuestro proceso de control de calidad.",
        author: "Ana Ruiz",
        position: "Directora de Calidad"
      },
      image: "/api/placeholder/600/400",
      tags: ["Computer Vision", "Control de Calidad", "Automatización"]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Brain AI Labs no solo entregó una solución técnica excepcional, sino que se convirtió en un verdadero socio estratégico para nuestra transformación digital.",
      author: "Roberto Silva",
      position: "CTO",
      company: "FinanceFlow",
      rating: 5
    },
    {
      id: 2,
      text: "La expertise técnica y el enfoque en resultados de negocio los distingue. Recomendamos Brain AI Labs sin dudarlo.",
      author: "Laura Martín",
      position: "VP de Innovación",
      company: "HealthTech Solutions",
      rating: 5
    },
    {
      id: 3,
      text: "Implementación rápida, resultados medibles y soporte excepcional. Exactamente lo que necesitábamos para acelerar nuestro crecimiento.",
      author: "Diego Herrera",
      position: "CEO",
      company: "StartupAI",
      rating: 5
    }
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="casos" className="section-padding bg-gradient-to-b from-primary-black to-gray-dark">
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
            <Star className="w-4 h-4 text-accent-purple" />
            <span className="text-sm font-medium text-primary-white">
              Casos de Éxito
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Resultados</span>{' '}
            <span className="text-primary-white">que Hablan</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo hemos transformado empresas con soluciones de IA 
            que generan impacto real y resultados medibles.
          </p>
        </motion.div>

        {/* Case Studies Carousel */}
        <div className="relative mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glassmorphism p-8 rounded-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudies[activeCase].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent-blue/20 text-accent-blue text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-white mb-2">
                    {caseStudies[activeCase].title}
                  </h3>
                  
                  <p className="text-accent-blue font-medium mb-6">
                    {caseStudies[activeCase].company} • {caseStudies[activeCase].industry}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary-white mb-2">Desafío</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {caseStudies[activeCase].challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-primary-white mb-2">Solución</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {caseStudies[activeCase].solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    {caseStudies[activeCase].results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-4 glassmorphism rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="inline-flex p-2 rounded-lg bg-gradient-to-r from-accent-green to-accent-blue mb-2">
                          <div className="text-primary-white">
                            {result.icon}
                          </div>
                        </div>
                        <div className="text-xl font-bold gradient-text">
                          {result.improvement}
                        </div>
                        <div className="text-sm text-gray-300">
                          {result.metric}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image/Visual */}
                <div className="relative">
                  <div className="glassmorphism p-6 rounded-2xl">
                    <div className="aspect-video bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-lg mb-6 flex items-center justify-center">
                      <ExternalLink className="w-12 h-12 text-accent-blue" />
                    </div>
                    
                    {/* Testimonial */}
                    <div className="relative">
                      <Quote className="w-8 h-8 text-accent-purple mb-4" />
                      <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
                        "{caseStudies[activeCase].testimonial.text}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-primary-white">
                          {caseStudies[activeCase].testimonial.author}
                        </div>
                        <div className="text-sm text-accent-blue">
                          {caseStudies[activeCase].testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              onClick={prevCase}
              className="p-3 glassmorphism rounded-full hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-primary-white" />
            </motion.button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeCase ? 'bg-accent-blue' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextCase}
              className="p-3 glassmorphism rounded-full hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-primary-white" />
            </motion.button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism p-6 rounded-2xl group hover:shadow-glow-purple transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-primary-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-accent-purple">
                  {testimonial.position}
                </div>
                <div className="text-sm text-gray-400">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;