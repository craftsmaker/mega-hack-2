import React from "react";
import {View,Text,TextInput,Image,TouchableOpacity,FlatList} from "react-native";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.js";
import globalStyles from "../../global.js"

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
	return(
		<View style={styles.main}>
			<View style={styles.publishForm}>
				<View style={styles.inputSelection}>
					<View style={{flex:0.9,marginRight: 20}}>
						<Image source={require("../Home/images/13.jpg")} style={{width: "100%",height: "100%",borderRadius: 100}}/>
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
					<TouchableOpacity style={[globalStyles.enterBtn, {flex:1,height: "100%",minHeight: 50}]}>
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
						data={[1,2,3]}
						keyExtractor={n => String(n)}
						renderItem={({item}) => (
							<View style={styles.personPublication}>
								<View style={{flex:1,flexDirection: "row",height: 30}}>
									<View style={{flex:0.5}}>
										<Image source={require("../Home/images/13.jpg")} style={{width: "100%", height: "100%", borderRadius: 100}} />
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