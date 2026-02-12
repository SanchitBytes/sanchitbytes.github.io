import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "AI Engineer",
    company: "Hayai Pharma Pvt. Ltd.",
    period: "Nov 2023 – Present",
    points: [
      "Designed and deployed enterprise RAG chatbots processing 80,000+ knowledge articles",
      "Built multi-agent systems using LangGraph, AutoGen, and LangChain for complex task orchestration",
      "Developed 52-node n8n workflows for AI-powered lead processing and automation",
      "Implemented vector search with Pinecone, FAISS, and Chroma on AWS infrastructure",
    ],
  },
  {
    role: "Operations & Management",
    company: "Family Business",
    period: "2019 – 2023",
    points: [
      "Managed end-to-end business operations and strategic planning",
      "Led digital transformation initiatives and process optimization",
    ],
  },
  {
    role: "Software Engineer",
    company: "RubicoIT Pvt. Ltd.",
    period: "Jan 2018 – Dec 2018",
    points: [
      "Full-stack development with React, Node.js, and SQL databases",
      "Collaborated on client projects delivering scalable web applications",
    ],
  },
];

const education = [
  { degree: "MCA", school: "Graphic Era University", year: "2018" },
  { degree: "BCA", school: "Graphic Era University", year: "2016" },
];

const Experience = () => (
  <section id="experience" className="py-20">
    <div className="container max-w-3xl space-y-12">
      {/* Experience */}
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-foreground">Experience</h2>
        <div className="h-1 w-12 bg-primary rounded-full" />
      </div>

      <div className="relative border-l-2 border-border pl-8 space-y-10">
        {experiences.map((exp) => (
          <div key={exp.role + exp.company} className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <Briefcase className="h-3 w-3 text-primary-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
              <p className="text-sm text-primary font-medium">{exp.company} · {exp.period}</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="space-y-3 pt-4">
        <h2 className="text-3xl font-bold text-foreground">Education</h2>
        <div className="h-1 w-12 bg-primary rounded-full" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((edu) => (
          <div key={edu.degree} className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card">
            <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">{edu.school} · {edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
