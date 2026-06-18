import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] pt-24 overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_18%),radial-gradient(circle_at_top_right,rgba(251,146,60,0.08),transparent_24%)] opacity-90 dark:opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,250,252,0.98))] dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.2),rgba(15,23,42,0.92))]" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-orange-200/80 bg-orange-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-orange-700 shadow-sm dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-300">
              React.js Frontend Developer
            </span>

            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Hi, I&apos;m <span className="text-primary">Anurag Yadav.</span>
            </h1>
            <p className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              I build scalable web platforms with polished frontend experiences.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              I design and build responsive, accessible applications with clean UI, fast performance, and careful attention to real-world product polish.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-glow btn-smooth"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border border-border bg-background text-foreground shadow-sm hover:border-primary hover:bg-primary/10 hover:text-foreground dark:bg-card dark:text-foreground dark:hover:bg-secondary/20 btn-smooth"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-muted-foreground">
              <a
                href="https://github.com/Annurrag/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card text-foreground transition hover:border-primary hover:text-primary dark:border-border dark:bg-card dark:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/anurag-yadav-163300150/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card text-foreground transition hover:border-primary hover:text-primary dark:border-border dark:bg-card dark:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:yadavanurag9580@gmail.com"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card text-foreground transition hover:border-primary hover:text-primary dark:border-border dark:bg-card dark:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-border bg-card p-6 text-card-foreground shadow-2xl shadow-slate-200/50 backdrop-blur-xl dark:shadow-none dark:bg-slate-950 dark:border-slate-700 dark:text-slate-100">
                <p className="text-3xl font-semibold">On Time</p>
                <p className="mt-3 text-sm text-muted-foreground">Projects shipped</p>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-card p-6 text-card-foreground shadow-2xl shadow-slate-200/50 backdrop-blur-xl dark:shadow-none dark:bg-slate-950 dark:border-slate-700 dark:text-slate-100">
                <p className="text-3xl font-semibold">React</p>
                <p className="mt-3 text-sm text-muted-foreground">Modern frontend focus</p>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-card p-6 text-card-foreground shadow-2xl shadow-slate-200/50 backdrop-blur-xl dark:shadow-none dark:bg-slate-950 dark:border-slate-700 dark:text-slate-100">
                <p className="text-3xl font-semibold">Fast</p>
                <p className="mt-3 text-sm text-muted-foreground">Clean, accessible UI</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="max-w-sm rounded-[2rem] border border-border bg-card p-8 shadow-2xl backdrop-blur-xl transition-colors duration-300">
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">Featured experience</p>
              <h2 className="mt-6 text-3xl font-semibold text-foreground">Design systems, performance, accessible interfaces</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                I help teams move from concept to launch with polished design tokens, reusable components, and high-quality React code.
              </p>
              <div className="mt-8 space-y-3">
                <div className="rounded-2xl bg-secondary/20 px-4 py-3 text-sm text-foreground">React + Tailwind CSS</div>
                <div className="rounded-2xl bg-secondary/20 px-4 py-3 text-sm text-foreground">Performance & accessibility</div>
                <div className="rounded-2xl bg-secondary/20 px-4 py-3 text-sm text-foreground">Smooth interactions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
