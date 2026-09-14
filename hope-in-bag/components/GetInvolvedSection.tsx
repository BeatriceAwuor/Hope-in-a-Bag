import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

type FormType = "volunteer" | "mentor" | "participant";

const GetInvolvedSection = () => {
  const [activeForm, setActiveForm] = useState<FormType>("volunteer");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Will be wired to Supabase later
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Application submitted! We'll be in touch soon.");
    (e.target as HTMLFormElement).reset();
    setLoading(false);
  };

  const tabs: { key: FormType; label: string }[] = [
    { key: "volunteer", label: "Volunteer" },
    { key: "mentor", label: "Mentor" },
    { key: "participant", label: "Program Participant" },
  ];

  return (
    <AnimatedSection id="get-involved" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Get Involved</h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
          Join our mission — whether as a volunteer, mentor, or program participant.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((t) => (
            <Button
              key={t.key}
              variant={activeForm === t.key ? "default" : "outline"}
              onClick={() => setActiveForm(t.key)}
              className="rounded-full"
            >
              {t.label}
            </Button>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-sm">
          {activeForm === "volunteer" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Full Name</Label><Input required name="name" placeholder="Jane Doe" className="rounded-xl" /></div>
                <div><Label>Email</Label><Input required name="email" type="email" placeholder="jane@example.com" className="rounded-xl" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Phone</Label><Input name="phone" type="tel" placeholder="+254..." className="rounded-xl" /></div>
                <div>
                  <Label>Availability</Label>
                  <Select name="availability">
                    <SelectTrigger className="rounded-xl"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="weekends">Weekends</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div><Label>Interests / Skills</Label><Textarea name="interests" placeholder="Tell us what you're passionate about..." className="rounded-xl" /></div>
              <Button type="submit" disabled={loading} className="rounded-full w-full bg-accent text-accent-foreground hover:scale-[1.02] transition-transform">
                {loading ? "Submitting..." : "Apply as Volunteer"}
              </Button>
            </form>
          )}

          {activeForm === "mentor" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Full Name</Label><Input required name="name" placeholder="Jane Doe" className="rounded-xl" /></div>
                <div><Label>Email</Label><Input required name="email" type="email" placeholder="jane@example.com" className="rounded-xl" /></div>
              </div>
              <div>
                <Label>Mentorship Area</Label>
                <Select name="area">
                  <SelectTrigger className="rounded-xl"><SelectValue placeholder="Select area" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="srhr">SRHR</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="life-skills">Life Skills</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div><Label>Experience</Label><Textarea name="experience" placeholder="Describe your relevant experience..." className="rounded-xl" /></div>
              <Button type="submit" disabled={loading} className="rounded-full w-full bg-accent text-accent-foreground hover:scale-[1.02] transition-transform">
                {loading ? "Submitting..." : "Apply as Mentor"}
              </Button>
            </form>
          )}

          {activeForm === "participant" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Parent / Guardian Name</Label><Input required name="name" placeholder="Jane Doe" className="rounded-xl" /></div>
                <div><Label>Email</Label><Input required name="email" type="email" placeholder="jane@example.com" className="rounded-xl" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Program</Label>
                  <Select name="program">
                    <SelectTrigger className="rounded-xl"><SelectValue placeholder="Select program" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">Education Support</SelectItem>
                      <SelectItem value="srhr">SRHR Mentorship</SelectItem>
                      <SelectItem value="life-skills">Life Skills</SelectItem>
                      <SelectItem value="mentorship">Child Mentorship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div><Label>Child's Age</Label><Input name="child_age" type="number" placeholder="e.g. 10" className="rounded-xl" min={3} max={18} /></div>
              </div>
              <div><Label>Additional Details</Label><Textarea name="details" placeholder="Tell us more about the child..." className="rounded-xl" /></div>
              <Button type="submit" disabled={loading} className="rounded-full w-full bg-accent text-accent-foreground hover:scale-[1.02] transition-transform">
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default GetInvolvedSection;