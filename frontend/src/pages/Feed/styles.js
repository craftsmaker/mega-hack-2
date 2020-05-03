import {StyleSheet} from "react-native";

export default StyleSheet.create({
	container:{
		flex:1
	},
	main:{
		flex:1,
	},
	publishForm:{
		flex:0.1,
		borderColor: "#C4C4C4",
		borderBottomWidth: 1,
		flexBasis: 140
	},
	inputSelection: {
		flex: 0.1,
		paddingTop: 10,
		paddingRight: 10,
		paddingLeft: 10,
		flexDirection: "row",
		minHeight: 60,
		
	},
	publishSelection: {
		flex:2,
		flexDirection: "row",
		paddingTop: 30,
		paddingBottom: 30,
		paddingRight: 10,
	},
	followingPublications:{
		flex:1,
		backgroundColor: "#F7F7F7"
	},
	publications:{
		flex:8,
	},
	personPublication: {
		flex:1,
		padding: 6,
		shadowColor: "#E3E3E3",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,
		elevation: 2,
		backgroundColor: "#FFFFFF",
		margin: 10,
	}
})