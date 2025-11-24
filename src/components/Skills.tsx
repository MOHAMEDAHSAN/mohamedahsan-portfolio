
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
  Search,
} from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const nonTechnicalSkills = [
  { name: "Agile Scrum", icon: Users, details: "Daily Stand-ups & Sprint Presentations" },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Project Management", icon: Briefcase },
  { name: "Leadership", icon: Crown },
  { name: "Effective Communication", icon: MessageSquare, details: "Fluent in English" },
  { name: "Languages", icon: Languages, details: "English, Tamil, Hindi (Partial)" },
];

const technicalSkills = [
  { name: "Machine Learning", icon: Brain },
  { name: "Natural Language Processing (NLP)", icon: MessageSquare },
  { name: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
  { name: "TensorFlow", icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
  { name: "PyTorch", icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
  { name: "LangChain", icon: Brain },
  { name: "MERN Stack", icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
  { name: "MongoDB", icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
  { name: "Express.js", icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
  { name: "React + Vite", icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
  { name: "Node.js", icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Java", icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
  { name: "JavaScript (JSX)", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
  { name: "C", icon: FileCode },
  { name: "HTML/CSS", icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
  { name: "AWS", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
  { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
  { name: "Canva", icon: PenTool },
  { name: "Neo4j", icon: "https://www.vectorlogo.zone/logos/neo4j/neo4j-icon.svg" },
  { name: "MySQL", icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
  { name: "Jira", icon: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" },
  { name: "Confluence", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
  { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Visual Studio Code", icon: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" }
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

type SortOrder = "default" | "asc" | "desc";

const Skills: React.FC<SkillsProps> = ({ isAdmin }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  const filterSkills = (skills: any[], query: string) => {
    return skills.filter(skill => 
      skill.name.toLowerCase().includes(query.toLowerCase()) ||
      (skill.details && skill.details.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const sortSkills = (skills: any[]) => {
    if (sortOrder === "default") return skills;
    
    return [...skills].sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === "asc" ? comparison : -comparison;
    });
  };

  const filteredTechnicalSkills = sortSkills(filterSkills(technicalSkills, searchQuery));
  const filteredNonTechnicalSkills = sortSkills(filterSkills(nonTechnicalSkills, searchQuery));

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-amaranth font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            Skills
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-highlight to-primary/50"></div>
          </span>
        </h2>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full border-primary focus:ring-primary/20"
              />
            </div>
            <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as SortOrder)}>
              <SelectTrigger className="w-[150px] bg-primary text-white border-primary hover:bg-primary/90 transition-colors">
                <SelectValue placeholder="Sort order" />
              </SelectTrigger>
              <SelectContent className="bg-white border-primary">
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="asc">A to Z</SelectItem>
                <SelectItem value="desc">Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Non-Technical Skills */}
          <div>
            <h3 className="text-xl font-amaranth font-semibold mb-6 text-primary">
              Non-Technical Skills {filteredNonTechnicalSkills.length > 0 && `(${filteredNonTechnicalSkills.length})`}
            </h3>
            <div className="grid gap-4">
              {filteredNonTechnicalSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
              {filteredNonTechnicalSkills.length === 0 && searchQuery && (
                <p className="text-gray-500 italic">No non-technical skills found matching "{searchQuery}"</p>
              )}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-amaranth font-semibold mb-6 text-primary">
              Technical Skills {filteredTechnicalSkills.length > 0 && `(${filteredTechnicalSkills.length})`}
            </h3>
            <div className="grid gap-4">
              {filteredTechnicalSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
              {filteredTechnicalSkills.length === 0 && searchQuery && (
                <p className="text-gray-500 italic">No technical skills found matching "{searchQuery}"</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
