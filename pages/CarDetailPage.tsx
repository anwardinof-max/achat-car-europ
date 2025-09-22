import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/mock';
import VideoModal from '../components/VideoModal';
import { calculateImportCosts } from '../utils/pricing';
import { FaPlayCircle, FaCalculator, FaCheckCircle, FaCog, FaTachometerAlt, FaGasPump, FaWhatsapp } from 'react-icons/fa';

const CarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = cars.find(c => c.id === Number(id));

  const [mainImage, setMainImage] = useState(car?.images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!car) {
    return <div className="text-center py-10">Voiture non trouvée !</div>;
  }
  
  const { totalCost } = calculateImportCosts(car.price);
  
  const whatsappNumber = "212621903906";
  const whatsappMessage = encodeURIComponent(`Bonjour, je suis intéressé par la ${car.year} ${car.make} ${car.model}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Gallery */}
          <div className="p-4">
            <div className="relative">
              <img src={mainImage} alt={`${car.make} ${car.model}`} className="w-full h-96 object-cover rounded-lg shadow-md" />
              <button 
                onClick={() => setIsModalOpen(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-75 transition"
                aria-label="Play video"
              >
                <FaPlayCircle size={64} />
              </button>
            </div>
            <div className="flex space-x-2 mt-4">
              {car.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-24 h-24 object-cover rounded-md cursor-pointer border-2 ${mainImage === img ? 'border-blue-500' : 'border-transparent'}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Car Info */}
          <div className="p-8">
            <h1 className="text-4xl font-extrabold text-gray-800">{car.make} {car.model}</h1>
            <p className="text-xl text-gray-500 mb-4">{car.year}</p>
            
            <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
                <div className="flex items-center space-x-2"><FaTachometerAlt className="text-blue-500" /> <span>{car.mileage.toLocaleString('fr-FR')} km</span></div>
                <div className="flex items-center space-x-2"><FaGasPump className="text-blue-500" /> <span>{car.fuelType}</span></div>
                <div className="flex items-center space-x-2"><FaCog className="text-blue-500" /> <span>{car.transmission}</span></div>
                <div className="flex items-center space-x-2"><FaCog className="text-blue-500" /> <span>{car.engine} - {car.power}</span></div>
            </div>

            <p className="text-gray-600 mb-6">{car.description}</p>
            
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Équipements et options :</h3>
                <ul className="list-none space-y-2">
                    {car.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                            <FaCheckCircle className="text-green-500 mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg text-gray-700">Prix en Europe</span>
                    <span className="text-3xl font-bold text-gray-900">{car.price.toLocaleString('fr-FR')} €</span>
                </div>
                 <div className="flex justify-between items-center mb-4 border-t pt-4">
                    <span className="text-lg text-gray-700">Coût total estimé (Maroc)</span>
                    <span className="text-3xl font-bold text-blue-600">{totalCost.toLocaleString('fr-FR')} €</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">Inclut transport, douane et nos frais de service. Le prix au Maroc est de {car.marketPriceMorocco.toLocaleString('fr-FR')} € en moyenne.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 flex items-center justify-center space-x-2"
                    >
                        <FaWhatsapp />
                        <span>Contacter sur WhatsApp</span>
                    </a>
                    <Link to={`/simulation/${car.id}`} className="w-full">
                        <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2">
                            <FaCalculator />
                            <span>Simuler le Coût</span>
                        </button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={car.videoUrl} />
    </div>
  );
};

export default CarDetailPage;