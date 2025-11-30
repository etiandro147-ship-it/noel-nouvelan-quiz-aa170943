import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Curiosites from "./pages/Curiosites";
import Newsletter from "./pages/Newsletter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Contact from "./pages/Contact";
import CookiePolicy from "./pages/CookiePolicy";
import AboutUs from "./pages/AboutUs";
import LegalDisclaimer from "./pages/LegalDisclaimer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/curiosites" element={<Curiosites />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
          <Route path="/conditions-utilisation" element={<TermsOfUse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/politique-cookies" element={<CookiePolicy />} />
          <Route path="/a-propos" element={<AboutUs />} />
          <Route path="/mentions-legales" element={<LegalDisclaimer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
