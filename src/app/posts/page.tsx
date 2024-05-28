import AllPostSection from "@/components/blueprints/AllPostSection";
import Container from "@/components/elements/Container";

const page = () => {
  return (
    <main className="min-h-screen px-2 md:px-4">
      <Container>
        <AllPostSection />
      </Container>
    </main>
  );
};

export default page;
