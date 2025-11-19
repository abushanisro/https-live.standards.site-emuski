import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const PerplexitySidebar = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(["brand-elements"]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const navigationSections = [
    {
      id: "introduction",
      title: "Introduction",
      items: [
        { label: "Brand Overview", href: "/" },
        { label: "How to Use", href: "/how-to-use" },
      ]
    },
    {
      id: "brand-elements", 
      title: "Brand Elements",
      items: [
        { label: "Identity", href: "/logo" },
        { label: "Typography", href: "/typography" }, 
        { label: "Colors", href: "/color" },
        { label: "Voice & Tone", href: "/voice" },
      ]
    },
    {
      id: "services",
      title: "OEM Services", 
      items: [
        { label: "Engineering Excellence", href: "/art-direction" },
        { label: "Manufacturing Mastery", href: "/brand" },
      ]
    }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const isActiveSection = (items: any[]) => {
    return items.some(item => isActivePath(item.href));
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-gray-200 overflow-y-auto z-40">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#13343B] flex items-center justify-center">
            <span className="text-white font-bold text-sm">EM</span>
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-lg">EMuski</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">One-Stop Solutions for OEM's</div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {navigationSections.map((section) => {
          const isExpanded = expandedSections.includes(section.id);
          const hasActiveItem = isActiveSection(section.items);
          
          return (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => toggleSection(section.id)}
                className={`w-full flex items-center justify-between p-3 text-left rounded-lg transition-colors ${
                  hasActiveItem ? 'bg-gray-50' : 'hover:bg-gray-50'
                }`}
              >
                <span className={`font-medium text-sm ${
                  hasActiveItem ? 'text-gray-900' : 'text-gray-700'
                }`}>
                  {section.title}
                </span>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </button>
              
              {isExpanded && (
                <div className="mt-1 ml-3 border-l border-gray-200">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`block py-2 px-4 text-sm transition-colors border-l-2 -ml-px ${
                        isActivePath(item.href)
                          ? 'border-[#1FB8CD] text-[#1FB8CD] bg-[#1FB8CD]/5'
                          : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default PerplexitySidebar;