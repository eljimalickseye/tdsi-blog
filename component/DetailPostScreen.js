import React, {useState} from "react";
import {  StyleSheet, TextInput, Text, View, Pressable, ScrollView, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';
import Pluscircle from 'react-native-vector-icons/AntDesign';
import Post from "../src/Post";
import ReadData from "../src/GetAllBog";





import { Category } from "../src/Category";


export function DetailPostScreen({navigation}) {
    const img1 = require("../assets/imag24.jpg");

    const [blogs, setBlogs] = useState([]);

    const categories = ['Tous', 'Dev' ,'Sécurité', 'Système', 'Réseau'];
    const [selectedCategory, setSelectedCategory] = React.useState("Tous");
    const dat = "20 Juin 2022";
    const des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    const Data = [
        {
            image:"https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867761_960_720.jpg",
            category:"Dev",
            title:"Cicle de vie d'une application web",
            date:dat,
            description:des

        },
        {
            image:"https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867761_960_720.jpg",
            category:"Dev",
            title:"Remote job (Setup pour réussir )",
            date:dat,
            description:des
        },
        {
            image:"https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867761_960_720.jpg",
            category:"Dev",
            title:"Débuter avec React Native",
            date:dat,
            description:des
        },
        {
            image:"https://cdn.pixabay.com/photo/2013/03/04/21/01/server-90389_960_720.jpg",
            category:"Réseau",
            title:"Devenir Admin Réseau",
            date:dat,
            description:des
        },
        {
            image:"https://cdn.pixabay.com/photo/2017/11/06/08/42/turn-on-2923046_960_720.jpg",
            category:"Système",
            title:"Automatisation de tache sous Linux",
            date:dat,
            description:des
        },
        {
            image:"https://cdn.pixabay.com/photo/2017/11/19/23/56/hacking-2964100_960_720.jpg",
            category:"Sécurité",
            title:"Mise en place de IpTables",
            date:dat,
            description:des
        },
        {
            image:"https://cdn.pixabay.com/photo/2017/11/19/23/56/hacking-2964100_960_720.jpg",
            category:"Sécurité",
            title:"Mise en place de IpTables",
            date:dat,
            description:des
        }
    ]

    const logOut = ()=>{
        navigation.navigate('Login');
    }
  

    const goToDetailPost = (image, title, description, category, date)=>{
        navigation.navigate('DetailsPost', {
            imageUri:image, 
            title:title, 
            description:description, 
            category:category,
            date:date
        })
    }



    //  <ReadData />
    return(

      <View style={{flex:1}}>
           <ScrollView>
      <View>
          <View style={styles.topBar} >
              <View style={styles.titleContainer} >
                  <Text style={styles.titleStyle}>TDSI</Text>
                  <Text style={styles.desStyle} >Blog</Text>
              </View>

              <Pressable style={styles.logOutStyle} onPress={()=>logOut()} >
                  <Text style={styles.logOutText} >Se déconnecter</Text>
                  <Icon 
                      name="log-out" 
                      size={30} 
                      color="#000" 
                      style={{transform:[{rotate:"180deg"}]}}
                  />
              </Pressable>
          </View>

          <View style={styles.catContainer}> 
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                  {categories.map((category, index) => {
                      return(
                          <Category
                              value={category}
                              onPress={()=>setSelectedCategory(category)}
                              selected={selectedCategory===category}
                              key={`${category}-${index}`}
                          />
                      )
                  })}
                  </ScrollView>
              </View>


          <View style={styles.blogs} >{
              Data.map((element, index) =>{
                  return(
                      (selectedCategory == element.category) || (selectedCategory=='Tous') ?  
                      (<Post
                          key={`${element.title.split(" ").join("_")}-${index}`}
                          imageUri={element.image}
                          category={element.category}
                          title={element.title}
                          date={element.date}
                          style={{felx:2}}
                          onPress={()=> goToDetailPost(element.image, element.title, element.description, element.category, element.date)}
                      />) : null
                  )
              })
          }</View>
          <ReadData />
      </View>
  </ScrollView>
  <Pressable 
                  style={styles.plus}
                  onPress={()=>navigation.navigate("Blog")}
              >
              <Pluscircle name="pluscircle" size={60} color="#FBDE4B" />
              </Pressable>
      </View>
  )
}

export default DetailPostScreen;

const styles = StyleSheet.create({
  topBar:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:40,
  },
  titleStyle: {
  fontSize:25,
  fontWeight:'bold',
   },
desStyle:{
  color:'#FBDE4B',
  fontSize:15,
  fontWeight:'bold'
},
  titleContainer:{
      margin:20
  },
  logOutStyle:{
      margin:20,
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
  },
  logOutText:{
      fontSize:20,
      fontWeight:'bold',
      marginRight:7
  },
  img:{
      // width:
  },
  img:{
      // width:
  },

  logo: {
      width: 142,
      height: 116,
  },
  // blogs:{
  //     display:'flex',
  //     flexDirection:'row',
  //     alignItems: "center",
  //     flexWrap: "wrap",
  //     position: "relative"

  // },
  blogs:{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      // backgroundColor:'red',
      marginBottom:20,
      position:'relative'
  },

  view1: {
      // backgroundColor: "blue",
      flexDirection: "column",
  },

  plus: {
      marginBottom: 20,
      // marginRight: 20,
      position: "absolute",
      right: 20,
      bottom:0,
      backgroundColor: "black",
      borderRadius: 35
  }
})