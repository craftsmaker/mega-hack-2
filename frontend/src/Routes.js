import React from "react";
import {View,Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";

import Login from "./pages/Login";
import Register from "./pages/Register"
import Home from "./pages/Home"
import Feed from "./pages/Feed"
import Community from "./pages/Community"
import Profile from "./pages/Profile"

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Routes = () => {
	return(
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="Login" component={Login}/>
				<Stack.Screen name="Register" component={Register}/>
				<Stack.Screen name="Drawer" component={D}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

function D(){
		return(
			<Drawer.Navigator>
				<Drawer.Screen name="Home" component={Home}/>
				<Drawer.Screen name="Community" component={Community}/>
				<Drawer.Screen name="Feed" component={Feed}/>
				<Drawer.Screen name="Profile" component={Profile}/>
			</Drawer.Navigator>
		)	
	}

export default Routes;