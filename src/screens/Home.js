import React from 'react'
import {View,Text,ImageBackground,TouchableOpacity,Image} from 'react-native'
import {ScrollView,TextInput} from 'react-native-gesture-handler'
import CourseList from '../screens/CourseList'

export default class Home extends React.Component{
    render(){
        return(
           <ImageBackground
            source={require('../images/smoke.png')}
            style={{width:"100%",height:"100%"}}
           >
               <ScrollView>
                   <View style={{
                       width:"100%",
                       alignItems:"flex-end",
                       paddingHorizontal:20
                   }}>
                       <View style={{
                           paddingHorizontal:10,
                           paddingVertical:12,
                           borderRadius:10,
                           marginTop:30,
                           backgroundColor:"#7FFF00"
                       }}>
                           <Image
                                source={require('../images/hum.png')}
                                style={{height:15,width:20}}
                           />
                       </View>
                   </View>
                   <Text style={{
                       paddingHorizontal:20,
                       fontSize:35,
                       paddingTop:40,
                       fontFamily:"Bold",
                       color:"#FFF"
                   }}>
                       Welcome back, Alena
                   </Text>

                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       backgroundColor:"#FFF",
                       padding:10,
                       borderRadius:12,
                       marginHorizontal:20,
                       marginTop:20
                   }}>
                       <TextInput
                            placeholder="Search for new knowledge!"
                            placeholderTextColor="#808580"
                            style={{
                                fontFamily:"Bold",
                                fontSize:12,
                                width:280,
                                paddingHorizontal:12
                            }}
                       />
                       <Image
                            source={require('../images/poisk3.jpg')}
                            style={{height:14,width:14}}
                       />
                   </View>
                   <View style={{
                       flexDirection:"row",
                       justifyContent:"center",
                       backgroundColor:"#595656",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30,
                       opacity:"65%"
                   }}>
                       <View >
                           <Text style={{
                               flexDirection:"row",
                               justifyContent:"center",
                               alignSelf:"center",
                               color:"#FFFFFF",
                               fontSize:20,
                               fontFamily:"Bold",
                               width:500,
                               paddingRight:100,
                               opacity:"100%"
                           }}>
                               Start learning new technologies
                           </Text>
                           <TouchableOpacity
                                onPress={()=>this.props.navigation.navigate('Cources')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#fcf2ff",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"#000000",
                                        fontFamily:"Bold",
                                        fontSize:12
                                    }}>Categories</Text>  
                                    <Image
                                        source={require('../images/strelka.png')}
                                        style={{marginLeft:20,width:15,height:15}}
                                    />
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('../images/undraw.png')}
                            style={{marginLeft:-80,marginTop:35}}
                       />

                   </View>
                   <Text style={{
                       color:"#FFFFFF",
                       fontFamily:"Bold",
                       fontSize:20,
                       paddingHorizontal:20,
                       marginTop:20,
                       marginBottom:10
                   }}>Courses in progress</Text>

                   <CourseList
                        onPress={()=>this.props.navigation.navigate("Xd")}
                        img={require('../images/js3.png')}
                        title="Introduction to Java Script"
                        bg="#fcf2ff"
                   />
                    <CourseList
                        img={require('../images/html2.png')}
                        title="HTML basics"
                        bg="#c4ff8a"
                   />
                    <CourseList
                        img={require('../images/css.png')}
                        title="Cascading Style Sheets basics"
                        bg="#d9cedd"
                   />
               </ScrollView>
           </ImageBackground>
        )
    }
}