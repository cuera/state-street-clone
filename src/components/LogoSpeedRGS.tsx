"use client";

import React from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Use logos from public/logospeed folder - Awards and Recognition images
const rgsLogos = [
  {
    name: "AFS Partner RGS",
    id: 1,
    src: "/logospeed/AFSpartnerRGS.avif",
    alt: "AFS Partner RGS",
    title: "AFS Partner RGS",
  },
  {
    name: "All India Chess at Royal Global",
    id: 2,
    src: "/logospeed/AllIndiachessatroyalglobal.avif",
    alt: "All India Chess at Royal Global",
    title: "All India Chess at Royal Global",
  },
  {
    name: "Best Education Awards Royal Global School",
    id: 3,
    src: "/logospeed/besteducationawardsroyalglobalschool.avif",
    alt: "Best Education Awards Royal Global School",
    title: "Best Education Awards Royal Global School",
  },
  {
    name: "Business Awards",
    id: 4,
    src: "/logospeed/Businessawards.avif",
    alt: "Business Awards",
    title: "Business Awards",
  },
  {
    name: "Cambridge Curriculum at RGS",
    id: 5,
    src: "/logospeed/cambridgecurriculumatrgs.avif",
    alt: "Cambridge Curriculum at RGS",
    title: "Cambridge Curriculum at RGS",
  },
  {
    name: "CBSE Royal Global",
    id: 6,
    src: "/logospeed/cbseroyalglobal.avif",
    alt: "CBSE Royal Global",
    title: "CBSE Royal Global",
  },
  {
    name: "EW Awards Royal Global",
    id: 7,
    src: "/logospeed/EWawrardsRoyalglobal.avif",
    alt: "EW Awards Royal Global",
    title: "EW Awards Royal Global",
  },
  {
    name: "Future School Royal Global School",
    id: 8,
    src: "/logospeed/Futureschoolroyalglobalschool.avif",
    alt: "Future School Royal Global School",
    title: "Future School Royal Global School",
  },
  {
    name: "Green Award Royal Global",
    id: 9,
    src: "/logospeed/Greenawardroyalglobal.avif",
    alt: "Green Award Royal Global",
    title: "Green Award Royal Global",
  },
  {
    name: "International School Awards at RGS",
    id: 10,
    src: "/logospeed/Internationalschoolawardsatrgs.avif",
    alt: "International School Awards at RGS",
    title: "International School Awards at RGS",
  },
  {
    name: "Maharashtra Merit Awards RGS",
    id: 11,
    src: "/logospeed/maharashtrameritawardsrgs.avif",
    alt: "Maharashtra Merit Awards RGS",
    title: "Maharashtra Merit Awards RGS",
  },
  {
    name: "SDG Goals at Royal",
    id: 12,
    src: "/logospeed/mainsdggoalsatroyal.avif",
    alt: "SDG Goals at Royal",
    title: "SDG Goals at Royal",
  },
  {
    name: "NEP Followed at Royal Global School",
    id: 13,
    src: "/logospeed/NEPfollowedatroyalglobalschool.avif",
    alt: "NEP Followed at Royal Global School",
    title: "NEP Followed at Royal Global School",
  },
  {
    name: "Olympiad at RGS",
    id: 14,
    src: "/logospeed/olympiadatrgs.avif",
    alt: "Olympiad at RGS",
    title: "Olympiad at RGS",
  },
  {
    name: "Round Square at RGS",
    id: 15,
    src: "/logospeed/Roundsquareatrgs.avif",
    alt: "Round Square at RGS",
    title: "Round Square at RGS",
  },
  {
    name: "SDG Goals at RGS",
    id: 16,
    src: "/logospeed/SDGgoalsatrgs.avif",
    alt: "SDG Goals at RGS",
    title: "SDG Goals at RGS",
  },
  {
    name: "Telegraph Award Royal Global School",
    id: 17,
    src: "/logospeed/telegraphawardroyalglobalschool.avif",
    alt: "Telegraph Award Royal Global School",
    title: "Telegraph Award Royal Global School",
  },
  {
    name: "World Education Summit",
    id: 18,
    src: "/logospeed/Worldeducationsummit.avif",
    alt: "World Education Summit",
    title: "World Education Summit",
  },
];

export function LogoSpeedRGS() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-muted/30 rounded-full">
                <span className="text-xs text-muted-foreground">
                  Trusted by Industry Leaders
                </span>
              </div>
              <h1 className="text-[46px] font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-t from-neutral-700 to-neutral-800 dark:from-stone-200 dark:to-neutral-200 bg-clip-text text-transparent">
                  Royal
                </span>{' '}
                <span style={{ color: '#bdd663' }}>Global</span>{' '}
                <span className="bg-gradient-to-t from-neutral-700 to-neutral-800 dark:from-stone-200 dark:to-neutral-200 bg-clip-text text-transparent">
                  School's
                </span>
                <br />
                <span style={{ color: '#bdd663' }}>Awards</span>{' '}
                <span className="bg-gradient-to-t from-neutral-700 to-neutral-800 dark:from-stone-200 dark:to-neutral-200 bg-clip-text text-transparent">
                  and Recognitions
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A testament to Royal Global School's unwavering dedication to fostering brilliance.
              </p>
            </div>

            <LogoCarousel columnCount={4} logos={rgsLogos} />
            
            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground">
                Join the future of education at Royal Global School
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
