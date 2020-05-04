import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import styles from "./styles.js";
import {Feather, FontAwesome, Ionicons, Octicons} from "@expo/vector-icons";
import {useNavigation,useRoute} from "@react-navigation/native";

const Footer = () => {
	const {navigate} = useNavigation();
	const {params: {id,email,password}} = useRoute();

	return(
		<View style={styles.footer}>
			<TouchableOpacity style={styles.button} onPress={() => navigate("Home",{id:id,email:email})}>
					<FontAwesome name="home" style={styles.buttonIcon}/>
					<Text style={styles.buttonText}>INICIO</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}  onPress={() => navigate("Community",{id:id,email:email})}>
					<Ionicons name="ios-chatbubbles" style={styles.buttonIcon}/>
					<Text style={styles.buttonText}>COMUNIDADE</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => navigate("Feed",{id:id,email:email})}>
					<FontAwesome name="feed" style={styles.buttonIcon} />
					<Text style={styles.buttonText}>Feed</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => navigate("Profile",{id:id,email:email})}>
					<Octicons name="person" style={styles.buttonIcon}/>
					<Text style={styles.buttonText}>MEU PERFIL</Text>
				</TouchableOpacity>
		</View>
	)
}

export default Footer;