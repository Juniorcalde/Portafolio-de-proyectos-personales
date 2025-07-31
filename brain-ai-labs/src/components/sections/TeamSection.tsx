import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Award,
  Brain,
  Users,
  BookOpen,
  Briefcase
} from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface Certification {
  name: string;
  issuer: string;
  icon: React.ReactNode;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Alexandra Chen",
      position: "CEO & Fundadora",
      bio: "Doctora en Computer Science por MIT con 15+ años de experiencia en IA empresarial. Ex-directora de AI Research en Google.",
      expertise: ["Machine Learning", "Deep Learning", "Estrategia de IA", "Liderazgo Técnico"],
      achievements: ["PhD MIT", "40+ papers publicados", "Ex-Google AI Research", "TEDx Speaker"],
      avatar: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      position: "CTO & Co-fundador",
      bio: "Ingeniero de Software Senior con especialización en arquitecturas escalables y MLOps. Anteriormente en Meta y Amazon.",
      expertise: ["MLOps", "Cloud Architecture", "Computer Vision", "NLP"],
      achievements: ["MS Stanford", "Ex-Meta AI", "AWS Certified", "Kubernetes Expert"],
      avatar: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Dr. Sarah Kim",
      position: "Head of Data Science",
      bio: "Científica de datos con PhD en Estadística. Especialista en análisis predictivo y modelos de machine learning complejos.",
      expertise: ["Data Science", "Statistical Modeling", "Predictive Analytics", "R&D"],
      achievements: ["PhD Statistics", "Kaggle Grandmaster", "50+ proyectos", "Data Science Author"],
      avatar: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "James Thompson",
      position: "Lead AI Engineer",
      bio: "Ingeniero especializado en implementación de soluciones de IA a gran escala. Experto en optimización de modelos y performance.",
      expertise: ["Model Optimization", "TensorFlow", "PyTorch", "Production AI"],
      achievements: ["MS Computer Science", "TensorFlow Certified", "AI Patents", "Open Source Contributor"],
      avatar: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  const certifications: Certification[] = [
    {
      name: "Google Cloud AI/ML",
      issuer: "Google Cloud",
      icon: <Award className="w-8 h-8" />
    },
    {
      name: "AWS Machine Learning",
      issuer: "Amazon Web Services",
      icon: <Brain className="w-8 h-8" />
    },
    {
      name: "Microsoft Azure AI",
      issuer: "Microsoft",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      name: "TensorFlow Developer",
      issuer: "TensorFlow",
      icon: <Briefcase className="w-8 h-8" />
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="nosotros" className="section-padding bg-gradient-to-b from-gray-dark to-primary-black">
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
            <Users className="w-4 h-4 text-accent-green" />
            <span className="text-sm font-medium text-primary-white">
              Nuestro Equipo
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-primary-white">Expertos en</span>{' '}
            <span className="gradient-text">Inteligencia Artificial</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Un equipo multidisciplinario de científicos de datos, ingenieros de ML 
            y especialistas en IA con experiencia en las mejores empresas tecnológicas del mundo.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -10 }}
            >
              <div className="glassmorphism p-6 rounded-2xl h-full transition-all duration-300 hover:shadow-glow-green border-transparent hover:border-accent-green/30">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Users className="w-16 h-16 text-accent-blue" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-green/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-bold text-primary-white mb-2 group-hover:text-accent-green transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-accent-blue font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary-white mb-3">Especialidades</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-accent-blue/20 text-accent-blue text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary-white mb-3">Logros</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-center text-xs text-gray-400">
                        <div className="w-1 h-1 bg-accent-green rounded-full mr-2"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <motion.a
                      href={member.social.linkedin}
                      className="p-2 glassmorphism rounded-lg hover:shadow-glow-blue transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="w-4 h-4 text-accent-blue" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      href={member.social.twitter}
                      className="p-2 glassmorphism rounded-lg hover:shadow-glow-blue transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="w-4 h-4 text-accent-blue" />
                    </motion.a>
                  )}
                  {member.social.github && (
                    <motion.a
                      href={member.social.github}
                      className="p-2 glassmorphism rounded-lg hover:shadow-glow-blue transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-4 h-4 text-accent-blue" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-white mb-8">
            Certificaciones y Reconocimientos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphism p-6 rounded-xl group hover:shadow-glow-purple transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-white">
                    {cert.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-primary-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-400">
                  {cert.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glassmorphism p-8 rounded-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-white mb-4">
              Nuestra Misión
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Democratizar el acceso a la inteligencia artificial empresarial, 
              creando soluciones que no solo automaticen procesos, sino que potencien 
              la creatividad humana y generen valor sostenible para nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple mb-4">
                <Brain className="w-6 h-6 text-primary-white" />
              </div>
              <h4 className="font-semibold text-primary-white mb-2">Innovación</h4>
              <p className="text-sm text-gray-400">
                Investigación constante en las últimas tecnologías de IA
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-accent-green to-accent-blue mb-4">
                <Users className="w-6 h-6 text-primary-white" />
              </div>
              <h4 className="font-semibold text-primary-white mb-2">Colaboración</h4>
              <p className="text-sm text-gray-400">
                Trabajo en equipo con nuestros clientes como socios estratégicos
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-accent-purple to-accent-green mb-4">
                <Award className="w-6 h-6 text-primary-white" />
              </div>
              <h4 className="font-semibold text-primary-white mb-2">Excelencia</h4>
              <p className="text-sm text-gray-400">
                Compromiso con la calidad y resultados medibles en cada proyecto
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;