"use client";

import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const scriptId = "elfsight-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="relative z-10 py-16 bg-slate-50 border-t border-b border-slate-100 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* En-tête */}
        <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full">
          Avis Clients Certifiés
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-10 tracking-tight">
          Découvrez les retours d'expérience de nos clients
        </h2>

        {/* CONTENEUR PARENT */}
        <div className="relative w-full bg-white rounded-2xl p-4 shadow-sm border border-slate-200/60 overflow-hidden pb-6">
          
          {/* CONTENEUR DU WIDGET */}
          <div className="relative z-10">
            <div
              className="elfsight-app-110013b9-5b7c-40dd-bdc7-66f19abadb94 w-full"
              data-elfsight-app-lazy
            ></div>
          </div>

          {/* 
            LE RECTANGLE BLANC BOUCLIER ULTRA-PRIORITAIRE :
            - z-[9999] : Écrase n'importe quel z-index injecté par Elfsight.
            - h-12 : On remonte à 48px pour être certain de couvrir tout le bloc du logo.
            - !bg-white : Le point d'exclamation (!) force la couleur blanche (important).
          */}
          <div className="absolute bottom-0 left-0 right-0 h-14 !bg-white rounded-b-2xl z-[9999] pointer-events-auto cursor-default" />
          
        </div>

      </div>
    </section>
  );
}