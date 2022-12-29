import React from "react";
import { StyleSheet, Text, View,ImageBackground,Button,SafeAreaView,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { firebaseConfig } from '../firebaseConfig';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';


const auth = getAuth()
// const auth = firebaseConfig.auth

function LoginScreen ({ navigation }) {


    const [email, onChangeEmail] = React.useState("Useless Text");
    const [password, onChangePassword] = React.useState(null);
  
  
     const signUserWithEmailAndPassword =(email,password)=>{
      console.log('email',email,"password",password )
      // onChangeEmail(value)
      signInWithEmailAndPassword(auth,email,password)
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
  
    const register=()=>{
   
        // S
        navigation.navigate('Register')
    }
  
  
  
      return (
      <ScrollView style={styles.container}>

        <View style={styles.itemLog}>
      
        <Text style={styles.register}>TDSI</Text>
        <Text style={styles.blog}>Blog</Text>

        </View>
     
        <SafeAreaView>

        <View style={styles.email}>
        <Text style={styles.itemep} >Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder={"email"}
          keyboardType={"email"}
        />
        </View>

        <View style={styles.email}>
         <Text style={styles.itemep} >Mot de passe</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          placeholder={"mot de passe"}
          keyboardType={"visible-password"}
        />
       </View>
       <View style={styles.btnConnect}>
       <TouchableOpacity
           style={styles.button}
           onPress={()=>signUserWithEmailAndPassword(email,password) }
        >
          <Text style={styles.colorText}> SE CONNECTER</Text>
        </TouchableOpacity>
       </View>
       
        <View style={styles.btnCreateAccount} >
      

         <Text style={styles.quest}>Vous n'etes pas encore membre ?</Text>
         <View style={styles.btnConnect}> 
        <TouchableOpacity
           style={styles.btnRegister}
           onPress={()=> register()}
        >
          <Text style={styles.formText}>S'ENREGISTRER</Text>
        </TouchableOpacity>
        </View>  
        </View>
      </SafeAreaView>
  
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    btnCreateAccount:{
      margin:12,
      marginTop:200,
    },

    btnConnect:{
      margin:12,
      marginTop:28,
      height:43,
      lineHeight:50
    },

    title:{
      textAlign: 'center',
      marginVertical: 8,
    },

    itemLog:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:210,
    },
    register:{
        fontSize:50,
    },

   blog:{
        fontSize:23,
        marginRight:55,
        color:'gold',
    },

    input: {
      height: 50,
      borderWidth: 1,
      padding: 10,
      borderRadius:8,
      marginTop:10,
    },

    email:{
      margin: 12,
    },
    itemep:{
     color:'grey'
    },

    button:{
      width:'100%',
      height:50,
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      marginBottom:25,
    },

    colorText:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
    }, 

    formText:{
      fontSize:20,
      fontWeight:'bold',
    },

    btnRegister:{
      width:'100%',
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      marginBottom:25,
     backgroundColor:'white',
     borderWidth:2,
     borderColor:'black'
    },
    quest:{
      alignSelf:'center'
    }

  });
  

  export default LoginScreen;