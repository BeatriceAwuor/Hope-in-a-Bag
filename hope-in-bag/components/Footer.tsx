import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "./AnimatedSection";
const Footer = () => {
  const [loading, setLoading] = useState(false);
  const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    toast.success("Message sent! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
    setLoading(false);
  };
  return <footer id="contact" className="bg-foreground text-primary-foreground">
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">Reach Us</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:Felixotieno540@gmail.com" className="hover:text-secondary transition-colors">Felixotieno540@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+254 11893496
              </span>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://www.linkedin.com/in/felix-otieno-44854b22b/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/FelixOt87547470" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/afelloh_picha?igsh=YWl3cGV2dDBrcnho" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              <p className="text-primary-foreground/60 text-sm pt-4">Hope in a Bag is a registered nonprofit organization dedicated to uplifting vulnerable children through community-based programs.</p>
            </div>

            {/* Contact form */}
            <form onSubmit={handleContact} className="space-y-4">
              <div><Label className="text-primary-foreground/80">Name</Label><Input required name="name" placeholder="Your name" className="rounded-xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" /></div>
              <div><Label className="text-primary-foreground/80">Email</Label><Input required name="email" type="email" placeholder="Your email" className="rounded-xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" /></div>
              <div><Label className="text-primary-foreground/80">Message</Label><Textarea required name="message" placeholder="Your message..." className="rounded-xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" /></div>
              <Button type="submit" disabled={loading} className="rounded-full w-full bg-accent text-accent-foreground hover:scale-[1.02] transition-transform">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="border-t border-primary-foreground/10 mt-16 pt-8 text-center text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Hope in a Bag. All rights reserved.
          </div>
        </div>
      </AnimatedSection>
    </footer>;
};
export default Footer;