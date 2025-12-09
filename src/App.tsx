import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WebdesignService from "./pages/WebdesignService";
import SeoService from "./pages/SeoService";
import MetaAdsService from "./pages/MetaAdsService";
import ContentCreationService from "./pages/ContentCreationService";
import GoogleAdsService from "./pages/GoogleAdsService";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/webdesign" element={<WebdesignService />} />
          <Route path="/services/seo" element={<SeoService />} />
          <Route path="/services/meta-ads" element={<MetaAdsService />} />
          <Route path="/services/content-creation" element={<ContentCreationService />} />
          <Route path="/services/google-ads" element={<GoogleAdsService />} />
          <Route path="/careers" element={<Careers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
