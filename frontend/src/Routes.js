import React from "react";
import {View,Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Login from "./pages/Login";
import Register from "./pages/Register"
import Home from "./pages/Home"
import Feed from "./pages/Feed"


const Stack = createStackNavigator();

const Routes = () => {
	return(
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="Login" component={Login}/>
				<Stack.Screen name="Register" component={Register}/>
				<Stack.Screen name="Home" component={Home}/>
				<Stack.Screen name="Feed" component={Feed}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes;