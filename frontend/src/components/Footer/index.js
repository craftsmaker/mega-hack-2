import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import styles from "./styles.js";
import {Feather, FontAwesome, Ionicons, Octicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const Footer = () => {
	const {navigate} = useNavigation();

	return(
		<HideWithKeyboard>
			<View style={styles.footer}>
				<View style={styles.buttons}>
					<TouchableOpacity style={styles.button} onPress={() => navigate("Home")}>
						<FontAwesome name="home" style={styles.buttonIcon}/>
						<Text style={styles.buttonText}>INICIO</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Ionicons name="ios-chatbubbles" style={styles.buttonIcon} onPress={() => navigate("Community")}/>
						<Text style={styles.buttonText}>COMUNIDADE</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<FontAwesome name="feed" style={styles.buttonIcon} onPress={() => navigate("Feed")}/>
						<Text style={styles.buttonText}>Feed</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Octicons name="person" style={styles.buttonIcon} onPress={() => navigate("Profile")}/>
						<Text style={styles.buttonText}>MEU PERFIL</Text>
					</TouchableOpacity>
				</View>
			</View>
		</HideWithKeyboard>
	)
}

export default Footer;