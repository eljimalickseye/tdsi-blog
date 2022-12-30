import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View,ImageBackground,Button,SafeAreaView,TextInput,TouchableOpacity, ScrollView} from 'react-native';
import ReadData from "../src/GetAllBog";

const imageBackground = { uri: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" };


function DetailPostScreen({ navigation }) {

    const Log_out=()=>{
   
      // logout
      navigation.navigate('Blog')
  }
    return (
      <ScrollView  style={styles.container}>
  
    
  
      <View style={styles.container1}>

 
  
      </View>
   
        <View style={styles.tester} >
        <TouchableOpacity
           style={styles.button}
           onPress={()=> Log_out()}
        >
          <Text>Log_out</Text>
        </TouchableOpacity>
        <View style={styles.readdata}>
        <ReadData />
        </View >
      
        </View>
      </ScrollView >
    );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        tester: {
          opacity:0.8,
        },
        readdata:{
           marginTop:50,
           marginBottom:10,
           backgroundColor:'gold'
        },

        bodyText:{
          width:'98%',
          height:100,
          justifyContent:'center',
          alignItems:'center',
          marginTop:29,
          backgroundColor:'black',
          padding:20,
          margin:5
        },
        DateAndCategory:{
          flexDirection:'row',
           justifyContent:'flex-start',
           marginLeft:10
        },
        Date:{
          color:'white',
        },
        Category:{
          color:'white',
        },
        container1:{
          backgroundColor:'black',
          width:'100%',
        },
        imageBackground:{
          width:'100%',
          height:200,
          justifyContent:'flex-end',
        },
        text:{
          color:'white',
          fontSize:30,
          lineHeight:50,
          textAlign:'justify',
          backgroundColor:'#000000c0',
          marginLeft:10,
        },

        imageStyle:{
           borderRadius:10,
        },
      });

      
       export default DetailPostScreen;