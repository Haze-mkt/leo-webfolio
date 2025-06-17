
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SkillCard = ({ icon: Icon, title, description }: SkillCardProps) => {
  return (
    <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
