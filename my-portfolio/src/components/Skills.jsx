import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux","Axios", "Javascript"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools & Other",
      skills: ["Git", "Postman", "JIRA", "Figma", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 gradient-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-smooth"
              >
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
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
      </div>
    </section>
  );
};

export default Skills;
