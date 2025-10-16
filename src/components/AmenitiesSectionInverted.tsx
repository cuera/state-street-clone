import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconArrowsLeftRight,
  IconBook,
  IconCertificate,
  IconTarget,
  IconUsers,
  IconDeviceMobile,
  IconShield,
} from "@tabler/icons-react";

type AmenityItem = {
  id: string;
  label: string;
  image: string;
  alt: string;
  title: string;
  blurb: string;
  icon: typeof IconArrowsLeftRight;
};

const AMENITIES: AmenityItem[] = [
  {
    id: "paths",
    label: "Flexible Pathways",
    image: "/royal school carousel/classatrgs.avif",
    alt: "Students choosing day school or boarding options",
    title: "Day School + Boarding",
    blurb:
      "Choose day schooling or full residential boarding—pick what fits your family routine and learning style.",
    icon: IconArrowsLeftRight,
  },
  {
    id: "cambridge",
    label: "Cambridge EYP",
    image: "/royal school carousel/labs.avif",
    alt: "Cambridge Early Years and Primary",
    title: "Cambridge Early Years & Primary",
    blurb:
      "Cambridge for Nursery–UKG (mandatory) and optional in I–III.",
    icon: IconBook,
  },
  {
    id: "cbse",
    label: "CBSE K–12",
    image: "/royal school carousel/ailabatrgs.avif",
    alt: "CBSE curriculum",
    title: "CBSE K-12",
    blurb:
      "Since 2012, aligned with NEP/NCF.",
    icon: IconCertificate,
  },
  {
    id: "career",
    label: "Career & Exams",
    image: "/royal school carousel/libraryrgs.avif",
    alt: "Career and exam guidance",
    title: "Career & Exam Support",
    blurb:
      "Counselling, remedials, prep for boarders, need-based JEE/NEET (XI–XII).",
    icon: IconTarget,
  },
  {
    id: "clubs",
    label: "Clubs & Service",
    image: "/royal school carousel/horsesatroyal.avif",
    alt: "Student clubs and service",
    title: "Clubs & Service",
    blurb:
      "Interact, MUN, Eco, Literary, IT, Math and more—mandatory registration (VI–XII).",
    icon: IconUsers,
  },
  {
    id: "erp",
    label: "ERP + App",
    image: "/royal school carousel/culturergsdance.avif",
    alt: "School ERP and App",
    title: "Digital ERP + School App",
    blurb:
      "Notices, homework, report cards; admit cards & bus tracking app.",
    icon: IconDeviceMobile,
  },
  {
    id: "safety",
    label: "Child-Safe",
    image: "/royal school carousel/royal hostel best in india.avif",
    alt: "Safe campus",
    title: "Child-Safe Campus",
    blurb:
      "Policies, supervision, infirmary & registered nurse.",
    icon: IconShield,
  },
];

export default function AmenitiesSectionInverted() {
  const [active, setActive] = React.useState<string>(AMENITIES[0].id);
  const current = AMENITIES.find((a) => a.id === active)!;


  return (
    <section className="px-6 bg-background" style={{ paddingTop: '16px', paddingBottom: '96px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,360px)]">
          <div className="relative lg:order-1">
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

              {/* Icon + label overlay (top-left) */}
              <div className="absolute left-4 top-4">
                <div
                  className={cn(
                    "inline-flex items-center px-3 py-1.5",
                    "bg-white/90 text-foreground",
                    "backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm"
                  )}
                  style={{ borderRadius: 9999 }}
                >
                  {(() => {
                    const ActiveIcon = current.icon;
                    return <ActiveIcon size={16} className="mr-2" />;
                  })()}
                  <span style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '12px', fontWeight: 500 }}>
                    {current.label}
                  </span>
                </div>
              </div>

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

          <aside className="max-w-[340px] lg:order-2" style={{ marginTop: '55px' }}>
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
        </div>
      </div>
    </section>
  );
}


