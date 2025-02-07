
import {
  Code,
  Languages,
  Clock,
  Users,
  Lightbulb,
  Crown,
  Briefcase,
  Brain,
  MessageSquare,
  Figma,
  FileCode,
  Atom,
  PenTool,
  Database,
  Box,
  Cpu,
  Printer,
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
  { name: "Figma", icon: Figma },
  { name: "PHP", icon: FileCode },
  { name: "Atom", icon: Atom },
  { name: "Visual Studio Code", icon: Code },
  { name: "Python", icon: FileCode },
  { name: "C", icon: FileCode },
  { name: "Neo4j", icon: Database },
  { name: "DBMS-MySQL", icon: Database },
  { name: "StarUML", icon: PenTool },
  { name: "Quartus", icon: Cpu },
  { name: "Autodesk Fusion 360", icon: Box },
  { name: "Ultimaker Cura", icon: Printer },
];

const SkillCard = ({ name, icon: Icon, details }: { name: string; icon: any; details?: string }) => (
  <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-primary hover:text-white group">
    <Icon className="w-5 h-5 group-hover:text-white text-primary" />
    <div className="text-left">
      <p className="font-medium">{name}</p>
      {details && <p className="text-sm opacity-75">{details}</p>}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-accent mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Non-Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Non-Technical Skills</h3>
            <div className="grid gap-4">
              {nonTechnicalSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Technical Skills</h3>
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
