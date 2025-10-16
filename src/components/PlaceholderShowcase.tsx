import * as React from "react";
import { cn } from "@/lib/utils";
import { useNavigationVisibility } from "@/hooks/use-navigation-visibility";

export default function PlaceholderShowcase() {
  type VideoItem = {
    id: string;
    title: string;
  };

  const VIDEOS: VideoItem[] = [
    { id: "8qo7ICRSt24", title: "Best Early Schooling" },
    { id: "m_rwp43w_hw", title: "World Class sports facilities" },
    { id: "HappIizOXwg", title: "Best Boarding School" },
    { id: "hO5vxfzAruE", title: "Learning With Nature" },
    { id: "30Iv5fKqsQ4", title: "Holistic Development" },
    { id: "6PYHX9dTZYQ", title: "Academic excellence at Royal Global School" },
  ];

  const [activeVideoId, setActiveVideoId] = React.useState<string>(VIDEOS[0].id);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const playerContainerRef = React.useRef<HTMLDivElement | null>(null);
  const playerRef = React.useRef<YTPlayerShape | null>(null);
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const { hideNavigation, showNavigation } = useNavigationVisibility();

  React.useEffect(() => {
    let isMounted = true;

    function ensureYouTubeApi(): Promise<void> {
      return new Promise((resolve) => {
        const w = window as unknown as { YT?: { Player?: unknown }; onYouTubeIframeAPIReady?: () => void };
        if (w.YT && w.YT.Player) {
          resolve();
          return;
        }
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
        w.onYouTubeIframeAPIReady = () => resolve();
      });
    }

    ensureYouTubeApi().then(() => {
      if (!isMounted || !playerContainerRef.current) return;
      const w = window as unknown as { YT: { Player: YTPlayerConstructor } };
      const player = new w.YT.Player(playerContainerRef.current, {
        videoId: VIDEOS[0].id, // Use the initial video ID instead of reactive activeVideoId
        playerVars: {
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          controls: 1,
        },
        events: {
          onStateChange: (event: { data: number }) => {
            // 1: playing, 2: paused, 0: ended
            if (event.data === 1) {
              setIsPlaying(true);
              hideNavigation();
            } else if (event.data === 2 || event.data === 0) {
              setIsPlaying(false);
              showNavigation();
            }
          },
        },
      });
      playerRef.current = player;
    });

    return () => {
      isMounted = false;
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [hideNavigation, showNavigation]);

  // Intersection Observer to detect when video moves out of viewport
  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting && isPlaying) {
          showNavigation();
        }
      },
      {
        threshold: 0.1, // Show nav when 90% of video is out of viewport
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [isPlaying, showNavigation]);

  React.useEffect(() => {
    if (!playerRef.current) return;
    playerRef.current.cueVideoById(activeVideoId);
    setIsPlaying(false);
  }, [activeVideoId]);

  function handlePlay() {
    if (!playerRef.current) return;
    // When user clicks overlay, load and play the current video
    playerRef.current.loadVideoById(activeVideoId);
    playerRef.current.playVideo();
  }

  return (
    <section ref={sectionRef} className="px-6 bg-background" style={{ paddingTop: '90px', paddingBottom: '96px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <div
            className="inline-flex items-center px-4 py-1.5 bg-neutral-100 text-neutral-700 shadow-sm"
            style={{ borderRadius: 9999 }}
          >
            <span style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '12px', fontWeight: 600 }}>
            Where learning meets opportunity
            </span>
          </div>
        </div>

        <h2
          className="text-center text-neutral-900 mt-5"
          style={{ fontSize: '36px', lineHeight: 1.2, fontFamily: 'Satoshi, sans-serif', fontWeight: 800 }}
        >
          A glimpse into 
          <br />
          a Royalite’s journey.
        </h2>

        <div className="relative overflow-hidden rounded-2xl bg-neutral-200 aspect-[16/9] mt-8">
          <div ref={playerContainerRef} className="w-full h-full" />
          {!isPlaying && (
            <button
              aria-label="Play video"
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span
                className={cn(
                  "inline-flex items-center justify-center",
                  "h-16 w-16 bg-white text-neutral-900",
                  "shadow-xl"
                )}
                style={{ borderRadius: 9999 }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7L8 5z" fill="#111" />
                </svg>
              </span>
            </button>
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {VIDEOS.map((v) => {
            const isActive = v.id === activeVideoId;
            const thumb = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
            return (
              <button
                key={v.id}
                onClick={() => setActiveVideoId(v.id)}
                className={cn(
                  "relative text-left overflow-hidden",
                  "rounded-xl transition-shadow",
                  isActive ? "shadow-[0_10px_30px_rgba(0,0,0,.2)]" : "shadow-[0_3px_12px_rgba(0,0,0,.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,.18)]"
                )}
                aria-pressed={isActive}
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img src={thumb} alt={v.title} className="h-full w-full object-cover" />
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2 flex items-center gap-1.5">
                  <span className="inline-flex items-center justify-center h-5 w-5 bg-white" style={{ borderRadius: 9999 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7L8 5z" fill="#111" />
                    </svg>
                  </span>
                  <span className="text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '11px', fontWeight: 600 }}>
                    {v.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Minimal player typings we use to avoid 'any'
type YTPlayerShape = {
  playVideo: () => void;
  pauseVideo: () => void;
  loadVideoById: (videoId: string) => void;
  cueVideoById: (videoId: string) => void;
  destroy: () => void;
};

type YTPlayerConstructor = new (
  element: HTMLElement | string,
  options: {
    videoId?: string;
    playerVars?: Record<string, string | number | boolean | undefined>;
    events?: {
      onReady?: () => void;
      onStateChange?: (event: { data: number }) => void;
    };
  }
) => YTPlayerShape;


