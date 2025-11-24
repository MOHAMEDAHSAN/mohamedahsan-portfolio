import { useState, useEffect } from "react";
import {
  NavigationMenu,
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

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "hackathons", label: "Hackathons" },
    { id: "certifications", label: "Certifications" },
    { id: "skills", label: "Skills" },
  ];

  return (
    // Container floats and allows clicks to pass through on the sides
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none font-poppins">
      <nav 
        className="pointer-events-auto flex items-center gap-1 p-1.5 bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/20 shadow-lg rounded-full transition-all duration-300 hover:shadow-xl hover:bg-white/70 dark:hover:bg-black/70 supports-[backdrop-filter]:bg-white/30 supports-[backdrop-filter]:dark:bg-black/30"
      >
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent h-9 px-4 rounded-full text-sm font-medium text-foreground/80 transition-all duration-300 cursor-pointer hover:bg-primary/10 hover:text-primary active:scale-95 data-[active]:bg-white data-[active]:text-black data-[active]:shadow-sm dark:data-[active]:bg-white/10 dark:data-[active]:text-white"
                  )}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Divider */}
        <div className="h-5 w-px bg-foreground/10 mx-2" />

        {/* Auth Button */}
        <div>
          {user ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="w-9 h-9 rounded-full text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all duration-300 active:scale-95"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAuthOpen(true)}
              className="w-9 h-9 rounded-full text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all duration-300 active:scale-95"
              title="Admin Login"
            >
              <UserCircle2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      </nav>

      <AdminAuth isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
};

export default Navigation;