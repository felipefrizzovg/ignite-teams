import { Alert, FlatList } from "react-native";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";

import { AppError } from "@/src/utils/AppError";

import Header from "@/src/components/Header";
import Highlight from "@/src/components/Highlight";
import ButtonIcon from "@/src/components/ButtonIcon";
import Input from "@/src/components/Input";
import PlayerCard from "@/src/components/PlayerCard";
import Filter from "@/src/components/Filter";
import Button from "@/src/components/Button";
import ListEmpty from "@/src/components/ListEmpty";

import playerAddByGroup from "@/src/storage/players/playerAddByGroup";
import playersGetByGroupAndTeam from "@/src/storage/players/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@/src/storage/players/PlayerStorageDTO";

import { Container, Form, HeaderList, NumberOfPlayers } from "./Players.styles";

export default function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const params = useLocalSearchParams()
  const group = params.group as string;

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.');
    }

    const newPlayer = {
      name: newPlayerName,
      team
    }

    try {
      await playerAddByGroup(newPlayer, group);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        Alert.alert('Nova pessoa', 'Não foi possível adicionar uma nova pessoa.');
        console.log(error);
      } 
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas deste time.');
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title={group}
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input 
          placeholder="Nome da pessoa"
          onChangeText={setNewPlayerName}
          autoCorrect={false}
        />
        <ButtonIcon 
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList 
          data={['time a', 'time b', 'time c']}
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