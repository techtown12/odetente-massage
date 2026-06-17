import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProductsList from '@/components/ProductsList.jsx';

const ShopPage = () => {
  return (
    <>
      <Helmet>
        <title>Boutique | Ô Détente</title>
        <meta name="description" content="Découvrez notre sélection exclusive de produits de bien-être pour prolonger l'expérience spa chez vous." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1623683945420-f0f890b59b6b"
                alt="Produits de beauté luxueux"
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
                Notre Boutique
              </motion.h1>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
                Prolongez les bienfaits de nos soins à la maison avec notre sélection de produits d'exception.
              </p>
            </motion.div>

            <ProductsList />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ShopPage;