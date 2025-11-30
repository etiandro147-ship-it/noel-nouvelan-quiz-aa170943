import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
            Politique de Confidentialité
          </h1>

          <Card className="shadow-card border-0">
            <CardContent className="p-8 md:p-12 space-y-6 text-foreground leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">1. Collecte des Données</h2>
                <p>
                  Nous collectons uniquement les informations nécessaires pour vous fournir nos services : nom, adresse e-mail, et données de navigation. Ces informations sont collectées lorsque vous vous inscrivez à notre newsletter ou utilisez nos services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">2. Utilisation des Données</h2>
                <p>
                  Vos données personnelles sont utilisées pour :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vous envoyer des recettes et du contenu gastronomique</li>
                  <li>Améliorer nos services et votre expérience utilisateur</li>
                  <li>Communiquer avec vous concernant nos produits et services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">3. Protection des Données</h2>
                <p>
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction. Vos données sont stockées sur des serveurs sécurisés et ne sont accessibles qu'au personnel autorisé.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">4. Partage des Données</h2>
                <p>
                  Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos informations uniquement avec des prestataires de services qui nous aident à exploiter notre site et à fournir nos services, et qui sont tenus de respecter la confidentialité de vos données.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">5. Vos Droits</h2>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification de vos données</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit de limitation du traitement</li>
                  <li>Droit d'opposition au traitement</li>
                  <li>Droit à la portabilité des données</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">6. Cookies</h2>
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience. Pour plus d'informations, consultez notre Politique de Cookies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">7. Contact</h2>
                <p>
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous à : <a href="mailto:contact@recettes.store" className="text-primary hover:underline">contact@recettes.store</a>
                </p>
              </section>

              <section className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Dernière mise à jour : Janvier 2025
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

export default PrivacyPolicy;
