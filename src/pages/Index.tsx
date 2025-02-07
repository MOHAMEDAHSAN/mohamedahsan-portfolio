
import { useState } from "react";
import { Github, Linkedin, Instagram, FileText, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: "#",
      label: "GitHub",
      color: "#333",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "#E4405F",
    },
    {
      icon: FileText,
      href: "#",
      label: "Resume",
      color: "#16A34A",
    },
  ];

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1 space-y-6 animate-fade-up">
              <div className="inline-block">
                <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full animate-fade-in">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
                Hey There! I am{" "}
                <span className="text-primary">Mohamed Ahsan!</span>
              </h1>
              <p className="text-lg text-accent/80 leading-relaxed">
                [Your description will go here]
              </p>

              {/* Social Links */}
              <div className="flex gap-4 pt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
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
              <span className="text-accent">+1234567890</span>
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
              <span className="text-accent">contact@example.com</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;
