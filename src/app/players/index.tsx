import { FlatList } from "react-native";
import { useState } from "react";

import { Header } from "@/src/components/Header";
import { Highlight } from "@/src/components/Highlight";
import { ButtonIcon } from "@/src/components/ButtonIcon";
import { Input } from "@/src/components/Input";

import { Container, Form, HeaderList, NumberOfPlayers } from "./Players.styles";
import { Filter } from "@/src/components/Filter";

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<string[]>([]);

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

      <HeaderList>
        <FlatList 
          data={['Time A', 'Time B', 'Time C']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

    </Container>
  );
}