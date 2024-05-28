import OurPostsSection from "@/components/blueprints/OurPostsSection";
import Container from "@/components/elements/Container";
import HeroSection from "@/components/blueprints/HeroSection";

const Page = () => {
  return (
    <main>
      <Container>
        <HeroSection />
        <OurPostsSection />
      </Container>
    </main>
  );
};

export default Page;
