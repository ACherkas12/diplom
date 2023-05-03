import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground} from 'react-native'
import {Modalize} from 'react-native-modalize'
import CourseList from '../screens/CourseList'

export default class Cources extends React.Component{
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
                        onPress={()=>this.props.navigation.navigate("Home")}
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
                            style={{width:20,height:15}}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    color:"#FFF",
                    fontSize:35,
                    fontFamily:"Bold",
                    width:200,
                    alignSelf:"center",
                    textAlign:"center",
                    marginTop:34
                    
                    }}>
                    Web Cources
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
                    alwaysOpen={500}
                    scrollViewProps={{showsVerticalScrollIndicator:false}}
                >
                    <View style={{marginTop:40}}>
                            <CourseList
                                onPress={()=>this.props.navigation.navigate("Xd")}
                                img={require('../images/js3.png')}
                                title="Introduction to Java Script"
                                bg="#fcf2ff"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("Xd")}
                                img={require('../images/html2.png')}
                                title="HTML basics"
                                bg="#c4ff8a"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("Xd")}
                                img={require('../images/css.png')}
                                title="Cascading Style Sheets basics"
                                bg="#f6e1ff"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("Xd")}
                                img={require('../images/git.png')}
                                title="Git basics"
                                bg="#e8ffd0"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("Xd")}
                                img={require('../images/react.jpg')}
                                title="Introduction to React"
                                bg="#eedcff"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("Xd")}
                                img={require('../images/js3.png')}
                                title="Java Script Main"
                                bg="#e1f3d0"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("Xd")}
                                img={require('../images/js3.png')}
                                title="Java Script Profi"
                                bg="#fcf2ff"
                            />
                    </View>
                </Modalize>
            </ImageBackground>
        )
    }
}
