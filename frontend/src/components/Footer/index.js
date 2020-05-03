import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import styles from "./styles.js";
import {Feather, FontAwesome, Ionicons, Octicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const Footer = () => {
	const navigation = useNavigation();

	function goToFeedScreen(){
		navigation.navigate("Feed");
	}

	function goToHomeScreen(){
		navigation.navigate("Home");
	}

	return(
		<HideWithKeyboard>
			<View style={styles.footer}>
				<View style={styles.buttons}>
					<TouchableOpacity style={styles.button} onPress={goToHomeScreen}>
						<FontAwesome name="home" style={styles.buttonIcon}/>
						<Text style={styles.buttonText}>INICIO</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Ionicons name="ios-chatbubbles" style={styles.buttonIcon}/>
						<Text style={styles.buttonText}>COMUNIDADE</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<FontAwesome name="feed" style={styles.buttonIcon} onPress={goToFeedScreen}/>
						<Text style={styles.buttonText}>Feed</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Octicons name="person" style={styles.buttonIcon}/>
						<Text style={styles.buttonText}>MEU PERFIL</Text>
					</TouchableOpacity>
				</View>
			</View>
		</HideWithKeyboard>
	)
}

export default Footer;