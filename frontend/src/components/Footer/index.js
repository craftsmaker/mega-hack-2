import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import styles from "./styles.js";
import {Feather, FontAwesome, Ionicons, Octicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const Footer = () => {
	const {navigate} = useNavigation();

	return(
		<View style={styles.footer}>
			<TouchableOpacity style={styles.button} onPress={() => navigate("Home")}>
					<FontAwesome name="home" style={styles.buttonIcon}/>
					<Text style={styles.buttonText}>INICIO</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}  onPress={() => navigate("Community")}>
					<Ionicons name="ios-chatbubbles" style={styles.buttonIcon}/>
					<Text style={styles.buttonText}>COMUNIDADE</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => navigate("Feed")}>
					<FontAwesome name="feed" style={styles.buttonIcon} />
					<Text style={styles.buttonText}>Feed</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => navigate("Profile")}>
					<Octicons name="person" style={styles.buttonIcon}/>
					<Text style={styles.buttonText}>MEU PERFIL</Text>
				</TouchableOpacity>
		</View>
	)
}

export default Footer;