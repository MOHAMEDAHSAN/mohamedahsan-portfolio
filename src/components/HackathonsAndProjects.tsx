
import { Github, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface HackathonsAndProjectsProps {
  isAdmin?: boolean;
}

const HackathonsAndProjects: React.FC<HackathonsAndProjectsProps> = ({ isAdmin }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  const projects = [
    {
      title: "🌊 KU25 24-Hours HACKATHON",
      subtitle: "FloodGuard ~ Flood Simulation Model",
      date: "Feb 2025",
      description: "A flood simulation model providing advanced analytics and real-time assessment of water level rise based on environmental parameters. The system analyzes static parameters and antecedent precipitation to predict and monitor flood risks.",
      images: [
        "/lovable-uploads/446e37d9-61d8-4e1d-898a-83e8d9658d47.png",
        "/lovable-uploads/662fc5e6-c42a-4446-8f40-d67686b31599.png"
      ],
      github: "https://github.com/MOHAMEDAHSAN/floodguard",
      githubLocal: "https://github.com/MOHAMEDAHSAN/floodguard_Local",
      website: "https://floodguard-three.vercel.app/",
    },
    {
      title: "IBM Z Datathon",
      subtitle: "REIMAGINING URBAN SPACES",
      date: "Oct 2024",
      description: "Our project leverages data science and machine learning to tackle two major urban issues-traffic congestion and sewage management by providing predictive insights and optimization solutions. This integrated approach enables cities to become more efficient, sustainable, and resilient.",
      images: ["/lovable-uploads/5c42d0f5-f1b8-4718-8852-86d06f0b8a02.png"],
      github: "https://github.com/MOHAMEDAHSAN/REIMAGINING-URBAN-SPACES---IBM-Z-DATATHON",
    },
    {
      title: "Freelance Project",
      subtitle: "Here&Now ~ Never miss a moment, place, or time",
      date: "Feb 2025",
      description: "Here&Now is a web application designed to help users set location-based alarms/reminders to ensure they never miss an important moment, place, or time. The app provides additional features such as weather reports and location insights, making it a versatile tool for travelers, commuters, and anyone who wants to stay informed about their surroundings.",
      images: ["/lovable-uploads/c9175ef7-dbed-4ea9-9678-59263552d791.png"],
      github: "https://github.com/MOHAMEDAHSAN/here-now",
      website: "https://here-now-five.vercel.app/",
    },
  ];

  useEffect(() => {
    // Initialize currentImageIndex for each project
    const initialIndices = projects.reduce((acc, project, index) => {
      acc[index] = 0;
      return acc;
    }, {} as { [key: string]: number });
    setCurrentImageIndex(initialIndices);

    // Set up image rotation intervals for each project
    const intervals = projects.map((project, index) => {
      if (project.images.length > 1) {
        return setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [index]: (prev[index] + 1) % project.images.length
          }));
        }, 3000); // Change image every 3 seconds
      }
      return null;
    });

    // Cleanup intervals
    return () => {
      intervals.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

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
                src={project.images[currentImageIndex[index] || 0]} 
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
              
              <div className="flex gap-4 flex-wrap">
                {project.githubLocal ? (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} />
                      GitHub Cloud
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.githubLocal, '_blank')}
                    >
                      <Github size={16} />
                      GitHub Local
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} />
                    GitHub
                  </Button>
                )}
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
