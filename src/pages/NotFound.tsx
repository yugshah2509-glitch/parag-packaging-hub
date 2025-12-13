import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="flex min-h-[60vh] items-center justify-center py-16">
        <div className="container">
          <div className="mx-auto max-w-md text-center">
            <div className="mb-6 text-8xl font-bold text-primary/20">404</div>
            <h1 className="mb-4 font-display text-2xl font-bold text-foreground">
              Page Not Found
            </h1>
            <p className="mb-8 text-muted-foreground">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/" className="gap-2">
                  <Home className="h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/products" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  View Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
