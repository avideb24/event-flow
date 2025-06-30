'use client';

import { useEffect, useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function MainLayoutClient({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let scrollInstance;

    import('locomotive-scroll').then((LocomotiveScroll) => {
      scrollInstance = new LocomotiveScroll.default({
        el: containerRef.current,
        smooth: true,
      });

      // Optional: If you really need to force refresh on load:
      window.addEventListener('load', () => {
        // No update() in modern versions, scrollTo or start/stop available
        console.log('Window loaded, LocomotiveScroll ready');
      });
    });

    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, []);

  return (
    <main data-scroll-container ref={containerRef}>
      {children}
    </main>
  );
}
