
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
  Pencil,
  Plus,
  Trash,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

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

const SkillCard = ({ name, icon: Icon, details, isAdmin, onEdit, onDelete }: { 
  name: string; 
  icon: any; 
  details?: string;
  isAdmin?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}) => (
  <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-primary hover:text-white group">
    <div className="flex-1 flex items-center gap-3">
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
    {isAdmin && (
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onEdit}
        >
          <Pencil className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onDelete}
        >
          <Trash className="w-4 h-4" />
        </Button>
      </div>
    )}
  </div>
);

interface SkillsProps {
  isAdmin?: boolean;
}

const Skills = ({ isAdmin }: SkillsProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState<any>(null);
  const [isNonTechnical, setIsNonTechnical] = useState(false);
  const { toast } = useToast();

  const handleEdit = (skill: any, nonTechnical: boolean) => {
    setEditingSkill(skill);
    setIsNonTechnical(nonTechnical);
    setIsDialogOpen(true);
  };

  const handleAdd = (nonTechnical: boolean) => {
    setEditingSkill(null);
    setIsNonTechnical(nonTechnical);
    setIsDialogOpen(true);
  };

  const handleDelete = async (skill: any) => {
    try {
      const { error } = await supabase
        .from('skills')
        .delete()
        .eq('id', skill.id);
        
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Skill deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete skill",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
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
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-amaranth font-semibold text-primary">
                  Non-Technical Skills
                </h3>
                {isAdmin && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => handleAdd(true)}
                  >
                    <Plus className="w-4 h-4" />
                    Add Skill
                  </Button>
                )}
              </div>
              <div className="grid gap-4">
                {nonTechnicalSkills.map((skill) => (
                  <SkillCard 
                    key={skill.name} 
                    {...skill} 
                    isAdmin={isAdmin}
                    onEdit={() => handleEdit(skill, true)}
                    onDelete={() => handleDelete(skill)}
                  />
                ))}
              </div>
            </div>
            
            {/* Technical Skills */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-amaranth font-semibold text-primary">
                  Technical Skills
                </h3>
                {isAdmin && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => handleAdd(false)}
                  >
                    <Plus className="w-4 h-4" />
                    Add Skill
                  </Button>
                )}
              </div>
              <div className="grid gap-4">
                {technicalSkills.map((skill) => (
                  <SkillCard 
                    key={skill.name} 
                    {...skill} 
                    isAdmin={isAdmin}
                    onEdit={() => handleEdit(skill, false)}
                    onDelete={() => handleDelete(skill)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {editingSkill ? "Edit Skill" : "Add Skill"}
              </DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <Input
                placeholder="Skill Name"
                defaultValue={editingSkill?.name}
              />
              <Input
                placeholder="Icon URL (optional)"
                defaultValue={editingSkill?.icon}
              />
              {isNonTechnical && (
                <Input
                  placeholder="Details (optional)"
                  defaultValue={editingSkill?.details}
                />
              )}
              <Button type="submit" className="w-full">
                {editingSkill ? "Update" : "Add"} Skill
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
};

export default Skills;
