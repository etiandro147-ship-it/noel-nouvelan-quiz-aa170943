import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
            Contact
          </h1>

          <Card className="shadow-elegant border-2 border-christmas-red/20">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  Nous sommes là pour vous aider ! Pour toute question, suggestion ou demande d'assistance, n'hésitez pas à nous contacter.
                </p>
              </div>

              <div className="bg-secondary/50 p-8 rounded-lg space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Support Client</h2>
                </div>
                
                <div className="text-center space-y-2">
                  <p className="text-muted-foreground">
                    Pour toute question ou assistance :
                  </p>
                  <a 
                    href="mailto:contact@recettes.store" 
                    className="text-2xl font-semibold text-primary hover:underline block"
                  >
                    contact@recettes.store
                  </a>
                </div>

                <div className="text-center text-sm text-muted-foreground pt-4">
                  <p>Nous répondons généralement sous 24-48 heures</p>
                </div>
              </div>

              <div className="space-y-4 text-center">
                <h3 className="text-xl font-semibold text-foreground">
                  Horaires de Support
                </h3>
                <p className="text-muted-foreground">
                  Du lundi au vendredi : 9h00 - 18h00 (CET)
                </p>
                <p className="text-sm text-muted-foreground">
                  Les e-mails reçus en dehors de ces horaires seront traités le jour ouvrable suivant.
                </p>
              </div>

              <div className="bg-gradient-christmas p-6 rounded-lg text-center">
                <p className="text-white font-semibold text-lg">
                  Saveurs Européennes
                </p>
                <p className="text-white/90 text-sm mt-2">
                  Votre guide pour les traditions culinaires européennes
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
