import { NavigationContainer } from '@react-navigation/native'
import React, { Component, useEffect, useState } from 'react'
import { Button, Image, KeyboardAvoidingView, Text, TextInput, View } from 'react-native'
import { auth } from '../firebase';
import styles from './styles'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect (() => {
        const unSubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Home")
            }
        });

        return unSubscribe;
    }, [])

    const signIn =() => {
        auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error))
    }
        return (
            <KeyboardAvoidingView behavior="position" enabled style={{flex:1}}>
                
                    <Image style={styles.loginImage} source = {require("../assets/images/logoapp.png")} />
                
                <View>
                    <TextInput 
                        style={styles.email}
                        autoFocus
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.password}
                        secureTextEntry= {true}
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        onSubmitEditing={signIn}
                    />
                    <Button title="Sign In" onPress={signIn} />
                </View>
                <View style={styles.register}>
                    <Text style={styles.registerText}> Not a Member? </Text>
                    <Button title="Register" onPress={() => navigation.navigate("Register")}  />
                </View>
            </KeyboardAvoidingView>
        )
}

