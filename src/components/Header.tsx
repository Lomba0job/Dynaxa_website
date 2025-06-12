
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
  const [isTechnologyOpen, setIsTechnologyOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isActiveSection = (section: string) => location.pathname.startsWith(section);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dynaxa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                  isActiveSection('/applications') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onMouseEnter={() => setIsApplicationsOpen(true)}
                onMouseLeave={() => setIsApplicationsOpen(false)}
              >
                <span>Applications</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isApplicationsOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsApplicationsOpen(true)}
                  onMouseLeave={() => setIsApplicationsOpen(false)}
                >
                  <Link to="/applications/robotica" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    🔧 Robotica
                  </Link>
                  <Link to="/applications/medicale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    🏥 Medicale
                  </Link>
                  <Link to="/applications/agricoltura" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    🌾 Agricoltura
                  </Link>
                  <Link to="/applications/imballaggio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    📦 Imballaggio
                  </Link>
                  <Link to="/applications/industriale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    🏭 Industriale
                  </Link>
                  <Link to="/applications/custom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    🧪 Custom & Emerging
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                  isActiveSection('/technology') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onMouseEnter={() => setIsTechnologyOpen(true)}
                onMouseLeave={() => setIsTechnologyOpen(false)}
              >
                <span>Technology</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isTechnologyOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsTechnologyOpen(true)}
                  onMouseLeave={() => setIsTechnologyOpen(false)}
                >
                  <Link to="/technology/ai-distillato" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    🧠 AI Distillato
                  </Link>
                  <Link to="/technology/anti-deriva" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    🌿 Anti-Deriva
                  </Link>
                  <Link to="/technology/daisy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    📦 Daisy
                  </Link>
                  <Link to="/technology/sigma-low" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    ⚖️ Sigma Low
                  </Link>
                  <Link to="/technology/torsiometro-wireless" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    🔄 Torsiometro Wireless
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link to="/applications" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Applications
              </Link>
              <Link to="/technology" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Technology
              </Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <div className="pt-2">
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
