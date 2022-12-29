import React from "react";
import {  StyleSheet, Text, Pressable, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';



export function Post({imageUri,category, title, date, onPress }) {
    
    return(
        <Pressable 
            style={styles.container} 
            onPress={onPress}
        >
            <Image
                style={styles.imgStyle}
                // source={{uri:imageUri}}
                source={{uri:imageUri}}
            />
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.date} >{date} <Icon name="circle" size={12} color="#FBDE4B" /> {category}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width:wp("50%")-30,
        marginLeft:20,
        marginTop:20
    },
    imgStyle:{
        width: wp("50%%")-40,
        height:hp("25%"),
        borderRadius:10
    },
    title:{
        fontWeight:'bold',
        fontSize:16
    },
    date:{
        fontSize:13
    }
})

export default Post;
