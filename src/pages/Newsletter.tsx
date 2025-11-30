import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Merci !",
      description: "Vous allez recevoir nos recettes exclusives bientôt.",
    });
    
    setName("");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in duration-700">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Découvrez Recettes Européennes Spéciales pour Noël et le Nouvel An
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Entrez dans le climat des fêtes avec des idées de plats délicieux et traditionnels d'Europe
            </p>
          </div>

          <Card className="shadow-elegant border-2 border-christmas-red/20">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="space-y-4 text-center">
                <p className="text-lg text-foreground leading-relaxed">
                  Vous voulez apporter quelque chose de différent à votre repas de fin d'année ?
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Recevez des conseils exclusifs et des recettes européennes directement dans votre e-mail.
                </p>
                <p className="text-lg text-foreground leading-relaxed font-semibold">
                  Rien de compliqué, juste des idées pratiques et savoureuses qui impressionneront votre famille et vos amis.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Nom
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="festive"
                  size="xl"
                  className="w-full"
                >
                  ➡️ Je veux recevoir les recettes !
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Newsletter;
