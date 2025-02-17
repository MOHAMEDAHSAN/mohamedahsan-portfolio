
import { Pencil, Plus, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Experience {
  id?: string;  // Added id property
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  side: "left" | "right";
  logo?: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
  isAdmin?: boolean;
}

const ExperienceTimeline = ({ experiences, isAdmin }: ExperienceTimelineProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [formData, setFormData] = useState<Experience>({
    title: "",
    company: "",
    duration: "",
    location: "",
    description: "",
    side: "left",
    logo: ""
  });
  const { toast } = useToast();

  const handleEdit = (experience: Experience) => {
    setEditingExperience(experience);
    setFormData(experience);
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setEditingExperience(null);
    setFormData({
      title: "",
      company: "",
      duration: "",
      location: "",
      description: "",
      side: "left",
      logo: ""
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingExperience) {
        // Update existing experience
        const { error } = await supabase
          .from('experiences')
          .update(formData)
          .eq('id', editingExperience.id);
          
        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Experience updated successfully",
        });
      } else {
        // Add new experience
        const { error } = await supabase
          .from('experiences')
          .insert(formData);
          
        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Experience added successfully",
        });
      }
      
      setIsDialogOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save experience",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="experience" className="relative py-20">
      <h2 className="text-4xl font-amaranth font-bold text-center mb-32 relative">
        <span className="relative inline-block">
          Experiences
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-highlight to-primary/50"></div>
        </span>
        {isAdmin && (
          <Button
            variant="outline"
            size="sm"
            className="ml-4 gap-2"
            onClick={handleAdd}
          >
            <Plus className="w-4 h-4" />
            Add Experience
          </Button>
        )}
      </h2>
      
      <div className="absolute left-1/2 top-32 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2" />

      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
          >
            <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />

            <div
              className={`space-y-2 ${
                exp.side === "right" ? "md:col-start-2" : "md:col-start-1"
              }`}
            >
              <div className="bg-secondary/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/5 hover:border-primary/10 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  {exp.logo && (
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-12 h-12 object-contain rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-accent">{exp.title}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  {isAdmin && (
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(exp)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={async () => {
                          try {
                            const { error } = await supabase
                              .from('experiences')
                              .delete()
                              .eq('id', exp.id);
                              
                            if (error) throw error;
                            
                            toast({
                              title: "Success",
                              description: "Experience deleted successfully",
                            });
                          } catch (error) {
                            toast({
                              title: "Error",
                              description: "Failed to delete experience",
                              variant: "destructive",
                            });
                          }
                        }}
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
                <p className="text-sm text-accent/60">{exp.location}</p>
                <p className="text-accent/80 mt-2">{exp.description}</p>
                <p className="text-sm text-primary/80 mt-2">{exp.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {editingExperience ? "Edit Experience" : "Add Experience"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
            <Input
              placeholder="Company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
            />
            <Input
              placeholder="Duration"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              required
            />
            <Input
              placeholder="Location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />
            <Input
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
            <Input
              placeholder="Logo URL"
              value={formData.logo}
              onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
            />
            <select
              className="w-full p-2 rounded-md border"
              value={formData.side}
              onChange={(e) => setFormData({ ...formData, side: e.target.value as "left" | "right" })}
              required
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
            <Button type="submit" className="w-full">
              {editingExperience ? "Update" : "Add"} Experience
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExperienceTimeline;
