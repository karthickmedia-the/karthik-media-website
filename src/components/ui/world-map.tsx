import { useRef, useState, useMemo, useEffect } from "react";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  showLabels?: boolean;
  labelClassName?: string;
  animationDuration?: number;
  loop?: boolean;
}

export function WorldMap({ 
  dots = [], 
  lineColor = "#C8F200",
  showLabels = true,
}: MapProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Only render map when visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Static map SVG - simplified without DottedMap library for better performance
  const staticMapBackground = useMemo(() => {
    return (
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, ${lineColor}40 1px, transparent 1px)`,
          backgroundSize: '12px 12px'
        }}
      />
    );
  }, [lineColor]);

  return (
    <div 
      ref={containerRef}
      className="w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[2/1] bg-black rounded-lg relative font-sans overflow-hidden"
    >
      {staticMapBackground}
      
      {isVisible && (
        <svg
          viewBox="0 0 800 400"
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="path-gradient-simple" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {dots.map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng);
            const endPoint = projectPoint(dot.end.lat, dot.end.lng);
            
            return (
              <g key={`path-group-${i}`}>
                {/* Static path */}
                <path
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  stroke="url(#path-gradient-simple)"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
                
                {/* Start point */}
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="4"
                  fill={lineColor}
                />
                
                {/* End point */}
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="4"
                  fill={lineColor}
                />
                
                {/* Labels */}
                {showLabels && dot.start.label && (
                  <foreignObject
                    x={startPoint.x - 50}
                    y={startPoint.y - 30}
                    width="100"
                    height="25"
                  >
                    <div className="flex items-center justify-center h-full">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-black/90 text-white border border-gray-700">
                        {dot.start.label}
                      </span>
                    </div>
                  </foreignObject>
                )}
                
                {showLabels && dot.end.label && (
                  <foreignObject
                    x={endPoint.x - 50}
                    y={endPoint.y - 30}
                    width="100"
                    height="25"
                  >
                    <div className="flex items-center justify-center h-full">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-black/90 text-white border border-gray-700">
                        {dot.end.label}
                      </span>
                    </div>
                  </foreignObject>
                )}
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}
