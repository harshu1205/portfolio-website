"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Student Course Planner",
      description: "Python-based application that automates college class schedule creation using web scraping and provides user-friendly interface for course planning.",
      longDescription: "The Student Course Planner streamlines the process of crafting college class schedules by automating the task based on user specifications. Initially tailored for UF majors, this project harnesses the power of Selenium to extract all requisite courses from university major websites, allowing users to customize their schedules according to factors such as graduation timeline, preferred majors/minors, course prerequisites, and more.",
      technologies: ["Python", "Selenium", "Streamlit"],
      category: "applications",
      mediaType: "image",
      mediaUrl: "https://static.wixstatic.com/media/e71193_cfa0a3e846ae4f8e92a1134754e03cca~mv2.png",
      rationale: "Seeing friends struggle to juggle classes, credits, and preferences, I wanted to create something that could ease their burden and turn the chaos of course scheduling into a simple, user-friendly experience.",
      featured: true
    },
    {
      id: 2,
      title: "Mood Planner",
      description: "A mental health management website designed to help students track their mental state and well-being with interactive features.",
      longDescription: "The Mood Planner is like having a personal mental health management tool right in your browser. Crafted with HTML, JS, and CSS, it's designed to revolutionize how students tackle their mental state and mental health, especially with school. The website features tabs for students to express their moods throughout the week and write about their experiences.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "websites",
      mediaType: "video",
      mediaUrl: "https://video.wixstatic.com/video/e71193_72e3843a26754d598d1cc55b9f6dfa47/1080p/mp4/file.mp4",
      featured: true
    },
    {
      id: 3,
      title: "Siren Site",
      description: "Web development project showcasing dynamic and engaging web experiences with modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      category: "websites",
      mediaType: "video",
      mediaUrl: "https://video.wixstatic.com/video/e71193_b563dd42d7b24e1cb1457d980dbbb7f9/1080p/mp4/file.mp4",
      featured: true
    },
    {
      id: 4,
      title: "Tetradic",
      description: "Web development project showcasing skills in HTML, CSS, JavaScript, and Node.js with focus on interactive user experiences.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      category: "websites",
      mediaType: "image",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my coding projects that highlight my skills in web development, Python applications, 
            and user-focused solutions. From course planning tools to mental health platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(project => project.featured).map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10">
                {project.mediaType === "image" && project.mediaUrl ? (
                  <div className="h-full flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={project.mediaUrl} 
                      alt={`${project.title} project screenshot`}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) nextElement.style.display = 'flex';
                      }}
                    />
                    <div className="hidden h-full w-full items-center justify-center">
                      <div className="text-4xl font-bold text-primary/30">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                  </div>
                ) : project.mediaType === "video" && project.mediaUrl ? (
                  <div className="relative h-full flex items-center justify-center bg-black/5">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="bg-primary/80 rounded-full p-3">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <video 
                      className="h-full w-full object-cover" 
                      preload="metadata"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) nextElement.style.display = 'flex';
                      }}
                    >
                      <source src={project.mediaUrl} type="video/mp4" />
                    </video>
                    <div className="hidden h-full w-full items-center justify-center">
                      <div className="text-4xl font-bold text-primary/30">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/30">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span>{project.title}</span>
                  {project.mediaType === "video" && project.mediaUrl && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.mediaUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                {project.rationale && (
                  <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground italic">
                      &ldquo;{project.rationale}&rdquo;
                    </p>
                  </div>
                )}
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}