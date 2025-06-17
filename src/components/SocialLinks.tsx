
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Instagram } from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/leonardo-rohrbacher/",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/leorohrba",
      color: "hover:text-gray-900"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/leo_rohrba",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="ghost"
          size="lg"
          asChild
          className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${link.color}`}
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <link.icon className="w-6 h-6" />
          </a>
        </Button>
      ))}
    </div>
  );
};
