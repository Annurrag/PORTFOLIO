import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import resumeFile from "../assets/ANURAG YADAV_N.pdf";

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
    <section id="contact" className="py-20 section-surface-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <Card className="rounded-[2rem] border border-border bg-card shadow-2xl overflow-hidden dark:bg-slate-950 dark:border-border">
            <CardContent className="p-8 md:p-12 space-y-8 text-foreground">
              <p className="text-center text-lg text-muted-foreground dark:text-muted-foreground">
                I’m open to new projects and collaborations that push the web forward. Reach out for frontend development, UI improvements, or product-focused experiences.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-5 rounded-3xl border border-border bg-card/90 text-foreground shadow-sm transition-all hover:-translate-y-1 hover:bg-card dark:bg-slate-950/90 dark:border-border dark:text-foreground">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="mt-2 font-semibold">{info.value}</p>
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
                <div className="flex flex-wrap justify-center gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        className="border-border text-foreground hover:border-primary hover:bg-primary/15 hover:text-foreground dark:text-foreground dark:hover:bg-primary/10 transition-all"
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

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary btn-smooth"
                    asChild
                  >
                    <a href="mailto:yadavanurag9580@gmail.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border text-foreground hover:border-primary hover:bg-primary/15 hover:text-foreground dark:text-foreground dark:hover:bg-primary/10 transition-all"
                    asChild
                  >
                    <a href={resumeFile} download>
                      <Download className="h-5 w-5 mr-2" />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
