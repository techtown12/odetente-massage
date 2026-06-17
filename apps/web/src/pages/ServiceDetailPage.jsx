import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useServices } from '@/hooks/useServices.js';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const { services } = useServices();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="mb-6">Service introuvable</h2>
            <Link to="/services" className="text-primary link-underline uppercase tracking-widest text-sm">
              Retour aux services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedServices = services.filter(s => s.id !== id).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Ô Détente`}</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Image */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </section>

        {/* Content */}
        <section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors mb-12 text-sm tracking-widest uppercase">
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h1 className="mb-8 text-4xl md:text-5xl">{service.title}</h1>
              <div className="prose prose-lg prose-p:font-light prose-p:text-foreground/70 prose-p:leading-relaxed max-w-none">
                <p className="text-xl text-foreground/90 mb-8 font-serif italic">
                  {service.shortDescription}
                </p>
                <p>
                  {service.description}
                </p>
                
                <h3 className="text-2xl mt-12 mb-6">Les Bienfaits</h3>
                <ul className="space-y-4 list-none pl-0">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4 text-foreground/70 font-light">
                      <span className="text-gold mt-1.5 text-xs">✦</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="bg-muted p-10 rounded-sm sticky top-32">
                <h3 className="text-2xl mb-6">Détails du Soin</h3>
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center border-b border-border/60 pb-4">
                    <span className="text-foreground/60 font-light">Durée</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/60 pb-4">
                    <span className="text-foreground/60 font-light">Tarif</span>
                    <span className="text-gold text-xl">{service.price}</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-primary text-primary-foreground py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-luxury"
                >
                  Réserver ce soin
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-24 bg-muted px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl mb-12 text-center">Prolongez l'Expérience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {relatedServices.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/services/${related.id}`} className="flex gap-6 items-center">
                    <div className="w-24 h-32 flex-shrink-0 overflow-hidden rounded-sm">
                      <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div>
                      <h4 className="text-xl mb-2 group-hover:text-primary transition-colors">{related.title}</h4>
                      <p className="text-gold text-sm">{related.price}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServiceDetailPage;