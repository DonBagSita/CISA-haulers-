'use client';

import { useEffect, useRef } from 'react';

export default function ScrollHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cisaRef = useRef<HTMLSpanElement>(null);
  const hauliersRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function onScroll() {
      const wrapper = wrapperRef.current;
      const card = cardRef.current;
      const cisa = cisaRef.current;
      const hauliers = hauliersRef.current;
      const tagline = taglineRef.current;
      const hint = hintRef.current;
      if (!wrapper || !card) return;

      const wrapperTop = -wrapper.getBoundingClientRect().top;
      const wrapperHeight = wrapper.offsetHeight - window.innerHeight;
      if (wrapperHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, wrapperTop / wrapperHeight));

      // Card expansion
      const cardW = lerp(68, 100, Math.min(progress * 1.4, 1));
      const cardH = lerp(72, 100, Math.min(progress * 1.4, 1));
      const cardRadius = lerp(8, 0, Math.min(progress * 1.4, 1));
      card.style.width = `${cardW}vw`;
      card.style.height = `${cardH}vh`;
      card.style.borderRadius = `${cardRadius}px`;

      // Title split
      const titleProg = Math.min(progress * 2.2, 1);
      const tx = titleProg * 120;
      if (cisa) cisa.style.transform = `translateX(-${tx}vw)`;
      if (hauliers) hauliers.style.transform = `translateX(${tx}vw)`;

      // Fades
      if (tagline) tagline.style.opacity = String(Math.max(0, 1 - progress * 5));
      if (hint) hint.style.opacity = String(Math.max(0, 1 - progress * 8));
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={wrapperRef} className="relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0B1220]">
          {/* Use next/image in production: <Image fill priority src="/hero.jpg" alt="" className="object-cover opacity-55" /> */}
          <img
            src="/images/hero.jpg"
            alt=""
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,18,32,0.3)] to-[rgba(11,18,32,0.7)]" />
        </div>

        {/* Expanding card */}
        <div
          ref={cardRef}
          className="relative z-10 overflow-hidden"
          style={{
            width: '68vw',
            height: '72vh',
            borderRadius: '8px',
            boxShadow: '0 40px 120px rgba(0,0,0,0.7)',
            willChange: 'width, height, border-radius',
          }}
        >
          <img
            src="/images/hero.jpg"
            alt="Cisa Hauliers heavy transport"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(11,18,32,0.65)]" />
        </div>

        {/* Title */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <span
            ref={cisaRef}
            className="block font-display text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(5rem, 12vw, 10rem)',
              lineHeight: 0.9,
              letterSpacing: '0.06em',
              willChange: 'transform',
            }}
          >
            CISA
          </span>
          <span
            ref={hauliersRef}
            className="block font-display text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(5rem, 12vw, 10rem)',
              lineHeight: 0.9,
              letterSpacing: '0.06em',
              willChange: 'transform',
            }}
          >
            HAULIERS
          </span>
          <div
            ref={taglineRef}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.75rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#F97316',
            }}
          >
            Contractors · Transporters · Commission Agents
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#94A3B8' }}>
            Scroll
          </span>
          <div className="scroll-arrow" />
        </div>
      </div>
    </section>
  );
}
