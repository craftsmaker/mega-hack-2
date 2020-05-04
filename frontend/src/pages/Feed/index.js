import React,{useState} from "react";
import {View,Text,TextInput,Image,TouchableOpacity,FlatList} from "react-native";
import styles from "./styles.js";
import globalStyles from "../../global.js"

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

	const [peoplePublications,setPeoplePublications] = useState([
		{id: "0",imgData: require(peoplePath + "dd.jpg"),name: "Diego",message:"Alguém conhece uma montadora de propulsores boa?"},
		{id: "1",imgData: require(peoplePath + "jw.jpg"),name: "Jodie",message:"Preciso de uma ajuda com contadores"},
		{id: "2",imgData: require(peoplePath + "kq.jpg"),name: "Kelvin",message:"Quais estratégias vocês tão usando para aumentar..."},
		{id: "3",imgData: require(peoplePath + "vg.jpg"),name: "Victor",message:"Troco serviços de consultoria por serviços de design"}
	]);
	return(
		
		<View style={globalStyles.main}>
			<View style={styles.publishForm}>
				<View style={styles.inputSelection}>
					<View style={{flex:0.9,marginRight: 20}}>
						<Image source={require("../../../assets/images/people/jw.jpg")} style={{width: "100%",height: "100%",borderRadius: 100}}/>
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
									<Text>Hope is the best weapon against'em all</Text>
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