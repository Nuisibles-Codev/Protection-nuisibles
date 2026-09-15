'use client';

import React from 'react';

// Définition du type pour les coordonnées
interface AddressProps {
  name: string;
  phone: string;
  fullAddress: string;
}

export default function Map() {
  const address: AddressProps = {
    name: "Protection Nuisibles",
    phone: "07 57 51 64 14",
    fullAddress: "Pyrénées-Orientales",
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10 items-stretch">
       
       {/* BLOC INFOS */}
       <div className="md:col-span-1 bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm flex flex-col justify-center">
        <h3 className="text-xl font-black text-blue-600 tracking-tight mb-4">
          {address.name}
        </h3>
        
        <div className="space-y-4 text-slate-700">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Zone d'intervention</p>
            <p className="font-semibold text-slate-900">{address.fullAddress}</p>
          </div>
          
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Téléphone</p>
            <a 
              href={`tel:${address.phone.replace(/\s/g, '')}`} 
              className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              {address.phone}
            </a>
          </div>
        </div>
      </div>

      {/* CONTENEUR DE LA CARTE */}
      <div className="md:col-span-2 w-full h-[350px] rounded-xl overflow-hidden shadow-sm border border-slate-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46915.49122963929!2d2.863226134086672!3d42.69910031702662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06e4e80fd88fd%3A0x1c83306520f2dd4f!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1745486342047!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte de zone d'intervention Protection Nuisibles à Perpignan"
        />
      </div>     

    </section>
  );
}