import React from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, Button, View, ImageBackground, TextInput, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const image = require("../assets/image.jpg");

function DetailPostScreen({ navigation, route}) {
    return (
        <View style={styles.container}>
        <ImageBackground 
            // source={route.params.imageUri} 
            source={{uri:route.params.imageUri}}
            resizeMode="cover" 
            style={styles.image}
            imageStyle={styles.imgBackground}
        >
            <View style={styles.viewContainer}>
                <Text style={styles.textTitle}>{route.params.title}</Text>
                <Text style={styles.textCategory}>{route.params.date} <Icon name="circle" size={12} color="#fff" /> {route.params.category} </Text>
            </View>
        </ImageBackground>
        <View>
            <Text style={styles.textDescription}>{route.params.description}</Text>
        </View>
    </View>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
    },
    image:{
        height:hp("40%"),
        width:wp("100%"),
    },

    imgBackground:{
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    viewContainer:{
        // marginTop:200,
        position:'absolute',
        bottom:20,
        marginLeft:15
    },

    textTitle:{
        fontSize:20,
        fontWeight:'bold', 
        color:'white'
    },
    textCategory:{
        fontSize:16,
        color:'white'
    },
    text:{
      color:"#fff",
      fontSize:25,
      fontWeight:"bold",
      marginLeft: 20,
      marginTop: 355
  
    },
    date:{
      color:"#fff",
      marginLeft: 20,
    },
    category:{
      color:"#fff",
      marginLeft: 20,
    },
    imageStyle:{
      borderRadius: 10
    },
    letterH:{
      fontSize: 50,
      fontWeight:"bold"
    },

      textDescription:{
        margin:20,
        fontSize:15,
    }
    
  });


export default DetailPostScreen;