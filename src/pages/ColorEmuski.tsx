import IndustrialBackground from "@/components/IndustrialBackground";
import Navigation from "@/components/Navigation";
import FooterNav from "@/components/FooterNav";
import { Check, X } from "lucide-react";

const ColorEmuski = () => {
  const primaryColors = [
    { name: "EMUSKI Teal", hex: "#4fd3d4", rgb: "79, 211, 212", hsl: "181, 66%, 59%", usage: "Primary brand color, logo, CTAs, highlights" },
    { name: "Teal Light", hex: "#6ee1e2", rgb: "110, 225, 226", hsl: "181, 66%, 69%", usage: "Hover states, light accents" },
    { name: "Teal Dark", hex: "#3bc5c6", rgb: "59, 197, 198", hsl: "181, 66%, 49%", usage: "Active states, borders" },
  ];

  const darkColors = [
    { name: "EMUSKI Dark", hex: "#2d3849", rgb: "45, 56, 73", hsl: "210, 30%, 18%", usage: "Primary dark background, logo backgrounds" },
    { name: "Hero Background", hex: "#2a3441", rgb: "42, 52, 65", hsl: "210, 25%, 16%", usage: "Hero sections, dark surfaces" },
    { name: "Industrial Dark", hex: "#1a222d", rgb: "26, 34, 45", hsl: "210, 30%, 10%", usage: "Deep backgrounds, contrast areas" },
  ];

  const neutralColors = [
    { name: "Background", hex: "#fafafa", rgb: "250, 250, 250", hsl: "0, 0%, 98%", usage: "Primary light background" },
    { name: "Card Background", hex: "#ffffff", rgb: "255, 255, 255", hsl: "0, 0%, 100%", usage: "Cards, elevated surfaces" },
    { name: "Border Gray", hex: "#e5e7eb", rgb: "229, 231, 235", hsl: "220, 13%, 91%", usage: "Subtle borders, dividers" },
    { name: "Text Gray", hex: "#6b7280", rgb: "107, 114, 128", hsl: "220, 9%, 46%", usage: "Secondary text, muted content" },
    { name: "Dark Text", hex: "#111827", rgb: "17, 24, 39", hsl: "220, 39%, 11%", usage: "Primary text, headings" },
  ];

  const accentColors = [
    { name: "Grid Line", hex: "#4d7c7d", rgb: "77, 124, 125", hsl: "181, 20%, 30%", usage: "Subtle accent lines, grid patterns" },
    { name: "Success", hex: "#10b981", rgb: "16, 185, 129", hsl: "160, 84%, 39%", usage: "Success states, positive actions" },
    { name: "Warning", hex: "#f59e0b", rgb: "245, 158, 11", hsl: "43, 96%, 50%", usage: "Warning states, attention" },
    { name: "Error", hex: "#ef4444", rgb: "239, 68, 68", hsl: "0, 84%, 60%", usage: "Error states, destructive actions" },
  ];

  const ColorCard = ({ name, hex, rgb, hsl, usage }: any) => {
    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
    };

    return (
      <div className="group cursor-pointer">
        <div 
          className="h-48 border border-border mb-4 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] rounded-lg shadow-sm"
          style={{ backgroundColor: hex }}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={() => copyToClipboard(hex)}
              className="bg-black/20 text-white px-2 py-1 rounded text-xs hover:bg-black/30 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-foreground text-lg">{name}</h4>
          <div className="space-y-1">
            <p className="text-sm font-mono text-muted-foreground">HEX: {hex}</p>
            <p className="text-sm font-mono text-muted-foreground">RGB: {rgb}</p>
            <p className="text-sm font-mono text-muted-foreground">HSL: {hsl}</p>
          </div>
          <p className="text-sm text-muted-foreground italic">{usage}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative min-h-[60vh] bg-[hsl(var(--hero-bg))] flex items-center justify-center overflow-hidden pt-20">
        <IndustrialBackground />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl">
            <div className="text-sm text-[hsl(var(--hero-text))]/60 mb-6 font-mono">03</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[hsl(var(--hero-text))] leading-[0.95]">
              Color Palette
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">EMUSKI Color System</h2>
              <p className="text-lg text-foreground/80 max-w-3xl">
                Our color palette reflects precision engineering and professional manufacturing expertise. 
                The EMUSKI teal conveys innovation and reliability, while dark and neutral tones provide 
                a sophisticated foundation for industrial communication.
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Primary Brand Colors</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {primaryColors.map((color) => (
                    <ColorCard key={color.name} {...color} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Dark & Industrial Colors</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {darkColors.map((color) => (
                    <ColorCard key={color.name} {...color} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Neutral Foundation</h3>
                <div className="grid md:grid-cols-5 gap-6">
                  {neutralColors.map((color) => (
                    <ColorCard key={color.name} {...color} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Accent & System Colors</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {accentColors.map((color) => (
                    <ColorCard key={color.name} {...color} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Color Application</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-border p-8 bg-card">
                    <div className="flex items-start gap-3 mb-4">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">✓ Correct Usage</h4>
                        <p className="text-sm text-foreground/80 mb-4">
                          Use EMUSKI Teal for primary actions and key brand moments. 
                          Maintain high contrast with dark and light backgrounds.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#4fd3d4] text-white p-4 text-center font-semibold rounded-lg">
                        Primary CTA
                      </div>
                      <div className="bg-[#2d3849] text-[#4fd3d4] p-4 text-center font-semibold rounded-lg">
                        Dark Theme
                      </div>
                    </div>
                  </div>
                  <div className="border border-border p-8 bg-card">
                    <div className="flex items-start gap-3 mb-4">
                      <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">✗ Incorrect Usage</h4>
                        <p className="text-sm text-foreground/80 mb-4">
                          Avoid low contrast combinations. Never use unbranded colors or 
                          insufficient contrast ratios for text readability.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#1A2733] text-[#3bc5c6] p-4 text-center font-semibold rounded-lg opacity-50">
                        Poor Contrast
                      </div>
                      <div className="bg-gradient-to-r from-[#4fd3d4] to-[#6ee1e2] text-[#4fd3d4] p-4 text-center font-semibold rounded-lg opacity-50">
                        No Contrast
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Accessibility Standards</h3>
                <p className="text-foreground/80 mb-8 max-w-3xl">
                  All color combinations meet WCAG 2.1 Level AA accessibility standards. 
                  This ensures our content is accessible to users with visual impairments 
                  and maintains professionalism across all applications.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-border p-6 bg-card">
                    <div className="text-4xl font-bold mb-2 text-foreground">4.5:1</div>
                    <div className="text-sm text-muted-foreground">Minimum contrast for body text</div>
                  </div>
                  <div className="border border-border p-6 bg-card">
                    <div className="text-4xl font-bold mb-2 text-foreground">3:1</div>
                    <div className="text-sm text-muted-foreground">Minimum for large text (18px+)</div>
                  </div>
                  <div className="border border-border p-6 bg-card">
                    <div className="text-4xl font-bold mb-2 text-foreground">7:1</div>
                    <div className="text-sm text-muted-foreground">AAA enhanced contrast goal</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Color Psychology</h3>
                <div className="border border-emuski-teal/20 p-8 bg-card">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    <strong className="text-emuski-teal">EMUSKI Teal</strong> conveys trust, 
                    professionalism, and reliability—essential qualities for engineering and 
                    manufacturing partnerships. Our signature teal specifically evokes precision, 
                    technical expertise, and innovation, making it ideal for B2B 
                    communications and establishing credibility with OEM partners.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Additional Color Options</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="border border-border p-4 bg-card">
                    <div className="h-20 rounded-lg mb-4" style={{ backgroundColor: "#FF7F50" }}></div>
                    <h4 className="font-bold text-foreground mb-2">Coral</h4>
                    <p className="text-sm font-mono text-muted-foreground mb-2">#FF7F50</p>
                    <p className="text-sm text-muted-foreground">A brighter, more saturated orange-pink.</p>
                  </div>
                  
                  <div className="border border-border p-4 bg-card">
                    <div className="h-20 rounded-lg mb-4" style={{ backgroundColor: "#F08080" }}></div>
                    <h4 className="font-bold text-foreground mb-2">Light Coral</h4>
                    <p className="text-sm font-mono text-muted-foreground mb-2">#F08080</p>
                    <p className="text-sm text-muted-foreground">More pink/red than the image.</p>
                  </div>
                  
                  <div className="border border-border p-4 bg-card">
                    <div className="h-20 rounded-lg mb-4" style={{ backgroundColor: "#FFE5B4" }}></div>
                    <h4 className="font-bold text-foreground mb-2">Peach</h4>
                    <p className="text-sm font-mono text-muted-foreground mb-2">#FFE5B4</p>
                    <p className="text-sm text-muted-foreground">A much lighter, creamier version.</p>
                  </div>
                  
                  <div className="border border-border p-4 bg-card">
                    <div className="h-20 rounded-lg mb-4" style={{ backgroundColor: "#FFCBA4" }}></div>
                    <h4 className="font-bold text-foreground mb-2">Deep Peach</h4>
                    <p className="text-sm font-mono text-muted-foreground mb-2">#FFCBA4</p>
                    <p className="text-sm text-muted-foreground">Lighter and less saturated.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterNav 
        prevPage={{
          label: "Typography",
          href: "/typography"
        }}
        nextPage={{
          label: "Visual Design",
          href: "/art-direction"
        }}
      />
    </div>
  );
};

export default ColorEmuski;
