import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "./mode-toggle";
import { useState, useEffect } from "react";
import { 
  User, 
  Briefcase, 
  Code, 
  Mail, 
  FileText, 
  Download, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  Star,
  Eye,
  Filter,
  Calendar,
  Palette,
  Settings
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={`w-full flex justify-center items-center p-4 fixed top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg border-b border-zinc-200/50 dark:border-zinc-800/50" 
        : "bg-transparent"
    }`}>
      <Menubar className={`transition-all duration-300 border-2 ${
        isScrolled 
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-xl border-zinc-200/70 dark:border-zinc-700/70" 
          : "bg-white/95 dark:bg-black/95 backdrop-blur-sm border-zinc-200/50 dark:border-zinc-700/50"
      } hover:shadow-2xl hover:border-zinc-300/70 dark:hover:border-zinc-600/70`}>
        
        {/* Navigation Menu */}
        <MenubarMenu>
          <MenubarTrigger className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <User className="w-4 h-4" />
            Navigate
          </MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarItem onClick={() => scrollToSection("home")} className="cursor-pointer">
              <User className="w-4 h-4 mr-2" />
              Home
            </MenubarItem>
            <MenubarItem onClick={() => scrollToSection("about")} className="cursor-pointer">
              <FileText className="w-4 h-4 mr-2" />
              About
            </MenubarItem>
            <MenubarItem onClick={() => scrollToSection("projects")} className="cursor-pointer">
              <Briefcase className="w-4 h-4 mr-2" />
              Projects
            </MenubarItem>
            <MenubarItem onClick={() => scrollToSection("skills")} className="cursor-pointer">
              <Code className="w-4 h-4 mr-2" />
              Skills
            </MenubarItem>
            <MenubarItem onClick={() => scrollToSection("contact")} className="cursor-pointer">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Projects Menu */}
        <MenubarMenu>
          <MenubarTrigger className="flex items-center gap-2 text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <Briefcase className="w-4 h-4" />
            Projects
          </MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarSub>
              <MenubarSubTrigger>
                <Filter className="w-4 h-4 mr-2" />
                Filter by Tech
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>React Projects</MenubarItem>
                <MenubarItem>Vue Projects</MenubarItem>
                <MenubarItem>Node.js Projects</MenubarItem>
                <MenubarItem>Python Projects</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>All Projects</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarCheckboxItem>
              <Star className="w-4 h-4 mr-2" />
              Featured Only
            </MenubarCheckboxItem>
            <MenubarCheckboxItem>
              <Eye className="w-4 h-4 mr-2" />
              Show Demos
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem>
              <Calendar className="w-4 h-4 mr-2" />
              Sort by Date
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Resources Menu */}
        <MenubarMenu>
          <MenubarTrigger className="flex items-center gap-2 text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">
            <FileText className="w-4 h-4" />
            Resources
          </MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarItem>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
              <MenubarShortcut>⌘D</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <FileText className="w-4 h-4 mr-2" />
              View CV Online
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>
                <ExternalLink className="w-4 h-4 mr-2" />
                Social Links
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Profile
                </MenubarItem>
                <MenubarItem>
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </MenubarItem>
                <MenubarItem>
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              <Mail className="w-4 h-4 mr-2" />
              Send Email
              <MenubarShortcut>⌘M</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Settings Menu */}
        <MenubarMenu>
          <MenubarTrigger className="flex items-center gap-2 text-sm font-medium hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarCheckboxItem checked>
              <Eye className="w-4 h-4 mr-2" />
              Animations
            </MenubarCheckboxItem>
            <MenubarCheckboxItem>
              <Palette className="w-4 h-4 mr-2" />
              Reduced Motion
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarRadioGroup value="auto">
              <MenubarRadioItem value="light">Light Theme</MenubarRadioItem>
              <MenubarRadioItem value="dark">Dark Theme</MenubarRadioItem>
              <MenubarRadioItem value="auto">Auto Theme</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>
              Reset Preferences
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Theme Toggle */}
        <MenubarMenu>
          <div className="flex items-center px-3">
            <ModeToggle />
          </div>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Navbar;