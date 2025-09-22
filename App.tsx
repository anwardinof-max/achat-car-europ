import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarDetailPage from './pages/CarDetailPage';
import SimulationPage from './pages/SimulationPage';

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold hover:text-gray-300">
        AutoImport Maroc
      </Link>
      <div>
        <Link to="/" className="px-4 hover:text-gray-300">Accueil</Link>
      </div>
    </nav>
  </header>
);

const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-6 py-4 text-center">
            <p>&copy; {new Date().getFullYear()} AutoImport Maroc. Tous droits réservés.</p>
        </div>
    </footer>
);

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car/:id" element={<CarDetailPage />} />
          <Route path="/simulation/:id" element={<SimulationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
