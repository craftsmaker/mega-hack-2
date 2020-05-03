import React from "react";
import {View,Image,TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Feather} from "@expo/vector-icons";
import styles from "./styles.js"



const Header =({children}) => {
	const {openDrawer} = useNavigation();
	return(
		<View style={styles.header}>
			<View style={[styles.btn, {flex: 0.3}]}>
				<TouchableOpacity style={{flex:1,alignItems: "center",justifyContent: "center"}} onPress={openDrawer}>
					<Feather name="menu" size={28} color="#005EB5"/>
				</TouchableOpacity>
			</View>
			
			<View style={[styles.btn, {paddingRight: 55}]}>
				<Image source={require("../../../assets/splash.png")} style={{width: 24, height:24}} />
				<Image source={require("../../../assets/sebrae.png")} style={{width: 38, height:24}} />
			</View>
			{children}
		</View>
		
	)
}


export default Header;