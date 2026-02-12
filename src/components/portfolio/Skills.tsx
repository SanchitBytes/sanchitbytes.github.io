import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, Database, Cloud, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Agentic AI Stack",
    icon: Bot,
    skills: ["LangGraph", "AutoGen", "LangChain Agents", "Google ADK", "n8n", "Zapier", "Make.com"],
  },
  {
    title: "GenAI & LLM Stack",
    icon: Brain,
    skills: ["GPT-4", "Gemini", "Claude", "Groq", "OLLaMA", "LangChain", "LlamaIndex", "Haystack"],
  },
  {
    title: "Vector & Search",
    icon: Database,
    skills: ["Pinecone", "FAISS", "Chroma", "OpenSearch", "Elasticsearch", "pgvector"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS Bedrock", "Lambda", "S3", "EC2", "RDS", "Azure OpenAI", "Azure ML Studio"],
  },
  {
    title: "Core Competencies",
    icon: Lightbulb,
    skills: ["RAG", "Prompt Engineering", "Multi-Agent Systems", "Semantic Search", "Knowledge Graphs"],
  },
];

const Skills = () => (
  <section id="skills" className="py-20">
    <div className="container space-y-10">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-foreground">Skills & Technologies</h2>
        <div className="h-1 w-12 bg-primary rounded-full mx-auto" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => (
          <Card key={cat.title} className="bg-card border-border/50 hover:border-primary/30 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-lg">
                <cat.icon className="h-5 w-5 text-primary" />
                {cat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs font-medium">
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

export default Skills;
