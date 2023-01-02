import React from "react";
import { StyleSheet, Text, View,ImageBackground,Button,SafeAreaView,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import { firebaseConfig } from '../firebaseConfig';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';


const auth = getAuth()
// const auth = firebaseConfig.auth


function RegisterScreen({ navigation }) {

    const [name, onChangeName] = React.useState("Useless Text");
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

  const ImagePost =()=>{
    navigation.navigate('ImagePik')
  }
  
  const ScreenBlog =()=>{
    navigation.navigate('BlogsScreen')
  }

  const Detail =()=>{
    navigation.navigate('Detail')
  }
      return (
      <ScrollView style={styles.container}>
        
        
        <View style={styles.itemLog}>
      
        <Text style={styles.register}>TDSI</Text>
        <Text style={styles.blog}>Blog</Text>

        </View>
      
        <SafeAreaView>
        <View style={styles.email}>
        <Text style={styles.itemep} >Nom Complet</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          placeholder={"nom"}
          keyboardType={"email"}
        />
        </View>
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
           onPress={()=>createNewUserWithEmailAndPassword(email,password) }
        >
          <Text style={styles.colorText}> S'INSCRIRE</Text>
        </TouchableOpacity>
       </View>
  
        <View style={styles.btnCreateAccount}>
        <Text style={styles.quest}>Vous avez deja un compte ?</Text>
         <View style={styles.btnConnect}> 
         <TouchableOpacity
           style={styles.btnLogin}
           onPress={()=> Log_in()}
        >
          <Text style={styles.formText}> SE CONNECTER  </Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity
           style={styles.btnLogin}
           onPress={()=> blog()}
        >
          <Text style={styles.formText}> blog</Text>
        </TouchableOpacity> 

        <TouchableOpacity
           style={styles.btnLogin}
           onPress={()=> detailsPost()}
        >
          <Text style={styles.formText}> DetailsPost</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={styles.btnLogin}
           onPress={()=> ImagePost()}
        >
          <Text style={styles.formText}> Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={styles.btnLogin}
           onPress={()=> ScreenBlog()}
        >
          <Text style={styles.formText}> Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={styles.btnLogin}
           onPress={()=> Detail()}
        >
          <Text style={styles.formText}> Detail</Text>
        </TouchableOpacity>
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

  btnLogin:{
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginBottom:25,
   backgroundColor:'white',
   borderWidth:1,
   borderColor:'black'
  },
  quest:{
    alignSelf:'center'
  }
  });

  export default RegisterScreen;