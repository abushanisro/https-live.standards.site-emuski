import GridBackground from "@/components/GridBackground";
import Navigation from "@/components/Navigation";

const ArtDirection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative min-h-[60vh] bg-[hsl(var(--hero-bg))] flex items-center justify-center overflow-hidden pt-20">
        <GridBackground />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl">
            <div className="text-sm text-[hsl(var(--hero-text))]/60 mb-6">04</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-[hsl(var(--hero-text))] leading-[0.95]">
              Art Direction
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-light mb-6 text-foreground">Visual Language</h2>
              <p className="text-lg text-foreground/80 max-w-3xl">
                Our visual language is characterized by clean geometric patterns, precise grids, 
                and a sophisticated interplay of structure and space. These elements reflect our 
                commitment to clarity and precision in everything we do.
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-light mb-8 text-foreground">Geometric Grid</h3>
                <p className="text-foreground/80 mb-8 max-w-3xl">
                  The geometric grid is our signature visual element. It represents the underlying 
                  structure and connections that power our technology, while adding depth and 
                  sophistication to our visual identity.
                </p>
                <div className="relative h-96 bg-[hsl(var(--hero-bg))] border border-border overflow-hidden">
                  <GridBackground />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-light text-[hsl(var(--hero-text))] text-center max-w-2xl px-6">
                      Structure meets simplicity in our geometric visual system
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-8 text-foreground">Composition Principles</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="border border-border p-8 mb-4 bg-background">
                      <div className="space-y-4">
                        <div className="h-2 bg-foreground/20 w-3/4" />
                        <div className="h-2 bg-foreground/20 w-full" />
                        <div className="h-2 bg-foreground/20 w-2/3" />
                        <div className="h-16 bg-[hsl(var(--hero-bg))]/20 mt-6" />
                      </div>
                    </div>
                    <h4 className="font-medium text-foreground mb-2">Generous White Space</h4>
                    <p className="text-sm text-foreground/80">
                      Use ample white space to create breathing room and draw attention to key elements.
                    </p>
                  </div>
                  <div>
                    <div className="border border-border p-8 mb-4 bg-background">
                      <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-7 h-32 bg-[hsl(var(--hero-bg))]/20" />
                        <div className="col-span-5 h-32 bg-foreground/10" />
                      </div>
                    </div>
                    <h4 className="font-medium text-foreground mb-2">Asymmetric Balance</h4>
                    <p className="text-sm text-foreground/80">
                      Create dynamic layouts with asymmetric compositions that maintain visual balance.
                    </p>
                  </div>
                  <div>
                    <div className="border border-border p-8 mb-4 bg-background">
                      <div className="text-6xl font-light text-foreground">Aa</div>
                    </div>
                    <h4 className="font-medium text-foreground mb-2">Bold Typography</h4>
                    <p className="text-sm text-foreground/80">
                      Let typography lead. Use large, confident type to make a statement.
                    </p>
                  </div>
                  <div>
                    <div className="border border-border p-8 mb-4 bg-background">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="h-1 bg-foreground/20" />
                          <div className="h-1 bg-foreground/20 w-3/4" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-1 bg-foreground/20" />
                          <div className="h-1 bg-foreground/20 w-3/4" />
                        </div>
                      </div>
                    </div>
                    <h4 className="font-medium text-foreground mb-2">Structured Grid</h4>
                    <p className="text-sm text-foreground/80">
                      Maintain consistency with a clear, structured grid system.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-8 text-foreground">Photography Style</h3>
                <p className="text-foreground/80 mb-8 max-w-3xl">
                  When using photography, prioritize clean, well-lit images with minimal clutter. 
                  Images should feel modern, professional, and aligned with our geometric aesthetic.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-border p-6 text-center">
                    <div className="aspect-square bg-gradient-to-br from-[hsl(var(--hero-bg))]/20 to-[hsl(var(--hero-bg))]/5 mb-4 flex items-center justify-center">
                      <div className="text-4xl">📐</div>
                    </div>
                    <h4 className="font-medium text-foreground mb-2">Clean & Minimal</h4>
                    <p className="text-sm text-foreground/80">Simple compositions with clear subjects</p>
                  </div>
                  <div className="border border-border p-6 text-center">
                    <div className="aspect-square bg-gradient-to-br from-[hsl(var(--hero-bg))]/20 to-[hsl(var(--hero-bg))]/5 mb-4 flex items-center justify-center">
                      <div className="text-4xl">☀️</div>
                    </div>
                    <h4 className="font-medium text-foreground mb-2">Well-Lit</h4>
                    <p className="text-sm text-foreground/80">Natural lighting, bright and clear</p>
                  </div>
                  <div className="border border-border p-6 text-center">
                    <div className="aspect-square bg-gradient-to-br from-[hsl(var(--hero-bg))]/20 to-[hsl(var(--hero-bg))]/5 mb-4 flex items-center justify-center">
                      <div className="text-4xl">🎯</div>
                    </div>
                    <h4 className="font-medium text-foreground mb-2">Purpose-Driven</h4>
                    <p className="text-sm text-foreground/80">Every image serves a clear purpose</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtDirection;
