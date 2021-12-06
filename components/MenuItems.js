import React, { useState} from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import AddToCart from './AddToCart'
import BouncyCheckBox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

const foods = [
    {
        Id: 2,
        title: "Chicken Escalope",
        description: "Deep fried crispy chicken escalope served with french fries, honey mustard and cake",
        image: "https://1.bp.blogspot.com/-SRZ7qtE4-Ik/YHYbZsZhlVI/AAAAAAAAFqI/XQ5KpDbMceY5ozzvybM2pv0FGj_tSFaFgCLcBGAsYHQ/s1065/Screenshot_2021-04-13-22-22-03-29-min.jpg",
        price: "LBP 70000"
    },
    {
        Id: 3,
        title: "Alfredo Chicken",
        description: "Pasta, chicken, white sauce, parmesan served with cake",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/9/15/1/FNK_Chicken-Fettucine-Alfredo_s4x3.jpg.rend.hgtvcom.616.462.suffix/1442375396342.jpeg",
        price: "LBP 50000"
    },
    {
        Id: 4,
        title: "Warak enab ati3 ",
        description: "grape leaves stuffed with rice, Hommos, Tomato served with Laban and cake",
        image: "https://images.squarespace-cdn.com/content/v1/5fee3b088500a82fe9d47ac9/1609950528379-989RTMM1TW7YNGQXHH4E/%D9%88%D8%B1%D9%82+%D8%B9%D9%86%D8%A8.jpg",
        price: "LBP 40000"
    },
    {
        Id: 5,
        title: "Cauliflower",
        description: "Deep fried Cauliflower served with french fries, cocktail sauce and cake",
        image: "https://img-global.cpcdn.com/recipes/8ff74e1f4fb6c6ee/1200x630cq70/photo.jpg",
        price: "LBP 40000"
    },
    {
        Id: 6,
        title: "Falafel",
        description: "Deep crispy Falafel served with tarator, vegetables and cake ",
        image: "https://www.simplyleb.com/wp-content/uploads/Falafel-38.jpg",
        price: "LBP 54000"
    }
]

export default function MenuItems({navigation, hideCheckbox, marginRight}) {

    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => dispatch ({
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
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                    <View key={index}>
                    <View  style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginTop:20 }}>
                       {hideCheckbox ? (<></>) : (<BouncyCheckBox iconStyle={{ borderColor: 'lightgray' }} fillColor= "#4E8EF2" 
                            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                            isChecked= {isFoodInCart(food, cartItems)}
                         />)}
                        <View>
                            <Image style={{ width: 110, height: 110, borderRadius: 12, marginRight: marginRight}} marginRight={marginRight ? marginRight: 0} source={{ uri: food.image }} />
                        </View>
                        <View style={{ width: 250, justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{food.title}</Text>
                            <Text style={{ fontSize: 17, fontWeight: '400', color: 'grey' }}>{food.description}</Text>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: 'black' }}>{food.price}</Text>
                        </View>
                    </View>
                </View>
                
            ))}
            <AddToCart navigation={navigation} />
        </ScrollView>

    )
}
