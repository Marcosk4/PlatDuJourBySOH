import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function Items() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1,}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => navigation.navigate("Plat Du Jour")}>
                <PlatterOfTheDay />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Platters")}>
                <FixedPlatter />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.navigate("Lite")}>
                <Lite />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Extras")}>
                <Extras />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.navigate("Offers")}>
            <Offers />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Catering")}>
            <Catering />
            </TouchableOpacity>
            </View>
        </View>
    )
}

const PlatterOfTheDay = () => (
    <View style={{borderRadius: 12,width: 200, height: 150, borderColor: 'black', borderWidth: 2, marginLeft: 10, marginTop: 15, justifyContent:'space-evenly', backgroundColor: 'white'}}>   
        <Image style={{ width: '100%', height: 120, borderRadius: 12 }} source={{uri:'https://lanfiannes-gite-glieres.fr/wp-content/uploads/2019/03/menu-du-jour.jpg'}} />        
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Plat Du Jour</Text>
        </View>
    </View>
)

const FixedPlatter = ({}) => (
    <View style={{ borderRadius: 12, width: 200, height: 150, borderColor: 'black', borderWidth: 2, marginRight: 10, marginTop: 15, justifyContent: 'space-evenly', backgroundColor: 'white' }}>        
        <Image style={{ width: '100%', height: 120, borderRadius: 12 }} source={{ uri: 'https://www.logolounge.com/wd/uploads/8795_303495.jpg' }} />        
        <View style={{justifyContent: 'center', alignItems:'center', marginTop: 5}}>
        <Text style={{ fontSize: 16, fontWeight: 'bold'}}>Platters</Text>
        </View>
    </View>
)

const Offers = () => (
    <View style={{ borderRadius: 12, width: 200, height: 150, borderColor: 'black', borderWidth: 2, marginLeft: 10, marginTop: 15, justifyContent: 'space-evenly', backgroundColor: 'white' }}>
            <Image style={{ width: '100%', height: 120, borderRadius: 12 }} source={{ uri: 'https://logos.flamingtext.com/Word-Logos/offer-design-china-name.png' }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Offers</Text>
        </View>
    </View>
)

const Extras = () => (
    <View style={{ borderRadius: 12, width: 200, height: 150, borderColor: 'black', borderWidth: 2, marginRight: 10, marginTop: 15, justifyContent: 'space-evenly', backgroundColor: 'white' }}>
        <Image style={{ width: '100%', height: 120, borderRadius: 12 }} source={{ uri: 'https://www.48hourslogo.com/48hourslogo_data/2019/02/23/82168_1550893197.png' }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Extras</Text>
        </View>
    </View>
)

const Catering = () => (
    <View style={{ borderRadius: 12, width: 200, height: 150, borderColor: 'black', borderWidth: 2, marginRight: 10, marginTop: 15, justifyContent: 'space-evenly', backgroundColor: 'white' }}>
        <Image style={{ width: '100%', height: 120, borderRadius: 12 }} source={{ uri: 'https://pngstation.com/wp-content/uploads/edd/2021/06/Catering-Logo-Design-1170x658.jpg' }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Catering</Text>
        </View>
    </View>
)

const Lite = () => (
    <View style={{ borderRadius: 12, width: 200, height: 150, borderColor: 'black', borderWidth: 2, marginLeft: 10, marginTop: 15, justifyContent: 'space-evenly', backgroundColor: 'white' }}>
        <Image style={{ width: '100%', height: 120, borderRadius: 12 }} source={{ uri: 'https://cdn.trendhunterstatic.com/phpthumbnails/299/299371/299371_1_468.jpeg' }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Lite</Text>
        </View>
    </View>
)