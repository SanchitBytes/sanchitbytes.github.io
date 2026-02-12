import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/sanchit-profile.jpg";

const Hero = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              AI Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Sanchit Gupta
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
              Building Intelligent Agent Systems &amp; Enterprise AI Solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <Button size="lg" onClick={() => scrollTo("#projects")}>
                <ArrowDown className="mr-2 h-4 w-4" /> View Projects
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")}>
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
              <img
                src={profilePhoto}
                alt="Sanchit Gupta — AI Engineer"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
