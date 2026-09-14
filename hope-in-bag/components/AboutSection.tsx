import AnimatedSection from "./AnimatedSection";
import { Heart, Eye, Star } from "lucide-react";
import { Target } from "lucide-react";
const values = [{
  icon: Heart,
  title: "Compassion",
  text: "We lead with love and empathy in every interaction with the children we serve."
}, {
  icon: Target,
  title: "Mission",
  text: "Empowering vulnerable children through essential resources, educational support, mentorship, and hope for a brighter future."
}, {
  icon: Eye,
  title: "Vision",
  text: "A world where every child has access to education, mentorship, and opportunity."
}, {
  icon: Star,
  title: "Integrity",
  text: "Transparency and accountability guide everything we do."
}];
const AboutSection = () => <AnimatedSection id="about" className="py-20 bg-card">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">About Us</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6 text-lg">At Hope in a Bag, we believe that every child deserves the opportunity to learn and grow. Our mission is to provide orphans and vulnerable children across Kenya with the educational tools they need to build a brighter future.</p>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">Through your generous donations, we supply school bags filled with essential items: notebooks, pens, pencils, textbooks, and other learning materials. Education is the key to breaking the cycle of poverty, and with your support, we can ensure that no child is left behind. Join us in making a difference—one bag at a time.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map(v => <div key={v.title} className="bg-background rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <v.icon className="w-7 h-7 text-secondary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">{v.title}</h3>
            <p className="text-muted-foreground">{v.text}</p>
          </div>)}
      </div>
    </div>
  </AnimatedSection>;
export default AboutSection;