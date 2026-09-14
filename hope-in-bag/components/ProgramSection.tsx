import AnimatedSection from "./AnimatedSection";
import { BookOpen, HeartHandshake, Lightbulb, Users, UtensilsCrossed } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const programs = [
  {
    icon: BookOpen,
    title: "Education Support",
    desc: "Providing school supplies, tuition assistance, and tutoring to help children stay in school and excel.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: HeartHandshake,
    title: "SRHR Mentorship",
    desc: "Age-appropriate sexual and reproductive health education through trusted mentors and safe spaces.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Lightbulb,
    title: "Life Skills",
    desc: "Teaching practical life skills including financial literacy, communication, and leadership.",
    color: "bg-hope-green/10 text-hope-green",
  },
  {
    icon: Users,
    title: "Child Mentorship",
    desc: "One-on-one mentoring that builds confidence, resilience, and a positive vision for the future.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Program",
    desc: "Providing nutritious meals to children in need, ensuring they have the energy and nourishment to learn and thrive.",
    color: "bg-accent/10 text-accent",
  },
];

const ProgramsSection = () => (
  <AnimatedSection id="programs" className="py-20">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Our Programs</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
        We run four core programs designed to uplift and empower children in our communities.
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        {programs.map((p) => (
          <Card
            key={p.title}
            className="rounded-2xl border-none shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${p.color}`}>
                <p.icon className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ProgramsSection;