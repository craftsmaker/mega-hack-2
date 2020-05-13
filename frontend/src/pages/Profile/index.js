import React,{useState,useEffect,useLayoutEffect} from "react";
import {View,Text,Image,TouchableOpacity,Animated} from "react-native";
import {useRoute,useNavigation,CommonActions} from "@react-navigation/native";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./styles";
import globalStyles,{defaultAccountsInfo} from "../../global";
import api from "../../services/api.js";
import * as constants from "../../constants";


const Profile = () => {
	const [screenPosition,setScreenPosition] = useState(new Animated.ValueXY({x: 0, y: 0}));
	return(
		<View style={globalStyles.container}>
			<Header/>
			<Main screenPosition={screenPosition}/>
			<Footer screenPosition={screenPosition}/>
		</View>
	)
}

function Main({screenPosition}){
	const {params} = useRoute();
	const {dispatch} = useNavigation();

	const {mocks: {accounts}} = constants;

	const profile = accounts[String(params.id - 1)]

	const [userInfo,setUserInfo] = useState(profile);
	
	useLayoutEffect(() => {
		if (params?.animate){
			screenPosition.setValue({x: -params.moveX,y: 0});
			Animated.timing(screenPosition,{
				toValue: {
					x:0,
					y:0
				},
				duration: 800,
				useNativeDriver: true
			}).start(() => dispatch(CommonActions.setParams({animate: undefined})))
		}
	})

	function handleProfile(){
		alert("Nenhuma funcionalidade até o momento :(")
	}

	return(
		<Animated.View style={[{transform: [{translateX:  screenPosition.x}]},globalStyles.main]}>
			<View style={styles.profile}>
				<View style={{flex:1.6, paddingBottom: 20}}>
					<View style={{flex:1,padding: "5%", paddingLeft: "34%",paddingRight: "32%"}}>
						<Image source={userInfo.imgData} style={{width: "100%",height: "100%",borderRadius: 100}}/>
					</View>
				</View>
				<View style={{flex:1}}>
					<Text style={{textAlign: "center",marginBottom: 10, fontWeight: "bold",fontSize: 18}}>{userInfo.name}</Text>
					<Text style={{textAlign: "center",marginBottom: 10}}>“Lets get a shift on” </Text>
					<Text style={{textAlign: "center",color: "#787878",fontSize: 12}}>Seguindo: {userInfo.following}  Seguidores: {userInfo.beingFollowedBy}</Text>
				</View>
				<View style={{flex:1, justifyContent: "center", alignItems: "center",paddingTop: 10}}>
					<TouchableOpacity style={globalStyles.enterBtn} onPress={handleProfile}>
						<Text style={globalStyles.enterBtnText}>Editar Perfil</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{flex:1,backgroundColor: "#F7F7F7"}}/>
		</Animated.View>
	)
}

export default Profile;