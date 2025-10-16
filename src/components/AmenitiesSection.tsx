import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AmenityItem = {
  id: string;
  label: string;
  image: string;
  alt: string;
  title: string;
  blurb: string;
};

const AMENITIES: AmenityItem[] = [
  {
    id: "classrooms",
    label: "Classrooms",
    image: "/royal school carousel/classatrgs.avif",
    alt: "Students learning in a smart, centrally AC classroom",
    title: "Smart, centrally AC classrooms",
    blurb:
      "Bright, ergonomic spaces with interactive boards and seamless AV—so attention stays on learning and discussion."
  },
  {
    id: "science-labs",
    label: "Science Labs",
    image: "/royal school carousel/labs.avif",
    alt: "Students experimenting in a modern science lab",
    title: "Make, test, iterate",
    blurb:
      "Well-equipped Physics, Chemistry and Biology labs where curiosity meets safe, hands-on experimentation."
  },
  {
    id: "robotics-ai",
    label: "Robotics & AI Lab",
    image: "/royal school carousel/ailabatrgs.avif",
    alt: "Students building robots and coding sensors",
    title: "Build with code and circuits",
    blurb:
      "From sensors and microcontrollers to real prototypes—iterate fast, think computationally, and ship projects."
  },
  {
    id: "library",
    label: "Library",
    image: "/royal school carousel/libraryrgs.avif",
    alt: "Students reading in a sunlit library",
    title: "Read, research, reset",
    blurb:
      "A 16k+ collection, quiet carrels and sunlit corners for deep focus—plus DEAR time to grow everyday reading habits."
  },
  {
    id: "sports",
    label: "Sports Complex",
    image: "/royal school carousel/horsesatroyal.avif",
    alt: "Students practicing across multi-sport facilities",
    title: "Play to your strengths",
    blurb:
      "17+ sports across fields, courts, pool and gym—structured coaching that builds skill, fitness and character."
  },
  {
    id: "arts",
    label: "Performing Arts",
    image: "/royal school carousel/culturergsdance.avif",
    alt: "Students performing on a lit stage",
    title: "Create your stage",
    blurb:
      "Studios for fine arts, theatre, dance and music—equipped for daily practice, performance and joy."
  },
  {
    id: "boarding",
    label: "Boarding",
    image: "/royal school carousel/royal hostel best in india.avif",
    alt: "Boys' and girls' hostel buildings with students",
    title: "A second home that supports you",
    blurb:
      "AC hostels (Amaltas & Gulmohar), pastoral care, supervised prep, nutritious meals and weekend clubs."
  },
];

export default function AmenitiesSection() {
  const [active, setActive] = React.useState<string>(AMENITIES[0].id);
  const current = AMENITIES.find((a) => a.id === active)!;


  type Dropdown = { id: string; label: string; items: string[] };
  const DROPDOWNS: Dropdown[] = [
    {
      id: "all",
      label: "All Facilities",
      items: [
        "Smart Classrooms",
        "Science Labs (Phy/Chem/Bio)",
        "Robotics & AI Lab",
        "Computer Lab",
        "Language Lab",
        "Library (16,000+ books)",
        "Cricket",
        "Football",
        "Swimming",
        "Tennis",
        "Basketball",
        "Badminton",
        "Table Tennis",
        "Skating",
        "Archery",
        "Chess",
        "Yoga",
        "Taekwondo",
        "Squash",
        "Shooting",
        "Volleyball",
        "Horse Riding",
        "Pool/Billiards",
        "Theatre",
        "Dance/Ballet",
        "Vocal & Instruments",
        "Fine Arts Studio",
        "Amaltas (Boys Hostel)",
        "Gulmohar (Girls Hostel)",
        "Pastoral Care",
        "Vegetarian Campus",
        "Balanced Menu",
        "Infirmary",
        "35 AC Buses with GPS",
        "Lady Attendants",
        "CCTV & Entry Protocols",
        "School App",
        "Bus Tracking App"
      ],
    },
  ];

  const [openId, setOpenId] = React.useState<string | null>(null);
  const toggle = (id: string) => setOpenId((p) => (p === id ? null : id));

  return (
    <section className="px-6 bg-background" style={{ paddingTop: '36px', paddingBottom: '96px' }}>
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-foreground leading-tight"
          style={{
            fontSize: '44px',
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 'bold'
          }}
        >
          Life at
          <br className="hidden md:block" />
              Royal Global School
            </h2>
            
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(300px,360px)_minmax(0,1fr)]">
          <aside className="max-w-[340px] mt-[42px]">
            <h3 
              className="text-foreground"
              style={{
                fontSize: '20px',
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 'bold'
              }}
            >
              {current.title}
            </h3>
            
            <p 
              className="mt-3 text-muted-foreground"
              style={{
                fontSize: '16px',
                fontFamily: 'Satoshi, sans-serif',
                lineHeight: '1.5'
              }}
            >
              {current.blurb}
            </p>

            {/* Text-link dropdowns bordered by two lines */}
            <div className="mt-6">
              {DROPDOWNS.map((dd) => {
                const isOpen = openId === dd.id;
                return (
                  <div key={dd.id} className="select-none">
                    <button
                      type="button"
                      onClick={() => toggle(dd.id)}
                      className={cn(
                        "flex w-full items-center justify-between text-left",
                        "h-[34px] text-foreground",
                        "border-t border-b border-muted/60"
                      )}
                      style={{
                        fontSize: '12px',
                        fontFamily: 'Satoshi, sans-serif'
                      }}
                      aria-expanded={isOpen}
                    >
                      <span className="pr-3">{dd.label}</span>
                      <span className="pl-3 text-lg leading-none">{isOpen ? "–" : "+"}</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden will-change-transform"
                        >
                          <ul className="py-4 text-foreground/90">
                            {dd.items.map((it) => (
                              <li key={it}>
                                <button 
                                  className="text-left hover:text-foreground transition-colors duration-200"
                                  style={{
                                    fontSize: '12px',
                                    fontFamily: 'Satoshi, sans-serif',
                                    lineHeight: '1.5'
                                  }}
                                  onClick={() => {
                                    // TODO: Add navigation to different sources/components
                                    console.log(`Navigate to: ${it}`);
                                  }}
                                >
                                  {it}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>
                );
              })}
            </div>
            
            <div className="mt-8">
              <button
                className={cn(
                  "inline-flex items-center justify-center rounded-full px-5 py-2.5",
                  "bg-neutral-900 text-white text-sm font-medium",
                  "shadow-[inset_0_0_0_1px_rgba(255,255,255,.08),0_2px_8px_rgba(0,0,0,.18)]",
                  "hover:bg-neutral-800 active:translate-y-px transition"
                )}
            >
              Apply Online
              </button>
            </div>
          </aside>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-200 lg:h-[665px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.alt}
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, y: 12, scale: 1.01 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 1.005 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-x-0 bottom-5 flex w-full justify-center">
                <div
                  className={cn(
                    "pointer-events-auto mx-4 inline-flex",
                    "bg-white/90 px-6 py-4",
                    "backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-md"
                  )}
                  style={{
                    borderRadius: '50px'
                  }}
                >
                  {AMENITIES.map((a, index) => {
                    const isActive = a.id === active;
                    return (
                      <button
                        key={a.id}
                        onClick={() => setActive(a.id)}
                        className={cn(
                          "whitespace-nowrap text-center transition-colors duration-200",
                          "first:pl-0 last:pr-0",
                          index > 0 && "ml-4"
                        )}
                        style={{
                          color: isActive ? '#212121' : '#a8a6a0',
                          fontFamily: 'Satoshi, sans-serif',
                          fontSize: '12px',
                          fontWeight: '400'
                        }}
                        aria-pressed={isActive}
                        aria-label={`Show ${a.label}`}
                      >
                        {a.label}
                      </button>
                    );
                  })}
                </div>
              </div>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}