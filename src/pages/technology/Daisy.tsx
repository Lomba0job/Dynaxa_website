
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Cpu, Zap, Settings, Wifi } from 'lucide-react';

const Daisy = () => {
  const features = [
    "Supporto per 4 celle di carico simultanee",
    "Controllo attuatori via I/O digitali o PWM",
    "Comunicazione con sistemi industriali (PLC, gateway, cloud)",
    "Logging locale e autodiagnosi",
    "Firmware personalizzabile: C, C++ o MicroPython"
  ];

  const applications = [
    {
      title: "Contatori capsule",
      description: "Controllo preciso di dosaggio e conteggio per industria farmaceutica",
      icon: "💊"
    },
    {
      title: "Vassoi magazzini automatici",
      description: "Gestione inventario real-time con pesatura dinamica integrata",
      icon: "📦"
    },
    {
      title: "Sistemi irrigazione",
      description: "Controllo pianta per pianta con sensori peso e attuatori integrati",
      icon: "🌱"
    },
    {
      title: "Pesi dinamici compensati",
      description: "Misure in tempo reale con compensazione AI automatica",
      icon: "⚖️"
    }
  ];

  const specs = [
    {
      category: "Ingressi",
      items: ["5 digital IN", "2 PWM OUT"],
      icon: "🧩"
    },
    {
      category: "Uscite", 
      items: ["5 digital OUT", "Supporto 4 celle di carico"],
      icon: "⚙️"
    },
    {
      category: "Connettività",
      items: ["Modbus, CANbus", "MQTT, WiFi, BLE"],
      icon: "🔌"
    },
    {
      category: "Intelligenza",
      items: ["Firmware AI-ready", "Programmabile in C / MicroPython"],
      icon: "🧠"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              🧠 Daisy - Scheda AI Multifunzione
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Una sola scheda. 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Tutto il controllo.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Daisy integra sensori, logica e connettività in un modulo AI-ready 
              pronto per ambienti critici. Tutto-in-uno: Condizionamento segnale + Logica + Output + Comunicazione.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600">
                <Link to="/contact?type=OEM">
                  Richiedi una demo OEM
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#datasheet">
                  Scarica scheda tecnica
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specifiche Tecniche in Evidenza
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una scheda progettata per sostituire intere catene PLC e condizionatori legacy, 
              abbattendo costi e tempi di sviluppo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {specs.map((spec, index) => (
              <Card key={index} className="text-center border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-3xl mb-2">{spec.icon}</div>
                  <CardTitle className="text-lg font-semibold text-purple-700">
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
          
          <div className="text-center">
            <Badge className="bg-green-100 text-green-800 border-green-200 text-lg px-4 py-2">
              💰 Risparmia fino al 70% sui costi hardware tradizionali
            </Badge>
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
                Daisy è una scheda embedded progettata per sostituire intere catene PLC 
                e condizionatori legacy, abbattendo costi e tempi. Supporta misure dinamiche, 
                controllo attuatori, comunicazione edge e algoritmi AI, il tutto in un unico modulo robusto e compatto.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-full h-64 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-purple-600 text-lg font-medium">
                  🖥️ Rendering 3D interattivo della scheda Daisy
                </span>
              </div>
              <p className="text-gray-600 text-center">
                Visualizzazione 3D che mostra layout, connettori e componenti principali
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
              Progettata per la massima flessibilità e facilità di integrazione 
              in qualsiasi sistema esistente o nuovo progetto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">4 Celle di Carico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Supporto simultaneo per misure multi-punto con sincronizzazione
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">I/O Digitali</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Controllo diretto di attuatori, relay e dispositivi esterni
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Connettività</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Comunicazione con PLC, gateway e cloud tramite protocolli standard
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">AI Embedded</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Algoritmi AI integrati per elaborazione intelligente dei dati
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Esempi di Applicazione
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tutti realizzati con una singola scheda Daisy, dimostrando 
              la versatilità e potenza del nostro approccio integrato.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {app.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">
                    {app.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dettagli Tecnici e Integrazione
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-700">
                  📄 Documentazione Tecnica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  PDF tecnico completo con specifiche elettriche, meccaniche e software
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="#pdf-daisy">
                    Scarica PDF completo
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-purple-700">
                  🔌 API e Protocolli
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Interfacce di comunicazione e protocolli supportati per integrazione
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/technology#interfaces">
                    API / Protocolli
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-green-700">
                  🧠 Firmware AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Algoritmi AI integrabili e possibilità di personalizzazione firmware
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/technology#ai-processing">
                    AI integrabile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3D Rendering Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Rendering Tecnico + Circuito 3D
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Esplora la scheda Daisy in dettaglio con la nostra anteprima 3D interattiva
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-purple-600 text-2xl font-medium mb-4 block">
                    🖥️ Anteprima 3D Interattiva
                  </span>
                  <p className="text-gray-600 max-w-md">
                    Visualizzazione WebGL interattiva della scheda Daisy 
                    con dettagli su componenti, connettori e layout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Savings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Confronto Costi: Tradizionale vs Daisy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700">Soluzione Tradizionale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-left">
                    <p className="text-gray-700">• PLC + moduli I/O</p>
                    <p className="text-gray-700">• Condizionatori di segnale separati</p>
                    <p className="text-gray-700">• Gateway di comunicazione</p>
                    <p className="text-gray-700">• Cablaggi complessi</p>
                    <p className="text-gray-700">• Programmazione custom</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-red-200">
                    <p className="text-red-600 font-semibold">Costo tipico: 100%</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Soluzione Daisy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-left">
                    <p className="text-gray-700">• Scheda Daisy all-in-one</p>
                    <p className="text-gray-700">• Condizionamento integrato</p>
                    <p className="text-gray-700">• Comunicazione nativa</p>
                    <p className="text-gray-700">• Cablaggio semplificato</p>
                    <p className="text-gray-700">• Firmware pre-configurato</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-200">
                    <p className="text-green-600 font-semibold">Risparmio: fino al 70%</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto a semplificare il tuo sistema?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Scopri come Daisy può sostituire la tua attuale catena di controllo 
            con una soluzione integrata e intelligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact?type=OEM">
                Parla con un Ingegnere
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
              <Link to="#datasheet">
                Scarica Whitepaper
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Daisy;
