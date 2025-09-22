import React from 'react';
import { cars } from '../data/mock';
import CarCard from '../components/CarCard';
import AdvantagesSection from '../components/AdvantagesSection';
import TrackingSimulator from '../components/TrackingSimulator';
import SecurityInfoSection from '../components/SecurityInfoSection';
import GuaranteesSection from '../components/GuaranteesSection';
import PartnersSection from '../components/PartnersSection';
import VehicleTrackingMap from '../components/VehicleTrackingMap';


const HomePage: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white text-center py-20">
          <div className="container mx-auto px-6">
              <h1 className="text-5xl font-extrabold leading-tight mb-4">Votre Voiture d'Europe, Livrée au Maroc</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Nous simplifions l'importation de votre véhicule de rêve. Parcourez notre sélection, simulez les coûts et laissez-nous nous occuper du reste.
              </p>
          </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Véhicules Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <AdvantagesSection />
        <TrackingSimulator />
        <VehicleTrackingMap />
        <GuaranteesSection />
        <SecurityInfoSection />
        <PartnersSection />
      </div>

    </div>
  );
};

export default HomePage;
