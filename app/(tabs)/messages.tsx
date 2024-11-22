import {Text, View, StyleSheet} from "react-native";

export default function Messages() {
    return (
        <View style={styles.container}>
            <Text> Messages Tab Holder </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
      marginHorizontal: 10,
      backgroundColor: 'gray',
      borderRadius: 10,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });