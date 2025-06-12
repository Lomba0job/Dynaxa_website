
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, Settings, Zap, ArrowRight } from 'lucide-react';

const RoboticsArchitecture = () => {
  const architecture = [
    {
      title: "Sincronizzazione Multi-Asse",
      description: "Controllo coordinato in tempo reale per sistemi robotici complessi",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Bus Industriali",
      description: "Supporto nativo CAN, SPI, EtherCAT per massima compatibilità",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Compatibilità ROS2",
      description: "Integrazione diretta con controller OEM e framework robotici",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tecnologia al servizio del controllo robotico
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Architettura progettata per l'integrazione perfetta 
            con i più avanzati sistemi di controllo robotico.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {architecture.map((arch, index) => (
            <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {arch.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-blue-700">
                  {arch.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {arch.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/technology#sensor-architecture">
              Approfondisci l'architettura dei sensori
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoboticsArchitecture;
