import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

type QuizStep = "intro" | "quiz" | "video" | "testimonials" | "result";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "Lorsque vous pensez au réveillon de Noël/Nouvel An, vous préférez quelque chose :",
      options: [
        { label: "A", text: "Rapide et simple" },
        { label: "B", text: "Traditionnel et chaleureux" },
        { label: "C", text: "Élégant et différent" },
        { label: "D", text: "Économique et pratique" },
      ],
    },
    {
      question: "Quel type de saveur choisissez-vous habituellement ?",
      options: [
        { label: "A", text: "Léger et frais" },
        { label: "B", text: "Fort et épicé" },
        { label: "C", text: "Sucré et festif" },
        { label: "D", text: "Classique et équilibré" },
      ],
    },
    {
      question: "Combien de temps aimez-vous passer à cuisiner ?",
      options: [
        { label: "A", text: "Le minimum possible" },
        { label: "B", text: "Le nécessaire pour que ce soit savoureux" },
        { label: "C", text: "J'aime soigner les détails" },
        { label: "D", text: "Cela dépend du plat" },
      ],
    },
    {
      question: "Lorsque vous voyez une nouvelle recette, qu'est-ce qui attire le plus votre attention ?",
      options: [
        { label: "A", text: "La facilité" },
        { label: "B", text: "La tradition" },
        { label: "C", text: "L'apparence" },
        { label: "D", text: "Le prix des ingrédients" },
      ],
    },
    {
      question: "Voulez-vous découvrir des recettes qui correspondent davantage à votre style ?",
      options: [
        { label: "A", text: "Oui" },
        { label: "B", text: "Bien sûr" },
        { label: "C", text: "Certainement" },
        { label: "D", text: "Je veux maintenant" },
      ],
    },
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep("video");
    }
  };

  const scrollToQuiz = () => {
    setCurrentStep("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const IntroSection = () => (
    <div className="min-h-screen bg-gradient-subtle py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Trouvez le Style de Recettes Européennes Qui Vous Correspond en Cette Fin d'Année
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Traditions culinaires européennes pour Noël et le Nouvel An
          </p>
        </div>

        {/* Content Section */}
        <Card className="shadow-card border-0">
          <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              Certaines recettes sont plus légères, d'autres plus traditionnelles, et chacune apporte une atmosphère propre à votre table.
            </p>
            
            <p className="text-foreground">
              C'est pourquoi nous avons créé un questionnaire simple qui vous aide à identifier quel style de recettes européennes correspond le mieux à vos goûts et à l'ambiance que vous souhaitez créer pour vos célébrations.
            </p>
            
            <p className="text-foreground">
              Les réponses n'ont ni raison ni tort — ce ne sont que des préférences qui aident à indiquer quel type de recette vous correspond le mieux. Cela peut être quelque chose d'élégant, de simple, de traditionnel ou de créatif.
            </p>
            
            <p className="text-foreground">
              L'objectif est d'inspirer et de faciliter les choix, en apportant uniquement des suggestions utiles et pratiques.
            </p>
            
            <p className="text-foreground font-semibold">
              À la fin du questionnaire, vous recevrez une recommandation basée sur votre style culinaire. C'est un moyen rapide d'explorer de nouvelles idées et de trouver des plats qui ont du sens pour vous en ce moment.
            </p>
            
            <p className="text-foreground">
              Rien de complexe, rien de technique — juste une expérience amusante et informative.
            </p>
            
            <p className="text-muted-foreground italic text-base">
              Le questionnaire prend moins d'une minute et est disponible ci-dessous. Faites défiler jusqu'à la fin pour commencer.
            </p>
          </CardContent>
        </Card>

        {/* CTA Button */}
        <div className="text-center pt-8">
          <Button
            variant="festive"
            size="xl"
            onClick={scrollToQuiz}
            className="group"
          >
            Commencer
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );

  const QuizSection = () => (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Quel est Votre Style de Recettes Européennes pour la Fin d'Année ?
          </h2>
          <p className="text-muted-foreground">
            Question {currentQuestion + 1} sur {questions.length}
          </p>
        </div>

        <Card className="shadow-elegant border-2">
          <CardContent className="p-8 md:p-10 space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option) => (
                <Button
                  key={option.label}
                  variant="quiz"
                  size="lg"
                  onClick={() => handleAnswer(option.label)}
                  className="w-full h-auto py-4 px-6"
                >
                  <span className="font-bold text-primary mr-3">{option.label})</span>
                  <span className="flex-1">{option.text}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-gradient-festive h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );

  const VideoSection = () => (
    <div className="min-h-screen bg-gradient-subtle py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700">
        <Card className="shadow-card border-0">
          <CardContent className="p-8 md:p-12 space-y-8">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Pour faciliter votre expérience, nous avons préparé une courte vidéo expliquant de manière simple pour que vous compreniez mieux le processus avant de continuer :
            </p>

            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-elegant">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IGFencMpVmI"
                title="Vidéo explicative"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>

            <div className="text-center pt-6">
              <Button
                variant="festive"
                size="xl"
                onClick={() => setCurrentStep("testimonials")}
                className="group"
              >
                Continuer
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const TestimonialsSection = () => (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Ce que d'Autres Personnes Ont Dit Après Avoir Reçu Leurs Suggestions Gastronomiques
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "C'était la première fois que je préparais des plats européens pour Noël. Les recettes sont simples et apportent une touche spéciale.",
            "J'ai aimé l'expérience ! Le quiz m'a aidé à découvrir des options qui correspondent à notre famille.",
            "J'ai trouvé ça pratique et amusant. Les suggestions semblent parfaites pour créer un moment différent en fin d'année.",
            "J'ai utilisé l'une des recettes lors d'un dîner et tout le monde a commenté la saveur ! Je suis déjà enthousiaste à l'idée de l'essayer à Noël.",
          ].map((testimonial, index) => (
            <Card key={index} className="shadow-card border-l-4 border-l-primary">
              <CardContent className="p-6">
                <p className="text-foreground italic leading-relaxed">"{testimonial}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-elegant bg-muted/30">
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground leading-relaxed">
              Ces commentaires représentent l'expérience de personnes qui aiment préparer des repas spéciaux en cette période et ont trouvé dans le quiz une façon légère de découvrir de nouvelles saveurs.
            </p>
          </CardContent>
        </Card>

        <div className="text-center pt-6">
          <Button
            variant="festive"
            size="xl"
            onClick={() => setCurrentStep("result")}
            className="group"
          >
            Voir Ma Recommandation
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );

  const ResultSection = () => (
    <div className="min-h-screen bg-gradient-subtle py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Vous y Êtes Presque ! 🎄✨
          </h2>
          <p className="text-2xl md:text-3xl text-primary font-semibold">
            Voici Votre Recommandation Personnalisée
          </p>
        </div>

        <Card className="shadow-elegant border-2 border-primary/20">
          <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              En fonction de vos réponses, nous avons compris que vous aimez préparer des repas spéciaux, mais que vous appréciez également la praticité et les recettes qui créent une ambiance chaleureuse lors des fêtes de fin d'année.
            </p>
            
            <p className="text-foreground">
              C'est pourquoi nous avons mis à disposition le guide numérique <span className="font-bold text-primary">"Saveurs Européennes de Noël et du Nouvel An"</span>, avec des recettes classiques et simples de la cuisine européenne pour rendre votre table plus spéciale de manière légère et accessible.
            </p>
            
            <div className="bg-secondary/50 p-6 rounded-lg border-2 border-accent/30">
              <p className="text-foreground font-semibold">
                En ce moment, il nous reste encore 5 exemplaires numériques disponibles avec des conditions spéciales — une façon de garantir l'accès à ceux qui recherchent vraiment l'inspiration gastronomique en cette période festive.
              </p>
            </div>
            
            <p className="text-foreground">
              Si vous souhaitez en profiter et recevoir le guide complet maintenant, cliquez sur le bouton ci-dessous :
            </p>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <a
            href="https://pay.hotmart.com/C103196835H?off=j4ozfr2h&checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="festive"
              size="xl"
              className="text-lg px-16 py-8 h-auto"
            >
              Je Veux
            </Button>
          </a>
          <p className="text-muted-foreground text-sm">
            Ainsi, vous accédez directement à la page d'accès et pouvez commencer dès aujourd'hui à explorer de nouvelles recettes pour Noël et le Nouvel An.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {currentStep === "intro" && <IntroSection />}
      {currentStep === "quiz" && <QuizSection />}
      {currentStep === "video" && <VideoSection />}
      {currentStep === "testimonials" && <TestimonialsSection />}
      {currentStep === "result" && <ResultSection />}

      <Footer />
    </div>
  );
};

export default Index;
