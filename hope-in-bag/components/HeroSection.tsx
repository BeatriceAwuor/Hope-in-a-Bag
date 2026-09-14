import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video placeholder — user will provide URL */}
      <div className="absolute inset-0 bg-foreground/70 z-10" />
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <motion.div initial={{
      opacity: 0,
      y: 40
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }} className="relative z-20 text-center px-4 max-w-3xl">
        <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-primary-foreground mb-4 drop-shadow-lg">
          Hope in a Bag
        </h1>
        <p className="text-lg md:text-2xl text-primary-foreground/90 mb-8 font-medium">Transforming lives through education and support. Supporting orphans and vulnerable children with essential school supplies and the tools they need to succeed.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollTo("#donate")} className="rounded-full bg-accent text-accent-foreground text-lg px-8 hover:scale-105 transition-transform shadow-lg">
            Donate Now
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("#get-involved")} className="rounded-full border-primary-foreground text-primary-foreground text-lg px-8 hover:bg-primary-foreground/20 hover:scale-105 transition-transform">
            Become a Volunteer
          </Button>
        </div>
      </motion.div>
    </section>;
};
export default HeroSection;