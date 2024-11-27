import {Text, View, StyleSheet, FlatList, Button, Alert } from "react-native";

export default function Messages() {
  const messages = [
    { id: "1", user: "Keyreel", message: "give me the steam" },
    { id: "2", user: "Kieral", message: "get a skate" },
    { id: "3", user: "Kirill", message: "blyat" },
    { id: "4", user: "Kyle", message: "porn" },
    { id: "5", user: "Kyall", message: "cheeze" },
    { id: "6", user: "Mateo", message: "let's rip some cheese" },
  ];

  const handleViewMessage = (message: any) => {//explicit any??
    Alert.alert("Message", message);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.user}>{item.user}</Text>
            <Button
              title="View"
              onPress={() => handleViewMessage(item.message)}
            />
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    paddingTop: 40, // Adds space at the top of the list
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
});