import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, TrendingUp } from "lucide-react"

export default function Experience() {
  const experience = {
    company: "Mad Mobile",
    role: "AI Software Engineer",
    duration: "May 2025 - Present",
    location: "Tampa, Florida",
    type: "Full-time",
    achievements: [
      {
        title: "Predictive Customer Health Scoring System",
        description: "Architected ML system with 99.96% accuracy using XGBoost across 13K+ records, enabling $1M+ at-risk revenue visibility",
        technologies: ["Machine Learning", "XGBoost", "Predictive Analytics", "Customer Intelligence"]
      },
      {
        title: "Serverless Customer Support Platform",
        description: "Built production-grade platform with sub-200ms response latencies and 5-figure cost reduction through intelligent routing",
        technologies: ["LangChain", "Serverless Architecture", "ElevenLabs TTS", "Salesforce API", "Snowflake", "Redis"]
      },
      {
        title: "Computer Vision System",
        description: "Developed distributed system with 95%+ accuracy for semantic feature extraction from stylized product images",
        technologies: ["Computer Vision", "CNN Architectures", "Multi-agent Systems", "Image Processing"]
      },
      {
        title: "Enterprise CRM Integration",
        description: "Integrated OpenAI embeddings for semantic analysis and intelligent priority scoring with real-time ETL processes",
        technologies: ["OpenAI Embeddings", "Enterprise CRM", "ETL Pipelines", "Vector Databases", "Lead Qualification"]
      }
    ]
  }

  return (
    <section id="experience" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building enterprise-scale AI solutions and machine learning systems
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl text-primary">{experience.role}</CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold">{experience.company}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{experience.location}</span>
                </div>
              </div>
              <div className="flex flex-col lg:items-end gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{experience.duration}</span>
                </div>
                <Badge variant="secondary">{experience.type}</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="border-l-4 border-primary/20 pl-6">
                  <div className="flex items-start gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">{achievement.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {achievement.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}