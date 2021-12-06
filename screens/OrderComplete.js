import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import OrderItem from '../components/OrderItem';
import { db } from '../firebase';
import MenuItems from '../components/MenuItems';

export default function OrderComplete() {

    const [lastOrder, setLastOrder] = useState({
        items: [
        {
        Id: 6,
        title: "Falafel",
        description: "Deep crispy Falafel served with tarator, vegetables and cake ",
        image: "https://www.simplyleb.com/wp-content/uploads/Falafel-38.jpg",
        price: "LBP 54000"
    }
    ]});
    const items = useSelector((state) => state.cartReducer.selectedItems.items)

    const total = items.map((item => Number(item.price.replace('LBP', '')))).reduce((prev, curr) => prev + curr, 0);

    const totalLBP = total.toLocaleString("en", {
        style: "currency",
        currency: "LBP",
    });

    useEffect(() => {
      const unsubscribe =  db.collection("order").orderBy('createdAt', 'desc').limit(1).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data())
            })
        })
        return() => unsubscribe();
    }, [])

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{
            margin: 15,
            height: '100%'
        }}>
            <LottieView style={{height: 100, alignSelf: 'center', marginBottom: 30}} 
                source={require('../assets/animations/81236-ok-black.json')}
                autoPlay
                speed={0.5}
                loop={false}
            />
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Your order at SOH has been placed for {totalLBP}</Text>
            
            {items.map((item, index) => (
                <OrderItem key={index} item={item} />
            ))}
            
            <LottieView
                style={{height: 200, width: 200, alignSelf: 'center', marginTop: 20}}
                source={require('../assets/animations/86212-cooking-foods.json')}
                autoPlay
                speed={1}
                loop={true}
            />
            </View>
        </SafeAreaView>
    )
}
