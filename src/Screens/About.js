import React from "react";
import { StyleSheet,Text,View,Image, TouchableOpacity, Linking,ScrollView} from "react-native";

const About =()=>{

    return(
    
        <View style={styles.aboutContainer}>
            
            <Text style={styles.mainHeader}>
                Anshul Sharma
            </Text>
            <Text style={styles.parastyle}>
               I am a Hustler
            </Text>
            <View>
                <Image style={styles.imgStyle}
                resizeMode="contain"
                source={require("../../assets/Course/Self.jpeg")
                    
                }/>

            </View>
            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}>About Me</Text>
                <Text style={styles.paraStyle}> I have cleared UPSC CDS, AFCAT,INET,Coast Guard Assistant Commandent multiple times and appeared for SSB for all entries 19 times. I am Conferenced out multiple times and had a deep experience of cracking all these exams.I have put all my expertise in these course and they are ready to rock.Join them now and complete your dream.</Text>

            </View>
            <Text style={styles.mainHeader}>Follow me on Social Network</Text>
            <View style={styles.menuContainer}>
               <TouchableOpacity
               style={styles.buttonStyle}
                onPress={()=> Linking.openURL("https://m.facebook.com/profile.php?id=100002721402057&eav=AfZxC4Vtwu4nUuFH16pQzElezTTvujakXGGtLkKxDLzCiwqayHhjpgj1000aiHh3seI&paipv=0&_rdr")}>
                <Image style={styles.iconStyle}
                source={require("../../assets/facebook.png")
            }
                ></Image>
               </TouchableOpacity>

               <TouchableOpacity
               style={styles.buttonStyle}
                onPress={()=> Linking.openURL("https://www.youtube.com/channel/UCEbGLWsAARJXb5I5i7Cec2Q?app=desktop")}>
                <Image style={styles.iconStyle}
                source={require("../../assets/youtube.png")
            }
                ></Image>
               </TouchableOpacity>
            </View>
        </View>
    )
}

export default About

const styles=StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center",
      },
    
      imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
      },
      mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "JosefinSans_700Bold",
      },
      paraStyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 20,
      },
      aboutLayout: {
        backgroundColor: "#4c5dab",
        paddingHorizontal: 30,
        marginVertical: 30,
      },
      aboutSubHeader: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        fontFamily: "JosefinSans_700Bold",
        alignSelf: "center",
      },
      aboutPara: {
        color: "#fff",
      },
      menuContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
      },
    
      iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
      },
    
})
