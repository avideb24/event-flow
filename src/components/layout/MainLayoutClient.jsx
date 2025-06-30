'use client';

import LocomotiveScroll from 'locomotive-scroll';


export default function MainLayoutClient({ children }) {

    const locomotiveScroll = new LocomotiveScroll();

  return (
    <main>
        {children}
    </main>
  );
} 