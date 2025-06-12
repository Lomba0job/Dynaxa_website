
import React from 'react';
import { Zap, Target, RotateCcw, Thermometer } from 'lucide-react';

const RoboticsSpecs = () => {
  const specs = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Latenza",
      value: "< 1ms",
      description: "per controllo real-time",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precisione",
      value: "±0.1%",
      description: "full scale",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Frequenza",
      value: "10 kHz",
      description: "sampling rate",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Range Termico",
      value: "-40°C / +85°C",
      description: "operativo garantito",
      color: "from-purple-400 to-violet-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTM2IDM0djIwaDIwdi0yaDJWMzZoLTJ2MmgtMjB2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Specifiche Tecniche Robotica
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Prestazioni certificate per le applicazioni robotiche più esigenti
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {spec.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{spec.title}</h3>
                <div className="text-3xl font-bold text-blue-300 mb-2">{spec.value}</div>
                <p className="text-blue-100 text-sm">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoboticsSpecs;
