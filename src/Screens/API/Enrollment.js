import React from "react";
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";


const Enrollment =()=>{

return(
    <View style={styles.mainContainer}>
        <Text style={styles.mainHeader}>
            Register to Join
        </Text>
        <Text style={styles.description}>Enter your details</Text>
        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your Name</Text>
            <TextInput style={styles.inputStyle} placeholder={"XYZ"}></TextInput>
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your Number</Text>
            <TextInput style={styles.inputStyle} placeholder={"9058xxxxxx"}></TextInput>
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your E-mail</Text>
            <TextInput style={styles.inputStyle} placeholder={"xyz@gmail.com"}></TextInput>
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Course Prefernce</Text>
            <TextInput style={styles.inputStyle} placeholder={"ABC"}></TextInput>
        </View>

        <TouchableOpacity style={styles.buttonStyle}
        onPress={()=>alert("Registration Complete.Enjoy your Course")}>
            <Text style={styles.buttontext}>Register</Text>
        </TouchableOpacity>    
        </View>    
)
}

export default Enrollment

const styles=StyleSheet.create({
    mainContainer:{
        height:"100%",
        paddingHorizontal:30,
        backgroundColor:"#fff",
    },
    mainHeader:{
        fontSize:25,
        color:"#344055",
        fontWeight:"500",
        paddingTop:20,
        paddingBottom:15,
        justifyContent:"center",
        alignItems:"center",        
    },
    description:{
        fontSize:16,
        color:"#7d7d7d",
        paddingBottom:20,
        lineHeight:20,
        fontWeight:"bold",
    },
    inputContainer:{
        marginTop:20,
    }, labels:{
        fontWeight:"bold",
        color:"#7d7d7d",
        paddingBottom:5,
        lineHeight:25,
    },
    inputStyle:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.3)",
        paddingHorizontal:15,
        paddingVertical:6,
        borderRadius:2,
    },
    buttonStyle:{
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:18,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:30,
        backgroundColor:"#6495ed" 
    },
    buttontext:{
        color:"black",        
    },

})