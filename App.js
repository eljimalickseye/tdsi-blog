import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./component/LoginScreen";
import RegisterScreen from "./component/RegisterScreen";
import DetailPostScreen from "./component/DetailPostScreen";
import AddBlog from "./src/AddBlog";

// const auth = getAuth()
// const auth = firebaseConfig.auth

// const test = !(function () {
//   let e = document.createElement("script"),
//     t = document.head || document.getElementsByTagName("head")[0];
//   (e.src =
//     "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"),
//     // Replace 1.x.x with the version that you want
//     (e.async = !0),
//     (e.onload = () => { 
//       window.WebChat.default(
//         {
//           initPayload: '/greet',
//           customData: { language: "en" },
//           socketUrl: "http://localhost:5005",
//           // add other props here
//         },
//         null
//       );
//     }),
//     t.insertBefore(e, t.firstChild);
// });  
const Stack = createNativeStackNavigator();
export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator  initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="DetailsPost" component={DetailPostScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Blog" component={AddBlog} />
      </Stack.Navigator>
</NavigationContainer>

  );

}
