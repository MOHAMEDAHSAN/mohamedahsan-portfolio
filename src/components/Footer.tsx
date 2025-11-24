import { Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-6 mt-20 border-t border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-xl supports-[backdrop-filter]:bg-white/10 supports-[backdrop-filter]:dark:bg-black/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-primary">
        <span>Managed by S Mohamed Ahsan</span>
        <span className="hidden md:inline">|</span>
        <a 
          href="mailto:ahsansaleem2006@gmail.com"
          className="flex items-center gap-1 hover:text-primary/80 transition-colors"
        >
          <Mail size={16} />
          ahsansaleem2006@gmail.com
        </a>
        <span className="hidden md:inline">|</span>
        <a
          href="https://linktr.ee/mohamedahsan37"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-primary/80 transition-colors"
        >
          <ExternalLink size={16} />
          Linktree
        </a>
      </div>
    </footer>
  );
};

export default Footer;