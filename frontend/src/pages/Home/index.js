import React,{useEffect,useState,useLayoutEffect,InteractionManager } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	ImageBackground,
	Image,
	useWindowDimensions,
	Animated
} from "react-native";
import { useRoute, useNavigation, CommonActions } from '@react-navigation/native';
import styles from "./styles.js"
import globalStyles from "../../global.js"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import api from "../../services/api";
import * as constants from "../../constants";
import {connect,useStore} from "react-redux";

const Home = ({storedValues,dispatch}) => {
	const [screenPosition,setScreenPosition] = useState(new Animated.ValueXY({x: 0,y: 0}))
	return (
		<View style={[globalStyles.container, styles.container]}>
			<Header/>
			<Main screenPosition={screenPosition}/>
			<Footer screenPosition={screenPosition} actualScreen="Home"/>
		</View>
	)
}

function Main({screenPosition}){
	

	const {mocks: {home,topics}} = constants;

	const [peopleQuestions,setPeopleQuestions] = useState(home);

	// // Animations
	const {params} = useRoute()
	const {dispatch} = useNavigation();

	useLayoutEffect(() => {
		if (params?.animate){
			screenPosition.setValue({x: -params.moveX, y: 0});
			Animated.timing(screenPosition, {
				toValue: {
					x: 0,
					y: 0,
				},
				duration: 800,
				useNativeDriver: true
			}).start(() => dispatch(CommonActions.setParams({animate: undefined})))
		}
	})

	
	function handlePublishDoubt(){
		alert("Nenhuma funcionalidade até o momento :(")
	}	

	return(
		<Animated.View style={[{transform: [{translateX: screenPosition.x}]},globalStyles.main]}>
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
					data={peopleQuestions}
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
		</Animated.View>
	)
}

export default connect(state => ({
	storedValues: state
}))(Home);