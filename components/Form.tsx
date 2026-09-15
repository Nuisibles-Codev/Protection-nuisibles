"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Loader2, CheckCircle2, Send, Phone, Mail, User, MapPin, MessageSquare, Tag } from "lucide-react";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  city: string;
  subject: string;
  message: string;
}

export default function Form() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSended, setIsSended] = useState<boolean>(false);
 
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
      });

      if (response.ok) {
          reset();
          setIsSended(true);
      } else {
          alert("Le formulaire n'a pas pu être envoyé.");
      }
    } catch {
      alert("Erreur réseau. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto mt-6 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
      {isSended ? (
        <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-8 text-center space-y-3 animate-fade-in"> 
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="text-xl font-bold text-emerald-950">Demande envoyée avec succès !</h3>
          <p className="text-emerald-700 text-sm sm:text-base max-w-md mx-auto">
            Merci ! Notre équipe étudie votre demande et vous recontacte dans les plus brefs délais pour votre devis.
          </p>
          <button
            onClick={() => setIsSended(false)}
            className="mt-4 text-xs font-bold text-emerald-800 underline hover:text-emerald-950 transition-colors"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          
          {/* NOM & TÉLÉPHONE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                Nom complet *
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input 
                  {...register('name', { required: "Ce champ est obligatoire" })} 
                  className={`w-full bg-slate-50/80 border ${errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200'} rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all`}
                  placeholder="ex: Jean Dupont" 
                />
              </div>
              {errors.name && <span className="text-xs text-brand-red font-medium ml-1">{errors.name.message}</span>}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                Téléphone *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input 
                  {...register('phone', { required: "Ce champ est obligatoire" })} 
                  type="tel"
                  className={`w-full bg-slate-50/80 border ${errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200'} rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all`}
                  placeholder="06 00 00 00 00" 
                />
              </div>
              {errors.phone && <span className="text-xs text-brand-red font-medium ml-1">{errors.phone.message}</span>}
            </div>
          </div>

          {/* EMAIL & VILLE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                Adresse Email *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input 
                  {...register('email', { required: "Ce champ est obligatoire" })} 
                  type="email"
                  className={`w-full bg-slate-50/80 border ${errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200'} rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all`}
                  placeholder="jean.dupont@email.com" 
                />
              </div>
              {errors.email && <span className="text-xs text-brand-red font-medium ml-1">{errors.email.message}</span>}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                Ville / Commune *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input 
                  {...register('city', { required: "Ce champ est obligatoire" })} 
                  className={`w-full bg-slate-50/80 border ${errors.city ? 'border-red-400 bg-red-50/20' : 'border-slate-200'} rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all`}
                  placeholder="ex: Perpignan (66000)" 
                />
              </div>
              {errors.city && <span className="text-xs text-brand-red font-medium ml-1">{errors.city.message}</span>}
            </div>
          </div>

          {/* SUJET */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
              Type de prestation / Sujet *
            </label>
            <div className="relative">
              <Tag className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input 
                {...register('subject', { required: "Ce champ est obligatoire" })} 
                className={`w-full bg-slate-50/80 border ${errors.subject ? 'border-red-400 bg-red-50/20' : 'border-slate-200'} rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all`}
                placeholder="ex: Dératisation, Traitement punaises de lit..." 
              />
            </div>
            {errors.subject && <span className="text-xs text-brand-red font-medium ml-1">{errors.subject.message}</span>}
          </div>

          {/* MESSAGE */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
              Détails de votre demande *
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 absolute left-3.5 top-4 text-slate-400" />
              <textarea 
                {...register('message', { required: "Ce champ est obligatoire" })} 
                rows={4}
                className={`w-full bg-slate-50/80 border ${errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-200'} rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all`}
                placeholder="Décrivez brièvement le problème (type de nuisibles constatés, surface approximative, urgence...)" 
              />
            </div>
            {errors.message && <span className="text-xs text-brand-red font-medium ml-1">{errors.message.message}</span>}
          </div>

          {/* BOUTON D'ENVOI */}
          <button 
            disabled={isLoading}
            type="submit"
            className="w-full bg-brand-red hover:bg-red-700 active:scale-[0.99] text-white font-black py-4 rounded-xl shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40 transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Demander mon devis gratuit</span>
              </>
            )}
          </button>
        </form>
      )}
    </section>
  );
}