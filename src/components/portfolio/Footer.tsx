const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Sanchit Gupta. All rights reserved.</p>
      <div className="flex gap-6">
        {["About", "Skills", "Projects", "Experience", "Contact"].map((label) => (
          <button
            key={label}
            onClick={() =>
              document.querySelector(`#${label.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-primary transition-colors"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
