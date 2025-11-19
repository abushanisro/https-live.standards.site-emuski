import IndustrialBackground from "@/components/IndustrialBackground";
import Navigation from "@/components/Navigation";
import FooterNav from "@/components/FooterNav";

const TypographyEmuski = () => {
  const fontSizes = [
    { size: "text-6xl", label: "Display", pixels: "60px", usage: "Hero headlines, major statements" },
    { size: "text-5xl", label: "Heading 1", pixels: "48px", usage: "Page titles, main headings" },
    { size: "text-4xl", label: "Heading 2", pixels: "36px", usage: "Section headers" },
    { size: "text-3xl", label: "Heading 3", pixels: "30px", usage: "Subsection titles" },
    { size: "text-2xl", label: "Heading 4", pixels: "24px", usage: "Card headers, labels" },
    { size: "text-xl", label: "Large Body", pixels: "20px", usage: "Lead paragraphs, emphasis" },
    { size: "text-base", label: "Body", pixels: "16px", usage: "Primary content, paragraphs" },
    { size: "text-sm", label: "Small", pixels: "14px", usage: "Captions, metadata, footnotes" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative min-h-[60vh] bg-[hsl(var(--hero-bg))] flex items-center justify-center overflow-hidden pt-20">
        <IndustrialBackground />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl">
            <div className="text-sm text-[hsl(var(--hero-text))]/60 mb-6 font-mono">02</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[hsl(var(--hero-text))] leading-[0.95]">
              Typography
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Professional Type System</h2>
              <p className="text-lg text-foreground/80 max-w-3xl">
                Our typography conveys professionalism, precision, and clarity. We use robust, 
                highly legible typefaces that work across digital and print applications, 
                ensuring our message is always crystal clear.
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Primary Typeface</h3>
                <div className="border border-border p-12 mb-8 bg-card">
                  <div className="text-8xl font-bold tracking-tight text-foreground mb-4">Aa</div>
                  <div className="text-2xl font-semibold text-foreground">System Sans-Serif</div>
                  <p className="text-muted-foreground mt-2">Inter / SF Pro / Segoe UI / Roboto</p>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="border border-border p-6 text-center bg-card">
                    <div className="text-4xl font-normal mb-2">Aa</div>
                    <div className="text-sm text-muted-foreground font-semibold">Regular</div>
                  </div>
                  <div className="border border-border p-6 text-center bg-card">
                    <div className="text-4xl font-medium mb-2">Aa</div>
                    <div className="text-sm text-muted-foreground font-semibold">Medium</div>
                  </div>
                  <div className="border border-border p-6 text-center bg-card">
                    <div className="text-4xl font-semibold mb-2">Aa</div>
                    <div className="text-sm text-muted-foreground font-semibold">Semibold</div>
                  </div>
                  <div className="border border-border p-6 text-center bg-card">
                    <div className="text-4xl font-bold mb-2">Aa</div>
                    <div className="text-sm text-muted-foreground font-semibold">Bold</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Type Scale & Hierarchy</h3>
                <div className="space-y-6">
                  {fontSizes.map((item) => (
                    <div key={item.label} className="border-b border-border pb-6">
                      <div className="grid md:grid-cols-[1fr_120px_280px] gap-4 items-baseline">
                        <div className={`${item.size} font-semibold text-foreground`}>
                          {item.label}
                        </div>
                        <div className="text-sm text-muted-foreground font-mono">{item.pixels}</div>
                        <div className="text-sm text-muted-foreground">{item.usage}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Typography in Action</h3>
                <div className="border border-border p-12 space-y-6 bg-card">
                  <h1 className="text-6xl font-bold tracking-tight text-foreground">
                    Precision Engineering
                  </h1>
                  <h2 className="text-4xl font-semibold text-foreground">
                    Cost Optimization Solutions
                  </h2>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Supply Chain Excellence
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    At EMuski, we specialize in should-cost, could-cost, and must-cost 
                    engineering methodologies. Our expertise helps OEMs optimize their 
                    procurement processes and achieve substantial cost savings while 
                    maintaining quality standards.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Professional typography ensures clear communication across all touchpoints.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Best Practices</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border-l-4 border-emuski-teal pl-6 py-2">
                    <h4 className="font-semibold text-foreground mb-2">Hierarchy is Critical</h4>
                    <p className="text-foreground/80">
                      Use consistent type sizes and weights to establish clear information hierarchy. 
                      Headlines should be bold and commanding.
                    </p>
                  </div>
                  <div className="border-l-4 border-emuski-teal pl-6 py-2">
                    <h4 className="font-semibold text-foreground mb-2">Line Height Matters</h4>
                    <p className="text-foreground/80">
                      Maintain 1.5-1.6 line height for body text to ensure comfortable reading. 
                      Reduce line height for headlines.
                    </p>
                  </div>
                  <div className="border-l-4 border-emuski-teal pl-6 py-2">
                    <h4 className="font-semibold text-foreground mb-2">Limit Font Weights</h4>
                    <p className="text-foreground/80">
                      Use 2-3 font weights consistently throughout your designs. Too many 
                      weights create visual confusion.
                    </p>
                  </div>
                  <div className="border-l-4 border-emuski-teal pl-6 py-2">
                    <h4 className="font-semibold text-foreground mb-2">Consider Context</h4>
                    <p className="text-foreground/80">
                      Digital screens require slightly larger sizes than print. Test 
                      readability on actual devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterNav 
        prevPage={{
          label: "Logo & Identity",
          href: "/logo"
        }}
        nextPage={{
          label: "Color Palette",
          href: "/color"
        }}
      />
    </div>
  );
};

export default TypographyEmuski;
