import React, { useState, useRef, useEffect } from "react";
import { IconHeart, IconMessageCircle, IconSend, IconDownload, IconPlayerPlay, IconBrandInstagram, IconBrandFacebook, IconBrandYoutube, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

type SpotlightMedia =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string; muted?: boolean; loop?: boolean; autoPlay?: boolean; controls?: boolean };

export type SpotlightCard = {
  id: string;
  title: string;
  subtitle?: string; // e.g., "Browse 1200+ Buttons in 4 styles"
  media?: SpotlightMedia; // open ended: can be cloudinary or any CDN url
  href?: string;
  pill?: string; // deprecated: remove label pill
  stats?: { likes?: number; comments?: number; shares?: number; downloads?: number };
};

export type SpotlightSectionProps = {
  label?: string; // pill text
  heading?: string; // allow \n line breaks
  subheading?: string;
  cta?: { label: string; href?: string };
  items?: SpotlightCard[];
};

function SmartVideo({ media }: { media: SpotlightMedia & { type: "video" } }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Advanced lazy loading with preload buffer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '150px' } // Aggressive preload for smoother experience
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handlePlayClick = async () => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;
    
    try {
      // Ensure smooth playback start
      if (video.readyState >= 3) { // HAVE_FUTURE_DATA
        await video.play();
      } else {
        // Wait for enough data before playing
        video.addEventListener('canplay', () => video.play(), { once: true });
      }
    } catch (error) {
      console.warn('Video play failed:', error);
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent card navigation
    
    const video = videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      // Stop video and return to thumbnail
      video.pause();
      video.currentTime = 0; // Reset to beginning
      setIsPlaying(false);
    } else {
      // Start playing
      handlePlayClick();
    }
  };

  return (
    <div 
      ref={ref} 
      className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative bg-neutral-100 cursor-pointer"
      onClick={handleVideoClick}
    >
      {/* Optimized thumbnail with blur-up effect */}
      <img 
        src={media.poster} 
        alt="Video preview"
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
          isPlaying ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        }`}
        loading="lazy"
        decoding="async"
      />
      
      {/* Advanced video element with optimization */}
      {shouldLoad && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          src={media.src}
          muted={media.muted ?? true}
          loop={media.loop ?? true}
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          onWaiting={() => setIsBuffering(true)}
          onCanPlay={() => setIsBuffering(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          // Performance optimizations
          crossOrigin="anonymous"
          preload="metadata"
          style={{ willChange: isPlaying ? 'auto' : 'opacity' }}
        />
      )}
      
      {/* Smart play/stop indicator */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${
        isPlaying ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className={`flex items-center justify-center rounded-full shadow-xl transition-all duration-200 ${
          isBuffering 
            ? 'w-10 h-10 bg-neutral-200 animate-pulse' 
            : 'w-12 h-12 bg-white/20 hover:bg-white/30 hover:scale-110'
        }`}>
          {isBuffering ? (
            <div className="w-4 h-4 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <IconPlayerPlay className="w-6 h-6 text-neutral-800 ml-0.5" strokeWidth={1.5} />
          )}
        </div>
      </div>
      
      {/* Click to stop indicator when playing */}
      {isPlaying && (
        <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1.5 opacity-0 hover:opacity-100 transition-opacity">
          <div className="w-3 h-3 bg-white rounded-sm" />
        </div>
      )}
      
      {/* Subtle loading indicator */}
      {shouldLoad && !isLoaded && (
        <div className="absolute bottom-2 right-2">
          <div className="w-6 h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="w-full h-full bg-white/70 animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
}

function MediaPreview({ media }: { media?: SpotlightMedia }) {
  if (!media) {
    return (
      <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center">
        <div className="text-muted-foreground text-xs">Placeholder</div>
      </div>
    );
  }

  if (media.type === "image") {
    return (
      <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
        <img 
          src={media.src} 
          alt={media.alt || "preview"} 
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return <SmartVideo media={media} />;
}

function EngagementBar({
  link,
  mediaSrc,
  initial,
}: {
  link?: string;
  mediaSrc?: string;
  initial?: { likes?: number; comments?: number; shares?: number; downloads?: number };
}) {
  const [liked, setLiked] = useState(false);
  const [counts, setCounts] = useState({
    likes: initial?.likes ?? 0,
    comments: initial?.comments ?? 0,
    shares: initial?.shares ?? 0,
    downloads: initial?.downloads ?? 0,
  });

  const onLike = () => {
    setLiked((v) => !v);
    setCounts((c) => ({ ...c, likes: c.likes + (liked ? -1 : 1) }));
  };
  const onComment = () => setCounts((c) => ({ ...c, comments: c.comments + 1 }));
  const onShare = async () => {
    const url = link || window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        // Optional: simple feedback
        console.info("Link copied to clipboard");
      }
      setCounts((c) => ({ ...c, shares: c.shares + 1 }));
    } catch (e) {
      // user canceled share; ignore
    }
  };
  const onDownload = () => {
    const src = mediaSrc || link;
    if (!src) return;
    const a = document.createElement("a");
    a.href = src;
    a.download = "download";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setCounts((c) => ({ ...c, downloads: c.downloads + 1 }));
  };

  const btn = "inline-flex items-center gap-1.5 rounded-full p-1.5 hover:bg-neutral-100 text-neutral-600";
  const iconSize = 18;

  return (
    <div className="mt-3 border-t border-border pt-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button aria-label="Like" onClick={onLike} className={btn}>
          <IconHeart size={iconSize} className={liked ? "text-rose-500" : "text-neutral-700"} stroke={1.8} fill={liked ? "currentColor" : "none"} />
          <span className="text-xs text-neutral-600">{counts.likes}</span>
        </button>
        <button aria-label="Comment" onClick={onComment} className={btn}>
          <IconMessageCircle size={iconSize} className="text-neutral-700" stroke={1.8} />
          <span className="text-xs text-neutral-600">{counts.comments}</span>
        </button>
        <button aria-label="Share" onClick={onShare} className={btn}>
          <IconSend size={iconSize} className="text-neutral-700" stroke={1.8} />
          <span className="text-xs text-neutral-600">{counts.shares}</span>
        </button>
      </div>
      <button aria-label="Download" onClick={onDownload} className={btn}>
        <IconDownload size={iconSize} className="text-neutral-700" stroke={1.8} />
        <span className="text-xs text-neutral-600">{counts.downloads}</span>
      </button>
    </div>
  );
}

const defaultItems: SpotlightCard[] = [
  {
    id: "buttons",
    title: "Triveni School Exhibition",
    subtitle: "Creativity, Curiosity, and Innovation",
    media: { 
      type: "video", 
      src: "https://res.cloudinary.com/dihcnrjri/video/upload/v1/exhibitionrgs_x1gsn8.webm",
      poster: "spotlightimages/trivwniscience.avif",
      controls: true,
      muted: false,
      autoPlay: false
    },
    stats: { likes: 28, comments: 18, shares: 170, downloads: 63 },
  },
    {
      id: "checkboxes",
      title: "Oral hygiene",
      subtitle: "A Dental Session with Dr. Saloni Saboo",
      media: { 
        type: "video", 
        src: "https://res.cloudinary.com/dihcnrjri/video/upload/v1/dentalrgs_qdjnie.webm",
        poster: "spotlightimages/dentistrgs.avif",
        controls: true,
        muted: false,
        autoPlay: false
      },
      stats: { likes: 98, comments: 10, shares: 170, downloads: 300 },
    },
  {
    id: "logos",
    title: "Cambridge Curriculum",
    subtitle: "Holistic and International Standard",
    media: { type: "image", src: "spotlightimages/neevadmission.avif", alt: "Logos" },
    stats: { likes: 88, comments: 80, shares: 170, downloads: 60 },
  },
  {
    id: "toggles",
    title: "NEEV- The Royal Kindergarten",
    subtitle: "Nurturing Young Minds",
    media: { type: "image", src: "spotlightimages/neevlogoagain.avif", alt: "Toggles" },
    stats: { likes: 28, comments: 180, shares: 1700, downloads: 63000 },
  },
  {
    id: "radios",
    title: "Tribute to Zubeen Garg",
    subtitle: "Browse 40+ radio buttons in 2 styles",
    media: { 
      type: "video", 
      src: "https://res.cloudinary.com/dihcnrjri/video/upload/v1758459630/Happy_Friday_Dance_Square_Video_2_yhz1sm.mp4",
      poster: "spotlightimages/zubeendatribute.avif",
      controls: true,
      muted: false,
      autoPlay: false
    },
  stats: { likes: 28, comments: 180, shares: 1700, downloads: 63000 },
  },
  {
    id: "icons",
    title: "Independence Day",
    subtitle: "Celebrating Freedom",
      media: { 
        type: "video", 
        src: "https://res.cloudinary.com/dihcnrjri/video/upload/v1/independenceatrgs_juyo1i.webm",
        poster: "spotlightimages/indepenflaf.avif",
        controls: true,
        muted: false,
        autoPlay: false
      },
    stats: { likes: 28, comments: 180, shares: 1700, downloads: 63000 },
  },
  {
    id: "spacing",
    title: "Fireless Cooking Day",
    subtitle: "A Culinary Journey with Early Years I to III",
    media: { 
      type: "video", 
      src: "https://res.cloudinary.com/dihcnrjri/video/upload/v1/EatQrgs_jxejsh.webm",
      poster: "spotlightimages/eatqrgs.avif",
      controls: true,
      muted: false,
      autoPlay: false
    },
    stats: { likes: 28, comments: 180, shares: 1700, downloads: 63000 },
  },
  {
    id: "flags",
    title: "Student-Built, City-Ready AI Robo",
    subtitle: "AI bin sorting Wet/Dry/Metal in real time",
    media: { 
      type: "video", 
      src: "https://res.cloudinary.com/dihcnrjri/video/upload/v1/IMG_5650_iyc4bb.webm",
      poster: "spotlightimages/AI Waste Segregrator.avif",
      controls: true,
      muted: false,
      autoPlay: false
    },
    stats: { likes: 28, comments: 180, shares: 1700, downloads: 63000 },
  },
];

export default function SpotlightSection({
  label = "Components",
  heading = "News & Events",
  subheading = "Fresh notices, key dates, and campus highlights—at a glance.",
  cta = { label: "View all Components", href: "#" },
  items = defaultItems,
}: SpotlightSectionProps) {
  return (
    <section className="px-6 overflow-x-hidden" style={{ paddingTop: "88px", paddingBottom: "48px" }}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-10">
          <div className="flex items-baseline justify-start gap-2">
            <h2 className="font-semibold tracking-tight leading-[1.1] text-foreground" style={{ fontSize: '44px' }}>
              {heading}
        </h2>
          </div>
          {subheading ? (
            <p className="mt-2 text-base md:text-lg text-muted-foreground leading-snug max-w-2xl">
              {subheading}
            </p>
          ) : null}
        </header>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((card) => (
            <div key={card.id}>
              {/* Video cards handle their own clicks, image cards can navigate */}
              {card.media?.type === "video" ? (
                <div className="block rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow">
                  <MediaPreview media={card.media} />
                </div>
              ) : (
                <a href={card.href || "#"} className="block rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow">
                  <MediaPreview media={card.media} />
                </a>
              )}
              <div className="mt-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-medium text-foreground whitespace-pre-line">
                      {card.title}
                </h3>
                    {card.subtitle ? (
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        {card.subtitle}
                      </p>
                    ) : null}
                  </div>
                  {/* Add external link for video cards if href exists */}
                  {card.media?.type === "video" && card.href && (
                    <a 
                      href={card.href} 
                      className="ml-2 p-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                      title="View more"
                    >
                      <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <EngagementBar link={card.href} mediaSrc={card.media?.src} initial={card.stats} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 ring-1 ring-black/5 shadow-sm">
            <a aria-label="Instagram" href="#" className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <IconBrandInstagram size={20} className="text-neutral-700" />
            </a>
            <a aria-label="Facebook" href="#" className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <IconBrandFacebook size={20} className="text-neutral-700" />
            </a>
            <a aria-label="YouTube" href="#" className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <IconBrandYoutube size={20} className="text-neutral-700" />
            </a>
            <a aria-label="LinkedIn" href="#" className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <IconBrandLinkedin size={20} className="text-neutral-700" />
            </a>
            <a aria-label="X" href="#" className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <IconBrandX size={20} className="text-neutral-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}