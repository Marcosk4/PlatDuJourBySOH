import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'
import AddToCart from './AddToCart'

const foods = [
    {
        Id: 1,
        title: "Soft Drinks",
        description: "Pepsi, 7up, Miranda, Diet Pepsi, Diet Miranda",
        image: "https://www.seekpng.com/png/detail/59-598106_soft-drinks-png-pepsi-330ml-can-pk-24.png",
        price: "LBP 7000"
    },
    {
        Id: 2,
        title: "Water",
        image: "https://www.pngkey.com/png/detail/985-9851721_aquafina-drinking-water-600-ml-.png",
        price: "LBP 5000"
    },
    {
        Id: 3,
        title: "Fresh Orange Juice",
        description: "freshly squeezed orange juice",
        image: "https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Ginger-Juice-1-of-1.jpeg",
        price: "LBP 10000"
    },
    {
        Id: 4,
        title: "Ice Tea",
        description: "Ice Tea Peach, Ice Tea Peach",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfT79DhshRqQRtM7TW-iKpvZHA8r-cz7QzA_4pBX_FUJr11q8R_M1EE3cHuR4fM-5NfU&usqp=CAU",
        price: "LBP 9000"
    },
    {
        Id: 5,
        title: "Sparkling Water",
        description: "Perrier",
        image: "https://m.media-amazon.com/images/I/71yezRmNcHL._SY550_.jpg",
        price: "LBP 9000"
    },
]

export default function Beverages() {
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => dispatch({
        type: "ADD_TO_CART",
        payload: {
            ...item,
            checkboxValue: checkboxValue,
        }
    })
    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food, cartItems) => (
        Boolean(cartItems.find((item => item.title === food.title)))
    )
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (

                <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                    <BouncyCheckbox iconStyle={{ borderColor: 'lightgray' }} fillColor="#4E8EF2" 
                        onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                        isChecked={isFoodInCart(food, cartItems)}
                    />
                    <View>
                        <Image style={{ width: 110, height: 110, borderRadius: 12, marginRight: 0, resizeMode:'contain'  }} source={{ uri: food.image }} />
                    </View>
                    <View style={{ width: 250, justifyContent: 'space-evenly' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{food.title}</Text>
                        <Text style={{ fontSize: 17, fontWeight: '400', color: 'grey' }}>{food.description}</Text>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: 'black' }}>{food.price}</Text>
                    </View>
                </View>

            ))}
            <AddToCart navigation={navigation}  />
        </ScrollView>

    )
}
