import { Header } from "@/src/components/Header";
import { Container, Content, Icon } from "./NewGroup.styles";
import { Highlight } from "@/src/components/Highlight";
import { Button } from "@/src/components/Button";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight 
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Button 
          title="Criar"
        />
      </Content>
    </Container>
  );
} 