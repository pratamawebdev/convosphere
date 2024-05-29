import AllUserSection from "@/components/blueprints/AllUserSection";
import Container from "@/components/elements/Container";

const page = () => {
  return (
    <main className="min-h-screen px-2 md:px-4">
      <Container>
        <AllUserSection />
      </Container>
    </main>
  );
};

export default page;
