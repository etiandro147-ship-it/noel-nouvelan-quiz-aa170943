import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-12 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-lg">Saveurs Européennes</h3>
            <p className="text-muted-foreground text-sm">
              Traditions culinaires européennes pour vos fêtes de fin d'année
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Support:</span>{" "}
              <a href="mailto:contact@recettes.store" className="hover:text-primary transition-colors">
                contact@recettes.store
              </a>
            </p>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Informations Légales</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/politique-de-confidentialite" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Politique de Confidentialité
              </Link>
              <Link to="/conditions-utilisation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Conditions d'Utilisation
              </Link>
              <Link to="/politique-cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Politique de Cookies
              </Link>
              <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Mentions Légales
              </Link>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Liens Rapides</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/a-propos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                À Propos
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/curiosites" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Curiosités
              </Link>
              <Link to="/newsletter" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Newsletter
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 — Contenu informatif et gastronomique
          </p>
        </div>
      </div>
    </footer>
  );
};
