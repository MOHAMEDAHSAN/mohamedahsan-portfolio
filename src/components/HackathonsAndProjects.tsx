import { Github, Globe, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface HackathonsAndProjectsProps {
  isAdmin?: boolean;
}

const HackathonsAndProjects: React.FC<HackathonsAndProjectsProps> = ({ isAdmin }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  const projects = [
    {
      title: "🏆 Taxonomist - GidyTechpreneur (Winner)",
      subtitle: "Predict Tax Policy Success with Machine Learning",
      date: "Mar 2025",
      description: "Taxonomist is a machine learning-powered web application that helps policymakers and analysts evaluate the potential success of tax policies based on economic indicators. Features include Tax Policy Simulation, GDP Calculator, User-Friendly Interface, and ML Model Integration.",
      images: [
        "/lovable-uploads/7ce334c9-bda6-4cb3-9714-6b0bacd31a93.png",
        "/lovable-uploads/909123c3-4484-4f31-b227-a4a37fe067c1.png",
        "/lovable-uploads/fe9af573-871e-4e7c-8dbe-ba436d714098.png",
        "/lovable-uploads/acefdb31-d9a1-4c18-b678-ba9112c15788.png"
      ],
      github: "https://github.com/MOHAMEDAHSAN/taxonomist-gidy",
      website: "https://taxonomist-gidy.vercel.app/",
    },
    {
      title: "🌊 FloodGuard",
      subtitle: "Advanced Flood Simulation Model",
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
      title: "💡 Here&Now",
      subtitle: "Location-based Reminders & Insights",
      date: "Feb 2025",
      description: "Here&Now is a web application designed to help users set location-based alarms/reminders. The app provides additional features such as weather reports and location insights, making it a versatile tool for travelers and commuters.",
      images: ["/lovable-uploads/c9175ef7-dbed-4ea9-9678-59263552d791.png"],
      github: "https://github.com/MOHAMEDAHSAN/here-now",
      website: "https://here-now-five.vercel.app/",
    },
    {
      title: "🏙️ Reimagining Urban Spaces",
      subtitle: "IBM Z Datathon Project",
      date: "Oct 2024",
      description: "Leverages data science and machine learning to tackle traffic congestion and sewage management. This integrated approach provides predictive insights and optimization solutions for smarter, more resilient cities.",
      images: ["/lovable-uploads/5c42d0f5-f1b8-4718-8852-86d06f0b8a02.png"],
      github: "https://github.com/MOHAMEDAHSAN/REIMAGINING-URBAN-SPACES---IBM-Z-DATATHON",
    },
  ];

  useEffect(() => {
    const initialIndices = projects.reduce((acc, project, index) => {
      acc[index] = 0;
      return acc;
    }, {} as { [key: string]: number });
    setCurrentImageIndex(initialIndices);

    const intervals = projects.map((project, index) => {
      if (project.images.length > 1) {
        return setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [index]: (prev[index] + 1) % project.images.length
          }));
        }, 3000);
      }
      return null;
    });

    return () => {
      intervals.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  return (
    <section id="hackathons" className="relative py-10">
      <h2 className="text-4xl font-amaranth font-bold text-center mb-24 relative">
        <span className="relative inline-block">
          Hackathons & Projects
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-highlight to-primary/50 rounded-full"></div>
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group relative rounded-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Glow Effect behind the card */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
            
            {/* Main Card Content - Glass Prism Design */}
            <div className="relative h-full bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden flex flex-col">
                
                {/* Image Section */}
                <div 
                  className="relative h-56 overflow-hidden cursor-pointer group-hover:h-64 transition-[height] duration-500 ease-in-out"
                  onClick={() => window.open(project.website || project.github, '_blank')}
                >
                    {/* Image Carousel */}
                    <img 
                      src={project.images[currentImageIndex[index] || 0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Dark Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                        <Calendar className="w-3 h-3 text-primary" />
                        {/* Restored to standard font weight */}
                        <p className="text-xs font-medium text-white/90">{project.date}</p>
                    </div>

                    {/* Title & Subtitle in Image Area */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        {/* Removed font-amaranth to revert to default/standard font */}
                        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{project.title}</h3>
                        <p className="text-white/80 text-sm font-medium tracking-wide line-clamp-1 group-hover:text-primary transition-colors duration-300">
                          {project.subtitle}
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 pt-4 flex flex-col flex-grow gap-4 bg-gradient-to-b from-white/5 to-transparent">
                     {/* Removed font-light to revert to standard font weight */}
                     <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.description}
                     </p>
                     
                     {/* Buttons Area */}
                     <div className="mt-auto flex gap-3 pt-4 border-t border-white/10">
                        {project.githubLocal ? (
                          <>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex-1 gap-2 bg-white/5 hover:bg-primary hover:text-white border border-white/10 transition-all duration-300"
                              onClick={() => window.open(project.github, '_blank')}
                            >
                              <Github size={16} />
                              <span className="text-xs">Cloud</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex-1 gap-2 bg-white/5 hover:bg-primary hover:text-white border border-white/10 transition-all duration-300"
                              onClick={() => window.open(project.githubLocal, '_blank')}
                            >
                              <Github size={16} />
                              <span className="text-xs">Local</span>
                            </Button>
                          </>
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex-1 gap-2 bg-white/5 hover:bg-primary hover:text-white border border-white/10 transition-all duration-300"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github size={16} />
                            Code
                          </Button>
                        )}
                        
                        {project.website && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex-1 gap-2 bg-white/5 hover:bg-blue-600 hover:text-white border border-white/10 transition-all duration-300"
                            onClick={() => window.open(project.website, '_blank')}
                          >
                            <Globe size={16} />
                            Live Demo
                          </Button>
                        )}
                     </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HackathonsAndProjects;