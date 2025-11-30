import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, BookOpen } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
            À Propos de Nous
          </h1>

          <Card className="shadow-card border-0">
            <CardContent className="p-8 md:p-12 space-y-8 text-foreground leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Notre Mission</h2>
                <p className="text-lg">
                  Saveurs Européennes est né d'une passion pour la gastronomie européenne et le désir de partager les traditions culinaires qui font la richesse des fêtes de fin d'année à travers l'Europe.
                </p>
              </section>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="shadow-elegant border-l-4 border-l-christmas-red">
                  <CardContent className="p-6 space-y-3">
                    <Heart className="w-10 h-10 text-christmas-red" />
                    <h3 className="font-semibold text-lg">Passion</h3>
                    <p className="text-muted-foreground">
                      Nous aimons la cuisine et les traditions qui créent des moments inoubliables en famille
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant border-l-4 border-l-christmas-green">
                  <CardContent className="p-6 space-y-3">
                    <Globe className="w-10 h-10 text-christmas-green" />
                    <h3 className="font-semibold text-lg">Diversité</h3>
                    <p className="text-muted-foreground">
                      Nous célébrons la richesse culinaire de toute l'Europe
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant border-l-4 border-l-christmas-gold">
                  <CardContent className="p-6 space-y-3">
                    <BookOpen className="w-10 h-10 text-christmas-gold" />
                    <h3 className="font-semibold text-lg">Partage</h3>
                    <p className="text-muted-foreground">
                      Nous transmettons des recettes et des savoirs accessibles à tous
                    </p>
                  </CardContent>
                </Card>
              </div>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Notre Histoire</h2>
                <p>
                  Tout a commencé avec l'idée simple de rendre les traditions culinaires européennes accessibles à tous. Nous avons rassemblé des recettes authentiques, des astuces pratiques et des histoires fascinantes pour créer un guide complet qui inspire et facilite la préparation des fêtes.
                </p>
                <p>
                  Notre équipe de passionnés de gastronomie travaille continuellement pour découvrir et partager les meilleures recettes traditionnelles, adaptées aux cuisines modernes sans perdre leur authenticité.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Ce Que Nous Offrons</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Des guides numériques complets de recettes européennes</li>
                  <li>Des conseils pratiques pour réussir vos plats de fêtes</li>
                  <li>Des histoires et curiosités sur les traditions culinaires</li>
                  <li>Un accompagnement pour découvrir votre style gastronomique</li>
                  <li>Du contenu exclusif et des recettes inédites</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Nos Valeurs</h2>
                <p>
                  Nous croyons que la cuisine est bien plus que de la nourriture — c'est un moyen de créer des liens, de célébrer ensemble et de perpétuer des traditions. Nous nous engageons à :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respecter l'authenticité des recettes traditionnelles</li>
                  <li>Rendre la gastronomie accessible à tous les niveaux</li>
                  <li>Promouvoir la diversité culturelle européenne</li>
                  <li>Fournir un contenu de qualité et vérifiable</li>
                  <li>Accompagner nos utilisateurs avec bienveillance</li>
                </ul>
              </section>

              <div className="bg-gradient-christmas p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Rejoignez Notre Communauté
                </h2>
                <p className="text-white/90 text-lg">
                  Découvrez des saveurs authentiques et créez des moments inoubliables pour vos fêtes de fin d'année
                </p>
              </div>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <p>
                  Pour toute question ou suggestion : <a href="mailto:contact@recettes.store" className="text-primary hover:underline">contact@recettes.store</a>
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
