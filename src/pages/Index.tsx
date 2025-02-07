
import { useState } from "react";
import { Github, Linkedin, Instagram, FileText, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AnimatedBackground from "@/components/AnimatedBackground";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/MOHAMEDAHSAN",
      label: "GitHub",
      color: "#333",
      tooltip: "Check out my projects!",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohamedahsan037/",
      label: "LinkedIn",
      color: "#0077B5",
      tooltip: "Let's get connected!",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/not_mysticahsan?igsh=NWUwMTlrZmwyczZ1",
      label: "Instagram",
      color: "#E4405F",
      tooltip: "Follow my journey!",
    },
    {
      icon: FileText,
      href: "#",
      label: "Resume",
      color: "#16A34A",
      tooltip: "View my resume",
    },
  ];

  const experiences = [
    {
      title: "UI/UX Intern",
      company: "Skill First Labs",
      duration: "Oct 2024 - Dec 2024",
      location: "Chennai, Tamil Nadu, India",
      description:
        "Designed prototypes, enhanced UX with modern elements, and conducted usability testing for improved user satisfaction.",
      side: "right",
    },
    {
      title: "Web Development In-plant Training",
      company: "Computational Intelligence Research Foundation",
      duration: "Jul 2024",
      location: "Chennai, Tamil Nadu, India",
      description:
        "Built a functional website using PHP, WordPress, HTML, CSS, and JavaScript, hosted on a free domain.",
      side: "left",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatedBackground />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200/50 px-6 py-3">
        <NavigationMenu className="mx-auto max-w-7xl">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={() => scrollToSection("home")}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

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
                  <span className="text-primary">I am<br />Mohamed Ahsan!</span>
                </h1>
                <p className="text-lg text-accent/80 leading-relaxed">
                  Tech enthusiast skilled in AI, ML, and UI/UX, transforming ideas
                  into impactful solutions. Currently exploring Neo4j, Node.js, and
                  AWS to push innovation further.
                </p>

                {/* Social Links */}
                <div className="flex gap-4 pt-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      title={link.tooltip}
                      className="group relative p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up"
                      style={{
                        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <link.icon
                        size={24}
                        className="transition-transform duration-300 group-hover:scale-110"
                        style={{ color: link.color }}
                      />
                    </a>
                  ))}
                  <button
                    onClick={() => setContactOpen(true)}
                    title="Contact me"
                    className="group relative p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up"
                    style={{
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <Phone
                      size={24}
                      className="transition-transform duration-300 group-hover:scale-110 text-blue-500"
                    />
                  </button>
                </div>
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

          {/* Experience Section */}
          <section id="experience" className="relative py-20">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2" />

            {/* Experiences */}
            <div className="relative space-y-24">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    exp.side === "right" ? "md:text-left" : "md:text-right"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2" />

                  {/* Content */}
                  <div
                    className={`space-y-2 ${
                      exp.side === "right"
                        ? "md:col-start-2"
                        : "md:col-start-1"
                    }`}
                  >
                    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-accent">{exp.title}</h3>
                      <p className="text-[#0FA0CE] font-medium">{exp.company}</p>
                      <p className="text-sm text-[#8E9196]">{exp.location}</p>
                      <p className="text-[#222222] mt-2">{exp.description}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div
                    className={`text-lg font-medium text-[#33C3F0] ${
                      exp.side === "right"
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-2 md:text-left"
                    }`}
                  >
                    {exp.duration}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Information</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-accent">+91 9884261429</span>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="text-accent">ahsansaleem2006@gmail.com</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;
