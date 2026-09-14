import AnimatedSection from "./AnimatedSection";
import { Users, School, ShoppingBag } from "lucide-react";

const stats = [
  { icon: Users, value: "70+", label: "Children Helped", color: "bg-primary" },
  { icon: School, value: "10+", label: "Schools Reached", color: "bg-secondary" },
  { icon: ShoppingBag, value: "500+", label: "Bags Donated", color: "bg-accent" },
];

const ImpactStats = () => (
  <AnimatedSection className="py-16 bg-muted">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
        Our Impact
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <div
              className={`w-16 h-16 ${s.color} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <s.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <p className="font-heading text-5xl font-extrabold text-foreground mb-2">
              {s.value}
            </p>
            <p className="text-muted-foreground text-lg font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
