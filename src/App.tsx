import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Installations from "./pages/Installations";
//import Products from "./pages/Products"; // ✅ Newly added page
import NotFound from "./pages/NotFound";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import Products from "./pages/Products";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* ✅ Ensures top scroll on route change */}

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/installation" element={<Installations />} />
          <Route path="/products" element={<Products/>} /> {/* ✅ New Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
