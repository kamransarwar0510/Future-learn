import { Check } from "lucide-react";

const plans = [
  {
    name: "Limited Access",
    price: "$0",
    period: "forever",
    features: ["Limited course access", "Weekly lessons", "Basic features"],
    highlighted: false,
  },
  {
    name: "Unlimited Monthly",
    price: "$49.99",
    period: "/month",
    features: ["Full course access", "Digital certificates", "Instant access"],
    highlighted: true,
  },
  {
    name: "Unlimited Annual",
    price: "$20.42",
    period: "/month",
    features: ["All monthly benefits", "Best value", "Keep forever"],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Subscription Plans
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto font-body">
          Choose the plan that fits your learning goals
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-accent text-accent-foreground border-primary shadow-2xl scale-105"
                  : "bg-card text-foreground border-border hover:shadow-lg"
              }`}
            >
              <h3 className="font-heading font-semibold text-xl mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold font-heading">{plan.price}</span>
                <span className={`text-sm font-body ${plan.highlighted ? "text-accent-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-body">
                    <Check size={16} className={plan.highlighted ? "text-primary-foreground" : "text-primary"} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-full py-3 text-sm font-medium font-body transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-foreground/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
