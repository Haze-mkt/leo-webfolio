
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
    <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <Github className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((techItem, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
            >
              {techItem}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
