const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(var(--grid-line))" strokeWidth="1" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Diagonal lines */}
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="hsl(var(--grid-line))" strokeWidth="1" opacity="0.2" />
        <line x1="0" y1="33%" x2="100%" y2="133%" stroke="hsl(var(--grid-line))" strokeWidth="1" opacity="0.2" />
        <line x1="0" y1="66%" x2="100%" y2="166%" stroke="hsl(var(--grid-line))" strokeWidth="1" opacity="0.2" />
        <line x1="0" y1="-33%" x2="100%" y2="66%" stroke="hsl(var(--grid-line))" strokeWidth="1" opacity="0.2" />
        <line x1="0" y1="-66%" x2="100%" y2="33%" stroke="hsl(var(--grid-line))" strokeWidth="1" opacity="0.2" />
        
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="hsl(var(--grid-line))" strokeWidth="1" opacity="0.2" />
        <line x1="100%" y1="33%" x2="0" y2="133%" stroke="hsl(var(--grid-line))" strokeWidth="1" opacity="0.2" />
        <line x1="100%" y1="-33%" x2="0" y2="66%" stroke="hsl(var(--grid-line))" strokeWidth="1" opacity="0.2" />
      </svg>
    </div>
  );
};

export default GridBackground;
