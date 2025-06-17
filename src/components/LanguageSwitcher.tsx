import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "lucide-react";
import { toast } from "@/components/ui/sonner";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt-BR" ? "en" : "pt-BR";
    i18n.changeLanguage(newLang);
    
    // Show toast notification
    toast(
      newLang === "en" 
        ? "Language changed to English" 
        : "Idioma alterado para Português"
    );
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="flex items-center gap-2" 
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      <GlobeIcon className="h-4 w-4" />
      <span>{i18n.language === "pt-BR" ? "PT" : "EN"}</span>
    </Button>
  );
};