import React from "react";
import { StyleSheet,Text,View,Image,TouchableOpacity,FlatList,ScrollView} from "react-native";
import Courses from "../API/Courses";
import Enrollment from "../API/Enrollment";

const CourseDeatils =({navigation,route})=>{
    const id = route.params.courseId;
    console.log(id);

    const selectedCourse= Courses.find((element)=>
    {return id=== element.id;});
    // const Details =({selectedCourse})=>
    {
    

    return(
        <View style={styles.maincontainer}>
            <ScrollView>
            <View style={styles.coursecontainer}>
                <View>
                    <Image style={styles.cardImage}
                    source={selectedCourse.image}
                    resizeMode="contain"
                    />
                </View>
                <Text style={styles.mainHeader}>
                    {selectedCourse.title}

                </Text >
                
                <Text style={styles.description}>{selectedCourse.description}</Text>
                <Text style={styles.description}>{selectedCourse.course1}</Text>
                <Text style={styles.description}>{selectedCourse.course2}</Text>
                <Text style={styles.description}>{selectedCourse.course3}</Text>
                <Text style={styles.description}>{selectedCourse.course4}</Text>
                <Text style={styles.description}>{selectedCourse.course5}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonStyle}
                    onPress={()=> navigation.navigate("Enrollment")}>
                   
                        <Text style={styles.buttonText}>
                            Join Now
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            
            </ScrollView>
            
        </View>)}

  
//   return(
//     <FlatList 
//     keyExtractor={(item) => item.id }
//     data={Courses} renderItem={Details}/>
    
    
// )
}

const styles=StyleSheet.create({
    cardImage:{
        width:"100%",
        display:"flex",
        height: undefined,
        aspectRatio:1, 
        alignSelf:"center",     
    },
    maincontainer:{
        paddingHorizontal:20,
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

    subHeader:{
        fontSize:18,
        color:"#344055",
        textTransform:"uppercase",
        fontWeight:"500",
        paddingBottom:15,
        textAlign:"center",
    }

})



export default CourseDeatils