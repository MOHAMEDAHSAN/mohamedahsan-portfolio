
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200/50 px-6 py-3">
      <NavigationMenu className="mx-auto max-w-7xl">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={() => onNavigate("home")}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={() => onNavigate("experience")}
            >
              Experience
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navigation;
