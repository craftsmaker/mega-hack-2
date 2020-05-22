import React,{useState,useEffect,useLayoutEffect} from "react";
import {View,Text,TextInput,Image,TouchableOpacity,FlatList,Animated} from "react-native";
import {useRoute,useNavigation,CommonActions} from "@react-navigation/native";
import styles from "./styles.js";
import globalStyles,{defaultAccountsInfo} from "../../global.js"
import api from "../../services/api";
import * as constants from "../../constants";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
const Feed = () => {
	const [screenPosition,setScreenPosition] = useState(new Animated.ValueXY({x: 350,y: 0}))
	return(
		<View style={globalStyles.container}>
			<Header/>
			<Main screenPosition={screenPosition}/>
			<Footer screenPosition={screenPosition}/>
		</View>
	)
}

function Main({screenPosition}){
	const {params: {id}} = useRoute();
	const {mocks: {accounts,feed}} = constants;
	const [userImg,setUserImg] = useState(accounts[String(id - 1)].imgData)
	const [peoplePublications,setPeoplePublications] = useState(feed);
	

	const {params} = useRoute();
	const {dispatch} = useNavigation();

	useLayoutEffect(() => {
		if (params?.animate){
			screenPosition.setValue({x: -params.moveX, y: 0})
			Animated.timing(screenPosition, {
				toValue: {
					x: 0,
					y: 0
				},
				duration: params.duration,
				useNativeDriver: true
			}).start(() => dispatch(CommonActions.setParams({animate: undefined})))
		}
	})

	useEffect(() => {
		async function getData(){
			// onde 1 é o id do usuário
			// e msg é a variável usada na resposta contendo as publicações
			try{
				const {data: {publications,img}} = await api.get("user/1/publications")
				setPeoplePublications([publications])
				setUserImg(img)
			}catch(_){

			}
		}
		getData()
	})

	return(		
		<Animated.View style={[{transform: [{translateX: screenPosition.x}]},globalStyles.main]}>
			<View style={styles.publishForm}>
				<View style={styles.inputSelection}>
					<View style={{flex:0.9,marginRight: 20}}>
						<Image source={userImg} style={{width: "100%",height: "100%",borderRadius: 100}}/>
					</View>
					<View style={{flex:4}}>
						<TextInput
							style={{borderWidth:2,borderColor: "#C4C4C4",borderRadius: 3,padding: 5,textAlignVertical: "top",paddingLeft: 10}}
							placeholder="Compartilhe algo com seus seguidores :)"
							multiline={true} 
						/>
					</View>
				</View>
				<View style={styles.publishSelection}>
					<View style={{flex:0.8}}/>
					<TouchableOpacity onPress={() => alert("Nenhuma funcionalidade até o momento :(")}style={[globalStyles.enterBtn, {flex:1,height: "100%",minHeight: 50}]}>
						<Text style={globalStyles.enterBtnText}>Publicar</Text>
					</TouchableOpacity>
				</View>
				
			</View>

			<View style={styles.followingPublications}>
				<View style={{flex:1,justifyContent: "center"}}>
					<Text style={{paddingLeft: 10}}>Publicações de quem você segue</Text>
				</View>
				<View style={styles.publications}>
					<FlatList
						data={peoplePublications}
						keyExtractor={n => String(n.id)}
						renderItem={({item}) => (
							<View style={styles.personPublication}>
								<View style={{flex:1,flexDirection: "row",height: 30}}>
									<View style={{flex:0.5}}>
										<Image source={item.imgData} style={{width: "100%", height: "100%", borderRadius: 100}} />
									</View>
									<Text style={{flex:4, paddingLeft:10}}>Alex 12:12 - 12/12/2012</Text>
								</View>
								<View style={{flex:1, paddingTop: 10}}>
									<Text>{item.message}</Text>
								</View>
							</View>
						)}
					/>
				</View>
			</View>
		</Animated.View>
	)
}


export default Feed;