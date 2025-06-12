
import React from 'react';
import { CheckCircle, Zap, Cpu, Wifi } from 'lucide-react';

const RoboticsSolutions = () => {
  const solutions = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Sensori torque e forza a bassa latenza",
      description: "Risposta sub-millisecondo per controllo real-time"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Elaborazione AI a bordo con compensazione istantanea",
      description: "Algoritmi edge per adattamento automatico"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Supporto bus industriali: CAN, SPI, EtherCAT",
      description: "Integrazione nativa con sistemi robotici esistenti"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full translate-y-6 -translate-x-6"></div>
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoNjQsIDEyMCwgMjQyLCAwLjEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
                <div className="text-center z-10">
                  <div className="text-6xl mb-4">🦾</div>
                  <span className="text-blue-700 text-lg font-semibold bg-white/80 px-4 py-2 rounded-full backdrop-blur-sm">
                    Simulazione braccio robotico in azione
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Sensori AI-ready per il controllo di precisione
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              I nostri moduli integrano elaborazione AI avanzata direttamente 
              nel sensore per garantire risposte immediate e compensazione automatica.
            </p>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {solution.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {solution.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticsSolutions;
