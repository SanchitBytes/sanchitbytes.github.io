import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Knowledge Management GenAI Chatbot",
    subtitle: "Insurance Domain",
    description:
      "Enterprise-grade RAG chatbot processing 80,000+ knowledge articles for a leading insurance company. Features multi-agent orchestration, semantic search, and automated task resolution.",
    tech: ["LangChain", "LangGraph", "AutoGen", "Pinecone", "AWS Lambda", "React"],
    metrics: [
      { label: "Faster Resolution", value: "70%" },
      { label: "Task Automation", value: "85%" },
      { label: "Call Center Efficiency", value: "+50%" },
    ],
  },
  {
    title: "MiIglooo Real Estate Lead Enhancement",
    subtitle: "Real Estate AI System",
    description:
      "AI-powered lead processing system with a 52-node n8n workflow automating behavioral analysis, intelligent agent routing, and full audit logging for real estate operations.",
    tech: ["n8n", "Salesforce", "Twilio", "OpenAI", "Tavily Search"],
    metrics: [
      { label: "Workflow Nodes", value: "52" },
      { label: "Lead Processing", value: "Automated" },
      { label: "Audit Logging", value: "Full" },
    ],
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-muted/30">
    <div className="container space-y-10">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
        <div className="h-1 w-12 bg-primary rounded-full mx-auto" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="bg-card border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardDescription className="text-primary font-semibold text-xs uppercase tracking-wider">
                {project.subtitle}
              </CardDescription>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center justify-center gap-1 text-primary font-bold text-lg">
                      <TrendingUp className="h-4 w-4" />
                      {m.value}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
