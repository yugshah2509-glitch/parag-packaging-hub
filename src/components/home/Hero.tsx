import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Shield, Truck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 md:py-28 lg:py-36">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm animate-fade-up">
            <Package className="h-4 w-4" />
            <span>Trusted Wholesale Supplier Since 2005</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-up animation-delay-100">
            Secure Bonds with{" "}
            <span className="relative">
              Our Reliable Tapes
              <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-primary-foreground/30" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl animate-fade-up animation-delay-200">
            India's premier wholesale supplier of industrial packaging tapes and materials. 
            Quality products, bulk pricing, reliable delivery for your business needs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up animation-delay-300">
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/inquiry" className="gap-2">
                Request Bulk Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/products">
                Browse Products
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 animate-fade-up animation-delay-400">
            {[
              { icon: Package, label: "25+ Product Range", description: "Complete catalog" },
              { icon: Shield, label: "Quality Assured", description: "Industrial grade" },
              { icon: Truck, label: "Pan India Delivery", description: "Reliable logistics" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm"
              >
                <item.icon className="h-6 w-6 text-primary-foreground" />
                <span className="font-semibold text-primary-foreground">{item.label}</span>
                <span className="text-sm text-primary-foreground/70">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
