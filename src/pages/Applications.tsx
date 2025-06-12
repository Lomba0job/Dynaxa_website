
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Applications = () => {
  const applications = [
    {
      title: 'Robotica',
      icon: '🔧',
      description: 'Feedback in tempo reale per robot più intelligenti',
      details: 'Sensori AI-ready per il controllo preciso e ad alta velocità, in ambienti dinamici e multi-asse',
      link: '/applications/robotica',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Medicale',
      icon: '🏥',
      description: 'Sensori AI per strumenti medicali più sicuri',
      details: 'Soluzioni sensoriali ad alta integrità per dispositivi chirurgici, diagnostici e wearable',
      link: '/applications/medicale',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Agricoltura',
      icon: '🌾',
      description: 'Sensori intelligenti per un\'agricoltura più precisa',
      details: 'Soluzioni rugged AI-ready per condizioni ambientali critiche, allineate alla roadmap di precisione',
      link: '/applications/agricoltura',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Imballaggio',
      icon: '📦',
      description: 'Controllo AI per linee ad alta velocità',
      details: 'Sostituisci i sensori legacy con moduli intelligenti integrati nel ciclo macchina',
      link: '/applications/imballaggio',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Industriale',
      icon: '🏭',
      description: 'Controllo e monitoraggio industriale con AI',
      details: 'Sensori per automazione, controllo e diagnostica predittiva con output intelligenti e adattivi',
      link: '/applications/industriale',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Custom & Emerging',
      icon: '🧪',
      description: 'Soluzioni personalizzate per mercati emergenti',
      details: 'Adattiamo i nostri sistemi sensoriali a ogni sfida tecnica, anche nei contesti più estremi',
      link: '/applications/custom',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trova la tua 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Applicazione</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Dynaxa progetta soluzioni su misura per settori ad alta esigenza tecnica, 
            offrendo sensori avanzati con AI integrata, pronti per l'uso in ambienti estremi e sistemi complessi.
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${app.gradient}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {app.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {app.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    {app.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {app.details}
                  </p>
                  <Button asChild className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300" variant="outline">
                    <Link to={app.link}>
                      Scopri di più
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Non sei sicuro di dove iniziare?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I nostri ingegneri ti aiuteranno a identificare la soluzione perfetta per le tue esigenze specifiche
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Parla con un Ingegnere Dynaxa
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Applications;
