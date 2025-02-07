
import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactDialog from "@/components/ContactDialog";

const experiences = [
  {
    title: "UI/UX Intern",
    company: "Skill First Labs",
    duration: "Oct 2024 - Dec 2024",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Designed prototypes, enhanced UX with modern elements, and conducted usability testing for improved user satisfaction.",
    side: "right" as const,
  },
  {
    title: "Web Development In-plant Training",
    company: "Computational Intelligence Research Foundation",
    duration: "Jul 2024",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Built a functional website using PHP, WordPress, HTML, CSS, and JavaScript, hosted on a free domain.",
    side: "left" as const,
  },
];

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatedBackground />
      <Navigation onNavigate={scrollToSection} />

      <div className="min-h-screen p-6 md:p-12 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section id="home" className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="order-2 md:order-1 space-y-6 animate-fade-up">
                <div className="inline-block">
                  <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full animate-fade-in">
                    Welcome to my portfolio
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
                  Hey There!
                  <br />
                  <span className="text-primary">
                    I am
                    <br />
                    Mohamed Ahsan!
                  </span>
                </h1>
                <p className="text-lg text-accent/80 leading-relaxed">
                  Tech enthusiast skilled in AI, ML, and UI/UX, transforming ideas
                  into impactful solutions. Currently exploring Neo4j, Node.js, and
                  AWS to push innovation further.
                </p>

                <SocialLinks onContactClick={() => setContactOpen(true)} />
              </div>

              {/* Image */}
              <div className="order-1 md:order-2 animate-fade-in">
                <div
                  className="aspect-square rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm p-2"
                  style={{
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Index;
