"use client"

import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"

export default function Contact() {
  const links = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "sriharshithakula@gmail.com",
      href: "mailto:sriharshithakula@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Let's connect",
      href: "https://www.linkedin.com/in/sriharshith-akula-7466b627b/",
      external: true,
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "Check out my code",
      href: "https://github.com/harshu1205",
      external: true,
    },
  ]

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          {/* Header */}
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s talk
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Always open to interesting projects, new opportunities, or just chatting about AI/ML, 
            computer vision, or the latest thing that broke in production. 
            <br className="hidden md:block" />
            <span className="text-foreground/80">Remote work preferred, but I'll travel for the right team.</span>
          </p>

          {/* Contact Links */}
          <div className="space-y-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between p-5 rounded-lg border border-border/50 hover:border-border hover:bg-secondary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="font-medium">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Based in <span className="text-foreground">Tampa, Florida</span> — 
              but honestly, I'm usually just wherever my laptop is.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
