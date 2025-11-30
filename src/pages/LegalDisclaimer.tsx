import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const LegalDisclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
            Mentions Légales
          </h1>

          <Card className="shadow-card border-0">
            <CardContent className="p-8 md:p-12 space-y-6 text-foreground leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Éditeur du Site</h2>
                <p>
                  <strong>Nom du site :</strong> Saveurs Européennes<br />
                  <strong>URL :</strong> www.recettes.store<br />
                  <strong>Email de contact :</strong> <a href="mailto:contact@recettes.store" className="text-primary hover:underline">contact@recettes.store</a>
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Hébergement</h2>
                <p>
                  Ce site est hébergé par un prestataire professionnel d'hébergement web, garantissant la sécurité et la disponibilité des données conformément aux normes en vigueur.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Propriété Intellectuelle</h2>
                <p>
                  L'ensemble du contenu présent sur ce site (textes, images, graphismes, logo, icônes, sons, logiciels) est la propriété exclusive de Saveurs Européennes, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
                </p>
                <p>
                  Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Saveurs Européennes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Limitation de Responsabilité</h2>
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible. Toutefois, Saveurs Européennes ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                </p>
                <p>
                  Les recettes et conseils culinaires sont fournis à titre informatif. Chaque utilisateur doit adapter les recettes en fonction de ses propres besoins alimentaires, allergies et préférences. Saveurs Européennes ne peut être tenu responsable de tout incident résultant de l'application des recettes proposées.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Protection des Données Personnelles</h2>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous à : <a href="mailto:contact@recettes.store" className="text-primary hover:underline">contact@recettes.store</a>
                </p>
                <p>
                  Pour plus d'informations, consultez notre <a href="/politique-de-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Cookies</h2>
                <p>
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Pour en savoir plus, consultez notre <a href="/politique-cookies" className="text-primary hover:underline">Politique de Cookies</a>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Liens Hypertextes</h2>
                <p>
                  Le site peut contenir des liens hypertextes vers d'autres sites. Saveurs Européennes n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou à leur politique de confidentialité.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Droit Applicable et Juridiction Compétente</h2>
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Médiation</h2>
                <p>
                  Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, Saveurs Européennes adhère au Service du Médiateur du e-commerce de la FEVAD (Fédération du e-commerce et de la vente à distance) dont les coordonnées sont les suivantes : Médiateur de la consommation FEVAD BP 20015 - 75362 PARIS CEDEX 8.
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

export default LegalDisclaimer;
