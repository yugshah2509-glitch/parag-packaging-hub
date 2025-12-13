import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/data/products";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Package, Shield, Truck } from "lucide-react";

const Inquiry = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get("product") || "";
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(preselectedProduct);

  useEffect(() => {
    if (preselectedProduct) {
      setSelectedProduct(preselectedProduct);
    }
  }, [preselectedProduct]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Our team will contact you within 24 hours with a quotation.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setSelectedProduct("");
  };

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Request Bulk Quote
            </h1>
            <p className="text-lg text-primary-foreground/85">
              Fill out the form below with your requirements. Our team will provide 
              you with competitive wholesale pricing within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Benefits Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              <h2 className="font-display text-xl font-bold text-foreground">
                Why Request a Quote?
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    icon: Package,
                    title: "Bulk Pricing",
                    description: "Get special wholesale rates on volume orders.",
                  },
                  {
                    icon: Shield,
                    title: "Quality Assured",
                    description: "All products meet industrial quality standards.",
                  },
                  {
                    icon: Truck,
                    title: "Pan India Delivery",
                    description: "Reliable logistics to your doorstep.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Quick Response",
                    description: "Receive quotation within 24 hours.",
                  },
                ].map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Wholesale Notice */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm text-foreground">
                  <strong>Note:</strong> We cater exclusively to wholesale and bulk buyers. 
                  Minimum order quantities apply based on product type.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8 lg:col-span-2">
              <h2 className="mb-6 font-display text-xl font-bold text-foreground">
                Inquiry Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Contact Info */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      required
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="business@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Product Selection */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="product">Product Interested In *</Label>
                    <Select
                      value={selectedProduct}
                      onValueChange={setSelectedProduct}
                      required
                    >
                      <SelectTrigger id="product">
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem key={product.id} value={product.name}>
                            {product.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity Required *</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      required
                      placeholder="e.g., 100 rolls, 50 boxes"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Special Requirements (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Any specific requirements, dimensions, or questions..."
                    rows={4}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting this form, you agree to be contacted by our sales team 
                  regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Inquiry;
