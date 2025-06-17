
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SkillCard = ({ icon: Icon, title, description }: SkillCardProps) => {
  return (
    <Card className="bg-stone-900/80 backdrop-blur-sm border-2 border-amber-600/40 shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
      {/* Gothic corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-amber-500"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-amber-500"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-amber-500"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-amber-500"></div>
      
      <CardContent className="p-6 text-center relative">
        <div className="mb-4 flex justify-center">
          <div className="p-4 bg-gradient-to-br from-amber-800 to-amber-700 border-2 border-amber-500 group-hover:from-amber-700 group-hover:to-amber-600 transition-all duration-300 relative">
            {/* Diamond shape background */}
            <div className="absolute inset-0 bg-amber-600/20 transform rotate-45"></div>
            <Icon className="w-8 h-8 text-amber-300 relative z-10" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-amber-400 font-serif tracking-wide">{title}</h3>
        <p className="text-stone-300 text-sm leading-relaxed font-serif">{description}</p>
      </CardContent>
    </Card>
  );
};
