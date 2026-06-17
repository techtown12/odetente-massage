import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FAQAccordion from '@/components/FAQAccordion.jsx';
import { useFAQ } from '@/hooks/useFAQ.js';

const FAQPage = () => {
  const { faqs } = useFAQ();

  return (
    <>
      <Helmet>
        <title>Questions Fréquentes (FAQ) | Ô Détente</title>
        <meta name="description" content="Trouvez les réponses à vos questions sur nos services, tarifs, rendez-vous et modes de paiement. Contactez-nous pour toute question supplémentaire." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1552374240-4141eabcf1a5"
              alt="Espace de détente luxueux et apaisant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-4">Questions Fréquentes</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Trouvez les réponses à vos questions sur nos services et notre fonctionnement
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background botanical-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FAQAccordion faqs={faqs} />
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">Vous avez d'autres questions?</h2>
              <p className="text-lg leading-relaxed mb-8">
                Notre équipe est à votre disposition pour répondre à toutes vos interrogations. N'hésitez pas à nous contacter par téléphone ou via notre formulaire de contact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:5145550123"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] font-medium"
                >
                  Appelez-nous
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-card text-card-foreground rounded-lg hover:bg-card/80 transition-all duration-200 active:scale-[0.98] font-medium"
                >
                  Contactez-nous
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FAQPage;