import {StyleSheet} from "react-native";

export default StyleSheet.create({
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
		height: 60,
		borderColor: "#C4C4C4",
		borderTopWidth: 1,
	},
	publicationImg:{
		flex:0.4,
		justifyContent: "center",
	},
	publicationText:{
		flex:2,
		paddingLeft: 10
	},
	waitingAnswer:{
		flex:0.4,
		flexBasis: 100
	},
	img:{
		width: "100%",
		height: "100%",
		borderRadius: 100
	},
	text:{
		fontSize: 13
	}
})