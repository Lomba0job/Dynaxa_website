
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Leaf, Shield, Clock, Thermometer } from 'lucide-react';

const AntiDeriva = () => {
  const benefits = [
    "Riduce il bisogno di calibrazioni manuali",
    "Affidabilità garantita su settimane di operatività",
    "Funziona su hardware a basso consumo",
    "Personalizzabile per reti da oltre 200 sensori"
  ];

  const useCases = [
    {
      title: "Stress idrico su colture",
      description: "Monitoraggio continuo del fabbisogno idrico delle piante in serra con precisione costante",
      icon: "🌱"
    },
    {
      title: "Microirrigazione automatica",
      description: "Controllo del peso di vasetti per irrigazione precisa pianta per pianta",
      icon: "💧"
    },
    {
      title: "Sensori ambientali scientifici",
      description: "Raccolta dati a lungo termine per ricerca climatica e ambientale",
      icon: "🔬"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              🌿 Algoritmo Anti-Deriva
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Misura stabile 
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> nel lungo periodo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Algoritmo software progettato per compensare automaticamente la deriva del segnale 
              nei sensori di peso durante operazioni continuative, anche in ambienti critici.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-blue-600">
                <Link to="/contact?tech=anti-deriva">
                  Desideri applicare questa tecnologia?
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#whitepaper">
                  Scarica whitepaper agronomico
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compensazione intelligente per ambienti dinamici
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Utilizza modelli adattivi per correggere le variazioni lente e sistematiche (drift) 
                generate da temperatura, umidità, deformazione meccanica o invecchiamento delle celle di carico.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Accuratezza di ±4 g su 30 kg per operazioni h24</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Compensazione automatica della deriva senza ricalibrazione</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Compatibile con celle off-center e ambienti outdoor (IP67)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Algoritmo leggero integrabile in firmware embedded</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="w-full h-64 bg-green-200 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg font-medium">
                  📊 Comportamento algoritmo anti-drift nel tempo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specifiche Tecniche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prestazioni ottimizzate per applicazioni a lungo termine 
              che richiedono stabilità e affidabilità costanti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Accuratezza</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  ±4 g su 30 kg per operazioni h24 continue
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Durata</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Compensazione automatica senza ricalibrazione
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Ambienti</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Celle off-center, outdoor IP67, temperature variabili
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Efficienza</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Hardware a basso consumo, algoritmo leggero
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vantaggi Operativi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'algoritmo Anti-Deriva riduce drasticamente i costi di manutenzione 
              e garantisce dati affidabili nel tempo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Simulation */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simulazione Compensazione Deriva
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Visualizza dinamicamente come l'algoritmo compensa le variazioni 
              di temperatura e altri fattori ambientali.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-green-600 text-2xl font-medium mb-4 block">
                  📊 Simulazione Anti-Deriva
                </span>
                <p className="text-gray-600 max-w-md">
                  Controlli per simulare variazioni di temperatura, 
                  visualizzare deriva reale vs. output corretto dall'algoritmo
                </p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Deriva Simulata</h4>
                <div className="w-full h-4 bg-red-300 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">Variazione peso dovuta a fattori ambientali</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Output Reale</h4>
                <div className="w-full h-4 bg-gray-400 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">Segnale del sensore non compensato</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Curva Corretta</h4>
                <div className="w-full h-4 bg-green-500 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">Output finale compensato dall'algoritmo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casi d'Uso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Applicazioni reali che dimostrano l'efficacia dell'algoritmo 
              in diversi contesti di monitoraggio continuo.
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
                  <p className="text-gray-600 text-center">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agricultural Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specifiche per Applicazioni Agricole
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'algoritmo Anti-Deriva è particolarmente efficace per il monitoraggio 
              dello stress idrico e la gestione dell'irrigazione di precisione.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-green-700 flex items-center">
                  🌱 Monitoraggio Stress Idrico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <strong>Precisione:</strong> ±4g su 30kg per 24/7
                  </p>
                  <p className="text-gray-600">
                    <strong>Range termico:</strong> -10°C a +60°C
                  </p>
                  <p className="text-gray-600">
                    <strong>Durata:</strong> Settimane senza ricalibrazione
                  </p>
                  <p className="text-gray-600">
                    <strong>Compatibilità:</strong> Celle off-center, IP67
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-700 flex items-center">
                  💧 Reti di Sensori Distribuite
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <strong>Scalabilità:</strong> Reti da oltre 200 sensori
                  </p>
                  <p className="text-gray-600">
                    <strong>Consumo:</strong> Ottimizzato per hardware low-power
                  </p>
                  <p className="text-gray-600">
                    <strong>Comunicazione:</strong> MQTT, LoRaWAN, WiFi
                  </p>
                  <p className="text-gray-600">
                    <strong>Manutenzione:</strong> Ridotta al minimo
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Desideri applicare questa tecnologia ai tuoi sensori?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contatta Dynaxa per scoprire come l'algoritmo Anti-Deriva 
            può migliorare l'affidabilità del tuo sistema di monitoraggio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact?tech=anti-deriva">
                Contatta Dynaxa
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              <Link to="#whitepaper">
                Approfondisci il funzionamento embedded
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AntiDeriva;
