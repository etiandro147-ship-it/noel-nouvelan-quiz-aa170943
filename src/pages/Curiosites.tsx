import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Curiosites = () => {
  const facts = [
    {
      title: "En France, un dessert traditionnel peut rassembler jusqu'à 13 douceurs différentes",
      content: "Appelé Les Treize Desserts de Noël, ce rituel de Provence symbolise Jésus et les douze apôtres. On y retrouve généralement des fruits secs, des pains sucrés, du chocolat et des spécialités régionales."
    },
    {
      title: "Dans certains pays, le repas ne commence qu'après l'apparition de la première étoile",
      content: "En Pologne, par exemple, le dîner de Noël (Wigilia) débute seulement lorsque la première étoile est visible — symbole de l'étoile de Bethléem."
    },
    {
      title: "L'Italie possède un pain brioché devenu aussi célèbre que Noël lui-même",
      content: "Le Panettone, originaire de Milan, symbolise l'abondance. Aujourd'hui dégusté dans le monde entier, il conserve encore des variantes régionales très appréciées."
    },
    {
      title: "En Allemagne, la tradition de l'Avent définit toute l'ambiance de décembre",
      content: "Les Allemands célèbrent chaque dimanche de l'Avent avec des bougies, des pains artisanaux et des boissons chaudes comme le Glühwein, un vin chaud épicé."
    },
    {
      title: "Au Portugal, les plats sont simples mais pleins de signification",
      content: "La morue du réveillon n'est pas seulement un repas : c'est un héritage. Chaque famille possède souvent sa propre recette transmise depuis des générations."
    },
    {
      title: "En Suisse, la fondue symbolise le partage et la convivialité",
      content: "Lorsque la neige arrive, de nombreuses familles célèbrent la fin de l'année avec différentes fondues — au fromage ou au chocolat — toujours associées à la chaleur et à la réunion."
    },
    {
      title: "Les pays nordiques ont une forte tradition de fumage et de marinades",
      content: "En Suède, le gravlax (saumon mariné) est l'un des plats phares. En Norvège, la morue séchée et le rôti de porc sont des classiques de Noël."
    },
    {
      title: "En Espagne, le Nouvel An commence par un rituel culinaire unique",
      content: "Manger 12 raisins dans les 12 dernières secondes de l'année est une tradition populaire — un raisin pour chaque mois de chance."
    },
    {
      title: "En Belgique, les chocolats artisanaux accompagnent souvent les plats de fête",
      content: "Les chocolats sont incontournables pendant la saison, parfois même associés à certains mets salés."
    },
    {
      title: "En France, le plat principal varie, mais l'élégance reste essentielle",
      content: "Des plats comme le foie gras, les coquilles Saint-Jacques ou la truite aux herbes sont courants, alliant simplicité et raffinement."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              🎄 Faits Curieux sur les Gastronomies Européennes de Noël et du Nouvel An
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Traditions, saveurs et histoires qui rendent cette période unique
            </p>
          </div>

          <Card className="shadow-card border-0">
            <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
              <p className="text-foreground">
                La cuisine européenne entretient un lien profond avec les fêtes de fin d'année. Chaque pays célèbre à sa manière, avec des ingrédients symboliques, des méthodes anciennes et des plats qui transmettent des siècles de tradition.
              </p>
              <p className="text-foreground">
                Sur cette page, découvrez des curiosités légères et fascinantes qui montrent comment l'Europe transforme la cuisine en patrimoine culturel.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {facts.map((fact, index) => (
              <Card key={index} className="shadow-elegant border-l-4 border-l-christmas-red">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-christmas-gold flex-shrink-0 mt-1" fill="currentColor" />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground text-lg">
                        {index + 1}. {fact.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {fact.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-elegant bg-gradient-christmas border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                🎁 Vous avez aimé ces curiosités ?
              </h2>
              <p className="text-white/90 leading-relaxed text-lg">
                La gastronomie européenne est riche en détails, en histoire et en saveurs uniques. Découvrir ces traditions, c'est voyager sans quitter sa cuisine et trouver de nouvelles inspirations pour vos propres célébrations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Curiosites;
