import {StyleSheet} from "react-native";

export default StyleSheet.create({
	main:{
		flex:1,
	},
	publishForm:{
		flex:0.1,
		padding: 10,
		flexBasis: 130
	},
	publishInput:{
		flex:1,
	},
	publishButtons:{
		flex:0.1,
		flexBasis: 30,
		flexDirection: "row",
	},
	personPublication:{
		flex:1,
		flexDirection: "row",
		padding: 5,
		borderColor: "#C4C4C4",
		borderTopWidth: 1,
	},
	publicationImg:{
		flex:0.4,
		justifyContent: "center",
	},
	publicationText:{
		flex:1.6,
	},
	waitingAnswer:{
		flex:0.2,
		flexBasis: 100
	},
	img:{
		width: 60,
		height: 30
	},
	text:{
		fontSize: 11
	}
})