"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, Cloud, Code } from "lucide-react"

export default function About() {
  const skills = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning & AI",
      description: "XGBoost, CNNs, Computer Vision, Predictive Analytics",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Enterprise Systems",
      description: "Salesforce APIs, Snowflake, Redis, Vector Databases",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Serverless Architecture",
      description: "LangChain, OpenAI APIs, Multi-agent Systems",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Development",
      description: "Python, Node.js, React, ETL Pipelines",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI Software Engineer specializing in enterprise-scale machine learning systems
            and intelligent automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m an AI Software Engineer at Mad Mobile, focused on building enterprise-scale 
              machine learning systems that drive business value. My expertise spans predictive 
              analytics, computer vision, and serverless AI architectures.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in developing high-accuracy ML models, intelligent automation platforms, 
              and distributed systems that handle enterprise workloads. My approach combines technical 
              excellence with business impact, delivering solutions that scale.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/photo_5030921246979763740_y.jpg" 
                alt="Sriharshith Akula - Professional Headshot"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) nextElement.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full items-center justify-center">
                <div className="text-6xl font-bold text-primary/30">SA</div>
              </div>
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