import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTABanner } from "@/components/home/CTABanner";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <CTABanner />
    </Layout>
  );
};

export default Index;
