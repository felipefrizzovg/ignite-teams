import { useState } from "react";
import { FlatList } from "react-native";

import { GroupCard } from "../GroupCard";
import { Header } from "../Header";
import { Highlight } from "../Highlight";

import { Container } from "./Groups.styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera do Ignite']);

  return (
    <Container>
      <Header />

      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item}  
            />
        )}
      />
      
    </Container>
  );
}