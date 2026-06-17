import { useState, useEffect } from 'react';

export const useServices = () => {
  const [services] = useState([
    {
      id: 'soulagement-dos',
      title: 'Soulagement Express du Dos',
      shortDescription: 'Massage ciblé de 30 minutes pour soulager les tensions du dos',
      description: 'Un massage express spécialement conçu pour cibler les zones de tension dans le dos. Parfait pour ceux qui ont peu de temps mais besoin d\'un soulagement immédiat.',
      image: 'https://images.unsplash.com/photo-1696841212541-449ca29397cc',
      price: 'CA$45.00',
      duration: '30 minutes',
      benefits: [
        'Soulagement rapide des tensions musculaires',
        'Amélioration de la posture',
        'Réduction du stress',
        'Augmentation de la mobilité'
      ],
      category: 'massage'
    },
    {
      id: 'pose-ongles',
      title: 'Pose d\'Ongles',
      shortDescription: 'Pose professionnelle d\'ongles en poudre et résine',
      description: 'Service complet de pose d\'ongles avec poudre et résine pour des ongles magnifiques et durables. Inclut la préparation, la pose et la finition.',
      image: 'https://images.unsplash.com/photo-1700760933910-d3c03aa18b65',
      price: 'CA$65.00',
      duration: '90 minutes',
      benefits: [
        'Ongles résistants et durables',
        'Finition professionnelle',
        'Large choix de couleurs',
        'Tenue jusqu\'à 3 semaines'
      ],
      category: 'ongles'
    },
    {
      id: 'massage-suedois',
      title: 'Massage Suédois',
      shortDescription: 'Massage relaxant complet du corps pour une détente profonde',
      description: 'Le massage suédois classique utilise des mouvements longs et fluides pour détendre les muscles et améliorer la circulation. Idéal pour la relaxation générale.',
      image: 'https://images.unsplash.com/photo-1621554012422-237bc0b03ed3',
      price: 'CA$85.00',
      duration: '60 minutes',
      benefits: [
        'Relaxation profonde du corps entier',
        'Amélioration de la circulation sanguine',
        'Réduction du stress et de l\'anxiété',
        'Meilleure qualité de sommeil'
      ],
      category: 'massage'
    },
    {
      id: 'massage-profond',
      title: 'Massage Profond - Thérapeutique',
      shortDescription: 'Massage thérapeutique intense pour les douleurs chroniques',
      description: 'Un massage en profondeur qui cible les couches musculaires profondes pour soulager les douleurs chroniques et les tensions persistantes.',
      image: 'https://images.unsplash.com/photo-1656016977161-1ebf7607f295',
      price: 'CA$95.00',
      duration: '75 minutes',
      benefits: [
        'Soulagement des douleurs chroniques',
        'Libération des tensions profondes',
        'Amélioration de la mobilité articulaire',
        'Récupération musculaire accélérée'
      ],
      category: 'massage'
    },
    {
      id: 'exfoliation-dos',
      title: 'Exfoliation Du Dos',
      shortDescription: 'Traitement complet pour une peau du dos éclatante',
      description: 'Un soin complet du dos incluant exfoliation, extraction et masque pour une peau lisse et éclatante. Parfait pour les problèmes d\'acné dorsale.',
      image: 'https://images.unsplash.com/photo-1664958884838-705b1518406f',
      price: 'CA$75.00',
      duration: '60 minutes',
      benefits: [
        'Élimination des cellules mortes',
        'Réduction de l\'acné dorsale',
        'Peau plus lisse et éclatante',
        'Hydratation en profondeur'
      ],
      category: 'soin'
    },
    {
      id: 'soin-pieds',
      title: 'Soin des Pieds',
      shortDescription: 'Pédicure complète avec bain de paraffine',
      description: 'Soin complet des pieds incluant trempage, exfoliation, soin des cuticules, massage et bain de paraffine pour des pieds doux et soignés.',
      image: 'https://images.unsplash.com/photo-1630835425197-50feeba99ecd',
      price: 'CA$55.00',
      duration: '60 minutes',
      benefits: [
        'Pieds doux et hydratés',
        'Élimination des callosités',
        'Ongles soignés et polis',
        'Relaxation profonde'
      ],
      category: 'soin'
    },
    {
      id: 'manucure-personnalisee',
      title: 'Manucure Personnalisée',
      shortDescription: 'Manucure sur mesure adaptée à vos besoins',
      description: 'Une manucure complète personnalisée selon vos préférences, incluant soin des cuticules, limage, polissage et application de vernis.',
      image: 'https://images.unsplash.com/photo-1700760933910-d3c03aa18b65',
      price: 'CA$40.00',
      duration: '45 minutes',
      benefits: [
        'Ongles parfaitement soignés',
        'Cuticules traitées',
        'Finition impeccable',
        'Choix de vernis personnalisé'
      ],
      category: 'ongles'
    },
    {
      id: 'vernis-semi-permanent',
      title: 'Vernis Semi-Permanent',
      shortDescription: 'Application de vernis longue durée',
      description: 'Application professionnelle de vernis semi-permanent pour une tenue parfaite jusqu\'à 3 semaines. Séchage sous lampe UV.',
      image: 'https://images.unsplash.com/photo-1700760933910-d3c03aa18b65',
      price: 'CA$50.00',
      duration: '60 minutes',
      benefits: [
        'Tenue jusqu\'à 3 semaines',
        'Brillance durable',
        'Séchage instantané',
        'Large palette de couleurs'
      ],
      category: 'ongles'
    }
  ]);

  return { services };
};