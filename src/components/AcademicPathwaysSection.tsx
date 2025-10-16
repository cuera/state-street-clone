import React, { useMemo, useState } from "react";
import Reveal from "@/components/motion/Reveal";

const AcademicPathwaysSection = () => {
  const programTabs = useMemo(() => (
    [
      { id: "neev", label: "Neev (Cambridge Early Years)" },
      { id: "cambridge-primary", label: "Cambridge Primary (I–III)" },
      { id: "primary", label: "Primary (I–V, CBSE)" },
      { id: "middle", label: "Middle (VI–VIII, CBSE)" },
      { id: "secondary", label: "Secondary (IX–X, CBSE)" },
      { id: "senior", label: "Senior (XI–XII, CBSE)" },
    ] as const
  ), []);

  type StageId = (typeof programTabs)[number]["id"];

  const [activeStage, setActiveStage] = useState<StageId>("neev");

  const stageData: Record<StageId, {
    snapshot: { philosophy: string; coreSkills: string[] };
    image?: { src: string; alt?: string };
    languages?: string[];
    subjects?: string[];
    assessments?: string[];
    support?: string[];
    workingDays?: string;
    ctas?: { label: string; href?: string }[];
  } & { streamsTable?: {
    compulsory: string[];
    science: { core: string[]; options: string[] };
    commerce: { core: string[]; options: string[] };
    humanities: { core: string[]; options: string[] };
    note?: string;
  } }> = {
    neev: {
      snapshot: {
        philosophy: "Cambridge Early Years is mandatory at RGS (Nursery, LKG, UKG). Inquiry, play and art-integrated experiences build foundational readiness.",
        coreSkills: [
          "Curiosity through inquiry",
          "Communication & early literacy",
          "Fine–gross motor development",
          "Social–emotional learning",
        ],
      },
      image: { src: "/royal school carousel/EY schooling nursery best royal global.avif", alt: "Cambridge Early Years at RGS" },
      languages: ["English", "Hindi"],
      assessments: [
        "Observation-led ongoing assessment",
        "Portfolio and evidence-based progress",
      ],
      support: [
        "Warm transitions; parent orientation",
        "Art-integrated and outdoor experiences",
      ],
      ctas: [
        { label: "Cambridge Early Years at RGS", href: "#" },
        { label: "Contact Academic Team", href: "#" },
      ],
    },
    "cambridge-primary": {
      snapshot: {
        philosophy: "Optional Cambridge Primary (I–III) extends Early Years foundations with project-based and real-world problem solving.",
        coreSkills: [
          "Foundational numeracy & literacy",
          "Project-based learning",
          "Real-world problem solving",
        ],
      },
      image: { src: "/royal school carousel/class.avif", alt: "Cambridge Primary classroom" },
      languages: ["English", "Hindi"],
      assessments: [
        "Continuous in-class assessment",
        "End-of-unit checks",
      ],
      support: [
        "Bridge with CBSE pathways",
        "Parent updates via ERP",
      ],
      ctas: [
        { label: "Explore Cambridge Primary", href: "#" },
        { label: "View Stage Syllabus", href: "#" },
      ],
    },
    primary: {
      snapshot: {
        philosophy: "Primary (I–V, CBSE) emphasizes continuous classroom assessment and concept mastery.",
        coreSkills: [
          "Reading–writing fluency",
          "Number sense & logical thinking",
          "Creative expression",
        ],
      },
      image: { src: "/royal school carousel/Modern classrooms best royal global.avif", alt: "Primary (CBSE) learning" },
      languages: ["English", "Hindi", "Sanskrit/Assamese/French"],
      assessments: [
        "Continuous classroom assessment",
        "Weekly Tests on Fridays (III–V)",
      ],
      support: [
        "After-school remedials",
        "ERP-linked report cards",
      ],
      workingDays: "Working Days: I–V are Mon–Fri",
      ctas: [
        { label: "View Stage Syllabus", href: "#" },
        { label: "Contact Academic Team", href: "#" },
      ],
    },
    middle: {
      snapshot: {
        philosophy: "Middle (VI–VIII, CBSE) builds breadth across subjects with steady assessment cadence.",
        coreSkills: [
          "Analytical thinking",
          "Independent study habits",
          "Collaboration & projects",
        ],
      },
      image: { src: "/royal school carousel/international exp.avif", alt: "Middle school experiences" },
      languages: ["English", "Hindi", "Sanskrit/Assamese/French"],
      assessments: [
        "Weekly Tests on Saturdays",
        "Periodic & Half-Yearly",
      ],
      support: [
        "Remedials",
        "Hostel prep classes for boarders",
      ],
      workingDays: "Working Days: VI–XII are Mon–Sat",
      ctas: [
        { label: "View Stage Syllabus", href: "#" },
        { label: "Contact Academic Team", href: "#" },
      ],
    },
    secondary: {
      snapshot: {
        philosophy: "Secondary (IX–X, CBSE) focuses on board readiness with structured assessment cycles.",
        coreSkills: [
          "Exam strategies & time management",
          "Conceptual clarity & application",
          "Digital portfolio discipline",
        ],
      },
      image: { src: "/royal school carousel/labs.avif", alt: "Secondary labs and preparation" },
      languages: ["English", "Hindi", "Sanskrit/Assamese/French"],
      assessments: [
        "Periodic, Half-Yearly",
        "Pre-Board I & II",
        "Board Examination",
      ],
      support: [
        "Digital exam folios & ERP report cards",
        "Retest scope policy (as per school)",
      ],
      workingDays: "Working Days: VI–XII are Mon–Sat",
      ctas: [
        { label: "View Stage Syllabus", href: "#" },
        { label: "Contact Academic Team", href: "#" },
      ],
    },
    senior: {
      snapshot: {
        philosophy: "Senior Secondary (XI–XII, CBSE) offers flexible stream combinations with academic support for pathways beyond school.",
        coreSkills: [
          "Depth in chosen disciplines",
          "Critical research & presentations",
          "Career & higher-ed preparedness",
        ],
      },
      image: { src: "/royal school carousel/libraryrgs.avif", alt: "Senior library and study" },
      assessments: [
        "Periodic, Half-Yearly",
        "Pre-Board I & II",
        "Board Examinations (XII)",
      ],
      support: [
        "Remedials & guest faculty for Senior School",
        "Optional need-based JEE/NEET (XI–XII Science)",
        "Career Counselling Cell",
      ],
      workingDays: "Working Days: VI–XII are Mon–Sat",
      ctas: [
        { label: "View XI–XII Combinations (PDF)", href: "#" },
        { label: "Contact Academic Team", href: "#" },
      ],
      streamsTable: {
        compulsory: ["English"],
        science: {
          core: ["Physics", "Chemistry"],
          options: [
            "Math (Core)",
            "Biology",
            "Computer Science",
            "Physical Education",
            "Painting",
            "Psychology",
            "Mass Media",
            "Applied Math",
          ],
        },
        commerce: {
          core: ["English", "Accountancy", "Business Studies", "Economics"],
          options: [
            "Computer Science",
            "Physical Education",
            "Painting",
            "Psychology",
            "Mass Media",
            "Applied Math",
          ],
        },
        humanities: {
          core: ["English"],
          options: [
            "Political Science",
            "Sociology",
            "Geography",
            "Psychology",
            "History",
            "Entrepreneurship",
            "Economics",
            "Painting",
            "Physical Education",
            "Mass Media",
            "Applied Math",
          ],
        },
      },
    },
  };

  const Pill = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );

  const ListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-2">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400" />
      <span className="text-sm text-neutral-700">{children}</span>
    </li>
  );

  return (
    <section className="relative w-full overflow-hidden">
      {/* Section Heading above hero */}
      <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-12 pb-16 md:pb-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Programs</h2>
        </Reveal>
        <Reveal>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            Snapshot, subjects, assessments, and support—organized by stage.
          </p>
        </Reveal>
      </div>
      {/* Bounded hero image container (matches hero style) */}
      <div className="relative h-[110vh]">
        <div className="absolute top-0 bottom-0 inset-x-[var(--page-gutter)] rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://res.cloudinary.com/dihcnrjri/image/upload/v1758477523/A1920_ue4bdu.avif"
            srcSet="
              https://res.cloudinary.com/dihcnrjri/image/upload/f_auto,q_auto,w_768,c_fill/A1280_begppz 768w,
              https://res.cloudinary.com/dihcnrjri/image/upload/f_auto,q_auto,w_1280,c_fill/A1280_begppz 1280w,
              https://res.cloudinary.com/dihcnrjri/image/upload/f_auto,q_auto,w_1920,c_fill/A1920_ue4bdu 1920w,
              https://res.cloudinary.com/dihcnrjri/image/upload/f_auto,q_auto,w_2560,c_fill/A2560_i0k4no 2560w,
              https://res.cloudinary.com/dihcnrjri/image/upload/f_auto,q_auto,w_5120,c_fill/A5120_ftsukw 5120w
            "
            sizes="100vw"
            alt="Royal Global School Academic Pathways"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl mx-auto">
              <Reveal>
                <h1 
                  className="mb-6"
                  style={{
                    color: '#FAFAF9',
                    fontSize: 'clamp(2.5rem, 7vw, 100px)',
                    lineHeight: '100px',
                    textShadow: '0 2px 4px rgba(0,0,0,0.25)',
                    fontFamily: "'Sofia Pro','SofiaPro','Satoshi',ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial",
                    fontWeight: 800,
                    letterSpacing: '-2px'
                  }}
                >
                  Inquiry-driven, activity-based learning with rigorous assessment.
                </h1>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      
      {/* Programs (Tabbed) */}
      <div className="bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 md:mb-8">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground sr-only">Programs</h2>
            </Reveal>
            <Reveal>
              <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-3xl">Choose a tab to view details.</p>
            </Reveal>
          </div>

          {/* Tabs */}
          <div className="relative -mx-2 overflow-x-auto pb-3">
            <div className="flex gap-2 px-2 min-w-max">
              {programTabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveStage(t.id)}
                  className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-xs md:text-sm transition-colors ${
                    activeStage === t.id
                      ? "bg-foreground text-background border-foreground"
                      : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50"
                  }`}
                  aria-pressed={activeStage === t.id}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stage Content */}
          <div className="mt-6 md:mt-8 grid gap-6 md:gap-8 lg:grid-cols-3">
            {/* Snapshot */}
            <div className="lg:col-span-1 grid gap-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">Snapshot</h3>
                <p className="mt-2 text-sm text-neutral-700">{stageData[activeStage].snapshot.philosophy}</p>
                <ul className="mt-4 space-y-2">
                  {stageData[activeStage].snapshot.coreSkills.map((s) => (
                    <ListItem key={s}>{s}</ListItem>
                  ))}
                </ul>
              </div>
              {stageData[activeStage].image && (
                <div className="rounded-2xl overflow-hidden border border-border">
                  <img
                    src={stageData[activeStage].image!.src}
                    alt={stageData[activeStage].image!.alt || "Stage visual"}
                    className="w-full h-full object-cover aspect-[4/3]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
            </div>

            {/* Details */}
            <div className="lg:col-span-2 grid gap-6 md:gap-8">
              {/* Languages / Subjects */}
              {(stageData[activeStage].languages || stageData[activeStage].subjects) && (
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h4 className="text-sm font-semibold tracking-wide text-neutral-900">Languages / Subjects</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {stageData[activeStage].languages?.map((l) => (
                      <Pill key={l}>{l}</Pill>
                    ))}
                    {stageData[activeStage].subjects?.map((l) => (
                      <Pill key={l}>{l}</Pill>
                    ))}
                  </div>
                </div>
              )}

              {/* Assessments */}
              {stageData[activeStage].assessments && (
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h4 className="text-sm font-semibold tracking-wide text-neutral-900">Assessments</h4>
                  <ul className="mt-3 space-y-2">
                    {stageData[activeStage].assessments?.map((a) => (
                      <ListItem key={a}>{a}</ListItem>
                    ))}
                  </ul>
                </div>
              )}

              {/* Support */}
              {stageData[activeStage].support && (
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h4 className="text-sm font-semibold tracking-wide text-neutral-900">Academic Support</h4>
                  <ul className="mt-3 space-y-2">
                    {stageData[activeStage].support?.map((s) => (
                      <ListItem key={s}>{s}</ListItem>
                    ))}
                  </ul>
                </div>
              )}

              {/* Working days */}
              {stageData[activeStage].workingDays && (
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h4 className="text-sm font-semibold tracking-wide text-neutral-900">Logistics</h4>
                  <p className="mt-2 text-sm text-neutral-700">{stageData[activeStage].workingDays}</p>
                </div>
              )}

              {/* Streams table for XI–XII */}
              {stageData[activeStage].streamsTable && (
                <div className="rounded-2xl border border-border bg-card p-6 overflow-hidden">
                  <h4 className="text-sm font-semibold tracking-wide text-neutral-900">Streams & Subject Combinations (XI–XII)</h4>
                  <div className="mt-3 overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="text-left text-neutral-600">
                          <th className="py-2 pr-6">Stream</th>
                          <th className="py-2 pr-6">Core</th>
                          <th className="py-2">Options</th>
                        </tr>
                      </thead>
                      <tbody className="align-top">
                        <tr className="border-t border-border">
                          <td className="py-3 pr-6 font-medium text-neutral-900">Compulsory</td>
                          <td className="py-3 pr-6" colSpan={2}>{stageData[activeStage].streamsTable!.compulsory.join(", ")}</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="py-3 pr-6 font-medium text-neutral-900">Science</td>
                          <td className="py-3 pr-6">{stageData[activeStage].streamsTable!.science.core.join(", ")}</td>
                          <td className="py-3">{stageData[activeStage].streamsTable!.science.options.join(", ")}</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="py-3 pr-6 font-medium text-neutral-900">Commerce</td>
                          <td className="py-3 pr-6">{stageData[activeStage].streamsTable!.commerce.core.join(", ")}</td>
                          <td className="py-3">{stageData[activeStage].streamsTable!.commerce.options.join(", ")}</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="py-3 pr-6 font-medium text-neutral-900">Humanities</td>
                          <td className="py-3 pr-6">{stageData[activeStage].streamsTable!.humanities.core.join(", ")}</td>
                          <td className="py-3">{stageData[activeStage].streamsTable!.humanities.options.join(", ")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                {(stageData[activeStage].ctas ?? [{ label: "View Stage Syllabus", href: "#" }, { label: "Contact Academic Team", href: "#" }]).map((c) => (
                  <a key={c.label} href={c.href || "#"} className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50">
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const pathwayCards = [
  {
    id: "foundation",
    icon: "🌱",
    title: "Foundation Studies",
    description: "Building essential skills and knowledge for academic success with personalized learning approaches and comprehensive support systems."
  },
  {
    id: "cambridge",
    icon: "🎓",
    title: "Cambridge Curriculum",
    description: "International standard education with globally recognized qualifications, preparing students for universities worldwide."
  },
  {
    id: "cbse",
    icon: "📚",
    title: "CBSE Pathway",
    description: "Comprehensive Indian curriculum designed to develop critical thinking, creativity, and problem-solving skills for future leaders."
  },
  {
    id: "stem",
    icon: "🔬",
    title: "STEM Excellence",
    description: "Advanced science, technology, engineering, and mathematics programs with hands-on learning and research opportunities."
  },
  {
    id: "arts",
    icon: "🎨",
    title: "Creative Arts",
    description: "Nurturing artistic expression through visual arts, performing arts, and creative writing with professional mentorship."
  },
  {
    id: "leadership",
    icon: "👑",
    title: "Leadership Track",
    description: "Developing future leaders through specialized programs focusing on communication, ethics, and global citizenship."
  }
];

export default AcademicPathwaysSection;
