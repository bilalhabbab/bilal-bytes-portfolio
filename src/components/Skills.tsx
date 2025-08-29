import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "C/C++", "JavaScript", "TypeScript", "HTML", "CSS", "GraphQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: ["React.js", "Node.js", "Express.js", "Flask", "Tailwind CSS"]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Firebase", "Git", "VSCode", "Power BI", "Stripe", "Vite", "Cursor"]
    },
    {
      title: "APIs & Services",
      icon: Database,
      skills: ["OpenAI API", "Cohere API", "Sphere Engine API", "Firebase Authentication", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground">
              Proficient in modern technologies and frameworks for full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Highlight */}
          <div className="mt-16 text-center">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 group-hover:text-primary transition-colors">
                  Specialized Expertise
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">AI/ML</div>
                    <p className="text-muted-foreground">
                      OpenAI API Integration, Chatbot Development, Fine-tuning
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Full-Stack</div>
                    <p className="text-muted-foreground">
                      React, Node.js, TypeScript, Database Design
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">DevOps</div>
                    <p className="text-muted-foreground">
                      Automation, CI/CD, Cloud Platforms, API Development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;