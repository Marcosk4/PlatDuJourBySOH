import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { db } from '../firebase';
import OrderItem from './OrderItem';
import firebase from 'firebase';
import LottieView from 'lottie-react-native'

export default function AddToCart({ navigation }) {
    const[modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const items = useSelector((state) => state.cartReducer.selectedItems.items)

    const total = items.map((item => Number(item.price.replace('LBP', '')))).reduce((prev, curr) => prev + curr, 0);

    const totalLBP = total.toLocaleString("en", {
        style: "currency",
        currency: "LBP",
    });
    
    const addOrderToFirebase = () => {
        setLoading(true);
        db.collection("order").add({
            items: items,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()}).then(() => {
                setTimeout(() => {
                    setLoading(false);
                    navigation.navigate("Order Complete")
                }, 2500);
            });       
    }
    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)',

        },
        modalCheckoutContainer : {
            backgroundColor: 'white',
            padding: 16,
            height: 500,
            borderWidth: 1,
        },
        restaurantName : {
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 18,
            marginBottom: 10
        },
        subtotalContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15
        },
        subtotalText: {
            fontSize: 15,
            textAlign: 'left',
            fontWeight: '600',
            marginBottom: 10
        }
    })

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style= {styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>SajOHelo</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}> Subtotal</Text>
                            <Text>{totalLBP}</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <TouchableOpacity style={{justifyContent:'space-evenly' ,marginTop: 20, backgroundColor: 'black', alignItems:'center', padding: 13, borderRadius: 30, width: 300, position:'relative', flexDirection:'row'}}
                                onPress={() => {addOrderToFirebase(); setModalVisible(false);}}
                            >
                            <Text style={{color: 'white', fontWeight:'bold', fontSize: 18}}>Checkout</Text>
                            <Text style={{color: 'white', fontSize: 18}}>{total ? totalLBP : ""}</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
                    
                </View>
            </>
        )
    }

    return (
        <>
        <Modal animationType='slide' visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        >
            {checkoutModalContent()}
        </Modal>
        { total ? (
        <View style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            position: '"absolute"',
            bottom: 5,
            zIndex: 999
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%'
            }}>
                <TouchableOpacity style={{ flexDirection:'row', marginTop: 20, backgroundColor: 'black', width: 300, borderRadius: 30, justifyContent: 'space-evenly', alignItems: 'center', padding: 10, position: 'relative'}}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                        ADD TO CART
                    </Text>
                    <Text style={{color: 'white', fontSize: 18}}>{totalLBP}</Text>
                </TouchableOpacity>
            </View>
        </View>)
        : (<></>)}
        {loading ? <View 
            style={{backgroundColor: 'black', position: 'absolute', justifyContent: 'center', alignItems: 'center', opacity: 0.6, width: '100%', height: '100%'}}
        >
            <LottieView style={{height: 200}} source={require('../assets/animations/9825-loading-screen-loader-spinning-circle.json')} autoPlay speed={3}/>
        </View> : <></>}
        </>
    )
}
