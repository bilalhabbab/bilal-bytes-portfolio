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

        </div>
      </div>
    </section>
  );
};

export default Skills;