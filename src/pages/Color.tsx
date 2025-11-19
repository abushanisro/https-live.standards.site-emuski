import PerplexitySidebar from "@/components/PerplexitySidebar";
import FooterNav from "@/components/FooterNav";
import { useState } from "react";

const Color = () => {
  const [copiedColor, setCopiedColor] = useState<string>("");

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedColor(value);
    setTimeout(() => setCopiedColor(""), 2000);
  };

  const primaryColors = [
    { name: "Inky Blue", hex: "#13343B", hsl: "192 50% 15%", rgb: "19, 52, 59", usage: "Primary brand, headers, navigation" },
    { name: "Plex Blue", hex: "#1FB8CD", hsl: "185 75% 47%", rgb: "31, 184, 205", usage: "Interactive elements, CTAs, links" },
  ];

  const neutralColors = [
    { name: "Vintage White", hex: "#F3F3EE", hsl: "60 11% 94%", rgb: "243, 243, 238", usage: "Page backgrounds, light surfaces" },
    { name: "Site White", hex: "#FFFFFF", hsl: "0 0% 100%", rgb: "255, 255, 255", usage: "Card backgrounds, content areas" },
    { name: "Gray 600", hex: "#525252", hsl: "0 0% 32%", rgb: "82, 82, 82", usage: "Body text, secondary content" },
    { name: "Gray 900", hex: "#171717", hsl: "0 0% 9%", rgb: "23, 23, 23", usage: "Headings, primary text" },
  ];

  const ColorSwatch = ({ name, hex, hsl, rgb, usage }: any) => (
    <div 
      className="group cursor-pointer"
      onClick={() => copyToClipboard(hex)}
    >
      <div 
        className="h-32 rounded-lg border border-gray-200 mb-3 relative overflow-hidden transition-transform duration-200 group-hover:scale-105 shadow-sm"
        style={{ backgroundColor: hex }}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
            {copiedColor === hex ? (
              <span className="text-xs text-green-600">✓</span>
            ) : (
              <span className="text-xs text-gray-600">⎘</span>
            )}
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
        <p className="text-xs font-mono text-gray-600">{hex}</p>
        <p className="text-xs font-mono text-gray-500">HSL({hsl})</p>
        <p className="text-xs font-mono text-gray-500">RGB({rgb})</p>
        <p className="text-xs text-gray-600 leading-relaxed mt-2">{usage}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F3F3EE]">
      <PerplexitySidebar />
      
      <main className="ml-72">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Colors</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our color palette reflects our position as One-Stop Solutions for OEM's, conveying trust, 
              technical expertise, and manufacturing excellence. Each color reinforces our comprehensive 
              approach to engineering and production services.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-12">
          <div className="max-w-4xl space-y-12">
            
            {/* Color Philosophy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Color Philosophy</h2>
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-6">
                  EMuski's color system reflects our comprehensive OEM solutions, combining the reliability 
                  of deep blue with the innovation of cyan. This palette communicates our ability to handle 
                  every aspect of product development, from engineering to manufacturing delivery.
                </p>
                <div className="bg-[#F3F3EE] rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Color Psychology</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Inky Blue:</strong> Manufacturing reliability and comprehensive OEM expertise</li>
                    <li>• <strong>Plex Blue:</strong> Engineering innovation and technical precision</li>
                    <li>• <strong>Neutrals:</strong> Professional balance for complex technical communications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Primary Colors */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Primary Colors</h2>
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our primary colors establish brand recognition and convey our core values. 
                  Use these colors for key brand moments and primary interface elements.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  {primaryColors.map((color) => (
                    <ColorSwatch key={color.name} {...color} />
                  ))}
                </div>
              </div>
            </section>

            {/* Neutral Colors */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Neutral Colors</h2>
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Neutral colors form the foundation of our design system, providing balance and ensuring 
                  optimal readability across all content.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {neutralColors.map((color) => (
                    <ColorSwatch key={color.name} {...color} />
                  ))}
                </div>
              </div>
            </section>

            {/* Color Combinations */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Color Combinations</h2>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-8">
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Thoughtful color combinations ensure brand consistency and optimal user experience 
                    across all touchpoints.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="p-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Recommended Pairings</h3>
                    
                    {/* Inky Blue + Vintage White */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-6 rounded" style={{ backgroundColor: '#13343B' }}></div>
                        <span className="text-sm">+</span>
                        <div className="w-6 h-6 rounded border" style={{ backgroundColor: '#F3F3EE' }}></div>
                        <span className="text-sm font-medium">Primary + Background</span>
                      </div>
                      <p className="text-xs text-gray-600">Ideal for headers, navigation, and primary content areas</p>
                    </div>
                    
                    {/* Plex Blue + Site White */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-6 rounded" style={{ backgroundColor: '#1FB8CD' }}></div>
                        <span className="text-sm">+</span>
                        <div className="w-6 h-6 rounded border" style={{ backgroundColor: '#FFFFFF' }}></div>
                        <span className="text-sm font-medium">Interactive + Surface</span>
                      </div>
                      <p className="text-xs text-gray-600">Perfect for buttons, links, and call-to-action elements</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Usage Guidelines</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#1FB8CD] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Always test color combinations for accessibility compliance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#1FB8CD] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Use high contrast ratios for text and background combinations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#1FB8CD] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Maintain consistency across all brand touchpoints</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#1FB8CD] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Consider color perception differences when designing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Accessibility */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Accessibility Standards</h2>
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  All color combinations meet WCAG 2.1 AA accessibility standards to ensure 
                  our content is accessible to users with visual impairments.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-[#F3F3EE] rounded-lg">
                    <div className="text-3xl font-bold text-gray-900 mb-2">4.5:1</div>
                    <div className="text-sm text-gray-600">Normal text minimum</div>
                  </div>
                  <div className="text-center p-6 bg-[#F3F3EE] rounded-lg">
                    <div className="text-3xl font-bold text-gray-900 mb-2">3:1</div>
                    <div className="text-sm text-gray-600">Large text minimum</div>
                  </div>
                  <div className="text-center p-6 bg-[#F3F3EE] rounded-lg">
                    <div className="text-3xl font-bold text-gray-900 mb-2">7:1</div>
                    <div className="text-sm text-gray-600">AAA enhanced contrast</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <FooterNav 
        prevPage={{
          label: "Typography",
          href: "/typography"
        }}
        nextPage={{
          label: "Voice & Tone",
          href: "/voice"
        }}
      />
    </div>
  );
};

export default Color;
