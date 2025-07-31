import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const footerLinks = {
    servicios: [
      { name: 'Machine Learning', href: '#servicios' },
      { name: 'Automatización IA', href: '#servicios' },
      { name: 'Chatbots Inteligentes', href: '#servicios' },
      { name: 'Análisis Predictivo', href: '#servicios' },
      { name: 'Computer Vision', href: '#servicios' },
      { name: 'Procesamiento NLP', href: '#servicios' }
    ],
    empresa: [
      { name: 'Nosotros', href: '#nosotros' },
      { name: 'Casos de Éxito', href: '#casos' },
      { name: 'Metodología', href: '#' },
      { name: 'Carreras', href: '#' },
      { name: 'Blog', href: '#blog' },
      { name: 'Prensa', href: '#' }
    ],
    recursos: [
      { name: 'Documentación', href: '#' },
      { name: 'Whitepapers', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'Calculadora ROI', href: '#' },
      { name: 'Centro de Ayuda', href: '#' },
      { name: 'API Docs', href: '#' }
    ],
    legal: [
      { name: 'Términos de Servicio', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Seguridad', href: '#' },
      { name: 'Compliance', href: '#' }
    ]
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'hola@brainailabs.com',
      href: 'mailto:hola@brainailabs.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Teléfono',
      value: '+34 900 123 456',
      href: 'tel:+34900123456'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Oficina',
      value: 'Madrid, España',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Github className="w-5 h-5" />, href: '#', name: 'GitHub' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' }
  ];

  const certifications = [
    'ISO 27001', 'SOC 2', 'GDPR Compliant', 'AWS Partner'
  ];

  return (
    <footer id="contacto" className="bg-gradient-to-b from-primary-black to-gray-dark-alt border-t border-gray-600/30">
      <div className="container-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple">
                  <Brain className="w-6 h-6 text-primary-white" />
                </div>
                <span className="text-xl font-display font-bold gradient-text">
                  Brain AI Labs
                </span>
              </motion.div>

              <motion.p 
                className="text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Transformamos empresas con soluciones de inteligencia artificial 
                de vanguardia. Especialistas en Machine Learning, automatización 
                y análisis predictivo.
              </motion.p>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-primary-white mb-4">
                  Newsletter
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Mantente al día con las últimas tendencias en IA y nuestras novedades.
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 bg-gray-dark/50 border border-gray-600/30 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:border-accent-blue transition-colors duration-300"
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>¡Suscrito!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Suscribirse</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-primary-white mb-4">
                    Servicios
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.servicios.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.href}
                          className="text-gray-400 hover:text-accent-blue transition-colors duration-300 text-sm"
                          whileHover={{ x: 5 }}
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-primary-white mb-4">
                    Empresa
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.empresa.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.href}
                          className="text-gray-400 hover:text-accent-blue transition-colors duration-300 text-sm"
                          whileHover={{ x: 5 }}
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Resources */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-primary-white mb-4">
                    Recursos
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.recursos.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.href}
                          className="text-gray-400 hover:text-accent-blue transition-colors duration-300 text-sm"
                          whileHover={{ x: 5 }}
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Legal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-primary-white mb-4">
                    Legal
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.href}
                          className="text-gray-400 hover:text-accent-blue transition-colors duration-300 text-sm"
                          whileHover={{ x: 5 }}
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-gray-600/30 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-primary-white mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-accent-blue transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 rounded-lg bg-gray-dark/50 group-hover:bg-accent-blue/20 transition-colors duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:text-right"
            >
              <h3 className="text-xl font-semibold text-primary-white mb-6">
                Síguenos
              </h3>
              
              <div className="flex space-x-4 lg:justify-end mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-3 glassmorphism rounded-lg hover:shadow-glow-blue transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.name}
                  >
                    <div className="text-gray-400 group-hover:text-accent-blue transition-colors duration-300">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="glassmorphism p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold text-primary-white mb-3">
                  ¿Listo para transformar tu negocio?
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Agenda una consulta gratuita y descubre cómo la IA puede impulsar tu empresa.
                </p>
                <motion.button
                  className="btn-primary flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Consulta Gratuita</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-600/30 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Brain AI Labs. Todos los derechos reservados.
            </div>
            
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              {certifications.map((cert, index) => (
                <span key={index} className="px-2 py-1 bg-gray-dark/30 rounded">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;