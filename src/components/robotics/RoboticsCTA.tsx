
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const RoboticsCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbC1ydWxlPSJub256ZXJvIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Lavoriamo con costruttori robotici
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Per soluzioni su misura. Dal prototipo al prodotto finito.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6">
            <Link to="/contact?type=OEM">
              Parla con un Ingegnere
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6">
            <Link to="/technology#pdf">
              <Download className="mr-2 w-5 h-5" />
              Scarica Scheda Tecnica
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoboticsCTA;
