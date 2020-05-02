import {StyleSheet} from "react-native";

export default StyleSheet.create({
	header: {
		flex:0.1,
		justifyContent: "flex-end",
		flexBasis: 110
	},
	form: {
		justifyContent: "flex-start",
		flexBasis: 350,
		paddingLeft: 40,
		paddingRight: 40
	},
	inputForm: {
		maxHeight: "100%"
	},
	input: {
		borderWidth: 1,
		minHeight: 10,
		paddingLeft: 20,		
		marginBottom: 5
	},
	inputSelection:{
		flex:1
	}
})