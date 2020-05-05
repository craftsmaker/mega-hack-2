import React,{useState,useEffect} from "react";
import {View,Text,Image,TouchableOpacity} from "react-native";
import {useRoute} from "@react-navigation/native";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./styles";
import globalStyles,{defaultAccountsInfo} from "../../global";
import api from "../../services/api.js";
import * as constants from "../../constants";


const Profile = () => {
	return(
		<View style={globalStyles.container}>
			<Header/>
			<Main/>
			<Footer/>
		</View>
	)
}

function Main(){
	const {params: {id}} = useRoute();

	const {mocks: {accounts}} = constants;

	const profile = accounts[String(id - 1)]

	const [userInfo,setUserInfo] = useState({});
	
	function handleProfile(){
		alert("Nenhuma funcionalidade até o momento :(")
	}

	return(
		<View style={globalStyles.main}>
			<View style={styles.profile}>
				<View style={{flex:1.6, paddingBottom: 20}}>
					<View style={{flex:1,padding: "5%", paddingLeft: "34%",paddingRight: "32%"}}>
						<Image source={profile.imgData} style={{width: "100%",height: "100%",borderRadius: 100}}/>
					</View>
				</View>
				<View style={{flex:1}}>
					<Text style={{textAlign: "center",marginBottom: 10, fontWeight: "bold",fontSize: 18}}>{profile.name}</Text>
					<Text style={{textAlign: "center",marginBottom: 10}}>“Lets get a shift on” </Text>
					<Text style={{textAlign: "center",color: "#787878",fontSize: 12}}>Seguindo: {profile.following}  Seguidores: {profile.beingFollowedBy}</Text>
				</View>
				<View style={{flex:1, justifyContent: "center", alignItems: "center",paddingTop: 10}}>
					<TouchableOpacity style={globalStyles.enterBtn} onPress={handleProfile}>
						<Text style={globalStyles.enterBtnText}>Editar Perfil</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{flex:1,backgroundColor: "#F7F7F7"}}/>
		</View>
	)
}

export default Profile;