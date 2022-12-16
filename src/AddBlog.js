import React , { useState } from "react";

import { View, Text, Button, ImageBackground , TextInput} from 'react-native';    
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, setDoc , doc, addDoc,collection} from "firebase/firestore";



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

  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [createdAt, setCreatedAt] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [title, setTitle] = React.useState('');
  

  const handleSubmit = async() => {
  
    await addDoc(collection(firestore,"test2"),{
      
      name:name,
      age: age,

    });
  };



  // Ajoutez un nouveau document à la collection "blog"
  const AddBlogs = async () => {
   
    // Utilisez "await" pour attendre que l'opération Firestore se termine
    await addDoc(collection(firestore,"blog"),{
      category: category,
      createdAt: createdAt,
      description:description,
      image:image,
      title: title,
    });
  };

  return (

    <View>

 <View>
      <TextInput
        placeholder="Enter name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Enter age"
        onChangeText={text => setAge(text)}
      />
      <Button onPress={handleSubmit} title="Submit"/>
    </View>

      <View>

        <Text>Test</Text>

        <TextInput
        placeholder="category"
        onChangeText={text => setCategory(text)}
      />
      <TextInput
        placeholder="createdAt"
        onChangeText={text => setCreatedAt(text)}
      />

      <TextInput
        placeholder="description"
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        placeholder="image"
        onChangeText={text => setImage(text)}
      />

      <TextInput
        placeholder="title"
        onChangeText={text => setTitle(text)}
      />
  
      </View>
      <Text>Add a new blog to the database:</Text>
      <Button onPress={AddBlogs} title="Send Data" />
    </View>
  );
  }

export default AddBlog;