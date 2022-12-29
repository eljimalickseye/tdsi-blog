import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, Image,ImageBackground } from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import { auth } from '../firebaseConfig';
import { getAuth } from 'firebase/auth';
import { storage } from '@react-native-firebase/storage'


const imageBackground =require('../assets/imageDownload.png')

// const image2 = require("../assets/image.jpg");
const UploadScreen = () => {

  const [image, setImage] = useState(null) 
  const [uploading, setUploading] = useState(null)  

  const pickImage = async () =>{
    // No permission request is neccessary for launching image
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.All,
        allowsEditing:true,
        aspect:[4,3],
        quality:1,
    });

    const source = {uri:result.uri};
    console.log(source);
    setImage(source);

    
  };

  const uploadImage = async() =>{
    setUploading(true);
    const response = await fetch(image.uri)
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
    var ref = firebase.storage().ref().child(filename).put(blob);

    try{
        await ref;
    }
    catch (e){
       console.log(e)
    }
    setUploading(false);
    Alert.alert(
        'Photo uploaded..'
    );
    setImage(null)
  }
  
  {/* <TouchableOpacity  style={styles.uploadButton} onPress={uploadImage}>
    <Text style={styles.buttonText}>
        Upload Image
    </Text>
  </TouchableOpacity> */}

    return (
          <SafeAreaView style={styles.container}>

            <ImageBackground source={imageBackground} resizeMode="cover" style={styles.imageBackground}>
            <View style={ styles.imageContainer}>
               {image && <Image source={{uri: image.uri}} style={{ width:300,height:200}}/>}
            </View>
            </ImageBackground>


            <TouchableOpacity style={styles.selecButton} onPress={pickImage}>
                 <Text style={styles.buttonText}>Choisir image </Text>
            </TouchableOpacity>
          </SafeAreaView>
    )
}

export default UploadScreen;




const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'white',
    justifyContent:'center'
    },
    selecButton:{
       borderRadius:5,
       width:150,
       height:50,
       alignItems:'center',
       justifyContent:'center'

    },

    imageContainer:{
       marginTop:20
    },

    imageBackground:{
      marginTop:30,
      marginBottom:10,
      alignItems:'center',
      width:'100%',
      height:200,
    },

    uploadButton:{
        borderRadius:5,
        width:150,
        height:50,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
 
     },

     buttonText:{
       fontSize:18,
       fontWeight:'bold',

     },

     ima:{
        marginTop:30,
        marginBottom:50,
        alignItems:'center',
     }
})