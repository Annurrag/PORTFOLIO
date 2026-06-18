import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Anurag Yadav</p>
            <p className="text-sm text-muted-foreground">Front End Developer</p>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            
            <p>© Anurag Yadav {new Date().getFullYear()} </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
