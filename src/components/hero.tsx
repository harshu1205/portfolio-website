"use client"

import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="h-[75vh] flex items-center justify-center px-6 pt-16 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-zinc-800/20 to-transparent rounded-full blur-3xl animate-subtle-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-zinc-700/10 to-transparent rounded-full blur-3xl animate-subtle-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-5">
          {/* Title */}
          <div className="space-y-3 animate-fade-in">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">
              AI / ML & Computer Vision Engineer
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient">
              Harsh Akula
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-0 stagger-2">
            I build AI systems that actually work in production.
            <br className="hidden md:block" />
            <span className="text-foreground/80">Not demos. Real systems that make money and don&apos;t break at 3 AM.</span>
          </p>

          {/* Scroll indicator */}
          <div className="pt-6 animate-fade-in opacity-0 stagger-3">
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              <span className="text-xs uppercase tracking-widest">See What I&apos;ve Built</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
