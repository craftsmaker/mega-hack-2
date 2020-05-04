import React,{useEffect,useState} from "react";
import {View,Text,TextInput,TouchableOpacity,FlatList,ImageBackground, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import styles from "./styles.js"
import globalStyles from "../../global.js"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import api from "../../services/api";

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
	let path = "../../../assets/images/"
	const [peopleQuestions,setPeopleQuestions] = useState([
		{id: "0",imgData: require(path + "person.png"),name: "William",message:"Oh my dear! I am not so young anymore"},
		{id: "1",imgData: require(path + "person.png"),name: "Matt",message:"I like glasses, glasses are cool"},
		{id: "2",imgData: require(path + "person.png"),name: "Peter",message:"Four and a half billion? Easy peasy"},
		{id: "3",imgData: require(path + "person.png"),name: "TheOtherPeter",message:"Look at these eyebrows"},
		{id: "4",imgData: require(path + "person.png"),name: "Jodie", message:"Always have HOPE !!!"}
	]);

	useEffect(()=>{
		async function get(){
			 try{
			 	const {data: {msg}} = await api.get("/home");
			 	if (msg !== ""){
			 		setPeopleQuestions([msg])
			 	}
			 }catch(_){
			 	console.log(_)
			 }			 
		}
		
		get();
	})
	function handlePublishDoubt(){
		alert("Nenhuma funcionalidade até o momento :(")
	}
	
	let questions = [
		{id: "0",source: require(path + "person.png"),name: "William",message:"Oh my dear! I am not so young anymore"},
		{id: "1",source: require(path + "person.png"),name: "Matt",message:"I like glasses, glasses are cool"},
		{id: "2",source: require(path + "person.png"),name: "Peter",message:"Four and a half billion? Easy peasy"},
		{id: "3",source: require(path + "person.png"),name: "TheOtherPeter",message:"Look at these eyebrows"},
		{id: "4",source: require(path + "person.png"),name: "Jodie", message:"Always have HOPE !!!"}];

	let Topics = [
		{id:1,source: require(path + "person.png"),topicName: "VENDAS"},
		{id:2,source: require(path + "person.png"),topicName: "ATENDIMENTO"},
		{id:3,source: require(path + "person.png"),topicName: "MARKETING"},
	]
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
						data={Topics}
						keyExtractor={item => String(item.id)}
						renderItem={({item}) => (
							<View style={styles.topic}>								
									<ImageBackground source={item.source} style={styles.imgBackground}>
										<View style={{flex:1,backgroundColor: "rgba(0,0,0,0.4)", width: "100%",justifyContent: "center"}}>
											<Text style={{color: "white",textAlign: "center"}}>{item.topicName}</Text>
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
					data={peopleQuestions}
					keyExtractor={item => String(item.id)}
					renderItem={({item}) => (
						<View style={styles.person}>
							<Image source={item.imgData} style={{width: 30,height: 30}}/>
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