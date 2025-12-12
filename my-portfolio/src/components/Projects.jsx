import React from "react";
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
      title: "E-Commerce App",
      description:
        "A responsive e-commerce application built using HTML, CSS, and JavaScript, featuring dynamic product listings, an interactive cart system, and smooth UI interactions.",
      image: project3,
      tags: ["Javascript","HTML", "CSS"],
      github: "https://github.com/Annurrag/E-commerce-website",
      demo: "https://annurrag.github.io/E-commerce-website/home.html",
    },
  ];
  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-accent mx-auto mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-smooth overflow-hidden group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-border hover:bg-secondary transition-smooth"
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
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
