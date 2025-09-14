import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Brain, Shield, GraduationCap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CodeSensai.study",
      subtitle: "Technical Interview Prep Tool",
      description: "Full-stack interview preparation platform with adaptive difficulty levels and real-time code execution",
      achievements: [
        "Developed a full-stack interview prep tool, featuring 3 adaptive difficulty levels",
        "Integrated Sphere Engine API to power an in-browser IDE with multi-language support",
        "Fine-tuned technical answers using OpenAI API, delivering automated feedback with 85% accuracy"
      ],
      technologies: ["TypeScript", "React", "Node.js", "Express.js", "OpenAI API", "Sphere Engine API"],
      icon: Code,
      date: "January 2025",
      featured: true
    },
    {
      title: "SmartWorkRooms",
      subtitle: "Role-Based AI Assistant for Enterprises",
      description: "Secure enterprise chatbot with document management and role-based access control",
      achievements: [
        "Built secure chatbot for enterprises to upload internal documents and enable queries via natural language",
        "Implemented role-based access control and used Firebase Authentication for session security",
        "Fine-tuned OpenAI API to extract and summarize content, delivering relevant answers with over 90% accuracy"
      ],
      technologies: ["React", "Node.js", "Firebase", "OpenAI API", "TypeScript"],
      icon: Shield,
      date: "July 2025",
      featured: true
    },
    {
      title: "EduTrack",
      subtitle: "AI-Enhanced Educational Management Platform",
      description: "Comprehensive educational system integrating Google Classroom with AI-powered analytics and role-based authentication",
      achievements: [
        "Developed comprehensive educational system integrating Google Classroom API with AI-powered analytics",
        "Implemented role-based authentication supporting multi-tier permissions for students, teachers, and administrators",
        "Built responsive dashboard with real-time course analytics achieving 95% data accuracy"
      ],
      technologies: ["TypeScript", "React", "Sphere Engine API", "OpenAI API", "Google Classroom API"],
      icon: GraduationCap,
      date: "October 2024",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                        <project.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-1">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-sm font-medium mb-3">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.title === "SmartWorkRooms" ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="hover:bg-primary/5 transition-all duration-300"
                        onClick={() => window.open("https://github.com/bilalhabbab/Smartworkrooms", "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    ) : project.title === "EduTrack" ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="hover:bg-primary/5 transition-all duration-300"
                        onClick={() => window.open("https://github.com/Yazan10x/EduTrack", "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    ) : (
                      <>
                        <Button 
                          size="sm" 
                          className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                          onClick={() => window.open("https://codesensai.study", "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="hover:bg-primary/5 transition-all duration-300"
                          onClick={() => window.open("https://github.com/bilalhabbab/codesensai", "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </Button>
                      </>
                    )}
                  </div>

                  <div className="mt-4 text-xs text-muted-foreground">
                    {project.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;