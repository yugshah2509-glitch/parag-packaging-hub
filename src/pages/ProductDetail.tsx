import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProductBySlug, products } from "@/data/products";
import { ArrowLeft, ArrowRight, CheckCircle, Package } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="border-b border-border bg-muted/30 py-4">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-foreground">
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 md:py-16">
        <div className="container">
          <Link
            to="/products"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Product Image */}
            <div className="flex items-center justify-center rounded-2xl bg-muted p-8 md:p-12">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full max-h-96 w-full object-contain"
                />
              ) : (
                <Package className="h-48 w-48 text-muted-foreground/30" />
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {product.category}
                </span>
                <h1 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                  {product.name}
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Applications */}
              <div>
                <h2 className="mb-3 font-display text-lg font-semibold text-foreground">
                  Common Applications
                </h2>
                <ul className="space-y-2">
                  {product.applications.map((application) => (
                    <li key={application} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wholesale Notice */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm text-foreground">
                  <strong>Wholesale Only:</strong> Competitive bulk pricing available. 
                  Contact us for quantity-based quotations.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="flex-1">
                  <Link to={`/inquiry?product=${encodeURIComponent(product.name)}`}>
                    Request Bulk Inquiry
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-border py-12 md:py-16">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Related Products
              </h2>
              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                View all in {product.category}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
