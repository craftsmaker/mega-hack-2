import React from "react";
import {View,Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Login from "./pages/Login";
import Register from "./pages/Register"


const Stack = createStackNavigator();

export default function Routes(){
	return(
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="Login" component={Login}/>
				<Stack.Screen name="Register" component={Register}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}