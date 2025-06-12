
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RoboticsFAQ = () => {
  const faqs = [
    {
      question: "I sensori Dynaxa sono compatibili con EtherCAT?",
      answer: "Sì, tramite modulo dedicato per comunicazione diretta ad alta velocità."
    },
    {
      question: "Supportate la calibrazione automatica?",
      answer: "Sì, con AI embedded per compensazione continua e auto-zero dinamico."
    },
    {
      question: "Sono compatibili con framework ROS2?",
      answer: "Sì, forniamo driver e interfacce native per integrazione diretta."
    },
    {
      question: "Quale è la frequenza massima di campionamento?",
      answer: "Fino a 10 kHz per applicazioni che richiedono controllo ad altissima velocità."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Domande Frequenti
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoboticsFAQ;
