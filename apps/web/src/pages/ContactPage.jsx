import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const businessHours = [
    { day: 'Lundi - Vendredi', hours: '9h00 - 20h00' },
    { day: 'Samedi', hours: '10h00 - 18h00' },
    { day: 'Dimanche', hours: 'Sur rendez-vous' }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Réservez votre rendez-vous | Ô Détente</title>
        <meta name="description" content="Contactez Ô Détente pour réserver votre rendez-vous. Téléphone: (514) 555-0123. Adresse: 123 Rue de la Détente, Montréal. Formulaire de contact disponible." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-20 bg-background botanical-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="mb-4">Contactez-nous</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Réservez votre moment de détente ou posez-nous vos questions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-card rounded-2xl p-8 luxury-shadow">
                  <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Demander un rendez-vous</h2>
                  <ContactForm variant="appointment" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="bg-card rounded-2xl p-8 luxury-shadow">
                  <h3 className="text-xl font-semibold mb-6 text-card-foreground">Informations de contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground mb-1">Téléphone</p>
                        <a href="tel:5145550123" className="text-muted-foreground hover:text-primary transition-colors">
                          (514) 555-0123
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground mb-1">Email</p>
                        <a href="mailto:contact@odetente.ca" className="text-muted-foreground hover:text-primary transition-colors">
                          contact@odetente.ca
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground mb-1">Adresse</p>
                        <p className="text-muted-foreground">
                          123 Rue de la Détente<br />
                          Montréal, QC H2X 1Y5<br />
                          Canada
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 luxury-shadow">
                  <h3 className="text-xl font-semibold mb-6 text-card-foreground flex items-center gap-2">
                    <Clock className="w-6 h-6 text-primary" />
                    Heures d'ouverture
                  </h3>
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center pb-4 border-b border-border last:border-0 last:pb-0">
                        <span className="font-medium text-card-foreground">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-accent text-accent-foreground rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Politique d'annulation</h3>
                  <p className="text-sm leading-relaxed">
                    Nous demandons un préavis de 24 heures pour toute annulation ou modification de rendez-vous. Les annulations tardives peuvent entraîner des frais.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="mb-6">Comment nous trouver</h2>
              <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Situé au cœur de Montréal, Ô Détente est facilement accessible en transport en commun et dispose d'un stationnement à proximité.
              </p>
              <div className="bg-card text-card-foreground rounded-2xl overflow-hidden luxury-shadow-lg max-w-4xl mx-auto">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-muted-foreground" />
                </div>
                <div className="p-6">
                  <p className="text-sm">
                    <span className="font-medium">Métro le plus proche:</span> Station Berri-UQAM (lignes orange, verte et jaune)
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-medium">Stationnement:</span> Stationnement public disponible à 2 minutes à pied
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;