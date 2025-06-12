
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Settings, Zap } from 'lucide-react';

const RoboticsHero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGZpbGwtcnVsZT0ibm9uemVybyI+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <Badge className="mb-6 bg-blue-100/10 text-blue-100 border-blue-300/20 backdrop-blur-sm">
            <Settings className="w-4 h-4 mr-2" />
            Robotica Avanzata
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Feedback in tempo reale per 
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent mt-2">
              robot più intelligenti
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            Sensori AI-ready per il controllo preciso e ad alta velocità, 
            in ambienti dinamici e multi-asse con sincronizzazione perfetta.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 text-lg px-8 py-6">
            <Link to="/contact?topic=robotics">
              Richiedi una demo robotica
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoboticsHero;
