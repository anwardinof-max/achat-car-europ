import React from 'react';
import { FaCheckDouble, FaWrench, FaStar } from 'react-icons/fa';

const guarantees = [
    {
        icon: <FaCheckDouble className="text-4xl text-blue-500 mb-4 mx-auto" />,
        title: "Contrôle Qualité Rigoureux",
        description: "Chaque véhicule est inspecté minutieusement par nos experts avant l'achat pour garantir sa conformité et sa qualité."
    },
    {
        icon: <FaWrench className="text-4xl text-blue-500 mb-4 mx-auto" />,
        title: "Garantie Mécanique",
        description: "Nous offrons une garantie mécanique de 6 mois sur les pièces principales du moteur et de la boîte de vitesses."
    },
    {
        icon: <FaStar className="text-4xl text-blue-500 mb-4 mx-auto" />,
        title: "Satisfaction Client",
        description: "Votre satisfaction est notre priorité. Nous vous accompagnons à chaque étape avec un service client dédié et réactif."
    }
];

const GuaranteesSection: React.FC = () => {
    return (
        <section className="py-20 bg-blue-50 mt-12 rounded-lg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">Nos Garanties</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Achetez en toute confiance. Nous nous engageons sur la qualité et le service.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {guarantees.map((guarantee, index) => (
                        <div key={index} className="text-center p-8 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            {guarantee.icon}
                            <h3 className="text-xl font-bold text-gray-800 my-3">{guarantee.title}</h3>
                            <p className="text-gray-600">{guarantee.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GuaranteesSection;
