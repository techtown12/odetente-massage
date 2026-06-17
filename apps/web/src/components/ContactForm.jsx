import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const ContactForm = ({ variant = 'default' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Veuillez entrer une adresse email valide');
      return;
    }

    setIsSubmitting(true);

    try {
      const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      existingSubmissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));

      toast.success('Votre message a été envoyé avec succès');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-medium mb-2 block">
          Nom Complet *
        </Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Votre nom complet"
          required
          className="bg-background text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium mb-2 block">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="votre.email@exemple.com"
          required
          className="bg-background text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div>
        <Label htmlFor="service" className="text-sm font-medium mb-2 block">
          Service souhaité
        </Label>
        <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
          <SelectTrigger className="bg-background text-foreground">
            <SelectValue placeholder="Sélectionnez un service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="massage-suedois">Massage Suédois</SelectItem>
            <SelectItem value="massage-profond">Massage Profond</SelectItem>
            <SelectItem value="soulagement-dos">Soulagement Express du Dos</SelectItem>
            <SelectItem value="exfoliation-dos">Exfoliation Du Dos</SelectItem>
            <SelectItem value="pose-ongles">Pose d'Ongles</SelectItem>
            <SelectItem value="soin-pieds">Soin des Pieds</SelectItem>
            <SelectItem value="manucure">Manucure Personnalisée</SelectItem>
            <SelectItem value="vernis-semi">Vernis Semi-Permanent</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium mb-2 block">
          Votre Message *
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Décrivez vos besoins ou posez vos questions..."
          rows={5}
          required
          className="bg-background text-foreground placeholder:text-muted-foreground resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? 'Envoi en cours...' : variant === 'appointment' ? 'DEMANDER RDV' : 'Envoyer le message'}
      </Button>
    </form>
  );
};

export default ContactForm;