import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import api from "../services/api";
import { useUsers } from "../context/UserContext"; // 👈 denne må du ha

export default function InputScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { fetchUsers } = useUsers(); // 👈 henter funksjonen for å oppdatere brukerlisten

  const handleSubmit = async () => {
    try {
      await api.post("/user", { name, email });
      setName("");
      setEmail("");
      fetchUsers(); // 👈 oppdater brukerlisten automatisk
    } catch (err) {
      console.error("FEIL ved opprettelse:", (err as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lag ny bruker:</Text>

      <TextInput
        placeholder="Navn"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="E-post"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Opprett</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
