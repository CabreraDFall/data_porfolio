import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

// Initialize mermaid with dark theme and professional configuration
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'Outfit, sans-serif',
  themeVariables: {
    primaryColor: '#58f5d1',
    primaryTextColor: '#fff',
    primaryBorderColor: '#58f5d1',
    lineColor: '#58f5d1',
    secondaryColor: '#0c121b',
    tertiaryColor: '#2b313c',
    mainBkg: 'transparent',
    nodeBorder: 'rgba(88,245,209,0.3)',
    clusterBkg: 'rgba(255,255,255,0.05)',
    clusterBorder: 'rgba(255,255,255,0.1)',
    edgeLabelBackground: '#0d121b',
  }
});

const Mermaid = ({ chart }) => {
  const mermaidRef = useRef(null);

  useEffect(() => {
    if (mermaidRef.current && chart) {
      // Clear previous content to avoid duplicate rendering issues
      mermaidRef.current.removeAttribute('data-processed');
      mermaidRef.current.innerHTML = chart;
      
      // Request mermaid to render the new content
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className="relative group w-full h-full flex flex-col items-center">
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        minScale={0.5}
        maxScale={4}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Control Bar */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 p-1.5 glass-panel rounded-full border border-white/10 bg-surface-container-lowest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={() => zoomIn()}
                className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
                title="Zoom In"
              >
                <span className="material-symbols-outlined text-lg">add</span>
              </button>
              <button 
                onClick={() => zoomOut()}
                className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
                title="Zoom Out"
              >
                <span className="material-symbols-outlined text-lg">remove</span>
              </button>
              <div className="w-px h-6 bg-white/10 self-center"></div>
              <button 
                onClick={() => resetTransform()}
                className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
                title="Reset View"
              >
                <span className="material-symbols-outlined text-lg">restart_alt</span>
              </button>
            </div>

            {/* Hint for panning */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity flex items-center gap-2">
               <span className="material-symbols-outlined text-xs">pan_tool</span>
               <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant italic">Drag to pan • Scroll to zoom</span>
            </div>

            <TransformComponent
              wrapperStyle={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
              contentStyle={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <div 
                className="mermaid flex justify-center w-full min-h-[300px] cursor-grab active:cursor-grabbing p-12 transition-all" 
                ref={mermaidRef}
              >
                {chart}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default Mermaid;
