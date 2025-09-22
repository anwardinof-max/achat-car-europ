import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/mock';
import { calculateImportCosts } from '../utils/pricing'; // Importation de la fonction de calcul

const SimulationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = cars.find(c => c.id === Number(id));

  // State for the multi-step form
  const [step, setStep] = useState(1);

  if (!car) {
    return <div className="text-center text-red-500 text-2xl py-10">Voiture non trouvée !</div>;
  }

  // --- Utilisation de la fonction de calcul centralisée ---
  const { 
    basePrice, 
    transportFee, 
    customsFee, 
    serviceFee, 
    totalCost 
  } = calculateImportCosts(car.price);
  // --- Fin de l'Utilisation ---

  const stepsContent = [
    {
      title: "Étape 1: Prix d'Achat du Véhicule",
      items: [{ name: "Prix du véhicule en Europe", cost: basePrice }],
      total: basePrice,
      description: "Ceci est le prix de base du véhicule tel qu'affiché en Europe, avant tout frais d'importation."
    },
    {
      title: "Étape 2: Ajout des Frais de Transport",
      items: [
        { name: "Prix du véhicule", cost: basePrice },
        { name: "Frais de transport (Estimé)", cost: transportFee }
      ],
      total: basePrice + transportFee,
      description: "Nous ajoutons une estimation pour le transport sécurisé du véhicule depuis son lieu d'achat en Europe jusqu'au port au Maroc."
    },
    {
      title: "Étape 3: Ajout des Frais de Douane",
      items: [
        { name: "Prix du véhicule", cost: basePrice },
        { name: "Frais de transport", cost: transportFee },
        { name: "Frais de douane (Estimé)", cost: customsFee }
      ],
      total: basePrice + transportFee + customsFee,
      description: (
        <>
          Notre estimation inclut les droits d'importation et la TVA. Le montant final peut varier en fonction de l'âge et de la motorisation du véhicule. Pour un calcul précis, le lien vers le site officiel de l'administration des douanes est fourni.
          <a href="https://www.douane.gov.ma" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1 font-semibold">
            Vérifier sur douane.gov.ma
          </a>
        </>
      )
    },
    {
      title: "Étape 4: Résumé du Coût Total",
      items: [
        { name: "Prix du véhicule", cost: basePrice },
        { name: "Frais de transport", cost: transportFee },
        { name: "Frais de douane (Estimé)", cost: customsFee },
        { name: "Nos frais de service", cost: serviceFee }
      ],
      total: totalCost,
      description: "Ceci est le coût total estimé pour importer le véhicule au Maroc, incluant notre service qui couvre toutes les démarches administratives pour vous."
    }
  ];

  const currentStepData = stepsContent[step - 1];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Simulation du Coût d'Importation</h1>
      
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
              <div>
                  <h2 className="text-2xl font-bold text-gray-800">{car.year} {car.make} {car.model}</h2>
                  <p className="text-lg text-gray-600">Simulation de coût</p>
              </div>
              <Link to={`/car/${car.id}`} className="text-blue-600 hover:underline">&larr; Retour au véhicule</Link>
          </div>

          <div className="relative mb-8 h-2 bg-gray-200 rounded-full">
              <div 
                  className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${((step - 1) / (stepsContent.length - 1)) * 100}%` }}
              ></div>
          </div>
          
          <div className="mb-8 min-h-[280px]">
              <h3 className="text-xl font-bold mb-4">{currentStepData.title}</h3>
              <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
                  {currentStepData.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-4">
                          <p className="text-gray-700">{item.name}</p>
                          <p className="font-semibold text-gray-800">{item.cost.toLocaleString('fr-FR')} €</p>
                      </div>
                  ))}
                  <div className="flex justify-between items-center p-4 bg-gray-50 font-bold">
                      <p className="text-lg">Total Partiel</p>
                      <p className="text-lg text-blue-600">{currentStepData.total.toLocaleString('fr-FR')} €</p>
                  </div>
              </div>
              <div className="mt-4 text-sm text-gray-600 bg-gray-100 p-3 rounded-md">
                {currentStepData.description}
              </div>
          </div>

          <div className="flex justify-between">
              <button
                  onClick={() => setStep(s => s - 1)}
                  disabled={step === 1}
                  className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-300 disabled:bg-gray-200 disabled:cursor-not-allowed"
              >
                  Précédent
              </button>
              {step < stepsContent.length ? (
                  <button
                      onClick={() => setStep(s => s + 1)}
                      className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                      Suivant
                  </button>
              ) : (
                 <button
                      onClick={() => setStep(1)}
                      className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                      Recommencer
                  </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationPage;