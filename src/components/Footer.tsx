
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dynaxa
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Costruiamo sistemi sensoriali avanzati con AI per ingegneri e OEM che necessitano di misurazioni più intelligenti, rapide e precise.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:support@dynaxa.com" className="text-gray-300 hover:text-white transition-colors">
                  support@dynaxa.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+393474711935" className="text-gray-300 hover:text-white transition-colors">
                  +39 347 4711935
                </a>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Applications</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/applications/robotica" className="text-gray-300 hover:text-white transition-colors">
                  Robotica
                </Link>
              </li>
              <li>
                <Link to="/applications/medicale" className="text-gray-300 hover:text-white transition-colors">
                  Medicale
                </Link>
              </li>
              <li>
                <Link to="/applications/agricoltura" className="text-gray-300 hover:text-white transition-colors">
                  Agricoltura
                </Link>
              </li>
              <li>
                <Link to="/applications/imballaggio" className="text-gray-300 hover:text-white transition-colors">
                  Imballaggio
                </Link>
              </li>
              <li>
                <Link to="/applications/industriale" className="text-gray-300 hover:text-white transition-colors">
                  Industriale
                </Link>
              </li>
              <li>
                <Link to="/applications/custom" className="text-gray-300 hover:text-white transition-colors">
                  Custom & Emerging
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/technology/ai-distillato" className="text-gray-300 hover:text-white transition-colors">
                  AI Distillato
                </Link>
              </li>
              <li>
                <Link to="/technology/anti-deriva" className="text-gray-300 hover:text-white transition-colors">
                  Anti-Deriva
                </Link>
              </li>
              <li>
                <Link to="/technology/daisy" className="text-gray-300 hover:text-white transition-colors">
                  Daisy
                </Link>
              </li>
              <li>
                <Link to="/technology/sigma-low" className="text-gray-300 hover:text-white transition-colors">
                  Sigma Low
                </Link>
              </li>
              <li>
                <Link to="/technology/torsiometro-wireless" className="text-gray-300 hover:text-white transition-colors">
                  Torsiometro Wireless
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Dynaxa. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
