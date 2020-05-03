import React from "react";
import {View,Text,TextInput,TouchableOpacity,FlatList,ImageBackground, Image} from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import {useNavigation} from "@react-navigation/native";
import styles from "./styles.js"
import globalStyles from "../../global.js"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home(){
	return (
		<View style={[globalStyles.container, styles.container]}>
			<Header/>
			<Main/>
			<Footer/>
		</View>
	)
}

function Main(){
	let images = [
		{id: "0",source: require("./images/1.jpg")},
		{id: "1",source: require("./images/11.jpg")},
		{id: "2",source: require("./images/12.jpg")},
		{id: "3",source: require("./images/12.2.jpg")},
		{id: "4",source: require("./images/13.jpg")}];
	let questions = [
		{id: "0",source: require("./images/1.jpg"),name: "William",message:"Oh my dear! I am not so young anymore"},
		{id: "1",source: require("./images/11.jpg"),name: "Matt",message:"I like glasses, glasses are cool"},
		{id: "2",source: require("./images/12.jpg"),name: "Peter",message:"Four and a half billion? Easy peasy"},
		{id: "3",source: require("./images/12.2.jpg"),name: "TheOtherPeter",message:"Look at these eyebrows"},
		{id: "4",source: require("./images/13.jpg"),name: "Jodie", message:"Always have HOPE !!!"}];
	return(
		<View style={styles.main}>
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
						data={images}
						keyExtractor={item => item.id}
						renderItem={({item}) => (
							<View style={styles.topic}>
								<ImageBackground source={item.source} style={styles.imgBackground}>
									<Text style={{color: "white"}}>Topic</Text>
								</ImageBackground>
							</View>
						)}
					/>
				</View>
				<View style={{flex:1,justifyContent: "center"}}>
					<TouchableOpacity style={styles.searchButton}>
						<Text style={styles.searchButtonText}>PUBLICAR DÚVIDA</Text>
					</TouchableOpacity>
				</View>
			</View>
			
			<View style={styles.questions}>
				<Text>Perguntas recentes</Text>
				<FlatList
					style={styles.questionsAsked}
					data={questions}
					keyExtractor={item => item.id}
					renderItem={({item}) => (
						<View style={styles.person}>
							<Image source={item.source} style={{width: 30,height: 30}}/>
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