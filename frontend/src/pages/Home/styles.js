import {StyleSheet} from "react-native";

export default StyleSheet.create({
	container: {
		flex:1,
	},
	main:{
		height: "78%",
	},
	search: {
		flex: 0.2,
		paddingLeft: 15,
		paddingRight: 15,
		flexWrap: "wrap",
		flexBasis: 200
	},
	searchTitle:{
		flex:0.2,
		flexBasis: 25,
	},
	searchInput: {
		padding: 2,
		paddingLeft: 40,
		borderWidth: 1,
	},
	searchButton: {
		backgroundColor: "#1D66C4",
		padding: 10,
	},
	searchButtonText: {
		color: "white",
		textAlign: "center"
	},
	topics: {
		flex: 1,
		flexBasis:40
	},
	topic:{
		width: 120,
		justifyContent: "center",
		paddingLeft: 6
	},
	imgBackground:{
		flex:1,
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		borderColor: "blue",
		borderLeftWidth: 5,
		borderRadius: 5
	},
	questions: {
		flex: 0.8,
	},
	person:{
		flexDirection: "row",
		borderColor: "#C4C4C4",
		borderTopWidth: 1,
		padding: 10,
		alignItems: "center"
	}
})