import React from "react";
import {View,Text,TouchableOpacity,Animated} from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import styles from "./styles.js";
import {Feather, FontAwesome, Ionicons, Octicons} from "@expo/vector-icons";
import {useNavigation,useRoute} from "@react-navigation/native";
import {connect} from "react-redux";

const Footer = ({storedValues,dispatch,actualScreen, screenPosition}) => {
	const transitionDuration = 800;
	const {navigate} = useNavigation();
	// const {params: {id,email,password}} = useRoute();
	const {params: {index}} = useRoute();
	
	const goToOtherScreen = (place,screenToGoIndex) => {

		let moveX = -350;
		if (index > screenToGoIndex){
			moveX = 350;
		}
		Animated.timing(screenPosition, {
			toValue:{
				x: moveX,
				y: 0
			},
			duration: transitionDuration,
			useNativeDriver: true
		}).start(() => navigate(place, {id:1,animate: "teste",index:screenToGoIndex,moveX: moveX,duration:transitionDuration}))
	}

	function goToHome(){
		
		// dispatch({type: "ACTIVATE_ANIMATION", toScreen: "Home", actualScreen:actualScreen})
		// navigate("Home",{id: 1, animate: true})
			
		goToOtherScreen("Home",0)
		
		
	}

	function goToCommunity(){

		// dispatch({type: "ACTIVATE_ANIMATION", toScreen: "Community", actualScreen:actualScreen})
		// navigate("Community",{id: 1, animate: true})
		goToOtherScreen("Community",1)
	}

	function goToFeed(){
		// dispatch({type: "ACTIVATE_ANIMATION", toScreen: "Feed", actualScreen:actualScreen})
		goToOtherScreen("Feed",2)
	}

	function goToProfile(){
		// dispatch({type: "ACTIVATE_ANIMATION", toScreen: "Profile", actualScreen:actualScreen})
		goToOtherScreen("Profile",3)
	}

	return(
		<View style={styles.footer}>
			<TouchableOpacity style={styles.button} onPress={goToHome}>
					<FontAwesome name="home" style={styles.buttonIcon}/>
					<Text style={styles.buttonText}>INICIO</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}  onPress={goToCommunity}>
					<Ionicons name="ios-chatbubbles" style={styles.buttonIcon}/>
					<Text style={styles.buttonText}>COMUNIDADE</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={goToFeed}>
					<FontAwesome name="feed" style={styles.buttonIcon} />
					<Text style={styles.buttonText}>Feed</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={goToProfile}>
					<Octicons name="person" style={styles.buttonIcon}/>
					<Text style={styles.buttonText}>MEU PERFIL</Text>
				</TouchableOpacity>
		</View>
	)
}

export default connect(state => ({
	storedValues: state
}))(Footer);