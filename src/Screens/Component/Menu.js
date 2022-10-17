import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,TouchableOpacity,StyleSheet, Text,Image } from "react-native";
import About from "../About";
import Course from "../Course";
import Data from "../Data";
import Contact from "../Contact";

const Menu =()=>{
    const navigation=useNavigation();
    return(
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate(About)}>
                {/* <Text style={styles.textStyle}>
                    About
                </Text> */}
                <Image style={styles.iconStyle}
                source={{
                    uri:"https://img.icons8.com/material-outlined/24/000000/about.png"
                }}/>

            </TouchableOpacity>

            

            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate(Course)}>
               <Image style={styles.iconStyle}
                source={{
                    uri:"https://img.icons8.com/color/48/000000/classroom.png"
                }}/>

            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate(Data)}>
                <Image style={styles.iconStyle}
                source={{
                    uri:"https://img.icons8.com/material-outlined/24/000000/activity-history.png"
                }}/>

            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate(Contact)}>
                <Image style={styles.iconStyle}
                source={{
                    uri:"https://img.icons8.com/material-outlined/24/000000/phone.png"
                }}/>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    textStyle:{
        textTransform:"uppercase",
        fontWeight:"bold"
        
    },
    iconStyle:{
        width:"100%",
        height:35,
        aspectRatio:1,
    },
});
export default Menu;
