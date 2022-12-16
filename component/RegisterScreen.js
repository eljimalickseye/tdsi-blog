import React from "react";
import { StyleSheet, Text, View,ImageBackground,Button,SafeAreaView,TextInput,TouchableOpacity} from 'react-native';
import { firebaseConfig } from '../firebaseConfig';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';


const auth = getAuth()
// const auth = firebaseConfig.auth

const imageBackgroundRegister = { uri: "https://images.unsplash.com/photo-1614029951470-ef9eb9952be7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" };

function RegisterScreen({ navigation }) {


    const [email, onChangeEmail] = React.useState("Useless Text");
    const [password, onChangePassword] = React.useState(null);
  
  
     const createNewUserWithEmailAndPassword =(email,password)=>{
      console.log('email',email,"password",password )
      // onChangeEmail(value)
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate('DetailsPost')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  
    const Log_in=()=>{
   
        // Signed in 
        navigation.navigate('Login')
    
      }

      const blog=()=>{
   
        // Signed in 
        navigation.navigate('Blog')
    }

    const detailsPost=()=>{
   
      // Signed in 
      navigation.navigate('DetailsPost')
  }
  
      return (
      <View style={styles.container}>
        <ImageBackground source={imageBackgroundRegister} resizeMode="cover" style={styles.imageBackground} blurRadius={1} >
        <Text style={styles.register}>Register</Text>
        </ImageBackground>
        <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder={"email"}
          keyboardType={"email"}
        />
  
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          placeholder={"password"}
          keyboardType={"visible-password"}
        />
  
        <View style={styles.btnCreateAccount}>
      
        <TouchableOpacity
           style={styles.button}
           onPress={()=>createNewUserWithEmailAndPassword(email,password) }
        >
          <Text>Press Here   </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
           style={styles.button}
           onPress={()=> Log_in()}
        >
          <Text>Login  </Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={styles.button}
           onPress={()=> blog()}
        >
          <Text> blog</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={styles.button}
           onPress={()=> detailsPost()}
        >
          <Text> DetailsPost</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
  
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    btnCreateAccount:{
      margin:40,
  
    },
  
    button:{
      borderStyle:'dashed',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:8,
    },
    barre12:{
      flexDirection:'row'
    },
    barre:{
      height:100,
      backgroundColor:'black',
      color:'white',
      fontSize:25
    },
    barre1:{
  
    },
    TextStyle:{
      color:'white'
    },
    TextStyle0:{
      color:'grey'
    },
    TextStyle1:{
      color:'blue'
    },
    TextStyle2:{
      color:'green'
    },
    TextStyle3:{
      color:'yellow'
    },
    TextStyle4:{
      color:'orange'
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
      height:300,
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
    register:{
      color:'white',
      fontSize:30,
      lineHeight:50,
      textAlign:'justify',
      backgroundColor:'#000000c0',
      flex:0,
      opacity:2,
      height:200
    },
    imageStyle:{
       borderRadius:10,
    },
    btnCreateAccount:{
       flexDirection:'row',
       
    },
  });

  export default RegisterScreen;