
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Applications from "./pages/Applications";
import AgricolturaPage from "./pages/applications/AgricolturaPage";
import ImballaggioPage from "./pages/applications/ImballaggioPage";
import IndustrialePage from "./pages/applications/IndustrialePage";
import MedicalePage from "./pages/applications/MedicalePage";
import RoboticaPage from "./pages/applications/RoboticaPage";
import CustomPage from "./pages/applications/CustomPage";
import Technology from "./pages/Technology";
import AiDistillato from "./pages/technology/AiDistillato";
import AntiDeriva from "./pages/technology/AntiDeriva";
import Daisy from "./pages/technology/Daisy";
import SigmaLow from "./pages/technology/SigmaLow";
import TorsiometroWireless from "./pages/technology/TorsiometroWireless";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/applications/agricoltura" element={<AgricolturaPage />} />
            <Route path="/applications/imballaggio" element={<ImballaggioPage />} />
            <Route path="/applications/industriale" element={<IndustrialePage />} />
            <Route path="/applications/medicale" element={<MedicalePage />} />
            <Route path="/applications/robotica" element={<RoboticaPage />} />
            <Route path="/applications/custom" element={<CustomPage />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/technology/ai-distillato" element={<AiDistillato />} />
            <Route path="/technology/anti-deriva" element={<AntiDeriva />} />
            <Route path="/technology/daisy" element={<Daisy />} />
            <Route path="/technology/sigma-low" element={<SigmaLow />} />
            <Route path="/technology/torsiometro-wireless" element={<TorsiometroWireless />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
