import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, Image,ScrollView } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import AddToCart from './AddToCart'

const foods = [
    {
        Id: 1,
        title: "Batata Soufle",
        description: "Mashed potato, Meat, Cheese, Kaak, onions served with season salad and cake",
        image: "https://everylittlecrumb.com/wp-content/uploads/batatasouffle-5-500x500.jpg",
        price: "LBP 60000"
    },
]

export default function PlatDuJour({navigation}) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => dispatch({
        type: "ADD_TO_CART",
        payload: {
            ...item,
            checkboxValue: checkboxValue,
        }
    });

    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food, cartItems) => (
        Boolean(cartItems.find((item => item.title === food.title)))
    )
    return (
        <>
        {foods.map((food, index) => (
        <ScrollView key={index}>
            <Image 
            style={{width:'100%', height: 300,resizeMode:'cover' }}
            source={{
                uri: food.image}}/>
            <View style={{marginTop: 10}}>
                    <BouncyCheckbox iconStyle={{ borderColor: 'black' }} fillColor="black"  onPress={(checkboxValue) => selectItem(food, checkboxValue)} isChecked={isFoodInCart(food, cartItems)} />
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>{food.title}</Text>
                <Text style={{ fontSize: 18, fontWeight: '300', color: 'grey', marginTop: 10 }}>{food.description}</Text>
                <Text style={{ fontSize: 16, marginTop: 10 }}>{food.price}</Text>
            </View>
            <AddToCart navigation={navigation}  />
        </ScrollView>
        ))}
        </>
    )
}
