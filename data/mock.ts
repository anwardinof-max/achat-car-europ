import { Car } from '../types';

export const cars: Car[] = [
  {
    id: 1,
    make: "Audi",
    model: "A4",
    year: 2021,
    price: 35000,
    mileage: 45000,
    transmission: "Automatique",
    fuelType: "Essence",
    images: [
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616422285531-43b9c7b50ba2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616422285437-a8a5f3c1a2d5?q=80&w=2070&auto=format&fit=crop",
    ],
    description: "Une berline de luxe élégante et performante, l'Audi A4 offre une conduite raffinée avec des technologies de pointe. Parfaitement entretenue, avec un historique de service complet.",
    features: ["Sièges en cuir", "Système de navigation GPS", "Toit ouvrant panoramique", "Caméra de recul", "Climatisation automatique"],
    engine: "2.0L TFSI",
    power: "201 ch",
    videoUrl: "https://www.youtube.com/embed/f44a_pS-9-k",
    marketPriceMorocco: 52000
  },
  {
    id: 2,
    make: "BMW",
    model: "Série 3",
    year: 2020,
    price: 32000,
    mileage: 60000,
    transmission: "Automatique",
    fuelType: "Diesel",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-425796f383a6?q=80&w=2128&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590135327829-761b6a3b7468?q=80&w=1974&auto=format&fit=crop",
    ],
    description: "La BMW Série 3 est la référence des berlines sportives. Elle combine un design dynamique, une maniabilité exceptionnelle et un intérieur haut de gamme. Idéale pour les amateurs de conduite.",
    features: ["Pack M Sport", "Phares LED", "Affichage tête haute", "Sièges chauffants", "Aide au stationnement"],
    engine: "2.0L TwinPower Turbo",
    power: "190 ch",
    videoUrl: "https://www.youtube.com/embed/tItqMgGa_3Y",
    marketPriceMorocco: 48000
  },
  {
    id: 3,
    make: "Mercedes-Benz",
    model: "Classe C",
    year: 2022,
    price: 42000,
    mileage: 25000,
    transmission: "Automatique",
    fuelType: "Hybride",
    images: [
      "https://images.unsplash.com/photo-1620530769994-39f99386d38e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617092218525-2c830c2d334e?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617092218596-c6fa529603f9?q=80&w=1964&auto=format&fit=crop",
    ],
    description: "La Mercedes-Benz Classe C redéfinit le luxe moderne avec son design intérieur spectaculaire et sa technologie hybride efficace. Un confort de conduite inégalé et une faible consommation.",
    features: ["Écran tactile MBUX", "Intérieur en cuir Nappa", "Système audio Burmester", "Conduite semi-autonome", "Suspension pneumatique"],
    engine: "1.5L Turbo + Moteur électrique",
    power: "204 ch + 20 ch EQ Boost",
    videoUrl: "https://www.youtube.com/embed/5Y5Y1LJc3mI",
    marketPriceMorocco: 61500
  },
];