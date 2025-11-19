import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Link } from "react-router-dom";
import { useState } from "react";
import EmuskiLogoMain from "@/assets/EMUSKI_logo.svg";
import EmuskiIcon from "@/assets/3.icon.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { label: "Brand Guidelines", href: "/" },
    { label: "Logo", href: "/logo" },
    { label: "Typography", href: "/typography" },
    { label: "Color", href: "/color" },
    { label: "Art Direction", href: "/art-direction" },
    { label: "Brand in Use", href: "/brand" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--hero-bg))]/95 backdrop-blur-sm border-b border-[hsl(var(--grid-line))]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={EmuskiIcon} 
              alt="EMUSKI Icon" 
              className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-2xl font-semibold tracking-tight text-[hsl(var(--hero-text))] group-hover:text-[#4fd3d4] transition-colors duration-300">
              EMUSKI
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 text-sm text-[hsl(var(--hero-text))]/80 hover:text-[#4fd3d4] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-[hsl(var(--hero-text))] hover:bg-[hsl(var(--grid-line))] hover:text-[#4fd3d4] transition-colors"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="bg-[hsl(var(--hero-bg))] border-[hsl(var(--grid-line))] w-[300px] sm:w-[400px] flex flex-col"
          >
            <div className="flex flex-col gap-6 h-full">
              <div className="flex items-center gap-3 pb-4 border-b border-[hsl(var(--grid-line))]">
                <img 
                  src={EmuskiIcon} 
                  alt="EMUSKI Icon" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-semibold text-[hsl(var(--hero-text))]">
                  EMUSKI
                </span>
              </div>
              
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <Link
                      to={link.href}
                      className="text-lg text-[hsl(var(--hero-text))]/80 hover:text-[#4fd3d4] transition-colors py-3 px-4 rounded-md hover:bg-[hsl(var(--grid-line))]/20 border border-transparent hover:border-[hsl(var(--grid-line))]/30"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              
              <div className="mt-auto pt-6 border-t border-[hsl(var(--grid-line))]">
                <p className="text-sm text-[hsl(var(--hero-text))]/60 text-center italic">
                  "You design it We build it"
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
