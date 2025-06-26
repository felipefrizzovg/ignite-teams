import { useState } from "react";

import { Container, Content, Icon } from "./NewGroup.styles";
import Header from "@/src/components/Header";
import Highlight from "@/src/components/Highlight";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { useRouter } from "expo-router";
import groupCreate from "@/src/storage/group/groupCreate";

export default function NewGroup() {
  const [group, setGroup] = useState("");
  const router = useRouter();

  async function handleNewGroup() {
    try {
      // if (group.trim().length === 0) {
      //   return alert('Informe o nome da turma');
      // }

      await groupCreate(group);

      router.push({
        pathname: "/players",
        params: { group },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}
