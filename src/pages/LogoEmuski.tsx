import IndustrialBackground from "@/components/IndustrialBackground";
import Navigation from "@/components/Navigation";
import FooterNav from "@/components/FooterNav";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Logo1 from "@/assets/1.png";
import Logo2 from "@/assets/2.png";
import Logo3 from "@/assets/3.png";
import Logo4 from "@/assets/4.png";
import LogoIcon1 from "@/assets/1.icon.png";
import LogoIcon2 from "@/assets/2.icon.png";
import LogoIcon3 from "@/assets/3.icon.png";
import LogoIcon4 from "@/assets/4.icon.png";

const LogoEmuski = () => {
  const logoVariants = [
    { title: "Primary Logo", subtitle: "Teal on White", bg: "bg-white", image: Logo1, filename: "EMUSKI-Primary-Logo.png" },
    { title: "Logo on Dark", subtitle: "White on Dark", bg: "bg-[#2d3849]", image: Logo2, filename: "EMUSKI-Logo-White.png" },
    { title: "Logo Mark", subtitle: "Teal on Light Gray", bg: "bg-gray-100", image: Logo3, filename: "EMUSKI-Logo-Teal.png" },
    { title: "Monochrome", subtitle: "Dark on Light", bg: "bg-gray-50", image: Logo4, filename: "EMUSKI-Logo-Dark.png" },
  ];

  const iconVariants = [
    { title: "Primary Icon", subtitle: "EMUSKI Teal", bg: "bg-[#2d3849]", image: LogoIcon1, filename: "EMUSKI-Primary-Icon.png", isPrimary: true },
    { title: "Icon Reverse", subtitle: "White Version", bg: "bg-[#2d3849]", image: LogoIcon2, filename: "EMUSKI-Icon-White.png" },
    { title: "Icon Monochrome", subtitle: "Dark Version", bg: "bg-gray-50", image: LogoIcon3, filename: "EMUSKI-Icon-Dark.png" },
    { title: "Main Logo Icon", subtitle: "Brand Symbol", bg: "bg-white", image: LogoIcon4, filename: "EMUSKI-Main-Logo.png", isMainLogo: true },
  ];

  const handleDownload = (imageUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative min-h-[60vh] bg-[hsl(var(--hero-bg))] flex items-center justify-center overflow-hidden pt-20">
        <IndustrialBackground />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl">
            <div className="text-sm text-[hsl(var(--hero-text))]/60 mb-6 font-mono">01</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[hsl(var(--hero-text))] leading-[0.95]">
              Logo & Identity
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Logo System</h2>
              <p className="text-lg text-foreground/80 max-w-3xl">
                The EMUSKI logo represents precision, professionalism, and engineering excellence. 
                Our identity is built on clarity and trustworthiness—qualities essential in 
                manufacturing and cost engineering.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {logoVariants.map((variant, index) => (
                <div key={index} className="border border-border overflow-hidden group">
                  <div className={`${variant.bg} h-80 flex items-center justify-center p-8 relative overflow-hidden transition-all duration-300`}>
                    <div className="relative text-center">
                      <img 
                        src={variant.image} 
                        alt={variant.title}
                        className="w-48 h-48 object-contain mx-auto"
                      />
                    </div>
                  </div>
                  <div className="p-6 bg-card">
                    <h3 className="font-semibold text-foreground mb-1">{variant.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{variant.subtitle}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleDownload(variant.image, variant.filename)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Assets
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Icon Variations Section */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Icon Variations</h3>
              <p className="text-foreground/80 mb-8 max-w-3xl">
                The EMUSKI icon system provides flexible branding for compact applications. Each variation maintains 
                the sophisticated gear framework with elegant "a" letterform, symbolizing precision engineering 
                and seamless integration of design and manufacturing—perfectly embodying our "You design it We build it" philosophy.
              </p>
              <div className="bg-card border border-border p-8 rounded-lg mb-8">
                <h4 className="text-lg font-bold text-foreground mb-4">Design Elements & Symbolism</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-emuski-teal mb-2">Gear Framework</h5>
                    <p className="text-sm text-foreground/80">
                      The outer gear pattern represents manufacturing precision, industrial capability, 
                      and the interconnected systems that drive OEM production excellence.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-emuski-teal mb-2">Elegant Letterform</h5>
                    <p className="text-sm text-foreground/80">
                      The stylized "a" at the center embodies the artistry of design, flowing curves 
                      that transform into manufacturing reality through our expertise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {iconVariants.map((variant, index) => (
                  <div key={index} className={`border overflow-hidden group ${variant.isPrimary ? 'border-emuski-teal bg-emuski-teal/5' : variant.isMainLogo ? 'border-emuski-dark bg-emuski-dark/5' : 'border-border'}`}>
                    <div className={`${variant.bg} h-64 lg:h-72 flex items-center justify-center p-6 relative overflow-hidden transition-all duration-300`}>
                      <div className="relative text-center">
                        <img 
                          src={variant.image} 
                          alt={variant.title}
                          className="w-32 h-32 lg:w-40 lg:h-40 object-contain mx-auto"
                        />
                      </div>
                    </div>
                    <div className="p-6 bg-card">
                      <h4 className={`font-semibold mb-1 ${variant.isPrimary ? 'text-emuski-teal' : variant.isMainLogo ? 'text-emuski-dark' : 'text-foreground'}`}>{variant.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{variant.subtitle}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleDownload(variant.image, variant.filename)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Icon
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Clear Space Requirements</h3>
                <p className="text-foreground/80 mb-8 max-w-3xl">
                  Maintain adequate clear space around the logo to ensure visibility and impact. 
                  The minimum clear space should equal the height of the "E" in the wordmark.
                </p>
                <div className="border border-border p-12 flex items-center justify-center bg-card">
                  <div className="relative">
                    <div className="absolute inset-0 border-2 border-dashed border-emuski-teal/30 -m-16" />
                    <img 
                      src={Logo1} 
                      alt="EMuski Logo Clear Space" 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Minimum Size Specifications</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-border p-8 bg-card">
                    <p className="text-sm text-muted-foreground mb-4 font-semibold">Digital Media: 150px width</p>
                    <img 
                      src={Logo1} 
                      alt="EMuski Logo Digital" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="border border-border p-8 bg-card">
                    <p className="text-sm text-muted-foreground mb-4 font-semibold">Print Media: 1.5 inches width</p>
                    <img 
                      src={Logo1} 
                      alt="EMuski Logo Print" 
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Incorrect Usage</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-destructive/30 p-6 bg-card opacity-60">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-foreground" style={{ transform: 'scaleX(1.5)' }}>EMuski</div>
                    </div>
                    <p className="text-sm text-destructive font-semibold">❌ Don't stretch or distort</p>
                  </div>
                  <div className="border border-destructive/30 p-6 bg-card opacity-60">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-foreground" style={{ transform: 'rotate(-15deg)' }}>EMuski</div>
                    </div>
                    <p className="text-sm text-destructive font-semibold">❌ Don't rotate the logo</p>
                  </div>
                  <div className="border border-destructive/30 p-6 bg-gradient-to-r from-red-500 to-yellow-500 opacity-60">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-white">EMuski</div>
                    </div>
                    <p className="text-sm text-destructive font-semibold">❌ Don't use unapproved colors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterNav 
        prevPage={{
          label: "Home",
          href: "/"
        }}
        nextPage={{
          label: "Typography",
          href: "/typography"
        }}
      />
    </div>
  );
};

export default LogoEmuski;
