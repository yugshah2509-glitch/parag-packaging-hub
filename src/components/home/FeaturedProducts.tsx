import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";
import { products } from "@/data/products";

const featuredProducts = products.slice(0, 6);

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 gradient-warm">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Products
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Premium Packaging Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our comprehensive range of industrial tapes and packaging materials 
            designed for various applications and industries.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Icon Placeholder */}
              <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-muted">
                <Package className="h-16 w-16 text-muted-foreground/50 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Category Badge */}
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {product.category}
              </span>

              {/* Product Info */}
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {product.name}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {product.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-1 text-sm font-medium text-primary">
                <span>View Details</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/products" className="gap-2">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
