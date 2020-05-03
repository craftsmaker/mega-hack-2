import {StyleSheet} from "react-native";

export default StyleSheet.create({
	container: {
	    flex: 1,
	    backgroundColor: '#FFFFFF',
      width: "100%",
	},
  header:{
    flex:1,    
    flexBasis: 100,
    width: "100%",
    alignItems: "center",
  },
  	form: {
      flex:1,
      justifyContent: "center",
      textAlign: "center",
  		width: "100%",
      paddingLeft: 20,
      paddingRight: 20,
      
  	},
  	inputForm: {
      flex:1,
      maxHeight:200,
  	},
    inputSelection: {
      flex:1,
      flexDirection:"row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      borderColor: "#C4C4C4",
      borderWidth: 1,
      borderRadius: 3
    },
  	input: {
      flex:1,
      height: "100%",
      paddingLeft: 0,
      minHeight: 100
    },
    enterBtn: {
      backgroundColor: "#1D66C4",
      padding: 12,
      marginBottom: 2,
      borderRadius: 3
    },
    enterBtnText: {
      color: "white",
      textAlign: "center"
    },
    action:{
      marginTop: 20
    }
})