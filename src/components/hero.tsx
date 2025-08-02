"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])
  
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden cyber-grid">
      {/* Animated Particles Background */}
      <div className="particles-bg">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rotate-45 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rotate-12 animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-10 w-8 h-8 border border-primary/30 animate-sparkle">
          <Sparkles className="w-full h-full text-primary/50" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6 page-transition loaded">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="holographic animate-gradient-x">Harsh</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            AI Software Engineer & Machine Learning Specialist
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building intelligent systems with advanced ML architectures and enterprise-scale solutions. 
            Specialized in predictive analytics, computer vision, and serverless AI platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 animate-pulse-glow transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="mr-2 h-4 w-4 animate-sparkle" />
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Harsh_Akula_Resume.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tl from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-full blur-3xl animate-gradient-x" />
        </div>
      </div>
    </section>
  )
}