import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.form.successTitle', "Message sent successfully!"),
        description: t('contact.form.successDescription', "Thank you for your message. I'll get back to you soon."),
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                <User className="inline w-4 h-4 mr-2" />
                {t('contact.form.nameLabel', "Full Name")}
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                placeholder={t('contact.form.namePlaceholder', "Your full name")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                <Mail className="inline w-4 h-4 mr-2" />
                {t('contact.form.emailLabel', "Email Address")}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                placeholder={t('contact.form.emailPlaceholder', "your@email.com")}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
              <MessageSquare className="inline w-4 h-4 mr-2" />
              {t('contact.form.subjectLabel', "Subject")}
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              placeholder={t('contact.form.subjectPlaceholder', "What's this about?")}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              {t('contact.form.messageLabel', "Message")}
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
              placeholder={t('contact.form.messagePlaceholder', "Tell me about your project or idea...")}
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              t('contact.form.sending', "Sending...")
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {t('contact.form.sendMessage', "Send Message")}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};