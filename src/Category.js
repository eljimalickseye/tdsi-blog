import React from "react";
import { View, Text, Pressable, StyleSheet  } from "react-native";


export function Category({value, onPress, selected}) {
    
    return(
        <Pressable
            onPress={onPress}
            style={selected ? (styles.buttonPressed) : (styles.buttonNonPressed) }
        >
            <Text style={selected?(styles.textPressed) : (styles.textNonPressed) } >{value} </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonPressed:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#272727',
        borderRadius:20,
        margin:10,

    },
    buttonNonPressed:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'#fff',
        borderRadius:20,
        margin:10,
        borderWidth:1,
        borderColor:'grey'
    },
    textPressed:{
        alignSelf:'center',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:20,
        paddingRight:20,
        color:'#fff'
    },
    textNonPressed:{
        alignSelf:'center',
        padding:10,
        color:'#272727',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:20,
        paddingRight:20,
    }
})