
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const RoboticsComponents = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Progettati per velocità, precisione e affidabilità
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ogni componente è ottimizzato per le esigenze specifiche 
            dell'automazione robotica moderna.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-3xl mb-2">⚖️</div>
              <CardTitle className="text-lg">Sensori</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Coppia, forza, deformazione ad alta precisione
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-3xl mb-2">🔌</div>
              <CardTitle className="text-lg">Output</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                CANopen, EtherCAT, SPI, UART
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-3xl mb-2">🧠</div>
              <CardTitle className="text-lg">AI Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Autodiagnosi e compensazione drift
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-3xl mb-2">⚡</div>
              <CardTitle className="text-lg">Real-Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Latenza sub-millisecondo
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/technology#ai-processing">
              Scopri l'AI processing
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoboticsComponents;
