
import { Github, Linkedin, Instagram, FileText, Phone } from "lucide-react";

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/MOHAMEDAHSAN",
    label: "GitHub",
    color: "#333",
    tooltip: "Check out my projects! 🚀",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mohamedahsan037/",
    label: "LinkedIn",
    color: "#0077B5",
    tooltip: "Let's connect! 🤝",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/not_mysticahsan?igsh=NWUwMTlrZmwyczZ1",
    label: "Instagram",
    color: "#E4405F",
    tooltip: "Follow my journey! 📸",
  },
  {
    icon: FileText,
    href: "#",
    label: "Resume",
    color: "#16A34A",
    tooltip: "View my resume 📄",
  },
];

interface SocialLinksProps {
  onContactClick: () => void;
}

const SocialLinks = ({ onContactClick }: SocialLinksProps) => {
  return (
    <div className="flex gap-4 pt-6">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          title={link.tooltip}
          className="group relative p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up hover:bg-primary"
          style={{
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)",
          }}
        >
          <link.icon
            size={24}
            className="transition-transform duration-300 group-hover:scale-110 group-hover:text-white"
            style={{ color: link.color }}
          />
        </a>
      ))}
      <button
        onClick={onContactClick}
        title="Say hello! 👋"
        className="group relative p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up hover:bg-primary"
        style={{
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Phone
          size={24}
          className="transition-transform duration-300 group-hover:scale-110 text-blue-500 group-hover:text-white"
        />
      </button>
    </div>
  );
};

export default SocialLinks;
