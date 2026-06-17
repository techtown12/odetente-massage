import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useCart } from '@/hooks/useCart.jsx';

const SuccessPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <>
      <Helmet>
        <title>Commande Confirmée | Ô Détente</title>
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow flex items-center justify-center py-32 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl w-full text-center"
          >
            <div className="w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center mx-auto mb-10">
              <Check className="w-10 h-10 text-primary stroke-[1.5]" />
            </div>
            
            <h1 className="text-4xl md:text-5xl mb-6">Merci pour votre confiance</h1>
            
            <p className="text-foreground/60 text-lg mb-12 font-light leading-relaxed max-w-lg mx-auto">
              Votre commande a été confirmée avec succès. Un e-mail contenant les détails de votre achat vous a été envoyé.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/shop" 
                className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-luxury"
              >
                Continuer vos achats
              </Link>
              <Link 
                to="/" 
                className="w-full sm:w-auto border border-foreground text-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-luxury"
              >
                Retour à l'accueil
              </Link>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SuccessPage;