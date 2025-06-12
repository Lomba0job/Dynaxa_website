
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Settings, TrendingUp, Brain, Cpu, Gauge, Wifi } from 'lucide-react';

const Homepage = () => {
  const applications = [
    {
      title: 'Robotica',
      icon: '🤖',
      description: 'Feedback in tempo reale per controllo preciso',
      link: '/applications/robotica',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Medicale',
      icon: '🏥',
      description: 'Sensori medical-grade ad alta precisione',
      link: '/applications/medicale',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Agricoltura',
      icon: '🌾',
      description: 'Soluzioni rugged per ambienti critici',
      link: '/applications/agricoltura',
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Imballaggio',
      icon: '📦',
      description: 'Controllo qualità ad alta velocità',
      link: '/applications/imballaggio',
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Industriale',
      icon: '🏭',
      description: 'Automazione e controllo intelligente',
      link: '/applications/industriale',
      color: 'from-gray-600 to-gray-700'
    },
    {
      title: 'Custom',
      icon: '⚗️',
      description: 'Soluzioni personalizzate per mercati emergenti',
      link: '/applications/custom',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Embedded AI',
      description: 'Algoritmi AI integrati per elaborazione in tempo reale',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Rugged Design',
      description: 'Certificazione IP67 per ambienti critici',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Industrial Interfaces',
      description: 'Compatibilità nativa con CAN, SPI, Ethernet',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Real-Time Control',
      description: 'Controllo preciso con latenza minimale',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Idea & Concept',
      description: 'Analisi requirements e feasibility study',
      color: 'blue'
    },
    {
      number: '02',
      title: 'Prototipo',
      description: 'Sviluppo e test funzionali rapidi',
      color: 'purple'
    },
    {
      number: '03',
      title: 'Test & Validazione',
      description: 'Validazione in condizioni reali',
      color: 'indigo'
    },
    {
      number: '04',
      title: 'Serie OEM',
      description: 'Produzione scalabile con Zemick™',
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGZpbGwtcnVsZT0ibm9uemVybyI+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100/10 text-blue-100 border-blue-300/20 backdrop-blur-sm">
              <Cpu className="w-4 h-4 mr-2" />
              AI-Enhanced Sensor Systems
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                We build AI-enhanced
              </span>
              <br />
              <span className="text-white">sensor systems</span>
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Per ingegneri e OEM che necessitano di misurazioni più intelligenti, rapide e precise. 
              Le nostre unità robuste integrano compensazione multi-sensore e AI perimetrale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                <Link to="/applications">
                  Trova la tua Applicazione
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-300/30 text-blue-100 hover:bg-blue-100/10 backdrop-blur-sm">
                <Link to="/technology">
                  Scopri la nostra Tecnologia
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Overview */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Settori Serviti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluzioni sensoriali intelligenti per i mercati più esigenti
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <CardHeader className="text-center pb-4 relative">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {app.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {app.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 relative">
                  <Button asChild variant="ghost" className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 group-hover:text-blue-700 transition-all duration-300">
                    <Link to={app.link}>
                      Scopri di più
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sensor Expertise */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTM2IDM0djIwaDIwdi0yaDJWMzZoLTJ2MmgtMjB2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sensor Expertise
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Dynaxa sviluppa sistemi sensoriali embedded dotati di AI, con architetture flessibili, 
              rugged design e protocolli industriali. Le nostre tecnologie supportano sensing multi-modale 
              e elaborazione in tempo reale per ambienti critici.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/20`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Prototyping & Scaling */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Fast Prototyping & Scaling
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Dalla prototipazione rapida alla produzione di serie, supportiamo i nostri partner 
                in ogni fase del processo di sviluppo.
              </p>
              
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-10 shadow-xl">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full opacity-20"></div>
                <blockquote className="text-2xl text-gray-800 mb-8 font-medium leading-relaxed">
                  "Abbiamo ridotto il time-to-market del 60% grazie all'approccio end-to-end di Dynaxa."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-6 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Zemick™ Partner</div>
                    <div className="text-gray-600">Production Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbC1ydWxlPSJub256ZXJvIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Non sei sicuro di dove iniziare?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Parla con i nostri ingegneri per trovare la soluzione perfetta per le tue esigenze
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6">
            <Link to="/contact">
              Parla con un Ingegnere Dynaxa
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
