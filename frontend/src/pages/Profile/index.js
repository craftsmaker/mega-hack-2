import React,{useState,useEffect} from "react";
import {View,Text,Image,TouchableOpacity} from "react-native";
import {useRoute} from "@react-navigation/native";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./styles";
import globalStyles from "../../global";
import api from "../../services/api.js";
import defaultAccountsInfo from "../../services/data.json";


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

	const [userInfo,setUserInfo] = useState({
		name: defaultAccountsInfo[String(id)].name,
		img:require("../../../assets/images/people/jw.jpg"),
		text: "Lets get it started",
		following: "79",
		followed: "8.439"
	});
	function handleProfile(){
		alert("Nenhuma funcionalidade até o momento :(")
	}

	return(
		<View style={globalStyles.main}>
			<View style={styles.profile}>
				<View style={{flex:1.6, paddingBottom: 20}}>
					<View style={{flex:1,padding: "5%", paddingLeft: "34%",paddingRight: "32%"}}>
						<Image source={userInfo.img} style={{width: "100%",height: "100%",borderRadius: 100}}/>
					</View>
				</View>
				<View style={{flex:1}}>
					<Text style={{textAlign: "center",marginBottom: 10, fontWeight: "bold",fontSize: 18}}>{userInfo.name}</Text>
					<Text style={{textAlign: "center",marginBottom: 10}}>“Lets get a shift on” </Text>
					<Text style={{textAlign: "center",color: "#787878",fontSize: 12}}>Seguindo: {userInfo.following}  Seguidores: {userInfo.followed}</Text>
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