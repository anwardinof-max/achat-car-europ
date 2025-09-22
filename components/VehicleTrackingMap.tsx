import React from 'react';
import { FaMapMarkerAlt, FaShip } from 'react-icons/fa';

const VehicleTrackingMap: React.FC = () => {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-md p-8 mt-12 relative overflow-hidden h-96">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Carte de Suivi (Exemple)</h3>
      
      <div className="relative h-full flex flex-col justify-between text-gray-700">
        {/* Europe Location */}
        <div className="absolute top-1/4 left-1/4">
          <FaMapMarkerAlt size={32} className="text-red-500 transform -translate-x-1/2 -translate-y-full" />
          <div className="bg-white p-2 rounded-md shadow-lg text-sm font-semibold -translate-x-1/2 mt-2 whitespace-nowrap">
            Point de départ (Europe)
          </div>
        </div>
        
        {/* Morocco Location */}
        <div className="absolute bottom-1/4 right-1/4">
          <FaMapMarkerAlt size={32} className="text-green-500 transform -translate-x-1/2 -translate-y-full" />
           <div className="bg-white p-2 rounded-md shadow-lg text-sm font-semibold -translate-x-1/2 mt-2 whitespace-nowrap">
            Destination (Maroc)
          </div>
        </div>

        {/* Ship Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <FaShip size={40} className="text-blue-600" />
            <div className="bg-white p-2 rounded-md shadow-lg text-sm font-semibold mt-2 whitespace-nowrap">
                En transit
            </div>
        </div>

        {/* Dashed line */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" style={{pointerEvents: 'none'}}>
            <line 
              x1="25%" 
              y1="25%" 
              x2="75%" 
              y2="75%" 
              stroke="rgba(59, 130, 246, 0.7)" 
              strokeWidth="3"
              strokeDasharray="10 5"
            />
        </svg>

      </div>
    </div>
  );
};

export default VehicleTrackingMap;
