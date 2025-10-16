"use client";

import React from "react";
import { useNavigationVisibility } from "@/hooks/use-navigation-visibility";

export default function VirtualTour() {
  const { hideNavigation, showNavigation } = useNavigationVisibility();
  const sectionRef = React.useRef<HTMLElement | null>(null);

  // Intersection Observer to hide nav when virtual tour is in viewport
  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          hideNavigation();
        } else {
          showNavigation();
        }
      },
      {
        threshold: 0.3, // Hide nav when 30% of section is visible
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [hideNavigation, showNavigation]);

  return (
    <section ref={sectionRef} className="px-6 bg-background" style={{ paddingTop: '90px', paddingBottom: '96px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <div
            className="inline-flex items-center px-4 py-1.5 bg-neutral-100 text-neutral-700 shadow-sm"
            style={{ borderRadius: 9999 }}
          >
            <span style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '12px', fontWeight: 600 }}>
              Explore our campus
            </span>
          </div>
        </div>

        <h2
          className="text-center text-neutral-900 mt-5"
          style={{ fontSize: '36px', lineHeight: 1.2, fontFamily: 'Satoshi, sans-serif', fontWeight: 800 }}
        >
          Take a <span style={{ color: '#bdd663' }}>virtual tour</span>
          <br />
          of our campus.
        </h2>

        <div className="relative overflow-hidden rounded-2xl bg-neutral-200 aspect-[16/9] mt-8">
          {/* Embedded 360° virtual tour */}
          <iframe
            src="https://tourmkr.com/F1Igc0wOdc/10970550p&6.8h&90t"
            title="Royal Global School Virtual Tour"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; xr-spatial-tracking; fullscreen; vr"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}
