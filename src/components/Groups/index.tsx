import { useState, useEffect, use, useCallback } from "react";
import { FlatList } from "react-native";

import GroupCard from "../GroupCard";
import Header from "../Header";
import Highlight from "../Highlight";
import ListEmpty from "../ListEmpty";

import { Container } from "./Groups.styles";
import Button from "../Button";

import { Link, useFocusEffect } from "expo-router";
import groupsGetAll from "@/src/storage/group/groupsGetAll";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Link href="/newGroup" asChild>
        <Button title="Criar nova turma" />
      </Link>
    </Container>
  );
}
