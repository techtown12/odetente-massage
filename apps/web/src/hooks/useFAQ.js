import { useState } from 'react';

export const useFAQ = () => {
  const [faqs] = useState([
    {
      id: 1,
      question: 'Quelle est la particularité d\'Ô Détente?',
      answer: 'Ô Détente se distingue par son approche personnalisée et son ambiance luxueuse. Avec 14 ans d\'expérience, Äbir El Idrissi offre des soins sur mesure dans un environnement apaisant inspiré de la nature. Chaque traitement est adapté à vos besoins spécifiques pour garantir une expérience de détente optimale.'
    },
    {
      id: 2,
      question: 'Comment puis-je prendre rendez-vous?',
      answer: 'Vous pouvez prendre rendez-vous de trois façons: en appelant directement au numéro affiché sur notre site, en remplissant le formulaire de contact sur la page Contact, ou en nous envoyant un message via nos réseaux sociaux. Nous vous confirmerons votre rendez-vous dans les 24 heures.'
    },
    {
      id: 3,
      question: 'Quels sont les modes de paiement acceptés?',
      answer: 'Nous acceptons les paiements en espèces, par carte de débit et par carte de crédit (Visa, Mastercard). Le paiement est dû à la fin de votre séance. Pour les forfaits et les cartes-cadeaux, le paiement peut être effectué à l\'avance.'
    },
    {
      id: 4,
      question: 'Quel massage choisir entre Suédois et Profond?',
      answer: 'Le massage suédois est idéal pour la relaxation générale et la réduction du stress, avec des mouvements doux et fluides. Le massage profond (thérapeutique) cible les tensions musculaires chroniques et les douleurs spécifiques avec une pression plus intense. Si vous hésitez, Äbir vous conseillera le traitement le plus adapté lors de votre consultation.'
    },
    {
      id: 5,
      question: 'Est-ce que les reçus pour assurance sont disponibles?',
      answer: 'Oui, nous fournissons des reçus détaillés pour tous nos services de massothérapie. Ces reçus peuvent être soumis à votre compagnie d\'assurance pour remboursement, selon votre couverture. Assurez-vous de vérifier votre police d\'assurance pour connaître les détails de votre couverture.'
    },
    {
      id: 6,
      question: 'Que dois-je apporter pour ma séance de massage?',
      answer: 'Vous n\'avez rien à apporter! Nous fournissons tout le nécessaire: draps propres, serviettes, huiles de massage de qualité supérieure. Nous vous recommandons simplement d\'arriver 5-10 minutes avant votre rendez-vous pour vous détendre et de porter des vêtements confortables.'
    },
    {
      id: 7,
      question: 'Quelle est la différence entre Poudre & Résine et vernis Semi-Permanent?',
      answer: 'La pose d\'ongles en poudre et résine crée une extension durable et résistante qui peut durer 3-4 semaines. Le vernis semi-permanent est appliqué sur vos ongles naturels et tient environ 2-3 semaines. La poudre et résine offre plus de solidité et permet de créer des formes personnalisées, tandis que le semi-permanent est plus rapide et conserve l\'aspect naturel de vos ongles.'
    },
    {
      id: 8,
      question: 'Combien dure la Pose d\'Ongles Poudre & Résine?',
      answer: 'La pose d\'ongles en poudre et résine dure généralement entre 3 et 4 semaines, selon la croissance de vos ongles naturels et vos activités quotidiennes. Pour maintenir une apparence impeccable, nous recommandons un remplissage toutes les 2-3 semaines.'
    },
    {
      id: 9,
      question: 'Le bain de paraffine est-il adapté aux hommes?',
      answer: 'Absolument! Le bain de paraffine est bénéfique pour tous, hommes et femmes. Il hydrate intensément la peau, soulage les douleurs articulaires et améliore la circulation. De nombreux hommes apprécient ce traitement pour ses bienfaits thérapeutiques, particulièrement après des activités sportives ou pour soulager l\'arthrite.'
    },
    {
      id: 10,
      question: 'D\'autres questions?',
      answer: 'Si vous avez d\'autres questions ou des besoins spécifiques, n\'hésitez pas à nous contacter directement par téléphone ou via notre formulaire de contact. Äbir se fera un plaisir de répondre à toutes vos interrogations et de vous conseiller sur les meilleurs traitements pour vous.'
    }
  ]);

  return { faqs };
};