import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigationVisibility } from "@/hooks/use-navigation-visibility";
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

type LinkItem = {
  label: string;
  href: string;
};

/* ---------- component ---------- */
export default function StickyNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isVisible } = useNavigationVisibility();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const exploreItems: LinkItem[] = [
    { label: "Cambridge", href: "https://www.rgs.edu.in/cambridge/" },
    { label: "Neev", href: "https://www.rgs.edu.in/neev" },
    { label: "Admission", href: "https://www.rgs.edu.in/admission/" },
    { label: "Get in Touch", href: "https://www.rgs.edu.in/#get-in-touch" },
    { label: "Why RGS?", href: "https://www.rgs.edu.in/why-rgs/" },
    { label: "Campus Tour", href: "https://www.rgs.edu.in/virtual-tour" },
    { label: "Leadership Team", href: "https://www.rgs.edu.in/founders" },
    { label: "Admissions 2026-27", href: "https://www.rgs.edu.in/admission" },
    { label: "Academics", href: "https://www.rgs.edu.in/academics/" },
    { label: "Boarding", href: "https://www.rgs.edu.in/boarding/" },
    { label: "Round Square", href: "https://www.rgs.edu.in/round-square" },
  ];

  const admissionsItems: LinkItem[] = [
    { label: "Admission Open • Apply Now", href: "https://www.rgs.edu.in/admission/" },
    { label: "Mandatory Public Disclosure", href: "https://www.rgs.edu.in/mandatory-public-disclosure/" },
    { label: "Enquire Now", href: "https://rgs.renocampus.com/registration/enquiry" },
    { label: "Work With Us", href: "https://www.rgs.edu.in/work-with-us/" },
    { label: "Visit Campus", href: "https://www.rgs.edu.in/virtual-tour/" },
    { label: "Fee Payment", href: "https://rgs.renocampus.com/auth/signin?callbackUrl=https%3A%2F%2Frgs.renocampus.com" },
    { label: "ERP", href: "https://rgs.renocampus.com/" },
    {
      label: "Webmail",
      href: "https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
    },
  ];

  const resourceSections: Array<{ title: string; items: LinkItem[] }> = [
    {
      title: "Top Links",
      items: [
        { label: "Boarding School in Guwahati", href: "https://www.rgs.edu.in/boarding/" },
        { label: "Admissions", href: "https://www.rgs.edu.in/admission/" },
        { label: "Best Preschool in Guwahati", href: "https://www.rgs.edu.in/foundation-stage/" },
        { label: "Best Secondary School in Guwahati", href: "https://www.rgs.edu.in/rgs-secondary-stage/" },
        { label: "Fee Structure", href: "https://www.rgs.edu.in/fee-structure/" },
      ],
    },
    {
      title: "Useful Links",
      items: [
        { label: "Glory of RGS", href: "https://www.rgs.edu.in/glory-of-rgs/" },
        { label: "Philosophy", href: "https://www.rgs.edu.in/rgs-philosophy/" },
        { label: "RGS Edge", href: "https://www.rgs.edu.in/rgs-journey/" },
        { label: "Achievement", href: "https://www.rgs.edu.in/achievement/" },
        { label: "Work with us", href: "https://www.rgs.edu.in/work-with-us/" },
      ],
    },
    {
      title: "Quick Downloads",
      items: [
        { label: "RGS School Mobile App · Android", href: "https://play.google.com/store/apps/details?id=com.reno.rgs" },
        { label: "RGS School Mobile App · iOS", href: "https://apps.apple.com/in/app/royal-global-school/id6472041969" },
        { label: "RGS Bus Tracking App · Android", href: "https://play.google.com/store/apps/details?id=net.energywin.skoolsmart" },
        { label: "RGS Bus Tracking App · iOS", href: "https://apps.apple.com/in/app/skoolsmart/id1108793329" },
      ],
    },
    {
      title: "Connect",
      items: [
        { label: "Facebook", href: "https://www.facebook.com/royalglobal" },
        { label: "YouTube", href: "https://www.youtube.com/channel/UCo7ra-XC9wbAn_sE-yt9Nkg" },
        { label: "Instagram", href: "https://www.instagram.com/royal_global_school_guwahati/?hl=en" },
        { label: "+91-8822607725", href: "tel:+918822607725" },
        { label: "+91-8822607726", href: "tel:+918822607726" },
        { label: "+91-7099020917", href: "tel:+917099020917" },
        { label: "admissions@rgs.edu.in", href: "mailto:admissions@rgs.edu.in" },
        { label: "principal@rgs.edu.in", href: "mailto:principal@rgs.edu.in" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuRef.current && !menuRef.current.contains(target) && !target.closest("[data-menu-trigger]")) {
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const renderMenuLink = (item: LinkItem) => {
    const isExternal = item.href.startsWith("http");
    const linkProps = isExternal
      ? { target: "_blank", rel: "noopener noreferrer" as const }
      : undefined;

    return (
      <a
        key={item.label}
        href={item.href}
        {...linkProps}
        className="group flex w-full items-center justify-between rounded-xl bg-[#edf6c8] px-3 py-2.5 text-left text-sm font-medium text-neutral-900 shadow-[0_1px_0_rgba(15,23,42,0.08)] transition hover:bg-[#e6f0b9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b0c65a] dark:bg-neutral-800/60 dark:text-neutral-100 dark:hover:bg-neutral-700"
      >
        <span>{item.label}</span>
        <IconArrowUpRight className="h-4 w-4 text-neutral-400 transition group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300" stroke={1.5} />
      </a>
    );
  };

  const renderTextLink = (item: LinkItem) => {
    const isExternal = item.href.startsWith("http");
    const linkProps = isExternal
      ? { target: "_blank", rel: "noopener noreferrer" as const }
      : undefined;

    return (
      <a
        key={item.label}
        href={item.href}
        {...linkProps}
        className="text-left text-sm text-neutral-700 transition hover:text-neutral-900 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-neutral-400 dark:text-neutral-200 dark:hover:text-white"
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className={`fixed top-6 z-50 left-[calc(var(--page-gutter)+var(--nav-inner-gap))] right-[calc(var(--page-gutter)+var(--nav-inner-gap))] transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <nav
        className={`relative rounded-xl bg-white/10 backdrop-blur-lg px-6 py-2.5 flex items-center transition-all duration-300 ${
         isScrolled 
           ? 'shadow-lg border border-white/20' 
           : ''
       }`}
      >
         {/* Branding */}
         <div className="text-lg font-medium text-gray-800">
           Royal Global School
         </div>

                 {/* Menu */}
        <div className="hidden md:flex items-center space-x-3 ml-auto mr-2">
           <Button 
             className="bg-[#c8d6e3] text-[#2c3e50] hover:bg-[#c8d6e3] hover:text-[#2c3e50] hover:opacity-80 transition-all duration-200 rounded-full h-8 w-[94px] px-0 text-[12px] font-medium"
           >
             Amenities
           </Button>
           <Button 
             className="bg-[#c8d6e3] text-[#2c3e50] hover:bg-[#c8d6e3] hover:text-[#2c3e50] hover:opacity-80 transition-all duration-200 rounded-full h-8 w-[94px] px-0 text-[12px] font-medium"
           >
             Availability
           </Button>
           <Button 
             className="bg-gray-800 text-white hover:bg-gray-900 transition-all duration-200 rounded-full h-8 px-4 text-[12px] font-medium"
           >
             Inquire
           </Button>
         </div>

        <div className="ml-auto md:ml-0">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/40 text-neutral-800 backdrop-blur-md transition hover:bg-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 dark:border-white/20 dark:bg-neutral-900/70 dark:text-neutral-100"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            data-menu-trigger
          >
            {isMenuOpen ? <IconX className="h-5 w-5" stroke={1.75} /> : <IconMenu2 className="h-5 w-5" stroke={1.75} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.button
                type="button"
                className="absolute inset-0 h-full w-full cursor-default bg-neutral-900/20 backdrop-blur-sm"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                ref={menuRef}
                className="fixed left-[calc(var(--page-gutter)+var(--nav-inner-gap))] right-[calc(var(--page-gutter)+var(--nav-inner-gap))] top-6 bottom-[-65px] z-40"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="h-full rounded-2xl border border-[#a8c552] bg-[#bdd663] p-6 shadow-2xl dark:border-white/10 dark:bg-neutral-900/90 md:p-10">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
                        Explore Royal Global
                      </p>
                      <div className="grid gap-1.5">
                        {exploreItems.map(renderMenuLink)}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
                        Admissions & Services
                      </p>
                      <div className="grid gap-1.5">
                        {admissionsItems.map(renderMenuLink)}
                      </div>
                      <div className="rounded-2xl border border-[#a8c552] bg-[#dfeab0] p-3 text-xs text-neutral-700 shadow-inner dark:border-white/10 dark:bg-neutral-800/70 dark:text-neutral-300">
                        Press Esc or tap outside to close the menu.
                      </div>
                    </div>
                    <div className="space-y-6">
                      {resourceSections.map((section) => (
                        <div key={section.title} className="space-y-2">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                            {section.title}
                          </p>
                          <div className="grid gap-1.5">
                            {section.items.map(renderTextLink)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
