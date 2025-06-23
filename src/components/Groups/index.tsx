import { GroupCard } from "../GroupCard";
import { Header } from "../Header";
import { Highlight } from "../Highlight";

import { Container } from "./Groups.styles";

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />


      <GroupCard title="Galera do Ignite"  />
    </Container>
  );
}