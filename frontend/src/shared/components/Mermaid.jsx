import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

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
    <div className="mermaid flex justify-center w-full overflow-x-auto p-4 lg:p-12 min-h-[300px]" ref={mermaidRef}>
      {chart}
    </div>
  );
};

export default Mermaid;
