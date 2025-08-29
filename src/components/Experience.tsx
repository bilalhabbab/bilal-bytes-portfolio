import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "WSAudiology",
      position: "Software & Automation Engineer",
      location: "Burlington, ON",
      period: "June 2025 – Present",
      achievements: [
        "Developed an AI-powered chatbot adopted by 50+ HQ staff, reducing troubleshooting time by 75%",
        "Automated workflows, eliminating 100+ monthly email inquiries and improving retrieval speed by 80%",
        "Tested chatbot updates and gathered feedback from 30+ staff, improving response accuracy by 20%"
      ],
      current: true
    },
    {
      company: "Rogers/Fido (HGS Canada)",
      position: "Technical Support Specialist (Bilingual)",
      location: "Remote",
      period: "January 2025 – Present",
      achievements: [
        "Delivered technical support for software/hardware malfunctions for devices, averaging 50+ calls per day",
        "Troubleshooted iOS and Android devices using strong expertise, achieving 95% satisfaction rate"
      ],
      current: true
    },
    {
      company: "Bassem Labs",
      position: "Software Engineer Intern",
      location: "Oakville, ON",
      period: "September 2024 – December 2024",
      achievements: [
        "Led development of an LMS platform for 700+ users across 3 schools",
        "Automated attendance and grading features cutting workload by 30%",
        "Engineered user-friendly interface using TypeScript, React.js, Tailwind, achieving 90%+ adoption rate"
      ],
      current: false
    },
    {
      company: "AB Academy",
      position: "Computer Science Instructor",
      location: "Oakville, ON",
      period: "June 2024 – August 2024",
      achievements: [
        "Led Python workshops for 50+ students, enhancing student engagement by 25% from previous term",
        "Introduced VSCode and Cursor workflows using project-based learning, boosting assignment completion rates by 20%"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              Building impactful solutions across diverse industries and technologies
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group relative overflow-hidden">
                {exp.current && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-primary text-primary-foreground border-0">
                      Current
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground flex-shrink-0">
                          <Building className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-lg font-semibold text-muted-foreground">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2 text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement}
                        </p>
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

export default Experience;