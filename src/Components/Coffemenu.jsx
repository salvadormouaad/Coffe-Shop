import React from 'react'
import Coffe from '../List'
export default function Coffemenu() {
  return (
   
    // Conteneur principal
    <div className="p-4 min-h-screen  lg:mt-10 md:mt-10 font-sans">
      <h1 className="font-Lonely-Coffee text-4xl font-extrabold  text-center text-[#2D1801] tracking-wide">
        Explore Our Coffee Menu
      </h1>

      {/* Conteneur des cartes (Grille responsive corrigée) */}
      {/* Les classes lg:w-350, lg:gap-40, lg:flex-wrap, lg:p-30 sont remplacées par une grille standard */}
      <div className='grid grid-cols-1 lg:mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto p-4'>
        
        {Coffe.map((cofee) => { 
          return (
            // CARTE INDIVIDUELLE
            <div 
                key={cofee.name} 
                // Correction: h-70 et rounded-4xl remplacés par des classes standard pour le style
                className='w-full h-[300px] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-300 rounded-xl overflow-hidden relative group'
                style={{ 
                    backgroundImage: `url(${cofee.imageUrl})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center' 
                }}
            >
                {/* Overlay semi-transparent pour le filtre visuel */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>

                {/* Conteneur du contenu (Texte et Bouton) */}
                <div 
                    // Correction: lg:w-70, lg:p-1, rounded-4xl, lg:h-100, lg:gap-2 remplacés par des classes standard
                    className='relative flex flex-col z-10 w-full h-full justify-end items-center text-center p-4 space-y-3'
                >
                    {/* Conteneur de fond pour le texte (bg-white/30) */}
                    <div className='w-full p-3 rounded-lg bg-white/30 backdrop-blur-sm shadow-inner text-[#2D1801]'>
                        
                        {/* Nom du Café */}
                        <p className='font-bold text-2xl mb-1 text-[#2D1801]' style={{ fontFamily: 'Lonely-Coffee' }}>
                          {cofee.name}
                        </p>
                        
                        {/* Description */}
                        <p className='text-sm text-black italic'>
                          {cofee.description}
                        </p>

                    </div>
                    
                    {/* Bouton stylisé */}
                    {/* Correction: p-0.5 remplacé par des padding cohérents (py-2 px-6) */}
                    <button className='bg-[#2D1801] hover:bg-amber-900 text-white font-bold py-2 px-6 rounded-full transition duration-200 uppercase shadow-lg mb-4'>
                        Shop Now
                    </button>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}