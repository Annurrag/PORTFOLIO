import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive user interfaces.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and user experience.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-accent mx-auto mb-12" />

          <div className="space-y-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-smooth">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results-driven React Developer with hands-on experience building responsive, high-performance web applications using JavaScript (ES6+), React, HTML5, CSS3, and Tailwind CSS. Skilled in component-based architecture, state management, RESTful API integration, and UI optimization. Adept at writing clean, maintainable code and delivering user-focused solutions aligned with modern frontend development standards.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border hover:border-primary/50 hover:scale-105 transition-smooth group"
                  >
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
