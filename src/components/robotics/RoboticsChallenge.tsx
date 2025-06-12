
import React from 'react';

const RoboticsChallenge = () => {
  const challenges = [
    "Calibrazione continua e compensazione automatica",
    "Gestione feedback real-time in ambienti dinamici",
    "Integrazione fluida con architetture complesse"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Controllo evoluto in sistemi multi-asse
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              La robotica moderna richiede sensori sempre più sofisticati 
              per garantire precisione, sicurezza e reattività in tempo reale.
            </p>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">!</span>
                  </div>
                  <p className="text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="w-full h-64 bg-blue-200 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-lg font-medium">
                🤖 Animazione 6DOF + overlay AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticsChallenge;
