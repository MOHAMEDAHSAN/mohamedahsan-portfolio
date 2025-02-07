
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-sm border-b border-primary/10 px-6 py-3"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(250, 250, 250, 0.8),
            rgba(250, 250, 250, 0.8)
          ),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 50 C20 40, 40 60, 60 50 S80 40, 100 50' fill='none' stroke='%23D72638' stroke-width='3' stroke-opacity='0.3'/%3E%3Cpath d='M0 60 C20 50, 40 70, 60 60 S80 50, 100 60' fill='none' stroke='%232563EB' stroke-width='3' stroke-opacity='0.3'/%3E%3C/svg%3E")
        `,
        backgroundSize: "400px auto",
        backgroundPosition: "center",
      }}
    >
      <NavigationMenu className="mx-auto max-w-7xl">
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
              onClick={() => onNavigate("skills")}
            >
              Skills
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navigation;

