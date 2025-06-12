
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Wifi, Shield, Zap, Settings } from 'lucide-react';

const TorsiometroWireless = () => {
  const features = [
    "Nessun contatto rotante: tecnologia magnetica a bassa latenza",
    "Embedded resinato IP67 per ambienti gravosi",
    "Alimentazione wireless con anello trasmettitore + ricevitore su asse",
    "Comunicazione bidirezionale: configurazione + telemetria",
    "Auto-zero e calibrazione dinamica opzionale"
  ];

  const useCases = [
    {
      title: "Trattori ed escavatori",
      description: "Misura coppia su PTO per ottimizzazione consumi e carichi di lavoro",
      icon: "🚜"
    },
    {
      title: "Macchine utensili e pompe",
      description: "Controllo industriale con feedback continuo per manutenzione predittiva",
      icon: "⚙️"
    },
    {
      title: "Assi navali e portuali",
      description: "Monitoraggio potenza e stress meccanico per applicazioni marine",
      icon: "🚢"
    },
    {
      title: "Robot cinematica rotante",
      description: "Controllo preciso per robot con cinematica rotante continua",
      icon: "🤖"
    }
  ];

  const specs = [
    {
      category: "Misura",
      items: ["4 strain gauge a 45°", "±500 Nm (scalabile)"],
      icon: "📏"
    },
    {
      category: "Struttura", 
      items: ["Elettronica resinata", "PCB embedded su asse"],
      icon: "⚙️"
    },
    {
      category: "Alimentazione",
      items: ["Wireless (accoppiamento magnetico)", "Autodiagnosi onboard"],
      icon: "🔋"
    },
    {
      category: "Comunicazione",
      items: ["Induttiva + CAN / SPI", "Logging locale + invio real-time"],
      icon: "📡"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 border-indigo-200">
              🔄 Torsiometro Wireless
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Misura la coppia. Ovunque. 
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Senza contatto.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Il Torsiometro Wireless di Dynaxa elimina gli slip ring, fornendo misure affidabili 
              anche su assi in rotazione continua e ambienti ostili.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600">
                <Link to="/contact?type=OEM">
                  Richiedi un test OEM
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#datasheet">
                  Scarica scheda tecnica
                </Link>
              </Button>
            </div>
            <div className="flex justify-center space-x-8 text-sm">
              <Badge variant="outline" className="bg-blue-50 border-blue-200">
                ✔️ Nessuna usura meccanica
              </Badge>
              <Badge variant="outline" className="bg-green-50 border-green-200">
                ✔️ Installazione semplice e robusta
              </Badge>
              <Badge variant="outline" className="bg-purple-50 border-purple-200">
                ✔️ Alimentazione e comunicazione wireless integrate
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specifiche Tecniche - Tabella Comparativa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un sistema embedded per misurare la coppia su alberi rotanti, 
              senza l'uso di slip ring o contatti elettrici.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <Card key={index} className="text-center border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-3xl mb-2">{spec.icon}</div>
                  <CardTitle className="text-lg font-semibold text-indigo-700">
                    {spec.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {spec.items.map((item, idx) => (
                    <p key={idx} className="text-sm text-gray-600 mb-1">
                      {item}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Panoramica Tecnologica
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Il Torsiometro Wireless è un sistema embedded per misurare la coppia su alberi rotanti, 
                senza l'uso di slip ring o contatti elettrici. Grazie al design robusto e alla trasmissione 
                induttiva, può operare in ambienti estremi (fango, polvere, vibrazioni).
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Viene fornito come modulo integrabile oppure come sistema OEM completo.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-full h-64 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-indigo-600 text-lg font-medium">
                  📊 Grafico dinamico (torque vs tempo)
                </span>
              </div>
              <p className="text-gray-600 text-center">
                Visualizzazione real-time della coppia con compensazione automatica
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funzionalità Chiave
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Progettato per superare i limiti dei tradizionali slip ring 
              con una soluzione completamente wireless e robusta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Trasmissione Induttiva</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Nessun contatto rotante, tecnologia magnetica a bassa latenza
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Design Robusto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Embedded resinato IP67 per ambienti gravosi e condizioni estreme
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Alimentazione Wireless</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Anello trasmettitore + ricevitore su asse con autodiagnosi
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Comunicazione Bidirezionale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Configurazione e telemetria per controllo remoto completo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Simulation */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simulazione Interattiva - Risposta in Coppia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Testa il comportamento del torsiometro in diverse condizioni operative
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-indigo-600 text-2xl font-medium mb-4 block">
                  📊 Simulazione Torque Real-Time
                </span>
                <p className="text-gray-600 max-w-md">
                  Controlli per testare variazione coppia, cambi di carico bruschi, 
                  ritardo di trasmissione con diverse configurazioni
                </p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Variazione Coppia</h4>
                <div className="w-full h-4 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">Ciclo continuo con carichi variabili</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Cambi di Carico</h4>
                <div className="w-full h-4 bg-purple-500 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">Risposta a variazioni brusche</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Latenza</h4>
                <div className="w-full h-4 bg-green-500 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">Ritardo trasmissione configurabile</p>
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
              Applicazioni Reali
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Il torsiometro wireless trova applicazione in una vasta gamma 
              di settori industriali e di trasporto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <p className="text-gray-600 text-sm text-center">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Visualization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Visualizzazione 3D - Layout Completo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Esplora il torsiometro wireless in dettaglio con la nostra visualizzazione 3D interattiva
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-indigo-600 text-2xl font-medium mb-4 block">
                    🖥️ Esplora in 3D
                  </span>
                  <p className="text-gray-600 max-w-md">
                    Visualizzazione completa del sistema con anello trasmettitore, 
                    ricevitore su asse e componenti di misura
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Documentation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Documentazione Tecnica
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-indigo-700">
                  📄 PDF Tecnico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specifiche complete, dimensioni, diagrammi di installazione
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="#pdf-torsiometro">
                    Scarica PDF tecnico
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-purple-700">
                  📡 API Comunicazione
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Protocolli wireless e interfacce di comunicazione supportate
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/technology#interfaces-torsiometro">
                    API comunicazione wireless
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-green-700">
                  🔧 Integrazione
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Guida integrazione con sistemi CANopen, SPI, UART
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/technology#ai-processing-torsiometro">
                    Integrazione sistemi
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Traditional vs Wireless */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Confronto: Slip Ring Tradizionali vs Wireless
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700">Slip Ring Tradizionali</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-left">
                    <p className="text-gray-700">❌ Usura meccanica continua</p>
                    <p className="text-gray-700">❌ Manutenzione frequente</p>
                    <p className="text-gray-700">❌ Problemi in ambienti ostili</p>
                    <p className="text-gray-700">❌ Rumore elettrico</p>
                    <p className="text-gray-700">❌ Vita limitata</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Torsiometro Wireless</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-left">
                    <p className="text-gray-700">✅ Nessuna usura meccanica</p>
                    <p className="text-gray-700">✅ Manutenzione minima</p>
                    <p className="text-gray-700">✅ Resistente ad ambienti estremi</p>
                    <p className="text-gray-700">✅ Segnale pulito e stabile</p>
                    <p className="text-gray-700">✅ Durata estesa</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Perfetto per il tuo asse rotante
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Per ingegneri meccanici, progettisti di macchinari rotanti, 
            e costruttori OEM in agricoltura e industria pesante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact?type=OEM">
                Parla con un ingegnere
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
              <Link to="/contact?type=OEM&torsiometro=yes">
                Ordina versione OEM
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TorsiometroWireless;
