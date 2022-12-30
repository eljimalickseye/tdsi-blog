import React , { useState, useEffect } from "react";

import { View, Text, Button, ImageBackground , TextInput,FlatList, Pressable, StyleSheet} from 'react-native';    
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, getDocs, setDoc , doc, addDoc,collection} from "firebase/firestore";
import { firebase } from "@react-native-firebase/firestore";
import 'firebase/firestore';

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

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);


const ReadData=()=>{

  const [blogs, setBlogs] = useState([]);
  // const todoref = firestore.collection("blog");
  
 
  // useEffect(async() => {
        
  //   const querySnapshot = await getDocs(collection(firestore, "blog"));
  //     querySnapshot => {
  //       const blogs = []
  //       querySnapshot.forEach((doc)=>{
  //         // const { category, createtAt,description,image,title} = doc.data()
  //         blogs.push({
  //           id: doc.id,
  //           category:doc.data().category,
  //           createtAt:doc.data().createtAt,
  //           description:doc.data().description,
  //           image:doc.data().image,
  //           title:doc.data().title,
  //         })
  //       })
  //        setBlogs(blogs)
  //     }
    
  // }, []);
   // const { category, createtAt,description,image,title} = doc.data()

  const Mydata = async() =>{
     
    const querySnapshot = await getDocs(collection(firestore, "blog"));
    const blogs =[]
    
    querySnapshot.forEach((doc) => {
      blogs.push({
        id: doc.id,
        category:doc.data().category,
        createtAt:doc.data().createtAt,
        description:doc.data().description,
        image:doc.data().image,
        title:doc.data().title,
      })
      console.log(`9mMCZVAghnl0VDIrpRqd => ${doc.data().category}`);
      // console.log(`${doc.id} => ${doc.data().createdAt}`);
      // console.log(`${doc.id} => ${doc.data().description}`);
      // console.log(`${doc.id} => ${doc.data().image}`);
      // console.log(`${doc.id} => ${doc.data().title}`);
    });

    
    setBlogs(blogs)
     
  };

  return(
      
    <View>
       <View>
      <FlatList
        data={blogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable  style={styles.container}>
          <View  style={styles.innercontainer}>
             <Text  style={styles.itemCategory}>{item.category}</Text>
             <Text  style={styles.itemDescription}>{item.description}</Text>
             <Text  style={styles.itemTitle}>{item.title}</Text>
             <Text  style={styles.itemTitle}>{item.image}</Text>
          </View>
            
         </Pressable>
        )}
      />
    </View>
      <Button onPress={Mydata} title="Look Data"/>
    </View>

    // <View style={{ flex:1,marginTop:100}}>
    //    <FlatList
    //       style={{height:'100%'}}
    //       data ={blogs}
    //       numColumns={1}
    //       renderItem={({item})=>(
            // <Pressable  style={styles.container}>
            //  <View  style={styles.innercontainer}>
            //     <Text  style={styles.itemCategory}>{item.category}</Text>
            //     <Text  style={styles.itemCategory}>{item.category}</Text>
            //  </View>
               
            // </Pressable>
    //       )}
    //    />


    // </View>
        
)};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    padding:15,
    borderRadius:15,
    margin:5,
    marginHorizontal:10,
  },
  innercontainer:{
    alignItems:'center',
    flexDirection:'column'
  },
  itemCategory:{
    fontWeight:'bold',
    color:'white'
  },
  itemDescription:{
    fontWeight:'bold',
    color:'white'
  },
  itemTitle:{
    fontWeight:'bold',
    color:'red'
  },
})

export default ReadData;

