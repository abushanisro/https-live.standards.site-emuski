import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexEmuski from "./pages/IndexEmuski";
import Logo from "./pages/Logo";
import LogoEmuski from "./pages/LogoEmuski";
import Typography from "./pages/Typography";
import TypographyEmuski from "./pages/TypographyEmuski";
import Color from "./pages/Color";
import ColorEmuski from "./pages/ColorEmuski";
import ArtDirection from "./pages/ArtDirection";
import ArtDirectionEmuski from "./pages/ArtDirectionEmuski";
import Brand from "./pages/Brand";
import BrandEmuski from "./pages/BrandEmuski";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexEmuski />} />
          <Route path="/logo" element={<LogoEmuski />} />
          <Route path="/typography" element={<TypographyEmuski />} />
          <Route path="/color" element={<ColorEmuski />} />
          <Route path="/art-direction" element={<ArtDirectionEmuski />} />
          <Route path="/brand" element={<BrandEmuski />} />
          <Route path="/perplexity" element={<Index />} />
          <Route path="/perplexity/logo" element={<Logo />} />
          <Route path="/perplexity/typography" element={<Typography />} />
          <Route path="/perplexity/color" element={<Color />} />
          <Route path="/perplexity/art-direction" element={<ArtDirection />} />
          <Route path="/perplexity/brand" element={<Brand />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
