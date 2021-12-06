import React, { useEffect, useState } from 'react'
import { Button, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, View } from 'react-native'
import { auth } from '../firebase';
import styles from './styles'

const Register = ({navigation}) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [Username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

   const register = () => {
        auth.createUserWithEmailAndPassword(email, password).then(authUser => {
            authUser.user.updateProfile({
                displayName: Username, 
            })
        }).catch((error) => alert(error.message))
   }
    
    return (
        <KeyboardAvoidingView behavior="position" enabled style={styles.loginScreen}>
             

                <Image style={styles.loginImage} source={require("../assets/images/logoapp.png")} />

                <View>
                    <TextInput
                        style={styles.email}
                        autoFocus
                        placeholder="Username"
                        type="text"
                        value={Username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        style={styles.email}
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInput
                        style={styles.email}
                        placeholder="Address"
                        type="text"
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <TextInput
                        style={styles.email}
                        placeholder="Phone Number"
                        type="text"
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                    <TextInput
                        style={styles.email}
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.password}
                        secureTextEntry={true}
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        onSubmitEditing={register}
                    />
                    <Button title="Register" onPress={register} />
                </View>
        </KeyboardAvoidingView>
    )
}

export default Register;
