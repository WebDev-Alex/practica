import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import TabNavigator from "./TabNavigator"

const RootStack = createNativeStackNavigator()

const RootNavigator = () =>{


    return (<>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen component = {TabNavigator} name = "MainScreen"/>
        </RootStack.Navigator>
    </>)
}

export default RootNavigator
