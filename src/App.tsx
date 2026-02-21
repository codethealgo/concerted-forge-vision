import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import MechanicalInstallation from "./pages/MechanicalInstallation";
import CivilInfrastructure from "./pages/CivilInfrastructure";
import StructuralSteel from "./pages/StructuralSteel";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SolarMounting from "./pages/SolarMounting";
import AluminiumFrames from "./pages/AluminiumFrames";
import EPCBestPractices from "./pages/EPCBestPractices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mechanical-installation" element={<MechanicalInstallation />} />
          <Route path="/civil-infrastructure" element={<CivilInfrastructure />} />
          <Route path="/structural-steel" element={<StructuralSteel />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/solar-mounting" element={<SolarMounting />} />
          <Route path="/aluminium-frames" element={<AluminiumFrames />} />
          <Route path="/epc-best-practices" element={<EPCBestPractices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
