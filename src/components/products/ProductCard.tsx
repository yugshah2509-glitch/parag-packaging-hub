import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1"
    >
      {/* Product Image Placeholder */}
      <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-muted overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Package className="h-20 w-20 text-muted-foreground/50 transition-transform duration-300 group-hover:scale-110" />
        )}
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

      {/* Applications Preview */}
      <div className="mb-4 flex flex-wrap gap-1">
        {product.applications.slice(0, 2).map((app) => (
          <span 
            key={app} 
            className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
          >
            {app}
          </span>
        ))}
        {product.applications.length > 2 && (
          <span className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
            +{product.applications.length - 2} more
          </span>
        )}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-1 text-sm font-medium text-primary">
        <span>View Details</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
