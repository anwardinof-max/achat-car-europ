import React from 'react';
import { FaLock, FaUserShield, FaCreditCard } from 'react-icons/fa';

const securityPoints = [
    {
        icon: <FaLock className="text-4xl text-green-500 mb-4 mx-auto" />,
        title: "Transactions Sécurisées",
        description: "Toutes vos transactions financières sont protégées par des protocoles de cryptage avancés pour garantir votre sécurité."
    },
    {
        icon: <FaUserShield className="text-4xl text-green-500 mb-4 mx-auto" />,
        title: "Confidentialité Garantie",
        description: "Vos données personnelles sont traitées avec la plus grande confidentialité et ne sont jamais partagées avec des tiers."
    },
    {
        icon: <FaCreditCard className="text-4xl text-green-500 mb-4 mx-auto" />,
        title: "Paiements Vérifiés",
        description: "Nous travaillons avec des partenaires de paiement réputés pour assurer la fiabilité et la traçabilité de chaque paiement."
    }
];

const SecurityInfoSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 mt-12 rounded-lg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">Votre Sécurité, Notre Priorité</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Nous nous engageons à offrir une expérience d'achat et d'importation totalement sécurisée.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {securityPoints.map((point, index) => (
                        <div key={index} className="text-center p-8 bg-white border border-gray-200 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
                            {point.icon}
                            <h3 className="text-xl font-bold text-gray-800 my-3">{point.title}</h3>
                            <p className="text-gray-600">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecurityInfoSection;
