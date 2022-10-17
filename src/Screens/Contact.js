import React,{useState} from "react";
import { StyleSheet,Text,TextInput,TouchableOpacity,View} from "react-native";

const Contact =()=>{

    return(
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}> Level up Your Knowledge              
            </Text>
            <Text style={styles.description}>You can reach us anytime via anshul.sharma404@gmail.com</Text>


            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Name</Text>
                <TextInput style={styles.inputStyle} placeholder={"XYZ"}
                //  value={ } 
                // onChangeText={}
                
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Email</Text>
                <TextInput style={[styles.inputStyle, styles.multilineStyle]} placeholder={"XYZ@gmail.com"} 
                // // value={} 
                // onChangeText={}

                />
                 
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your Mobile </Text>
                <TextInput style={[styles.inputStyle, styles.multilineStyle]} placeholder={"9058xxxxxx"} 
                // // value={} 
                // onChangeText={}

                />
                 
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>How can we Help you? </Text>
                <TextInput style={[styles.inputStyle, styles.multilineStyle]} placeholder={"Maximum 60 words"} 
                // // value={} 
                // onChangeText={}
                numberOfLines={10}
                multiline={true}

                />
                 
            </View>

            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>alert("Thank you. our expert will contact you soon.")}>
                <Text style={styles.buttontext}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Contact

const styles=StyleSheet.create({
    mainContainer:{
        height:"100%",
        paddingHorizontal:30,
        backgroundColor:"#fff",
    },
    mainHeader:{
        fontSize:20,
        color:"#344055",
        fontWeight:"500",
        paddingTop:20,
        paddingBottom:15,

    },
    description:{
        fontSize:20,
        color:"#7d7d7d",
        paddingBottom:20,
        lineHeight:20,
    },
    inputStyle:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.3)",
        paddingHorizontal:15,
        paddingVertical:6,
        borderRadius:2,
    },
    inputContainer:{
        marginTop:20,
    },
    labels:{
        fontWeight:"bold",
        color:"#7d7d7d",
        paddingBottom:5,
        lineHeight:25,
    },
    multilineStyle:{
        paddingVertical:4,
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

    wrapper:{
        display:"flex",
        flexDirection:"row",
        marginTop:20,

    },
    
})
