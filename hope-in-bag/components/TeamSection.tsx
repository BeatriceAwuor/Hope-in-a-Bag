import AnimatedSection from "./AnimatedSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import feloImg from "@/assets/felo.jpeg";
import betyImg from "@/assets/bety.jpeg";

const team = [
  {
    name: "Felix Otieno",
    role: "Founder & Director",
    initials: "FO",
    image: feloImg,
    bio: "Passionate about empowering children through education. Felix founded Hope in a Bag in 2025 with a vision to ensure every child has access to educational resources.",
  },
  {
    name: "Beatrice Otieno",
    role: "Co-Founder & Operations Manager",
    initials: "BO",
    image: betyImg,
    bio: "With experience in community development, Beatrice ensures that every donation reaches the children who need it most.",
  },
  {
    name: "Sarah Awino",
    role: "Program Coordinator",
    initials: "SA",
    bio: "Sarah coordinates our outreach programs and works directly with schools to identify children in need and distribute resources effectively.",
  },
];

const TeamSection = () => (
  <AnimatedSection id="team" className="py-20 bg-muted">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
        Meet Our Team
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
        The passionate people behind Hope in a Bag.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
              {"image" in member && member.image ? (
                <AvatarImage src={member.image} alt={member.name} className="object-cover" />
              ) : null}
              <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl font-bold">
                {member.initials}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-heading text-xl font-bold mb-1">{member.name}</h3>
            <Badge variant="secondary" className="mb-4">
              {member.role}
            </Badge>
            <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default TeamSection;