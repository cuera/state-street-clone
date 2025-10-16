import React, { useEffect, useRef, useState } from "react";
import styles from "./Section505.module.css";

export type SectionItem = {
  id: string;
  kicker?: string;
  title: string;
  body: string;
  image: string;
};

export type Section505Props = {
  items: SectionItem[];
  stickyTop?: string; // e.g., "6rem"
  maxWidth?: number; // container max width in px (default 1280)
  heading?: string; // optional section heading shown above
};

// ---------------------------------------------------------
// Hook: central activation band (IO + RAF tie-breaker)
// ---------------------------------------------------------
function useActiveIndex(refs: React.MutableRefObject<(HTMLElement | null)[]>) {
  const [active, setActive] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const elements = refs.current.filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    // 1) Intersection band around the viewport center
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const idx = Number((e.target as HTMLElement).dataset.index);
          if (e.isIntersecting) setActive(idx);
        });
      },
      { root: null, rootMargin: "-45% 0% -45% 0%", threshold: 0.001 }
    );

    elements.forEach((el) => io.observe(el));

    // 2) RAF tie-breaker: pick the closest center to viewport center
    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        const vpCenter = window.innerHeight * 0.5;
        let best = 0;
        let bestDist = Infinity;
        elements.forEach((el, i) => {
          const r = el.getBoundingClientRect();
          const center = r.top + r.height * 0.5;
          const d = Math.abs(center - vpCenter);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setActive(best);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial pick

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [refs]);

  return active;
}

// ---------------------------------------------------------
// Component
// ---------------------------------------------------------
export default function Section505({ items, stickyTop = "6rem", maxWidth = 1280, heading }: Section505Props) {
  const refs = useRef<Array<HTMLElement | null>>([]);
  const active = useActiveIndex(refs);

  // Preload images to remove flicker during crossfade
  useEffect(() => {
    const imgs = items.map((it) => {
      const img = new Image();
      img.src = it.image;
      return img;
    });
    return () => imgs.forEach((img) => (img.src = ""));
  }, [items]);

  const styleVars: React.CSSProperties & { ["--sticky-top"]: string; ["--mw"]: string } = {
    "--sticky-top": stickyTop,
    "--mw": `${maxWidth}px`,
  };

  return (
    <section className={styles.wrap} style={styleVars}>
      {heading ? <h2 className={styles.heading}>{heading}</h2> : null}
      <div className={styles.grid}>
        {/* Left column: tall items */}
        <div className={styles.left}>
          <ol className={styles.stack}>
            {items.map((it, i) => (
              <li
                key={it.id}
                data-index={i}
                ref={(el) => (refs.current[i] = el)}
                className={`${styles.item} ${i === active ? styles.isActive : styles.isDim}`}
                aria-current={i === active ? "true" : undefined}
              >
                {it.kicker ? <span className={styles.kicker}>{it.kicker}</span> : null}
                {it.title ? <h3 className={styles.title}>{it.title}</h3> : null}
                {it.body ? <p className={styles.body}>{it.body}</p> : null}
              </li>
            ))}
          </ol>
        </div>

        {/* Right column: sticky visual stage */}
        <aside className={styles.right}>
          <div className={styles.sticky}>
            <div className={styles.stage}>
              {items.map((it, i) => (
                <img
                  key={it.id}
                  src={it.image}
                  alt=""
                  className={`${styles.visual} ${i === active ? styles.vActive : styles.vIdle}`}
                  aria-hidden={i !== active}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}


