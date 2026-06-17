import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useServices } from '@/hooks/useServices.js';
import { useTestimonials } from '@/hooks/useTestimonials.js';

const HomePage = () => {
  const { services } = useServices();
  const { testimonials } = useTestimonials();
  const featuredServices = services.slice(0, 3);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <Helmet>
        <title>Ô Détente | Spa de Luxe & Bien-être</title>
        <meta name="description" content="Découvrez Ô Détente, votre sanctuaire de paix. Massages, soins et bien-être avec une approche holistique et luxueuse." />
      </Helmet>

      <div className="min-h-screen bg-background selection:bg-primary/20">
        <Header />

        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8"
              alt="Ambiance spa luxueuse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40"></div>
          </div>

          <div className="relative z-10 text-center px-6 mt-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.h1 variants={fadeUp} className="text-white mb-6 drop-shadow-sm">
                Ô Détente
              </motion.h1>
              <motion.p variants={fadeUp} className="font-serif text-2xl md:text-3xl text-white/90 mb-12 italic">
                Détente & Bien-être
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link 
                  to="/services" 
                  className="inline-block bg-white text-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-luxury"
                >
                  Découvrir
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="mb-6">L'Art du Soin</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              Une collection de rituels conçus pour harmoniser le corps et l'esprit dans un cadre d'exception.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <Link to={`/services/${service.id}`}>
                  <div className="aspect-[3/4] overflow-hidden mb-8 rounded-sm">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <span className="text-xs tracking-widest uppercase text-primary link-underline">
                      En savoir plus
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] rounded-sm overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1512916958891-fcf61b2160df" 
                  alt="Intérieur relaxant"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-lg"
              >
                <h2 className="mb-8">Une Philosophie de l'Équilibre</h2>
                <div className="space-y-6 text-foreground/70 text-lg font-light leading-relaxed">
                  <p>
                    Chez Ô Détente, nous croyons que le véritable luxe réside dans le temps que l'on s'accorde. Notre approche holistique allie techniques ancestrales et innovations contemporaines.
                  </p>
                  <p>
                    Chaque détail de notre espace a été pensé pour éveiller vos sens et vous inviter au lâcher-prise absolu. Laissez nos experts vous guider vers une sérénité profonde.
                  </p>
                </div>
                <div className="mt-12">
                  <Link 
                    to="/about" 
                    className="inline-block border border-foreground text-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-luxury"
                  >
                    Notre Histoire
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-40 px-6 lg:px-12 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gold text-4xl font-serif leading-none block mb-8">"</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-12 font-light italic text-foreground/90">
              {testimonials[0]?.text || "Une expérience hors du temps. Le soin apporté aux détails et l'atmosphère apaisante font de ce lieu un véritable havre de paix."}
            </h3>
            <p className="text-sm tracking-widest uppercase text-foreground/50">
              — {testimonials[0]?.name || "Sophie L."}
            </p>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;