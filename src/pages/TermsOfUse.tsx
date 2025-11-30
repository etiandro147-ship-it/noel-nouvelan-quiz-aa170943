import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
            Conditions d'Utilisation
          </h1>

          <Card className="shadow-card border-0">
            <CardContent className="p-8 md:p-12 space-y-6 text-foreground leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">1. Acceptation des Conditions</h2>
                <p>
                  En accédant et en utilisant ce site web, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et réglementations applicables. Si vous n'acceptez pas l'une de ces conditions, vous ne devez pas utiliser ce site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">2. Utilisation du Site</h2>
                <p>
                  Ce site est fourni à des fins informatives et éducatives concernant la gastronomie européenne. Vous vous engagez à utiliser le site de manière légale et à ne pas :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violer les droits de propriété intellectuelle</li>
                  <li>Transmettre des contenus illégaux ou nuisibles</li>
                  <li>Tenter d'accéder aux systèmes de manière non autorisée</li>
                  <li>Interférer avec le fonctionnement du site</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">3. Propriété Intellectuelle</h2>
                <p>
                  Tout le contenu présent sur ce site (textes, images, recettes, logos) est protégé par les droits d'auteur et appartient à Saveurs Européennes ou à ses concédants de licence. Toute reproduction non autorisée est interdite.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">4. Produits Numériques</h2>
                <p>
                  Les guides numériques et recettes disponibles à l'achat sont fournis "tels quels". Après l'achat, vous recevrez un accès numérique au contenu. Les remboursements sont gérés conformément à notre politique de remboursement disponible sur demande.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">5. Limitation de Responsabilité</h2>
                <p>
                  Saveurs Européennes ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser ce site. Les recettes sont fournies à titre informatif et doivent être adaptées selon vos besoins alimentaires et allergies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">6. Liens Externes</h2>
                <p>
                  Notre site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables du contenu ou des pratiques de confidentialité de ces sites externes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">7. Modifications</h2>
                <p>
                  Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications seront effectives dès leur publication sur le site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">8. Droit Applicable</h2>
                <p>
                  Ces conditions sont régies par le droit français. Tout litige sera soumis à la compétence exclusive des tribunaux français.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">9. Contact</h2>
                <p>
                  Pour toute question concernant ces conditions, contactez-nous à : <a href="mailto:contact@recettes.store" className="text-primary hover:underline">contact@recettes.store</a>
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

export default TermsOfUse;
