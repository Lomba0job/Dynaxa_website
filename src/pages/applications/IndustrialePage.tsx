
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

const IndustrialePage = () => {
  const challenges = [
    "Infrastrutture legacy con scarsa interoperabilità",
    "Necessità di monitoraggio predittivo e manutenzione intelligente",
    "Scalabilità su impianti di grandi dimensioni"
  ];

  const solutions = [
    "Sensori AI-ready con logging integrato e adattamento in tempo reale",
    "Diagnostica predittiva e autotaratura su cambiamenti di carico",
    "Integrazione nativa con ambienti SCADA e PLC industriali"
  ];

  const components = [
    "Sensori: deformazione, torque, peso dinamico, pressione",
    "Output configurabili per SCADA, PLC, edge gateway",
    "Onboard AI per filtraggio dati e notifiche eventi critici"
  ];

  const interfaces = [
    {
      title: "Interfacce Supportate",
      description: "CANopen, Profinet, MQTT, Modbus per massima compatibilità",
      icon: "🔌"
    },
    {
      title: "API REST",
      description: "Per sistemi di supervisione e manutenzione avanzata",
      icon: "🌐"
    },
    {
      title: "Output Real-time",
      description: "Con memoria di bordo e timestamping preciso",
      icon: "⚡"
    }
  ];

  const useCases = [
    {
      title: "Automazione linee produttive",
      description: "Analisi carico in tempo reale con ottimizzazione automatica dei processi",
      link: "#"
    },
    {
      title: "Controllo dinamico attuatori",
      description: "Gestione pneumatici ed elettrici con feedback continuo e predittivo",
      link: "#"
    },
    {
      title: "Monitoraggio stress meccanico",
      description: "Rilevazione vibrazioni e usura su impianti industriali continui",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              🏭 Industria 4.0
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Controllo e monitoraggio industriale con 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI integrata</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Sensori per automazione, controllo e diagnostica predittiva 
              con output intelligenti e adattivi per ogni tipo di impianto industriale.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Link to="/contact?topic=industrial">
                Richiedi una consulenza tecnica
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Affidabilità e flessibilità per ogni impianto
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                L'industria 4.0 richiede sensori sempre più intelligenti per garantire 
                controllo predittivo, manutenzione ottimizzata e integrazione fluida con sistemi legacy.
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
                  🏭 Stabilimento industriale con overlay dati dinamici
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-full h-64 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-purple-600 text-lg font-medium">
                  📊 Animazione controllo attuatori con feedback continuo
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Moduli intelligenti per il controllo distribuito
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                I nostri sistemi sensoriali combinano AI avanzata con robustezza industriale 
                per fornire controllo predittivo e manutenzione ottimizzata.
              </p>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comunicazione fluida con i tuoi sistemi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Architettura progettata per l'integrazione perfetta 
              con i più avanzati sistemi industriali e SCADA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interfaces.map((item, index) => (
              <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <CardTitle className="text-xl font-semibold text-blue-700">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/technology#interfaces">
                Scopri tutte le interfacce supportate
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Versatilità per ogni tipo di impianto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ogni componente è ottimizzato per le esigenze specifiche 
              dell'automazione industriale moderna.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {components.map((component, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-gray-700">{component}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/technology#sensor-types">
                  Scopri i tipi di sensori
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/technology#ai-processing">
                  Approfondisci l'AI processing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligenza operativa in ogni settore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Casi studio che dimostrano l'efficacia delle nostre soluzioni 
              in ambiente industriale avanzato.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <Button asChild variant="ghost" size="sm">
                    <a href={useCase.link}>
                      Leggi il caso studio
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </a>
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
            Lavoriamo con integratori e OEM per soluzioni su misura
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Dall'audit tecnico alla produzione scalabile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact?type=OEM">
                Progettiamo insieme
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Link to="/technology#whitepapers">
                Scarica Whitepaper Industriale
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialePage;
