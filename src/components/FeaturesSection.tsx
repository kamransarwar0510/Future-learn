import { BookOpen, Award, Globe, Briefcase, RefreshCw, Users } from "lucide-react";

const features = [
  { icon: BookOpen, title: "1400+ Courses", desc: "Wide range of subjects across disciplines" },
  { icon: Award, title: "Certifications", desc: "CV-ready certificates from top institutions" },
  { icon: Globe, title: "Global Reach", desc: "Millions of learners across 190+ countries" },
  { icon: Briefcase, title: "Career Growth", desc: "Professional skills for the modern workplace" },
  { icon: RefreshCw, title: "Flexible Learning", desc: "Learn anytime, anywhere at your pace" },
  { icon: Users, title: "Social Learning", desc: "Connect and collaborate globally" },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm font-body">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
