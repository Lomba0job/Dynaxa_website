
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Zap, TrendingUp, Cpu } from 'lucide-react';

const AiDistillato = () => {
  const benefits = [
    "Velocità di ciclo raddoppiata",
    "Accuratezza >2.5× rispetto al metodo tradizionale",
    "Riduzione interventi manuali e manutenzione",
    "Integrazione facile con moduli Daisy e Sigma Low"
  ];

  const useCases = [
    {
      title: "Checkweigher farmaceutici e alimentari",
      description: "Controllo qualità automatizzato per prodotti che richiedono precisione assoluta",
      icon: "💊"
    },
    {
      title: "Sistemi di selezione automatica",
      description: "Classificazione ad alta cadenza con riduzione drastica degli scarti",
      icon: "🏭"
    },
    {
      title: "Ambienti vibranti",
      description: "Ottimizzazione di misure dinamiche anche in presenza di disturbi meccanici",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              🧠 Algoritmo AI Distillato
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ottimizzazione autonoma 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> delle misure</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Tecnologia software sviluppata per migliorare l'accuratezza della pesatura dinamica, 
              selezionando automaticamente i campioni più stabili per il calcolo del peso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Link to="/contact?type=OEM">
                  Richiedi demo per il tuo sistema
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#whitepaper">
                  Scarica whitepaper tecnico
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
                Intelligenza artificiale distillata per dispositivi embedded
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Grazie a un processo di distillazione dell'intelligenza artificiale, 
                l'algoritmo è in grado di operare su dispositivi embedded o edge gateway 
                con risorse limitate, aumentando l'efficienza dei sistemi di controllo qualità.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Nessun intervento operatore per individuare il plateau di misura</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Funziona sia su microcontrollori embedded che su gateway edge</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Riduzione della deviazione standard fino al 50%</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Compatibilità con sistemi AI-less legacy (modalità fallback)</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="w-full h-64 bg-blue-200 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-lg font-medium">
                  📊 Visualizzazione selezione ottimale campioni
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
              Prestazioni ottimizzate per sistemi industriali che richiedono 
              velocità e precisione senza compromessi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Automazione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Nessun intervento operatore per individuare il plateau di misura
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Embedded Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Funziona su microcontrollori e gateway edge con risorse limitate
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Accuratezza</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Riduzione deviazione standard fino al 50%
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🔄</span>
                </div>
                <CardTitle className="text-lg">Compatibilità</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Sistemi AI-less legacy con modalità fallback
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
              Vantaggi Competitivi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'AI Distillato porta benefici immediati e misurabili 
              alle prestazioni del tuo sistema di pesatura.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simulazione Interattiva del Funzionamento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Visualizza come l'algoritmo seleziona dinamicamente i campioni 
              più stabili per ottenere misure precise.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-blue-600 text-2xl font-medium mb-4 block">
                  📊 Simulazione Dinamica
                </span>
                <p className="text-gray-600 max-w-md">
                  Controlli interattivi per Range di velocità (0.5 – 3.0 m/s), 
                  Numero di campioni, Visualizzazione curva peso grezzo vs AI filtrata
                </p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Segmenti Originali</h4>
                <div className="w-full h-4 bg-gray-300 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">Dati grezzi del sensore</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Segmenti AI Selezionati</h4>
                <div className="w-full h-4 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">Campioni ottimali identificati dall'AI</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Risultato Finale</h4>
                <div className="w-full h-4 bg-green-500 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">Media pesata con deviazione ridotta</p>
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
              in diversi contesti industriali.
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

      {/* Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Integrazione con Altri Moduli Dynaxa
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'AI Distillato si integra perfettamente con le altre tecnologie Dynaxa 
              per creare soluzioni complete e ottimizzate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-purple-700 flex items-center">
                  📦 Integrazione con Daisy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  La scheda multifunzione Daisy esegue l'algoritmo AI Distillato 
                  direttamente onboard per prestazioni ottimali.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/technology/daisy">
                    Scopri Daisy
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-orange-700 flex items-center">
                  ⚖️ Integrazione con Sigma Low
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Combinato con la precisione estrema di Sigma Low per applicazioni 
                  che richiedono accuratezza milligrammica.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/technology/sigma-low">
                    Scopri Sigma Low
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vuoi integrare l'algoritmo nel tuo sistema?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contattaci per una demo personalizzata e scopri come l'AI Distillato 
            può migliorare le prestazioni del tuo sistema di pesatura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact?tech=ai-distillato">
                Contattaci per demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Link to="#whitepaper">
                Consulta specifiche embedded
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiDistillato;
