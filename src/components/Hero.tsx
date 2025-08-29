import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Professional Photo */}
          <Avatar className="w-32 h-32 mx-auto mb-8 shadow-glow rounded-xl">
            <AvatarImage src="/lovable-uploads/b761de1f-2f08-45a9-8634-1c367ad318bc.png" alt="Bilal Habbab - Professional headshot" className="object-cover rounded-xl" />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground text-4xl font-bold rounded-xl">BH</AvatarFallback>
          </Avatar>
          
          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Bilal Habbab
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Software Engineer & Computer Science Student
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building innovative solutions with AI, full-stack development, and automation. 
            Currently pursuing Computer Science at Toronto Metropolitan University.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-primary/5 transition-all duration-300">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/bilalhb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://github.com/bilalhabbab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:bilalhabbab@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow group"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;