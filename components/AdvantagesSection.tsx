import React from 'react';
// Assuming react-icons is installed. If not, run: npm install react-icons
import { FaShieldAlt, FaTruck, FaFileInvoiceDollar } from 'react-icons/fa';

const advantages = [
    {
        icon: <FaTruck className="text-4xl text-blue-500 mb-4 mx-auto" />,
        title: "Logistique Simplifiée",
        description: "Nous gérons tout, du transport sécurisé à la livraison à votre porte au Maroc."
    },
    {
        icon: <FaFileInvoiceDollar className="text-4xl text-blue-500 mb-4 mx-auto" />,
        title: "Transparence Totale",
        description: "Simulez vos coûts en ligne. Pas de frais cachés, un tarif de service clair et unique."
    },
    {
        icon: <FaShieldAlt className="text-4xl text-blue-500 mb-4 mx-auto" />,
        title: "Accompagnement d'Experts",
        description: "Notre équipe s'occupe de toutes les démarches administratives et douanières pour vous."
    }
];

const AdvantagesSection: React.FC = () => {
    return (
        <section className="py-20 bg-white mt-12 rounded-lg shadow-md">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">Pourquoi nous choisir ?</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        L'importation de voiture n'a jamais été aussi simple et transparente.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                            {advantage.icon}
                            <h3 className="text-xl font-bold text-gray-800 my-3">{advantage.title}</h3>
                            <p className="text-gray-600">{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
