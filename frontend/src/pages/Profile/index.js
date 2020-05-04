import React from "react";
import {View,Text,Image,TouchableOpacity} from "react-native";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./styles";
import globalStyles from "../../global"


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
	function handleProfile(){
		alert("Nenhuma funcionalidade até o momento :(")
	}

	return(
		<View style={globalStyles.main}>
			<View style={styles.profile}>
				<View style={{flex:1.6, paddingBottom: 20}}>
					<View style={{flex:1,padding: "5%", paddingLeft: "34%",paddingRight: "32%"}}>
						<Image source={require("../../../assets/images/person.png")} style={{width: "100%",height: "100%",borderRadius: 100}}/>
					</View>
				</View>
				<View style={{flex:1}}>
					<Text style={{textAlign: "center",marginBottom: 10, fontWeight: "bold",fontSize: 18}}>Jodie Whittaker</Text>
					<Text style={{textAlign: "center",marginBottom: 10}}>“Lets get a shift on” </Text>
					<Text style={{textAlign: "center",color: "#787878",fontSize: 12}}>Seguindo: 79  Seguidores: 8.439</Text>
				</View>
				<View style={{flex:1, justifyContent: "center", alignItems: "center",paddingTop: 10}} onPress={handleProfile}>
					<TouchableOpacity style={globalStyles.enterBtn}>
						<Text style={globalStyles.enterBtnText}>Editar Perfil</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{flex:1,backgroundColor: "#F7F7F7"}}/>
		</View>
	)
}

export default Profile;