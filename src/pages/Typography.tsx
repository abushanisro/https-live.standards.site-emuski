import PerplexitySidebar from "@/components/PerplexitySidebar";
import FooterNav from "@/components/FooterNav";

const Typography = () => {
  const typeScale = [
    { name: "Display", size: "96px", weight: "300", lineHeight: "100px", usage: "Large hero headlines", sample: "Engineering Excellence" },
    { name: "Heading 1", size: "60px", weight: "300", lineHeight: "68px", usage: "Page titles", sample: "Brand Guidelines" },
    { name: "Heading 2", size: "48px", weight: "400", lineHeight: "56px", usage: "Major sections", sample: "Typography System" },
    { name: "Heading 3", size: "36px", weight: "400", lineHeight: "44px", usage: "Subsections", sample: "Font Families" },
    { name: "Heading 4", size: "24px", weight: "500", lineHeight: "32px", usage: "Component titles", sample: "Type Scale" },
    { name: "Body Large", size: "20px", weight: "400", lineHeight: "32px", usage: "Lead paragraphs", sample: "Introduction text and emphasis" },
    { name: "Body", size: "16px", weight: "400", lineHeight: "28px", usage: "Default body text", sample: "Standard paragraph text" },
    { name: "Body Small", size: "14px", weight: "400", lineHeight: "24px", usage: "Secondary text", sample: "Captions and metadata" },
  ];

  const fontWeights = [
    { name: "Light", weight: "300", usage: "Large displays, elegant headlines" },
    { name: "Regular", weight: "400", usage: "Body text, standard content" },
    { name: "Medium", weight: "500", usage: "Emphasis, important content" },
    { name: "Semibold", weight: "600", usage: "Headings, strong emphasis" },
    { name: "Bold", weight: "700", usage: "Strong calls-to-action" },
  ];

  return (
    <div className="min-h-screen bg-[#F3F3EE]">
      <PerplexitySidebar />
      
      <main className="ml-72">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Typography</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our typography system communicates EMuski's comprehensive OEM solutions with clarity and authority. 
              Built for technical communications, it conveys both engineering precision and manufacturing expertise.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-12">
          <div className="max-w-4xl space-y-12">
            
            {/* Typography Philosophy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Typography Philosophy</h2>
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Typography communicates EMuski's comprehensive OEM solutions across all touchpoints. 
                  Every typographic choice reflects our ability to deliver end-to-end solutions with 
                  engineering precision and manufacturing excellence.
                </p>
                <div className="bg-[#F3F3EE] rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Core Principles</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Technical Clarity:</strong> Clear communication of complex engineering and manufacturing concepts</li>
                    <li>• <strong>Professional Hierarchy:</strong> Structured information for OEM decision-makers</li>
                    <li>• <strong>Service Integration:</strong> Unified voice across engineering and manufacturing communications</li>
                    <li>• <strong>Global Accessibility:</strong> Clear communication for international OEM partners</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Primary Typeface */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Primary Typeface</h2>
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
                  <div>
                    <h3 className="text-6xl font-light text-gray-900 mb-4">FK Grotesk</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      FK Grotesk conveys the precision and reliability expected from a comprehensive 
                      OEM solutions provider. Its clean geometric lines reflect our systematic approach 
                      to engineering and manufacturing, ensuring clarity across all communications.
                    </p>
                    <div className="space-y-4">
                      <div className="text-gray-700">
                        <strong>Designer:</strong> Florian Karsten
                      </div>
                      <div className="text-gray-700">
                        <strong>Classification:</strong> Geometric Sans-serif
                      </div>
                      <div className="text-gray-700">
                        <strong>Weights Available:</strong> Light, Regular, Medium, Semibold, Bold
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F3F3EE] p-6 rounded-lg">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-light text-gray-900">Aa Bb Cc</div>
                      <div className="text-2xl text-gray-700">1 2 3 4 5 6</div>
                      <div className="text-lg text-gray-600">The quick brown fox</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Type Scale */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Type Scale</h2>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-8">
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our modular scale creates consistent visual hierarchy while maintaining 
                    proportional harmony across all brand communications.
                  </p>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {typeScale.map((type, index) => (
                    <div key={index} className="p-8">
                      <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-gray-900">{type.name}</h3>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div>Size: {type.size}</div>
                            <div>Weight: {type.weight}</div>
                            <div>Line Height: {type.lineHeight}</div>
                          </div>
                          <p className="text-sm text-gray-600 mt-3">{type.usage}</p>
                        </div>
                        <div 
                          className="text-gray-900"
                          style={{
                            fontSize: type.size === '96px' ? '4rem' : 
                                     type.size === '60px' ? '3rem' : 
                                     type.size === '48px' ? '2.5rem' :
                                     type.size === '36px' ? '2rem' :
                                     type.size === '24px' ? '1.5rem' :
                                     type.size === '20px' ? '1.25rem' :
                                     type.size === '16px' ? '1rem' : '0.875rem',
                            fontWeight: type.weight,
                            lineHeight: type.lineHeight
                          }}
                        >
                          {type.sample}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Font Weights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Font Weights</h2>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-8">
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Strategic use of font weights creates visual emphasis and helps establish 
                    information hierarchy throughout our communications.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  {fontWeights.map((weight, index) => (
                    <div key={index} className="p-6 text-center">
                      <div 
                        className="text-4xl text-gray-900 mb-3"
                        style={{ fontWeight: weight.weight }}
                      >
                        Ag
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{weight.name}</h3>
                      <div className="text-sm text-gray-600 mb-3">{weight.weight}</div>
                      <p className="text-xs text-gray-500 leading-relaxed">{weight.usage}</p>
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
                    <h3 className="font-semibold text-gray-900 mb-4">Best Practices</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#1FB8CD] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Use consistent line heights for improved readability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#1FB8CD] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Maintain adequate white space around text elements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#1FB8CD] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Limit line length to 45-75 characters for optimal reading</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#1FB8CD] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Test typography across different devices and screen sizes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Accessibility Standards</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#13343B] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Minimum 16px font size for body text</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#13343B] rounded-full mt-2 flex-shrink-0"></div>
                        <span>4.5:1 contrast ratio minimum for all text</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#13343B] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Support screen readers with semantic markup</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#13343B] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Allow text scaling up to 200% without horizontal scrolling</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Type in Action */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Typography in Action</h2>
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-5xl font-light text-gray-900 leading-tight">
                      One-Stop Solutions for OEM's
                    </h1>
                    <h2 className="text-3xl font-normal text-gray-800 leading-snug">
                      From Design to Delivery
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
                      EMuski provides comprehensive engineering and manufacturing services that enable 
                      OEM's to accelerate product development while optimizing costs and quality throughout 
                      the entire product lifecycle.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Our integrated approach combines design engineering, rapid prototyping, strategic 
                      sourcing, and full-scale manufacturing to deliver complete solutions for OEM partners.
                    </p>
                    <p className="text-sm text-gray-500">
                      Discover how our end-to-end capabilities streamline your product development process.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <FooterNav 
        prevPage={{
          label: "Identity",
          href: "/logo"
        }}
        nextPage={{
          label: "Colors",
          href: "/color"
        }}
      />
    </div>
  );
};

export default Typography;
