import {StyleSheet} from "react-native";

export default StyleSheet.create({
	container: {
	    flex: 1,
	    backgroundColor: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center',
      width: "100%",
	},
  header:{
    flex:0.3,    
    flexBasis: 100,
    width: "100%",
    alignItems: "center",
  },
  	form: {
      justifyContent: "center",
      textAlign: "center",
  		width: "100%",
      paddingLeft: 20,
      paddingRight: 20,
      
  	},
  	inputForm: {
  		marginBottom: 10,
      
  	},
  	input: {
      borderWidth: 1,
      marginTop: 10,
      paddingLeft: 40,
      paddingTop: 10,
      paddingBottom: 10
    },
    enterBtn: {
      backgroundColor: "blue",
      padding: 15,
      marginBottom: 2,
    },
    enterBtnText: {
      color: "white",
      textAlign: "center"
    },
    action:{
      marginTop: 20
    }
})