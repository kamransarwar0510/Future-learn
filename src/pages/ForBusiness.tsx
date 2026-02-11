import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Users, TrendingUp, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Building2, title: "Enterprise Solutions", desc: "Tailored learning paths for teams of any size." },
  { icon: Users, title: "Team Management", desc: "Track progress and manage your team's learning journey." },
  { icon: TrendingUp, title: "Skills Analytics", desc: "Measure ROI with detailed skills gap analysis." },
  { icon: ShieldCheck, title: "Compliance Training", desc: "Ensure your team meets industry regulations." },
];

const ForBusiness = () => (
  <div className="min-h-screen bg-background">
    <div className="bg-accent">
      <Navbar />
      <div className="container mx-auto px-4 pt-28 pb-16 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-accent-foreground mb-4">FutureLearn for Business</h1>
        <p className="text-accent-foreground/70 font-body max-w-xl mx-auto mb-8">Upskill your workforce with world-class online learning.</p>
        <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-body font-medium hover:bg-primary/90 transition-colors">
          Request a Demo
        </button>
      </div>
    </div>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm font-body">{desc}</p>
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

export default ForBusiness;
