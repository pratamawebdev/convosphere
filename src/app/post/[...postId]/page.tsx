import DetailPostSection from "@/components/blueprints/DetailPostSection";
import Container from "@/components/elements/Container";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen px-2 md:px-4">
      <Container>
        <DetailPostSection />
      </Container>
    </main>
  );
};

export default page;
