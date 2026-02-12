import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="contact" className="py-20 bg-muted/30">
    <div className="container max-w-2xl text-center space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-foreground">Let's Connect</h2>
        <div className="h-1 w-12 bg-primary rounded-full mx-auto" />
        <p className="text-muted-foreground text-lg">
          Open to opportunities in Agentic AI, GenAI engineering, and enterprise AI solutions.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg">
          <a href="mailto:sanchitbytes@gmail.com">
            <Mail className="mr-2 h-4 w-4" /> sanchitbytes@gmail.com
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="tel:+918909064040">
            <Phone className="mr-2 h-4 w-4" /> +91-8909-064040
          </a>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4 pt-4">
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
