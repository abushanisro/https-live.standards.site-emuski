import PerplexitySidebar from "@/components/PerplexitySidebar";
import FooterNav from "@/components/FooterNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F3F3EE]">
      <PerplexitySidebar />
      
      <main className="ml-72">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">EMuski Brand Standards</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              One-Stop Solutions for OEM's. A comprehensive guide to our brand identity, visual language, 
              and communication standards for engineering and manufacturing excellence.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-12">
          <div className="max-w-4xl space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-6">
                  EMuski provides One-Stop Solutions for OEM's, combining precision engineering, advanced manufacturing, 
                  and AI-driven innovation. We provide comprehensive services from concept to delivery, 
                  enabling OEM's to accelerate time-to-market while optimizing costs and quality.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This brand standards guide serves as the definitive resource for maintaining 
                  consistency across all brand touchpoints while communicating our comprehensive 
                  OEM capabilities and commitment to manufacturing excellence.
                </p>
                <div className="bg-[#F3F3EE] rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    "One-Stop Solutions for OEM's" — From design to delivery, we provide 
                    comprehensive engineering and manufacturing services that enable OEM's to 
                    achieve superior products with justified costs and accelerated timelines.
                  </p>
                </div>
              </div>
            </section>

            {/* Brand Principles */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Principles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-[#13343B] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">Comprehensive</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    End-to-end solutions for OEMs. From engineering design to 
                    manufacturing delivery, we handle every aspect of product development.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-[#1FB8CD] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">I</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">Efficiency</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Streamlined processes and AI-driven optimization reduce 
                    time-to-market while maintaining superior quality standards.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#13343B] to-[#1FB8CD] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">Excellence</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Manufacturing excellence through precision engineering, 
                    quality control, and continuous process improvement.
                  </p>
                </div>
              </div>
            </section>

            {/* Brand Elements Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Elements</h2>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="p-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Engineering Services</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#1FB8CD] rounded-full"></div>
                        <span className="text-gray-700">Product design and development</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#1FB8CD] rounded-full"></div>
                        <span className="text-gray-700">Cost estimation and optimization</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#1FB8CD] rounded-full"></div>
                        <span className="text-gray-700">Strategic sourcing and supplier management</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Manufacturing Services</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#13343B] rounded-full"></div>
                        <span className="text-gray-700">Rapid prototyping and testing</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#13343B] rounded-full"></div>
                        <span className="text-gray-700">Production planning and management</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#13343B] rounded-full"></div>
                        <span className="text-gray-700">Quality control and final inspection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Usage Guidelines */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Using This Guide</h2>
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-6">
                  This guide is designed to be a living document that evolves with our brand. 
                  It provides clear guidelines while allowing for creative interpretation within 
                  defined parameters.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">✓ Do</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Follow the established visual hierarchy</li>
                      <li>• Maintain consistent spacing and proportions</li>
                      <li>• Use approved colors and typography</li>
                      <li>• Respect the brand voice and tone</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">✗ Don't</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Alter logo proportions or colors</li>
                      <li>• Use unauthorized fonts or colors</li>
                      <li>• Ignore accessibility guidelines</li>
                      <li>• Deviate from established patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <FooterNav 
        nextPage={{
          label: "Identity",
          href: "/logo"
        }}
      />
    </div>
  );
};

export default Index;
