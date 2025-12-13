import { Link } from "react-router-dom";
import { Package, Mail, MapPin, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-md">
                <Package className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight text-foreground">
                  Parag Packaging
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Wholesale Supply
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your trusted partner for high-quality industrial packaging tapes and materials. 
              Serving wholesale buyers across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/inquiry", label: "Request Quote" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Categories
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                "BOPP & Packaging Tapes",
                "Foam Tapes",
                "Double Sided Tapes",
                "Industrial Tapes",
                "Specialty Tapes",
              ].map((category) => (
                <Link
                  key={category}
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A-10 Shree Ghantakarna Mahavir Commercial Market, 
                  Near New Cloth Market, Sarangpur, Ahmedabad – 380002
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a 
                  href="mailto:parag_tapes@ymail.com" 
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  parag_tapes@ymail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  GST: 24ANAPS9336C1Z3
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Parag Packaging. All rights reserved. Wholesale Only.
          </p>
        </div>
      </div>
    </footer>
  );
}
