import React,{useState,useEffect,useLayoutEffect} from "react";
import {View,Text,Image,TextInput,TouchableOpacity,FlatList,Animated} from "react-native";
import {useRoute,useNavigation,CommonActions} from "@react-navigation/native";
import styles from "./styles";
import globalStyles from "../../global";
import * as constants from "../../constants";
import {useStore} from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Community = () => {
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
	

	const {mocks: {community}} = constants;
	// formato dos dados, caso a imagem seja uma string base 64 ou link usar usar:
	// imgData: {uri: "string base 64"} no formato 
	// string Base 64 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
	const [peoplePublications,setPeoplePublications] = useState(community);
	
	const {params} = useRoute();
	const {navigate,dispatch} = useNavigation();

	console.log(params);

	const {getState} = useStore();
	
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
		<Animated.View style={[{transform: [{translateX: screenPosition.x}]},globalStyles.main]}>
			<View style={styles.publishForm}>
				<View style={styles.publishInput}>
					<TextInput
						style={{borderWidth: 1,borderColor: "#C4C4C4",borderRadius: 3,padding: 5,textAlignVertical: "top"}}
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
		</Animated.View>
	)
}

export default Community;