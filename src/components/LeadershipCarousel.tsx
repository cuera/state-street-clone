"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Reveal from "@/components/motion/Reveal";

export default function LeadershipCarousel() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={card}
      index={index}
      cardStyle={{ aspectRatio: "4 / 5", width: 240, height: 300 }}
    />
  ));

  return (
    <section className="px-6 bg-background" style={{ paddingTop: "21px", paddingBottom: "96px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-left" style={{ marginBottom: "16px" }}>
          <Reveal>
            <h2
              className="text-foreground font-bold mb-4"
              style={{
                fontSize: "44px",
                fontFamily: "Satoshi, sans-serif",
                lineHeight: "1.2",
                letterSpacing: "0px",
              }}
            >
              Leadership
            </h2>
          </Reveal>
        </div>
        <div style={{ marginLeft: "-12px" }}>
          <Carousel items={cards} showControls={false} />
        </div>
      </div>
    </section>
  );
}

const PansariContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-12 rounded-3xl space-y-6">
      <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 italic text-neutral-700 dark:text-neutral-200">
        “Education is the manifestation of the perfection already in man”
        <div className="mt-2 text-sm not-italic font-medium text-neutral-600 dark:text-neutral-400">- Swami Vivekananda</div>
      </blockquote>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
        Royal Global School with a proud tradition of serving the Northeast India region for over seven years has successfully paved a path towards a goal called perfection among the ever enthusiastic learners for posterity. I have always believed that education softens the hearts and breeds gentleness and charity which Royal Global School has incessantly been trying to thrive at. In a very short span of time it has developed a reputation as a centre of academic excellence in a safe, caring and positive environment alongside personality development. Goes without saying, comprehensive pastoral care and collaborative work among students and staﬀ provides students with high levels of support. This helps reduce barriers to students’ learning and promotes their well-being. Moreover, I am pleased to share that our dedicated approach to teaching and learning is seeing real beneﬁts and preparing our children to be global citizens. Well-established relationships with different nations, networks and community groups have enhanced opportunities for students to access meaningful learning pathways within and beyond the school. Our educators use collaborative cross-curricular analysis to focus on strategies and take initiatives to address disparity and broaden student outcomes. Presently our students are being positioned to achieve a 360 degrees overall development in national and international arenas. In a world that rewards perseverance, resilience, initiative, problem-solving and cooperation, I am happy that our school has succeeded in becoming better choice in education, here in the East.
      </p>
      <div className="pt-4 border-t border-neutral-300 dark:border-neutral-700">
        <p className="font-semibold text-neutral-900 dark:text-neutral-100">Dr. A.K. Pansari</p>
        <p className="text-neutral-600 dark:text-neutral-400">Chairman</p>
      </div>
    </div>
  );
};

const ModiContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-12 rounded-3xl space-y-6">
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
        It is my proud privilege to warmly welcome you to the learning community ‘The Royal Global School’ dedicated to develop skilled, outstanding students who can pursue their interests and strengths to the best of their ability. The Royal Global School community assiduously and conﬁdently works to impart dynamic education to prepare a strong generation of think tanks for a better positive world tomorrow. The institution stands by its core values – Kindness, Respect and Gratitude to its hilt. With empathy in our minds, our prime focus as promoters is to pursue excellence and to challenge students to think critically as they prepare for the world beyond. The holistic approach of our institute stimulates innovation among students by inspiring fresh ideas with different perceptions, creative thinking and strong conviction. We are committed and indebted to work collaboratively with parents to nurture an individual who possesses love for the nation, society, community and family. We believe that all are equal stakeholders in carving a niche towards the development of young minds for a fast paced progressive future. I wish the best of fortune, peace and prosperity to all those who contribute to the noble task of spreading education.
      </p>
      <div className="pt-4 border-t border-neutral-300 dark:border-neutral-700">
        <p className="font-semibold text-neutral-900 dark:text-neutral-100">Mr. A.K. Modi</p>
        <p className="text-neutral-600 dark:text-neutral-400">Vice – Chairman</p>
      </div>
    </div>
  );
};

const ArupContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-12 rounded-3xl space-y-6">
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
        Royal Global School is a dynamic centre of learning where tradition meets innovation, and values blend seamlessly with vision. In the 21st century, education must prepare children not just for exams, but for life. At Royal Global School (RGS), we proudly nurture young minds in a safe, inspiring environment where every child can thrive. I firmly believe that whether in a district town school or a globally recognized institution, the core aspirations of children and their families remain unchanged: to learn and grow in a safe, nurturing, and inspiring environment. Guided by this belief, it has been my honour for over three decades to guide and celebrate the journeys of many students. The joy and pride I feel in witnessing their journeys and celebrating their accomplishments are immeasurable.
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
        At RGS, we offer holistic, globally-aligned education through Cambridge and CBSE curricula, nurturing curiosity, values, and creativity. Our students consistently excel, guided by dedicated faculty and strong parent support. To us, academic excellence is just the starting point. We place innovation, creativity, and sustainability at the core of our philosophy, integrating AI-driven technology and 21st-century skills to prepare students for a dynamic global future. As a proud Round Square Member School, we are deeply committed to the IDEALS of Internationalism, Democracy, Environmentalism, Adventure, Leadership, and Service. Our state-of-the-art infrastructure, vibrant co-curricular programs, and caring pastoral system work together to create a learning environment where children feel safe, valued, and deeply loved. In our halls, on our fields, and in our labs and studios, students discover their passions and build the confidence to pursue them.
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
        Choosing RGS is choosing a future of purpose, excellence, and meaningful learning. We are excited to partner with you on this journey.
      </p>
    </div>
  );
};

const NewLeaderContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-12 rounded-3xl space-y-6">
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
        Education is the cornerstone of societal progress and individual empowerment. At Royal Global School, we are committed to fostering an environment where academic excellence meets character development. Our mission extends beyond traditional learning to encompass the holistic development of every student who walks through our doors. We believe in nurturing not just scholars, but future leaders who will contribute meaningfully to society.
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
        Our approach integrates innovative teaching methodologies with time-tested educational principles. We strive to create global citizens who are equipped with 21st-century skills while remaining rooted in strong values and cultural awareness. The synergy between our dedicated faculty and motivated students creates an ecosystem of continuous learning and growth.
      </p>
      <div className="pt-4 border-t border-neutral-300 dark:border-neutral-700">
        <p className="font-semibold text-neutral-900 dark:text-neutral-100">Leadership Member</p>
        <p className="text-neutral-600 dark:text-neutral-400">Academic Council</p>
      </div>
    </div>
  );
};


const data = [
  {
    category: "Founder",
    title: "Dr. A.K. Pansari",
    src: "/royal school carousel/pansarirgs.avif",
    designation: "Chairman",
    content: <PansariContent />,
  },
  {
    category: "Founder",
    title: "Mr. A.K. Modi",
    src: "/royal school carousel/modirgs.avif",
    designation: "Vice – Chairman",
    content: <ModiContent />,
  },
  {
    category: "Director",
    title: "Dr. Arup K. Mukhopadhyay",
    src: "/royal school carousel/aruprgs.avif",
    designation: "Director",
    content: <ArupContent />,
  },
  {
    category: "Academic",
    title: "Leadership Member",
    src: "/royal school carousel/Modern classrooms best royal global.avif",
    designation: "Academic Council",
    content: <NewLeaderContent />,
  },
];


