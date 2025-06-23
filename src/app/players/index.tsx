import { Header } from "@/src/components/Header";
import { Highlight } from "@/src/components/Highlight";
import { ButtonIcon } from "@/src/components/ButtonIcon";
import { Input } from "@/src/components/Input";

import { Container, Form } from "./Players.styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input 
        placeholder="Nome da pessoa"
        autoCorrect={false}
        />
        <ButtonIcon 
          icon="add"
        />
      </Form>


    </Container>
  );
}