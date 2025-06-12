
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

const AgricolturaPage = () => {
  const challenges = [
    "Deriva dei segnali in ambienti dinamici",
    "Variazioni climatiche e instabilità meccaniche",
    "Integrazione nei sistemi autonomi e di precisione"
  ];

  const solutions = [
    "Compensazione multi-sensore e filtraggio AI on-board",
    "Lettura di coppia, deformazione, temperatura, pressione",
    "Output real-time tramite CAN, SPI, Ethernet"
  ];

  const components = [
    "Tipi di sensori: torque, strain, load, pressure, temperature",
    "Board AI-ready con filtraggio vibrazionale e autodiagnosi",
    "Output: CAN-bus, SPI, UART, Ethernet, MQTT"
  ];

  const useCases = [
    {
      title: "Torsiometro su asse rotante per trattore",
      description: "Misura della coppia in tempo reale su PTO per ottimizzazione carichi di lavoro",
      link: "#"
    },
    {
      title: "Sensori ambientali resistenti",
      description: "Resistenti al fango e vibrazioni per monitoraggio continuo delle condizioni di campo",
      link: "#"
    },
    {
      title: "Peso dinamico su mietitrebbia",
      description: "AI predittivo per ottimizzazione raccolta e controllo qualità del prodotto",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              🌾 Agricoltura di Precisione
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sensori intelligenti per un'agricoltura 
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> più precisa</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Soluzioni rugged AI-ready per condizioni ambientali critiche, 
              perfettamente allineate alla roadmap di John Deere per l'agricoltura autonoma.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-blue-600">
              <Link to="/contact?topic=agriculture">
                Scopri come possiamo aiutarti
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
                Le nuove sfide dell'agricoltura moderna
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                L'agricoltura di precisione richiede sensori sempre più sofisticati per operare 
                in condizioni estreme e fornire dati affidabili per sistemi autonomi.
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
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="w-full h-64 bg-green-200 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg font-medium">
                  🚜 Campo agricolo con overlay sensori attivi
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
              <div className="w-full h-64 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 text-lg font-medium">
                  📊 Animazione dati real-time su mappa di campo
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                La risposta Dynaxa: sensori evoluti, AI integrata
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                I nostri sistemi sensoriali combinano hardware robusto con algoritmi AI avanzati 
                per fornire misure precise anche nelle condizioni più difficili.
              </p>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* John Deere Alignment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Allineati al futuro dell'agricoltura
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le nostre soluzioni sono progettate per integrarsi perfettamente con la roadmap 
              tecnologica di John Deere e altri leader del settore.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-green-700">
                  🤖 Autonomia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Feedback sensoriale per mezzi autonomi con controllo preciso 
                  e adattamento alle condizioni di campo.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="https://about.deere.com/en-us/our-company-and-purpose/technology-and-innovation" target="_blank">
                    John Deere Tech Overview
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-700">
                  🎯 Agricoltura di Precisione
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Input ottimizzati da AI embedded per massimizzare resa 
                  e minimizzare sprechi di risorse.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="https://www.deere.com/en/technology-products/precision-ag-technology" target="_blank">
                    Precision Ag Products
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-purple-700">
                  ☁️ Cloud Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Compatibilità con John Deere Operations Center 
                  e altre piattaforme di gestione dati agricoli.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/technology#interfaces">
                    Scopri le nostre interfacce
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Componenti progettati per il campo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hardware robusto e software intelligente per le condizioni più severe dell'agricoltura moderna.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
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
              Applicazioni in campo reale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Casi studio che dimostrano l'efficacia delle nostre soluzioni in ambiente agricolo.
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vuoi integrare i nostri moduli nei tuoi sistemi agricoli?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Il nostro team tecnico è pronto a supportarti dall'idea al campo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact?type=OEM">
                Parla con un Ingegnere
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              <Link to="/technology#whitepapers">
                Scarica Whitepaper
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgricolturaPage;
