import { Layout } from "@/components/layout/Layout";
import { CTABanner } from "@/components/home/CTABanner";
import { Award, Factory, Users, TrendingUp, Target, Heart } from "lucide-react";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "25+", label: "Product Range" },
  { value: "500+", label: "Happy Clients" },
  { value: "Pan India", label: "Delivery Network" },
];

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "Every product meets strict industrial standards. We never compromise on quality, ensuring consistent performance across all batches.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    description: "Understanding your unique requirements and providing tailored solutions. Your success is our priority.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest pricing, transparent dealings, and building long-term relationships based on trust and mutual respect.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Continuously expanding our range with new products and technologies to meet evolving industry demands.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              About Parag Packaging
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              Your trusted partner for industrial packaging solutions. Building strong bonds 
              with reliable tapes since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 font-display text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Story
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Two Decades of Industrial Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2005 in Ahmedabad, Parag Packaging began as a small trading 
                  enterprise with a vision to provide quality packaging materials to local 
                  businesses. What started as a modest operation has grown into one of 
                  Gujarat's most trusted wholesale suppliers of industrial tapes.
                </p>
                <p>
                  Over the years, we have built strong relationships with manufacturers and 
                  clients alike, allowing us to offer an extensive range of products at 
                  competitive prices. Our deep understanding of the packaging industry and 
                  commitment to customer satisfaction has been the cornerstone of our growth.
                </p>
                <p>
                  Today, we serve hundreds of businesses across India – from small packaging 
                  units to large manufacturing facilities. Our comprehensive catalog includes 
                  over 25 types of industrial tapes and packaging materials, each selected 
                  for quality and reliability.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-xl" />
                <div className="relative grid grid-cols-2 gap-4 rounded-2xl bg-card p-6 shadow-card">
                  <div className="flex flex-col items-center justify-center rounded-xl bg-muted p-6">
                    <Factory className="mb-3 h-10 w-10 text-primary" />
                    <span className="text-center text-sm font-medium text-foreground">
                      Direct Factory Supply
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-xl bg-muted p-6">
                    <Users className="mb-3 h-10 w-10 text-primary" />
                    <span className="text-center text-sm font-medium text-foreground">
                      B2B Focused
                    </span>
                  </div>
                  <div className="col-span-2 flex flex-col items-center justify-center rounded-xl bg-primary p-6">
                    <span className="font-display text-2xl font-bold text-primary-foreground">
                      Since 2005
                    </span>
                    <span className="text-sm text-primary-foreground/80">
                      Serving Indian Industry
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Values
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              What Drives Us
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our core values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-card p-6 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default About;
