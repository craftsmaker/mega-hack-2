import React,{useEffect,useState} from "react";
import {View,Text,TextInput,TouchableOpacity,FlatList,ImageBackground, Image} from "react-native";
import {useNavigation,useRoute} from "@react-navigation/native";
import styles from "./styles.js"
import globalStyles from "../../global.js"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import api from "../../services/api";
import * as constants from "../../constants";

const Home = () => {	
	return (
		<View style={[globalStyles.container, styles.container]}>
			<Header/>
			<Main/>
			<Footer/>
		</View>
	)
}

function Main(){
	let peoplePath = "../../../assets/images/people/"
	let topicsPath = "../../../assets/images/topics/"

	const {mocks: {home,topics}} = constants;

	const [peopleQuestions,setPeopleQuestions] = useState([{}]);

	useEffect(()=>{
		async function get(){
			 try{
			 	// msg é um 'placeholder' para o identificador da variável com a lista de publicações
			 	// aonde cada índice tem um conjunto de variáveis
			 	const {data: {msg}} = await api.get("/home");
			 	if (msg !== ""){
			 		setPeopleQuestions([msg])
			 	}
			 }catch(_){
			 	
			 }			 
		}
		
		get();
	})
	function handlePublishDoubt(){
		alert("Nenhuma funcionalidade até o momento :(")
	}	

	return(
		<View style={globalStyles.main}>
			<View style={styles.search}>
				<View style={{flex:1,flexBasis: 30}}>
					<Text style={styles.searchTitle}>Veja o que está acontecendo na comunidade</Text>
					<TextInput 
						style={styles.searchInput}
						placeholder="O 	que você está procurando?"
					/>
					
				</View>
				<View style={styles.topics}>
					<Text>Tópicos</Text>
					<FlatList
						style={styles.topicsContainer}
						horizontal={true}
						data={topics}
						keyExtractor={item => String(item.id)}
						renderItem={({item}) => (
							<View style={styles.topic}>								
									<ImageBackground source={item.source} style={styles.imgBackground}>
										<View style={{flex:1,backgroundColor: "rgba(0,0,0,0.4)", width: "100%",justifyContent: "center"}}>
											<Text style={{color: "white",textAlign: "center"}}>{item.title}</Text>
										</View>
									</ImageBackground>
							</View>
						)}
					/>
				</View>
				<View style={{flex:1,justifyContent: "center",paddingLeft: 60,paddingRight: 60}}>
					<TouchableOpacity style={styles.searchButton} onPress={handlePublishDoubt}>
						<Text style={styles.searchButtonText}>PUBLICAR DÚVIDA</Text>
					</TouchableOpacity>
				</View>
			</View>
			
			<View style={styles.questions}>
				<Text>Perguntas recentes</Text>
				<FlatList
					style={styles.questionsAsked}
					data={home}
					keyExtractor={item => String(item.id)}
					renderItem={({item}) => (
						<View style={styles.person}>
							<Image source={item.imgData} style={{width: 30,height: 30,borderRadius: 100}}/>
							<View style={{paddingLeft: 10}}>
								<Text>{item.name}</Text>
								<Text>{item.message}</Text>
							</View>
						</View>
					)}

				/>
			</View>
		</View>
	)
}

export default Home;