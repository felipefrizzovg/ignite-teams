import { FlatList } from "react-native";
import { useState } from "react";

import { Header } from "@/src/components/Header";
import { Highlight } from "@/src/components/Highlight";
import { ButtonIcon } from "@/src/components/ButtonIcon";
import { Input } from "@/src/components/Input";
import { PlayerCard } from "@/src/components/PlayerCard";
import { Filter } from "@/src/components/Filter";

import { Container, Form, HeaderList, NumberOfPlayers } from "./Players.styles";
import { ListEmpty } from "@/src/components/ListEmpty";
import { Button } from "@/src/components/Button";

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

      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item}
            onRemove={() => {}}
          />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
        ListEmptyComponent={() => (
          <ListEmpty 
          message="Não há pessoas nesse time"
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button 
        title="Remover Turma"
        type="SECONDARY"
      />

    </Container>
  );
}