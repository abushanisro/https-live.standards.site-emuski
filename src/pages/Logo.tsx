import PerplexitySidebar from "@/components/PerplexitySidebar";
import FooterNav from "@/components/FooterNav";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Logo = () => {
  const logoVariants = [
    { title: "Primary Logo", subtitle: "Inky Blue", bg: "bg-[#F3F3EE]" },
    { title: "Logo on Light", subtitle: "White Background", bg: "bg-white" },
    { title: "Logo on Dark", subtitle: "Inky Blue Background", bg: "bg-[#13343B]" },
    { title: "Symbol Mark", subtitle: "Icon Only", bg: "bg-[#F3F3EE]" },
  ];

  return (
    <div className="min-h-screen bg-[#F3F3EE]">
      <PerplexitySidebar />
      
      <main className="ml-72">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Identity</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              The EMuski logo represents our commitment to engineering excellence and manufacturing precision. 
              It embodies our position as One-Stop Solutions for OEM's with trust, innovation, and reliability.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-12">
          <div className="max-w-4xl space-y-12">
            
            {/* Logo Philosophy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Logo Philosophy</h2>
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The EMuski logo symbolizes the convergence of precision engineering and intelligent manufacturing. 
                  The geometric elements reflect our systematic approach to solving complex OEM challenges, 
                  while the color palette reinforces trust and technical expertise.
                </p>
                <div className="bg-[#F3F3EE] rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Design Elements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Circular Pattern:</strong> Represents continuous improvement and interconnected solutions</li>
                    <li>• <strong>Geometric Precision:</strong> Reflects our engineering accuracy and attention to detail</li>
                    <li>• <strong>Color Harmony:</strong> Inky Blue and Plex Blue convey trust and innovation</li>
                    <li>• <strong>Scalable Design:</strong> Maintains clarity across all sizes and applications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Logo Variations */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Logo Variations</h2>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-8">
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Use these logo variations to maintain brand consistency across different contexts 
                    and backgrounds while ensuring optimal visibility and impact.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 p-8 pt-0">
                  {logoVariants.map((variant, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden group">
                      <div className={`${variant.bg} h-48 flex items-center justify-center p-8 relative`}>
                        <div className="relative text-center">
                          <div className={`w-20 h-20 rounded-xl flex items-center justify-center text-2xl font-bold ${
                            variant.bg === 'bg-[#13343B]' 
                              ? 'bg-[#1FB8CD] text-white' 
                              : 'bg-gradient-to-br from-[#13343B] to-[#1FB8CD] text-white'
                          }`}>
                            EM
                          </div>
                        </div>
                      </div>
                      <div className="p-6 bg-white">
                        <h3 className="font-semibold text-gray-900 mb-1">{variant.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{variant.subtitle}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Download SVG
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Usage Guidelines */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Guidelines</h2>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="p-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Clear Space</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Maintain adequate clear space around the logo equal to the height of the "EM" letters. 
                      This ensures the logo has room to breathe and maintains its visual impact.
                    </p>
                    <div className="bg-[#F3F3EE] rounded-lg p-8 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#13343B] to-[#1FB8CD] flex items-center justify-center text-white font-bold text-lg">
                          EM
                        </div>
                        <div className="absolute -inset-8 border-2 border-dashed border-gray-400 opacity-50"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Minimum Size</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Never reproduce the logo smaller than the minimum sizes specified to ensure 
                      legibility and brand recognition across all applications.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-[#13343B] to-[#1FB8CD] flex items-center justify-center text-white font-bold text-xs">
                          EM
                        </div>
                        <span className="text-sm text-gray-600">Digital: 32px minimum</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#13343B] to-[#1FB8CD] flex items-center justify-center text-white font-bold text-sm">
                          EM
                        </div>
                        <span className="text-sm text-gray-600">Print: 0.5 inch minimum</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Logo Don'ts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Logo Don'ts</h2>
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Protect the integrity of the EMuski logo by avoiding these common misuses. 
                  Consistent application builds brand recognition and trust.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-lg p-6 mb-3">
                      <div className="w-12 h-12 rounded bg-red-500 flex items-center justify-center text-white font-bold mx-auto">
                        EM
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">Don't change colors</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-lg p-6 mb-3">
                      <div className="w-12 h-6 rounded bg-gradient-to-br from-[#13343B] to-[#1FB8CD] flex items-center justify-center text-white font-bold mx-auto text-xs">
                        EM
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">Don't distort proportions</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-lg p-6 mb-3">
                      <div className="w-12 h-12 border-2 border-[#13343B] flex items-center justify-center text-[#13343B] font-bold mx-auto">
                        EM
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">Don't use as outline</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-lg p-6 mb-3">
                      <div className="w-12 h-12 rounded bg-gradient-to-br from-[#13343B] to-[#1FB8CD] flex items-center justify-center text-white font-bold mx-auto opacity-30">
                        EM
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">Don't reduce opacity</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <FooterNav 
        prevPage={{
          label: "Brand Overview",
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

export default Logo;
