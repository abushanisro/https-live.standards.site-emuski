import GridBackground from "@/components/GridBackground";
import Navigation from "@/components/Navigation";

const Brand = () => {
  const applications = [
    {
      title: "Business Cards",
      description: "Clean, minimal design with geometric grid pattern on reverse",
      preview: "bg-background border-2 border-border"
    },
    {
      title: "Presentations",
      description: "Bold typography with structured layouts and grid backgrounds",
      preview: "bg-[hsl(var(--hero-bg))]"
    },
    {
      title: "Social Media",
      description: "Consistent visual language across all platforms",
      preview: "bg-background border-2 border-border"
    },
    {
      title: "Website",
      description: "Responsive layouts with generous white space",
      preview: "bg-background border-2 border-border"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative min-h-[60vh] bg-[hsl(var(--hero-bg))] flex items-center justify-center overflow-hidden pt-20">
        <GridBackground />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl">
            <div className="text-sm text-[hsl(var(--hero-text))]/60 mb-6">05</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-[hsl(var(--hero-text))] leading-[0.95]">
              Brand in Use
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-light mb-6 text-foreground">Real-World Applications</h2>
              <p className="text-lg text-foreground/80 max-w-3xl">
                See how our brand guidelines come together across different touchpoints and 
                applications. Consistency is key—but always adapt to the medium while maintaining 
                our core visual principles.
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-light mb-8 text-foreground">Applications</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {applications.map((app, index) => (
                    <div key={index} className="group">
                      <div className={`${app.preview} h-64 mb-4 overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.02]`}>
                        {app.preview.includes('hero') && (
                          <div className="absolute inset-0 opacity-30">
                            <GridBackground />
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className={`text-center ${app.preview.includes('hero') ? 'text-[hsl(var(--hero-text))]' : 'text-foreground'}`}>
                            <div className="text-3xl font-light mb-2">perplexity</div>
                            <div className="text-sm opacity-60">{app.title}</div>
                          </div>
                        </div>
                      </div>
                      <h4 className="font-medium text-foreground mb-2">{app.title}</h4>
                      <p className="text-sm text-foreground/80">{app.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-8 text-foreground">Digital Presence</h3>
                <div className="border border-border overflow-hidden">
                  <div className="relative h-96 bg-background">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-[hsl(var(--hero-bg))] flex items-center px-6">
                      <div className="text-xl font-light text-[hsl(var(--hero-text))]">perplexity</div>
                    </div>
                    <div className="absolute top-20 left-0 right-0 bottom-0 p-6">
                      <div className="h-full border border-border flex items-center justify-center">
                        <div className="text-center max-w-2xl">
                          <div className="text-5xl font-light text-foreground mb-4">
                            Clean Digital Interface
                          </div>
                          <p className="text-foreground/60">
                            Structured layouts with clear hierarchy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-8 text-foreground">Brand Voice</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="border border-border p-8">
                    <h4 className="text-xl font-medium text-foreground mb-4">Clear</h4>
                    <p className="text-foreground/80">
                      We communicate with precision and purpose. Every word counts.
                    </p>
                  </div>
                  <div className="border border-border p-8">
                    <h4 className="text-xl font-medium text-foreground mb-4">Confident</h4>
                    <p className="text-foreground/80">
                      We speak with authority but never arrogance. We know our craft.
                    </p>
                  </div>
                  <div className="border border-border p-8">
                    <h4 className="text-xl font-medium text-foreground mb-4">Progressive</h4>
                    <p className="text-foreground/80">
                      We're forward-thinking and adaptable, always evolving.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-8 text-foreground">Key Principles</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-[hsl(var(--hero-bg))] pl-6 py-2">
                    <h4 className="font-medium text-foreground mb-2">Consistency is Critical</h4>
                    <p className="text-foreground/80">
                      Apply brand guidelines consistently across all touchpoints to build recognition and trust.
                    </p>
                  </div>
                  <div className="border-l-4 border-[hsl(var(--hero-bg))] pl-6 py-2">
                    <h4 className="font-medium text-foreground mb-2">Context Matters</h4>
                    <p className="text-foreground/80">
                      Adapt the brand to different mediums while maintaining core visual principles.
                    </p>
                  </div>
                  <div className="border-l-4 border-[hsl(var(--hero-bg))] pl-6 py-2">
                    <h4 className="font-medium text-foreground mb-2">Quality Over Quantity</h4>
                    <p className="text-foreground/80">
                      Better to have fewer touchpoints done excellently than many done poorly.
                    </p>
                  </div>
                  <div className="border-l-4 border-[hsl(var(--hero-bg))] pl-6 py-2">
                    <h4 className="font-medium text-foreground mb-2">Evolve Thoughtfully</h4>
                    <p className="text-foreground/80">
                      Our brand is designed to grow and adapt, but changes should be intentional and strategic.
                    </p>
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

export default Brand;
