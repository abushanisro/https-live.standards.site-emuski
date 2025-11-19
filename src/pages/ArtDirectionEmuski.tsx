import IndustrialBackground from "@/components/IndustrialBackground";
import Navigation from "@/components/Navigation";
import FooterNav from "@/components/FooterNav";
import MEComponents from "@/assets/Art_direction/ME_coponents.png";
import ManufacturingArt from "@/assets/Art_direction/Manufuring art.jpg";
import ArtDirection from "@/assets/Art_direction/art.png";
import CarBreakdown from "@/assets/Art_direction/carbreakdown.png";
import HoldingHand from "@/assets/Art_direction/holding_hand.png";
import ProductTeardown from "@/assets/Art_direction/product_teardown.png";
import Sticker from "@/assets/Art_direction/sticker.png";
import Teardown from "@/assets/Art_direction/teardown.png";

const ArtDirectionEmuski = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative min-h-[60vh] bg-[hsl(var(--hero-bg))] flex items-center justify-center overflow-hidden pt-20">
        <IndustrialBackground />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl">
            <div className="text-sm text-[hsl(var(--hero-text))]/60 mb-6 font-mono">04</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[hsl(var(--hero-text))] leading-[0.95]">
              Visual Design
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">OEM-Focused Visual Design</h2>
              <p className="text-lg text-foreground/80 max-w-3xl">
                Our visual language speaks directly to OEM partners through manufacturing-focused design principles. 
                Every element reinforces our "One Stop Solution" capability and "You design it We build it" promise 
                with professional precision and industrial authenticity.
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Design Principles</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="border border-border p-8 mb-4 bg-card h-64 flex items-center justify-center relative overflow-hidden">
                      <IndustrialBackground />
                      <div className="relative z-10 text-center">
                        <div className="text-6xl font-bold text-[hsl(var(--hero-text))] mb-2">Precision</div>
                        <div className="text-lg text-[hsl(var(--hero-text))]/80">In every detail</div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Design-to-Manufacturing Logic</h4>
                    <p className="text-sm text-foreground/80">
                      Layouts mirror production workflows—systematic, efficient, and purposeful. 
                      Every visual element reflects manufacturing precision and OEM professionalism.
                    </p>
                  </div>
                  <div>
                    <div className="border border-border p-8 mb-4 bg-background h-64 flex items-center justify-center">
                      <div className="text-center space-y-4 w-full max-w-md">
                        <div className="h-3 bg-industrial-blue rounded w-full" />
                        <div className="h-3 bg-foreground/20 rounded w-3/4" />
                        <div className="h-3 bg-foreground/20 rounded w-5/6" />
                        <div className="h-16 bg-foreground/10 rounded mt-6" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">OEM-Friendly Information Flow</h4>
                    <p className="text-sm text-foreground/80">
                      Information architecture follows manufacturing decision-making patterns—
                      design considerations first, then production capabilities, ending with delivery.
                    </p>
                  </div>
                  <div>
                    <div className="border border-border p-8 mb-4 bg-card h-64 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-3">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-16 h-16 bg-foreground/10 border border-border" />
                        ))}
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Grid-Based Layouts</h4>
                    <p className="text-sm text-foreground/80">
                      Strong grid systems create consistency and professional appearance 
                      across all materials.
                    </p>
                  </div>
                  <div>
                    <div className="border border-border p-8 mb-4 bg-background h-64 flex items-center justify-center">
                      <div className="space-y-6 w-full max-w-sm">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-industrial-blue" />
                          <div className="flex-1 space-y-2">
                            <div className="h-2 bg-foreground/20 rounded w-3/4" />
                            <div className="h-2 bg-foreground/10 rounded w-1/2" />
                          </div>
                        </div>
                        <div className="h-32 bg-foreground/5 rounded border border-border" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Production Data Clarity</h4>
                    <p className="text-sm text-foreground/80">
                      Visual data presentation mirrors manufacturing dashboards—clear metrics 
                      that OEMs use to make production and scaling decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Technical Blueprint Integration</h3>
                <p className="text-foreground/80 mb-8 max-w-3xl">
                  Engineering blueprints showcase our technical precision and manufacturing expertise. 
                  The integration of detailed technical drawings with EMUSKI branding demonstrates our 
                  capability to bridge design concepts with production reality.
                </p>
                
                {/* Main Technical Showcase */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="border border-border overflow-hidden bg-card">
                    <img 
                      src={ArtDirection} 
                      alt="EMUSKI Technical Blueprint" 
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-semibold text-foreground mb-2">Engineering Documentation</h4>
                      <p className="text-sm text-foreground/80">
                        Professional technical drawings and blueprints that showcase our engineering precision and manufacturing capabilities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border border-border overflow-hidden bg-card">
                    <img 
                      src={ManufacturingArt} 
                      alt="EMUSKI Manufacturing Process" 
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-semibold text-foreground mb-2">Manufacturing Excellence</h4>
                      <p className="text-sm text-foreground/80">
                        Visual representation of our end-to-end manufacturing process, from design concept to finished product delivery.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Components Gallery */}
                <div className="mb-12">
                  <h4 className="text-xl font-bold mb-6 text-foreground">Technical Component Analysis</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-border overflow-hidden bg-card">
                      <img 
                        src={MEComponents} 
                        alt="Mechanical Engineering Components" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h5 className="font-semibold text-foreground mb-2">ME Components</h5>
                        <p className="text-xs text-foreground/80">Precision mechanical engineering components and assemblies</p>
                      </div>
                    </div>
                    
                    <div className="border border-border overflow-hidden bg-card">
                      <img 
                        src={ProductTeardown} 
                        alt="Product Analysis & Teardown" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h5 className="font-semibold text-foreground mb-2">Product Analysis</h5>
                        <p className="text-xs text-foreground/80">Detailed teardown and analysis for reverse engineering</p>
                      </div>
                    </div>
                    
                    <div className="border border-border overflow-hidden bg-card">
                      <img 
                        src={CarBreakdown} 
                        alt="Automotive Component Breakdown" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h5 className="font-semibold text-foreground mb-2">Automotive Systems</h5>
                        <p className="text-xs text-foreground/80">Complex automotive component analysis and manufacturing</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Partnership & Quality Section */}
                <div className="space-y-8">
                  {/* Full-width Sticker Image */}
                  <div className="border border-emuski-teal/20 bg-card">
                    <div className="flex items-center justify-center py-12 bg-gradient-to-br from-gray-50 to-white">
                      <img 
                        src={Sticker} 
                        alt="Quality Assurance & Branding" 
                        className="w-80 h-80 object-contain rounded-full shadow-lg"
                      />
                    </div>
                    <div className="p-8 bg-gradient-to-r from-emuski-teal/5 to-transparent">
                      <h4 className="text-2xl font-bold text-foreground mb-4 text-center">Quality Assurance Excellence</h4>
                      <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center">
                        Every EMUSKI product carries our mark of quality and precision. Our rigorous quality control 
                        processes ensure that each component meets the highest manufacturing standards, delivering 
                        excellence that OEM partners can trust.
                      </p>
                    </div>
                  </div>

                  {/* Full-width Partnership Section */}
                  <div className="border border-emuski-dark/20 overflow-hidden bg-card mb-8">
                    <img 
                      src={HoldingHand} 
                      alt="OEM Partnership Collaboration" 
                      className="w-full h-auto object-contain"
                    />
                    <div className="p-8 bg-gradient-to-r from-emuski-dark/5 to-transparent">
                      <h4 className="text-2xl font-bold text-foreground mb-4 text-center">Partnership Excellence</h4>
                      <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center">
                        Direct collaboration and hands-on approach with our OEM partners. We believe in building 
                        lasting relationships through transparent communication and shared engineering expertise. 
                        Our commitment to partnership goes beyond manufacturing - we become an extension of your team.
                      </p>
                    </div>
                  </div>

                  {/* Supporting Manufacturing Section */}
                  <div className="border border-border overflow-hidden bg-card">
                    <img 
                      src={Teardown} 
                      alt="Manufacturing Teardown Analysis" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-center">
                      <h4 className="text-xl font-bold text-foreground mb-3">Manufacturing Capabilities</h4>
                      <p className="text-foreground/80 max-w-2xl mx-auto">
                        Comprehensive teardown analysis and reverse engineering capabilities that enable us to 
                        understand, improve, and manufacture complex components with precision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Manufacturing-Focused Iconography</h3>
                <div className="border border-border p-12 bg-card">
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-8 mb-8">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 border-2 border-emuski-teal rounded flex items-center justify-center">
                        <img src={MEComponents} alt="ME Components" className="w-12 h-12 object-contain" />
                      </div>
                      <span className="text-xs text-foreground/60">Components</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 border-2 border-emuski-teal rounded flex items-center justify-center">
                        <img src={ProductTeardown} alt="Analysis" className="w-12 h-12 object-contain" />
                      </div>
                      <span className="text-xs text-foreground/60">Analysis</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 border-2 border-emuski-teal rounded flex items-center justify-center">
                        <img src={ManufacturingArt} alt="Manufacturing" className="w-12 h-12 object-contain" />
                      </div>
                      <span className="text-xs text-foreground/60">Manufacturing</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 border-2 border-emuski-teal rounded flex items-center justify-center">
                        <img src={ArtDirection} alt="Engineering" className="w-12 h-12 object-contain" />
                      </div>
                      <span className="text-xs text-foreground/60">Engineering</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 border-2 border-emuski-teal rounded flex items-center justify-center">
                        <img src={Teardown} alt="Process" className="w-12 h-12 object-contain" />
                      </div>
                      <span className="text-xs text-foreground/60">Process</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 border-2 border-emuski-teal rounded flex items-center justify-center">
                        <img src={CarBreakdown} alt="Automotive" className="w-12 h-12 object-contain" />
                      </div>
                      <span className="text-xs text-foreground/60">Automotive</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 border-2 border-emuski-teal rounded flex items-center justify-center">
                        <img src={HoldingHand} alt="Partnership" className="w-12 h-12 object-contain" />
                      </div>
                      <span className="text-xs text-foreground/60">Partnership</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 border-2 border-emuski-teal rounded flex items-center justify-center">
                        <img src={Sticker} alt="Quality" className="w-12 h-12 object-contain" />
                      </div>
                      <span className="text-xs text-foreground/60">Quality</span>
                    </div>
                  </div>
                  <p className="text-foreground/80 text-center">
                    Visual elements from EMUSKI brand assets that communicate manufacturing capabilities and OEM partnership values. 
                    Each graphic instantly represents industrial competence and design-to-production expertise.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Blueprint Usage Guidelines</h3>
                <div className="border border-border p-8 mb-12 bg-card">
                  <h4 className="font-semibold text-foreground mb-4">EMUSKI Technical Documentation Standards</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-semibold text-emuski-teal mb-3">✓ Correct Usage</h5>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>• Always include EMUSKI branding on technical drawings</li>
                        <li>• Use grid background to emphasize precision</li>
                        <li>• Include proper drawing numbers and revisions</li>
                        <li>• Maintain aged paper aesthetic for authenticity</li>
                        <li>• Incorporate tagline: "You design it We build it"</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-600 mb-3">✗ Avoid</h5>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>• Generic technical drawings without branding</li>
                        <li>• Modern digital aesthetic over industrial feel</li>
                        <li>• Missing precision measurements or tolerances</li>
                        <li>• Unstructured layout without grid system</li>
                        <li>• Competitor logos or unbranded components</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 text-foreground">Layout Examples</h3>
                <div className="space-y-6">
                  <div className="border border-border overflow-hidden bg-card">
                    <div className="bg-[hsl(var(--hero-bg))] p-6 border-b border-border">
                      <div className="flex items-center justify-between">
                        <div className="text-[hsl(var(--hero-text))] font-bold text-xl">EMUSKI</div>
                        <div className="flex gap-4 text-sm text-[hsl(var(--hero-text))]/80">
                          <span>Services</span>
                          <span>About</span>
                          <span>Contact</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="space-y-4">
                        <div className="h-3 bg-foreground/20 rounded w-3/4" />
                        <div className="h-3 bg-foreground/20 rounded w-full" />
                        <div className="h-3 bg-foreground/20 rounded w-5/6" />
                        <div className="h-24 bg-industrial-blue/10 rounded mt-6 border border-emuski-teal/20" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Example: Professional website layout with clear navigation and content hierarchy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterNav 
        prevPage={{
          label: "Color Palette",
          href: "/color"
        }}
        nextPage={{
          label: "Brand Voice",
          href: "/brand"
        }}
      />
    </div>
  );
};

export default ArtDirectionEmuski;
