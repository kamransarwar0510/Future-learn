import { Link } from "react-router-dom";
import { BookOpen, Briefcase, Code, Heart, Languages, Microscope, Palette, GraduationCap, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { icon: Briefcase, label: "Business & Management", count: "320+", desc: "From marketing to finance, develop essential business skills." },
  { icon: Heart, label: "Healthcare & Medicine", count: "180+", desc: "Explore nursing, public health, and clinical research." },
  { icon: GraduationCap, label: "Teaching & Education", count: "150+", desc: "Master pedagogy, curriculum design, and classroom tech." },
  { icon: Code, label: "Tech & IT", count: "280+", desc: "Learn programming, cybersecurity, and cloud computing." },
  { icon: BookOpen, label: "Psychology & Mental Health", count: "90+", desc: "Understand the mind, therapy techniques, and well-being." },
  { icon: Languages, label: "Languages", count: "120+", desc: "Study English, Spanish, Mandarin, and more." },
  { icon: Microscope, label: "Science & Engineering", count: "200+", desc: "Dive into physics, chemistry, and engineering disciplines." },
  { icon: Palette, label: "Creative Arts", count: "110+", desc: "Explore design, photography, writing, and music." },
];

const Subjects = () => (
  <div className="min-h-screen bg-background">
    <div className="bg-accent">
      <Navbar />
      <div className="container mx-auto px-4 pt-28 pb-16 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-accent-foreground mb-4">Browse Subjects</h1>
        <p className="text-accent-foreground/70 font-body max-w-xl mx-auto">Explore our wide range of subject areas and find the perfect course for you.</p>
      </div>
    </div>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ icon: Icon, label, count, desc }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <Icon className="text-primary mb-4" size={32} />
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{label}</h3>
              <p className="text-muted-foreground text-sm font-body mb-3">{desc}</p>
              <span className="text-xs text-primary font-semibold font-body">{count} courses</span>
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

export default Subjects;
