import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    home: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#EEE2D2'
    },
    header:{
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'grey',
        height: 100,
        marginBottom: 20
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 12
    },
    buttonMenu:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginBottom: 10,
        marginRight: 5,
        borderRadius: 4,
        borderWidth: 2,
        height: 80,
        borderColor: 'black',
    },
    buttonText:{
        alignItems: 'center',
        justifyContent: 'center',
        color:'white',
        fontSize: 24,
        fontWeight: 'bold',
        position:'absolute'
    },
    imageButton:{
        width: '100%',
        height: '100%',
        resizeMode:'cover',
        position:'absolute'
    },
    passionHeader: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom:10,
    },
    passion: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    mondayScreen:{
        backgroundColor: 'red',
        flex: 1
    },
    text:{
        fontSize: 24,
        justifyContent:'center',
        alignItems: 'center',
        fontWeight:'bold',
    },
    callScreen:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    textCall:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center'
    },
    imageFood:{
        width:'100%',
        height:260
    },
    textFood:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textPlat:{
        fontSize:14,
        fontWeight:'800',
        fontStyle:'italic'
    },
    addToCart:{
        marginTop: 30
    },
    register:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    registerText:{
        fontSize: 18,
        fontWeight:'bold'
    },
    email:{
        fontSize: 18,
        marginBottom:15,
        marginLeft: 2,
        marginRight: 2,
        borderRadius: 10,
        borderWidth: 2,
        height: 50
    },
    password:{
        fontSize: 18,
        marginBottom: 15,
        marginLeft:2,
        marginRight:2,
        borderRadius: 10,
        borderWidth: 2,
        height: 50
    },
    loginScreen:{
        flex: 1
    },
    loginImage:{
        marginBottom: 30,
        width:'100%',
        height:300,
        resizeMode: 'cover'
    }, 
    menuHeader:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'grey',
        height: 120,
        marginBottom: 10
    },
    pressableCart:{
        alignItems:'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})

export default styles;