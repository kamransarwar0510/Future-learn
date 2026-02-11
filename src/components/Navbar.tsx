import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Subjects", to: "/subjects" },
  { label: "Courses", to: "/courses" },
  { label: "Degrees", to: "/degrees" },
  { label: "For Business", to: "/for-business" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 font-body">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <Link to="/" className="text-2xl font-bold font-heading text-primary-foreground tracking-tight">
          Future<span className="text-primary">Learn</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-foreground/90">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="hover:text-primary transition-colors">{link.label}</Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-primary-foreground/90 hover:text-primary transition-colors">Log in</a>
          <a href="#" className="rounded-full border border-primary-foreground/30 px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary hover:border-primary transition-all">
            Register
          </a>
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-accent/95 backdrop-blur-md px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="block text-accent-foreground font-medium text-sm" onClick={() => setMobileOpen(false)}>{link.label}</Link>
          ))}
          <a href="#" className="block text-accent-foreground font-medium text-sm">Log in</a>
          <a href="#" className="block rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground text-center">Register</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
