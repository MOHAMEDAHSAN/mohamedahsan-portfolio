
import { Github, Linkedin, Instagram, FileText, Phone, Code, LucideIcon } from "lucide-react";

type IconType = LucideIcon | ((props: { size: number; className: string }) => JSX.Element);

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
  tooltip: string;
  defaultColor: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/MOHAMEDAHSAN",
    label: "GitHub",
    tooltip: "Check out my projects! 🚀",
    defaultColor: "text-[#24292e]",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mohamedahsan037/",
    label: "LinkedIn",
    tooltip: "Let's connect! 🤝",
    defaultColor: "text-[#0077b5]",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/not_mysticahsan?igsh=NWUwMTlrZmwyczZ1",
    label: "Instagram",
    tooltip: "Follow my journey! 📸",
    defaultColor: "text-[#e4405f]",
  },
  {
    icon: ({ size, className }) => (
      <div className={`${className} flex items-center justify-center font-bold`} style={{ width: size, height: size }}>
        LC
      </div>
    ),
    href: "https://leetcode.com/u/mysticahsan/",
    label: "LeetCode",
    tooltip: "Check my LeetCode profile 👨‍💻",
    defaultColor: "text-[#FFA116]",
  },
  {
    icon: Code,
    href: "https://www.geeksforgeeks.org/user/ahsansalf93o/",
    label: "GeeksforGeeks",
    tooltip: "Check my GeeksforGeeks profile 🎓",
    defaultColor: "text-[#2F8D46]",
  },
  {
    icon: FileText,
    href: "/Mohamed Ahsan Resume.pdf",
    label: "Resume",
    tooltip: "View my resume 📄",
    defaultColor: "text-[#34A853]",
  },
];

interface SocialLinksProps {
  onContactClick: () => void;
}

const SocialLinks = ({ onContactClick }: SocialLinksProps) => {
  return (
    <div className="flex gap-4 pt-6 flex-wrap">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          title={link.tooltip}
          download={link.label === "Resume" ? "Mohamed Ahsan Resume.pdf" : undefined}
          target={link.label === "Resume" ? "_blank" : undefined}
          rel={link.label === "Resume" ? "noopener noreferrer" : undefined}
          className="group relative p-3 bg-white hover:bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up"
        >
          {typeof link.icon === "function" ? (
            <link.icon
              size={24}
              className={`${link.defaultColor} group-hover:text-white transition-colors duration-300`}
            />
          ) : (
            // @ts-expect-error - LucideIcon typing issue
            <link.icon
              size={24}
              className={`${link.defaultColor} group-hover:text-white transition-colors duration-300`}
            />
          )}
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-poppins">
            {link.tooltip}
          </span>
        </a>
      ))}
      <button
        onClick={onContactClick}
        title="Say hello! 👋"
        className="group relative p-3 bg-white hover:bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up"
      >
        <Phone size={24} className="text-[#0077b5] group-hover:text-white transition-colors duration-300" />
        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-poppins">
          Say hello! 👋
        </span>
      </button>
    </div>
  );
};

export default SocialLinks;
