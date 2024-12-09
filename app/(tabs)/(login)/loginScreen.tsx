import React, {useState, useEffect} from 'react'
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text, TextInput } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useLogin } from '@/components/LoginContext';
import firestore, {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';


export default function LoginScreen() {
    
    const [username, setUsername] = useState('Username');
    const [password, setPassword] = useState('Password');
    const { loginStatus, changeLogin } = useLogin()

    const [userData, setUserData] = useState<FirebaseFirestoreTypes.DocumentData | null>(null);


    const getUser = async () => {
      const userDocument = await firestore().collection("users").doc('y5O1n6H5zkZHw0LtWNgu').get();
      console.log(userDocument);
      if (userDocument.exists) {
        setUserData(userDocument);
      }
    };

    useEffect(() => {
      getUser();
    }, []);
  

    function handleLogin() {
      changeLogin({ type: 'login' })
    }

    return (<View style={styles.container}>
                <Text style={styles.header}>Login to your account</Text>
                <TextInput style={styles.textInput} 
                    placeholder= {JSON.stringify(userData, null, 2)}//'Username'
                    onChangeText = {newUsername => setUsername(newUsername)}
                    editable = {true}>
                </TextInput>
                <TextInput style={styles.textInput} 
                    placeholder = 'Password'
                    onChangeText = {newPassword => setPassword(newPassword)}
                    editable = {true}>
                </TextInput>
                <Link href="/(tabs)" style={styles.button} asChild>
                  <TouchableOpacity style={styles.button} onPress={handleLogin}>
                      <Text style={styles.text}>Login</Text>
                  </TouchableOpacity>
                </Link>
                <Text style={styles.header}>Or Register</Text>
                <Link href="/(tabs)/(login)/registerScreen" style={styles.button} asChild>
                  <TouchableOpacity style={styles.button}>
                      <Text style={styles.text}>Register Here!</Text>
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
      borderRadius: 10
    }
  });
