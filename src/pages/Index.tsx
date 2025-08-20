
import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactDialog from "@/components/ContactDialog";
import Skills from "@/components/Skills";
import ImageSlider from "@/components/ImageSlider";
import Certifications from "@/components/Certifications";
import HackathonsAndProjects from "@/components/HackathonsAndProjects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import { useAuthStore } from "@/lib/store";

const experiences = [
  {
    title: "Assistant Coordinator",
    company: "Tech Society",
    duration: "Aug 2025 - Current",
    location: "Full-time",
    description:
      "Serving as a key member of the central team for the student-led club, TechSociety - Build Together, Learn Faster. Managing 5 different communities with 300+ active members. Hosted events on Kivy app development in Python. ",
    side: "left" as const,
    logo: "/lovable-uploads/229f5310-104c-4224-8a06-8946acb12a00.png"
  },
  {
    title: "AI Product Developer Intern",
    company: "6s Consulting",
    duration: "July 2025 - Aug 2025",
    location: "On-Site",
    description:
      "Our team operated under the Agile Scrum methodology, conducting daily stand-up meetings (DSMs) for progress updates and Weekly Sprint reviews through structured presentations. I contributed to the end-to-end development of AI-driven product 'DewDrop' using the MERN stack (MongoDB, Express.js, React with Vite, Node.js). I collaborated closely with teams, leveraging project management tools like Jira and Confluence (Atlassian.net) for agile workflow tracking and documentation. I worked on UI/UX prototyping using Figma, created visual presentations with Canva, and integrated LangChain for building AI-powered features within the product.",
    side: "right" as const,
    logo: "/lovable-uploads/64873ecc-d2a0-4b41-bae4-06d788a0657b.png"
  },
  {
    title: "Mentee",
    company: "Codebyte",
    duration: "Jan 2025 - Present",
    location: "Chennai, Tamil Nadu, India (Remote)",
    description:
      "Currently participating in the mentorship program at Codebyte, focusing on advanced software development practices and industry standards.",
    side: "left" as const,
    logo: "/lovable-uploads/97dee31b-02d8-4eb0-936b-33ba8e339b56.png"
  },
  {
    title: "UI/UX Intern",
    company: "Skill First Labs",
    duration: "Oct 2024 - Dec 2024",
    location: "Chennai, Tamil Nadu, India (On-Site)",
    description:
      "Designed prototypes, enhanced UX with modern elements, and conducted usability testing for improved user satisfaction.",
    side: "right" as const,
    logo: "/lovable-uploads/061a06a2-f177-45c1-8f1d-446310dfeeb0.png"
  },
  {
    title: "Web Development In-plant Training",
    company: "Computational Intelligence Research Foundation",
    duration: "Jul 2024",
    location: "Chennai, Tamil Nadu, India (On-Site)",
    description:
      "Built a functional website using PHP, WordPress, HTML, CSS, and JavaScript, hosted on a free domain.",
    side: "left" as const,
    logo: "/lovable-uploads/8623bb43-451c-4f5e-9bbb-40156f5277d7.png"
  },
];

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const { user } = useAuthStore();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <AnimatedBackground />
      <Navigation onNavigate={scrollToSection} />

      <div className="min-h-screen p-6 md:p-12 pt-36 font-poppins">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section id="home" className="mb-32 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="order-2 md:order-1 space-y-6 animate-fade-up">
                <div className="inline-block">
                  <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full animate-fade-in">
                    Welcome to my portfolio
                  </span>
                </div>
                <h1 className="font-amaranth text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
                  Hey There!
                  <br />
                  <span className="text-primary">
                    I am
                    <br />
                    Mohamed Ahsan!
                  </span>
                </h1>
                <p className="text-lg text-accent/80 leading-relaxed">
                  Versatile tech professional with experience in AI, ML, UI/UX, Java & MERN stacks, currently deepening skills in fullstack development, AI systems, and DSA.
                </p>

                <SocialLinks onContactClick={() => setContactOpen(true)} />
              </div>

              {/* Image */}
              <div className="order-1 md:order-2 animate-fade-in h-[500px]">
                <div className="w-full h-full relative">
                  <ImageSlider />
                </div>
              </div>
            </div>
          </section>

          <div className="py-20">
            <ExperienceTimeline experiences={experiences} isAdmin={!!user} />
          </div>
          
          <div className="py-20">
            <Education isAdmin={!!user} />
          </div>
          
          <div className="py-20">
            <HackathonsAndProjects isAdmin={!!user} />
          </div>
          
          <Certifications isAdmin={!!user} />
          
          <Skills isAdmin={!!user} />
        </div>
      </div>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <Footer />
    </>
  );
};

export default Index;
