import React from "react";
import { Outlet } from "react-router-dom";
import { Section, Container } from "../App.styled";

export default function MoviesPage() {
  return (
    <Section>
      <Container>
        <Outlet />
      </Container>
    </Section>
  );
}
