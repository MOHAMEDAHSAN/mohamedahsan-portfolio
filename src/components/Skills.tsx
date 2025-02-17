import {
  Brain,
  MessageSquare,
  FileCode,
  Database,
  PenTool,
  Box,
  Cpu,
  Printer,
  Lightbulb,
  Clock,
  Users,
  Crown,
  Briefcase,
  Languages,
} from "lucide-react";

const nonTechnicalSkills = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Time Management", icon: Clock },
  { name: "Collaboration", icon: Users },
  { name: "Leadership", icon: Crown },
  { name: "Project Management", icon: Briefcase },
  { name: "Languages", icon: Languages, details: "English, Tamil, Hindi (Partial)" },
];

const technicalSkills = [
  { name: "Machine Learning", icon: Brain },
  { name: "NLP", icon: MessageSquare },
  { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
  { name: "PHP", icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg" },
  { name: "Atom", icon: "https://www.vectorlogo.zone/logos/atom_io/atom_io-icon.svg" },
  { name: "Visual Studio Code", icon: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" },
  { name: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
  { name: "C", icon: FileCode },
  { name: "Neo4j", icon: "https://www.vectorlogo.zone/logos/neo4j/neo4j-icon.svg" },
  { name: "DBMS-MySQL", icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
  { name: "StarUML", icon: PenTool },
  { name: "Quartus", icon: Cpu },
  { name: "Autodesk Fusion 360", icon: Box },
  { name: "Ultimaker Cura", icon: Printer },
];

const SkillCard = ({ name, icon: Icon, details }: { name: string; icon: any; details?: string }) => (
  <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-primary hover:text-white group">
    {typeof Icon === 'string' ? (
      <img src={Icon} alt={name} className="w-5 h-5" />
    ) : (
      <Icon className="w-5 h-5 group-hover:text-white text-primary" />
    )}
    <div className="text-left">
      <p className="font-medium">{name}</p>
      {details && <p className="text-sm opacity-75">{details}</p>}
    </div>
  </div>
);

interface SkillsProps {
  isAdmin?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isAdmin }) => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-amaranth font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            Skills
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-highlight to-primary/50"></div>
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Non-Technical Skills */}
          <div>
            <h3 className="text-xl font-amaranth font-semibold mb-6 text-primary">Non-Technical Skills</h3>
            <div className="grid gap-4">
              {nonTechnicalSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-amaranth font-semibold mb-6 text-primary">Technical Skills</h3>
            <div className="grid gap-4">
              {technicalSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
