import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Friends() {
  const [searchText, setSearchText] = useState(""); // State for search input
  const allFriends = [ //will be queried
    { id: "1", user: "Keyreel" },
    { id: "2", user: "Kieral" },
    { id: "3", user: "Kirill" },
    { id: "4", user: "Kyle" },
    { id: "5", user: "Kyall" },
    { id: "6", user: "Mateo" },
  ];

  const [filteredFriends, setFilteredFriends] = useState(allFriends);

  

  const handleSearch = (text: any) => {
    setSearchText(text);
    const filtered = allFriends.filter((friend) =>
      friend.user.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredFriends(filtered);
  };

  return (
    <View style={styles.container1}>
      {/* Exit button*/}
      <View style={styles.container2}>
        <Link href="/(tabs)" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Exit</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Search */}
      <TextInput
        style={styles.searchInput}
        placeholder="Enter username"
        placeholderTextColor="gray"
        value={searchText}
        onChangeText={handleSearch}
      />

      { /* Filtered list*/ }
      <FlatList
        data={filteredFriends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.user}>{item.user}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  container2: {
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    margin: 0,
    paddingTop: 40,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    color: "#333",
  },
  listContainer: {
    paddingTop: 0,
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
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "gray",
    borderRadius: 10,
    margin: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    margin: 10,
  },
});
