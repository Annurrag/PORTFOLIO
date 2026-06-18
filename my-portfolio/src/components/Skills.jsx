import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "Axios", "Javascript(ES6+)", "HTML5", "CSS3", "Webpack", "Babel", "ESLint","Responsive Design", "UI/UX Principles", "Cross-Browser Compatibility", "Performance Optimization", "Accessibility (a11y)", "Testing (Jest, React Testing Library)", "Version Control (Git)", ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs","JSON API", "Authentication & Authorization", "Database Design", "Server-Side Rendering (SSR)", "API Integration", "Error Handling & Logging", "Deployment & Hosting"],
    },
    {
      title: "Database, Tools, Cloud & AI ",
      skills: ["MongoDB","MySQL", "SQL","Git", "Postman", "JIRA", "Figma", "VS Code", "Prettier", "CI/CD Pipelines", "Docker", "Cloud Services (AWS, Vercel)", "Agile Methodologies", "Scrum", "AI Tools (ChatGPT, MidJourney, DALL·E)", "Prompt Engineering" ],
    },
    
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="rounded-[2rem] border border-border bg-card p-6 shadow-2xl transition-all hover:-translate-y-1 dark:bg-slate-950 dark:border-border"
            >
              <CardHeader className="pb-4 border-b border-border">
                <CardTitle className="text-xl font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="rounded-full border-border bg-secondary/10 px-3 py-1 text-xs text-muted-foreground dark:border-border dark:bg-secondary/20 dark:text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
