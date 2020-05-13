import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from "expo";
import {Asset} from "expo-asset";

import Routes from "./src/Routes";

const images = [
	require("./assets/images/people/dd.jpg"),
	require("./assets/images/people/vg.jpg"),
	require("./assets/images/people/kq.jpg"),
	require("./assets/images/people/jw.jpg"),
	require("./assets/sebrae.png"),
	require("./assets/splash.png"),
]

const App = () => {
	const [isLoadingComplete, setIsLoadingComplete] = useState(false)

	async function handleResourcesAsync(){
		const cacheImages = images.map(img =>{
			return Asset.fromModule(img).downloadAsync();
		})

		return await Promise.all(cacheImages);
	}
	if (!isLoadingComplete){
  		return (
  			<AppLoading
  				startAsync={handleResourcesAsync}
  				onError={error => console.warn(error)}
  				onFinish={() => setIsLoadingComplete(true)}
  			/>
  		)
  	}
  return (
    <Routes/>
  );
}

export default App;
