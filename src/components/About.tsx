import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate software engineer with a strong foundation in computer science and hands-on experience 
              building innovative solutions that make a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      Toronto Metropolitan University
                    </h3>
                    <p className="text-muted-foreground flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4" />
                      Toronto, ON
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="font-semibold">Bachelor of Science (Honours) - Computer Science (Co-op)</p>
                  <p className="text-muted-foreground">Expected: April 2027</p>
                  <p className="text-muted-foreground">cGPA: 3.5</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-medium mb-2">Key Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Object-Oriented Programming",
                      "Web Development",
                      "Database Systems",
                      "Operating Systems"
                    ].map((course) => (
                      <span 
                        key={course}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements Card */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 group-hover:text-primary transition-colors">
                  Key Achievements
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">AI Chatbot Impact</p>
                      <p className="text-sm text-muted-foreground">
                        Developed chatbot adopted by 50+ staff, reducing troubleshooting time by 75%
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">LMS Platform Leadership</p>
                      <p className="text-sm text-muted-foreground">
                        Led development for 700+ users across 3 schools with 90%+ adoption
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Community Impact</p>
                      <p className="text-sm text-muted-foreground">
                        Increased workshop attendance by 167% through effective leadership
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Technical Excellence</p>
                      <p className="text-sm text-muted-foreground">
                        95% customer satisfaction in technical support role
                      </p>
                    </div>
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

export default About;