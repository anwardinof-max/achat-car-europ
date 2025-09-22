import React from 'react';
import { FaShippingFast, FaUniversity, FaWrench, FaShip } from 'react-icons/fa';

const partners = [
    { name: "Global Shipping Co.", icon: <FaShippingFast size={48} /> },
    { name: "Maersk Line", icon: <FaShip size={48} /> },
    { name: "AutoInspect EU", icon: <FaWrench size={48} /> },
    { name: "Morocco Customs Bank", icon: <FaUniversity size={48} /> },
];

const PartnersSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 mt-12 rounded-lg shadow-inner">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">Nos Partenaires de Confiance</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Nous collaborons avec les meilleurs pour vous offrir un service impeccable.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex flex-col items-center text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                           <div className="text-gray-600">
                                {partner.icon}
                           </div>
                           <p className="mt-2 text-sm font-semibold text-gray-700">
                               {partner.name}
                           </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;