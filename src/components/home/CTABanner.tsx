import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-16 md:py-24 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Place Your Bulk Order?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/85">
            Get competitive wholesale pricing on industrial packaging tapes. 
            Our team is ready to assist with your requirements.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/inquiry" className="gap-2">
                <Phone className="h-4 w-4" />
                Request Bulk Quote
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/contact" className="gap-2">
                Contact Sales Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
