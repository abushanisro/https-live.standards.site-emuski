import IndustrialBackground from "@/components/IndustrialBackground";
import Navigation from "@/components/Navigation";
import FooterNav from "@/components/FooterNav";
import { Link } from "react-router-dom";

const IndexEmuski = () => {
  const contentSections = [
    { number: "01", title: "Logo & Identity", href: "/logo" },
    { number: "02", title: "Typography", href: "/typography" },
    { number: "03", title: "Color Palette", href: "/color" },
    { number: "04", title: "Visual Design", href: "/art-direction" },
    { number: "05", title: "Brand Voice", href: "/brand" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[hsl(var(--hero-bg))] flex items-center justify-center overflow-hidden pt-20">
        <IndustrialBackground />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[hsl(var(--hero-text))] leading-[0.95] mb-8">
              Brand<br />Guidelines
            </h1>
            <p className="text-xl md:text-2xl text-[hsl(var(--hero-text))]/80 max-w-3xl font-light">
              You design it We build it
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
                  Precision meets profitability
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  EMUSKI specializes in should-cost, could-cost, and must-cost engineering 
                  methodologies, alongside procurement optimization. We redefine manufacturing 
                  efficiency and unlock untapped potential in supply chains.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-emuski-teal pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-foreground/80">
                    Empower society to consume products at a justified value
                  </p>
                </div>
                <div className="border-l-4 border-emuski-teal pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-foreground/80">
                    Be the premier choice for OEMs, managing supply chains with transparency 
                    and delivering substantial value
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-8 text-foreground">Core Values</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {["Integrity", "Transparency", "Responsibility", "Action Ownership"].map((value) => (
                  <div key={value} className="p-6 border border-border bg-card hover:border-emuski-teal transition-colors">
                    <h4 className="text-lg font-semibold text-foreground">{value}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Contents */}
            <div>
              <h3 className="text-3xl font-bold mb-12 text-foreground">Brand Guidelines Contents</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contentSections.map((section) => (
                  <Link
                    key={section.number}
                    to={section.href}
                    className="group relative p-8 border border-border hover:border-emuski-teal transition-all duration-300 overflow-hidden bg-card"
                  >
                    <div className="absolute inset-0 bg-emuski-teal/0 group-hover:bg-emuski-teal/5 transition-all duration-300" />
                    <div className="relative">
                      <div className="text-sm text-muted-foreground mb-3 font-mono">{section.number}</div>
                      <h4 className="text-2xl font-semibold text-foreground group-hover:translate-x-2 transition-transform duration-300">
                        {section.title}
                      </h4>
                      <div className="mt-4 text-emuski-teal group-hover:text-industrial-blue-light transition-colors">
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="relative bg-[hsl(var(--hero-bg))] py-32 overflow-hidden">
        <IndustrialBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold tracking-tight text-[hsl(var(--hero-text))] mb-6">
              EMUSKI
            </h2>
            <p className="text-xl text-[hsl(var(--hero-text))]/80 mb-8">
              You design it We build it
            </p>
            <Link 
              to="/logo"
              className="inline-flex items-center gap-3 text-[hsl(var(--hero-text))] bg-emuski-teal hover:bg-industrial-blue-light px-8 py-4 rounded-lg transition-colors font-semibold"
            >
              <span>Explore Guidelines</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      <FooterNav 
        nextPage={{
          label: "Logo & Identity",
          href: "/logo"
        }}
      />
    </div>
  );
};

export default IndexEmuski;
