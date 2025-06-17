
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Instagram } from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/leonardo-rohrbacher",
      color: "hover:text-amber-400"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/leonardo-rohrbacher",
      color: "hover:text-amber-300"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/leonardo.rohrbacher",
      color: "hover:text-amber-500"
    }
  ];

  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="ghost"
          size="lg"
          asChild
          className={`p-4 border-2 border-amber-600/40 bg-stone-900/50 hover:bg-amber-700/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-amber-500 ${link.color} relative group`}
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            {/* Gothic corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-amber-500 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-amber-500 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-amber-500 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-amber-500 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <link.icon className="w-6 h-6" />
          </a>
        </Button>
      ))}
    </div>
  );
};
