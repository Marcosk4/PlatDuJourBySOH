import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from '../screens/styles';

const data = [
    {
        id: 1,
        title: "Monday",
        image: require("../assets/images/monday.png"),
        screen: "Monday"
    },
    {
        id: 2,
        title: "Tuesday",
        image: require("../assets/images/tuesday.png"),
        screen: "Monday"
    },
    {
        id: 3,
        title: "Wednesday",
        image: require("../assets/images/wednesday.png"),
        screen: "Monday"
    },
    {
        id: 4,
        title: "Thursday",
        image: require("../assets/images/thursday.png"),
        screen: "Monday"
    },
    {
        id: 5,
        title: "Friday",
        image: require("../assets/images/friday.png"),
        screen: "Monday"
    },
    {
        id: 6,
        title: "Beverages",
        image: require("../assets/images/beverages.png"),
        screen: "Monday"
    },
    {
        id: 7,
        title: "Extras",
        image: require("../assets/images/extras.png"),
        screen: "Monday"
    },
]

const Days = () => {
    const navigation = useNavigation();
    return (
        
        <ScrollView>
        {data.map((day, index) => (
                <TouchableOpacity key={index}
                    onPress={() => navigation.navigate(day.screen)}
                >
                <View style={styles.buttonMenu}>
                    <Image style={styles.imageButton} source={day.image} />
                    <Text style={styles.buttonText}>{day.title}</Text>
                 </View>   
                </TouchableOpacity>
           ))}
        </ScrollView>
        
        
        
        
    )
}

export default Days

