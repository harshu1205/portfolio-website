"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Slideshow } from "@/components/ui/slideshow"
import { ExternalLink, Play } from "lucide-react"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const categories: Record<string, { name: string; color: string }> = {
    "ai-ml": { name: "AI & Machine Learning", color: "bg-blue-500" },
    "games": { name: "Games", color: "bg-green-500" },
    "research": { name: "Research", color: "bg-purple-500" },
    "websites": { name: "Websites", color: "bg-orange-500" },
    "bots": { name: "Bots & Automation", color: "bg-red-500" }
  }

  const projects = [
    // AI/ML Projects
    {
      id: 1,
      title: "Candy Crush AI",
      description: "A remarkable fusion of screen casting technology, machine learning, and neural network evolution using NumPy and PyTorch.",
      longDescription: "My Candy Crush AI project represents a remarkable fusion of screen casting technology, machine learning, and neural network evolution, using NumPy as well as pytorch. Utilizing screen casting software, I projected my phone screen onto my laptop, enabling image retrieval and processing of Candy Crush game boards. Leveraging machine learning, specifically Support Vector Machines (SVM), I calculated all feasible board actions and inputted them into a genetically evolved neural network system. This system, employing neuroevolution, meticulously determined the optimal moves for each board state by peering four steps ahead.",
      technologies: ["Python", "NumPy", "PyTorch", "SVM", "Neural Networks"],
      category: "ai-ml",
      mediaType: "slideshow",
      media: [
        { type: "image" as const, src: "/images/CCAI2.png", alt: "Candy Crush AI Interface" },
        { type: "image" as const, src: "/images/CCAI2_edited.jpg", alt: "Candy Crush AI Analysis" },
        { type: "image" as const, src: "/images/CC_3.png", alt: "AI Board Analysis" },
        { type: "image" as const, src: "/images/CC_4.png", alt: "Neural Network Training" }
      ],
      rationale: "Motivated by my passion for competitive gaming and a burgeoning interest in artificial intelligence, I embarked on the challenging journey of creating a Candy Crush AI. Eager to expand my expertise in AI, I saw this project as an opportunity to delve deeper into neural networks and machine learning algorithms.",
      techImages: {
        "Python": "/images/python-5-logo-png-transparent.png",
        "PyTorch": "/images/1200px-PyTorch_logo_icon.svg.png"
      },
      featured: true
    },
    {
      id: 2,
      title: "Publication - Auto Test Set Predictor", 
      description: "Machine learning research publication focusing on automated test set prediction and validation.",
      longDescription: "Published research work on developing machine learning models for automated test set prediction, contributing to advances in ML validation methodologies and predictive analytics. This work demonstrates sophisticated understanding of machine learning validation techniques and statistical analysis.",
      technologies: ["Machine Learning", "Data Analysis", "Research", "Statistical Analysis"],
      category: "ai-ml",
      mediaType: "slideshow",
      media: [
        { type: "image" as const, src: "/images/PUB_1.png", alt: "Research Publication Cover" },
        { type: "image" as const, src: "/images/PUB_2.png", alt: "Publication Methodology" },
        { type: "image" as const, src: "/images/PUB_3.png", alt: "Research Results" }
      ],
      featured: true
    },
    {
      id: 3,
      title: "EEG Research K-fold Machine Learning SVM",
      description: "Advanced EEG data analysis using machine learning techniques and statistical validation methods.",
      longDescription: "Advanced EEG research project utilizing K-fold cross-validation with Support Vector Machines for brain signal analysis. This work contributes to understanding neural patterns and brain-computer interface development through sophisticated machine learning approaches.",
      technologies: ["MATLAB", "Machine Learning", "SVM", "EEG Analysis", "K-fold Validation"],
      category: "ai-ml",
      mediaType: "image",
      mediaUrl: "https://static.wixstatic.com/media/e71193_1902bf4ac3104a4db7b4f8a54219b63e~mv2.png",
      techImages: {
        "MATLAB": "https://static.wixstatic.com/media/e71193_2fbac3d58cac42ffa524ceec433cde14~mv2.png"
      },
      featured: true
    },

    // Games Projects  
    {
      id: 4,
      title: "Terehelt",
      description: "An ambitious MMO RPG game developed in Roblox Studio with over 5000 lines of code and 1000+ plays.",
      longDescription: "Terehelt is an ambitious MMO RPG game developed in Roblox Studio using Lua, demonstrating advanced skills in database management, client/server interactions, pathfinding algorithms, and hitbox calculations. The project also showcases expertise in front-end design, custom 3D modeling with Blender, and original music composition. With over 5000 lines of code and almost a year of development, it highlights my proficiency in game development, programming, and creative design, and currently has over 1000 plays.",
      technologies: ["Lua", "Roblox Studio", "Blender", "Game Design"],
      category: "games",
      mediaType: "slideshow",
      media: [
        { type: "image" as const, src: "/images/Ter_1.png", alt: "Terehelt Game Interface" },
        { type: "image" as const, src: "/images/Ter_2.png", alt: "Terehelt Gameplay" },
        { type: "image" as const, src: "/images/Ter_3.png", alt: "Terehelt World Design" },
        { type: "video" as const, src: "/images/52 - Tere_V1.mp4", alt: "Terehelt Gameplay Demo 1" },
        { type: "video" as const, src: "/images/53 - Tere_V2.mp4", alt: "Terehelt Gameplay Demo 2" },
        { type: "video" as const, src: "/images/54 - Tere_V3.mp4", alt: "Terehelt Gameplay Demo 3" }
      ],
      demoUrl: "https://www.roblox.com/games/5120450169/Terehelt-Beta",
      rationale: "I have a particular place in my heart for 'Terehelt' because it's more than just a game — it's a journey that sparked my interest in coding. My friends and I used to play this game for a long time until it disappeared. I started to make my own version, determined to bring those memories back.",
      techImages: {
        "Lua": "/images/Lua-Logo.svg.png"
      },
      featured: true
    },
    {
      id: 5,
      title: "Taco Man",
      description: "A significant milestone in game design developed using Unity engine with advanced object-oriented programming in C#.",
      longDescription: "TacoMan represents a significant milestone in my journey of game design, developed using Unity game engine and employing advanced-level techniques. Built on the foundation of object-oriented programming in C#, the game stands as a testament to my prowess in leveraging C# and Unity for intricate game development.",
      technologies: ["Unity", "C#", "Pixel Art", "Game Development"],
      category: "games",
      mediaType: "image",
      rationale: "My motivation for creating 'TacoMan' stemmed from a twofold inspiration. Firstly, driven by a personal passion for advancing my skills in game design, I embarked on the journey of exploring the capabilities of professional-grade software like Unity. Secondly, witnessing my sister's enthusiasm for mobile platformer games ignited a desire within me to surprise her with a unique creation of my own.",
      techImages: {
        "Unity": "https://static.wixstatic.com/media/e71193_8d87d6ee8b164a8c94841ddc86277ca2~mv2.png",
        "C#": "https://static.wixstatic.com/media/e71193_a5d95c7b2b304de49b8081afec7a8fab~mv2.png"
      },
      featured: true
    },
    {
      id: 6,
      title: "Tetradic",
      description: "Web game featuring color-mixing gameplay inspired by daily puzzle games, hosted on AWS.",
      longDescription: "Tetradic is a web game developed using HTML, CSS, and JavaScript. It features color-mixing gameplay inspired by popular daily games like those found in The New York Times and Wordle. The code includes functions for generating daily puzzles, managing game logic, and storing player data using local storage. It was hosted with a custom domain using amazon web services.",
      technologies: ["HTML", "CSS", "JavaScript", "AWS"],
      category: "games",
      mediaType: "image",
      techImages: {
        "HTML/CSS/JS": "https://static.wixstatic.com/media/e71193_1471559b5a364fafba2be56231a762ec~mv2.png",
        "AWS": "https://static.wixstatic.com/media/e71193_9f84de95d9044c8bba20a21ae0df62e0~mv2.png"
      },
      featured: true
    },
    {
      id: 7,
      title: "Ultimate RPS",
      description: "Enhanced Rock Paper Scissors game with advanced gameplay mechanics and strategic elements.",
      longDescription: "Ultimate RPS takes the classic Rock Paper Scissors game to the next level with enhanced gameplay mechanics, strategic elements, and engaging user interface design. Features multiple game modes, AI opponents, and statistical tracking.",
      technologies: ["JavaScript", "HTML", "CSS", "Game Logic"],
      category: "games",
      mediaType: "image",
      featured: false
    },
    {
      id: 8,
      title: "Rock Paper Scissors IRL",
      description: "Real-world implementation of Rock Paper Scissors using computer vision and gesture recognition.",
      longDescription: "An innovative approach to the classic game using computer vision technology to recognize hand gestures in real-time, bridging the gap between digital and physical gameplay. Utilizes OpenCV and machine learning for accurate gesture detection.",
      technologies: ["Python", "Computer Vision", "OpenCV", "Machine Learning"],
      category: "games",
      mediaType: "image",
      featured: false
    },
    {
      id: 9,
      title: "Super Smash Blox",
      description: "Fighting game inspired by Super Smash Bros, developed with custom characters and mechanics.",
      longDescription: "A fighting game project inspired by Super Smash Bros, featuring custom character designs, unique fighting mechanics, and multiplayer gameplay elements. Developed with focus on balanced gameplay and competitive mechanics.",
      technologies: ["Game Development", "Character Design", "Multiplayer", "Combat Systems"],
      category: "games",
      mediaType: "image",
      featured: false
    },

    // Research Projects
    {
      id: 10,
      title: "Research Lab Cross Decoding",
      description: "Sophisticated MATLAB tool for groundbreaking EEG research using correlation-based cross-decoding methods.",
      longDescription: "The Correlation-Based Cross-Decoding Script is a sophisticated MATLAB tool developed for groundbreaking research conducted at the University of Florida. Inspired by recent advancements in EEG data analysis, this script implements a novel method to decode brain signals based on correlation patterns between EEG channels. Through meticulous 4D matrix manipulation, matrix simplification, and statistical analysis, the script extracts correlation data and assembles it into lower-dimensional 'windows' at specific time points.",
      technologies: ["MATLAB", "EEG Analysis", "Machine Learning", "SVM"],
      category: "research",
      mediaType: "image",
      mediaUrl: "https://static.wixstatic.com/media/e71193_b38bc53429ca4495ae5d1a17f3cbc2a4~mv2.png",
      rationale: "Driven by the challenge of replicating cutting-edge research, I embarked on the development of the Correlation-Based Cross-Decoding Script under the guidance of my lab mentor. Apparently by decoding the correlation (R^2) BETWEEN channels rather than in channels, we can show that short term visual memory is actually present BETWEEN neurons, rather than in neurons!",
      techImages: {
        "MATLAB": "https://static.wixstatic.com/media/e71193_2fbac3d58cac42ffa524ceec433cde14~mv2.png"
      },
      featured: true
    },
    {
      id: 11,
      title: "Chaos Simulator",
      description: "Python project exploring chaos theory and the Lorenz attractor system using differential equations.",
      longDescription: "The Chaos Simulator is a Python project designed to explore the fascinating realm of chaos theory, particularly focusing on the Lorenz attractor system. Leveraging Python libraries such as Matplotlib, SciPy, and NumPy, this project dynamically models chaotic systems over time, employing differential equations and calculus to illustrate how subtle changes in initial conditions can profoundly alter system states.",
      technologies: ["Python", "Matplotlib", "SciPy", "NumPy"],
      category: "research",
      mediaType: "slideshow",
      media: [
        { type: "image" as const, src: "/images/Chaos_1.png", alt: "Chaos Theory Visualization" },
        { type: "image" as const, src: "/images/Chaos_1_edited.jpg", alt: "Lorenz Attractor Analysis" },
        { type: "image" as const, src: "/images/Chaos_2.png", alt: "Mathematical Modeling" },
        { type: "image" as const, src: "/images/Chaos_3.png", alt: "System Dynamics" },
        { type: "image" as const, src: "/images/Chaos_3_edited.jpg", alt: "Chaos Results" },
        { type: "image" as const, src: "/images/Chaos_4.png", alt: "Final Visualization" }
      ],
      rationale: "Originally conceived as part of my high school IB Math internal assessment, the Chaos Simulator seamlessly integrates mathematics with programming to delve into the captivating realm of chaos theory. I ended up getting a perfect score in this Internal Investigation!",
      techImages: {
        "Python": "/images/python-5-logo-png-transparent.png"
      },
      featured: true
    },
    {
      id: 12,
      title: "Rummy Probabilities Simulator",
      description: "Lua-based simulator for analyzing strategic dynamics and probabilities in the card game Rummy.",
      longDescription: "The Rummy Probabilities Simulator, crafted in Lua, is a simulator for the strategic dynamics of the popular card game Rummy. Utilizing straightforward data structures and operators, this interactive code enables users to engage in simulated Rummy matches while providing statistical insights into optimal gameplay decisions based on calculus-derived probabilities.",
      technologies: ["Lua", "Probability Theory", "Statistics", "Game Theory"],
      category: "research",
      mediaType: "image",
      mediaUrl: "https://static.wixstatic.com/media/e71193_14f41f1bc6d3417f8ed8c31af39a6407~mv2.png",
      rationale: "Initially used as an inventive alternative for my high school math internal assessment, the Rummy Probabilities Simulator merges my passion for mathematics with the beloved pastime of playing Rummy with my family.",
      techImages: {
        "Lua": "https://static.wixstatic.com/media/e71193_ef088d782e654846b566de5b052caafb~mv2.png"
      },
      featured: true
    },

    // Website Projects
    {
      id: 13,
      title: "Siren Site",
      description: "Website designed for a music social media app organization featuring Spotify API integration and custom games.",
      longDescription: "Siren is a website I designed for an organization developing a music social media app. Utilizing my skills in HTML, JavaScript, and CSS, I built the site and hosted it on a Node.js server. It features a game inspired by the 'Immaculate Grid,' but centered around music. The game integrates several Spotify APIs, provides daily updating charts, and includes logic for creating game templates.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Spotify API"],
      category: "websites",
      mediaType: "slideshow",
      media: [
        { type: "image" as const, src: "/images/Siren 1.png", alt: "Siren Main Interface" },
        { type: "image" as const, src: "/images/Siren 2.png", alt: "Siren Game Screen" },
        { type: "image" as const, src: "/images/Siren 3.png", alt: "Siren Features" },
        { type: "video" as const, src: "/images/70 - SirenV3.mp4", alt: "Siren Demo V3" },
        { type: "video" as const, src: "/images/72 - SirenV1.mp4", alt: "Siren Demo V1" },
        { type: "video" as const, src: "/images/73 - SirenV2.mp4", alt: "Siren Demo V2" },
        { type: "video" as const, src: "/images/74 - SirenV4.mp4", alt: "Siren Demo V4" }
      ],
      rationale: "After showcasing my website 'Tetradic' to an organization at the University of Florida, I was commissioned to create a website for their upcoming app, Siren. This app aims to be a music-based social media platform.",
      techImages: {
        "HTML/CSS/JS": "/images/logo-html-5-css-javascript-source-code-for-the-taking-23.png",
        "Node.js": "/images/1200px-Node.js_logo.svg.png"
      },
      featured: true
    },
    {
      id: 14,
      title: "Student Course Planner",
      description: "Python-based application that automates college class schedule creation using web scraping.",
      longDescription: "The Student Course Planner, a Python-based endeavor, streamlines the process of crafting college class schedules by automating the task based on user specifications. Initially tailored for UF majors, this project harnesses the power of Selenium to extract all requisite courses from university major websites, allowing users to customize their schedules according to factors such as graduation timeline, preferred majors/minors, course prerequisites, and more.",
      technologies: ["Python", "Selenium", "Streamlit"],
      category: "websites",
      mediaType: "image",
      mediaUrl: "https://static.wixstatic.com/media/e71193_cfa0a3e846ae4f8e92a1134754e03cca~mv2.png",
      rationale: "Seeing friends struggle to juggle classes, credits, and preferences, I wanted to create something that could ease their burden and turn the chaos of course scheduling into a simple, user-friendly experience.",
      techImages: {
        "Streamlit": "https://static.wixstatic.com/media/e71193_0fe1bf20c6c5427b9b3285cf47748ff3~mv2.png",
        "Selenium": "https://static.wixstatic.com/media/e71193_ba1c25570afd48e3aedea2c15d47d3d7~mv2.png",
        "Python": "https://static.wixstatic.com/media/e71193_78b1554fe86a4b5ca3709394efbb071f~mv2.png"
      },
      featured: true
    },
    {
      id: 15,
      title: "Mood Planner",
      description: "A mental health management website designed to help students track their mental state and well-being.",
      longDescription: "The Mood Planner is like having a personal mental health management tool right in your browser. Crafted with HTML, JS, and CSS, it's designed to revolutionize how students tackle their mental state and mental health, especially with school. The website features tabs for students to express their moods throughout the week, write about their experiences and talk to friends, providing a comprehensive platform for mental wellness tracking.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Design"],
      category: "websites",
      mediaType: "video",
      mediaUrl: "https://video.wixstatic.com/video/e71193_72e3843a26754d598d1cc55b9f6dfa47/1080p/mp4/file.mp4",
      rationale: "Recognizing the importance of mental health in academic settings, I created the Mood Planner to provide students with an accessible tool for tracking and managing their emotional well-being throughout their educational journey.",
      featured: true
    },
    {
      id: 16,
      title: "I/O Game",
      description: "Interactive multiplayer web game with real-time gameplay and competitive elements.",
      longDescription: "An interactive multiplayer web-based game featuring real-time gameplay mechanics, competitive scoring systems, and engaging user interactions. Built with modern web technologies to provide smooth, responsive gaming experience.",
      technologies: ["JavaScript", "WebSockets", "HTML5 Canvas", "Real-time Communication"],
      category: "websites",
      mediaType: "image",
      featured: false
    },

    // Bot/Automation Projects
    {
      id: 17,
      title: "Class Collector",
      description: "Python automation script for monitoring class availability in real-time using Selenium web scraping.",
      longDescription: "Class Collector epitomizes the quest for streamlined class enrollment processes. Constructed in Python, this script harnesses Selenium to navigate college websites, monitoring class availability in real-time. By automating the login process and swiftly checking seat availability for user-selected classes, Class Collector aimed to offer timely notifications directly to users' phones. However, its effectiveness was hindered by the oversight of two-factor authentication.",
      technologies: ["Python", "Selenium", "Web Automation"],
      category: "bots",
      mediaType: "image",
      mediaUrl: "https://static.wixstatic.com/media/e71193_86912574c015466f8ed87d73e5a52e10~mv2.png",
      rationale: "The genesis of Class Collector arises from personal frustrations encountered during class registrations. Despite meticulous monitoring, securing desired class seats remained elusive, plagued by swift fill-ups.",
      techImages: {
        "Selenium": "https://static.wixstatic.com/media/e71193_ba1c25570afd48e3aedea2c15d47d3d7~mv2.png",
        "Python": "https://static.wixstatic.com/media/e71193_78b1554fe86a4b5ca3709394efbb071f~mv2.png"
      },
      featured: true
    },
    {
      id: 18,
      title: "Spotify Downloader",
      description: "Python project using SpotDL library to transfer Spotify playlists to Apple iTunes seamlessly.",
      longDescription: "The Spotify Downloader project uses the SpotDL library and Python's flexibility to make transferring Spotify playlists to Apple iTunes easier. By combining BeautifulSoup web scraping, playlist building, and automation, it seamlessly arranges the transfer of songs from Spotify to the user's Apple device.",
      technologies: ["Python", "SpotDL", "BeautifulSoup", "Web Scraping"],
      category: "bots",
      mediaType: "image",
      mediaUrl: "https://static.wixstatic.com/media/e71193_43b524e74d614f959432d6d83702fb78~mv2.png",
      rationale: "Being from an area where reliable internet access was not always a given, I was looking for a way to listen to my music collection without being online. I decided to curate my music collection using Spotify because of its user-friendly interface and extensive playlist organization.",
      techImages: {
        "SpotDL": "https://static.wixstatic.com/media/e71193_5bc1a7b8307f4572ac9cc4f2f4cb4a63~mv2.png",
        "Python": "https://static.wixstatic.com/media/e71193_78b1554fe86a4b5ca3709394efbb071f~mv2.png"
      },
      featured: true
    },
    {
      id: 19,
      title: "Discord Bot",
      description: "Dynamic Discord bot facilitating community engagement with user leveling, games, and server management.",
      longDescription: "The Discord Bot project embodies the spirit of community engagement and interaction. Crafted using JavaScript, this dynamic bot serves as the lifeblood of Discord servers, facilitating banishment, user leveling based on activity, and offering entertaining games for user enjoyment. With added functionalities for channel organization and management, it ensures seamless server operations.",
      technologies: ["JavaScript", "Discord.js", "Heroku"],
      category: "bots",
      mediaType: "image",
      mediaUrl: "https://static.wixstatic.com/media/e71193_917315835ebe449e9b8959c9e93103b3~mv2.png",
      techImages: {
        "JavaScript": "https://static.wixstatic.com/media/e71193_1471559b5a364fafba2be56231a762ec~mv2.png",
        "Heroku": "https://static.wixstatic.com/media/e71193_9f84de95d9044c8bba20a21ae0df62e0~mv2.png"
      },
      featured: true
    },
    {
      id: 20,
      title: "Sports Betting Organizer",
      description: "Automated system for organizing and tracking sports betting activities with statistical analysis.",
      longDescription: "A comprehensive automation tool designed to streamline sports betting organization, featuring automated data collection, statistical analysis, and result tracking. Helps users make informed decisions through data-driven insights.",
      technologies: ["Python", "Data Analysis", "APIs", "Automation"],
      category: "bots",
      mediaType: "image",
      featured: false
    },
    {
      id: 21,
      title: "Crypto Notifier",
      description: "Real-time cryptocurrency price monitoring and notification system with custom alerts.",
      longDescription: "An automated cryptocurrency monitoring system that tracks price movements, sends real-time notifications, and provides custom alert functionality. Features integration with multiple crypto exchanges and customizable notification preferences.",
      technologies: ["Python", "Crypto APIs", "Real-time Monitoring", "Notifications"],
      category: "bots",
      mediaType: "image",
      featured: false
    },
    {
      id: 22,
      title: "Math Homework Solver",
      description: "Automated system for solving and organizing mathematical problems with step-by-step solutions.",
      longDescription: "An intelligent automation tool that assists with mathematical problem-solving, featuring step-by-step solution generation, problem categorization, and educational support. Designed to enhance learning through systematic problem-solving approaches.",
      technologies: ["Python", "Mathematical Computing", "Problem Solving", "Education"],
      category: "bots",
      mediaType: "image",
      featured: false
    }
  ]

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const otherProjects = filteredProjects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my diverse portfolio spanning AI/ML, game development, research, web applications, 
            and automation. Each project showcases different technical skills and creative problem-solving.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className="text-xs"
          >
            All Projects
          </Button>
          {Object.entries(categories).map(([key, category]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? "default" : "outline"}
              onClick={() => setSelectedCategory(key)}
              className="text-xs"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mb-6">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer transform"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10">
                    {project.mediaType === "slideshow" && project.media ? (
                      <Slideshow media={project.media} className="h-full" />
                    ) : project.mediaType === "image" && project.mediaUrl ? (
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
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className={`text-xs ${categories[project.category]?.color || 'bg-gray-500'} text-white`}>
                        {categories[project.category]?.name || project.category}
                      </Badge>
                      <div className="flex gap-2">
                        {project.mediaType === "video" && project.mediaUrl && (
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.mediaUrl} target="_blank" rel="noopener noreferrer">
                              <Play className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed mb-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mb-6">Other Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer transform"
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className={`text-xs ${categories[project.category]?.color || 'bg-gray-500'} text-white`}>
                        {categories[project.category]?.name || project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-base mb-1">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Project Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className={`text-sm ${categories[selectedProject.category]?.color || 'bg-gray-500'} text-white`}>
                          {categories[selectedProject.category]?.name || selectedProject.category}
                        </Badge>
                        {selectedProject.demoUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Demo
                            </a>
                          </Button>
                        )}
                      </div>
                      <DialogTitle className="text-2xl mb-2">{selectedProject.title}</DialogTitle>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Media */}
                  {(selectedProject.media || selectedProject.mediaUrl) && (
                    <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden">
                      {selectedProject.mediaType === "slideshow" && selectedProject.media ? (
                        <Slideshow media={selectedProject.media} className="w-full h-full" />
                      ) : selectedProject.mediaType === "image" && selectedProject.mediaUrl ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img 
                          src={selectedProject.mediaUrl} 
                          alt={`${selectedProject.title} screenshot`}
                          className="w-full h-full object-contain"
                        />
                      ) : selectedProject.mediaType === "video" && selectedProject.mediaUrl ? (
                        <video 
                          controls 
                          className="w-full h-full object-contain"
                          preload="metadata"
                        >
                          <source src={selectedProject.mediaUrl} type="video/mp4" />
                        </video>
                      ) : null}
                    </div>
                  )}

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">About This Project</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Rationale */}
                  {selectedProject.rationale && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Motivation</h3>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-muted-foreground italic">
                          &ldquo;{selectedProject.rationale}&rdquo;
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <Badge key={tech} variant="outline" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tech Images */}
                  {selectedProject.techImages && Object.keys(selectedProject.techImages).length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
                      <div className="flex flex-wrap gap-4">
                        {Object.entries(selectedProject.techImages).map(([tech, imageUrl]) => (
                          <div key={tech} className="flex items-center gap-2 p-2 bg-muted/30 rounded-lg">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                              src={imageUrl} 
                              alt={`${tech} logo`}
                              className="w-6 h-6 object-contain"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                            <span className="text-sm font-medium">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}