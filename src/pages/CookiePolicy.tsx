import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
            Politique de Cookies
          </h1>

          <Card className="shadow-card border-0">
            <CardContent className="p-8 md:p-12 space-y-6 text-foreground leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Qu'est-ce qu'un Cookie ?</h2>
                <p>
                  Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences sur une période donnée.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Comment Utilisons-nous les Cookies ?</h2>
                <p>
                  Nous utilisons des cookies pour :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Assurer le bon fonctionnement du site</li>
                  <li>Mémoriser vos préférences de navigation</li>
                  <li>Analyser le trafic et l'utilisation du site</li>
                  <li>Améliorer votre expérience utilisateur</li>
                  <li>Mesurer l'efficacité de nos campagnes publicitaires</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Types de Cookies Utilisés</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Cookies Essentiels</h3>
                    <p>
                      Ces cookies sont nécessaires au fonctionnement du site. Ils permettent des fonctionnalités de base comme la navigation et l'accès aux zones sécurisées.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Cookies de Performance</h3>
                    <p>
                      Ces cookies collectent des informations sur la façon dont vous utilisez notre site (pages visitées, temps passé). Ces données sont anonymes et utilisées uniquement pour améliorer le site.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Cookies de Fonctionnalité</h3>
                    <p>
                      Ces cookies permettent au site de mémoriser vos choix (langue, région) pour vous offrir une expérience personnalisée.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">4. Cookies Publicitaires</h3>
                    <p>
                      Ces cookies sont utilisés pour afficher des publicités pertinentes. Ils limitent également le nombre de fois où vous voyez une publicité et mesurent l'efficacité des campagnes.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Cookies Tiers</h2>
                <p>
                  Nous utilisons des services tiers qui peuvent placer leurs propres cookies :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics (analyse du trafic)</li>
                  <li>Google Ads (publicité)</li>
                  <li>Hotmart (traitement des paiements)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Gestion des Cookies</h2>
                <p>
                  Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et paramétrer la plupart des navigateurs pour qu'ils les bloquent.
                </p>
                <p>
                  Cependant, si vous faites cela, vous devrez peut-être ajuster manuellement certaines préférences à chaque visite, et certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Paramètres du Navigateur</h2>
                <p>
                  Pour gérer les cookies dans votre navigateur :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chrome : Paramètres → Confidentialité et sécurité → Cookies</li>
                  <li>Firefox : Options → Vie privée et sécurité → Cookies</li>
                  <li>Safari : Préférences → Confidentialité → Cookies</li>
                  <li>Edge : Paramètres → Confidentialité → Cookies</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Consentement</h2>
                <p>
                  En utilisant notre site, vous consentez à l'utilisation de cookies conformément à cette politique. Si vous n'acceptez pas l'utilisation de cookies, veuillez configurer votre navigateur en conséquence ou cesser d'utiliser le site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <p>
                  Pour toute question concernant notre politique de cookies : <a href="mailto:contact@recettes.store" className="text-primary hover:underline">contact@recettes.store</a>
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

export default CookiePolicy;
