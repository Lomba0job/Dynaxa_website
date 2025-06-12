
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Target, Zap, Settings, Shield } from 'lucide-react';

const SigmaLow = () => {
  const features = [
    "2 canali di acquisizione indipendenti",
    "Filtraggio sincrono su doppia cella (anti-vibrazione)",
    "Sampling rate regolabile: 50 – 1200 sps",
    "Interfaccia CANbus nativa",
    "Possibilità di autodiagnosi, controllo remoto, logging interno"
  ];

  const useCases = [
    {
      title: "Checkweigher farmaceutici",
      description: "Controllo qualità per IMA SpA e altri produttori di linee farmaceutiche",
      icon: "🧪"
    },
    {
      title: "Linee confezionamento cannabis",
      description: "Pesatura precisione estrema per prodotti ad alto valore",
      icon: "🌿"
    },
    {
      title: "Impianti industriali vibranti",
      description: "Misure stabili anche in presenza di vibrazioni meccaniche intense",
      icon: "🏭"
    },
    {
      title: "AI Distillato integrato",
      description: "Combinazione con algoritmi AI per pesature intelligenti automatiche",
      icon: "🧠"
    }
  ];

  const specs = [
    {
      category: "Precisione",
      value: "±5 mg reali",
      description: "19.5 bit netti di risoluzione effettiva",
      icon: "🎯"
    },
    {
      category: "Canali", 
      value: "2 celle indipendenti",
      description: "Sincronizzazione doppia cella per anti-vibrazione",
      icon: "📦"
    },
    {
      category: "Uscite",
      value: "CANbus",
      description: "SPI, UART opzionali per massima flessibilità",
      icon: "🔗"
    },
    {
      category: "Features",
      value: "AI anti-vibrazione",
      description: "Logging onboard, filtro custom configurabile",
      icon: "🔍"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-red-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
              ⚖️ Sigma Low - Ultra Precision
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Precisione milligrammica. 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Zero compromessi.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Sigma Low è la scheda ultra-low-noise progettata per ottenere misure affidabili 
              fino a ±5 mg, anche in ambienti critici e su sistemi vibranti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600">
                <Link to="/contact?type=OEM">
                  Richiedi una scheda demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#datasheet">
                  Scarica PDF tecnico
                </Link>
              </Button>
            </div>
            <div className="flex justify-center space-x-8 text-sm">
              <Badge variant="outline" className="bg-blue-50 border-blue-200">
                ✔️ 19.5 bit reali di precisione
              </Badge>
              <Badge variant="outline" className="bg-green-50 border-green-200">
                ✔️ Fino a 1200 campioni al secondo
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Schema Specifiche in Evidenza
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una scheda di acquisizione per celle di carico che consente misure 
              estremamente precise in condizioni dinamiche.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <Card key={index} className="text-center border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-3xl mb-2">{spec.icon}</div>
                  <CardTitle className="text-lg font-semibold text-orange-700">
                    {spec.category}
                  </CardTitle>
                  <CardDescription className="text-orange-600 font-medium">
                    {spec.value}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    {spec.description}
                  </p>
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
                Sigma Low è una scheda di acquisizione per celle di carico che consente 
                misure estremamente precise in condizioni dinamiche. Progettata per ambienti 
                industriali e farmaceutici, è compatibile con algoritmi AI integrati e può essere 
                accoppiata a moduli di compensazione come AI Distillato o Anti-Deriva.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-full h-64 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-orange-600 text-lg font-medium">
                  📊 Grafico output vs tempo (con e senza filtro)
                </span>
              </div>
              <p className="text-gray-600 text-center">
                Visualizzazione della stabilità nel tempo con compensazione anti-vibrazione attiva
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funzionalità Avanzate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Progettato per ambienti industriali e farmaceutici che richiedono 
              il massimo livello di precisione e affidabilità.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Doppio Canale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  2 canali di acquisizione indipendenti con sincronizzazione
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Anti-Vibrazione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Filtraggio sincrono su doppia cella per cancellazione vibrazioni
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Sampling Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Regolabile da 50 a 1200 sps per ottimizzazione applicazione
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">CANbus Nativo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Interfaccia CANbus integrata con autodiagnosi e logging
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Simulation */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simulazione - Precisione e Stabilità nel Tempo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Grafico interattivo che mostra le prestazioni di Sigma Low 
              in diverse condizioni operative.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-full h-96 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-orange-600 text-2xl font-medium mb-4 block">
                  📊 Simulazione Interattiva
                </span>
                <p className="text-gray-600 max-w-md">
                  Controlli per modificare frequenza di vibrazione, tipo di filtro, 
                  configurazione cella singola vs doppia sincronizzata
                </p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Frequenza Vibrazione</h4>
                <div className="w-full h-4 bg-red-300 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">Simulazione disturbi meccanici</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Filtro Attivo</h4>
                <div className="w-full h-4 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">Manuale vs AI automatico</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Configurazione</h4>
                <div className="w-full h-4 bg-green-500 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">Singola vs doppia cella</p>
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
              Applicazioni reali che dimostrano l'efficacia di Sigma Low 
              in contesti industriali di alta precisione.
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
              Visual 3D - Layout e Installazione
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Esplora la scheda Sigma Low in dettaglio con il nostro render interattivo 3D
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-full h-96 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-orange-600 text-2xl font-medium mb-4 block">
                    🖥️ Render Interattivo 3D
                  </span>
                  <p className="text-gray-600 max-w-md">
                    Visualizzazione dettagliata della scheda Sigma Low 
                    con specifiche di installazione e connessioni
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
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-orange-700">
                  📄 PDF Tecnico Dettagliato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specifiche complete, diagrammi elettrici, dimensioni meccaniche
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="#pdf-sigma-low">
                    Scarica PDF completo
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-700">
                  🔌 Guida Integrazione
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Interfacce CAN/SPI e protocolli di comunicazione supportati
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/technology#interfaces">
                    Guida CAN/SPI
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-purple-700">
                  🧠 Algoritmi Compatibili
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Integrazione con AI Distillato, Anti-Deriva e altri algoritmi
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/technology">
                    Esplora tecnologie
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Precisione estrema per le tue applicazioni critiche
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Perfetto per ingegneri che cercano precisione estrema 
            e aziende che lavorano in ambienti con interferenze e vibrazioni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact?type=OEM">
                Contatta un esperto Dynaxa
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
              <Link to="/contact?type=OEM&tech=sigma-low">
                Richiedi scheda di test
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SigmaLow;
