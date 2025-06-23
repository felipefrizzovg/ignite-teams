import { useState } from "react";
import { FlatList } from "react-native";

import { GroupCard } from "../GroupCard";
import { Header } from "../Header";
import { Highlight } from "../Highlight";
import { ListEmpty } from "../ListEmpty";

import { Container } from "./Groups.styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

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
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      
    </Container>
  );
}