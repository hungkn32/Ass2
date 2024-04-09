import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged  } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAd7kfaZFklxpDs04oqQag8qTlhSLJWOoE",
  authDomain: "md18306-firebasee.firebaseapp.com",
  projectId: "md18306-firebasee",
  storageBucket: "md18306-firebasee.appspot.com",
  messagingSenderId: "682395253463",
  appId: "1:682395253463:web:6dbc2d1bbd196d0bcece92"
};

const app = initializeApp(firebaseConfig);

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully!');
    } catch (error) {
      console.error('Sign up error:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title='Register' onPress={handleSignUp} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    width: 300,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: '#fff',
  }
});
