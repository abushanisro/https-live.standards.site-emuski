import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import EmuskiLogoMain from "@/assets/EMUSKI_logo.svg";
import EmuskiIcon from "@/assets/3.icon.png";

interface FooterNavProps {
  prevPage?: {
    label: string;
    href: string;
  };
  nextPage?: {
    label: string;
    href: string;
  };
}

const FooterNav = ({ prevPage, nextPage }: FooterNavProps) => {
  const location = useLocation();
  
  const getPageName = () => {
    const path = location.pathname;
    const pageMap: { [key: string]: string } = {
      '/': 'Home',
      '/logo': 'Logo & Identity', 
      '/typography': 'Typography',
      '/color': 'Color Palette',
      '/art-direction': 'Visual Design',
      '/brand': 'Brand Voice',
      '/perplexity': 'Perplexity Home',
      '/perplexity/logo': 'Logo & Identity',
      '/perplexity/typography': 'Typography', 
      '/perplexity/color': 'Color Palette',
      '/perplexity/art-direction': 'Visual Design',
      '/perplexity/brand': 'Brand Voice'
    };
    return pageMap[path] || 'Page';
  };

  return (
    <footer className="border-t border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-6 md:hidden">
          {/* EMuski Logo & Page Name - Mobile */}
          <div className="text-center">
            <Link to="/" className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50/80 transition-colors duration-300">
              <div className="flex items-center gap-2">
                <img 
                  src={EmuskiIcon} 
                  alt="EMUSKI Icon" 
                  className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="text-left">
                  <div className="text-lg font-bold text-gray-900 group-hover:text-[#4fd3d4] transition-colors duration-300">EMUSKI</div>
                  <div className="text-xs text-[#4fd3d4] font-medium">{getPageName()}</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation - Mobile */}
          <div className="flex items-center justify-between gap-4">
            {/* Previous Page - Mobile */}
            <div className="flex-1">
              {prevPage ? (
                <Link 
                  to={prevPage.href}
                  className="group inline-flex items-center gap-2 text-gray-600 hover:text-[#4fd3d4] transition-all duration-300 p-2 rounded-lg hover:bg-gray-50 w-full"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#4fd3d4] transition-colors duration-300 flex-shrink-0">
                    <ArrowLeft className="w-4 h-4 group-hover:text-white transition-all duration-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Previous</div>
                    <div className="font-semibold text-gray-900 text-sm truncate">{prevPage.label}</div>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>

            {/* Next Page - Mobile */}
            <div className="flex-1 flex justify-end">
              {nextPage ? (
                <Link 
                  to={nextPage.href}
                  className="group inline-flex items-center gap-2 text-gray-600 hover:text-[#4fd3d4] transition-all duration-300 p-2 rounded-lg hover:bg-gray-50 w-full justify-end"
                >
                  <div className="text-right min-w-0">
                    <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Next</div>
                    <div className="font-semibold text-gray-900 text-sm truncate">{nextPage.label}</div>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#4fd3d4] transition-colors duration-300 flex-shrink-0">
                    <ArrowRight className="w-4 h-4 group-hover:text-white transition-all duration-300" />
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Previous Page - Desktop */}
          <div className="flex-1 min-w-0">
            {prevPage ? (
              <Link 
                to={prevPage.href}
                className="group inline-flex items-center gap-4 text-gray-600 hover:text-[#4fd3d4] transition-all duration-300 p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#4fd3d4] transition-colors duration-300">
                  <ArrowLeft className="w-5 h-5 group-hover:text-white group-hover:-translate-x-0.5 transition-all duration-300" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Previous</div>
                  <div className="font-semibold text-gray-900 truncate">{prevPage.label}</div>
                </div>
              </Link>
            ) : (
              <div className="w-full"></div>
            )}
          </div>

          {/* EMuski Logo & Page Name - Desktop */}
          <div className="flex-shrink-0 mx-4 lg:mx-8 text-center">
            <Link to="/" className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gray-50/80 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <img 
                  src={EmuskiIcon} 
                  alt="EMUSKI Icon" 
                  className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900 group-hover:text-[#4fd3d4] transition-colors duration-300">EMUSKI</div>
                  <div className="text-sm text-[#4fd3d4] font-medium">{getPageName()}</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Next Page - Desktop */}
          <div className="flex-1 flex justify-end min-w-0">
            {nextPage ? (
              <Link 
                to={nextPage.href}
                className="group inline-flex items-center gap-4 text-gray-600 hover:text-[#4fd3d4] transition-all duration-300 p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="text-right min-w-0">
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Next</div>
                  <div className="font-semibold text-gray-900 truncate">{nextPage.label}</div>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#4fd3d4] transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </Link>
            ) : (
              <div className="w-full"></div>
            )}
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2">
            {['/', '/logo', '/typography', '/color', '/art-direction', '/brand'].map((path, index) => (
              <div 
                key={path}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  location.pathname === path 
                    ? 'bg-[#4fd3d4]' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;