const IndustrialBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-overlay))]/95 via-[hsl(var(--hero-overlay))]/90 to-[hsl(var(--industrial-dark))]/95" />
      
      {/* Subtle grid pattern */}
      <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="industrial-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#industrial-grid)" />
      </svg>
      
      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[hsl(var(--industrial-blue))]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[hsl(var(--industrial-blue))]/5 to-transparent" />
    </div>
  );
};

export default IndustrialBackground;
