import React from 'react'
import {View,StyleSheet,Image,StatusBar,Dimensions, Text, TouchableOpacity} from 'react-native'
import Chapters from '../screens/Chapters'


const {width, height} = Dimensions.get("window");


export default class FrstJSBasics extends React.Component{
    render(){
        return(
           <View style={{backgroundColor:"#FFFFFF"}}>
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
               <StatusBar backgroundColor="#f58084"/>
               <Chapters
                    color="#765385"
                    percent={25}
                    duration="2 hours, 20 minutes"
                    title="Introduction"
                    num={1}
               />
               <Image source={require('../images/engine.jpeg')}/>
               <Text style={{
                   fontFamily:"Medium",
                   textAlign:"justify",
                   color:"#345c74",
                   paddingLeft:42,
                   paddingRight:35
               }}>
                   JavaScript was initially created to “make web pages alive”.

                   The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.

                   Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.

                   Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

                   The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

                   Different engines have different “codenames”. For example:

                       V8 – in Chrome, Opera and Edge.
                       SpiderMonkey – in Firefox.
                       …There are other codenames like “Chakra” for IE, “JavaScriptCore”, “Nitro” and “SquirrelFish” for Safari, etc.

                   The terms above are good to remember because they are used in developer articles on the internet. We’ll use them too. For instance, if “a feature X is supported by V8”, then it probably works in Chrome, Opera and Edge.
               </Text>
               <Image source={require('../images/engine.jpeg')} style={{width:400,height:300, marginHorizontal:30, marginVertical:15}}/>
               <Text style={{
                   fontFamily:"Medium",
                   textAlign:"justify",
                   color:"#345c74",
                   paddingLeft:42,
                   paddingRight:35
               }}>
                   Modern JavaScript is a “safe” programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it.

                   JavaScript’s capabilities greatly depend on the environment it’s running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.

                   In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.

                   The syntax of JavaScript does not suit everyone’s needs. Different people want different features.

                   That’s to be expected, because projects and requirements are different for everyone.

                   So, recently a plethora of new languages appeared, which are transpiled (converted) to JavaScript before they run in the browser.

                   Modern tools make the transpilation very fast and transparent, actually allowing developers to code in another language and auto-converting it “under the hood”.
               </Text>
                   <View style={{
                       flexDirection:"row",
                       paddingVertical:5,
                       backgroundColor:"#7FFF00",
                       marginHorizontal:40,
                       paddingVertical:15,
                       alignItems:"center",
                       borderRadius:10,
                       justifyContent:"center",
                       marginTop:20,
                       marginBottom:15,
                       opacity:"80%"
                   }}>
                       <Text style={{
                           color:"#000000",
                           fontFamily:"Bold",
                           fontSize:15,
                           marginRight:45
                       }}>
                           Try to pass the test
                       </Text>
                   </View>
           </View>
        )
    }
}
