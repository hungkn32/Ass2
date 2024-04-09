import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAd7kfaZFklxpDs04oqQag8qTlhSLJWOoE",
    authDomain: "md18306-firebasee.firebaseapp.com",
    projectId: "md18306-firebasee",
    storageBucket: "md18306-firebasee.appspot.com",
    messagingSenderId: "682395253463",
    appId: "1:682395253463:web:6dbc2d1bbd196d0bcece92"
  };

const app = initializeApp(firebaseConfig);

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Navigate to the next screen after successful login
                navigation.navigate('bottomnav');
            }
        });

        return () => unsubscribe();
    }, [auth, navigation]);

    const handleAuthentication = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in successfully!');
        } catch (error) {
            console.error('Authentication error:', error.message);
        }
    };

    const handleSignUp = () => {
        navigation.navigate('Signup');
    };

    return (
        <View style={styles.container}>
          
            <View style={styles.border}>
                <Text style={{ fontSize: 40, color: 'black', marginBottom: 40 }}>ManShop</Text>
                <View>
                    <View>
                        <TextInput
                            placeholder='Username'
                            style={styles.input}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>
                    <View>
                        <TextInput
                            placeholder='Password'
                            onChangeText={text => setPassword(text)}
                            style={styles.input}
                            secureTextEntry
                        />
                    </View>
                    <Text style={styles.forgot}>Forgot password?</Text>
                    <TouchableOpacity style={styles.button} onPress={handleAuthentication}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', margin: 20 }}>
                        <Text>Do not have an account?</Text>
                        <Text onPress={handleSignUp} style={{ fontStyle: 'italic', marginLeft: 3 }}>Sign up Now</Text>
                    </View>
                    <Text style={{ textAlign: 'center', margin: 20 }}>OR</Text>
                    <TouchableOpacity style={{ width: 300, height: 40, backgroundColor: 'white', borderRadius: 5, borderWidth: 1, borderColor: 'black', padding: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 40, height: 30 }} source={{ uri: 'https://img.idesign.vn/2023/02/idesign_logogg_1.jpg' }} />
                            <Text style={{ marginTop: 5, textAlign: 'center', marginLeft: 40 }}>Sign In with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0FFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'cyan',
        width: '100%',
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    button: {
        backgroundColor: '#007bff',
        width: 300,
        borderRadius: 5,
        paddingVertical: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgot: {
        marginLeft: 180,
        marginBottom: 20
    }
});
