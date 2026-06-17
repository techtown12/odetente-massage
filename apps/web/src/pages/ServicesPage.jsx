import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useServices } from '@/hooks/useServices.js';

const ServicesPage = () => {
  const { services } = useServices();

  return (
    <>
      <Helmet>
        <title>Nos Services | Ô Détente</title>
        <meta name="description" content="Découvrez notre carte de soins et massages. Une expérience sur-mesure pour votre bien-être." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1627762397558-1f7f84d6dcee"
              alt="Détail spa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="relative z-10 text-center px-6 mt-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-white drop-shadow-sm"
            >
              Nos Services
            </motion.h1>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <Link to={`/services/${service.id}`} className="block">
                  <div className="aspect-[4/5] overflow-hidden mb-8 rounded-sm bg-muted">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center px-4">
                    <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-4 line-clamp-2 font-light">
                      {service.shortDescription}
                    </p>
                    <p className="text-gold tracking-wide">{service.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;