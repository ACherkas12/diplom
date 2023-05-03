import React from 'react'
import {View,Text,Image,ImageBackground,TouchableOpacity,} from 'react-native'
import { Modalize } from 'react-native-modalize'
import Chapters from '../screens/Chapters'

export default class Xd extends React.Component{
    render(){
        return(
          <ImageBackground
                source={require('../images/phone.jpg')}
                style={{width:"100%",height:"100%"}}
          >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20
                }}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate("Cources")}
                        style={{
                            paddingHorizontal:10,
                            paddingVertical:13,
                            borderRadius:10,
                            marginTop:30,
                            backgroundColor:"#7FFF00"
                        }}
                    >
                            <Image
                                source={require('../images/a1.png')}
                                style={{height:15,width:20}}
                            />
                    </TouchableOpacity>
                </View>
                <Image
                    source={require('../images/js3.png')}
                    style={{
                        height:35,
                        width:35,
                        alignSelf:"center",
                        marginTop:20
                    }}
                />
                <Text style={{
                    color:"#FFF",
                    fontFamily:"Bold",
                    fontSize:35,
                    width:300,
                    alignSelf:"center",
                    textAlign:"center"
                }}>Java Script</Text>
                <Text style={{
                    color:"#FFF",
                    fontFamily:"Medium",
                    fontSize:35,
                    width:200,
                    alignSelf:"center",
                    textAlign:"center"
                }}>
                    Basics
                </Text>


                <Modalize 
                    handleStyle={{
                        marginTop:30,
                        backgroundColor:"#e9e9e9",
                        width:80
                    }}
                    modalStyle={{
                        borderTopLeftRadius:60,
                        borderTopRightRadius:60
                    }}
                    alwaysOpen={510}
                    scrollViewProps={{ showsVerticalScrollIndicator:false }}
                >
                    <View style={{
                        flexDirection:"row",
                        marginHorizontal:30,
                        marginTop:40
                    }}>
                        <Image
                            source={require('../images/roundPhoto1.png')}
                            style={{
                                height:50,
                                width:50,
                                borderWidth:2,
                                borderColor:"#7FFF00",
                                borderRadius:50,
                            }}
                        />
                        <View style={{marginHorizontal:20}}>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:18
                            }}>Alena Cherkas</Text>
                            <Text style={{
                                color:"#000000",
                                fontFamily:"Medium",
                                fontSize:12
                            }}>
                                Author, Frontend Developer
                            </Text>
                        </View>
                        <View style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#e1f3d0",
                            width:40,
                            height:40,
                            borderRadius:40
                        }}>
                            <Image
                                source={require('../images/a2.png')}
                            />
                        </View>
                    </View>
                    <View>

                        <Chapters
                            num={1}
                            color="#fcf2ff"
                            percent={25}
                            duration="2 hours, 20 minutes"
                            title="Introduction"
                            onPress={()=>this.props.navigation.navigate('FrstJSBasics')}
                        />
                         <Chapters
                            num={2}
                            color="#fcf2ff"
                            percent={50}
                            duration="1 hours, 35 minutes"
                            title="Data types"
                            onPress={()=>this.props.navigation.navigate('VideoPage')}
                        />
                         <Chapters
                            num={3}
                            color="#fcf2ff"
                            percent={0}
                            duration="2 hours, 20 minutes"
                            title="Basic math operations"
                        />
                         <Chapters
                            num={4}
                            color="#fcf2ff"
                            percent={0}
                            duration="2 hours, 20 minutes"
                            title="Logical operators"
                        />
                         <Chapters
                            num={5}
                            color="#fcf2ff"
                            percent={0}
                            duration="0 hours, 30 minutes"
                            title="Summary & Exercise"
                        />
                    </View>

                    <View
                        style={{
                            flexDirection:"row",
                            paddingVertical:5,
                            backgroundColor:"#7FFF00",
                            marginHorizontal:20,
                            paddingVertical:15,
                            alignItems:"center",
                            borderRadius:10,
                            justifyContent:"center",
                            opacity:"80%"
                        }}
                    >
                        <Text style={{
                            color:"#000000",
                            fontFamily:"Bold",
                            fontSize:13,
                            marginRight:50
                        }}>Resume last lesson</Text>
                        <Image source={require('../images/a2.png')}/>
                    </View>
                </Modalize>

          </ImageBackground>
        )
    }
}