
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, Target, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precisione',
      description: 'Costruiamo con precisione, testiamo con metodo, e ottimizziamo con AI'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovazione',
      description: 'Sviluppiamo tecnologie all\'avanguardia per superare i limiti dei sensori convenzionali'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Partnership',
      description: 'Collaboriamo strettamente con i nostri clienti dalla prototipazione alla produzione di serie'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Qualità',
      description: 'Standard industriali elevati con certificazioni ISO e test ambientali rigorosi'
    }
  ];

  const team = [
    {
      area: 'Ingegneria Elettronica',
      description: 'Design di circuiti embedded e firmware AI-ready per ambienti critici'
    },
    {
      area: 'Sensoristica Avanzata',
      description: 'Sviluppo di algoritmi di compensazione e elaborazione del segnale'
    },
    {
      area: 'Meccanica Applicata',
      description: 'Progettazione meccanica e packaging per applicazioni industriali'
    },
    {
      area: 'UX Tecnica',
      description: 'Design di interfacce embedded e strumenti di diagnostica'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Chi Siamo – 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Dynaxa</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Un team multidisciplinare dedicato allo sviluppo di sistemi sensoriali intelligenti 
            per OEM e ingegneri che affrontano le sfide più critiche di misura e precisione.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900">Missione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 leading-relaxed">
                  Progettiamo e costruiamo sistemi sensoriali intelligenti per OEM e ingegneri che affrontano 
                  sfide critiche di misura, precisione e affidabilità. La nostra tecnologia nasce per adattarsi, 
                  migliorare e superare i limiti dei sensori convenzionali.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-900">Visione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-800 leading-relaxed">
                  Rendere accessibili tecnologie sensoriali intelligenti in ogni settore ad alta intensità tecnica, 
                  dall'agricoltura di precisione alla robotica chirurgica, democratizzando l'accesso 
                  all'innovazione AI embedded.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Valori
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principi che guidano ogni nostra decisione e ogni progetto che realizziamo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Il Team Dynaxa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un team multidisciplinare con competenze specializzate in ogni aspetto dello sviluppo sensoriale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-600">
                    {member.area}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production & Quality */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Production Scale & Filiera
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Dalla prototipazione alla produzione di serie, garantiamo qualità e affidabilità 
                attraverso partnership strategiche e processi certificati.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-700"><strong>Filiera elettronica italiana</strong> certificata ISO</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-700"><strong>Test ambientali</strong> su ogni modulo (vibrazioni, temperatura, EMI)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-700"><strong>Packaging tecnico</strong> personalizzabile per OEM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-700"><strong>Supporto firmware</strong> e tool di diagnostica remota</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Partnership Strategiche</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Zemick™</h4>
                  <p className="text-gray-600">Partner di produzione per scaling industriale e quality assurance</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Università & Ricerca</h4>
                  <p className="text-gray-600">Collaborazioni con centri di ricerca per l'innovazione continua</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Distributori Specializzati</h4>
                  <p className="text-gray-600">Rete di partner tecnici per supporto locale e internazionale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cosa Dicono i Nostri Clienti
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-8">
                <blockquote className="text-lg text-gray-700 mb-6">
                  "Con Daisy abbiamo integrato sensori e attuatori in un solo modulo, 
                  riducendo i costi e migliorando l'affidabilità del nostro sistema di packaging."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white font-semibold">CTO</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Azienda Packaging</div>
                    <div className="text-gray-600">Cliente OEM</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-8">
                <blockquote className="text-lg text-gray-700 mb-6">
                  "Sigma Low ha portato la precisione che cercavamo in ambienti dove ogni milligrammo conta. 
                  La stabilità nel tempo è impressionante."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white font-semibold">QM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Responsabile Qualità</div>
                    <div className="text-gray-600">Settore Farmaceutico</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto a collaborare con noi?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contattaci per scoprire come le nostre tecnologie possono risolvere le tue sfide specifiche
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Contatta Dynaxa per una collaborazione
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Link to="/technology">
                Esplora le nostre tecnologie
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
