import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Cources from '../screens/Cources'
import Xd from '../screens/Xd'
import FrstJSBasics from '../screens/FrstJSBasics'


const stackNavigatorOptions ={
    headerShown:false
}
export const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Cources:{screen:Cources},
    Xd:{screen:Xd},
    FrstJSBasics:{screen:FrstJSBasics},
    },
{
    defaultNavigationOptions:stackNavigatorOptions
}
)
export default createAppContainer(AppNavigator);