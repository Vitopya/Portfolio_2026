'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut de page"
      className={`hidden md:flex fixed bottom-8 right-8 z-40 w-[2.625rem] h-[2.5rem] items-center justify-center bg-[#F9F4EF] text-[#8C7851] rounded-[4px] border border-[#8C7851] hover:bg-[#8C7851] hover:text-[#FFFFFE] hover:border-[#8C7851] transition-all duration-300 ease-in-out ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp size={16} strokeWidth={2} />
    </button>
  );
}
