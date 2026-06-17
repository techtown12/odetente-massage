import { useState } from 'react';

export const useTestimonials = () => {
  const [testimonials] = useState([
    {
      id: 1,
      name: 'Sophie Tremblay',
      rating: 5,
      text: 'Une expérience absolument divine! Le massage suédois m\'a transportée dans un état de relaxation totale. Äbir a des mains magiques et crée une atmosphère si apaisante.',
      service: 'Massage Suédois',
      date: '2026-03-15'
    },
    {
      id: 2,
      name: 'Marie-Claude Gagnon',
      rating: 5,
      text: 'Le soin du dos a transformé ma peau! Après des années de lutte contre l\'acné dorsale, j\'ai enfin trouvé une solution efficace. Merci Äbir pour ton professionnalisme.',
      service: 'Exfoliation Du Dos',
      date: '2026-03-08'
    },
    {
      id: 3,
      name: 'Isabelle Bouchard',
      rating: 5,
      text: 'La pose d\'ongles est impeccable et tient vraiment 3 semaines comme promis. L\'ambiance du spa est tellement relaxante, je me sens choyée à chaque visite.',
      service: 'Pose d\'Ongles',
      date: '2026-02-28'
    },
    {
      id: 4,
      name: 'Nathalie Bergeron',
      rating: 5,
      text: 'Le massage thérapeutique profond a soulagé mes douleurs chroniques au dos. Äbir est très à l\'écoute et adapte la pression selon mes besoins. Je recommande vivement!',
      service: 'Massage Profond',
      date: '2026-02-20'
    },
    {
      id: 5,
      name: 'Caroline Dubois',
      rating: 5,
      text: 'Un havre de paix en plein cœur de la ville. Le soin des pieds avec bain de paraffine est un pur moment de bonheur. Mes pieds n\'ont jamais été aussi doux!',
      service: 'Soin des Pieds',
      date: '2026-02-12'
    },
    {
      id: 6,
      name: 'Véronique Lavoie',
      rating: 5,
      text: 'Äbir est une vraie professionnelle avec 14 ans d\'expérience qui se ressentent dans chaque geste. L\'attention aux détails et la qualité du service sont exceptionnelles.',
      service: 'Manucure Personnalisée',
      date: '2026-01-30'
    }
  ]);

  return { testimonials };
};