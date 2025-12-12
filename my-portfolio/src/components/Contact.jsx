import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yadavanurag9580@gmail.com",
      href: "mailto:yadavanurag9580@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Annurrag",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anurag-yadav-163300150/",
    },
  ];
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-accent mx-auto mb-12" />

          <Card className="bg-card border-border">
            <CardContent className="p-8 md:p-12 space-y-8">
              <p className="text-center text-lg text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Let's connect!
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              <div className="flex flex-col items-center gap-6 pt-6">
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        className="border-border hover:bg-secondary hover:text-primary transition-smooth"
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon className="h-5 w-5 mr-2" />
                          {social.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-smooth"
                  asChild
                >
                  <a href="mailto:yadavanurag9580@gmail.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
