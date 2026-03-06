import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";
import { PopularItems } from "@/components/PopularItems";
import { WhyChickRepublic } from "@/components/WhyChickRepublic";
import { SignatureCombos } from "@/components/SignatureCombos";
import { OrderFlow } from "@/components/OrderFlow";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CTABanner } from "@/components/CTABanner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PopularItems />
      <WhyChickRepublic />
      <SignatureCombos />
      <OrderFlow />
      <ReviewsSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  );
}
