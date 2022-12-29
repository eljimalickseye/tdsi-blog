import React , { useState } from "react";

import { View, Text, Button, ImageBackground ,FlatList, TextInput, StyleSheet,Image, ScrollView,TouchableOpacity} from 'react-native';    
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, setDoc , doc, addDoc,collection} from "firebase/firestore";

import UploadScreen from "./UploadScreen";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCEm63a3lX4Uuy1AlC-nZw_PhdUkA0JHiQ",

  authDomain: "tdsi-blog-46c1f.firebaseapp.com",

  projectId: "tdsi-blog-46c1f",

  storageBucket: "tdsi-blog-46c1f.appspot.com",

  messagingSenderId: "719695220686",

  appId: "1:719695220686:web:0ac5a17969210aeb48e59f",

  measurementId: "G-GBXZRNP0JF"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);


// // Initialize Cloud Firestore and get a reference to the service


function AddBlog () {

   
  const [colorCategory, setColorCategory] = React.useState('red');

  // const [name, setName] = React.useState('');
  // const [age, setAge] = React.useState('');

  const [category, setCategory] = React.useState('security');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [title, setTitle] = React.useState('');

  const [ImB, setImageBB] = React.useState('https://firebasestorage.googleapis.com/v0/b/tdsi-blog-46c1f.appspot.com/o/Screenshot%20from%202022-12-16%2012-42-10.png?alt=media&token=bd229f0d-8462-4d42-b39d-2f9180b7f819');
  

  // const handleSubmit = async() => {
  
  //   await addDoc(collection(firestore,"test2"),{
      
  //     name:name,
  //     age: age,

  //   });
  // };

  const values = ['security', 'dev', 'Systems','Network'];

  const renderItem = ({ item }) => (
    <View style={styles.flat}>
    <TouchableOpacity onPress={() => setCategory(item)
      
    } style={styles.flatTouch}>
      <Text style={styles.flatText}>{item}</Text>
    </TouchableOpacity>
    </View>
  );



  // Ajoutez un nouveau document à la collection "blog"
  const AddBlogs = async () => {
   
    // Utilisez "await" pour attendre que l'opération Firestore se termine
    await addDoc(collection(firestore,"blog"),{
      category: category,
      description:description,
      image:image,
      title: title,
    });
  };

  return (
 <ScrollView>

    {/* <View style={styles.container}>
        <Image
        style={styles.image}
        source={{
          uri:ImB
        }}
        />
      </View> */}

      <View>
        <UploadScreen/>
      </View>

    <View>



 {/* <View>
      <TextInput
        placeholder="Enter name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Enter age"
        onChangeText={text => setAge(text)}
      />
      <Button onPress={handleSubmit} title="Submit"/>
    </View> */}

      <View>

      <View style={styles.Uploadimage}> 
      <TextInput
        placeholder="image"
        onChangeText={text => setImage(text)}
        style={styles.Upload}
      />
      </View>

      <View style={styles.flatDeco}>
        <Text style={styles.flattextCategory}>Category</Text>
      <FlatList 
        data={values}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item}
      />

        {/* <TextInput
        placeholder="category"
        onChangeText={text => setCategory(text)}
      /> */}
      </View>


      <View>
       <TextInput
        placeholder="title"
        onChangeText={text => setTitle(text)}
      />
      </View>

     <View>
      <TextInput
        placeholder="description"
        onChangeText={text => setDescription(text)}
      />
     </View>

  
      </View>
      <Text>Add a new blog to the database:</Text>
      <Button onPress={AddBlogs} title="Send Data" color='black' />


    </View>
    </ScrollView>
  );
  }

export default AddBlog;

const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    width:'100%',
   },

   image:{
    width:'100%',
    height:300,
    resizeMode:'contain',
   },
   Upload:{
    width:200,
    backgroundColor:'grey',
    color:'white',
    alignSelf:'center'
   },
   flat:{
    flex:1,
     flexDirection:'row',
     backgroundColor:"white",
     width:'auto',
     height:'auto',
     marginLeft:20,
     alignItems:'center',
     borderRadius:15,
     borderWidth:1,
     marginBottom:25,
     marginTop:10
   },
   flatText:{
     fontSize:15,
   },
   flatTouch:{
     padding:8
   },
   flatDeco:{
     backgroundColor:'white',
   },

   flattextCategory:{
     marginLeft:25,
     color:'grey',
   },
   Uploadimage:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    height:100
   },
})