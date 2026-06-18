import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MERN Chat App",
      description:
        "This is a full-stack real-time chat application built using the MERN stack with Socket.IO for instant messaging.",
      image: project1,
      tags: ["React","TailwindCSS","Axios", "Node.js","express.js", "MongoDB", "Socket.io"],
      github: "https://github.com/Annurrag/MERN-CHAT-APP",
      demo: "https://mern-chat-app-he6z.onrender.com",
    },
    {
      title: "Car Rental Platform",
      description:
        "A modern and responsive car rental platform built using React. It features streamlined navigation, dynamic car listings, and robust form handling for bookings and user interactions.",
      image: project2,
      tags: ["React", "React Router", "Formik", "Auth0"],
      github: "https://github.com/Annurrag/Car-rental-website/",
      demo: "https://car-rental-website-sigma.vercel.app/",
    },
    {
      title: "Memory Card Game with AI Integration",
      description:
      "Developed an AI-powered memory card game using React.js, Next.js, and Tailwind CSS, integrating Gemini AI for personalized gameplay insights while delivering dynamic rendering, smooth animations, responsive design, and accessible user experiences",
      image: project4,
      tags: [ "React.js", "Next.js", "Gemini AI", "Tailwind CSS" ],
      github: "https://github.com/Annurrag/Memory-Card-Game",
      demo: "https://memory-card-game-5s6q.onrender.com/",
    },

    {
      title: "E-Commerce App",
      description:
        "A responsive e-commerce application built using HTML, CSS, and JavaScript, featuring dynamic product listings, an interactive cart system, and smooth UI interactions.",
      image: project3,
      tags: ["Javascript","HTML", "CSS"],
      github: "https://github.com/Annurrag/E-commerce-website",
      demo: "https://annurrag.github.io/E-commerce-website/home.html",
    }
    
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const totalPages = Math.ceil(projects.length / pageSize);
  const currentProjects = projects.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <section id="projects" className="py-20 section-surface-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {currentProjects.map((project, index) => (
              <Card
                key={index}
                className="rounded-[2rem] border border-border bg-card overflow-hidden shadow-2xl transition-all hover:-translate-y-1 hover:shadow-2xl/40 group dark:bg-slate-950 dark:border-border"
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-secondary/10 dark:bg-secondary/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity dark:from-white/10" />
                  <div className="absolute left-4 bottom-4 rounded-full bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-primary">
                    Featured
                  </div>
                </div>
                <CardContent className="space-y-4 p-6">
                  <div>
                    <CardTitle className="text-2xl font-semibold text-foreground">{project.title}</CardTitle>
                    <CardDescription className="mt-2 text-sm text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-border text-foreground hover:border-primary hover:bg-primary/15 hover:text-foreground dark:border-border dark:text-foreground dark:hover:bg-primary/10 transition-all"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:border-primary hover:bg-primary/15 hover:text-foreground dark:text-foreground dark:hover:bg-primary/10 transition-all"
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="sm"
                className={currentPage === i + 1 ? "bg-primary text-primary-foreground" : "border-border text-foreground hover:border-primary hover:bg-primary/15 hover:text-foreground dark:text-foreground dark:hover:bg-primary/10"}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:border-primary hover:bg-primary/15 hover:text-foreground dark:text-foreground dark:hover:bg-primary/10 transition-all"
              onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
