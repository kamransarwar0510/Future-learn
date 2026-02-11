import { BookOpen, Briefcase, Code, Heart, Languages, Microscope, Palette, GraduationCap } from "lucide-react";

const categories = [
  { icon: Briefcase, label: "Business & Management", count: "320+" },
  { icon: Heart, label: "Healthcare & Medicine", count: "180+" },
  { icon: GraduationCap, label: "Teaching & Education", count: "150+" },
  { icon: Code, label: "Tech & IT", count: "280+" },
  { icon: BookOpen, label: "Psychology & Mental Health", count: "90+" },
  { icon: Languages, label: "Languages", count: "120+" },
  { icon: Microscope, label: "Science & Engineering", count: "200+" },
  { icon: Palette, label: "Creative Arts", count: "110+" },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Course Categories
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto font-body">
          Choose from hundreds of free online courses from top universities and specialist organisations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(({ icon: Icon, label, count }) => (
            <a
              key={label}
              href="#"
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <Icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-body font-semibold text-sm text-foreground mb-1">{label}</h3>
              <p className="text-xs text-muted-foreground font-body">{count} courses</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
