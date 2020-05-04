import React,{useState,useEffect} from "react";
import {View,Text,Image,TextInput,TouchableOpacity,FlatList} from "react-native";
import styles from "./styles";
import globalStyles from "../../global";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Community = () => {
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
	// formato dos dados, caso a imagem seja uma string base 64 ou link usar usar:
	// imgData: {uri: "string base 64"} no formato 
	// string Base 64 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
	const [peoplePublications,setPeoplePublications] = useState([
		{id: "0",imgData: require(peoplePath + "dd.jpg"),name: "Diego",message:"Alguém conhece uma montadora de propulsores boa?"},
		{id: "1",imgData: require(peoplePath + "jw.jpg"),name: "Jodie",message:"Preciso de uma ajuda com contadores"},
		{id: "2",imgData: require(peoplePath + "kq.jpg"),name: "Kelvin",message:"Quais estratégias vocês tão usando para aumentar..."},
		{id: "3",imgData: require(peoplePath + "vg.jpg"),name: "Victor",message:"Troco serviços de consultoria por serviços de design"}
	]);

	useEffect(() => {
		async function getData(){
			try{
				const {data: {msg}} = await api.get("/publications");

				setPeoplePublications([msg]);
			}catch(_){

			}
		}
		getData()
	})

	function handlePublish(){
		alert("Nenhuma funcionalidade até o momento :(")
	}
	function handleSelectTopic(){
		alert("Nenhuma funcionalidade até o momento :(")
	}
	return(
		<View style={globalStyles.main}>
			<View style={styles.publishForm}>
				<View style={styles.publishInput}>
					<TextInput
						style={{borderWidth: 1,borderColor: "#C4C4C4",borderRadius: 3,padding: 5}}
						multiline={true}
						placeholder="Crie uma nova publicação contando uma experiência nos negócios ou faça uma pergunta para à comunidade"
					/>
				</View>
				<View style={styles.publishButtons}>
					<TouchableOpacity onPress={handleSelectTopic} style={{flex:1,justifyContent: "center",backgroundColor: "#C4C4C4",borderRadius: 3,marginBottom:2,marginRight: 60}}>
						<Text style={{textAlign: "center"}}>Selecionar o tópico</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={handlePublish} style={[globalStyles.enterBtn,{flex:0.6, justifyContent: "center"}]} >
						<Text style={globalStyles.enterBtnText}>PUBLICAR</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={{flex:0.25, flexBasis: 135}}>
				<FlatList
					data={peoplePublications}
					keyExtractor={n => String(n.id)}
					renderItem={({item}) => (
						<View style={styles.personPublication}>
							<View style={styles.publicationImg}>
								<Image source={item.imgData} style={styles.img} />
							</View>
							<View style={styles.publicationText}>
								<View style={{flex:1,justifyContent: "center"}}>
									<Text style={styles.text}>{item.name} 12:12 - 12/12/2012</Text>
								</View>
								<View style={{flex:1,justifyContent: "center"}}>
									<Text style={styles.text}>{item.message}</Text>
								</View>
							</View>
						</View>
					)}
				/>
			</View>

			<View style={styles.waitingAnswer}>
				<Text style={{padding: 5, backgroundColor: "#F7F7F7"}}>Tópicos aguardando respostas</Text>
				<View style={{flex:1}}>
					<FlatList
						data={peoplePublications}
						keyExtractor={n => String(n.id)}
						renderItem={({item}) => (
							<View style={styles.personPublication}>
								<View style={styles.publicationImg}>
									<Image source={item.imgData} style={styles.img} />
								</View>
								<View style={styles.publicationText}>
									<View style={{flex:1,justifyContent: "center"}}>
										<Text style={styles.text}>{item.name} 12:12 - 12/12/2012</Text>
									</View>
									<View style={{flex:1,justifyContent: "center"}}>
										<Text style={styles.text}>{item.message}</Text>
									</View>
								</View>
							</View>
						)}
					/>
				</View>
			</View>
			<View style={{flex:0.3,backgroundColor: "#F7F7F7"}}/>
		</View>
	)
}

export default Community;