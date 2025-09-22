import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <Link to={`/car/${car.id}`}>
        <img src={car.images[0]} alt={`${car.make} ${car.model}`} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800">{car.make} {car.model}</h3>
          <p className="text-gray-600 text-sm mb-4">{car.year}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-700">{car.mileage.toLocaleString('fr-FR')} km</span>
            <span className="text-sm text-gray-700">{car.fuelType}</span>
            <span className="text-sm text-gray-700">{car.transmission}</span>
          </div>
          <p className="text-3xl font-extrabold text-blue-600 text-right">
            {car.price.toLocaleString('fr-FR')} €
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CarCard;
