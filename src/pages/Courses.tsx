import { Link } from "react-router-dom";
import { Clock, Users, ArrowLeft, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import courseAi from "@/assets/course-ai.jpg";
import courseCovid from "@/assets/course-covid.jpg";
import courseHr from "@/assets/course-hr.jpg";
import coursePayment from "@/assets/course-payment.jpg";
import courseFood from "@/assets/course-food.jpg";
import courseCreative from "@/assets/course-creative.jpg";

const allCourses = [
  { title: "Digital Skills: Artificial Intelligence", uni: "University of Leeds", weeks: 2, learners: "45K", tag: "Featured", image: courseAi },
  { title: "COVID-19: Tackling the Novel Coronavirus", uni: "London School of Hygiene", weeks: 3, learners: "1.2M", tag: "Popular", image: courseCovid },
  { title: "HR Fundamentals", uni: "Chartered Institute", weeks: 5, learners: "28K", tag: "New", image: courseHr },
  { title: "The Future of Payment Technology", uni: "University of Michigan", weeks: 4, learners: "18K", tag: "Featured", image: coursePayment },
  { title: "Food as Medicine", uni: "Monash University", weeks: 3, learners: "320K", tag: "Popular", image: courseFood },
  { title: "Creative Problem Solving", uni: "University of Leeds", weeks: 2, learners: "52K", tag: "New", image: courseCreative },
];

const tagColors: Record<string, string> = {
  Featured: "bg-primary text-primary-foreground",
  Popular: "bg-accent text-accent-foreground",
  New: "bg-secondary text-secondary-foreground",
};

const Courses = () => (
  <div className="min-h-screen bg-background">
    <div className="bg-accent">
      <Navbar />
      <div className="container mx-auto px-4 pt-28 pb-16 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-accent-foreground mb-4">All Courses</h1>
        <p className="text-accent-foreground/70 font-body max-w-xl mx-auto mb-8">Discover 1,400+ courses from world-class universities.</p>
        <div className="max-w-lg mx-auto bg-card rounded-xl p-3 flex items-center gap-2">
          <Search className="text-muted-foreground ml-2" size={20} />
          <input type="text" placeholder="Search courses..." className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground font-body text-sm" />
        </div>
      </div>
    </div>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((course) => (
            <div key={course.title} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group">
              <div className="h-40 relative overflow-hidden">
                <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full font-body ${tagColors[course.tag]}`}>{course.tag}</span>
              </div>
              <div className="p-5">
                <p className="text-xs text-primary font-semibold font-body mb-2 uppercase tracking-wider">{course.uni}</p>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                  <span className="flex items-center gap-1"><Clock size={14} /> {course.weeks} weeks</span>
                  <span className="flex items-center gap-1"><Users size={14} /> {course.learners} learners</span>
                </div>
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

export default Courses;
