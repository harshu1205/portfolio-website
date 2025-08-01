import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Smartphone } from "lucide-react"

export default function About() {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Technologies",
      description: "REST APIs, GraphQL, AWS, Docker",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "React Native, Flutter, Progressive Web Apps",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with experience in building modern web applications
            and solving complex technical challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a dedicated software engineer with a passion for creating innovative 
              digital solutions. My journey in technology started with curiosity and 
              has evolved into expertise across multiple programming languages and frameworks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date 
              with the latest industry trends. My goal is to build applications that 
              not only function flawlessly but also provide exceptional user experiences.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-6xl font-bold text-primary/30">SA</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="text-primary">{skill.icon}</div>
                <h4 className="font-semibold">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}