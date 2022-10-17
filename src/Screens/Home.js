import React from "react";
import { StyleSheet,Text,View,Image,TouchableOpacity} from "react-native";
import Menu from "./Component/Menu";


const Home = ({navigation})=>{
    
    return(
        <View style={styles.maincontainer}>
        <View style={styles.homeTop}>
          <Image style={styles.headerImage}
          resizeMode="contain"
            source={require("../../assets/Course/coaching.jpg")}/>
           
            <Text style={styles.mainHeader}>
              WELCOME TO
            </Text>
            <Text style={[styles.mainHeader,
            {
              fontSize:33,
              color:"#4c5dab",
              marginTop:0,
            }]}>
              EDUCATION FOR ALL
            </Text>
            <Text style={styles.para}> 
            Education for All is a programme aimed at the universalisation of government exam preparation "in a time bound manner".Here we have designed our courses in such a manner that they are easy to understand for students of any board of education.It aims to help students of any economic background as it is free and easily accessible.
            </Text>
     
        </View>
        <View style={styles.menuStyle}>
            <View style={styles.lineStyle}></View>
            <Menu/>
            <View style={[styles.lineStyle,{
                marginVertical:5,

            },
            ]}></View>
        </View>
      </View>
    );
  };
  
  
  const styles = StyleSheet.create({
    maincontainer: {
      height:"100%",
      display:"flex",
      justifyContent:"space-between",
      paddingHorizontal:20,
      backgroundColor:"#fff",
      textAlign:"center",
      
    },
  
    homeTop:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      paddingHorizontal:10
    },
    headerImage:{
      height: undefined,
      width:"100%",
      aspectRatio:2,
      display:"flex",
      alignItems:"stretch",
      marginTop:50,
      borderRadius:20,
    },
  mainHeader:{
    fontSize:30,
    color:"#344055",
    marginTop:0,
    alignItems:"center",
  },
  para:{
    fontSize:18,
    alignItems:"center",
    color:"black"
  },
  lineStyle:{
    marginBottom:3,
    borderWidth:0.2,
    borderColor:"grey",
  }
  })
export default Home;