"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Reveal from "@/components/motion/Reveal";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="px-6 bg-background" style={{ paddingTop: '21px', paddingBottom: '96px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-left" style={{ marginBottom: '16px' }}>
          <Reveal>
            <h2 
              className="text-foreground font-bold mb-4"
              style={{
                fontSize: '44px',
                fontFamily: 'Satoshi, sans-serif',
                lineHeight: '1.2',
                letterSpacing: '0px'
              }}
            >
              Get to know Royal Global School
            </h2>
          </Reveal>
        </div>
        <div style={{ marginLeft: '-12px' }}>
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Student Development",
    title: "Nurturing Talent Through Comprehensive Programs.",
    src: "/royal school carousel/malkin.avif",
    content: <DummyContent />,
  },
  {
    category: "Neev Early Years Schooling",
    title: "Fosters cognitive, emotional, and social growth.",
    src: "/royal school carousel/EY schooling nursery best royal global.avif",
    content: <DummyContent />,
  },
  {
    category: "Classroom Innovation",
    title: "Interactive Learning Spaces for Modern Education.",
    src: "/royal school carousel/happy kids running.avif",
    content: <DummyContent />,
  },
  {
    category: "Boarding Excellence",
    title: "Equipped with modern amenities.",
    src: "/royal school carousel/royal hostel best in india.avif",
    content: <DummyContent />,
  },
  {
    category: "Academics",
    title: "Empowering Futures: Learning Today, Leading Tomorrow.",
    src: "/royal school carousel/Modern classrooms best royal global.avif",
    content: <DummyContent />,
  },
  {
    category: "Seamless Admissions",
    title: "Seamless, Fast, and Integrated.",
    src: "/royal school carousel/ballet leap admission.avif",
    content: <DummyContent />,
  },
  {
    category: "International Exposure",
    title: "Diverse cultures, languages, and global perspectives.",
    src: "/royal school carousel/international exp.avif",
    content: <DummyContent />,
  },
  {
    category: "Modern Equipped Classroom",
    title: "Crafting Tomorrow's Leaders.",
    src: "/royal school carousel/modern class.avif",
    content: <DummyContent />,
  },
  {
    category: "Sports & Activities",
    title: "Building Champions Through Sports Excellence.",
    src: "/royal school carousel/cricket.avif",
    content: <DummyContent />,
  },
  {
    category: "AI Integration",
    title: "Building AI Capabilities.",
    src: "/royal school carousel/robo ai.avif",
    content: <DummyContent />,
  },
];



