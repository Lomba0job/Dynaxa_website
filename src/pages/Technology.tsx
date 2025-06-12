
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Technology = () => {
  const technologies = [
    {
      title: 'Algoritmo AI Distillato',
      icon: '🧠',
      description: 'Ottimizzazione autonoma della pesatura dinamica',
      details: 'Seleziona automaticamente i campioni più stabili, riducendo la deviazione standard fino al 50%',
      link: '/technology/ai-distillato',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Algoritmo Anti-Deriva',
      icon: '🌿',
      description: 'Compensazione continua della deriva peso',
      details: 'Correzione automatica delle variazioni sistematiche per operazioni continuative h24',
      link: '/technology/anti-deriva',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Daisy',
      icon: '📦',
      description: 'Scheda multifunzione con AI integrata',
      details: 'Tutto-in-uno: condizionamento segnale, logica, connettività industriale e AI embedded',
      link: '/technology/daisy',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Sigma Low',
      icon: '⚖️',
      description: 'Misura di peso ad altissima precisione',
      details: 'Precisione fino a ±5 mg con 19.5 bit reali, progettato per ambienti critici',
      link: '/technology/sigma-low',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Torsiometro Wireless',
      icon: '🔄',
      description: 'Sensore torque per assi rotanti senza contatto',
      details: 'Elimina gli slip ring con alimentazione e comunicazione wireless integrate',
      link: '/technology/torsiometro-wireless',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tecnologie 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Dynaxa</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Hardware AI-ready, algoritmi intelligenti, e soluzioni embedded per ogni tipo di sfida sensoriale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Link to="/contact">
                Contatta un esperto
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="#whitepapers">
                Scarica whitepapers
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${tech.gradient}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {tech.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {tech.details}
                  </p>
                  <Button asChild className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300" variant="outline">
                    <Link to={tech.link}>
                      Approfondisci
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Caratteristiche Comuni
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tutte le nostre tecnologie condividono principi di design comuni per garantire massima affidabilità e prestazioni
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Embedded</h3>
              <p className="text-gray-600">Algoritmi di intelligenza artificiale integrati direttamente nel firmware</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rugged Design</h3>
              <p className="text-gray-600">Certificazione IP67 e funzionamento in condizioni estreme</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time</h3>
              <p className="text-gray-600">Elaborazione in tempo reale con latenza minimale</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-2xl">🔌</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industrial Ready</h3>
              <p className="text-gray-600">Compatibilità nativa con protocolli industriali standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vuoi scoprire come queste tecnologie si applicano al tuo settore?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Esplora le nostre applicazioni specifiche per settore o contattaci per una consulenza personalizzata
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/applications">
                Scopri tutte le applicazioni
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">
                Parla con un esperto
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
