
import { ContactForm } from "@/components/ContactForm";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Database, Globe, Smartphone, Crown, Castle } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { icon: Code, title: "Frontend Entwicklung", description: "React, TypeScript, Tailwind CSS" },
    { icon: Database, title: "Backend Entwicklung", description: "Node.js, Python, PostgreSQL" },
    { icon: Globe, title: "Web Technologien", description: "REST APIs, GraphQL, WebSockets" },
    { icon: Smartphone, title: "Responsive Design", description: "Mobile-first, Cross-browser" }
  ];

  const projects = [
    {
      title: "E-Commerce Plattform",
      description: "Vollständige E-Commerce-Lösung mit React und Node.js",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Aufgabenverwaltung App",
      description: "Echtzeit-kollaborative Aufgabenverwaltung mit moderner UI",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["TypeScript", "Express", "Socket.io"]
    },
    {
      title: "Datenanalyse Dashboard",
      description: "Interaktives Dashboard für Business Intelligence",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "React", "D3.js"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-stone-900 to-black text-stone-100">
      {/* Gothic Ornamental Header */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 shadow-lg"></div>
      
      {/* Navigation */}
      <nav className="fixed top-2 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-amber-600/30 shadow-2xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Crown className="w-8 h-8 text-amber-500" />
              <h1 className="text-2xl font-bold text-amber-400 font-serif tracking-wider">
                Leonardo Rohrbacher
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-stone-300 hover:text-amber-400 transition-colors font-serif tracking-wide border-b border-transparent hover:border-amber-400">Über Mich</button>
              <button onClick={() => scrollToSection('skills')} className="text-stone-300 hover:text-amber-400 transition-colors font-serif tracking-wide border-b border-transparent hover:border-amber-400">Fähigkeiten</button>
              <button onClick={() => scrollToSection('projects')} className="text-stone-300 hover:text-amber-400 transition-colors font-serif tracking-wide border-b border-transparent hover:border-amber-400">Projekte</button>
              <button onClick={() => scrollToSection('contact')} className="text-stone-300 hover:text-amber-400 transition-colors font-serif tracking-wide border-b border-transparent hover:border-amber-400">Kontakt</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Gothic Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Gothic Architecture Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-px h-full bg-amber-500"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-amber-500"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-amber-500"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-amber-500"></div>
        </div>
        
        <div className="container mx-auto text-center relative">
          <div className="animate-fade-in">
            {/* Gothic Ornamental Border */}
            <div className="mb-8 flex justify-center">
              <div className="border-2 border-amber-600 p-8 bg-stone-900/50 backdrop-blur-sm">
                <div className="border border-amber-500/50 p-6">
                  <Castle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-400 font-serif tracking-widest">
                    LEONARDO
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-300 font-serif tracking-wider">
                    ROHRBACHER
                  </h2>
                </div>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-amber-300 mb-4 font-serif tracking-wide">
              Vollstack Entwickler
            </p>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-8 font-serif leading-relaxed">
              Erschaffung schöner, skalierbarer Webanwendungen mit modernen Technologien. 
              Leidenschaftlich für außergewöhnliche Benutzererfahrungen und robuste Backend-Lösungen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection('projects')} 
                size="lg"
                className="bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-stone-100 px-8 py-3 border-2 border-amber-500 font-serif tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Meine Werke Betrachten
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline" 
                size="lg"
                className="border-2 border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-stone-900 px-8 py-3 font-serif tracking-wide transition-all duration-300 hover:scale-105 bg-stone-900/50"
              >
                Kontakt Aufnehmen
              </Button>
            </div>
            <SocialLinks />
          </div>
          
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-amber-500" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-stone-800/30 border-y border-amber-600/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-400 font-serif tracking-widest">ÜBER MICH</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-2 h-2 bg-amber-500 rotate-45"></div>
              <div className="w-2 h-2 bg-amber-500 rotate-45"></div>
              <div className="w-2 h-2 bg-amber-500 rotate-45"></div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 border-l-2 border-amber-600/30 pl-8">
                <p className="text-lg text-stone-300 leading-relaxed font-serif">
                  Ich bin ein leidenschaftlicher Vollstack-Entwickler mit Expertise in modernen Web-Technologien. 
                  Ich liebe es, Anwendungen zu erstellen, die reale Probleme lösen und außergewöhnliche Benutzererfahrungen bieten.
                </p>
                <p className="text-lg text-stone-300 leading-relaxed font-serif">
                  Mit Erfahrung sowohl in Frontend- als auch Backend-Entwicklung bringe ich Ideen durch 
                  sauberen, effizienten Code und durchdachtes Design zum Leben. Ich bin stets begierig darauf, 
                  neue Technologien zu erlernen und herausfordernde Projekte anzugehen.
                </p>
              </div>
              <div className="bg-gradient-to-br from-stone-800 to-stone-900 border-2 border-amber-600/30 p-8">
                <h3 className="text-2xl font-semibold mb-4 text-amber-400 font-serif tracking-wide">Was Ich Tue</h3>
                <ul className="space-y-3 text-stone-300">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-amber-500 mr-3" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                    Frontend Entwicklung (React, TypeScript)
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-amber-500 mr-3" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                    Backend Entwicklung (Node.js, Python)
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-amber-500 mr-3" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                    Datenbank Design & Management
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-amber-500 mr-3" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                    UI/UX Design & Implementierung
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
            <h2 className="text-4xl font-bold mb-4 text-amber-400 font-serif tracking-widest">FÄHIGKEITEN & EXPERTISE</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto font-serif">
              Hier sind die Technologien und Werkzeuge, mit denen ich Ideen zum Leben erwecke
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
      <section id="projects" className="py-20 px-6 bg-stone-800/30 border-y border-amber-600/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-400 font-serif tracking-widest">AUSGEWÄHLTE PROJEKTE</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto font-serif">
              Eine Auswahl von Projekten, die meine Fähigkeiten und Leidenschaft für die Entwicklung zeigen
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
            <h2 className="text-4xl font-bold mb-4 text-amber-400 font-serif tracking-widest">KONTAKT AUFNEHMEN</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto font-serif">
              Bereit zusammenzuarbeiten? Ich würde gerne von Ihrem Projekt hören und besprechen, wie wir Ihre Ideen zum Leben erwecken können.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Gothic Footer */}
      <footer className="bg-black border-t-2 border-amber-600 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Crown className="w-8 h-8 text-amber-500" />
            <h3 className="text-2xl font-bold text-amber-400 font-serif tracking-wider">
              Leonardo Rohrbacher
            </h3>
            <Crown className="w-8 h-8 text-amber-500" />
          </div>
          <p className="text-amber-300 mb-6 font-serif tracking-wide">Vollstack Entwickler</p>
          <SocialLinks />
          <div className="mt-8 pt-8 border-t border-amber-600/30 text-stone-400">
            <p className="font-serif">&copy; 2024 Leonardo Rohrbacher. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
