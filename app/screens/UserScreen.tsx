import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useUsers } from "../context/UserContext";
import api from "../services/api";

export default function UserScreen() {
  const { users, fetchUsers } = useUsers() as {
    users: { id: number; name: string; email: string }[];
    fetchUsers: () => void;
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/user/${id}`);
      fetchUsers();
    } catch (err) {
      console.log("FEIL ved sletting:", (err as Error).message);
    }
  };

  const renderItem = ({
    item,
  }: {
    item: { id: number; name: string; email: string };
  }) => (
    <View style={{ flex: 1 }}>
      <View style={styles.userCard}>
        <Text style={styles.userText}>🐢 {item.name}</Text>
        {/*         <Text style={styles.userText}>📧 {item.email}</Text>
         */}
        <Pressable onPress={() => handleDelete(item.id)}>
          <Text style={styles.deleteText}>🗑 Slett</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brukere</Text>
      <Text style={styles.count}>Antall brukere: {users.length}</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        onRefresh={fetchUsers}
        refreshing={false} // evt. legg til en `isLoading`-state
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    maxWidth: 400,
/*     alignSelf: "flex-start",
 */    backgroundColor: "#fff",
  },
  list: {
    paddingBottom: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  count: {
    fontSize: 16,
    marginBottom: 15,
  },
  userCard: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  userText: {
    fontSize: 16,
    marginBottom: 4,
  },
  deleteText: {
    color: "red",
    marginTop: 6,
  },
});
