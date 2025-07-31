import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Zap,
  CheckCircle,
  Star
} from 'lucide-react';
import CountingNumber from '../animations/CountingNumber';

interface Stat {
  number: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyUsSection: React.FC = () => {
  const stats: Stat[] = [
    {
      number: 150,
      suffix: '+',
      label: 'Proyectos de IA Completados',
      icon: <Award className="w-6 h-6" />,
      color: 'accent-blue'
    },
    {
      number: 95,
      suffix: '%',
      label: 'Tasa de Satisfacción',
      icon: <Star className="w-6 h-6" />,
      color: 'accent-green'
    },
    {
      number: 80,
      suffix: '+',
      label: 'Clientes Satisfechos',
      icon: <Users className="w-6 h-6" />,
      color: 'accent-purple'
    },
    {
      number: 40,
      suffix: '%',
      label: 'Promedio de Mejora ROI',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'accent-blue'
    }
  ];

  const features: Feature[] = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Seguridad Empresarial',
      description: 'Protocolos de seguridad nivel empresarial con encriptación end-to-end y cumplimiento de normativas internacionales.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Entrega Rápida',
      description: 'Metodologías ágiles que garantizan entregas rápidas sin comprometer la calidad del desarrollo.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Tecnología Cutting-Edge',
      description: 'Utilizamos las últimas tecnologías y frameworks de IA para garantizar soluciones innovadoras y eficientes.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Equipo Experto',
      description: 'Científicos de datos, ingenieros de ML y especialistas en IA con más de 10 años de experiencia combinada.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Garantía de Resultados',
      description: 'Comprometidos con el éxito de tu proyecto. Garantizamos resultados medibles y mejoras tangibles.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Soporte 24/7',
      description: 'Monitoreo continuo y soporte técnico especializado para asegurar el funcionamiento óptimo de tus soluciones.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-dark to-primary-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 border border-accent-blue rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-accent-purple rounded-lg rotate-45 animate-float"></div>
      </div>

      <div className="container-padding relative">
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
            <TrendingUp className="w-4 h-4 text-accent-green" />
            <span className="text-sm font-medium text-primary-white">
              Por qué elegirnos
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-primary-white">Líderes en</span>{' '}
            <span className="gradient-text">Innovación IA</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Nuestra experiencia, metodología probada y compromiso con la excelencia 
            nos convierten en el socio ideal para tu transformación digital.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glassmorphism p-6 rounded-2xl text-center group hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r from-${stat.color} to-accent-purple mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-primary-white">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                <CountingNumber 
                  end={stat.number} 
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              
              <p className="text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="glassmorphism p-8 rounded-2xl h-full transition-all duration-300 hover:shadow-glow-green border-transparent hover:border-accent-green/30">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-accent-green to-accent-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-primary-white mb-4 group-hover:text-accent-green transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-green/5 to-accent-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
          <div className="glassmorphism p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-white mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Únete a las empresas líderes que ya están aprovechando el poder de la Inteligencia Artificial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Comenzar Ahora
              </motion.button>
              <motion.button
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;