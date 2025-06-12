
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requestType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Richiesta inviata!",
      description: "Ti contatteremo entro 24 ore per discutere delle tue esigenze.",
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      requestType: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Parla direttamente con un 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ingegnere Dynaxa</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Ogni progetto inizia da una buona conversazione. Raccontaci le tue esigenze tecniche 
            e troveremo la soluzione più adatta.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold">Email Diretta</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@dynaxa.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  info@dynaxa.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold">Telefono</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+393474711935" className="text-purple-600 hover:text-purple-800 font-medium">
                  +39 347 4711935
                </a>
                <p className="text-gray-500 text-sm mt-1">(Italia)</p>
              </CardContent>
            </Card>

            <Card className="text-center border-indigo-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold">Sede Operativa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Via Innovazione 12<br />
                  20145 Milano (MI)<br />
                  Italy
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Modulo di Contatto
                </CardTitle>
                <CardDescription>
                  Compila il form e ti ricontatteremo entro 24 ore
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome e Cognome *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Azienda / Ente</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="requestType">Tipologia richiesta</Label>
                    <Select value={formData.requestType} onValueChange={(value) => handleInputChange('requestType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Seleziona il tipo di richiesta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Richiesta demo</SelectItem>
                        <SelectItem value="oem">Integrazione OEM</SelectItem>
                        <SelectItem value="support">Supporto tecnico su scheda</SelectItem>
                        <SelectItem value="quote">Preventivo</SelectItem>
                        <SelectItem value="partnership">Partnership / ricerca</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Messaggio / Specifiche tecniche *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Descrivi le tue esigenze tecniche, i requisiti del progetto o le domande che hai..."
                      required
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" size="lg">
                    Invia Richiesta
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-900">
                    Azioni Rapide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href="mailto:info@dynaxa.com?subject=Richiesta%20Call%20Tecnica">
                      💡 Prenota una call tecnica personalizzata
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href="#" download>
                      📎 Scarica Company Profile PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    <CardTitle className="text-lg font-semibold text-green-900">
                      Tempi di Risposta
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-green-800">
                    <li>• <strong>Email:</strong> Entro 24 ore</li>
                    <li>• <strong>Richieste tecniche:</strong> Entro 48 ore</li>
                    <li>• <strong>Preventivi OEM:</strong> Entro 72 ore</li>
                    <li>• <strong>Urgenze:</strong> Chiama direttamente</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Link Rapidi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <a href="/technology" className="block text-blue-600 hover:text-blue-800">
                      🔧 Supporto tecnico
                    </a>
                    <a href="/technology#pdf" className="block text-blue-600 hover:text-blue-800">
                      📄 Schede tecniche e PDF
                    </a>
                    <a href="/applications" className="block text-blue-600 hover:text-blue-800">
                      🤖 Trova la tua applicazione
                    </a>
                    <a href="/about" className="block text-blue-600 hover:text-blue-800">
                      🤝 Scopri chi siamo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            Tutti i dati inseriti nel modulo saranno trattati in conformità al GDPR (UE 2016/679) 
            e non verranno condivisi con terze parti. 
            <a href="/privacy" className="text-blue-600 hover:text-blue-800 ml-1">
              Consulta la nostra Informativa sulla Privacy
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
