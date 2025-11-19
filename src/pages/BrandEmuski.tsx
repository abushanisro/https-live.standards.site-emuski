import IndustrialBackground from "@/components/IndustrialBackground";
import Navigation from "@/components/Navigation";
import FooterNav from "@/components/FooterNav";
import BusinessCard from "@/assets/branduse/bussiness card.png";
import Insta1 from "@/assets/branduse/insta1.png";
import Insta2 from "@/assets/branduse/insta2.png";
import Insta3 from "@/assets/branduse/insta3.png";
import LinkedInBanner from "@/assets/branduse/linkedin_banner.png";
import XBackground from "@/assets/branduse/x_bg.png";

const BrandEmuski = () => {
  const services = [
    {
      title: "Design-for-Manufacturing",
      description: "Optimize your designs for production efficiency, cost control, and scalable manufacturing from concept to market",
    },
    {
      title: "OEM Manufacturing Solutions",
      description: "Complete production capabilities that transform your designs into market-ready products with precision and quality",
    },
    {
      title: "Supply Chain Integration",
      description: "Seamless integration of design, procurement, and manufacturing processes for streamlined OEM operations",
    },
    {
      title: "Production Scaling & Optimization",
      description: "From prototypes to mass production—we build scalable manufacturing systems that grow with your business",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative min-h-[60vh] bg-[hsl(var(--hero-bg))] flex items-center justify-center overflow-hidden pt-20">
        <IndustrialBackground />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl">
            <div className="text-sm text-[hsl(var(--hero-text))]/60 mb-6 font-mono">05</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[hsl(var(--hero-text))] leading-[0.95]">
              Brand Voice
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">How We Communicate</h2>
              <p className="text-lg text-foreground/80 max-w-3xl">
                EMUSKI's brand voice embodies our "One Stop Solution for OEM" philosophy. 
                We communicate with technical authority, engineering precision, and collaborative partnership—
                perfectly capturing "You design it We build it."
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Brand Voice Attributes</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="border border-border p-8 bg-card">
                    <h4 className="text-xl font-bold text-emuski-teal mb-4">Engineering Authority</h4>
                    <p className="text-foreground/80 mb-4">
                      We speak the language of OEMs with technical precision and manufacturing expertise. 
                      Our communication demonstrates deep industry knowledge and proven capabilities.
                    </p>
                    <div className="text-sm text-muted-foreground italic">
                      "From design concept to production optimization..."
                    </div>
                  </div>
                  <div className="border border-border p-8 bg-card">
                    <h4 className="text-xl font-bold text-emuski-teal mb-4">Partnership-Driven</h4>
                    <p className="text-foreground/80 mb-4">
                      We position ourselves as true manufacturing partners, not just service providers. 
                      Every interaction reinforces collaborative problem-solving.
                    </p>
                    <div className="text-sm text-muted-foreground italic">
                      "Let's engineer a solution together..."
                    </div>
                  </div>
                  <div className="border border-border p-8 bg-card">
                    <h4 className="text-xl font-bold text-emuski-teal mb-4">Results-Oriented</h4>
                    <p className="text-foreground/80 mb-4">
                      Every message connects directly to manufacturing outcomes and business impact. 
                      We translate technical capabilities into tangible OEM benefits.
                    </p>
                    <div className="text-sm text-muted-foreground italic">
                      "Delivering production-ready solutions that scale..."
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Core Values in Action</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-emuski-teal pl-6 py-3 bg-card border border-border p-6">
                    <h4 className="font-bold text-foreground mb-2 text-lg">Design-to-Manufacturing Excellence</h4>
                    <p className="text-foreground/80">
                      We bridge the gap between concept and production, ensuring designs are optimized 
                      for manufacturability, cost efficiency, and scalable production from day one.
                    </p>
                  </div>
                  <div className="border-l-4 border-emuski-teal pl-6 py-3 bg-card border border-border p-6">
                    <h4 className="font-bold text-foreground mb-2 text-lg">OEM Partnership Commitment</h4>
                    <p className="text-foreground/80">
                      Every engagement reinforces our role as a strategic manufacturing partner. 
                      We understand OEM challenges and deliver solutions that strengthen competitive advantage.
                    </p>
                  </div>
                  <div className="border-l-4 border-emuski-teal pl-6 py-3 bg-card border border-border p-6">
                    <h4 className="font-bold text-foreground mb-2 text-lg">End-to-End Responsibility</h4>
                    <p className="text-foreground/80">
                      From initial design consultation through production implementation, 
                      we take complete ownership of project success and manufacturing outcomes.
                    </p>
                  </div>
                  <div className="border-l-4 border-emuski-teal pl-6 py-3 bg-card border border-border p-6">
                    <h4 className="font-bold text-foreground mb-2 text-lg">Scalable Solution Focus</h4>
                    <p className="text-foreground/80">
                      Every solution we build is designed for growth. We create manufacturing frameworks 
                      that scale with OEM expansion and adapt to evolving market demands.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Service Offerings</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="border border-border p-8 bg-card hover:border-emuski-teal transition-colors">
                      <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                      <p className="text-foreground/80">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Messaging Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card border border-border p-6">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="text-green-600 text-xl">✓</span> Do
                    </h4>
                    <ul className="space-y-3 text-foreground/80">
                      <li>• Connect design capabilities to manufacturing outcomes</li>
                      <li>• Emphasize "one-stop" comprehensive solutions</li>
                      <li>• Use OEM language and manufacturing terminology</li>
                      <li>• Lead with partnership and collaborative approach</li>
                      <li>• Support claims with production case studies</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border p-6">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="text-red-600 text-xl">✗</span> Don't
                    </h4>
                    <ul className="space-y-3 text-foreground/80">
                      <li>• Position as just another manufacturing vendor</li>
                      <li>• Separate design and manufacturing as different services</li>
                      <li>• Use generic manufacturing language without OEM focus</li>
                      <li>• Overcomplicate simple partnership benefits</li>
                      <li>• Make promises without manufacturing proof points</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Brand in Use</h3>
                <p className="text-foreground/80 mb-8 max-w-3xl">
                  See how EMUSKI brand elements come together across various touchpoints and platforms, 
                  maintaining consistency while adapting to different contexts and audiences.
                </p>

                {/* Business Materials */}
                <div className="mb-12">
                  <h4 className="text-xl font-bold mb-6 text-foreground">Business Materials</h4>
                  <div className="border border-border overflow-hidden bg-card">
                    <img 
                      src={BusinessCard} 
                      alt="EMUSKI Business Card Design" 
                      className="w-full h-auto object-contain"
                    />
                    <div className="p-6">
                      <h5 className="font-semibold text-foreground mb-2">Professional Business Cards</h5>
                      <p className="text-sm text-foreground/80">
                        Clean, professional design featuring EMUSKI branding with contact information 
                        and key messaging that reinforces our manufacturing expertise.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Content */}
                <div className="mb-12">
                  <h4 className="text-xl font-bold mb-6 text-foreground">Social Media Applications</h4>
                  
                  {/* Instagram Posts */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold mb-4 text-foreground">Instagram Content</h5>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="border border-border overflow-hidden bg-card">
                        <img 
                          src={Insta1} 
                          alt="Instagram Post 1" 
                          className="w-full h-auto object-contain"
                        />
                        <div className="p-4">
                          <p className="text-sm text-foreground/80">Manufacturing showcase content with EMUSKI branding</p>
                        </div>
                      </div>
                      
                      <div className="border border-border overflow-hidden bg-card">
                        <img 
                          src={Insta2} 
                          alt="Instagram Post 2" 
                          className="w-full h-auto object-contain"
                        />
                        <div className="p-4">
                          <p className="text-sm text-foreground/80">Technical expertise and precision engineering focus</p>
                        </div>
                      </div>
                      
                      <div className="border border-border overflow-hidden bg-card">
                        <img 
                          src={Insta3} 
                          alt="Instagram Post 3" 
                          className="w-full h-auto object-contain"
                        />
                        <div className="p-4">
                          <p className="text-sm text-foreground/80">OEM partnership and collaboration messaging</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Banner */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold mb-4 text-foreground">LinkedIn Professional Presence</h5>
                    <div className="border border-border overflow-hidden bg-card">
                      <img 
                        src={LinkedInBanner} 
                        alt="LinkedIn Banner Design" 
                        className="w-full h-auto object-contain"
                      />
                      <div className="p-6">
                        <h6 className="font-semibold text-foreground mb-2">Professional LinkedIn Banner</h6>
                        <p className="text-sm text-foreground/80">
                          Strategic banner design for professional networking that showcases EMUSKI's 
                          manufacturing expertise and OEM partnership focus.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* X (Twitter) Background */}
                  <div>
                    <h5 className="text-lg font-semibold mb-4 text-foreground">X (Twitter) Brand Presence</h5>
                    <div className="border border-border overflow-hidden bg-card">
                      <img 
                        src={XBackground} 
                        alt="X (Twitter) Background Design" 
                        className="w-full h-auto object-contain"
                      />
                      <div className="p-6">
                        <h6 className="font-semibold text-foreground mb-2">X Platform Background</h6>
                        <p className="text-sm text-foreground/80">
                          Branded background design that maintains EMUSKI visual identity 
                          while optimizing for the X platform's unique layout requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brand Consistency Guidelines */}
                <div className="border border-emuski-teal/20 p-8 bg-card mb-12">
                  <h4 className="text-xl font-bold mb-4 text-foreground">Consistency Guidelines</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-semibold text-emuski-teal mb-3">Visual Standards</h5>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>• Maintain EMUSKI teal (#4fd3d4) as primary brand color</li>
                        <li>• Use consistent typography hierarchy across platforms</li>
                        <li>• Ensure adequate white space and clean layouts</li>
                        <li>• Apply brand colors consistently across all materials</li>
                        <li>• Maintain professional industrial aesthetic</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-emuski-teal mb-3">Messaging Consistency</h5>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li>• Always include "You design it We build it" when appropriate</li>
                        <li>• Emphasize OEM partnership and manufacturing expertise</li>
                        <li>• Use consistent hashtags: #EMUSKI #OEMManufacturing</li>
                        <li>• Maintain professional tone across all platforms</li>
                        <li>• Focus on manufacturing precision and quality</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Tagline & Key Messages</h3>
                <div className="border border-emuski-teal/20 bg-card p-12 text-center">
                  <h4 className="text-4xl font-bold text-foreground mb-4">
                    You design it We build it
                  </h4>
                  <p className="text-xl text-foreground/80 mb-8">
                    One Stop Solution for OEM Manufacturing Excellence
                  </p>
                  <div className="max-w-3xl mx-auto space-y-6">
                    <p className="text-foreground/80 leading-relaxed">
                      The complete OEM manufacturing partner that transforms your designs into production-ready solutions. 
                      From concept optimization to scalable manufacturing, we deliver end-to-end capabilities 
                      that accelerate your time-to-market.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-8 text-sm">
                      <div className="bg-background p-4 rounded">
                        <div className="font-semibold text-emuski-teal mb-1">Design Optimization</div>
                        <div className="text-foreground/70">DFM consultation & engineering</div>
                      </div>
                      <div className="bg-background p-4 rounded">
                        <div className="font-semibold text-emuski-teal mb-1">Manufacturing</div>
                        <div className="text-foreground/70">Production & quality systems</div>
                      </div>
                      <div className="bg-background p-4 rounded">
                        <div className="font-semibold text-emuski-teal mb-1">Scaling</div>
                        <div className="text-foreground/70">Growth-ready operations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterNav 
        prevPage={{
          label: "Visual Design",
          href: "/art-direction"
        }}
      />
    </div>
  );
};

export default BrandEmuski;
