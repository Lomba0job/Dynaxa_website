
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Heart, Shield, Zap } from 'lucide-react';

const MedicalePage = () => {
  const challenges = [
    "Rumore elettrico e vibrazioni nei sistemi mobili",
    "Miniaturizzazione e compatibilità con processi di sterilizzazione", 
    "Richiesta di accuratezza sub-Newton e latenza minima"
  ];

  const solutions = [
    "Sensori di coppia e pressione a basso rumore",
    "Filtraggio edge-AI per eliminare artefatti",
    "PCB sterilizzabili e housing miniaturizzati"
  ];

  const components = [
    {
      title: "Range di Misura",
      description: "Da ±1 mNm a ±20 Nm per massima versatilità",
      icon: "⚖️"
    },
    {
      title: "Output Digitali",
      description: "SPI/I2C con filtri digitali AI integrati",
      icon: "🔌"
    },
    {
      title: "Wireless Ready",
      description: "Opzione wireless per wearable e dispositivi mobili",
      icon: "📡"
    }
  ];

  const useCases = [
    {
      title: "Strumenti laparoscopici",
      description: "Feedback di forza per chirurgia mininvasiva con precisione millimetrica",
      icon: "🔬"
    },
    {
      title: "Dispositivi diagnostici portatili",
      description: "Sensori embedded per analisi point-of-care e telemedicina",
      icon: "🩺"
    },
    {
      title: "Wearable per riabilitazione",
      description: "Moduli per fisioterapia e monitoraggio recupero motorio",
      icon: "💪"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              🏥 Medical Technology
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sensori AI per strumenti medicali 
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> più sicuri</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Soluzioni sensoriali ad alta integrità per dispositivi chirurgici, 
              diagnostici e wearable con precisione sub-millimetrica.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-blue-600">
              <Link to="/contact?topic=medical">
                Contatta il team medicale
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
                Affidabilità assoluta in ambienti critici
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Il settore medicale richiede standard di precisione e affidabilità 
                senza compromessi, con certificazioni rigorose e performance costanti.
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
                  🏥 Strumentazione laparoscopica con grafico real-time
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
                  🔄 Feedback real-time con noise cancellation
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sensori medical-grade con AI integrata
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tecnologia all'avanguardia per dispositivi medicali che richiedono 
                precisione estrema e compatibilità con ambienti sterili.
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

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologia sensoriale per strumenti chirurgici avanzati
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specifiche tecniche progettate per soddisfare i più rigorosi 
              standard di sicurezza e prestazioni del settore medicale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {components.map((component, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">
                    {component.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-green-700">
                    {component.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {component.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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

      {/* Medical Grade Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Componenti progettati per precisione e sicurezza
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ogni componente è sviluppato secondo standard medical-grade 
              per garantire massima affidabilità in ambito clinico.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Sensori</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Torque, pressione, strain ad alta precisione
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">PCB Medical-Grade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Conformi a sterilizzazione in autoclave
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Output</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  SPI, I2C, BLE Low-Energy
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🧠</span>
                </div>
                <CardTitle className="text-lg">AI Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Filtraggio intelligente e noise cancellation
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/technology#ai-processing">
                  AI processing
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/technology#pdf">
                  PDF tecnici
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
              Precisione applicata alla pratica clinica
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esempi concreti di come le nostre tecnologie migliorano 
              l'efficacia e la sicurezza degli strumenti medicali.
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

      {/* Medical Certifications */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Conformità e Certificazioni
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              I nostri sensori sono progettati per supportare processi 
              di certificazione medicale secondo i più rigorosi standard internazionali.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">🏥</div>
                <h3 className="text-lg font-semibold mb-2">ISO 13485</h3>
                <p className="text-gray-600">Supportiamo processi di qualità per dispositivi medicali</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">🔥</div>
                <h3 className="text-lg font-semibold mb-2">Sterilizzazione</h3>
                <p className="text-gray-600">Compatibili con sterilizzazione a vapore/autoclave</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">📡</div>
                <h3 className="text-lg font-semibold mb-2">Wireless Medical</h3>
                <p className="text-gray-600">BLE e protocolli wireless certificati per uso medicale</p>
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
                  I sensori sono certificabili per uso medicale?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sì, supportiamo processi ISO 13485 e altre certificazioni medicali richieste.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Possono essere sterilizzati?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sì, compatibili con sterilizzazione a vapore, autoclave e altri metodi standard.
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
                  Sì, BLE Low-Energy e altri protocolli wireless su richiesta per dispositivi mobili.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Qual è la precisione massima raggiungibile?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fino a precisione sub-Newton e sub-millimetrica per applicazioni chirurgiche avanzate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Collaboriamo con aziende medtech
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Per integrare intelligenza e precisione nei dispositivi di nuova generazione
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
                Scarica Whitepaper MedTech
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalePage;
