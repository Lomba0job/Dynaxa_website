
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const RoboticsUseCases = () => {
  const useCases = [
    {
      title: "Manipolatori medicali",
      description: "Controllo preciso per chirurgia robotica con feedback tattile",
      icon: "🏥"
    },
    {
      title: "Bracci robotici industriali",
      description: "Torque feedback AI per ottimizzazione traiettorie e carichi",
      icon: "🏭"
    },
    {
      title: "Robot collaborativi",
      description: "Sensing embedded per sicurezza e interazione uomo-macchina",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Robot più reattivi grazie a Dynaxa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esempi concreti di come i nostri sensori migliorano 
            le prestazioni e la sicurezza dei sistemi robotici.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <Button asChild variant="ghost" size="sm" className="w-full">
                  <Link to="#">
                    Leggi il caso studio
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoboticsUseCases;
