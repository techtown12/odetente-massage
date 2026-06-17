import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import { useTestimonials } from '@/hooks/useTestimonials.js';

const AboutPage = () => {
  const { testimonials } = useTestimonials();

  const credentials = [
    {
      icon: Award,
      title: 'Certification professionnelle',
      description: 'Diplômée en massothérapie et esthétique avec formation continue'
    },
    {
      icon: Heart,
      title: 'Approche holistique',
      description: 'Soins personnalisés adaptés à vos besoins spécifiques'
    },
    {
      icon: Users,
      title: '500+ clients satisfaits',
      description: 'Une communauté fidèle qui témoigne de la qualité des soins'
    },
    {
      icon: Sparkles,
      title: '14 ans d\'expérience',
      description: 'Une expertise reconnue dans le domaine du bien-être'
    }
  ];

  return (
    <>
      <Helmet>
        <title>À Propos - Äbir El Idrissi | Ô Détente</title>
        <meta name="description" content="Découvrez Äbir El Idrissi, massothérapeute certifiée avec 14 ans d'expérience. Une approche personnalisée et holistique pour votre bien-être à Montréal." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-20 bg-background botanical-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden luxury-shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1656016977161-1ebf7607f295"
                    alt="Äbir El Idrissi, fondatrice d'Ô Détente"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Fondatrice & Thérapeute
                  </span>
                </div>
                <h1 className="mb-6">Äbir El Idrissi</h1>
                <p className="text-lg leading-relaxed mb-6 text-foreground">
                  Passionnée par le bien-être depuis plus de 14 ans, j'ai créé Ô Détente pour offrir un havre de paix où chacun peut se ressourcer et prendre soin de soi.
                </p>
                <p className="leading-relaxed mb-6 text-muted-foreground">
                  Ma philosophie repose sur une approche holistique du bien-être. Je crois fermement que chaque personne est unique et mérite des soins personnalisés qui répondent à ses besoins spécifiques.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Formée aux techniques de massage suédois, thérapeutique et aux soins esthétiques, je continue à me perfectionner pour vous offrir les meilleurs traitements. Mon objectif est simple: vous aider à retrouver équilibre, détente et confiance en vous.
                </p>
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
              className="text-center mb-12"
            >
              <h2 className="mb-4">Expertise et qualifications</h2>
              <p className="max-w-2xl mx-auto">
                Une formation continue pour vous garantir les meilleurs soins
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <credential.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{credential.title}</h3>
                  <p className="text-sm leading-relaxed">
                    {credential.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Philosophie de soins</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Une approche centrée sur votre bien-être global
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-xl p-8 luxury-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Personnalisation</h3>
                <p className="text-card-foreground leading-relaxed">
                  Chaque soin commence par une consultation pour comprendre vos besoins, vos préférences et vos objectifs. Je personnalise ensuite le traitement pour vous offrir une expérience unique.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-xl p-8 luxury-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Qualité</h3>
                <p className="text-card-foreground leading-relaxed">
                  J'utilise uniquement des produits de qualité supérieure, soigneusement sélectionnés pour leur efficacité et leur respect de votre peau. Votre confort et votre sécurité sont ma priorité.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-xl p-8 luxury-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Écoute</h3>
                <p className="text-card-foreground leading-relaxed">
                  Je prends le temps d'écouter vos préoccupations et de répondre à vos questions. Votre feedback est précieux et me permet d'ajuster les soins pour garantir votre satisfaction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-xl p-8 luxury-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Ambiance</h3>
                <p className="text-card-foreground leading-relaxed">
                  Ô Détente est conçu comme un sanctuaire de paix. Chaque détail, de la musique apaisante aux huiles essentielles, est pensé pour créer une atmosphère de détente totale.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent text-accent-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Témoignages clients</h2>
              <p className="max-w-2xl mx-auto">
                Découvrez ce que nos clients disent de leur expérience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 6).map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;