import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Globe, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const degrees = [
  { title: "BSc Computer Science", uni: "University of London", duration: "3-6 years", type: "Bachelor's" },
  { title: "MBA Global", uni: "Macquarie University", duration: "2 years", type: "Master's" },
  { title: "MSc Data Science", uni: "University of Leeds", duration: "2 years", type: "Master's" },
  { title: "PGDip Business Analytics", uni: "Coventry University", duration: "1 year", type: "Postgraduate" },
];

const Degrees = () => (
  <div className="min-h-screen bg-background">
    <div className="bg-accent">
      <Navbar />
      <div className="container mx-auto px-4 pt-28 pb-16 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-accent-foreground mb-4">Online Degrees</h1>
        <p className="text-accent-foreground/70 font-body max-w-xl mx-auto">Earn an accredited degree from a top university, 100% online.</p>
      </div>
    </div>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {degrees.map((d) => (
            <div key={d.title} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <span className="text-xs font-semibold font-body text-primary bg-primary/10 px-3 py-1 rounded-full">{d.type}</span>
              <h3 className="font-heading font-bold text-foreground text-xl mt-4 mb-2">{d.title}</h3>
              <p className="text-muted-foreground text-sm font-body mb-4">{d.uni}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                <span className="flex items-center gap-1"><GraduationCap size={14} /> {d.duration}</span>
                <span className="flex items-center gap-1"><Globe size={14} /> Online</span>
                <span className="flex items-center gap-1"><Award size={14} /> Accredited</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-body font-medium hover:underline">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Degrees;
