
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserCircle2, LogOut } from "lucide-react";
import AdminAuth from "./AdminAuth";
import { supabase } from "@/integrations/supabase/client";
import { useAuthStore } from "@/lib/store";
import { useToast } from "./ui/use-toast";

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { user, setUser } = useAuthStore();
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Logged out successfully",
      });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-sm border-b border-primary/10 px-6 py-3 font-poppins"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(250, 250, 250, 0.8),
            rgba(250, 250, 250, 0.8)
          ),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 45 C15 35, 35 55, 50 45 S85 35, 100 45' fill='none' stroke='%23ea384c' stroke-width='4' stroke-opacity='0.4'%3E%3Canimate attributeName='d' dur='4s' repeatCount='indefinite' values='M0 45 C15 35, 35 55, 50 45 S85 35, 100 45;M0 45 C15 40, 35 50, 50 45 S85 40, 100 45;M0 45 C15 35, 35 55, 50 45 S85 35, 100 45'/%3E%3C/path%3E%3Cpath d='M0 55 C15 45, 35 65, 50 55 S85 45, 100 55' fill='none' stroke='%23ea384c' stroke-width='4' stroke-opacity='0.3'%3E%3Canimate attributeName='d' dur='4s' repeatCount='indefinite' values='M0 55 C15 45, 35 65, 50 55 S85 45, 100 55;M0 55 C15 50, 35 60, 50 55 S85 50, 100 55;M0 55 C15 45, 35 65, 50 55 S85 45, 100 55' /%3E%3C/path%3E%3Cpath d='M0 65 C15 55, 35 75, 50 65 S85 55, 100 65' fill='none' stroke='%23ea384c' stroke-width='4' stroke-opacity='0.2'%3E%3Canimate attributeName='d' dur='4s' repeatCount='indefinite' values='M0 65 C15 55, 35 75, 50 65 S85 55, 100 65;M0 65 C15 60, 35 70, 50 65 S85 60, 100 65;M0 65 C15 55, 35 75, 50 65 S85 55, 100 65' /%3E%3C/path%3E%3C/svg%3E")
        `,
        backgroundSize: "400px auto",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-accent hover:text-primary hover:bg-primary/10 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                )}
                onClick={() => onNavigate("home")}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-accent hover:text-primary hover:bg-primary/10 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                )}
                onClick={() => onNavigate("experience")}
              >
                Experience
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-accent hover:text-primary hover:bg-primary/10 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                )}
                onClick={() => onNavigate("education")}
              >
                Education
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-accent hover:text-primary hover:bg-primary/10 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                )}
                onClick={() => onNavigate("hackathons")}
              >
                Hackathons & Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-accent hover:text-primary hover:bg-primary/10 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                )}
                onClick={() => onNavigate("certifications")}
              >
                Certifications
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-accent hover:text-primary hover:bg-primary/10 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                )}
                onClick={() => onNavigate("skills")}
              >
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="absolute right-6">
          {user ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="w-9 h-9"
            >
              <LogOut className="w-5 h-5" />
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAuthOpen(true)}
              className="w-9 h-9"
            >
              <UserCircle2 className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>

      <AdminAuth isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  );
};

export default Navigation;
