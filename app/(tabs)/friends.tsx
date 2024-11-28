import {Text, View, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import { Link } from 'expo-router';

export default function Friends() {
    const friends = [
        { id: "1", user: "Keyreel"},
        { id: "2", user: "Kieral"},
        { id: "3", user: "Kirill"},
        { id: "4", user: "Kyle"},
        { id: "5", user: "Kyall"},
        { id: "6", user: "Mateo"},
        ];

    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <Link href="/(tabs)" asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Exit</Text>
                    </TouchableOpacity>
                </Link>
            </View>
            <FlatList
                data={friends}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={styles.row}>
                    <Text style={styles.user}>{item.user}</Text>
                </View>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  container2: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    margin: 0,
    paddingTop: 40
  },
  listContainer: {
    paddingTop: 0, // Adds space at the top of the list
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  user: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  button: {
    marginRight: 300,
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    margin: 10
  },
});