import React, {useState} from 'react';
import { View, Text, Button, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import Logo from '../logo';
import styles from './styles';
import { faUserCircle, faPhoneAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { auth } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Days from '../components/Days';
import Items from '../components/Items';
import LottieView from 'lottie-react-native'



export default function Home({ navigation }) {
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
    }

    return (
        <View style={styles.home}>
            {/* Header */}
            <View style ={styles.header}>
                <Pressable onPress={() => navigation.navigate("Call")}>
                    
                    <FontAwesomeIcon style={{ marginLeft: 15 }} icon={faPhoneAlt} color='black' size={20} />
                    
                </Pressable> 
                <Image style ={styles.image} source={Logo} />
                <View>
                <Text style={{ color: 'black', marginRight: 10, fontSize: 12, fontWeight: '600'}}>{auth?.currentUser?.displayName}</Text>
                <Pressable onPress={signOutUser}>
                    <FontAwesomeIcon icon={faSignOutAlt} color= 'black' size={20} style={{marginRight: 15}} />
                </Pressable>
                </View>
            </View>
            {/* Quote */}
            <View style={styles.passionHeader}>
                <Text style={styles.passion}>We cook with passion and serve with love the best food you can taste.</Text>
            </View>
            {/* Menu */}
            <ScrollView>
                <Items />
            </ScrollView>
            
        </View>
    )
}
