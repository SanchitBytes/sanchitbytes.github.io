const About = () => (
  <section id="about" className="py-20 bg-muted/30">
    <div className="container max-w-3xl space-y-6">
      <h2 className="text-3xl font-bold text-foreground">About Me</h2>
      <div className="h-1 w-12 bg-primary rounded-full" />
      <p className="text-muted-foreground leading-relaxed text-lg">
        AI Engineer with hands-on expertise in designing, developing, and deploying intelligent
        agent-based systems and GenAI solutions for enterprise use. Proficient in building
        production-grade applications leveraging <strong className="text-foreground">LangChain</strong>,{" "}
        <strong className="text-foreground">LangGraph</strong>,{" "}
        <strong className="text-foreground">AutoGen</strong>, and{" "}
        <strong className="text-foreground">n8n</strong> for multi-agent orchestration, RAG
        pipelines, and workflow automation.
      </p>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Experienced with cloud-native deployments on AWS (Bedrock, Lambda, S3) and Azure
        (OpenAI, ML Studio), vector databases (Pinecone, FAISS, Chroma), and full-stack
        development with React, Python, and Node.js. MCA graduate from Graphic Era University
        with a passion for building AI systems that solve real-world problems at scale.
      </p>
    </div>
  </section>
);

export default About;
