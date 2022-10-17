import React from "react";
import { Text,View,Image,StyleSheet } from "react-native";
import Home from "./src/Screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from "./src/Screens/About";
import Contact from "./src/Screens/Contact";
import Course from "./src/Screens/Course";
import Data from "./src/Screens/Data";
import CourseDeatils from "./src/Screens/Component/CourseDetails";
import UserData from "./src/Screens/UserData";
import Enrollment from "./src/Screens/API/Enrollment";
import Login from "./src/Screens/API/Login";


export default function App() {
  const Stack = createNativeStackNavigator();
  
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Home">
          {(props)=> <Home {...props} channelName={"EDUCATION FOR ALL"}/>}
          </Stack.Screen>
          <Stack.Screen name="About" component={About} 
          options={{
            headerTitleStyle:{
              fontSize:25
            },
          }}/>
          <Stack.Screen name="Course" component={Course} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Data" component={Data} />
          <Stack.Screen name="CourseDetails" component={CourseDeatils} />
          <Stack.Screen name="Enrollment" component={Enrollment} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserData" component={UserData} />
          

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}




