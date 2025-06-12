
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Zap, Shield, Settings } from 'lucide-react';

const ImballaggioPage = () => {
  const challenges = [
    "Tempi ciclo brevissimi e margine di errore minimo",
    "Integrazione su linee legacy con vincoli elettrici e fisici",
    "Riduzione di scarti e falsi positivi tramite AI"
  ];

  const solutions = [
    "Algoritmi AI on-board per decisioni in tempo reale",
    "Compensazione automatica di vibrazioni e rumore macchina",
    "Interfacce compatibili con PLC industriali (CANopen, SPI)"
  ];

  const components = [
    "Sensori strain e peso dinamico",
    "Output configurabile per compatibilità con SCADA / PLC",
    "Logging onboard per analisi post-processo"
  ];

  const useCases = [
    {
      title: "Verifica peso dinamico su linee EMF",
      description: "Controllo qualità ad alta velocità con AI per riduzione scarti",
      icon: "⚖️"
    },
    {
      title: "Integrazione retrofit su macchine datate",
      description: "Aggiornamento di linee esistenti senza modifiche strutturali",
      icon: "🔧"
    },
    {
      title: "Controllo qualità automatizzato",
      description: "AI predittiva per identificazione difetti e ottimizzazione processi",
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              📦 Packaging & Imballaggio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Controllo AI per linee di imballaggio 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> ad alta velocità</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Sostituisci i sensori legacy con moduli intelligenti integrati nel ciclo macchina 
              per massimizzare precisione ed efficienza.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600">
              <Link to="/contact?topic=packaging">
                Contatta il nostro esperto packaging
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
                Efficienza e precisione sulle linee più rapide
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Le moderne linee di imballaggio richiedono controlli sempre più sofisticati 
                per mantenere qualità e velocità elevate riducendo gli sprechi.
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
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="w-full h-64 bg-purple-200 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-lg font-medium">
                  🏭 Linea imballaggio alta velocità con overlay dinamici
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
                  🔄 Simulazione scarto automatico con AI
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sensori intelligenti per il controllo qualità in linea
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                I nostri moduli AI integrano elaborazione in tempo reale e compensazione automatica 
                per garantire prestazioni ottimali anche in ambienti industriali complessi.
              </p>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
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
              Compatibilità con le principali macchine e protocolli
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Architettura flessibile progettata per integrarsi perfettamente con 
              l'infrastruttura esistente delle tue linee di produzione.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-blue-700">
                  Bus Industriali Legacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Supporto nativo per SPI, CANopen, UART per integrazione 
                  con sistemi PLC esistenti.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-purple-700">
                  Output Sincronizzati
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Output digitali sincronizzati con macchine esistenti 
                  per controllo real-time dei processi.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-green-700">
                  Diagnostica Avanzata
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Diagnostica locale con API verso supervisori 
                  per manutenzione predittiva.
                </p>
              </CardContent>
            </Card>
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
              Hardware progettato per l'imballaggio moderno
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Componenti robusti e flessibili per ogni tipo di linea di produzione.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {components.map((component, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-gray-700">{component}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/technology#ai-processing">
                Approfondisci l'AI processing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prestazioni provate in linea
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esempi reali di implementazione delle nostre soluzioni 
              in ambienti di produzione ad alta cadenza.
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

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Domande Frequenti
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  È possibile sostituire sensori esistenti senza modificare la linea?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sì, offriamo soluzioni retrofit compatibili progettate per integrarsi 
                  perfettamente con le infrastrutture esistenti.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  I moduli supportano output digitali sincronizzati?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sì, anche per trigger esterni e sincronizzazione con cicli macchina complessi.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  È disponibile diagnostica integrata?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sì, via API o output dedicato per manutenzione predittiva e monitoraggio continuo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Quali protocolli industriali sono supportati?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  CANopen, SPI, UART, Ethernet, MQTT e altri protocolli standard del settore.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ti aiutiamo a integrare i nostri moduli
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Su nuove linee o in retrofit. Dalla validazione ai test industriali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact?type=OEM">
                Proponi il tuo use-case
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
              <Link to="/technology#pdf">
                Scarica Documentazione Tecnica
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImballaggioPage;
