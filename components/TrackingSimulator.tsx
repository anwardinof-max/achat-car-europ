import React from 'react';
import { FaCar, FaShip, FaCheckCircle, FaClipboardList } from 'react-icons/fa';

const trackingSteps = [
  { name: 'Achat du véhicule', icon: <FaCar size={24}/> },
  { name: 'Transport Europe', icon: <FaShip size={24}/> },
  { name: 'Dédouanement Maroc', icon: <FaClipboardList size={24}/> },
  { name: 'Livraison finale', icon: <FaCheckCircle size={24}/> },
];

const getStatusClasses = (index: number, currentStep: number) => {
    if (index < currentStep) {
        return {
            iconBg: 'bg-green-500',
            textColor: 'text-green-700',
            barBg: 'bg-green-500',
        };
    }
    if (index === currentStep) {
        return {
            iconBg: 'bg-blue-500 animate-pulse',
            textColor: 'text-blue-700 font-bold',
            barBg: 'bg-gray-200',
        };
    }
    return {
        iconBg: 'bg-gray-300',
        textColor: 'text-gray-500',
        barBg: 'bg-gray-200',
    };
};

const TrackingSimulator: React.FC = () => {
    const currentStep = 2; // Example step: Dédouanement en cours

    return (
        <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Suivi de votre Véhicule (Exemple)</h3>
            <div className="flex items-center">
                {trackingSteps.map((step, index) => {
                    const { iconBg, textColor, barBg } = getStatusClasses(index, currentStep);
                    const isLastStep = index === trackingSteps.length - 1;

                    return (
                        <React.Fragment key={step.name}>
                            <div className="flex flex-col items-center flex-shrink-0">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${iconBg} transition-colors`}>
                                    {step.icon}
                                </div>
                                <p className={`mt-2 text-sm text-center font-semibold ${textColor} transition-colors w-24`}>{step.name}</p>
                            </div>
                            {!isLastStep && <div className={`flex-1 h-1 mx-2 rounded-full ${barBg} transition-colors`}></div>}
                        </React.Fragment>
                    );
                })}
            </div>
            <div className="mt-8 text-center text-gray-600 bg-gray-100 p-4 rounded-lg">
                <p>Status actuel: <span className="font-semibold text-blue-700">{trackingSteps[currentStep].name}</span></p>
                <p className="text-sm mt-1">Ceci est un exemple pour illustrer le processus de suivi que nous offrons.</p>
            </div>
        </div>
    );
};

export default TrackingSimulator;
