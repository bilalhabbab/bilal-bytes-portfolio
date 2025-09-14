import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, ExternalLink, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bilalhabbab@gmail.com",
      link: "mailto:bilalhabbab@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1-514-813-7306",
      link: "tel:+1-514-813-7306"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/bilalhb",
      link: "https://linkedin.com/in/bilalhb"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/bilalhabbab",
      link: "https://github.com/bilalhabbab"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    Contact Information
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 group/item"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300">
                        <contact.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        <p className="text-muted-foreground text-sm group-hover/item:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    Get in touch?
                  </h3>
                  <p className="text-muted-foreground mb-8">

                    
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      onClick={() => window.location.href = 'mailto:bilalhabbab@gmail.com'}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full hover:bg-primary/5 transition-all duration-300"
                      onClick={() => window.open('https://linkedin.com/in/bilalhb', '_blank')}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Section */}
          <div className="mt-16 text-center">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  Portfolio & Resume
                </h3>
                <p className="text-muted-foreground mb-6">
                  Want to learn more about my background and projects?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    className="hover:bg-primary/5 transition-all duration-300"
                    onClick={() => window.open('https://docs.google.com/document/d/1IYYtBWSws59omIU4rsLaTki_cDlC0BE839gpfmJeBrE/edit?usp=drivesdk', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;