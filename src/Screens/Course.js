import React from "react";
import { FlatList, StyleSheet,Text,View,Image,TouchableOpacity} from "react-native";
import Courses from "./API/Courses";

const Course =({navigation})=>{
    const CourseCard =({item})=>{
    return(
        <View style={styles.maincontainer}>
            <View style={styles.coursecontainer}>
                <View>
                    <Image style={styles.cardImage}
                    source={item.image}
                    resizeMode="contain"
                    />
                </View>
                <Text style={styles.mainHeader}>
                    {item.title}

                </Text >
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonStyle}
                    onPress={()=> navigation.navigate("CourseDetails",
                    {
                        courseId: item.id,
                    })}>
                        <Text style={styles.buttonText}>
                            Course Details
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    )}

    return(
        <FlatList 
        keyExtractor={(item)=> item.id}
        data={Courses} renderItem={CourseCard}/>
        
    )
}

export default Course

const styles=StyleSheet.create({
    cardImage:{
        width:"100%",
        height: undefined,
        aspectRatio:1,      
    },
    maincontainer:{
        paddingHorizontal:20,
        textAlign:"center",
    },
    coursecontainer:{
        padding:30,
        backgroundColor:"rgba(255,255,255,0.90)",
        textAlign:"center",
        borderRadius:5,
        shadowColor:"grey",
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.5,
        shadowRadius:8,
        elevation:8,
        marginVertical:30,
    },
    mainHeader:{
        fontSize:22,
        color:"#344055",
        textTransform:"uppercase",
        fontWeight:"500",
        paddingTop:15,
        paddingBottom:15,
        textAlign:"center",
    },
    description:{
        textAlign:"left",
        paddingBottom:15,
        lineHeight:20,
        fontSize:16,
        color:"#7d7d7d",
    },
    buttonContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },
    buttonStyle:{
        backgroundColor:"#809fff",
       borderRadius:5,
        paddingVertical:10,
        paddingHorizontal:20,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    buttonText:{
        fontSize:20,
        color:"#eee",
        textTransform:"capitalize",
    },
    
})
