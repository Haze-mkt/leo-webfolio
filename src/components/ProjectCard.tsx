
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
}

export const ProjectCard = ({ title, description, image, tech }: ProjectCardProps) => {
  return (
    <Card className="bg-stone-900/80 backdrop-blur-sm border-2 border-amber-600/40 shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105 group overflow-hidden relative">
      {/* Gothic corner decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-amber-500 z-10"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-amber-500 z-10"></div>
      
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 filter sepia-[0.3] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button size="sm" className="h-8 w-8 p-0 bg-amber-700 hover:bg-amber-600 border border-amber-500">
              <Github className="w-4 h-4" />
            </Button>
            <Button size="sm" className="h-8 w-8 p-0 bg-amber-700 hover:bg-amber-600 border border-amber-500">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 relative">
        {/* Bottom corner decorations */}
        <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-amber-500"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-amber-500"></div>
        
        <h3 className="text-xl font-semibold mb-2 text-amber-400 font-serif tracking-wide">{title}</h3>
        <p className="text-stone-300 text-sm mb-4 leading-relaxed font-serif">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((techItem, index) => (
            <Badge 
              key={index} 
              className="bg-amber-800/50 text-amber-300 hover:bg-amber-700/50 transition-colors border border-amber-600/50 font-serif"
            >
              {techItem}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
