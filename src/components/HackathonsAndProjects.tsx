import { Github, Globe } from "lucide-react";
import { Button } from "./ui/button";

interface HackathonsAndProjectsProps {
  isAdmin?: boolean;
}

const HackathonsAndProjects = ({ isAdmin }: HackathonsAndProjectsProps) => {
  const projects = [
    {
      title: "IBM Z Datathon",
      subtitle: "REIMAGINING URBAN SPACES",
      date: "Oct 2024",
      description: "Our project leverages data science and machine learning to tackle two major urban issues-traffic congestion and sewage management by providing predictive insights and optimization solutions. This integrated approach enables cities to become more efficient, sustainable, and resilient.",
      thumbnail: "/lovable-uploads/5c42d0f5-f1b8-4718-8852-86d06f0b8a02.png",
      github: "https://github.com/MOHAMEDAHSAN/REIMAGINING-URBAN-SPACES---IBM-Z-DATATHON",
    },
    {
      title: "Freelance Project",
      subtitle: "Here&Now ~ Never miss a moment, place, or time",
      date: "Feb 2025",
      description: "Here&Now is a web application designed to help users set location-based alarms/reminders to ensure they never miss an important moment, place, or time. The app provides additional features such as weather reports and location insights, making it a versatile tool for travelers, commuters, and anyone who wants to stay informed about their surroundings.",
      thumbnail: "/lovable-uploads/c9175ef7-dbed-4ea9-9678-59263552d791.png",
      github: "https://github.com/MOHAMEDAHSAN/here-now",
      website: "https://here-now-five.vercel.app/",
    },
  ];

  return (
    <section id="hackathons" className="relative">
      <h2 className="text-4xl font-amaranth font-bold text-center mb-32 relative">
        <span className="relative inline-block">
          Hackathons & Projects
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-highlight to-primary/50"></div>
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-secondary/95 backdrop-blur-sm rounded-xl shadow-lg border border-primary/5 hover:border-primary/10 transition-all duration-300 hover:shadow-xl overflow-hidden group"
          >
            <div 
              className="relative h-48 overflow-hidden cursor-pointer"
              onClick={() => window.open(project.website || project.github, '_blank')}
            >
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm opacity-90">{project.date}</p>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <h4 className="text-xl font-bold text-primary">{project.subtitle}</h4>
              <p className="text-accent/80 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github size={16} />
                  GitHub
                </Button>
                {project.website && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => window.open(project.website, '_blank')}
                  >
                    <Globe size={16} />
                    Website
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HackathonsAndProjects;
