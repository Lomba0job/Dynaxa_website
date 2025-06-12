
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Lightbulb, Clock, Wrench, Target } from 'lucide-react';

const CustomPage = () => {
  const challenges = [
    "Requisiti tecnici non convenzionali",
    "Timeline ristrette per prototipazione",
    "Budget o volumi fuori dallo standard"
  ];

  const process = [
    {
      step: "1",
      title: "Analisi con il team R&D",
      time: "entro 48h",
      description: "Valutazione tecnica e fattibilità della soluzione richiesta"
    },
    {
      step: "2", 
      title: "Prototipazione rapida",
      time: "< 2 settimane",
      description: "Sviluppo e test del primo prototipo funzionale"
    },
    {
      step: "3",
      title: "Validazione tecnica",
      time: "sul campo",
      description: "Test in condizioni reali e ottimizzazione performance"
    },
    {
      step: "4",
      title: "Scaling con partner",
      time: "Zemick™",
      description: "Produzione scalabile con partner certificati"
    }
  ];

  const sectors = [
    {
      title: "Aerospace & Space-ready",
      description: "Electronics per applicazioni aerospaziali e ambienti estremi",
      icon: "🚀"
    },
    {
      title: "Ricerca scientifica",
      description: "Strumentazione per laboratori universitari e centri di ricerca",
      icon: "🔬"
    },
    {
      title: "Manifattura avanzata",
      description: "Additive manufacturing e processi produttivi sperimentali",
      icon: "🏭"
    },
    {
      title: "Settori sperimentali",
      description: "Mercati emergenti e applicazioni ad alto rischio",
      icon: "⚡"
    }
  ];

  const useCases = [
    {
      title: "Sensori per ambienti ipertermici",
      description: "Operatività oltre 200°C per applicazioni industriali estreme",
      icon: "🔥"
    },
    {
      title: "Strumentazione robotica accademica",
      description: "Dispositivi per laboratori di ricerca e progetti universitari",
      icon: "🎓"
    },
    {
      title: "Dispositivi portatili geofisica",
      description: "Sensori rugged per misurazioni ambientali e geologiche",
      icon: "🌍"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 border-indigo-200">
              🧪 Custom & Emerging Markets
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluzioni personalizzate per 
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> mercati emergenti</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Adattiamo i nostri sistemi sensoriali a ogni sfida tecnica, 
              anche nei contesti più estremi e nei mercati non standard.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600">
              <Link to="/contact?topic=custom">
                Parla con un ingegnere Dynaxa
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
                Quando le soluzioni preconfezionate non bastano
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ogni mercato emergente presenta sfide uniche che richiedono 
                approcci innovativi e soluzioni su misura.
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
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <div className="w-full h-64 bg-indigo-200 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 text-lg font-medium">
                  📊 Grafico "fit for use" vs "soluzione generica"
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dal concept alla serie pilota in tempi rapidi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processo strutturato per trasformare le tue idee più innovative 
              in soluzioni sensoriali concrete e scalabili.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-indigo-600 font-medium">
                    {step.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mt-12">
            <div className="w-full h-64 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 text-lg font-medium">
                🔄 Infografica del flusso di co-progettazione
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Sectors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologia Dynaxa in settori sperimentali
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esploriamo continuamente nuovi mercati e applicazioni 
              per ampliare i confini della tecnologia sensoriale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {sector.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {sector.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/blog/whitepapers">
                Whitepapers e casi reali
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Flexible Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sensori su misura, uscite configurabili
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flessibilità totale nella progettazione per soddisfare 
              anche i requisiti più specifici e non standard.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-indigo-700">
                  Sensori Custom
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  Strain, pressione, torque, vibrazionali progettati su specifiche esatte
                </p>
                <div className="text-sm text-gray-500">
                  • Range personalizzati<br/>
                  • Fattori di forma specifici<br/>
                  • Materiali per ambienti estremi
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-purple-700">
                  Output Configurabili
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  Interfacce personalizzate per ogni tipo di sistema
                </p>
                <div className="text-sm text-gray-500">
                  • SPI, UART, CAN, I2C<br/>
                  • BLE e protocolli wireless<br/>
                  • Ethernet industriale
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-green-700">
                  Form Factor Custom
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  Dimensioni e forme adattate alla tua applicazione
                </p>
                <div className="text-sm text-gray-500">
                  • Rotondi, flessibili, rugged<br/>
                  • Certificazione IP67+<br/>
                  • Housing personalizzati
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/technology#sensor-types">
                Scopri tutti i tipi di sensori
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
              Progetti nati da esigenze non standard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esempi reali di come trasformiamo sfide tecniche complesse 
              in soluzioni innovative e funzionali.
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

      {/* OEM-as-a-Service */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partnership tecnologica, non solo fornitura
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Forniamo design, supporto e scaling. Ideale per chi cerca innovazione rapida 
              senza dover partire da zero.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-2">Design su misura</h3>
                <p className="text-gray-600">Progettazione hardware e firmware personalizzati</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-lg font-semibold mb-2">Supporto tecnico</h3>
                <p className="text-gray-600">Assistenza continua durante sviluppo e produzione</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-lg font-semibold mb-2">Scaling</h3>
                <p className="text-gray-600">Dalla prototipazione alla produzione di massa</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold mb-2">Time-to-market</h3>
                <p className="text-gray-600">Accelerazione dei tempi di sviluppo</p>
              </div>
            </div>
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
                  Posso richiedere un sensore con dimensioni specifiche?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sì, lavoriamo anche su form factor custom per adattarci perfettamente alla tua applicazione.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Offrite supporto per ambienti estremi?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sì, anche oltre IP67 per alta quota, alte temperature e condizioni particolarmente severe.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Supportate integrazione wireless?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sì, anche BLE, Zigbee e altri protocolli wireless su richiesta per dispositivi mobili.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Quali sono i tempi minimi per un prototipo?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tipicamente meno di 2 settimane per un primo prototipo funzionale, dopo analisi iniziale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hai una sfida tecnica unica?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Parliamo di come possiamo trasformare la tua idea in una soluzione sensoriale innovativa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact?type=OEM&custom=yes">
                Richiedi un consulto personalizzato
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
              <Link to="/technology#whitepapers">
                Scarica Modello OEM-as-a-Service
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomPage;
