import React,{useState,useEffect} from "react";
import {View,Text,TextInput,Image,TouchableOpacity,FlatList} from "react-native";
import {useRoute} from "@react-navigation/native";
import styles from "./styles.js";
import globalStyles,{defaultAccountsInfo} from "../../global.js"
import api from "../../services/api";
import * as constants from "../../constants";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
const Feed = () => {
	return(
		<View style={globalStyles.container}>
			<Header/>
			<Main/>
			<Footer/>
		</View>
	)
}

function Main(){
	let peoplePath = "../../../assets/images/people/"
	const {params: {id}} = useRoute();
	const {mocks: {accounts,feed}} = constants;
	const [userImg,setUserImg] = useState(accounts[String(id - 1)].imgData)
	const [peoplePublications,setPeoplePublications] = useState([]);

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
		<View style={globalStyles.main}>
			<View style={styles.publishForm}>
				<View style={styles.inputSelection}>
					<View style={{flex:0.9,marginRight: 20}}>
						<Image source={userImg} style={{width: "100%",height: "100%",borderRadius: 100}}/>
					</View>
					<View style={{flex:4, borderWidth:1,borderColor: "#C4C4C4"}}>
						<TextInput
							placeholder="Compartilhe algo com seus seguidores :)"
							multiline={true} 
							style={{height: "100%",paddingLeft: 10}}
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
						data={feed}
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
		</View>
	)
}


export default Feed;