import { Search } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const tabs = ["Courses", "Degrees", "Short Courses", "Free Courses"];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Students learning"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Your learning journey<br />starts here
        </h1>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto font-body animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Join millions of learners and access 1,400+ courses from 200+ world-class universities
        </p>

        <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-card rounded-t-xl px-6 pt-4 flex gap-6">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`pb-3 text-sm font-medium font-body border-b-2 transition-colors ${
                  i === activeTab
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-card rounded-b-xl p-4 flex items-center gap-3">
            <Search className="text-muted-foreground ml-2" size={20} />
            <input
              type="text"
              placeholder="Search online courses..."
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground font-body text-sm"
            />
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 py-3 text-sm font-medium font-body transition-colors">
              Search
            </button>
          </div>
        </div>

        <div className="mt-8 bg-accent/90 backdrop-blur-sm rounded-xl max-w-2xl mx-auto p-5 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <div className="text-left">
            <p className="text-accent-foreground font-semibold font-body">Start learning for free today</p>
            <p className="text-accent-foreground/70 text-sm font-body">Get a free online estimate of your learning path</p>
          </div>
          <button className="rounded-full border border-accent-foreground/30 text-accent-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary px-6 py-2.5 text-sm font-medium font-body transition-all whitespace-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
