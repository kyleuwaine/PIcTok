import React from 'react'
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text, TextInput } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Link } from 'expo-router'

export default function RegisterScreen() {
    const [username, setUsername] = React.useState('Set Username');
    const [password, setPassword] = React.useState('Set Password');

    return (<View style={styles.container}>
                <Text style={styles.header}>Register a new account</Text>
                <TextInput style={styles.textInput} 
                    value = {username}
                    onChangeText = {newUsername => setUsername(newUsername)}
                    editable = {true}>
                </TextInput>
                <TextInput style={styles.textInput} 
                    value = {password}
                    onChangeText = {newPassword => setPassword(newPassword)}
                    editable = {true}>
                </TextInput>
                <Link href="/(tabs)/(login)/LoginScreen" style={styles.button} asChild>
                  <TouchableOpacity style={styles.button}>
                      <Text style={styles.text}>Register</Text>
                  </TouchableOpacity>
                </Link>
            </View>);
}

const styles = StyleSheet.create({
    container: {
      top: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      marginHorizontal: 10,
      backgroundColor: 'gray',
      borderRadius: 10,
      margin: 20,
    },
    header: {
      marginTop: 50,
      textAlign: 'center',
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
      margin: 20,
    },
    text: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      margin: 20
    },
    textInput: {
      fontSize: 24,
      textAlign: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
      width: 200,
      margin: 20,
    }
  });