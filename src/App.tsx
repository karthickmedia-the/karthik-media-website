import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import WebdesignService from "./pages/WebdesignService";
import SeoService from "./pages/SeoService";
import MetaAdsService from "./pages/MetaAdsService";
import ContentCreationService from "./pages/ContentCreationService";
import GoogleAdsService from "./pages/GoogleAdsService";
import FunnelsAutomationService from "./pages/FunnelsAutomationService";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/webdesign" element={<WebdesignService />} />
            <Route path="/services/seo" element={<SeoService />} />
            <Route path="/services/meta-ads" element={<MetaAdsService />} />
            <Route path="/services/content-creation" element={<ContentCreationService />} />
            <Route path="/services/google-ads" element={<GoogleAdsService />} />
            <Route path="/services/funnels-automation" element={<FunnelsAutomationService />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingWhatsApp />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
