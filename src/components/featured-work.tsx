"use client"

import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronLeft, ChevronRight, X, ExternalLink, Volume2, VolumeX, Maximize } from "lucide-react"

type MediaItem = {
  type: "image" | "video"
  src: string
  alt: string
}

type SubProject = {
  title: string
  description: string
  metrics?: string
}

type Project = {
  id: number
  number: string
  title: string
  subtitle: string
  description: string
  technologies: string[]
  media: MediaItem[]
  subProjects?: SubProject[]
  metrics?: { label: string; value: string }[]
  insights?: string[]
  placeholder?: boolean
  demoUrl?: string
  gameDemoUrl?: string
}

type FunProject = {
  title: string
  description: string
  longDescription: string
  tech: string
  media: MediaItem[]
}

function MediaGallery({ media, projectTitle }: { media: MediaItem[], projectTitle: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
    }
    checkMobile()
  }, [])

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1))
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1))
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRefs.current[currentIndex]
    if (video) {
      video.muted = !video.muted
      setIsMuted(video.muted)
    }
  }

  const enterFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRefs.current[currentIndex]
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen()
      } else if ('webkitRequestFullscreen' in video) {
        (video as HTMLVideoElement & { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen()
      } else if ('mozRequestFullScreen' in video) {
        (video as HTMLVideoElement & { mozRequestFullScreen: () => Promise<void> }).mozRequestFullScreen()
      } else if ('msRequestFullscreen' in video) {
        (video as HTMLVideoElement & { msRequestFullscreen: () => Promise<void> }).msRequestFullscreen()
      }
    }
  }

  useEffect(() => {
    // Play/pause videos based on current index
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex && !isMobile) {
          // Only autoplay on desktop
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      }
    })
  }, [currentIndex, isMobile])

  if (media.length === 0) return null

  return (
    <div className="relative w-full h-full bg-black/20 rounded-lg overflow-hidden">
      {/* Main Media Display */}
      <div className="relative w-full h-full">
        {media.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {item.type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="%2318181b" width="400" height="300"/><text fill="%2371717a" font-family="system-ui" font-size="14" x="50%" y="50%" text-anchor="middle">${encodeURIComponent(projectTitle)}</text></svg>`
                }}
              />
            ) : (
              <video
                ref={(el) => { videoRefs.current[index] = el }}
                className="w-full h-full object-cover"
                autoPlay={!isMobile && index === currentIndex}
                loop
                muted={isMobile ? true : isMuted}
                playsInline
                controls={isMobile}
                preload={index === currentIndex ? "auto" : "metadata"}
                onLoadedMetadata={() => {
                  const video = videoRefs.current[index]
                  if (video && index === currentIndex && !isMobile) {
                    video.play().catch(() => {})
                  }
                }}
              >
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Video Controls - Hidden on Mobile (native controls shown instead) */}
      {media[currentIndex]?.type === "video" && !isMobile && (
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <button
            onClick={enterFullscreen}
            className="p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors"
            title="Fullscreen"
          >
            <Maximize className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Navigation Arrows */}
      {media.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {media.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(index) }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function FunProjectModal({ project, onClose }: { project: FunProject, onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div 
        className="relative bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Media */}
        {project.media.length > 0 && (
          <div className="aspect-video w-full">
            <MediaGallery media={project.media} projectTitle={project.title} />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{project.tech}</p>
          <p className="text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedWork() {
  const [funProjectsOpen, setFunProjectsOpen] = useState(false)
  const [selectedFunProject, setSelectedFunProject] = useState<FunProject | null>(null)

  const featuredProjects: Project[] = [
    {
      id: 1,
      number: "01",
      title: "Parrot — Movement Made Social",
      subtitle: "Enterprise-Grade iOS Movement Platform",
      description: "This is the big one. A production iOS app that's actually live in the App Store. Real-time AR pose detection, frame-accurate movement matching, multi-stream video capture, and a full social platform—all built in SwiftUI. It's not a prototype. It's not an MVP. It's a shipping product that real people use every day. And yes, you can download it right now.",
      technologies: ["SwiftUI", "Snap Camera Kit", "MediaPipe", "Firebase", "AVFoundation", "ARKit", "Swift Concurrency"],
      media: [
        { type: "video", src: "/images/Parrot_1.mp4", alt: "Parrot App Demo" },
        { type: "video", src: "/images/Parrot_2.mp4", alt: "Parrot Features" },
        { type: "image", src: "/images/Parrot_3.jpg", alt: "Parrot App Interface" },
        { type: "image", src: "/images/Parrot_4.jpg", alt: "Pose Detection" },
        { type: "image", src: "/images/Parrot_5.jpg", alt: "Social Features" },
        { type: "image", src: "/images/Parrot_6.jpg", alt: "Leaderboards" },
        { type: "image", src: "/images/Parrot_7.jpg", alt: "Multi-Modal Activities" }
      ],
      subProjects: [
        {
          title: "Multi-Stream Video Capture Pipeline",
          description: "Simultaneously captures three video streams: 1080p camera quality, 720p processing stream, and depth data. Triple-buffer architecture with sophisticated memory management and frame synchronization. Because users want beautiful videos, but pose detection needs efficiency.",
          metrics: "3 Streams Simultaneous"
        },
        {
          title: "Real-Time AR Pose Detection",
          description: "Snap Camera Kit integration with 20-joint 3D skeleton tracking at 30 FPS with sub-millisecond latency. MediaPipe Heavy model fallback ensures 99.7% detection accuracy even in challenging lighting. Frame-accurate timestamping with normalized pose data.",
          metrics: "99.7% Accuracy • 30 FPS"
        },
        {
          title: "Frame-Accurate Pose Matching",
          description: "Frame-by-frame comparison with 33 pose landmarks, Euclidean distance in 3D space, temporal alignment, confidence-weighted scoring, and beat-synchronized analysis. Produces sub-percentage accuracy scores (87.3%) that users actually trust.",
          metrics: "Sub-Percentage Accuracy"
        },
        {
          title: "Enterprise Social Platform",
          description: "Follow requests, threaded comments, user discovery, engagement analytics, content moderation. Full Firebase integration with composite indexes, atomic uploads, and intelligent retry logic. Infrastructure that scales.",
          metrics: "Firebase Cloud"
        },
        {
          title: "3-Tier Smart Caching System",
          description: "L1 cache (500MB, 7 days) for previews, L2 cache (100MB, 30 days) for thumbnails, L3 permanent downloads. LRU eviction with access frequency boosting, automatic expiration, cache integrity validation, and emergency cleanup at 95% capacity.",
          metrics: "3-Tier Architecture"
        },
        {
          title: "Multi-Modal Activities Platform",
          description: "Beyond dance: Boxing mode with 3D SceneKit visualization, exercise tracking, yoga poses, table tennis. Each mode uses specialized pose models optimized for the specific activity. Because movement isn't just dancing.",
          metrics: "4+ Activity Modes"
        }
      ],
      metrics: [
        { label: "Status", value: "Live in App Store" },
        { label: "Pose Accuracy", value: "99.7%" },
        { label: "Latency", value: "<100ms" }
      ],
      insights: [
        "Atomic transaction pattern for cloud uploads. All-or-nothing with explicit rollback. Learned the hard way that partial failures leave orphaned files.",
        "User-scoped directory architecture for multi-user devices. Complete data isolation by userId. GDPR compliance from day one, not an afterthought.",
        "3-tier caching with LRU eviction and frequency boosting. Frequently accessed items get 20% score boost. Simple key-value caches don't cut it at scale.",
        "Defensive state management prevents race conditions. Explicit flags stop auth listener interference. Async timing bugs are impossible to reproduce otherwise.",
        "Performance instrumentation on every operation. Production monitoring, bottleneck identification. Can't fix what you don't measure.",
        "VideoContentPipeline as unified facade. Views don't need to know about 8+ managers. Separation of concerns done right.",
        "Health monitoring with self-healing. App monitors itself and takes corrective action. Operational maturity prevents user-facing failures.",
        "Content moderation with warning flags. Threaded comment system includes report workflows, admin review queue, and automatic flagging. Community management at scale.",
        "Backwards compatibility with deprecated upload methods. @available markers guide toward atomic patterns without breaking existing uploads. Incremental refactoring done right."
      ],
      demoUrl: "https://apps.apple.com/ca/app/parrot-movement-made-social/id6752134334",
      gameDemoUrl: "https://terehelt-live-client.vercel.app/"
    },
    {
      id: 2,
      number: "02",
      title: "CakeGPT App",
      subtitle: "AI-Powered Restaurant Intelligence Platform",
      description: "Built a full-stack restaurant management platform that talks to ChatGPT. Natural language queries, real-time POS sync, multi-supplier inventory, and enterprise analytics—all through conversational AI. Deployed as a Cloudflare Worker because edge computing is the future.",
      technologies: ["Cloudflare Workers", "React", "TypeScript", "MCP", "JSON-RPC 2.0", "MongoDB Query DSL", "Chart.js"],
      media: [
        { type: "image", src: "/images/CAKE_Menu.png", alt: "Menu Management" },
        { type: "image", src: "/images/CAKE_Inv.png", alt: "Inventory Management" },
        { type: "image", src: "/images/CAKE_Sales.png", alt: "Sales Analytics" },
        { type: "image", src: "/images/Cake_Sales.png", alt: "Enterprise Sales" },
        { type: "image", src: "/images/CAKE_Emp.png", alt: "Employee Management" },
        { type: "image", src: "/images/CAKE_MLR.png", alt: "Business Insights" }
      ],
      subProjects: [
        {
          title: "Menu Management System",
          description: "Hierarchical navigation: Menu → Categories → Items → Modifiers → Ingredients. Full CRUD-ready with parent-child relationships and dynamic ingredient generation.",
          metrics: "Hierarchical Structure"
        },
        {
          title: "Multi-Supplier Inventory",
          description: "Unified schema supporting SYSCO and USFOODS. MongoDB-style query syntax with operators ($eq, $gt, $contains, $or, $and) and nested field queries. Real-time stock tracking.",
          metrics: "Unified Schema"
        },
        {
          title: "Enterprise Sales Analytics",
          description: "Multi-location, multi-region aggregation with advanced grouping. Payment breakdowns, order type analysis, top performers with percentage contribution. Analytics that drive decisions.",
          metrics: "Multi-Location"
        },
        {
          title: "Employee & Customer CRM",
          description: "Employee performance metrics, shift scheduling, customer loyalty tiers, lifetime value tracking. All queryable through natural language.",
          metrics: "CRM Integration"
        },
        {
          title: "AI Business Insights",
          description: "Categorized insights with actionable recommendations. Sales trends, price optimization, event-based forecasting. Because data is useless without context.",
          metrics: "AI-Powered"
        }
      ],
      metrics: [
        { label: "Deployment", value: "Cloudflare Edge" },
        { label: "Protocol", value: "MCP/JSON-RPC" },
        { label: "Query Engine", value: "MongoDB DSL" }
      ],
      insights: [
        "Built a MongoDB-style query engine from scratch. Not because I had to, but because I wanted operators like $gt, $contains, $or that work across nested fields. Because sometimes you need to query 'prices.case.netPrice > 50'.",
        "Unified multi-supplier schema instead of separate handlers. SYSCO and USFOODS have different formats, but the frontend doesn't care. Abstraction layer handles it. Adding a third supplier? Minimal code changes.",
        "Dynamic date generation: dates are relative to 'now', not hardcoded. getDate(-5) = 5 days ago. Demos always look current, no embarrassing 'last updated 2 years ago' moments.",
        "8-second timeout on external API calls. MCP has strict timeouts, and I've learned that external APIs will hang if you let them. Fail fast, fail gracefully.",
        "Query validation with helpful errors. Instead of returning empty results, it tells you 'Invalid supplier(s): ACME. Available options: SYSCO, USFOODS.' Because debugging is easier when the system helps you.",
        "Designed schemas for easy porting to Snowflake. Comments explicitly mention 'relational structure' because I know this will need to scale to real databases eventually.",
        "Widget meta system abstracted into reusable functions. Because copying the same metadata pattern 10 times is how bugs happen. DRY isn't just a principle—it's survival.",
        "Observability enabled from day one in wrangler.toml. Because when something breaks at 3 AM, you want logs. Not 'I'll add monitoring later.'"
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Enterprise ML & Research",
      subtitle: "Machine Learning Systems at Scale",
      description: "The full arc: published research, neuroscience applications, and production ML that actually makes money. Because academic papers are nice, but shipping models that work is where it's at.",
      technologies: ["Python", "XGBoost", "MATLAB", "SVM", "Snowflake", "Statistical Analysis", "K-fold Validation"],
      media: [
        { type: "image", src: "/images/PUB_1.png", alt: "Published Research" },
        { type: "image", src: "/images/PUB_2.png", alt: "Research Methodology" },
        { type: "image", src: "/images/PUB_3.png", alt: "Research Results" },
        { type: "image", src: "/images/Cross_1.png", alt: "EEG Cross Decoding" },
        { type: "image", src: "/images/Cross_2.png", alt: "EEG Analysis Results" }
      ],
      subProjects: [
        {
          title: "Published ML Research — Auto Test Set Predictor",
          description: "Got something published. Peer-reviewed and everything. It's about ML validation—the boring stuff that prevents disasters.",
          metrics: "Published & Peer-Reviewed"
        },
        {
          title: "Neuroscience EEG Research",
          description: "Found out memory encoding happens between neurons, not within them. The hypothesis was wrong, but that's what made it interesting.",
          metrics: "Novel Discovery"
        },
        {
          title: "Predictive Customer Health Scoring",
          description: "XGBoost model that tells sales which customers are about to churn. 99.96% accuracy sounds impressive until you realize the 0.04% are the ones that matter.",
          metrics: "99.96% Accuracy"
        }
      ],
      metrics: [
        { label: "Accuracy", value: "99.96%" },
        { label: "Revenue Impact", value: "$1M+" },
        { label: "Status", value: "Published" }
      ],
      insights: [
        "Chose XGBoost over neural networks for interpretability. Sales team needed to explain predictions. SHAP values > 'trust me, it's AI.'",
        "Feature engineering took 3x longer than model training. The boring work is where accuracy comes from.",
        "K-fold validation isn't optional when decisions affect customer relationships. One bad prediction = one angry client.",
        "EEG research: hypothesis was wrong, and that's the discovery. Memory encoding between neurons, not within. 🧠",
        "Built model drift monitoring before deployment. Watched 'high-accuracy' models silently degrade. Never again.",
        "SHAP for feature importance. Stakeholders don't read confusion matrices; they read 'customer at risk because X.'"
      ]
    },
    {
      id: 4,
      number: "04",
      title: "CAKE Menu Maestro",
      subtitle: "Full-Stack AI Restaurant Platform → Direct POS Integration",
      description: "Take a photo of a menu, get a working POS system. That's the pitch. The reality involves Claude AI, embeddings, dual supplier APIs, and way too many edge cases. But it works, and restaurants are using it.",
      technologies: ["React", "TypeScript", "NestJS", "Claude AI", "OpenAI Embeddings", "GraphQL", "React Flow", "Supabase"],
      media: [
        { type: "video", src: "/images/MM_Video.mp4", alt: "Menu Maestro Full Demo" },
        { type: "image", src: "/images/MM_Menu.jpg", alt: "Visual Menu Builder" },
        { type: "image", src: "/images/MM_Insights.jpg", alt: "AI-Powered Insights" },
        { type: "image", src: "/images/MM_Orders.png", alt: "Order Management" },
        { type: "image", src: "/images/MM_Inv.png", alt: "Invoice Processing" }
      ],
      subProjects: [
        {
          title: "AI Menu Digitization",
          description: "Claude Opus reads menus from photos. It's not perfect, but it's way better than typing everything manually. Auto-categorizes, finds modifiers, spots allergens—the whole deal.",
          metrics: "Photo → Structured Data"
        },
        {
          title: "Semantic Ingredient Matching",
          description: "Embeddings that understand 'ground beef 80/20' and 'Angus patties' are basically the same thing. Regex can't do that. Rich context descriptions make the matching actually work.",
          metrics: "Vector Embeddings"
        },
        {
          title: "Inventory Tracking That Actually Works",
          description: "OCR invoices, detect suppliers automatically, fix pack sizes in the background. Because '1 case' means different things to different people, and inventory math matters.",
          metrics: "Real-time Correction"
        },
        {
          title: "AI Business Insights",
          description: "Claude Opus 4.1 with web search for local events and weather. It can actually call Sysco/US Foods APIs mid-conversation. Real data, real recommendations, not generic advice.",
          metrics: "Live Intelligence"
        },
        {
          title: "Dual Supplier Integration",
          description: "Sysco and US Foods APIs, both live. OAuth, GraphQL, the works. Built it extensible from day one because I knew a third supplier was coming.",
          metrics: "Sysco + US Foods"
        }
      ],
      metrics: [
        { label: "Pipeline", value: "End-to-End" },
        { label: "AI Models", value: "3 LLMs" },
        { label: "Output", value: "POS-Ready" }
      ],
      insights: [
        "Multi-supplier architecture from day one. Adding a third supplier requires minimal code changes. I knew it was coming.",
        "Rich text descriptions for embeddings include brand, category, pack size, price. Context matters: 'organic flour' vs 'all-purpose flour' need different matches.",
        "Pack size normalization is where the money is. '1 case' means different things to different suppliers. Get this wrong and inventory is fiction. 📦",
        "Background correction: invoice saves immediately, pack-size correction happens async. Users get instant feedback; data improves behind the scenes. 🎯",
        "Food-item-only filtering: Claude excludes paper products automatically. Nobody needs 'Bounty paper towels' in ingredient inventory.",
        "Tool-use architecture: Claude Opus 4.1 makes *real* Sysco/US Foods API calls mid-conversation. Live data, not canned responses.",
        "Extended Thinking with 10K tokens. Weather + events + sales history = demand forecasting that works. Not just 'sell more burgers.'",
        "Semantic matching at 0.81 threshold. Tuned by watching real workflows. High enough to avoid false positives, low enough to catch semantic matches.",
        "Stable UUID generation based on content hashing. Menu items keep identical IDs across exports. POS systems won't duplicate items on re-sync."
      ]
    },
    {
      id: 5,
      number: "05",
      title: "Siren Platform",
      subtitle: "Commissioned Full-Stack Application",
      description: "Built this for a music social startup. Spotify API integration, daily puzzles, OAuth token refresh logic that handles edge cases. The kind of project where you learn more from what breaks than what works.",
      technologies: ["Node.js", "JavaScript", "Spotify API", "Real-time Data", "OAuth 2.0", "Game Logic"],
      media: [
        { type: "image", src: "/images/Siren 1.png", alt: "Siren Platform Interface" },
        { type: "image", src: "/images/Siren 2.png", alt: "Siren Game Screen" },
        { type: "image", src: "/images/Siren 3.png", alt: "Siren Features" },
        { type: "video", src: "/images/70 - SirenV3.mp4", alt: "Siren Demo" },
        { type: "video", src: "/images/72 - SirenV1.mp4", alt: "Siren Demo V1" }
      ],
      metrics: [
        { label: "Type", value: "Commissioned" },
        { label: "Integration", value: "Spotify API" },
        { label: "Updates", value: "Daily" }
      ],
      insights: [
        "OAuth token refresh handles edge cases tutorials skip: expired tokens mid-request, race conditions, 3 AM silent failures.",
        "Spotify API rate limits are per-endpoint, not global. Got 429'd on search while charts worked fine. Read the docs twice.",
        "Caching layer invalidates intelligently. Daily charts don't need real-time; playlists do. Not all data is equal.",
        "Timezone handling: server stores UTC, client converts. Sounds obvious until debugging why yesterday's puzzle loaded today. 🌍",
        "Exponential backoff with jitter on external calls. When Spotify hiccups, synchronized retries make it worse.",
        "Scope creep from 'Wordle for music' to full platform. Managed by shipping incrementally—MVP first, features later."
      ]
    }
  ]

  const funProjects: FunProject[] = [
    {
      title: "Terehelt",
      description: "MMO RPG with 5000+ lines of code",
      longDescription: "Built an MMO RPG in Roblox because my friends and I missed playing a game that disappeared. 5000+ lines of Lua later, it's got database management, pathfinding, custom 3D models, and music I made. Over 1000 plays and almost a year of work. Sometimes passion projects are the best teachers.",
      tech: "Lua, Roblox Studio, Blender",
      media: [
        { type: "image", src: "/images/Ter_1.png", alt: "Terehelt Game" },
        { type: "image", src: "/images/Ter_2.png", alt: "Terehelt Gameplay" },
        { type: "image", src: "/images/Ter_3.png", alt: "Terehelt World" },
        { type: "video", src: "/images/52 - Tere_V1.mp4", alt: "Terehelt Demo" },
        { type: "video", src: "/images/53 - Tere_V2.mp4", alt: "Terehelt Demo 2" }
      ]
    },
    {
      title: "Taco Man",
      description: "Unity platformer with pixel art",
      longDescription: "Made a Unity platformer for my sister because she loves mobile games. Learned C# properly, built enemy AI, designed all the pixel art myself. It's simple, but it works, and she actually plays it.",
      tech: "Unity, C#, Pixel Art",
      media: [
        { type: "video", src: "/images/51 - taco_V1.mp4", alt: "Taco Man Gameplay" }
      ]
    },
    {
      title: "Tetradic",
      description: "Daily color-mixing puzzle game",
      longDescription: "Got bored during winter break, made a Wordle-style color puzzle game. Daily puzzles, local storage for progress, hosted on AWS. Sometimes the best projects come from being bored.",
      tech: "JavaScript, HTML/CSS, AWS",
      media: [
        { type: "image", src: "/images/tetr_1.png", alt: "Tetradic Interface" },
        { type: "image", src: "/images/tetr_2.png", alt: "Tetradic Gameplay" },
        { type: "video", src: "/images/47 - tetr_V1.mp4", alt: "Tetradic Demo" },
        { type: "video", src: "/images/48 - tetr_V2.mp4", alt: "Tetradic Demo 2" }
      ]
    },
    {
      title: "Candy Crush AI",
      description: "Neuroevolution game strategy engine",
      longDescription: "Wanted to learn neural networks, so I built an AI that plays Candy Crush. Screen casting, SVM for board analysis, genetic evolution for the neural net. It looks 4 moves ahead and actually works. Sometimes learning by doing is the only way.",
      tech: "Python, PyTorch, NumPy, SVM",
      media: [
        { type: "image", src: "/images/CCAI2.png", alt: "Candy Crush AI" },
        { type: "image", src: "/images/CC_3.png", alt: "AI Analysis" },
        { type: "image", src: "/images/CC_4.png", alt: "Neural Network" }
      ]
    },
    {
      title: "Chaos Simulator",
      description: "Lorenz attractor visualization",
      longDescription: "High school math project that got a perfect score. Explored chaos theory with Python—how tiny changes in initial conditions create completely different outcomes. The math was interesting, but visualizing it was the fun part.",
      tech: "Python, Matplotlib, SciPy",
      media: [
        { type: "image", src: "/images/Chaos_1.png", alt: "Chaos Visualization" },
        { type: "image", src: "/images/Chaos_2.png", alt: "Lorenz Attractor" },
        { type: "image", src: "/images/Chaos_3.png", alt: "System Dynamics" },
        { type: "image", src: "/images/Chaos_4.png", alt: "Final Visualization" }
      ]
    },
    {
      title: "Discord Bot",
      description: "Community engagement bot",
      longDescription: "Built a Discord bot for a server my friends and I started. User leveling, games, channel management—the usual stuff. Every developer has made one of these, but it was fun to build.",
      tech: "JavaScript, Discord.js, Heroku",
      media: [
        { type: "image", src: "/images/Disc_1.png", alt: "Discord Bot" },
        { type: "image", src: "/images/Disc_2.png", alt: "Bot Features" },
        { type: "image", src: "/images/Disc_3.png", alt: "Bot Commands" }
      ]
    },
    {
      title: "Course Planner",
      description: "Automated schedule builder",
      longDescription: "Watched friends struggle with course scheduling, built a tool to automate it. Selenium scrapes university sites, figures out prerequisites, builds schedules. It's not perfect, but it's better than manually checking everything.",
      tech: "Python, Selenium, Streamlit",
      media: [
        { type: "image", src: "/images/CoursePlan_1.png", alt: "Course Planner" },
        { type: "image", src: "/images/CoursePlan_2.png", alt: "Schedule View" },
        { type: "image", src: "/images/CoursePlan_3.png", alt: "Course Selection" }
      ]
    },
    {
      title: "Spotify Transfer",
      description: "Playlist migration tool",
      longDescription: "Had unreliable internet, wanted offline music. Built a tool to sync Spotify playlists to iTunes automatically. Web scraping, playlist parsing, the works. One click and my music library syncs. Simple problem, practical solution.",
      tech: "Python, SpotDL, BeautifulSoup",
      media: [
        { type: "image", src: "/images/Music_1.png", alt: "Spotify Transfer" },
        { type: "image", src: "/images/Music_2.png", alt: "Playlist View" }
      ]
    },
    {
      title: "Rummy Probabilities",
      description: "Card game probability simulator",
      longDescription: "Wanted to beat my family at Rummy, so I built a probability simulator. Lua-based, calculates optimal plays using calculus. Did it help? Maybe. Was it fun to build? Definitely.",
      tech: "Lua, Probability Theory",
      media: [
        { type: "image", src: "/images/Rummy_1.png", alt: "Rummy Simulator" },
        { type: "image", src: "/images/Rummy_2.png", alt: "Probability Analysis" },
        { type: "image", src: "/images/Rummy_3.png", alt: "Game Stats" }
      ]
    },
    {
      title: "Platform Game",
      description: "Roblox platformer with levels",
      longDescription: "Another Roblox project—platformer with multiple levels and obstacles. Learned game physics and level design. Sometimes you just build things to see if you can.",
      tech: "Lua, Roblox Studio",
      media: [
        { type: "image", src: "/images/Platform_1.png", alt: "Platform Game" },
        { type: "image", src: "/images/Platform_2.png", alt: "Level Design" },
        { type: "video", src: "/images/39 - Platform_V2.mp4", alt: "Platform Demo" },
        { type: "video", src: "/images/40 - Platform_V1.mp4", alt: "Platform Demo 2" }
      ]
    }
  ]

  return (
    <section id="work" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">
            What I&apos;ve Built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects That Actually Matter
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Here&apos;s the stuff I&apos;m actually proud of. The ones where I learned something, 
            broke something, and then fixed it properly.
          </p>
        </div>

        {/* Featured Projects - Full Width Cards */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`${project.placeholder ? 'opacity-50' : ''}`}
            >
              {/* Project Header */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-6xl md:text-8xl font-bold text-muted-foreground/20 featured-number leading-none">
                  {project.number}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.subtitle}</p>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Media */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/30 border border-border/30">
                  {project.placeholder ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-7xl font-bold text-muted-foreground/10 mb-2">
                          {project.number}
                        </div>
                        <p className="text-sm text-muted-foreground">Coming Soon</p>
                      </div>
                    </div>
                  ) : project.media.length > 0 ? (
                    <MediaGallery media={project.media} projectTitle={project.title} />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-muted-foreground/20">
                        {project.number}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Details */}
                <div className="flex flex-col">
                  {/* Description */}
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Demo Links */}
                  {(project.demoUrl || project.gameDemoUrl) && !project.placeholder && (
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Download on App Store
                        </a>
                      )}
                      {project.gameDemoUrl && (
                        <a
                          href={project.gameDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary/30 transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Try Demo Game
                        </a>
                      )}
                    </div>
                  )}

                  {/* Metrics Grid */}
                  {project.metrics && !project.placeholder && (
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-lg bg-secondary/30 border border-border/30 text-center"
                        >
                          <p className="text-xl md:text-2xl font-bold mb-1">{metric.value}</p>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sub-projects */}
              {project.subProjects && !project.placeholder && (
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  {project.subProjects.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="p-5 rounded-xl bg-secondary/20 border border-border/30"
                    >
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h4 className="font-semibold text-sm leading-tight">{sub.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {sub.description}
                      </p>
                      {sub.metrics && (
                        <Badge variant="outline" className="text-xs">
                          {sub.metrics}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Senior Insights */}
              {project.insights && !project.placeholder && (
                <div className="mt-8 p-6 rounded-xl bg-secondary/10 border border-border/20">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                    Lessons & Real Talk
                  </h4>
                  <ul className="space-y-3">
                    {project.insights.map((insight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-foreground/30 mt-1">—</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Divider between projects */}
              {index < featuredProjects.length - 1 && (
                <div className="mt-24 border-t border-border/30" />
              )}
            </article>
          ))}
        </div>

        {/* For Fun Section */}
        <div className="mt-32 border-t border-border/50 pt-16">
          <button
            onClick={() => setFunProjectsOpen(!funProjectsOpen)}
            className="w-full flex items-center justify-center gap-3 py-4 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm font-medium">other stuff i built for fun (or because i was bored)</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${funProjectsOpen ? 'rotate-180' : ''}`} />
          </button>

          <div className={`collapsible-content ${funProjectsOpen ? 'open' : ''}`}>
            <div className="collapsible-inner">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {funProjects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFunProject(project)}
                    className="p-4 rounded-lg bg-secondary/30 border border-border/30 hover:border-border/50 hover:bg-secondary/40 transition-all text-left group"
                  >
                    {/* Thumbnail */}
                    {project.media[0] && (
                      <div className="aspect-video rounded-md overflow-hidden mb-3 bg-black/20">
                        {project.media[0].type === "image" ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={project.media[0].src}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                        ) : (
                          <video
                            className="w-full h-full object-cover"
                            muted
                            loop
                            playsInline
                            autoPlay
                          >
                            <source src={project.media[0].src} type="video/mp4" />
                          </video>
                        )}
                      </div>
                    )}
                    <h4 className="font-medium text-sm mb-1">{project.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                    <p className="text-xs text-muted-foreground/70">{project.tech}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fun Project Modal */}
        {selectedFunProject && (
          <FunProjectModal
            project={selectedFunProject}
            onClose={() => setSelectedFunProject(null)}
          />
        )}
      </div>
    </section>
  )
}
