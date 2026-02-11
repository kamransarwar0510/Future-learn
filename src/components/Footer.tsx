const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="text-2xl font-bold font-heading tracking-tight">
              Future<span className="text-primary">Learn</span>
            </span>
            <p className="mt-4 text-sm text-accent-foreground/70 font-body leading-relaxed">
              We offer a diverse selection of courses from leading universities and cultural institutions from around the world.
            </p>
          </div>
          {[
            { title: "Categories", links: ["Business", "Healthcare", "Teaching", "Technology"] },
            { title: "About", links: ["Our Story", "Partners", "Careers", "Press"] },
            { title: "Support", links: ["Help Center", "Contact Us", "FAQs", "Privacy Policy"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors font-body">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-accent-foreground/10 pt-8 text-center text-sm text-accent-foreground/50 font-body">
          © 2026 FutureLearn. Developed by Techzium Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
