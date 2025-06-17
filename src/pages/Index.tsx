import { ContactForm } from "@/components/ContactForm";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { Code, Database, Globe, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Index = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { 
      icon: Code, 
      title: t('skills.frontend.title', "Frontend Development"), 
      description: t('skills.frontend.description', "React, TypeScript, Tailwind CSS") 
    },
    { 
      icon: Database, 
      title: t('skills.backend.title', "Backend Development"), 
      description: t('skills.backend.description', "Node.js, Python, PHP, SQL") 
    },
    { 
      icon: Globe, 
      title: t('skills.web.title', "Web Technologies"), 
      description: t('skills.web.description', "REST APIs, Docker") 
    },
    { 
      icon: Smartphone, 
      title: t('skills.responsive.title', "Responsive Design"), 
      description: t('skills.responsive.description', "Mobile-first, Cross-browser") 
    }
  ];

  const projects = [
    {
      title: t('projects.servimaq.title', "Servimaq Site"),
      description: t('projects.servimaq.description', "Landing page with React and Node.js"),
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "TypeScript", "Node.js"]
    },
    {
      title: t('projects.harmonyhawk.title', "Harmony Hawk - Musical Note Analyzer"),
      description: t('projects.harmonyhawk.description', "Real-time musical note analysis tool"),
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "AI"]
    },
    {
      title: t('projects.dashboard.title', "Data Analytics Dashboard"),
      description: t('projects.dashboard.description', "Interactive dashboard for business intelligence"),
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('name', "Leonardo Rohrbacher")}
            </h1>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.about', "About")}
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.skills', "Skills")}
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.projects', "Projects")}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.contact', "Contact")}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t('hero.title', "Leonardo Rohrbacher")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              {t('hero.role', "Full Stack Developer")}
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              {t('hero.description', "Crafting beautiful, scalable web applications with modern technologies. Passionate about creating exceptional user experiences and robust backend solutions.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection('projects')} 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t('hero.viewWork', "View My Work")}
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline" 
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                {t('hero.getInTouch', "Get In Touch")}
              </Button>
            </div>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('about.title', "About Me")}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.paragraph1', "I'm a passionate full stack developer with expertise in modern web technologies. I love building applications that solve real-world problems and provide exceptional user experiences.")}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.paragraph2', "With experience in both frontend and backend development, I bring ideas to life through clean, efficient code and thoughtful design. I'm always eager to learn new technologies and tackle challenging projects.")}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t('about.whatIDo', "What I Do")}</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {t('about.skills.frontend', "Frontend Development (React, TypeScript)")}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {t('about.skills.backend', "Backend Development (Node.js, Python)")}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {t('about.skills.database', "Database Design & Management")}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {t('about.skills.uiux', "UI/UX Design & Implementation")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('skills.title', "Skills & Expertise")}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('skills.description', "Here are the technologies and tools I work with to bring ideas to life")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('projects.title', "Featured Projects")}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('projects.description', "A selection of projects that showcase my skills and passion for development")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('contact.title', "Get In Touch")}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.description', "Ready to work together? I'd love to hear about your project and discuss how we can bring your ideas to life.")}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {t('name', "Leonardo Rohrbacher")}
          </h3>
          <p className="text-gray-400 mb-6">{t('footer.role', "Full Stack Developer")}</p>
          <SocialLinks />
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
            <p>{t('footer.copyright', "© 2025 Leonardo Rohrbacher. All rights reserved.")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;