import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Maintainable architecture with readable, reusable components.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Accessible user experiences with polished visual detail.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Fast, optimized apps for smooth browsing across devices.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] items-start">
            <div className="rounded-[2rem] border border-border bg-card p-8 shadow-2xl transition-colors duration-300 dark:bg-slate-950 dark:border-border dark:text-foreground">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Results-driven React developer with experience delivering responsive and user-friendly web solutions. I build component-rich interfaces using modern frontend stacks, maintain clean state architecture, and integrate APIs with a focus on performance, accessibility, and polished interaction.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-3xl border border-border bg-card p-5 text-foreground shadow-sm transition-colors duration-300 dark:bg-slate-950 dark:border-border dark:text-foreground">
                  <p className="text-2xl font-semibold">React</p>
                  <p className="mt-2 text-muted-foreground">Component-driven development with hooks and state management.</p>
                </div>
                <div className="rounded-3xl border border-border bg-card p-5 text-foreground shadow-sm transition-colors duration-300 dark:bg-slate-950 dark:border-border dark:text-foreground">
                  <p className="text-2xl font-semibold">Responsive</p>
                  <p className="mt-2 text-muted-foreground">Mobile-first design and high-quality desktop layouts.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card
                    key={index}
                    className="rounded-[1.75rem] border border-border bg-card p-6 transition-all hover:-translate-y-1 shadow-xl dark:bg-slate-950 dark:border-border"
                  >
                    <CardContent className="space-y-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{highlight.title}</h3>
                        <p className="mt-2 text-muted-foreground">{highlight.description}</p>
                      </div>
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
