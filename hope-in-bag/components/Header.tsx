import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "/gallery", isRoute: true },
  { label: "Donate", href: "#donate" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Reach Us", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (link: typeof navLinks[0]) => {
    setMobileOpen(false);
    if (link.isRoute) {
      navigate(link.href);
    } else {
      const el = document.querySelector(link.href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" onClick={() => scrollTo("#home")} className="font-heading text-2xl font-extrabold text-primary">
          Hope in a Bag
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l)}
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#donate")}
            className="rounded-full bg-accent text-accent-foreground hover:scale-105 transition-transform"
          >
            Donate
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l)}
                  className="text-left py-2 font-semibold text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo("#donate")}
                className="rounded-full bg-accent text-accent-foreground mt-2"
              >
                Donate
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;