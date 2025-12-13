import { Factory, Award, Truck, Headphones, ShieldCheck, Boxes } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Direct Factory Supply",
    description: "Source directly from manufacturers, eliminating middlemen and ensuring competitive wholesale pricing.",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description: "All products meet strict industrial standards with proper certifications and quality assurance.",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description: "Reliable logistics network ensuring timely delivery across all major cities and industrial zones.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Expert team to assist with product selection, technical queries, and order management.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent Quality",
    description: "Every batch undergoes rigorous quality checks to ensure uniformity and performance.",
  },
  {
    icon: Boxes,
    title: "Bulk Order Specialists",
    description: "Equipped to handle large volume orders with customized packaging and scheduling.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Why Partner With Us
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Your Trusted Wholesale Partner
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            With over two decades of industry experience, we understand the demands 
            of modern packaging and supply chain requirements.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
