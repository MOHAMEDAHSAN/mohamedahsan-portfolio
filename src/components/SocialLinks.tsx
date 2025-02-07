
import { Github, Linkedin, Instagram, FileText, Phone } from "lucide-react";

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/MOHAMEDAHSAN",
    label: "GitHub",
    tooltip: "Check out my projects! 🚀",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mohamedahsan037/",
    label: "LinkedIn",
    tooltip: "Let's connect! 🤝",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/not_mysticahsan?igsh=NWUwMTlrZmwyczZ1",
    label: "Instagram",
    tooltip: "Follow my journey! 📸",
  },
  {
    icon: FileText,
    href: "#",
    label: "Resume",
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
          className="group relative p-3 bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up hover:bg-primary/90"
        >
          <link.icon
            size={24}
            className="text-white transition-colors duration-300"
          />
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm">
            {link.tooltip}
          </span>
        </a>
      ))}
      <button
        onClick={onContactClick}
        title="Say hello! 👋"
        className="group relative p-3 bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up hover:bg-primary/90"
      >
        <Phone size={24} className="text-white transition-colors duration-300" />
        <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-amaranth">
          Say hello! 👋
        </span>
      </button>
    </div>
  );
};

export default SocialLinks;
