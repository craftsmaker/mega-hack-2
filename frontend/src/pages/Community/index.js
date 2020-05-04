import React from "react";
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
					<TouchableOpacity style={{flex:1,justifyContent: "center",backgroundColor: "#C4C4C4",borderRadius: 3,marginBottom:2,marginRight: 60}} onPress={handleSelectTopic}>
						<Text style={{textAlign: "center"}}>Selecionar o tópico</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[globalStyles.enterBtn,{flex:0.6, justifyContent: "center"}]} onPress={handlePublish}>
						<Text style={globalStyles.enterBtnText}>PUBLICAR</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={{flex:0.2, flexBasis: 150}}>
				<FlatList
					data={[1,2,3,4]}
					keyExtractor={n => String(n)}
					renderItem={({item}) => (
						<View style={styles.personPublication}>
							<View style={styles.publicationImg}>
								<Image source={require("../../../assets/sebrae.png")} style={styles.img} />
							</View>
							<View style={styles.publicationText}>
								<View style={{flex:1,justifyContent: "center"}}>
									<Text style={styles.text}>Alex 12:12 - 12/12/2012</Text>
								</View>
								<View style={{flex:1,justifyContent: "center"}}>
									<Text style={styles.text}>Hope is the best weapon against'em all</Text>
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
						data={[1,2,3,4]}
						keyExtractor={n => String(n)}
						renderItem={({item}) => (
							<View style={styles.personPublication}>
								<View style={styles.publicationImg}>
									<Image source={require("../../../assets/sebrae.png")} style={styles.img} />
								</View>
								<View style={styles.publicationText}>
									<View style={{flex:1,justifyContent: "center"}}>
										<Text style={styles.text}>Alex 12:12 - 12/12/2012</Text>
									</View>
									<View style={{flex:1,justifyContent: "center"}}>
										<Text style={styles.text}>Hope is the best weapon against'em all</Text>
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